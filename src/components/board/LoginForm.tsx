'use client';

import { useActionState } from 'react';
import { loginAction, type FormState } from '@/app/(admin)/admin/actions';

export default function LoginForm() {
  const [state, action, pending] = useActionState<FormState, FormData>(loginAction, {});
  return (
    <form action={action} className="mt-8 space-y-5">
      <label className="block">
        <span className="text-[0.8125rem] font-semibold text-navy/70">비밀번호</span>
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          autoFocus
          className="mt-2 w-full border border-line-strong bg-white px-4 py-3.5 text-[1rem] text-navy focus:border-brand focus:outline-none"
        />
      </label>
      {state.error ? (
        <p role="alert" className="text-[0.875rem] text-red-700">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xs bg-brand-deep px-6 py-4 text-[0.9375rem] font-medium text-white transition-colors hover:bg-brand disabled:opacity-60"
      >
        {pending ? '확인 중…' : '로그인'}
      </button>
    </form>
  );
}
