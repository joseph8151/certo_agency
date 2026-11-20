import Link from 'next/link';
import ConfirmButton from '@/components/board/ConfirmButton';
import LoginForm from '@/components/board/LoginForm';
import { authConfigured, isLoggedIn } from '@/lib/board/auth';
import { getDb, listPosts, PAGE_SIZE } from '@/lib/board/db';
import { deletePostAction, logoutAction, togglePublishedAction } from './actions';

export const dynamic = 'force-dynamic';

type Props = { searchParams: Promise<{ page?: string; saved?: string; deleted?: string }> };

export default async function AdminHome({ searchParams }: Props) {
  const sp = await searchParams;

  if (!(await isLoggedIn())) {
    return (
      <main className="mx-auto max-w-md px-6 py-24">
        <p className="text-[0.75rem] font-semibold tracking-[0.3em] text-navy">CERTO AGENCY</p>
        <h1 className="mt-6 text-[1.75rem] font-medium text-navy">게시판 관리자</h1>
        <p className="mt-3 text-[0.9375rem] text-navy/65">직원만 들어올 수 있습니다.</p>
        {authConfigured() ? (
          <LoginForm />
        ) : (
          <p className="mt-8 border border-line-strong bg-white p-5 text-[0.9375rem] leading-relaxed text-navy/75">
            관리자 비밀번호가 아직 설정되지 않았습니다. 대표(관리자)가 Cloudflare 에 비밀 값 두 개를
            등록해야 로그인이 열립니다. 설정 방법은 설명서 맨 끝 「최초 설정」에 있습니다.
          </p>
        )}
      </main>
    );
  }

  const page = Math.max(Number(sp.page) || 1, 1);
  const dbReady = Boolean(getDb());
  const { posts, total } = await listPosts(page, { includeHidden: true });
  const pages = Math.max(Math.ceil(total / PAGE_SIZE), 1);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-line-strong pb-6">
        <div>
          <p className="text-[0.75rem] font-semibold tracking-[0.3em] text-navy">CERTO AGENCY</p>
          <h1 className="mt-2 text-[1.5rem] font-medium">통역 실적 게시판 관리</h1>
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-[0.875rem]">
          <Link href="/admin/help" className="text-brand underline underline-offset-4">
            사용 방법
          </Link>
          <Link href="/board" target="_blank" className="text-brand underline underline-offset-4">
            게시판 보기
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="text-navy/65 underline underline-offset-4 hover:text-navy"
            >
              로그아웃
            </button>
          </form>
        </nav>
      </header>

      {sp.saved ? (
        <p className="mt-6 border border-brand/30 bg-white px-4 py-3 text-[0.9375rem] text-brand">
          저장되었습니다.
        </p>
      ) : null}
      {sp.deleted ? (
        <p className="mt-6 border border-line-strong bg-white px-4 py-3 text-[0.9375rem]">
          삭제되었습니다.
        </p>
      ) : null}
      {!dbReady ? (
        <p
          role="alert"
          className="mt-6 border border-red-300 bg-white px-4 py-3 text-[0.9375rem] text-red-700"
        >
          데이터베이스에 연결되어 있지 않습니다. 관리자에게 문의하세요.
        </p>
      ) : null}

      <div className="mt-8 flex items-center justify-between">
        <p className="text-[0.9375rem] text-navy/70">전체 {total}건</p>
        <Link
          href="/admin/new"
          className="rounded-xs bg-brand-deep px-6 py-3 text-[0.9375rem] font-medium text-white hover:bg-brand"
        >
          새 글 쓰기
        </Link>
      </div>

      <ul className="mt-5 divide-y divide-line border-y border-line-strong bg-white">
        {posts.length === 0 ? (
          <li className="px-5 py-10 text-center text-[0.9375rem] text-navy/60">
            아직 글이 없습니다. [새 글 쓰기]로 첫 글을 올려 보세요.
          </li>
        ) : null}
        {posts.map((p) => (
          <li key={p.id} className="flex flex-wrap items-center gap-x-5 gap-y-3 px-5 py-4">
            <div className="min-w-0 flex-1">
              <p className="text-[0.75rem] text-navy/55">
                {p.published_at} · {p.category} {p.is_published ? '' : '· 숨김'}
              </p>
              <p className={`mt-1 text-[1rem] ${p.is_published ? 'text-navy' : 'text-navy/45'}`}>
                {p.title}
              </p>
            </div>
            <div className="flex items-center gap-2 text-[0.8125rem]">
              <Link
                href={`/admin/${p.id}`}
                className="border border-line-strong px-3 py-1.5 hover:border-brand hover:text-brand"
              >
                수정
              </Link>
              <form action={togglePublishedAction}>
                <input type="hidden" name="id" value={p.id} />
                <input type="hidden" name="next" value={p.is_published ? '0' : '1'} />
                <button
                  type="submit"
                  className="border border-line-strong px-3 py-1.5 hover:border-brand hover:text-brand"
                >
                  {p.is_published ? '숨기기' : '공개하기'}
                </button>
              </form>
              <form action={deletePostAction}>
                <input type="hidden" name="id" value={p.id} />
                <ConfirmButton
                  message="정말 삭제할까요? 삭제하면 되돌릴 수 없습니다."
                  className="border border-line-strong px-3 py-1.5 text-red-700 hover:border-red-700"
                >
                  삭제
                </ConfirmButton>
              </form>
            </div>
          </li>
        ))}
      </ul>

      {pages > 1 ? (
        <nav className="mt-6 flex flex-wrap gap-2 text-[0.875rem]" aria-label="페이지">
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <Link
              key={n}
              href={`/admin?page=${n}`}
              className={`border px-3 py-1.5 ${n === page ? 'border-brand bg-brand text-white' : 'border-line-strong hover:border-brand'}`}
            >
              {n}
            </Link>
          ))}
        </nav>
      ) : null}
    </main>
  );
}
