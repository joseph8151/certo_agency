/**
 * 주제별 페이지 — 문서 번역, 비용과 견적, 업체 선택
 * ─────────────────────────────────────────────
 * 금액은 pricing.ts 에 이미 공개된 구간만 가져다 씁니다. 여기서 새 숫자를 만들지 않습니다.
 * 동시통역 · 법률 · 의료처럼 pricing.ts 에 없는 구간은 "일정과 범위에 따라 별도 견적" 으로 적습니다.
 */
import { pricingPlans } from './pricing';
import type { TopicData } from './topic-data-types';

const plan = (id: string) => {
  const p = pricingPlans.find((x) => x.id === id);
  return p ? `${p.name} ${p.price}${p.unit}` : '';
};

export const docTopics: TopicData[] = [
  {
    slug: 'company-document-translation',
    group: 'document',
    name: '기업 문서 번역',
    h1: '기업 문서 번역과 전문 번역업체',
    alsoSearched: ['전문 번역업체', '비즈니스 문서 번역', '다국어 번역', '기업 번역'],
    lead: '기업 문서 번역은 계약, 제안, 보고, 기술 자료처럼 회사가 외부에 내놓는 문서를 읽는 사람의 언어와 업계 표현에 맞춰 옮기는 서비스입니다.',
    itemsHeading: '기업 문서의 종류',
    items: [
      { title: '거래 · 계약 문서', body: '계약서, 협약서, 견적서처럼 조건이 담긴 문서는 용어와 숫자의 일관성이 우선입니다.' },
      { title: '소개 · 제안 문서', body: '회사소개서, 제안서, 발표 자료는 읽는 사람이 이해하기 쉬운 문체로 다듬습니다.' },
      { title: '운영 · 기술 문서', body: '매뉴얼, 절차서, 회의록처럼 내부와 협력사가 함께 쓰는 문서입니다.' },
    ],
    notes: [
      { label: '용도 먼저', body: '제출용인지 참고용인지에 따라 번역 수준과 인증 필요 여부가 달라집니다.' },
      { label: '용어집', body: '반복해서 쓰는 용어는 용어집으로 정해 두면 이후 문서와 일관성을 유지할 수 있습니다.' },
    ],
    faqs: [
      { q: '번역 기간은 얼마나 걸리나요?', a: '분량과 분야, 언어에 따라 달라 파일을 보고 일정을 안내드립니다.' },
      { q: '번역 후 검수도 해 주나요?', a: '검수와 교정을 번역과 함께 접수할 수 있습니다.' },
    ],
    related: ['contract-translation', 'technical-document-translation', 'proofreading-review', 'translation-quote'],
    parent: 'translation',
  },
  {
    slug: 'contract-translation',
    group: 'document',
    name: '계약서 번역',
    h1: '계약서 번역과 NDA 번역',
    alsoSearched: ['NDA 번역', '비밀유지계약서 번역', '영문 계약서 번역', '계약서 검토 번역', '공급계약 번역'],
    lead: '계약서 번역은 조항의 범위와 의무, 책임을 정확히 옮겨야 하는 문서로, 한 단어 차이가 분쟁의 원인이 될 수 있어 용어 통일과 검수가 중요합니다.',
    itemsHeading: '계약서 번역에서 확인하는 것',
    items: [
      { title: '조항별 용어 통일', body: '책임, 보증, 해지처럼 같은 개념은 문서 전체에서 같은 말로 옮깁니다.' },
      { title: '숫자와 날짜', body: '금액, 비율, 기간은 원문과 한 번 더 대조합니다.' },
      { title: 'NDA와 부속 문서', body: '비밀유지계약과 부속 합의서도 같은 용어 기준으로 번역합니다.' },
    ],
    notes: [
      { label: '법률 자문이 아닙니다', body: '번역은 문서 내용을 옮기는 일이며 계약의 법적 효력이나 해석은 변호사의 영역입니다.' },
      { label: '원본 우선', body: '대부분의 계약은 원본 언어가 기준입니다. 번역본의 효력은 계약서에 명시된 조항을 확인하세요.' },
    ],
    faqs: [
      { q: '계약서 번역도 비밀 유지가 되나요?', a: '필요하면 NDA를 체결하고 파일을 받습니다.' },
      { q: '계약서 번역 견적은 어떻게 받나요?', a: '파일과 언어, 희망 기한을 보내주시면 분량을 보고 견적을 안내드립니다.' },
    ],
    related: ['legal-financial-document-translation', 'proofreading-review', 'legal-interpretation', 'translation-quote'],
    parent: 'translation',
  },
  {
    slug: 'technical-document-translation',
    group: 'document',
    name: '기술문서 번역',
    h1: '기술문서 번역과 매뉴얼 번역',
    alsoSearched: ['매뉴얼 번역', '사양서 번역', '기술 매뉴얼 번역', '설명서 번역', '공정 문서 번역'],
    lead: '기술문서 번역은 제품 사양서, 매뉴얼, 공정 문서를 사용자와 엔지니어가 오해 없이 쓸 수 있도록 옮기는 서비스로, 단위와 부품명, 안전 문구의 정확성이 핵심입니다.',
    itemsHeading: '기술문서의 종류',
    items: [
      { title: '제품 사양서 · 데이터시트', body: '수치와 단위, 허용 오차를 원문과 대조해 옮깁니다.' },
      { title: '사용 · 설치 매뉴얼', body: '작업 순서와 안전 문구를 읽는 사람 기준으로 정리합니다.' },
      { title: '공정 · 품질 문서', body: '절차서와 검사 기준서의 용어를 일관되게 씁니다.' },
    ],
    notes: [
      { label: '용어 통일', body: '부품명과 약어는 용어집으로 정해 두면 여러 문서에서 일관성을 유지할 수 있습니다.' },
      { label: '도면과 이미지', body: '이미지 안의 글자는 편집 파일이 있어야 정확히 바꿀 수 있습니다. 원본 파일을 함께 보내 주세요.' },
    ],
    faqs: [
      { q: '이미지 안의 텍스트도 번역되나요?', a: '편집 가능한 원본 파일이 있으면 가능합니다. 파일 형식을 알려주세요.' },
      { q: '매뉴얼이 여러 언어로 필요합니다.', a: '언어별 인력을 확인한 뒤 일정을 안내드립니다.' },
    ],
    related: ['company-document-translation', 'proofreading-review', 'technical-interpretation', 'quality-audit-interpretation'],
    parent: 'translation',
  },
  {
    slug: 'business-plan-translation',
    group: 'document',
    name: '사업계획서 번역',
    h1: '사업계획서 · 제안서 · 회사소개서 번역',
    alsoSearched: ['제안서 번역', '회사소개서 번역', '영문 사업계획서', '영문 회사소개서', '브로슈어 번역'],
    lead: '사업계획서와 제안서, 회사소개서 번역은 읽는 사람의 설득이 목적이어서, 사실을 정확히 옮기는 데 더해 문장의 톤과 구성을 대상 시장에 맞게 다듬는 일이 중요합니다.',
    itemsHeading: '이런 문서를 다룹니다',
    items: [
      { title: '사업계획서 · 제안서', body: '투자자나 발주처가 읽는 문서로 논리의 흐름과 수치를 정확히 맞춥니다.' },
      { title: '회사소개서 · 브로슈어', body: '회사의 강점이 대상 시장에서 자연스럽게 읽히도록 표현을 조정합니다.' },
      { title: '입찰 · 지원 서류', body: '제출 양식과 분량 제한을 지켜 번역합니다.' },
    ],
    notes: [
      { label: '톤 결정', body: '격식 있는 문체인지 간결한 문체인지에 따라 읽히는 인상이 다릅니다. 읽을 사람을 알려주세요.' },
      { label: '디자인 파일', body: '편집이 끝난 디자인 파일은 글자 길이가 달라져 레이아웃 조정이 필요할 수 있습니다.' },
    ],
    faqs: [
      { q: '제안서 번역 후 디자인도 맞춰 주나요?', a: '번역 텍스트를 전달하는 범위는 기본이며 디자인 조정은 파일 형식을 보고 가능 여부를 안내드립니다.' },
      { q: '영문 회사소개서를 새로 쓰는 것도 가능한가요?', a: '한국어 원문이 있으면 번역하고, 구성 조정이 필요하면 범위를 협의합니다.' },
    ],
    related: ['ir-document-translation', 'company-document-translation', 'proofreading-review'],
    parent: 'translation',
  },
  {
    slug: 'ir-document-translation',
    group: 'document',
    name: 'IR 자료 번역',
    h1: 'IR 자료 · PPT 번역',
    alsoSearched: ['PPT 번역', '발표자료 번역', '파워포인트 번역', '프레젠테이션 번역', '실적 발표 자료 번역'],
    lead: 'IR 자료와 PPT 번역은 투자자와 청중이 읽는 슬라이드를 짧은 문장 구조 그대로 옮기는 서비스로, 글자 수와 레이아웃을 함께 고려해야 합니다.',
    itemsHeading: '다루는 자료',
    items: [
      { title: 'IR 자료 · 실적 발표', body: '재무 수치와 지표 표기를 원문과 대조해 정확히 옮깁니다.' },
      { title: '발표 PPT', body: '슬라이드 안에서 줄 바꿈이 어색하지 않도록 문장 길이를 조정합니다.' },
      { title: '세미나 · 교육 자료', body: '발표자 노트까지 포함해 번역할 수 있습니다.' },
    ],
    notes: [
      { label: '수치 확인', body: '표와 그래프의 숫자는 원문과 한 번 더 대조합니다.' },
      { label: '발표 통역과 함께', body: '발표 당일 통역과 함께 접수하면 번역 용어와 통역 용어를 맞출 수 있습니다.' },
    ],
    faqs: [
      { q: 'PPT 원본 그대로 번역본을 받을 수 있나요?', a: '편집 가능한 파일이 있으면 같은 서식으로 전달할 수 있습니다.' },
      { q: 'IR 발표 통역과 함께 맡길 수 있나요?', a: '투자 미팅 통역과 함께 접수하시면 용어를 맞춰 준비합니다.' },
    ],
    related: ['business-plan-translation', 'investment-interpretation', 'company-document-translation'],
    parent: 'translation',
  },
  {
    slug: 'minutes-translation',
    group: 'document',
    name: '회의록 번역',
    h1: '회의록 번역과 회의 내용 정리',
    alsoSearched: ['회의록 정리', '회의 내용 번역', '미팅 노트 번역', '후속 이메일 번역'],
    lead: '회의록 번역은 미팅에서 오간 결정과 일정, 담당자를 양쪽 언어로 정리해 이후의 오해를 줄이는 서비스로, 통역과 함께 접수하면 같은 용어로 이어집니다.',
    itemsHeading: '회의록 번역에서 다루는 것',
    items: [
      { title: '결정사항 정리', body: '합의된 내용과 보류된 내용을 구분해 정리합니다.' },
      { title: '액션 아이템', body: '담당자와 기한을 표로 정리해 후속 업무가 이어지도록 합니다.' },
      { title: '후속 이메일', body: '미팅 후 보내는 정리 메일을 상대방 언어로 작성합니다.' },
    ],
    notes: [
      { label: '녹음 · 메모 기반', body: '회의 녹음이나 메모가 있으면 번역 정확도가 올라갑니다. 녹음이 가능한지 참석자 동의를 먼저 확인하세요.' },
      { label: '요약 범위', body: '전체 번역인지 요약인지에 따라 소요 시간이 다릅니다. 범위를 정해 주세요.' },
    ],
    faqs: [
      { q: '통역한 미팅의 회의록도 받을 수 있나요?', a: '프리미엄 이상 구성에서 주요 결정사항 정리를 지원합니다.' },
      { q: '회의록 번역은 얼마나 걸리나요?', a: '분량에 따라 달라 자료를 보고 안내드립니다.' },
    ],
    related: ['company-document-translation', 'business-meeting-interpretation', 'proofreading-review'],
    parent: 'translation',
  },
  {
    slug: 'medical-document-translation',
    group: 'document',
    name: '의학 논문 번역',
    h1: '의학 논문 번역과 의료 문서 번역',
    alsoSearched: ['의학 번역', '의료 문서 번역', '논문 번역', '임상시험 문서 번역', '의약품 번역'],
    lead: '의학 논문과 의료 문서 번역은 진단명, 약품명, 시험 결과를 한 글자도 어긋나지 않게 옮겨야 하는 서비스로, 분야 용어 경험과 이중 검수가 중요합니다.',
    itemsHeading: '다루는 문서',
    items: [
      { title: '학술 논문', body: '초록과 본문, 참고문헌 표기를 학술 형식에 맞춰 번역합니다.' },
      { title: '임상시험 · 제약 문서', body: '시험 계획서와 동의서, 보고서의 용어를 일관되게 씁니다.' },
      { title: '의료기기 · 허가 자료', body: '기기 사양과 시험 결과를 정확히 옮깁니다.' },
    ],
    notes: [
      { label: '게재용 교정', body: '학술지에 게재할 논문은 번역과 별도로 원어민 교정이 필요할 수 있습니다.' },
      { label: '자문이 아닙니다', body: '번역은 내용을 옮기는 일이며 임상적 판단이나 의학적 자문이 아닙니다.' },
    ],
    faqs: [
      { q: '논문 번역 후 학술지 투고용 교정이 가능한가요?', a: '번역과 영문 교정을 함께 접수할 수 있습니다. 투고 대상 학술지를 알려주세요.' },
      { q: '임상시험 동의서 번역은요?', a: '규정에 따라 인증이나 심의 절차가 필요할 수 있어 용도를 먼저 알려주세요.' },
    ],
    related: ['pharma-interpretation', 'medical-interpretation', 'proofreading-review', 'academic-interpretation'],
    parent: 'translation',
  },
  {
    slug: 'legal-financial-document-translation',
    group: 'document',
    name: '법률 문서 번역',
    h1: '법률 문서 · 금융 문서 번역',
    alsoSearched: ['금융 문서 번역', '재무제표 번역', '감사보고서 번역', '정관 번역', '법률 번역'],
    lead: '법률과 금융 문서 번역은 정관, 약관, 재무제표, 감사보고서처럼 형식과 용어가 정해진 문서를 제출 기관과 독자의 기준에 맞춰 옮기는 서비스입니다.',
    itemsHeading: '다루는 문서',
    items: [
      { title: '정관 · 약관 · 등기 서류', body: '법인 서류의 정해진 표현에 맞춰 번역합니다.' },
      { title: '재무제표 · 감사보고서', body: '계정과목과 수치를 대조해 정확히 옮깁니다.' },
      { title: '투자 · 금융 계약', body: '금융 상품과 조건을 일관된 용어로 정리합니다.' },
    ],
    notes: [
      { label: '제출처 확인', body: '공증이나 인증이 필요한 문서는 제출 기관의 요건을 먼저 확인해야 합니다.' },
      { label: '자문이 아닙니다', body: '번역은 문서의 내용을 옮기는 일이며 법률·회계 자문이 아닙니다.' },
    ],
    faqs: [
      { q: '공증이 필요한 번역도 가능한가요?', a: '제출 기관의 요건을 확인한 뒤 가능한 방식을 안내드립니다.' },
      { q: '재무제표 번역 견적은 어떻게 받나요?', a: '파일과 언어, 희망 기한을 보내주세요.' },
    ],
    related: ['contract-translation', 'finance-interpretation', 'legal-interpretation', 'translation-quote'],
    parent: 'translation',
  },
  {
    slug: 'patent-translation',
    group: 'document',
    name: '특허 번역',
    h1: '특허 번역',
    alsoSearched: ['특허 명세서 번역', '특허 문서 번역', '청구항 번역', '출원 서류 번역'],
    lead: '특허 번역은 청구항 하나가 권리 범위를 정하는 문서로, 문장의 의미뿐 아니라 구조와 용어까지 원문과 일치해야 하는 번역입니다.',
    itemsHeading: '특허 번역에서 중요한 것',
    items: [
      { title: '청구항의 구조', body: '권리 범위를 결정하는 청구항은 원문 구조를 그대로 따릅니다.' },
      { title: '기술 용어 통일', body: '명세서 전체에서 같은 구성 요소는 같은 이름으로 옮깁니다.' },
      { title: '도면 부호', body: '도면의 부호와 설명을 일치시킵니다.' },
    ],
    notes: [
      { label: '출원 국가', body: '출원 국가의 요건에 따라 표기와 형식이 다릅니다. 출원 국가를 알려주세요.' },
      { label: '변리사 검토', body: '특허 번역은 변리사의 검토 과정이 함께 필요한 경우가 많습니다.' },
    ],
    faqs: [
      { q: '특허 번역은 기술 분야를 가리나요?', a: '기술 분야에 따라 가능한 인력이 다릅니다. 분야와 분량을 알려주세요.' },
      { q: '번역 후 변리사 검토를 받아야 하나요?', a: '출원용 문서는 변리사 검토를 권합니다.' },
    ],
    related: ['technical-document-translation', 'legal-financial-document-translation', 'proofreading-review'],
    parent: 'translation',
  },
  {
    slug: 'website-translation',
    group: 'document',
    name: '홈페이지 번역',
    h1: '홈페이지 다국어 번역',
    alsoSearched: ['웹사이트 번역', '홈페이지 영문 번역', '다국어 홈페이지', '쇼핑몰 번역', '앱 번역'],
    lead: '홈페이지 번역은 메뉴와 본문, 버튼 문구까지 방문자의 언어로 옮겨 해외 고객이 불편 없이 정보를 얻도록 하는 서비스로, 기술적 반영 방식도 함께 정해야 합니다.',
    itemsHeading: '홈페이지 번역에서 정하는 것',
    items: [
      { title: '번역 범위', body: '메뉴, 본문, 푸터, 오류 메시지까지 어디까지 번역할지 정합니다.' },
      { title: '문구 길이', body: '언어마다 글자 수가 달라 버튼이나 메뉴가 깨지지 않게 조정합니다.' },
      { title: '반영 방식', body: '엑셀이나 번역 파일로 전달하고 개발팀이 반영하는 방식을 협의합니다.' },
    ],
    notes: [
      { label: '검색 노출', body: '다국어 페이지는 언어별 주소와 메타 정보를 따로 설정해야 합니다. 번역 이후 개발 작업도 함께 고려하세요.' },
      { label: '정기 업데이트', body: '내용이 자주 바뀌는 사이트는 변경분만 번역하는 방식이 효율적입니다.' },
    ],
    faqs: [
      { q: '번역한 내용을 사이트에 직접 올려 주나요?', a: '번역 텍스트 전달이 기본이며 반영 방식은 사이트 구조를 보고 협의합니다.' },
      { q: '여러 언어를 동시에 의뢰할 수 있나요?', a: '언어별 인력을 확인해 일정을 안내드립니다.' },
    ],
    related: ['company-document-translation', 'business-plan-translation', 'proofreading-review'],
    parent: 'translation',
  },
  {
    slug: 'proofreading-review',
    group: 'document',
    name: '번역 검수',
    h1: '번역 검수와 영문 교정',
    alsoSearched: ['영문 교정', '번역 교정', '영문 감수', '원어민 교정', '번역 감수'],
    lead: '번역 검수와 교정은 이미 번역된 문서의 오역과 어색한 표현, 용어 불일치를 바로잡는 서비스로, 직접 번역한 문서나 다른 곳에서 받은 번역본을 점검할 때 쓰입니다.',
    itemsHeading: '검수 · 교정에서 확인하는 것',
    items: [
      { title: '오역과 누락', body: '원문과 번역문을 대조해 빠지거나 바뀐 내용을 찾습니다.' },
      { title: '용어와 일관성', body: '같은 개념이 다른 말로 옮겨진 곳을 통일합니다.' },
      { title: '문체와 자연스러움', body: '읽는 사람에게 자연스럽게 읽히도록 문장을 다듬습니다.' },
    ],
    notes: [
      { label: '원문 필요', body: '검수는 원문과 번역문을 모두 받아야 정확히 할 수 있습니다.' },
      { label: '검수 범위', body: '오역만 바로잡을지 문체까지 다듬을지에 따라 시간이 달라집니다.' },
    ],
    faqs: [
      { q: '번역기로 돌린 문서도 검수할 수 있나요?', a: '기계번역 결과를 바탕으로 한 검수도 가능하며 문서 상태에 따라 범위를 안내드립니다.' },
      { q: '영문 교정만 따로 받을 수 있나요?', a: '영문 문서의 교정만 접수할 수 있습니다.' },
    ],
    related: ['company-document-translation', 'contract-translation', 'medical-document-translation'],
    parent: 'translation',
  },
];

export const costTopics: TopicData[] = [
  {
    slug: 'cost-interpreter-staffing',
    group: 'cost',
    name: '통역사 섭외 비용',
    h1: '통역사 섭외 비용과 일당 · 견적',
    alsoSearched: ['통역사 파견 비용', '통역사 일당', '통역 견적', '전문 통역사 비용', '통역 비용'],
    lead: '통역사 섭외 비용은 통역 시간뿐 아니라 사전 준비와 분야 난이도, 언어에 따라 달라지며, 체르토 에이전시는 업무 범위별로 세 구간의 기준 요금을 공개하고 있습니다.',
    itemsHeading: '업무 범위별 기준',
    items: [
      { title: '일반 통역', body: `${plan('standard')}. 일반 비즈니스 미팅과 기본 현장 통역, 단순 상담에 적합합니다.` },
      { title: '비즈니스 프리미엄 통역', body: `${plan('business')}. 사전 자료 검토와 전문용어 준비, 주요 논의 정리가 포함되는 구간입니다.` },
      { title: 'Executive 전문 통역', body: `${plan('executive')}. M&A와 투자, 계약 협상, 기술 미팅, 공장 실사처럼 중요도가 높은 일정에 적합합니다.` },
    ],
    notes: [
      { label: '별도 비용', body: '해외 출장 동행은 통역료 외에 항공, 숙박, 현지 교통비가 별도로 발생할 수 있습니다.' },
      { label: '최종 견적', body: '언어, 국가, 업무 난이도, 통역 시간, 사전 자료 분량에 따라 최종 견적은 달라질 수 있습니다.' },
    ],
    faqs: [
      { q: '통역사 일당은 하루 기준인가요?', a: '요금은 1일 기준으로 안내드립니다. 반일이나 시간 단위 일정은 문의 시 확인해 드립니다.' },
      { q: '견적은 어떻게 받나요?', a: '일정, 장소, 언어, 미팅 목적을 알려주시면 적합한 구간과 함께 견적을 안내드립니다.' },
    ],
    related: ['cost-by-mode', 'cost-overseas-interpreter', 'cost-legal-medical', 'urgent-interpreter'],
    parent: 'interpretation',
  },
  {
    slug: 'cost-by-mode',
    group: 'cost',
    name: '동시통역 비용',
    h1: '순차통역 비용과 동시통역 비용',
    alsoSearched: ['순차통역 비용', '동시통역사 비용', '동시통역 견적', '동시통역 장비 비용'],
    lead: '순차통역과 동시통역은 필요한 인력과 장비가 달라 비용 구조가 다르며, 동시통역은 두 명 이상의 인력과 장비가 필요해 일정과 규모에 따라 별도 견적으로 안내합니다.',
    itemsHeading: '방식별 비용 구조',
    items: [
      { title: '순차통역', body: `일반 비즈니스 미팅 기준으로는 ${plan('standard')}부터 업무 범위에 따라 안내드립니다.` },
      { title: '동시통역', body: '통역사 두 명 이상과 부스, 수신기 같은 장비가 필요해 행사 규모와 시간에 따라 별도 견적을 드립니다.' },
      { title: '원격 동시통역', body: '플랫폼과 접속 환경, 시간대에 따라 구성이 달라 사전 협의 후 견적을 안내드립니다.' },
    ],
    notes: [
      { label: '동시통역 인력', body: '집중 시간이 길 수 없어 통역사 두 명이 교대하는 것이 기본입니다.' },
      { label: '자료 분량', body: '발표 자료의 분량과 전문성도 준비 시간에 영향을 줍니다.' },
    ],
    faqs: [
      { q: '동시통역 비용을 대략 알 수 있나요?', a: '행사 규모와 시간, 언어에 따라 달라 숫자로 안내드리기 어렵습니다. 일정을 알려주시면 견적을 드립니다.' },
      { q: '장비는 별도로 준비해야 하나요?', a: '행사장 보유 여부를 먼저 확인합니다. 필요하면 대여 구성을 안내드립니다.' },
    ],
    related: ['simultaneous-interpretation', 'consecutive-interpretation', 'cost-interpreter-staffing', 'remote-simultaneous'],
    parent: 'interpretation',
  },
  {
    slug: 'cost-overseas-interpreter',
    group: 'cost',
    name: '해외 통역사 비용',
    h1: '해외 통역사 비용과 현지 통역사 섭외',
    alsoSearched: ['현지 통역사 섭외', '출장 통역사 섭외', '해외 전시회 통역사 섭외', '해외 통역사 섭외 비용', '현지 통역사 비용'],
    lead: '해외 통역사 비용은 동행하는지, 현지에서 섭외하는지에 따라 구조가 달라지며, 도시와 언어에 따라 현지 인력이 없을 수 있어 일정이 정해지면 먼저 가용 여부를 확인합니다.',
    itemsHeading: '구성 방식별 비용 구조',
    items: [
      { title: '한국에서 동행', body: '통역료에 항공, 숙박, 현지 교통비가 더해집니다. 여러 도시를 도는 출장에서 효율적입니다.' },
      { title: '현지 통역사 섭외', body: '이동 비용이 줄지만 현지 인력의 가용 여부가 먼저 확인되어야 합니다.' },
      { title: '해외 전시회', body: '전시 기간과 부스 규모에 따라 인력을 구성하며 전시 일정이 정해지면 일찍 알려주셔야 합니다.' },
    ],
    notes: [
      { label: '현지 물가', body: '국가별 체류 비용과 인건비 수준이 달라 같은 일정도 견적이 다릅니다.' },
      { label: '인력 가용', body: '희소 언어와 소도시는 현지 섭외가 어려울 수 있습니다. 대체 구성을 함께 안내드립니다.' },
    ],
    faqs: [
      { q: '현지 통역사 섭외가 안 되는 도시도 있나요?', a: '있습니다. 가능 여부를 먼저 확인하고 동행이나 인접 도시 구성 같은 대안을 안내드립니다.' },
      { q: '출장비는 어떻게 정산하나요?', a: '항공, 숙박, 현지 교통은 실비 기준으로 견적서에 구분해 안내드립니다.' },
    ],
    related: ['overseas-trip-interpretation', 'exhibition-interpretation', 'cost-interpreter-staffing', 'urgent-interpreter'],
    parent: 'interpretation',
  },
  {
    slug: 'cost-legal-medical',
    group: 'cost',
    name: '법률 통역 비용',
    h1: '법률 통역 비용과 의료 통역 비용',
    alsoSearched: ['의료 통역 비용', '법률통역 견적', '의료통역 견적', '전문 분야 통역 비용'],
    lead: '법률과 의료 통역은 용어의 난이도와 책임이 크고 사전 준비가 길어, 일반 비즈니스 통역보다 높은 구간에서 안내드리며 일정과 범위에 따라 별도 견적을 드립니다.',
    itemsHeading: '비용에 영향을 주는 요소',
    items: [
      { title: '분야 전문성', body: '법률과 의학 용어에 익숙한 통역사를 배정해야 하므로 인력 풀이 제한적입니다.' },
      { title: '사전 자료 분량', body: '계약서, 논문, 시험 계획서 같은 자료를 읽고 준비하는 시간이 포함됩니다.' },
      { title: '비밀 유지', body: '필요하면 NDA를 체결하고 진행하며 자료 관리 방식도 협의합니다.' },
    ],
    notes: [
      { label: '구간 안내', body: `전문 자료 검토와 용어 준비가 필요한 일정은 ${plan('executive')} 구간을 기준으로 안내드립니다. 정확한 금액은 범위를 확인한 뒤 알려드립니다.` },
      { label: '법정 · 임상 통역', body: '법원 절차와 임상 진료 통역은 별도 규정이 있어 사전 상담이 필요합니다.' },
    ],
    faqs: [
      { q: '의료 통역 비용은 얼마인가요?', a: '일정 내용과 분야에 따라 달라 별도 견적으로 안내드립니다. 의료기기 전시나 컨퍼런스처럼 비임상 일정은 사전 자료를 기준으로 구성합니다.' },
      { q: '법률 상담 통역은요?', a: '상담 시간과 자료 분량을 알려주시면 견적을 안내드립니다.' },
    ],
    related: ['legal-interpretation', 'medical-interpretation', 'cost-interpreter-staffing'],
    parent: 'interpretation',
  },
  {
    slug: 'translation-quote',
    group: 'cost',
    name: '번역 견적',
    h1: '계약서 번역 견적과 기업 번역 견적',
    alsoSearched: ['계약서 번역 견적', '기업 번역 견적', '번역업체 견적', '번역 비용', '번역 단가'],
    lead: '번역 견적은 문서의 종류와 분량, 언어, 분야 난이도, 희망 기한에 따라 달라서 파일을 보고 안내드리는 것이 가장 정확합니다.',
    itemsHeading: '견적에 영향을 주는 요소',
    items: [
      { title: '분량과 형식', body: '글자 수와 표, 이미지 안 글자가 많은지에 따라 작업량이 달라집니다.' },
      { title: '언어와 분야', body: '희소 언어와 전문 분야는 인력이 제한적이어서 일정과 비용이 달라질 수 있습니다.' },
      { title: '검수와 기한', body: '검수 포함 여부와 급한 납기는 별도로 반영됩니다.' },
    ],
    notes: [
      { label: '견적에 필요한 정보', body: '파일, 원문 언어와 번역할 언어, 용도, 희망 기한을 보내주시면 됩니다.' },
      { label: 'NDA', body: '비밀 유지가 필요한 문서는 NDA 체결 후 파일을 받습니다.' },
    ],
    faqs: [
      { q: '번역 견적은 무료인가요?', a: '파일을 보고 범위와 일정을 안내드리는 상담은 문의로 접수하실 수 있습니다.' },
      { q: '번역 기간은 얼마나 걸리나요?', a: '분량과 언어에 따라 다르며 견적과 함께 일정을 안내드립니다.' },
    ],
    related: ['company-document-translation', 'contract-translation', 'proofreading-review'],
    parent: 'translation',
  },
  {
    slug: 'urgent-interpreter',
    group: 'cost',
    name: '긴급 통역사 섭외',
    h1: '긴급 통역사 섭외',
    alsoSearched: ['당일 통역사', '급한 통역사', '긴급 통역', '당일 통역 섭외', '촉박한 일정 통역'],
    lead: '긴급 통역사 섭외는 일정이 임박했을 때 가능한 인력을 빠르게 확인하는 서비스로, 언어와 분야, 지역에 따라 가능 여부가 달라 먼저 확인한 뒤 안내드립니다.',
    itemsHeading: '긴급 섭외 시 알려주실 것',
    items: [
      { title: '일정과 장소', body: '날짜, 시작 시간, 장소를 알려주시면 이동 가능 여부를 확인합니다.' },
      { title: '언어와 분야', body: '희소 언어와 전문 분야는 인력이 한정적입니다.' },
      { title: '미팅 성격', body: '협상인지 현장 방문인지에 따라 적합한 통역사가 다릅니다.' },
    ],
    notes: [
      { label: '사전 자료', body: '급한 일정일수록 사전 자료가 큰 도움이 됩니다. 가능한 자료를 먼저 보내주세요.' },
      { label: '보장되지 않습니다', body: '긴급 일정은 인력 사정에 따라 섭외가 어려울 수 있습니다. 확인 후 가능 여부를 정직하게 안내드립니다.' },
    ],
    faqs: [
      { q: '당일 통역사 섭외도 가능한가요?', a: '언어와 지역에 따라 다릅니다. 일정과 상황을 알려주시면 가능 여부를 가장 먼저 확인합니다.' },
      { q: '긴급 요청은 비용이 달라지나요?', a: '기한이 촉박한 일정은 견적에 반영될 수 있습니다. 가능 여부와 함께 안내드립니다.' },
    ],
    related: ['cost-interpreter-staffing', 'staffing-dispatch', 'cost-overseas-interpreter'],
    parent: 'interpretation',
  },
  {
    slug: 'choose-interpretation-company',
    group: 'cost',
    name: '통역업체 선택',
    h1: '통역업체 · 통역회사 선택 기준',
    alsoSearched: ['통역업체', '통역회사', '전문 통역업체', '통역 업체 추천', '통역사 예약', '통역업체 비교'],
    lead: '통역업체를 고를 때는 가격보다 먼저 우리 일정에 맞는 통역사를 배정할 수 있는지, 사전 준비를 해 주는지, 문제가 생겼을 때 대응하는지를 확인하는 것이 좋습니다.',
    itemsHeading: '통역업체를 고를 때 확인할 것',
    items: [
      { title: '분야 경험', body: '의뢰한 분야의 경험이 있는 통역사를 배정하는지 물어보세요. 같은 언어라도 분야에 따라 결과가 다릅니다.' },
      { title: '사전 준비', body: '자료 검토와 용어 정리가 서비스에 포함되는지 확인하세요. 현장 통역만으로는 한계가 있습니다.' },
      { title: '대응 체계', body: '통역사가 갑자기 참석하지 못할 때 대체 인력이 있는지 확인하세요.' },
    ],
    notes: [
      { label: '견적 비교', body: '가격이 같아도 포함 범위가 다릅니다. 사전 준비와 사후 정리가 포함되는지 비교하세요.' },
      { label: '사전 접촉', body: '큰 일정은 통역사와 사전 통화로 분야 이해도를 확인하는 것을 권합니다.' },
    ],
    faqs: [
      { q: '통역사를 미리 예약할 수 있나요?', a: '날짜와 언어를 알려주시면 배정 가능 여부를 확인하고 예약을 진행합니다.' },
      { q: '통역업체와 프리랜서 통역사는 무엇이 다른가요?', a: '업체는 일정 변동 시 대체 인력과 사전 준비를 지원하는 구조입니다. 일정의 중요도에 따라 선택하세요.' },
    ],
    related: ['staffing-dispatch', 'cost-interpreter-staffing', 'choose-translation-company', 'business-meeting-interpretation'],
    parent: 'interpretation',
  },
  {
    slug: 'choose-translation-company',
    group: 'cost',
    name: '번역업체 선택',
    h1: '번역업체 · 번역회사 · 통번역업체 선택 기준',
    alsoSearched: ['번역업체', '번역회사', '통번역업체', '통번역회사', '전문 번역업체 추천', '번역 업체 비교'],
    lead: '번역업체를 고를 때는 문서 분야에 맞는 번역자 배정, 용어 통일 방식, 검수 단계, 비밀 유지 여부를 확인하는 것이 중요하며, 통역과 번역을 함께 쓰는 기업은 통번역업체 한 곳에 맡기면 용어가 이어집니다.',
    itemsHeading: '번역업체를 고를 때 확인할 것',
    items: [
      { title: '분야 번역자', body: '법률, 의학, 기술처럼 분야 경험이 있는 번역자를 배정하는지 확인하세요.' },
      { title: '검수 단계', body: '번역 후 별도 검수가 포함되는지 물어보세요. 번역자와 검수자가 다르면 오류가 줄어듭니다.' },
      { title: '용어 관리', body: '반복되는 문서는 용어집을 관리하는지 확인하세요.' },
    ],
    notes: [
      { label: '통번역 일관성', body: '통역과 번역을 같은 곳에 맡기면 미팅에서 쓴 용어가 문서에도 이어집니다.' },
      { label: '비밀 유지', body: '기밀 문서는 NDA 체결과 파일 관리 방식을 먼저 확인하세요.' },
    ],
    faqs: [
      { q: '통번역업체와 번역업체는 같은가요?', a: '통번역업체는 통역과 번역을 모두 제공하는 곳을 말합니다. 체르토 에이전시는 비즈니스 통역과 문서 지원을 함께 제공합니다.' },
      { q: '번역 견적은 어떻게 비교하나요?', a: '단가뿐 아니라 검수 포함 여부와 기한, 파일 형식 대응을 함께 비교하세요.' },
    ],
    related: ['choose-interpretation-company', 'translation-quote', 'company-document-translation', 'proofreading-review'],
    parent: 'translation',
  },
  {
    slug: 'staffing-dispatch',
    group: 'cost',
    name: '통역사 섭외',
    h1: '통역사 섭외와 파견 · 전국 통역사 파견',
    alsoSearched: ['통역사 파견', '전문 통역사', '서울 통역업체', '국내 통역사 섭외', '전국 통역사 파견', '통역사 섭외 업체'],
    lead: '통역사 섭외와 파견은 일정과 언어, 분야를 받아 적합한 통역사를 배정하고 현장까지 이어서 지원하는 서비스로, 서울과 수도권은 현장 파견이 기본이고 지방은 일정에 따라 가능 여부를 확인합니다.',
    itemsHeading: '섭외와 파견의 진행 순서',
    items: [
      { title: '일정 접수', body: '날짜, 장소, 언어, 미팅 목적을 알려주시면 가능한 통역사와 구성을 확인합니다.' },
      { title: '통역사 배정', body: '분야 경험과 일정 가용성을 기준으로 배정하고 사전 자료를 전달합니다.' },
      { title: '현장 파견', body: '통역사가 현장에 도착해 통역하고 필요하면 사후 정리를 지원합니다.' },
    ],
    notes: [
      { label: '서울 · 수도권', body: '서울과 수도권은 현장 파견 일정이 가장 원활합니다. 지역별 안내 페이지에서 상세를 확인하세요.' },
      { label: '지방 일정', body: '전국 통역사 파견은 지역과 언어, 날짜에 따라 가능 여부가 달라 먼저 확인한 뒤 이동 조건을 안내드립니다.' },
    ],
    faqs: [
      { q: '서울 통역업체로서 어디까지 파견되나요?', a: '서울과 수도권 현장이 기본이며 지방은 일정에 따라 이동 가능 여부를 확인해 안내드립니다.' },
      { q: '전문 통역사는 어떻게 배정되나요?', a: '분야 경험과 일정 가용성을 기준으로 배정하고, 필요하면 사전 통화로 확인할 수 있습니다.' },
    ],
    related: ['choose-interpretation-company', 'cost-interpreter-staffing', 'urgent-interpreter', 'business-meeting-interpretation'],
    parent: 'interpretation',
  },
];
