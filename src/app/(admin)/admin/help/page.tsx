import Link from 'next/link';
import { boardManual, boardManualTitle } from '@/data/board-manual';
import { requireAdmin } from '@/lib/board/auth';

export const dynamic = 'force-dynamic';

export default async function Help() {
  await requireAdmin();
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/admin" className="text-[0.875rem] text-brand underline underline-offset-4">
        ← 목록으로
      </Link>
      <h1 className="mt-5 text-[1.625rem] font-medium">{boardManualTitle}</h1>

      <div className="mt-10 space-y-12">
        {boardManual.map((s) => (
          <section key={s.title}>
            <h2 className="border-b border-line-strong pb-3 text-[1.1875rem] font-semibold text-navy">
              {s.title}
            </h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="mt-4 text-[0.9375rem] leading-[1.9] text-navy/80">
                {p}
              </p>
            ))}
            {s.steps ? (
              <ol className="mt-4 space-y-3">
                {s.steps.map((x, i) => (
                  <li key={x} className="flex gap-3 text-[0.9375rem] leading-[1.8] text-navy/85">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-deep text-[0.75rem] font-semibold text-white">
                      {i + 1}
                    </span>
                    <span>{x}</span>
                  </li>
                ))}
              </ol>
            ) : null}
            {s.examples ? (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="border border-brand/30 bg-white p-4">
                  <p className="text-[0.8125rem] font-semibold text-brand">좋은 제목</p>
                  <ul className="mt-3 space-y-2 text-[0.875rem] leading-relaxed text-navy/85">
                    {s.examples.good.map((x) => (
                      <li key={x}>✅ {x}</li>
                    ))}
                  </ul>
                </div>
                <div className="border border-red-300 bg-white p-4">
                  <p className="text-[0.8125rem] font-semibold text-red-700">나쁜 제목</p>
                  <ul className="mt-3 space-y-2 text-[0.875rem] leading-relaxed text-navy/85">
                    {s.examples.bad.map((x) => (
                      <li key={x}>❌ {x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
            {s.bullets ? (
              <ul className="mt-4 space-y-2">
                {s.bullets.map((x) => (
                  <li key={x} className="flex gap-3 text-[0.9375rem] leading-[1.8] text-navy/80">
                    <span
                      aria-hidden="true"
                      className="mt-[0.75em] h-px w-3 shrink-0 bg-brand/60"
                    />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}
