import Link from 'next/link';
import PostForm from '@/components/board/PostForm';
import { requireAdmin } from '@/lib/board/auth';
import { countries } from '@/data/seo-pages';

export const dynamic = 'force-dynamic';

const todayKst = () => new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);

export default async function NewPost() {
  await requireAdmin();
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/admin" className="text-[0.875rem] text-brand underline underline-offset-4">
        ← 목록으로
      </Link>
      <h1 className="mt-5 text-[1.5rem] font-medium">새 글 쓰기</h1>
      <div className="mt-8">
        <PostForm countries={countries.map((c) => c.name)} today={todayKst()} />
      </div>
    </main>
  );
}
