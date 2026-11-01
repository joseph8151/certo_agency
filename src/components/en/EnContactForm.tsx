'use client';

import { useState, type FormEvent } from 'react';
import { enContact, FORMSPREE_ENDPOINT } from '@/data/en/site';

const fieldClass =
  'w-full border-b border-line bg-transparent px-0 py-3.5 text-[0.9375rem] text-navy transition-colors duration-300 placeholder:text-navy/55 hover:border-line-strong focus:border-brand focus:outline-none';
const labelClass = 'block text-[0.75rem] font-semibold tracking-[0.04em] text-navy/70';

const services = [
  'Business meeting interpreter',
  'Trade show / exhibition interpreter',
  'Factory visit / audit interpreter',
  'Conference (simultaneous) interpreting',
  'Escort interpreter for visitors',
  'Remote / video-call interpreter',
  'Document translation',
  'Not sure yet',
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

/**
 * 영문 문의 폼 — Formspree 로 전송합니다.
 * 엔드포인트가 설정되지 않았다면 폼을 숨기고 이메일 안내를 보여 줍니다.
 */
export default function EnContactForm({ source = 'en-contact' }: { source?: string }) {
  const [status, setStatus] = useState<Status>('idle');

  if (!FORMSPREE_ENDPOINT) {
    return (
      <div className="border border-line bg-white p-8">
        <p className="text-[1.0625rem] font-medium text-navy">Contact us by email</p>
        <p className="mt-3 text-[0.9375rem] leading-[1.85] text-navy/70">
          Tell us your dates, city, languages and what the meeting is about, and we will confirm
          availability and reply with a quote.
        </p>
        <a
          href={`mailto:${enContact.email}`}
          data-cta="en-form-email"
          className="mt-6 inline-block border-b border-brand pb-1 text-[0.9375rem] font-medium text-brand"
        >
          {enContact.email}
        </a>
      </div>
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    // 봇이 채우는 숨김 필드 — 값이 있으면 조용히 성공 처리하고 보내지 않습니다.
    if (data.get('_gotcha')) {
      setStatus('sent');
      return;
    }
    setStatus('sending');
    try {
      data.append('_subject', 'New inquiry from certo-agency.com/en');
      data.append('source', source);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="border border-brand/30 bg-white p-8">
        <p className="text-[1.0625rem] font-medium text-navy">Thank you — we have your request.</p>
        <p className="mt-3 text-[0.9375rem] leading-[1.85] text-navy/70">
          We will check interpreter availability for your dates and reply by email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate={false}>
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Name *</span>
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Company</span>
          <input name="company" autoComplete="organization" className={fieldClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Email *</span>
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Phone / WhatsApp</span>
          <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </label>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Service *</span>
          <select name="service" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Languages (e.g. Korean ↔ English)</span>
          <input name="languages" className={fieldClass} placeholder="Korean ↔ English" />
        </label>
        <label className="block">
          <span className={labelClass}>City / venue in Korea</span>
          <input
            name="location"
            className={fieldClass}
            placeholder="Seoul, COEX / Busan / Online"
          />
        </label>
        <label className="block">
          <span className={labelClass}>Number of attendees</span>
          <input name="attendees" className={fieldClass} placeholder="e.g. 5 people" />
        </label>
        <label className="block">
          <span className={labelClass}>Start date</span>
          <input name="start_date" type="date" className={fieldClass} />
        </label>
        <label className="block">
          <span className={labelClass}>End date</span>
          <input name="end_date" type="date" className={fieldClass} />
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>Tell us about the meeting *</span>
        <textarea
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="Industry, who you are meeting, topics, and any materials you can share in advance."
        />
      </label>

      {/* 스팸 방지용 숨김 필드 */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'sending'}
          data-cta="en-form-submit"
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-xs bg-brand-deep px-9 py-4 text-[0.9375rem] font-medium text-white transition-colors duration-500 ease-certo hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === 'sending' ? 'Sending…' : 'Send request'}
          <span aria-hidden="true">→</span>
        </button>
        <p className="text-[0.75rem] text-navy/60">
          Your details are used only to respond to this request.
        </p>
      </div>

      {status === 'error' ? (
        <p role="alert" className="text-[0.875rem] text-red-700">
          Something went wrong. Please try again or email us at{' '}
          <a href={`mailto:${enContact.email}`} className="underline">
            {enContact.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
