/**
 * 통역 실적 게시판 — D1 데이터 접근
 * ─────────────────────────────────────────────
 * 글은 Cloudflare D1(binding: DB)에 저장됩니다. 테이블은 migrations/0001_board.sql 입니다.
 * 게시판 페이지는 요청마다 이 DB 를 읽으므로(force-dynamic) 직원이 글을 올리면 바로 반영됩니다.
 */
import { getCloudflareContext } from '@opennextjs/cloudflare';

export const BOARD_CATEGORIES = ['해외 통역', '국내 통역', '번역', '기타'] as const;
export type BoardCategory = (typeof BOARD_CATEGORIES)[number];

export const PAGE_SIZE = 20;

export type BoardPost = {
  id: number;
  title: string;
  body: string;
  category: string;
  published_at: string;
  is_published: number;
  created_at: string;
  updated_at: string;
};

/** workers-types 없이 쓰는 D1 최소 형태 */
type D1Statement = {
  bind: (...values: unknown[]) => D1Statement;
  all: <T>() => Promise<{ results: T[] }>;
  first: <T>() => Promise<T | null>;
  run: () => Promise<{ meta?: { last_row_id?: number; changes?: number } }>;
};
type D1Like = { prepare: (sql: string) => D1Statement };

/** DB 바인딩이 없으면(예: 설정 전) null 을 돌려 화면이 안내 문구를 보여 줍니다. */
export function getDb(): D1Like | null {
  try {
    const env = getCloudflareContext().env as unknown as { DB?: D1Like };
    return env.DB ?? null;
  } catch {
    return null;
  }
}

export type BoardInput = {
  title: string;
  body: string;
  category: string;
  published_at: string;
  is_published: boolean;
};

export function validateBoardInput(input: BoardInput): string | null {
  const title = input.title.trim();
  const body = input.body.trim();
  if (!title) return '제목을 입력해 주세요.';
  if (title.length > 120) return '제목은 120자 이내로 적어 주세요.';
  if (!body) return '내용을 입력해 주세요.';
  if (body.length > 5000) return '내용은 5,000자 이내로 적어 주세요.';
  if (!(BOARD_CATEGORIES as readonly string[]).includes(input.category))
    return '구분을 선택해 주세요.';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.published_at)) return '날짜를 선택해 주세요.';
  return null;
}

export async function listPosts(page: number, opts: { includeHidden?: boolean } = {}) {
  const db = getDb();
  if (!db) return { posts: [] as BoardPost[], total: 0 };
  const where = opts.includeHidden ? '' : 'WHERE is_published = 1';
  const totalRow = await db
    .prepare(`SELECT COUNT(*) AS n FROM board_posts ${where}`)
    .first<{ n: number }>();
  const total = totalRow?.n ?? 0;
  const { results } = await db
    .prepare(
      `SELECT id, title, body, category, published_at, is_published, created_at, updated_at
       FROM board_posts ${where}
       ORDER BY published_at DESC, id DESC LIMIT ? OFFSET ?`,
    )
    .bind(PAGE_SIZE, (Math.max(page, 1) - 1) * PAGE_SIZE)
    .all<BoardPost>();
  return { posts: results, total };
}

export async function getPost(id: number, opts: { includeHidden?: boolean } = {}) {
  const db = getDb();
  if (!db || !Number.isInteger(id) || id < 1) return null;
  const post = await db
    .prepare(
      `SELECT id, title, body, category, published_at, is_published, created_at, updated_at
       FROM board_posts WHERE id = ?`,
    )
    .bind(id)
    .first<BoardPost>();
  if (!post) return null;
  if (!opts.includeHidden && !post.is_published) return null;
  return post;
}

/** 같은 목록 순서에서 바로 앞 · 뒤 글 */
export async function getNeighbors(post: BoardPost) {
  const db = getDb();
  if (!db) return { newer: null, older: null };
  const newer = await db
    .prepare(
      `SELECT id, title FROM board_posts
       WHERE is_published = 1 AND (published_at > ? OR (published_at = ? AND id > ?))
       ORDER BY published_at ASC, id ASC LIMIT 1`,
    )
    .bind(post.published_at, post.published_at, post.id)
    .first<{ id: number; title: string }>();
  const older = await db
    .prepare(
      `SELECT id, title FROM board_posts
       WHERE is_published = 1 AND (published_at < ? OR (published_at = ? AND id < ?))
       ORDER BY published_at DESC, id DESC LIMIT 1`,
    )
    .bind(post.published_at, post.published_at, post.id)
    .first<{ id: number; title: string }>();
  return { newer, older };
}

export async function allPublishedForSitemap() {
  const db = getDb();
  if (!db) return [] as { id: number; updated_at: string }[];
  const { results } = await db
    .prepare(
      'SELECT id, updated_at FROM board_posts WHERE is_published = 1 ORDER BY id DESC LIMIT 5000',
    )
    .all<{ id: number; updated_at: string }>();
  return results;
}

export async function createPost(input: BoardInput) {
  const db = getDb();
  if (!db) throw new Error('DB 가 연결되어 있지 않습니다.');
  const res = await db
    .prepare(
      'INSERT INTO board_posts (title, body, category, published_at, is_published) VALUES (?, ?, ?, ?, ?)',
    )
    .bind(
      input.title.trim(),
      input.body.trim(),
      input.category,
      input.published_at,
      input.is_published ? 1 : 0,
    )
    .run();
  return res.meta?.last_row_id ?? 0;
}

export async function updatePost(id: number, input: BoardInput) {
  const db = getDb();
  if (!db) throw new Error('DB 가 연결되어 있지 않습니다.');
  await db
    .prepare(
      `UPDATE board_posts SET title = ?, body = ?, category = ?, published_at = ?, is_published = ?,
       updated_at = datetime('now') WHERE id = ?`,
    )
    .bind(
      input.title.trim(),
      input.body.trim(),
      input.category,
      input.published_at,
      input.is_published ? 1 : 0,
      id,
    )
    .run();
}

export async function deletePost(id: number) {
  const db = getDb();
  if (!db) throw new Error('DB 가 연결되어 있지 않습니다.');
  await db.prepare('DELETE FROM board_posts WHERE id = ?').bind(id).run();
}

export async function setPublished(id: number, published: boolean) {
  const db = getDb();
  if (!db) throw new Error('DB 가 연결되어 있지 않습니다.');
  await db
    .prepare("UPDATE board_posts SET is_published = ?, updated_at = datetime('now') WHERE id = ?")
    .bind(published ? 1 : 0, id)
    .run();
}
