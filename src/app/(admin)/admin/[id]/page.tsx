import Link from 'next/link';
import { notFound } from 'next/navigation';
import PostForm from '@/components/board/PostForm';
import { countries } from '@/data/seo-pages';
import { requireAdmin } from '@/lib/board/auth';
import { getPost } from '@/lib/board/db';

export const dynamic = 'force-dynamic';

export default async function EditPost({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const post = await getPost(Number(id), { includeHidden: true });
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/admin" className="text-[0.875rem] text-brand underline underline-offset-4">
        ← 목록으로
      </Link>
      <h1 className="mt-5 text-[1.5rem] font-medium">글 수정</h1>
      <div className="mt-8">
        <PostForm
          countries={countries.map((c) => c.name)}
          today={post.published_at}
          initial={{
            id: post.id,
            title: post.title,
            body: post.body,
            category: post.category,
            published_at: post.published_at,
            is_published: Boolean(post.is_published),
          }}
        />
      </div>
    </main>
  );
}
