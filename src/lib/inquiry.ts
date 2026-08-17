/**
 * 문의 데이터 스키마 및 검증 — 클라이언트/서버 공용
 */

export type InquiryPayload = {
  name: string;
  company: string;
  phone: string;
  email: string;
  language: string;
  service: string;
  schedule: string;
  location: string;
  message: string;
  /** 스팸 봇 트랩 — 사람이 채우면 안 되는 필드 */
  website?: string;
};

export const emptyInquiry: InquiryPayload = {
  name: '',
  company: '',
  phone: '',
  email: '',
  language: '',
  service: '',
  schedule: '',
  location: '',
  message: '',
  website: '',
};

export type InquiryErrors = Partial<Record<keyof InquiryPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

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

  return errors;
}
