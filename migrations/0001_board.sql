-- 통역 실적 게시판 — Cloudflare D1
-- 적용: npx wrangler d1 execute certo-agency-board --remote --file migrations/0001_board.sql
CREATE TABLE IF NOT EXISTS board_posts (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  title        TEXT    NOT NULL,
  body         TEXT    NOT NULL,
  category     TEXT    NOT NULL DEFAULT '기타',
  published_at TEXT    NOT NULL,            -- YYYY-MM-DD (화면에 보이는 날짜)
  is_published INTEGER NOT NULL DEFAULT 1,  -- 1 공개, 0 숨김
  created_at   TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at   TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_board_posts_list
  ON board_posts (is_published, published_at DESC, id DESC);
