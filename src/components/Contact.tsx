'use client';

import { useId, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import {
  industryOptions,
  interpretationTypeOptions,
  languageOptions,
  serviceOptions,
} from '@/data/content';
import { contactInfo, hasPublicContact } from '@/data/site';
import {
  emptyInquiry,
  validateInquiry,
  type InquiryErrors,
  type InquiryPayload,
} from '@/lib/inquiry';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClass =
  'w-full border-b border-line bg-transparent px-0 py-3.5 text-[0.9375rem] text-navy transition-colors duration-300 placeholder:text-navy/55 hover:border-line-strong focus:border-brand focus:outline-none';

export default function Contact() {
  const formId = useId();
  const [values, setValues] = useState<InquiryPayload>(emptyInquiry);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverMessage, setServerMessage] = useState('');
  // 서버가 INQUIRY_DEBUG=1 로 실행 중일 때만 내려오는 실패 사유입니다. (평소에는 빈 값)
  const [serverDebug, setServerDebug] = useState('');

  const update =
    (key: keyof InquiryPayload) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [key]: event.target.value }));
      setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateInquiry(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = document.getElementById(`${formId}-${Object.keys(nextErrors)[0]}`);
      first?.focus();
      first?.scrollIntoView({ block: 'center' });
      return;
    }

    setStatus('submitting');
    setServerMessage('');
    setServerDebug('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrors(result?.errors ?? {});
        setServerMessage(result?.message ?? '문의 접수에 실패했습니다. 잠시 후 다시 시도해 주세요.');
        setServerDebug(result?.debug ? JSON.stringify(result.debug, null, 2) : '');
        setStatus('error');
        return;
      }

      setValues(emptyInquiry);
      setStatus('success');
    } catch {
      setServerMessage('네트워크 오류로 접수하지 못했습니다. 잠시 후 다시 시도해 주세요.');
      setStatus('error');
    }
  };

  const fid = (key: string) => `${formId}-${key}`;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white py-section">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-gutter">
        {/* 좌: 안내 */}
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Contact"
            title={<span id="contact-heading">CERTO에 문의하기</span>}
            lead="프로젝트 내용을 남겨주시면 담당자가 확인 후 적합한 전문가와 견적을 안내드립니다."
          />

          <Reveal delay={160}>
            {hasPublicContact ? (
              <dl className="mt-12 space-y-6 border-t border-line pt-8">
                {contactInfo.email ? (
                  <div>
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand">
                      Email
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={`mailto:${contactInfo.email}`}
                        data-cta="contact-email"
                        className="link-underline text-[0.9375rem] text-navy"
                      >
                        {contactInfo.email}
                      </a>
                    </dd>
                  </div>
                ) : null}

                {contactInfo.phone ? (
                  <div>
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand">
                      Phone
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                        data-cta="contact-phone"
                        className="link-underline text-[0.9375rem] text-navy"
                      >
                        {contactInfo.phone}
                      </a>
                      {contactInfo.phoneHours ? (
                        <span className="mt-1 block text-[0.8125rem] text-navy/65">
                          {contactInfo.phoneHours}
                        </span>
                      ) : null}
                    </dd>
                  </div>
                ) : null}

                {contactInfo.address ? (
                  <div>
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand">
                      Office
                    </dt>
                    <dd className="mt-2 text-[0.9375rem] leading-relaxed text-navy/75">
                      {contactInfo.address}
                      {contactInfo.addressDetail ? (
                        <span className="block text-navy/65">{contactInfo.addressDetail}</span>
                      ) : null}
                    </dd>
                  </div>
                ) : null}
              </dl>
            ) : (
              <div className="mt-12 border-t border-line pt-8">
                <p className="eyebrow">Before You Send</p>
                <p className="mt-4 text-[0.9375rem] leading-[1.85] text-pretty text-navy/70">
                  확정된 정보가 없어도 괜찮습니다. 언어와 대략적인 일정만 알려주셔도 가능 여부를 먼저
                  확인해 드립니다.
                </p>
                <p className="mt-5 text-[0.875rem] leading-relaxed text-navy/65">
                  견적 확인만을 위한 문의도 편하게 남겨주세요.
                </p>
              </div>
            )}
          </Reveal>
        </div>

        {/* 우: 폼 */}
        <div className="lg:col-span-7 lg:col-start-6">
          {status === 'success' ? (
            <div
              role="status"
              className="flex h-full min-h-[340px] flex-col items-start justify-center border border-line bg-ivory-light p-10 sm:p-14"
            >
              <p className="eyebrow">Received</p>
              <h3 className="mt-6 text-title font-semibold text-navy">문의가 접수되었습니다.</h3>
              <p className="mt-5 max-w-md text-[0.9375rem] leading-[1.9] text-navy/65">
                담당자가 프로젝트 내용을 확인한 후 안내드립니다.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-9 text-[0.875rem] font-medium text-brand underline underline-offset-4"
              >
                새 문의 작성하기
              </button>
            </div>
          ) : (
            <Reveal>
              <form onSubmit={handleSubmit} noValidate>
                {/* 봇 트랩 */}
                <div aria-hidden="true" className="hidden">
                  <label htmlFor={fid('website')}>Website</label>
                  <input
                    id={fid('website')}
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.website}
                    onChange={update('website')}
                  />
                </div>

                {/* ── 의뢰인 정보 ───────────────── */}
                <FieldGroup label="의뢰인 정보">
                  <Field
                    id={fid('name')}
                    label="의뢰인 / 회사명"
                    required
                    error={errors.name}
                    className="sm:col-span-2"
                  >
                    <input
                      id={fid('name')}
                      name="name"
                      type="text"
                      autoComplete="organization"
                      className={fieldClass}
                      placeholder="예) 체르토 주식회사 / 홍길동"
                      value={values.name}
                      onChange={update('name')}
                      aria-invalid={Boolean(errors.name)}
                    />
                  </Field>

                  <Field id={fid('phone')} label="연락처" required error={errors.phone}>
                    <input
                      id={fid('phone')}
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      className={fieldClass}
                      placeholder="010-0000-0000"
                      value={values.phone}
                      onChange={update('phone')}
                      aria-invalid={Boolean(errors.phone)}
                    />
                  </Field>

                  <Field id={fid('email')} label="이메일" required error={errors.email}>
                    <input
                      id={fid('email')}
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={fieldClass}
                      placeholder="name@company.com"
                      value={values.email}
                      onChange={update('email')}
                      aria-invalid={Boolean(errors.email)}
                    />
                  </Field>
                </FieldGroup>

                {/* ── 프로젝트 정보 ─────────────── */}
                <FieldGroup label="프로젝트 정보" hint="확정되지 않은 항목은 비워두셔도 됩니다.">
                  <Field id={fid('service')} label="서비스" required error={errors.service}>
                    <select
                      id={fid('service')}
                      name="service"
                      className={fieldClass}
                      value={values.service}
                      onChange={update('service')}
                      aria-invalid={Boolean(errors.service)}
                    >
                      <option value="">선택해 주세요</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field id={fid('interpretationType')} label="통역 방식">
                    <select
                      id={fid('interpretationType')}
                      name="interpretationType"
                      className={fieldClass}
                      value={values.interpretationType}
                      onChange={update('interpretationType')}
                    >
                      <option value="">선택해 주세요</option>
                      {interpretationTypeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field id={fid('language')} label="필요한 언어" className="sm:col-span-2">
                    <input
                      id={fid('language')}
                      name="language"
                      type="text"
                      list={`${formId}-language-options`}
                      className={fieldClass}
                      placeholder="예) 한국어 ↔ 영어 / 영어 · 일본어 동시 필요"
                      value={values.language}
                      onChange={update('language')}
                    />
                    {/* 자주 쓰는 언어는 제안하되, 다국어 프로젝트를 위해 직접 입력도 허용합니다. */}
                    <datalist id={`${formId}-language-options`}>
                      {languageOptions.map((option) => (
                        <option key={option} value={option} />
                      ))}
                    </datalist>
                  </Field>

                  <Field id={fid('country')} label="국가 · 지역">
                    <input
                      id={fid('country')}
                      name="country"
                      type="text"
                      className={fieldClass}
                      placeholder="예) 대한민국 / 독일 / 미국"
                      value={values.country}
                      onChange={update('country')}
                    />
                  </Field>

                  <Field id={fid('location')} label="장소 (도시 · 상세)">
                    <input
                      id={fid('location')}
                      name="location"
                      type="text"
                      className={fieldClass}
                      placeholder="예) 서울 코엑스 / 프랑크푸르트 / 온라인"
                      value={values.location}
                      onChange={update('location')}
                    />
                  </Field>

                  <Field id={fid('startDate')} label="시작일">
                    <input
                      id={fid('startDate')}
                      name="startDate"
                      type="date"
                      className={fieldClass}
                      value={values.startDate}
                      onChange={update('startDate')}
                    />
                  </Field>

                  <Field id={fid('endDate')} label="종료일" error={errors.endDate}>
                    <input
                      id={fid('endDate')}
                      name="endDate"
                      type="date"
                      className={fieldClass}
                      value={values.endDate}
                      onChange={update('endDate')}
                      aria-invalid={Boolean(errors.endDate)}
                    />
                  </Field>

                  <Field id={fid('time')} label="시간">
                    <input
                      id={fid('time')}
                      name="time"
                      type="text"
                      className={fieldClass}
                      placeholder="예) 09:00 ~ 18:00 / 오전 반일"
                      value={values.time}
                      onChange={update('time')}
                    />
                  </Field>

                  <Field id={fid('headcount')} label="참석 인원">
                    <input
                      id={fid('headcount')}
                      name="headcount"
                      type="text"
                      className={fieldClass}
                      placeholder="예) 5명 / 임원 3명 포함"
                      value={values.headcount}
                      onChange={update('headcount')}
                    />
                  </Field>

                  <Field id={fid('industry')} label="산업 분야" className="sm:col-span-2">
                    <select
                      id={fid('industry')}
                      name="industry"
                      className={fieldClass}
                      value={values.industry}
                      onChange={update('industry')}
                    >
                      <option value="">선택해 주세요</option>
                      {industryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                </FieldGroup>

                {/* ── 프로젝트 내용 ─────────────── */}
                <FieldGroup label="프로젝트 내용">
                  <Field
                    id={fid('message')}
                    label="상세 내용"
                    required
                    error={errors.message}
                    className="sm:col-span-2"
                  >
                    <textarea
                      id={fid('message')}
                      name="message"
                      rows={5}
                      className={`${fieldClass} resize-y`}
                      placeholder="행사 성격, 참석자 구성, 다뤄질 주제, 문서 분량, 사전 자료 유무 등 알고 계신 내용을 적어주세요."
                      value={values.message}
                      onChange={update('message')}
                      aria-invalid={Boolean(errors.message)}
                    />
                  </Field>
                </FieldGroup>

                {status === 'error' && serverMessage ? (
                  <div className="mt-8">
                    <p role="alert" className="text-[0.875rem] text-[#B03A2E]">
                      {serverMessage}
                    </p>
                    {serverDebug ? (
                      <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-all border border-line bg-ivory-light p-4 text-[0.75rem] leading-relaxed text-navy/70">
                        {serverDebug}
                      </pre>
                    ) : null}
                  </div>
                ) : null}

                <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    data-cta="contact-submit"
                    disabled={status === 'submitting'}
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-xs bg-brand px-9 py-4 text-[0.9375rem] font-medium text-white transition-colors duration-500 ease-certo hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {status === 'submitting' ? '접수 중…' : 'CERTO에 문의하기'}
                    <span aria-hidden="true">→</span>
                  </button>

                  <p className="text-[0.75rem] leading-relaxed text-navy/65">
                    보내주신 정보는 프로젝트 상담 목적으로만 사용됩니다.
                  </p>
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

/** 입력 항목 묶음 — 필드가 많아 한 덩어리로 보이지 않도록 구분합니다. */
function FieldGroup({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="mt-12 first:mt-0">
      <legend className="mb-1 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand">
          {label}
        </span>
        {hint ? <span className="text-[0.75rem] text-navy/65">{hint}</span> : null}
      </legend>
      <div className="grid gap-x-8 gap-y-7 border-t border-line pt-7 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

function Field({
  id,
  label,
  required,
  error,
  className = '',
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-1 block text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-navy/70"
      >
        {label}
        {required ? <span className="ml-1 text-brand">*</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-[0.8125rem] text-[#B03A2E]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
