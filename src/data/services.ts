/**
 * 서비스 상세 페이지 데이터
 * ─────────────────────────────────────────────
 * 하나의 템플릿(components/ServicePage.tsx)이 이 데이터를 받아 페이지를 렌더링합니다.
 * 새 서비스 페이지를 추가하려면
 *   1) 아래 servicePages 에 항목을 추가하고
 *   2) src/app/<slug>/page.tsx 를 기존 파일과 동일한 형태로 만들면 됩니다.
 */
import { businessPage } from './business';
import type { ImageKey } from './images';

export type ServiceOffering = {
  /** 영문 라벨 — 카드 상단에 작게 표기됩니다. */
  en: string;
  title: string;
  body: string;
  /** 이런 경우에 적합합니다 */
  fit: string;
};

export type ServicePage = {
  slug: string;
  /** 헤더/푸터 및 구조화 데이터에 쓰이는 서비스명 */
  serviceName: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  titleSerif?: string;
  lead: string;
  imageKey: ImageKey;
  seo: { title: string; description: string; keywords: string[] };

  intro: { heading: string; paragraphs: string[] };

  offeringsHeading: string;
  offeringsLead: string;
  offerings: ServiceOffering[];

  /** 진행 방식 */
  flowHeading: string;
  flow: { no: string; label: string; body: string }[];

  /** 문의 시 알려주시면 좋은 정보 */
  briefHeading: string;
  briefLead: string;
  brief: { label: string; body: string }[];

  /** 비용/일정이 결정되는 기준 */
  factorsHeading: string;
  factorsLead: string;
  factors: string[];

  faqs: { q: string; a: string }[];

  ctaTitle: string;
  ctaBody: string;
  ctaLabel: string;

  /** 다른 서비스로 이어지는 링크 */
  related: { label: string; description: string; href: string }[];
};

export const servicePages: Record<string, ServicePage> = {
  interpretation: {
    slug: 'interpretation',
    serviceName: '전문 통역 서비스',
    navLabel: 'Interpretation',
    eyebrow: 'Interpretation',
    title: '현장의 언어를\n정확하게 전달합니다.',
    titleSerif: 'Interpretation',
    lead: '비즈니스 미팅부터 국제회의까지, 통역 방식과 현장 성격에 따라 필요한 역량은 달라집니다. CERTO AGENCY는 프로젝트를 먼저 확인한 뒤 해당 환경에 익숙한 통역사를 매칭합니다.',
    imageKey: 'interpretation',
    seo: {
      title: '전문 통역 서비스 | 동시·순차·수행·화상회의 통역',
      description:
        '동시 통역, 순차 통역, 수행 통역, 국제회의, 전시회, 화상회의까지. 프로젝트 성격에 맞는 전문 통역사를 선별하여 매칭하는 CERTO AGENCY 통역 서비스.',
      keywords: [
        '전문 통역',
        '동시 통역',
        '순차 통역',
        '수행 통역',
        '국제회의 통역',
        '전시회 통역',
        '비즈니스 통역',
        '화상회의 통역',
        '통역사 섭외',
      ],
    },
    intro: {
      heading: '같은 언어라도, 현장이 다르면 필요한 통역사가 다릅니다.',
      paragraphs: [
        '기업 협상 자리에서 필요한 것은 정확한 어휘와 침착한 태도이고, 국제회의에서 필요한 것은 발표 흐름을 놓치지 않는 집중력입니다. 전시회 부스에서는 짧고 빠른 응대가, 임원 수행 일정에서는 하루 전체를 함께 움직이는 판단력이 요구됩니다.',
        'CERTO는 통역사를 목록에서 꺼내 배정하지 않습니다. 산업, 참석자 구성, 회의 목적, 장소와 일정을 먼저 확인하고, 유사한 현장을 다뤄본 전문가를 선별해 제안드립니다.',
      ],
    },
    offeringsHeading: '통역 방식',
    offeringsLead: '현장의 형태에 따라 적합한 방식을 함께 정합니다.',
    offerings: [
      {
        en: 'Simultaneous',
        title: '동시 통역',
        body: '발화와 거의 동시에 통역이 이루어집니다. 통역 부스와 장비가 필요하며, 통역사는 보통 2인 이상이 교대로 진행합니다.',
        fit: '국제회의, 대규모 컨퍼런스, 세미나, 포럼',
      },
      {
        en: 'Consecutive',
        title: '순차 통역',
        body: '발화가 끝난 뒤 통역이 이어집니다. 장비 없이 진행할 수 있고, 정확도와 세부 확인이 중요한 자리에 적합합니다.',
        fit: '기업 미팅, 계약 협상, 인터뷰, 기술 회의',
      },
      {
        en: 'Escort',
        title: '수행 통역',
        body: '일정 전체를 함께 이동하며 통역합니다. 미팅뿐 아니라 이동, 식사, 현장 방문까지 커뮤니케이션을 지원합니다.',
        fit: 'VIP 일정, 바이어 방문, 공장 실사, 해외 출장',
      },
      {
        en: 'Conference',
        title: '국제회의 · 기업 행사',
        body: '행사 전 자료와 용어를 사전에 공유받아 준비합니다. 사회, 발표, 질의응답 등 구간별 진행 방식을 함께 설계합니다.',
        fit: '국제 컨퍼런스, 기업 행사, 기자회견, 시상식',
      },
      {
        en: 'Exhibition',
        title: '전시회 · 박람회',
        body: '부스 방문객 응대와 제품 설명에 최적화된 통역입니다. 제품·산업 용어를 미리 익힌 상태로 현장에 투입됩니다.',
        fit: '국내외 전시회, 박람회, 쇼케이스, 상담회',
      },
      {
        en: 'Remote',
        title: '온라인 · 화상회의',
        body: 'Zoom, Teams, Google Meet 등 주요 환경에서 진행합니다. 참석자 구성과 회의 길이에 따라 순차 또는 동시 방식을 제안드립니다.',
        fit: '해외 본사 회의, 원격 상담, 온라인 설명회',
      },
    ],
    flowHeading: '진행 방식',
    flow: [
      { no: '01', label: '프로젝트 확인', body: '언어, 일정, 장소, 참석자, 회의 목적과 산업 분야를 확인합니다.' },
      { no: '02', label: '방식 제안', body: '동시·순차·수행 중 현장에 적합한 방식과 필요 인원을 제안드립니다.' },
      { no: '03', label: '전문가 매칭', body: '해당 분야 경험을 보유한 통역사 후보를 선별해 안내드립니다.' },
      { no: '04', label: '사전 준비', body: '발표 자료, 용어집, 참석자 명단을 공유받아 통역사가 준비합니다.' },
      { no: '05', label: '현장 진행', body: '일정 확정 후 현장을 진행하며, 담당자가 진행 상황을 관리합니다.' },
    ],
    briefHeading: '문의 시 알려주시면 좋은 정보',
    briefLead: '아래 내용이 확인되면 더 정확한 방식과 견적을 안내드릴 수 있습니다. 확정되지 않은 항목은 비워두셔도 됩니다.',
    brief: [
      { label: '언어', body: '어떤 언어 조합이 필요한지 (예: 한국어 ↔ 영어)' },
      { label: '일정', body: '날짜와 예상 소요 시간, 반일/종일 여부' },
      { label: '장소', body: '국내 도시 또는 해외 지역, 온라인 여부' },
      { label: '행사 성격', body: '미팅, 회의, 전시회, 수행 일정 등' },
      { label: '참석자', body: '인원 규모와 직급 구성' },
      { label: '산업 분야', body: '다뤄질 주제와 전문 용어 범위' },
    ],
    factorsHeading: '비용과 일정은 이렇게 결정됩니다',
    factorsLead: '고정 단가표 대신 프로젝트 조건에 따라 산정합니다.',
    factors: [
      '통역 방식 (동시 / 순차 / 수행)',
      '언어 조합과 해당 언어의 전문가 가용성',
      '소요 시간과 일수, 대기 시간 포함 여부',
      '장소와 이동 조건 (국내 / 해외 / 온라인)',
      '전문 분야의 난이도와 사전 준비 범위',
      '필요 인원 (동시 통역은 통상 2인 이상)',
    ],
    faqs: [
      {
        q: '동시 통역과 순차 통역 중 무엇을 선택해야 할까요?',
        a: '참석자 수와 진행 시간이 기준이 됩니다. 발표 중심의 큰 행사이고 시간을 절약해야 한다면 동시 통역, 인원이 적고 정확한 확인이 중요한 회의라면 순차 통역이 적합합니다. 프로젝트 내용을 알려주시면 적합한 방식을 제안드립니다.',
      },
      {
        q: '통역 장비도 함께 준비해 주시나요?',
        a: '동시 통역에 필요한 부스와 수신기 등 장비는 행사 규모와 장소에 맞춰 함께 협의합니다. 이미 준비된 장비가 있다면 그에 맞춰 진행합니다.',
      },
      {
        q: '통역사에게 미리 자료를 전달해야 하나요?',
        a: '가능하다면 전달해 주시는 것이 품질에 가장 큰 영향을 줍니다. 발표 자료, 용어집, 참석자 명단이 있으면 통역사가 사전에 준비할 수 있습니다. 공유되는 자료는 업무 목적 외에 사용하지 않습니다.',
      },
      {
        q: '하루 이상 진행되는 일정도 가능한가요?',
        a: '가능합니다. 다일 일정은 같은 통역사가 연속으로 진행하는 것을 원칙으로 하여 맥락이 끊기지 않도록 관리합니다.',
      },
    ],
    ctaTitle: '통역이 필요한 일정이 있으신가요?',
    ctaBody: '언어와 일정만 알려주셔도 가능 여부를 먼저 확인해 드립니다.',
    ctaLabel: '통역 문의하기',
    related: [
      {
        label: '해외 통역',
        description: '해외 출장, 현지 미팅, 전시회 현장 지원',
        href: '/global',
      },
      {
        label: '전문 번역',
        description: '계약서, 제안서, 기술 문서 등 전문 문서 번역',
        href: '/translation',
      },
      {
        label: '기업 전담 통번역',
        description: '반복되는 글로벌 커뮤니케이션을 하나의 창구에서',
        href: '/business',
      },
    ],
  },

  translation: {
    slug: 'translation',
    serviceName: '전문 번역 서비스',
    navLabel: 'Translation',
    eyebrow: 'Translation',
    title: '문서의 목적과 독자를\n이해하는 번역.',
    titleSerif: 'Translation',
    lead: '계약서와 마케팅 자료는 같은 방식으로 번역될 수 없습니다. 문서의 용도, 읽는 사람, 요구되는 정확도를 확인한 뒤 해당 분야 경험을 가진 번역가에게 배정합니다.',
    imageKey: 'translation',
    seo: {
      title: '전문 번역 서비스 | 계약서·기술문서·기업 문서 번역',
      description:
        '계약서, 제안서, 보고서, 기술 문서, 홈페이지, 마케팅 자료까지. 분야별 전문 번역가를 매칭하고 용어집과 검수 과정을 함께 관리하는 CERTO AGENCY 번역 서비스.',
      keywords: [
        '전문 번역',
        '기업 번역',
        '계약서 번역',
        '기술 문서 번역',
        '논문 번역',
        '홈페이지 번역',
        '마케팅 번역',
        '영어 번역',
        '번역 에이전시',
      ],
    },
    intro: {
      heading: '번역의 품질은 무엇을 지켜야 하는지 아는 데서 시작됩니다.',
      paragraphs: [
        '계약서는 문장의 해석 범위가 좁아야 하고, 마케팅 자료는 브랜드의 목소리가 살아야 합니다. 기술 문서는 용어가 일관되어야 하고, 논문은 학술 관행을 따라야 합니다. 문서마다 지켜야 할 기준이 다릅니다.',
        'CERTO는 문서를 먼저 확인하고 목적을 정리한 뒤, 해당 분야의 문서를 다뤄본 번역가에게 배정합니다. 반복 의뢰가 있는 기업은 용어집과 스타일 가이드를 축적해 다음 프로젝트에 이어서 적용합니다.',
      ],
    },
    offeringsHeading: '번역 분야',
    offeringsLead: '문서 유형에 따라 배정 기준과 검수 방식이 달라집니다.',
    offerings: [
      {
        en: 'Legal',
        title: '계약서 · 법률 문서',
        body: '조항의 의미가 흔들리지 않도록 보수적으로 번역합니다. 원문 구조를 유지하고 용어를 통일합니다.',
        fit: '계약서, 약관, 합의서, 사내 규정, 법률 의견서',
      },
      {
        en: 'Corporate',
        title: '기업 문서 · 제안서',
        body: '전달하려는 메시지가 상대 기업에 그대로 닿도록 비즈니스 문서 관행에 맞춰 작성합니다.',
        fit: '제안서, 보고서, 회사 소개서, IR 자료, 사업계획서',
      },
      {
        en: 'Technical',
        title: '기술 문서 · 매뉴얼',
        body: '용어집을 기준으로 표현을 통일하고, 작업자가 실제로 이해할 수 있는 문장으로 정리합니다.',
        fit: '매뉴얼, 규격서, 특허, 설계 문서, 품질 자료',
      },
      {
        en: 'Marketing',
        title: '마케팅 · 브랜드 콘텐츠',
        body: '직역이 아닌 현지 표현으로 옮깁니다. 브랜드 톤을 유지하면서 대상 시장의 언어로 다듬습니다.',
        fit: '홈페이지, 브로슈어, 광고 문구, 보도자료, SNS 콘텐츠',
      },
      {
        en: 'Academic',
        title: '논문 · 학술 자료',
        body: '학술 표기 관행과 인용 형식을 따르며, 분야 전공 배경을 가진 번역가에게 배정합니다.',
        fit: '논문, 초록, 학회 발표 자료, 연구 보고서',
      },
      {
        en: 'Presentation',
        title: '프레젠테이션 자료',
        body: '슬라이드의 분량 제약을 고려해 문장을 정리하고, 레이아웃이 깨지지 않도록 길이를 조정합니다.',
        fit: '발표 자료, 세일즈 덱, 교육 자료, 사내 공유 자료',
      },
    ],
    flowHeading: '진행 방식',
    flow: [
      { no: '01', label: '문서 확인', body: '분량, 형식, 용도, 마감 일정을 확인합니다.' },
      { no: '02', label: '견적 안내', body: '분야와 난이도, 검수 범위를 반영한 견적과 일정을 안내드립니다.' },
      { no: '03', label: '번역가 배정', body: '해당 분야의 문서를 다뤄본 번역가에게 배정합니다.' },
      { no: '04', label: '번역 및 검수', body: '용어 일관성과 표기를 점검하고, 필요 시 2차 검수를 진행합니다.' },
      { no: '05', label: '납품 및 수정', body: '요청 형식으로 납품하고, 확인 후 수정 요청을 반영합니다.' },
    ],
    briefHeading: '문의 시 알려주시면 좋은 정보',
    briefLead: '문서를 함께 보내주시면 가장 정확합니다. 보안이 필요한 문서는 분량과 유형만 알려주셔도 됩니다.',
    brief: [
      { label: '언어', body: '원문 언어와 도착 언어 (예: 한국어 → 영어)' },
      { label: '분량', body: '페이지 수, 단어 수 또는 파일 개수' },
      { label: '문서 유형', body: '계약서, 제안서, 매뉴얼, 홈페이지 등' },
      { label: '용도', body: '사내 참고용인지, 외부 제출·공개용인지' },
      { label: '마감 일정', body: '필요한 납품 날짜' },
      { label: '형식', body: 'Word, PDF, PPT, Excel, 원본 레이아웃 유지 여부' },
    ],
    factorsHeading: '비용과 일정은 이렇게 결정됩니다',
    factorsLead: '분량만으로 정해지지 않습니다. 요구되는 정확도가 함께 반영됩니다.',
    factors: [
      '원문 분량 (단어 수 또는 페이지 수)',
      '언어 조합',
      '전문 분야의 난이도와 용어 조사 범위',
      '요청하시는 검수 수준 (1차 번역 / 교차 검수 / 감수)',
      '납품 형식과 레이아웃 작업 여부',
      '마감 일정 (긴급 건은 별도 협의)',
    ],
    faqs: [
      {
        q: '번역 기간은 얼마나 걸리나요?',
        a: '분량과 전문성, 검수 수준에 따라 달라집니다. 문서를 확인한 뒤 정확한 일정과 함께 안내드리며, 긴급 건은 별도로 협의합니다.',
      },
      {
        q: '원본 레이아웃 그대로 받을 수 있나요?',
        a: '가능합니다. Word, PPT, Excel 등 편집 가능한 원본을 주시면 레이아웃을 유지한 상태로 납품합니다. PDF 등 편집이 어려운 형식은 별도 작업이 필요할 수 있어 미리 안내드립니다.',
      },
      {
        q: '기밀 문서도 맡길 수 있나요?',
        a: '프로젝트 과정에서 공유되는 자료는 업무 목적 외에 사용하지 않으며, 필요한 경우 비밀유지 서약을 포함하여 진행합니다.',
      },
      {
        q: '번역 결과가 마음에 들지 않으면 어떻게 되나요?',
        a: '납품 후 확인하시고 수정 요청을 주시면 반영합니다. 방향 자체가 다르다고 판단되는 경우에는 담당자가 원인을 확인한 뒤 재작업 여부를 함께 결정합니다.',
      },
    ],
    ctaTitle: '번역이 필요한 문서가 있으신가요?',
    ctaBody: '문서 유형과 분량만 알려주셔도 일정과 견적을 안내드립니다.',
    ctaLabel: '번역 문의하기',
    related: [
      {
        label: '전문 통역',
        description: '동시·순차·수행 통역과 국제회의 지원',
        href: '/interpretation',
      },
      {
        label: '해외 통역',
        description: '해외 출장, 현지 미팅, 전시회 현장 지원',
        href: '/global',
      },
      {
        label: '기업 전담 통번역',
        description: '용어집과 프로젝트 이력을 이어서 관리',
        href: '/business',
      },
    ],
  },

  global: {
    slug: 'global',
    serviceName: '해외 통역 서비스',
    navLabel: 'Global Service',
    eyebrow: 'Global Interpretation',
    title: '해외에서도\nCERTO의 매칭은 계속됩니다.',
    titleSerif: 'Global',
    lead: '해외 출장, 현지 미팅, 전시회, 기업 방문, 바이어 상담. 낯선 도시에서 통역사를 처음부터 찾아야 하는 부담을 CERTO가 대신 맡습니다.',
    imageKey: 'global',
    seo: {
      title: '해외 통역 서비스 | 출장 통역·해외 전시회·현지 미팅',
      description:
        '북미, 유럽, 아시아, 중동, 오세아니아. 해외 출장과 현지 미팅, 전시회 통역을 현지 전문가 매칭 또는 동행 통역으로 지원하는 CERTO AGENCY 해외 통역 서비스.',
      keywords: [
        '해외 통역',
        '출장 통역',
        '해외 통역사',
        '현지 통역',
        '해외 전시회 통역',
        '바이어 상담 통역',
        '동행 통역',
        '해외 비즈니스 통역',
      ],
    },
    intro: {
      heading: '해외 프로젝트의 어려움은 언어가 아니라 검증입니다.',
      paragraphs: [
        '현지에서 통역사를 구하는 것 자체는 어렵지 않습니다. 문제는 그 사람이 우리 산업을 이해하는지, 기업 미팅에서 어떻게 행동하는지, 일정이 바뀌었을 때 연락이 되는지를 출장 전에 확인할 수 없다는 점입니다.',
        'CERTO는 프로젝트 성격에 따라 현지 전문가 매칭과 한국에서 출발하는 동행 통역 중 적합한 방식을 제안드립니다. 어느 방식이든 사전에 경력과 경험을 확인한 전문가를 배정하고, 진행 중에도 국내 담당자가 함께 관리합니다.',
      ],
    },
    offeringsHeading: '해외 프로젝트 유형',
    offeringsLead: '출장의 목적에 따라 필요한 지원이 달라집니다.',
    offerings: [
      {
        en: 'Business Trip',
        title: '해외 출장 통역',
        body: '이동, 미팅, 식사까지 일정 전체를 함께합니다. 현지 사정에 익숙한 통역사가 동행하여 일정 진행을 돕습니다.',
        fit: '기업 출장, 파트너 방문, 계약 협의',
      },
      {
        en: 'Exhibition',
        title: '해외 전시회 · 박람회',
        body: '부스 상담과 제품 설명, 방문객 응대를 지원합니다. 전시 기간 전체 또는 특정 일자만 배정할 수 있습니다.',
        fit: '해외 전시 참가, 상담회, 바이어 미팅',
      },
      {
        en: 'Site Visit',
        title: '현지 기업 · 공장 방문',
        body: '생산 현장과 기술 설명에 필요한 용어를 사전에 확인한 뒤 진행합니다.',
        fit: '공장 실사, 품질 감사, 공급망 점검, 산업 시찰',
      },
      {
        en: 'Buyer Meeting',
        title: '바이어 상담 · 협상',
        body: '가격과 조건이 오가는 자리에서 표현의 강도를 조절하며 정확하게 전달합니다.',
        fit: '수출 상담, 유통 협상, 대리점 계약',
      },
      {
        en: 'Conference',
        title: '해외 국제회의',
        body: '현지에서 열리는 컨퍼런스와 포럼의 동시·순차 통역을 지원합니다.',
        fit: '국제 컨퍼런스, 포럼, 학회 참가',
      },
      {
        en: 'Local Support',
        title: '현지 비즈니스 지원',
        body: '통역 외에도 일정 조율, 현지 커뮤니케이션 등 출장 진행에 필요한 부분을 함께 지원합니다.',
        fit: '시장 조사, 현지 네트워킹, 장기 출장',
      },
    ],
    flowHeading: '진행 방식',
    flow: [
      { no: '01', label: '출장 계획 확인', body: '지역, 기간, 방문처, 미팅 목적을 확인합니다.' },
      { no: '02', label: '방식 결정', body: '현지 전문가 매칭과 동행 통역 중 적합한 방식을 제안드립니다.' },
      { no: '03', label: '전문가 매칭', body: '해당 지역과 산업 경험을 보유한 통역사를 선별합니다.' },
      { no: '04', label: '일정 조율', body: '현지 이동과 미팅 순서를 통역사와 함께 정리합니다.' },
      { no: '05', label: '현지 진행', body: '출장 중에도 국내 담당자가 연락 창구로 함께 대응합니다.' },
    ],
    briefHeading: '문의 시 알려주시면 좋은 정보',
    briefLead: '출장 일정이 확정되지 않았더라도 지역과 대략적인 시기만 알려주시면 가능 여부를 먼저 확인해 드립니다.',
    brief: [
      { label: '지역', body: '국가와 도시 (예: 독일 프랑크푸르트)' },
      { label: '기간', body: '출장 일정과 통역이 필요한 일수' },
      { label: '목적', body: '전시회 참가, 기업 방문, 바이어 상담 등' },
      { label: '언어', body: '현지 언어 또는 영어 사용 여부' },
      { label: '산업 분야', body: '다뤄질 제품과 기술 범위' },
      { label: '인원', body: '출장 인원과 동행이 필요한 범위' },
    ],
    factorsHeading: '비용과 일정은 이렇게 결정됩니다',
    factorsLead: '현지 매칭과 동행 통역은 비용 구조가 다릅니다.',
    factors: [
      '진행 방식 (현지 전문가 매칭 / 국내 동행 통역)',
      '지역과 해당 지역의 전문가 가용성',
      '통역이 필요한 일수와 하루 투입 시간',
      '언어 조합과 전문 분야',
      '동행 통역의 경우 항공·숙박 등 출장 조건',
      '문의 시점과 일정까지 남은 기간',
    ],
    faqs: [
      {
        q: '현지 통역사와 동행 통역 중 어느 쪽이 유리한가요?',
        a: '현지 사정과 언어가 중요한 일정이라면 현지 전문가 매칭이, 우리 회사의 제품과 맥락을 깊이 이해한 상태로 여러 나라를 이동해야 한다면 동행 통역이 유리합니다. 출장 계획을 알려주시면 비용과 함께 비교해 안내드립니다.',
      },
      {
        q: '어느 지역까지 가능한가요?',
        a: '북미, 유럽, 아시아, 중동, 오세아니아의 주요 도시를 지원합니다. 네트워크가 닿지 않는 지역은 가능 여부를 먼저 확인해 솔직하게 안내드립니다.',
      },
      {
        q: '여러 나라를 연속으로 이동하는 일정도 가능한가요?',
        a: '가능합니다. 국가별로 현지 통역사를 각각 매칭하거나, 한 명의 통역사가 전 일정을 동행하는 방식 중 선택하실 수 있습니다.',
      },
      {
        q: '출장 일정이 갑자기 변경되면 어떻게 되나요?',
        a: '국내 담당자가 연락 창구를 유지하므로 현지에서 직접 조율하실 필요가 없습니다. 변경 사항을 알려주시면 통역사와 일정을 다시 맞춥니다.',
      },
    ],
    ctaTitle: '해외 일정이 잡혀 있으신가요?',
    ctaBody: '지역과 시기만 알려주셔도 가능 여부를 먼저 확인해 드립니다.',
    ctaLabel: '해외 통역 문의하기',
    related: [
      {
        label: '전문 통역',
        description: '국내 미팅, 국제회의, 전시회 통역',
        href: '/interpretation',
      },
      {
        label: '전문 번역',
        description: '수출 문서, 계약서, 현지 마케팅 자료 번역',
        href: '/translation',
      },
      {
        label: '기업 전담 통번역',
        description: '반복되는 해외 일정을 프로젝트 단위로 관리',
        href: '/business',
      },
    ],
  },

};

/**
 * 공용 템플릿으로 렌더링하는 서비스 페이지 목록.
 */
export const servicePageList: ServicePage[] = Object.values(servicePages);

/**
 * 사이트 전체의 서비스 페이지 (네비게이션 · sitemap · 조직 구조화 데이터용).
 * 기업 페이지는 전용 컴포넌트를 쓰지만 목록에는 포함되어야 합니다.
 */
export const allServicePages: Pick<ServicePage, 'slug' | 'serviceName'>[] = [
  ...servicePageList,
  { slug: businessPage.slug, serviceName: businessPage.serviceName },
];

export const serviceSlugs = allServicePages.map((page) => page.slug);
