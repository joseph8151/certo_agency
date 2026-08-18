/**
 * 문의 데이터 스키마 및 검증 — 클라이언트/서버 공용
 * ─────────────────────────────────────────────
 * 필드를 추가할 때는
 *   1) InquiryPayload 와 emptyInquiry 에 키를 추가하고
 *   2) src/lib/notify.ts 의 FIELD_LABELS 에 라벨을 추가하고
 *   3) src/components/Contact.tsx 에 입력 UI 를 추가합니다.
 * 세 곳을 모두 고쳐야 메일에 값이 담깁니다.
 */

export type InquiryPayload = {
  /* 의뢰인 */
  name: string;
  phone: string;
  email: string;

  /* 프로젝트 */
  service: string;
  interpretationType: string;
  language: string;
  country: string;
  location: string;
  startDate: string;
  endDate: string;
  time: string;
  headcount: string;
  industry: string;

  /* 상세 */
  message: string;

  /** 스팸 봇 트랩 — 사람이 채우면 안 되는 필드 */
  website?: string;
};

export const emptyInquiry: InquiryPayload = {
  name: '',
  phone: '',
  email: '',
  service: '',
  interpretationType: '',
  language: '',
  country: '',
  location: '',
  startDate: '',
  endDate: '',
  time: '',
  headcount: '',
  industry: '',
  message: '',
  website: '',
};

export type InquiryErrors = Partial<Record<keyof InquiryPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * 필수 항목은 최소한으로 둡니다.
 * "확정된 정보가 없어도 괜찮습니다" 라고 안내하고 있으므로
 * 일정·장소 등은 비워둔 채로도 접수되어야 합니다.
 */
export function validateInquiry(data: InquiryPayload): InquiryErrors {
  const errors: InquiryErrors = {};

  if (!data.name.trim()) errors.name = '의뢰인 또는 회사명을 입력해 주세요.';
  if (!data.email.trim()) {
    errors.email = '이메일을 입력해 주세요.';
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = '이메일 형식을 확인해 주세요.';
  }
  if (!data.phone.trim()) errors.phone = '연락처를 입력해 주세요.';
  if (!data.service.trim()) errors.service = '서비스를 선택해 주세요.';

  if (!data.message.trim()) {
    errors.message = '프로젝트 내용을 입력해 주세요.';
  } else if (data.message.trim().length < 10) {
    errors.message = '조금 더 자세히 알려주시면 정확하게 안내드릴 수 있습니다.';
  }

  // 종료일이 시작일보다 빠른 경우
  if (data.startDate && data.endDate && data.endDate < data.startDate) {
    errors.endDate = '종료일이 시작일보다 빠릅니다.';
  }

  return errors;
}
