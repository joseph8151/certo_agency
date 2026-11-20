'use client';

import Link from 'next/link';
import { useActionState, useState } from 'react';
import { savePostAction, type FormState } from '@/app/(admin)/admin/actions';
import { BOARD_CATEGORIES } from '@/lib/board/db';

type Props = {
  countries: string[];
  initial?: {
    id?: number;
    title: string;
    body: string;
    category: string;
    published_at: string;
    is_published: boolean;
  };
  today: string;
};

const input =
  'mt-2 w-full border border-line-strong bg-white px-4 py-3 text-[0.9375rem] text-navy focus:border-brand focus:outline-none';
const label = 'block text-[0.8125rem] font-semibold text-navy/70';

/** 제목 도우미 — 칸을 채우면 검색에 잘 잡히는 제목 형식으로 조립해 줍니다. */
function TitleHelper({
  countries,
  onUse,
}: {
  countries: string[];
  onUse: (title: string) => void;
}) {
  const [kind, setKind] = useState<'해외' | '국내'>('해외');
  const [client, setClient] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [work, setWork] = useState('');
  const [language, setLanguage] = useState('');

  const parts =
    kind === '해외'
      ? [client, country, city, '현지', work, language, '통역 업무 완료']
      : [client, '국내', city, work, language, '통역 업무 완료'];
  const title = parts
    .map((p) => p.trim())
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ');

  return (
    <details className="border border-line bg-white p-5">
      <summary className="cursor-pointer text-[0.9375rem] font-semibold text-brand">
        제목 도우미 (칸을 채우면 제목이 만들어집니다)
      </summary>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className={label}>
          구분
          <select
            value={kind}
            onChange={(e) => setKind(e.target.value as '해외' | '국내')}
            className={input}
          >
            <option value="해외">해외 현지 통역</option>
            <option value="국내">국내 통역</option>
          </select>
        </label>
        <label className={label}>
          발주처 (예: 서울시청, 대기업 제조사)
          <input value={client} onChange={(e) => setClient(e.target.value)} className={input} />
        </label>
        {kind === '해외' ? (
          <label className={label}>
            국가
            <select value={country} onChange={(e) => setCountry(e.target.value)} className={input}>
              <option value="">선택</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        ) : null}
        <label className={label}>
          도시 · 지역 (예: 도쿄, 판교)
          <input value={city} onChange={(e) => setCity(e.target.value)} className={input} />
        </label>
        <label className={label}>
          업무 내용 (예: 기관 방문, 바이어 미팅, 공장 실사)
          <input value={work} onChange={(e) => setWork(e.target.value)} className={input} />
        </label>
        <label className={label}>
          언어 (예: 일본어, 영어)
          <input value={language} onChange={(e) => setLanguage(e.target.value)} className={input} />
        </label>
      </div>
      <p className="mt-5 text-[0.875rem] text-navy/70">
        미리보기: <strong className="text-navy">{title}</strong>
      </p>
      <button
        type="button"
        onClick={() => onUse(title)}
        className="mt-4 rounded-xs border border-brand px-5 py-2.5 text-[0.875rem] font-medium text-brand hover:bg-brand hover:text-white"
      >
        이 제목 사용하기
      </button>
    </details>
  );
}

export default function PostForm({ countries, initial, today }: Props) {
  const [state, action, pending] = useActionState<FormState, FormData>(savePostAction, {});
  const [title, setTitle] = useState(initial?.title ?? '');

  return (
    <form action={action} className="space-y-7">
      {initial?.id ? <input type="hidden" name="id" value={initial.id} /> : null}

      <TitleHelper countries={countries} onUse={setTitle} />

      <label className={label}>
        제목 <span className="text-red-700">*</span>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={120}
          required
          placeholder="예) 한국도로교통공단 스페인 바르셀로나 현지 교통안전 선진사례조사 스페인어 통역 업무 완료"
          className={input}
        />
        <span className="mt-1.5 block text-[0.8125rem] font-normal text-navy/55">
          국가 · 도시 · 언어 · ‘통역’ 이 제목에 들어가면 검색에 잘 잡힙니다. ({title.length}/120자)
        </span>
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className={label}>
          구분 <span className="text-red-700">*</span>
          <select name="category" defaultValue={initial?.category ?? '해외 통역'} className={input}>
            {BOARD_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className={label}>
          날짜 (화면에 보이는 날짜) <span className="text-red-700">*</span>
          <input
            type="date"
            name="published_at"
            defaultValue={initial?.published_at ?? today}
            required
            className={input}
          />
        </label>
      </div>

      <label className={label}>
        내용 <span className="text-red-700">*</span>
        <textarea
          name="body"
          defaultValue={initial?.body}
          required
          rows={12}
          maxLength={5000}
          placeholder={
            '업무 개요, 현지 일정, 통역 분야, 참석 규모, 진행 후기 등을 적어 주세요.\n\n※ 고객사 이름과 개인정보는 허락받은 경우에만 적고, 아니면 *** 로 가려 주세요.'
          }
          className={`${input} leading-relaxed`}
        />
      </label>

      <label className="flex items-center gap-3 text-[0.9375rem] text-navy">
        <input
          type="checkbox"
          name="is_published"
          defaultChecked={initial ? initial.is_published : true}
          className="h-4 w-4 accent-brand"
        />
        공개 (체크를 풀면 저장만 되고 사이트에는 보이지 않습니다)
      </label>

      {state.error ? (
        <p role="alert" className="text-[0.9375rem] text-red-700">
          {state.error}
        </p>
      ) : null}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-xs bg-brand-deep px-8 py-3.5 text-[0.9375rem] font-medium text-white hover:bg-brand disabled:opacity-60"
        >
          {pending ? '저장 중…' : '저장하기'}
        </button>
        <Link
          href="/admin"
          className="rounded-xs border border-line-strong px-8 py-3.5 text-[0.9375rem] text-navy hover:border-brand"
        >
          취소
        </Link>
      </div>
    </form>
  );
}
