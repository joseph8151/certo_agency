/** 전화번호를 tel: 링크용 숫자(+ 포함)로만 정리합니다. 번호가 없으면 빈 문자열. */
export const telHref = (phone: string) => {
  const digits = phone.replace(/[^0-9+]/g, '');
  return digits ? `tel:${digits}` : '';
};
