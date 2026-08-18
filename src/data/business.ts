/**
 * CERTO FOR BUSINESS — 기업 고객 전용 페이지 콘텐츠
 * ─────────────────────────────────────────────
 * 다른 서비스 상세 페이지(통역·번역·해외)는 공용 템플릿을 쓰지만,
 * 기업 페이지는 구성이 달라 전용 컴포넌트로 렌더링합니다.
 *   콘텐츠  src/data/business.ts        ← 이 파일
 *   화면    src/components/BusinessPage.tsx
 *   라우트  src/app/business/page.tsx
 *
 * 섹션을 빼거나 순서를 바꾸려면 BusinessPage.tsx 에서 해당 블록을 옮기면 됩니다.
 */

export const businessPage = {
  slug: 'business',
  serviceName: '기업 전담 통번역',
  navLabel: 'For Business',

  seo: {
    title: '기업 전담 통번역 | 기업 미팅·국제회의·해외 출장·다국어 프로젝트',
    description:
      '기업 미팅, 국제회의, 해외 출장, 전시회, 계약 및 협상, 전문 문서 번역, 다국어 프로젝트까지. 전담 담당자가 하나의 창구에서 관리하는 CERTO AGENCY 기업 통번역 서비스.',
    keywords: [
      '기업 통역',
      '기업 번역',
      '기업 전담 통번역',
      '국제회의 통역',
      '해외 출장 통역',
      '전시회 통역',
      '계약서 번역',
      '다국어 프로젝트',
      'VIP 수행 통역',
      '긴급 통역',
    ],
  },

  /* ── 01. Hero ─────────────────────────────── */
  hero: {
    eyebrow: 'Trusted for Business',
    titleSerif: 'For Business',
    title: '기업의 중요한 순간을 함께하는\nGlobal Language Partner',
    lead: 'CERTO AGENCY는 단순 통번역 의뢰부터 기업 미팅, 해외 출장, 국제회의, 전시회, 계약 및 협상, 장기 글로벌 프로젝트까지 지원합니다.',
    ctaLabel: '기업 전담 상담 요청하기',
  },

  /* ── 02. 포지셔닝 ─────────────────────────── */
  positioning: {
    tags: ['Corporate', 'Global', 'Confidential', 'Professional'],
    heading: '기업 고객의 프로젝트는\n단순히 언어만 정확해서는 충분하지 않습니다.',
    paragraphs: [
      '산업에 대한 이해, 비즈니스 매너, 기밀 유지, 일정 대응, 그리고 프로젝트 전체를 관리할 수 있는 운영 역량이 필요합니다.',
      'CERTO는 프로젝트의 목적과 중요도를 먼저 이해하고 그에 적합한 전문가와 운영 방식을 제안합니다.',
    ],
  },

  /* ── 03. CERTO CORPORATE STANDARD ─────────── */
  standard: {
    eyebrow: 'CERTO Corporate Standard',
    heading: '기업 고객이 CERTO를 선택하는 이유',
    items: [
      {
        no: '01',
        en: 'Dedicated Project Manager',
        title: '기업 전담 프로젝트 관리',
        body: '문의부터 통역사·번역가 선정, 일정 조율, 자료 전달, 프로젝트 종료까지 담당자가 하나의 창구에서 관리합니다. 여러 명의 담당자에게 같은 내용을 반복해서 설명할 필요가 없습니다.',
      },
      {
        no: '02',
        en: 'Professional Matching',
        title: '프로젝트별 전문 인력 선별',
        body: '단순히 일정이 가능한 통역사를 연결하지 않습니다. 산업 분야, 프로젝트 목적, 통역 방식, 경력, 유사 프로젝트 경험을 종합해 업무에 적합한 전문가를 선별합니다.',
      },
      {
        no: '03',
        en: 'Confidentiality',
        title: '기업 정보 및 프로젝트 기밀 보호',
        body: '회의 자료, 계약 내용, 제품 정보, 사업 전략, 내부 문서 등 프로젝트 과정에서 전달되는 정보는 업무 목적으로만 관리합니다. 필요한 프로젝트는 NDA 및 비밀유지 절차 협의가 가능합니다.',
      },
      {
        no: '04',
        en: 'Multi-Language Management',
        title: '다국어 프로젝트 통합 관리',
        body: '영어, 일본어, 중국어를 비롯해 여러 국가와 언어가 동시에 필요한 경우에도 언어별 업체를 각각 찾을 필요가 없습니다. CERTO가 하나의 프로젝트로 통합하여 관리합니다.',
      },
      {
        no: '05',
        en: 'Global Coverage',
        title: '국내부터 해외 현지까지',
        body: '서울과 국내 주요 지역뿐 아니라 북미 · 유럽 · 아시아 · 중동 · 오세아니아 등 해외 프로젝트도 지원합니다. 해외 출장, 현지 기업 방문, 전시회, 바이어 미팅 등 프로젝트에 따라 현지 전문가 또는 동행 전문가를 제안합니다.',
      },
      {
        no: '06',
        en: 'Business Communication',
        title: '언어 이상의 비즈니스 커뮤니케이션',
        body: '기업 통역에서는 단어의 정확성만큼 회의의 목적과 분위기, 발언의 의도와 비즈니스 맥락을 이해하는 것이 중요합니다. CERTO는 기업 환경에 적합한 커뮤니케이션 역량을 갖춘 전문가를 우선적으로 선별합니다.',
      },
    ],
  },

  /* ── 04. 기업 발주 운영 환경 ──────────────── */
  operations: {
    eyebrow: 'Built for Corporate Projects',
    heading: '기업 발주에 필요한 운영 환경까지 고려합니다.',
    lead: 'CERTO AGENCY는 개인 고객뿐만 아니라 기업의 반복적인 통번역 업무와 장기 프로젝트를 지원할 수 있도록 운영합니다.',
    listHeading: '기업 고객 지원',
    items: [
      '기업 견적서 발행',
      '프로젝트별 견적 협의',
      '세금계산서 및 기업 결제 절차 대응',
      'NDA 및 비밀유지 절차 협의',
      '통역사·번역가 프로필 사전 확인',
      '기업별 용어 및 프로젝트 정보 관리',
      '반복 프로젝트 담당자 관리',
      '다국어 프로젝트 통합 관리',
      '해외 현지 통역 인력 매칭',
      '긴급 프로젝트 가능 여부 확인',
      '장기 협력 및 정기 프로젝트 협의',
    ],
    closing: '처음 한 번만 프로젝트 특성을 알려주세요.\n반복되는 업무는 CERTO가 더 효율적으로 이어갑니다.',
  },

  /* ── 05. 지속 파트너십 ────────────────────── */
  retention: {
    eyebrow: 'Why Corporate Clients Stay with CERTO',
    heading: '한 번의 프로젝트보다\n다음 프로젝트까지 생각합니다.',
    paragraphs: [
      '기업의 글로벌 업무는 한 번으로 끝나지 않습니다. 해외 파트너 미팅, 계약 협의, 출장, 전시회, 문서 번역, 정기 회의와 신규 국가 진출까지 프로젝트는 계속 이어집니다.',
      'CERTO는 단발성 공급업체가 아니라 기업의 글로벌 업무를 지속적으로 이해하는 파트너를 지향합니다.',
      '프로젝트가 반복될수록 기업의 용어, 업무 방식, 주요 담당자, 선호하는 커뮤니케이션 스타일을 이해하여 더 빠르고 안정적인 서비스를 제공할 수 있습니다.',
    ],
  },

  /* ── 06. 기업별 맞춤 운영 ─────────────────── */
  accountManagement: {
    eyebrow: 'Corporate Account Management',
    heading: '기업마다 다른 업무 방식을 이해합니다.',
    paragraphs: [
      '일반적인 통번역 업체처럼 매번 동일한 절차를 강요하지 않습니다.',
      '기업의 내부 프로세스와 프로젝트 특성에 맞추어 업무 방식을 협의할 수 있습니다.',
    ],
    listHeading: '기업별 맞춤 운영 예시',
    items: [
      '지정 담당자 운영',
      '프로젝트별 전문가 풀 구성',
      '반복 통역사 우선 배정',
      '기업 내부 용어 정리',
      '정기 번역 프로젝트 운영',
      '부서별 요청 통합 관리',
      '월별 프로젝트 관리',
      '해외 출장 일정별 인력 배정',
      '국가별 전문가 네트워크 활용',
      '긴급 프로젝트 우선 대응 협의',
    ],
    tagline: 'Your business works differently.\nYour language partner should understand that.',
  },

  /* ── 07. 산업 전문성 ──────────────────────── */
  industries: {
    eyebrow: 'Industry Expertise',
    heading: '전문 산업에는\n전문적인 이해가 필요합니다.',
    paragraphs: [
      '같은 영어를 사용하더라도 산업에 따라 사용하는 표현과 커뮤니케이션 방식은 완전히 다릅니다.',
      'CERTO는 프로젝트의 분야를 확인한 뒤 관련 경험과 전문성을 고려하여 인력을 배정합니다.',
    ],
    items: [
      { en: 'Technology & IT', ko: 'IT · SaaS · AI · 소프트웨어 · 플랫폼 · 데이터 · 게임' },
      { en: 'Finance & Investment', ko: '금융 · 투자 · IR · VC · PE · 증권 · 자산운용' },
      { en: 'Legal', ko: '계약 · 법률 미팅 · 국제 거래 · 법무 관련 프로젝트' },
      { en: 'Medical & Healthcare', ko: '의료 · 제약 · 바이오 · 의료기기 · 헬스케어' },
      { en: 'Manufacturing', ko: '제조 · 자동차 · 반도체 · 전자 · 기계 · 산업 장비' },
      { en: 'Retail & Consumer', ko: '패션 · 뷰티 · 소비재 · 유통 · 식품 · 브랜드' },
      { en: 'Education', ko: '교육기관 · 대학 · 국제학교 · 에듀테크 · 교육 콘텐츠' },
      { en: 'Government & Public', ko: '공공기관 · 협회 · 국제행사 · 정책 관련 프로젝트' },
      { en: 'Media & Content', ko: '방송 · 콘텐츠 · 엔터테인먼트 · 인터뷰 · 글로벌 미디어' },
    ],
  },

  /* ── 08. 임원 · VIP 통역 ──────────────────── */
  executive: {
    eyebrow: 'Executive & VIP Interpreting',
    heading: '중요한 사람을 위한\n중요한 커뮤니케이션',
    paragraphs: [
      '임원, 대표이사, 해외 파트너, VIP가 참여하는 일정은 일반적인 통역 프로젝트보다 더 높은 기준이 필요합니다.',
      'CERTO는 단순한 언어 능력뿐 아니라 비즈니스 매너, 현장 대응력, 의전 상황에 대한 이해까지 고려합니다.',
    ],
    listHeading: '지원 가능한 프로젝트',
    items: [
      'CEO / Executive Meeting',
      '해외 파트너사 임원 미팅',
      'VIP 수행 통역',
      '투자자 미팅',
      '해외 바이어 미팅',
      '공식 만찬',
      '기업 행사',
      '기자 인터뷰',
      '해외 출장 수행',
      '중요 계약 및 협상',
    ],
    tagline: 'For meetings where every word matters.',
  },

  /* ── 09. 해외 전시회 ──────────────────────── */
  exhibition: {
    eyebrow: 'International Exhibition Support',
    heading: '해외 전시회도 CERTO와 함께',
    paragraphs: [
      '해외 전시회에서는 단순 통역보다 현장 상황에 빠르게 대응할 수 있는 사람이 중요합니다.',
      'CERTO는 전시회 목적과 제품 특성을 확인한 뒤 현장에 적합한 통역 인력을 제안합니다.',
    ],
    listHeading: '전시회 통역 지원',
    items: [
      '부스 상주 통역',
      '바이어 상담',
      '제품 및 서비스 소개',
      'VIP 미팅',
      '현장 비즈니스 미팅',
      '파트너 발굴 미팅',
      '전시회 동행 통역',
      '행사 및 세미나 통역',
    ],
    regionsHeading: '주요 해외 지역',
    regions: [
      '미국',
      '캐나다',
      '영국',
      '프랑스',
      '독일',
      '이탈리아',
      '스페인',
      '일본',
      '중국',
      '홍콩',
      '싱가포르',
      '베트남',
      '태국',
      'UAE',
      '호주',
    ],
    tagline: 'From the exhibition floor to the boardroom.',
  },

  /* ── 10. 해외 출장 ────────────────────────── */
  businessTrip: {
    eyebrow: 'Overseas Business Trip',
    heading: '출장 일정 전체를 이해하는 통역 서비스',
    paragraphs: [
      '해외 출장은 하나의 미팅으로 끝나지 않습니다. 공항 이동부터 기업 방문, 공장 투어, 미팅, 만찬, 현지 일정까지 여러 상황에서 통역이 필요할 수 있습니다.',
      'CERTO는 출장의 목적과 전체 일정을 확인하고 적합한 통역 방식을 제안합니다.',
    ],
    itineraryHeading: '해외 출장 지원 사례',
    itinerary: [
      { day: 'Day 01', body: '현지 도착 · 일정 브리핑' },
      { day: 'Day 02', body: '파트너 기업 방문 · 비즈니스 미팅' },
      { day: 'Day 03', body: '공장 또는 사업장 방문 · 기술 통역' },
      { day: 'Day 04', body: '바이어 미팅 · 협상' },
      { day: 'Day 05', body: '현지 파트너 후속 미팅' },
    ],
    tagline: 'Business travel, professionally supported.',
  },

  /* ── 11. 기밀 프로젝트 ────────────────────── */
  confidential: {
    eyebrow: 'Legal & Confidential Projects',
    heading: '기밀이 중요한 프로젝트를 위한\nPrivate Language Service',
    paragraphs: [
      '일부 프로젝트는 통역의 정확도만큼 정보 관리가 중요합니다.',
      'CERTO는 프로젝트 성격에 따라 사전 기밀 관련 조건을 협의할 수 있습니다.',
    ],
    listHeading: '주요 대상',
    items: [
      '기업 내부 회의',
      '투자 및 M&A 관련 미팅',
      '계약 협상',
      '법률 관련 미팅',
      '임원 회의',
      '신규 사업 발표 전 프로젝트',
      '비공개 제품 및 기술',
      '내부 전략 자료',
      '인사 관련 프로젝트',
    ],
    closing: '필요 시 프로젝트 시작 전 NDA 체결 및 정보 관리 방식 협의가 가능합니다.',
  },

  /* ── 12. 기업 번역 ────────────────────────── */
  translation: {
    eyebrow: 'Translation for Business',
    heading: '번역은 문장을 바꾸는 일이 아니라\n기업의 메시지를 전달하는 일입니다.',
    lead: 'CERTO는 기업 문서의 목적과 독자를 고려하여 번역 프로젝트를 진행합니다.',
    listHeading: 'Corporate Documents',
    items: [
      '계약서',
      '제안서',
      '회사 소개서',
      '프레젠테이션',
      '사업 계획서',
      '보고서',
      'IR 자료',
      '제품 설명서',
      '웹사이트',
      '브로슈어',
      '매뉴얼',
      '이메일 및 비즈니스 문서',
      '교육자료',
      '마케팅 콘텐츠',
    ],
    workflowHeading: 'Translation Workflow',
    workflow: [
      { no: 'Step 01', en: 'Requirement Analysis', body: '언어, 분량, 분야, 사용 목적, 납기를 확인합니다.' },
      { no: 'Step 02', en: 'Translator Selection', body: '프로젝트 분야에 적합한 전문 번역가를 배정합니다.' },
      { no: 'Step 03', en: 'Translation', body: '문맥과 전문 용어를 고려하여 번역합니다.' },
      { no: 'Step 04', en: 'Review', body: '번역 내용과 용어의 일관성을 확인합니다.' },
      { no: 'Step 05', en: 'Delivery', body: '협의된 방식과 일정에 따라 납품합니다.' },
      { no: 'Step 06', en: 'Follow-up', body: '필요한 경우 수정 및 후속 프로젝트를 연결합니다.' },
    ],
  },

  /* ── 13. 인력 선별 기준 ───────────────────── */
  quality: {
    eyebrow: 'Quality Control',
    heading: '중요한 프로젝트일수록\n더 많은 기준을 확인합니다.',
    lead: 'CERTO는 통역사와 번역가를 단순 언어 능력만으로 판단하지 않습니다.',
    items: [
      { en: 'Industry Expertise', ko: '해당 산업과 전문 용어에 대한 이해' },
      { en: 'Relevant Experience', ko: '유사 프로젝트 수행 경험' },
      { en: 'Language Competency', ko: '안정적인 양방향 커뮤니케이션 능력' },
      { en: 'Business Manner', ko: '기업 미팅에 적합한 태도와 커뮤니케이션' },
      { en: 'Preparation', ko: '사전 자료 검토 및 프로젝트 준비도' },
      { en: 'On-site Response', ko: '현장에서 발생하는 변수에 대한 대응력' },
      { en: 'Confidentiality', ko: '기업 정보 및 프로젝트 기밀에 대한 이해' },
      { en: 'Professionalism', ko: '시간, 책임감, 커뮤니케이션에 대한 기준' },
    ],
  },

  /* ── 14. 프로젝트 운영 과정 ───────────────── */
  process: {
    eyebrow: 'Before Your Project',
    heading: '프로젝트 시작 전부터 준비합니다.',
    lead: 'CERTO는 다음 과정을 통해 프로젝트를 운영합니다.',
    steps: [
      {
        no: '01',
        en: 'Project Analysis',
        title: '프로젝트 파악',
        body: '왜 통역 또는 번역이 필요한지부터 확인합니다. 목적, 참석자, 산업, 장소, 통역 환경을 함께 정리합니다.',
      },
      {
        no: '02',
        en: 'Professional Selection',
        title: '전문가 검토',
        body: '언어만이 아니라 프로젝트 적합성을 확인합니다. 조건에 맞는 전문가를 선별하고 필요 시 프로필을 제공합니다.',
      },
      {
        no: '03',
        en: 'Preparation',
        title: '사전 준비',
        body: '기업에서 제공한 미팅 자료와 주요 용어, 일정 정보를 사전에 공유하고 확인합니다.',
      },
      {
        no: '04',
        en: 'Project Management',
        title: '일정 조율',
        body: '일정과 현장 정보를 담당자가 최종 조율합니다.',
      },
      {
        no: '05',
        en: 'Execution',
        title: '프로젝트 수행',
        body: '전문가가 현장 및 업무 상황에 맞게 서비스를 제공하고, CERTO 담당자가 진행을 관리합니다.',
      },
      {
        no: '06',
        en: 'Continuity',
        title: '피드백 및 다음 프로젝트 연결',
        body: '기업 담당자의 의견을 확인하고, 후속 프로젝트에서는 기존 업무 정보와 용어를 활용합니다.',
      },
    ],
  },

  /* ── 15. 전문가 네트워크 ──────────────────── */
  network: {
    eyebrow: 'Professional Network',
    heading: '하나의 프로젝트 뒤에는\n전문가 네트워크가 있습니다.',
    lead: 'CERTO는 프로젝트의 언어와 전문 분야에 따라 적합한 전문가를 연결합니다.',
    items: [
      { en: 'Interpreters', ko: '순차 · 수행 · 비즈니스 · 회의 · 전시회' },
      { en: 'Translators', ko: '기업 문서 · 법률 · 기술 · 마케팅 · 전문 번역' },
      { en: 'Local Professionals', ko: '해외 현지 프로젝트 및 출장 지원' },
      { en: 'Project Managers', ko: '기업 고객 프로젝트 관리' },
    ],
    tagline: 'The right professional for the right project.',
  },

  /* ── 16. 하나의 창구 ──────────────────────── */
  oneContact: {
    eyebrow: 'One Contact, Multiple Services',
    heading: '기업의 글로벌 업무를\n하나의 창구에서',
    paragraphs: [
      '기업이 해외 사업을 진행하면서 필요한 서비스는 다양합니다.',
      '통역은 A업체, 번역은 B업체, 출장은 C업체, 전시회는 D업체를 각각 찾을 필요가 없습니다. CERTO가 하나의 창구가 됩니다.',
    ],
    items: [
      { en: 'Interpreting', ko: '기업 미팅 · 수행 · 회의 · 전시회' },
      { en: 'Translation', ko: '기업 문서 · 계약 · 기술 · 마케팅' },
      { en: 'Overseas Support', ko: '출장 · 해외 현지 미팅 · 전시회' },
      { en: 'Global Project', ko: '복수 국가 · 복수 언어 프로젝트' },
      { en: 'Corporate Partnership', ko: '반복 · 장기 · 정기 프로젝트' },
    ],
  },

  /* ── 17. 구매·실무 담당자 지원 ────────────── */
  procurement: {
    eyebrow: 'For Procurement & Corporate Teams',
    heading: '기업 담당자가 편해야\n좋은 B2B 서비스입니다.',
    lead: 'CERTO는 실제 업무 담당자의 편의까지 생각합니다.',
    listHeading: '기업 담당자를 위한 지원',
    items: [
      { label: '견적 요청', body: '필요한 정보를 전달하면 프로젝트 조건을 검토합니다.' },
      { label: '인력 검토', body: '프로젝트에 따라 사전 프로필 확인이 가능합니다.' },
      { label: '일정 관리', body: '변경 및 추가 일정 발생 시 담당자와 협의합니다.' },
      { label: '정산', body: '기업 프로젝트에 필요한 정산 절차를 협의합니다.' },
      { label: '후속 프로젝트', body: '기존 프로젝트 정보를 기반으로 보다 빠르게 대응합니다.' },
    ],
  },

  /* ── 18. Corporate Partnership ────────────── */
  partnership: {
    eyebrow: 'Corporate Partnership',
    heading: '매번 새로운 업체를 찾지 않아도 됩니다.',
    paragraphs: [
      '통번역 업무가 반복되는 기업이라면 단발성 의뢰보다 Corporate Partnership 형태로 운영할 수 있습니다.',
      '해외 미팅, 번역, 출장, 전시회, 국제회의 등 여러 형태의 글로벌 커뮤니케이션 업무를 CERTO 한 곳에서 관리할 수 있습니다.',
    ],
    listHeading: 'Corporate Partnership 추천 기업',
    items: [
      '해외 사업이 지속적으로 발생하는 기업',
      '해외 바이어 및 파트너 미팅이 많은 기업',
      '정기적으로 계약서·제안서·보고서를 번역하는 기업',
      '해외 전시회 및 출장이 잦은 기업',
      '여러 언어가 동시에 필요한 글로벌 프로젝트 기업',
      '전담 통번역 파트너가 필요한 기업',
    ],
    tagline: 'One Partner.\nMultiple Languages.\nOne Standard.',
    ctaLabel: '기업 전담 상담 요청하기',
  },

  /* ── 19. 프로젝트 사례 ────────────────────── */
  cases: {
    eyebrow: 'Corporate Case Studies',
    heading: '이런 프로젝트를 지원합니다.',
    items: [
      {
        en: 'Executive Meeting',
        title: '해외 파트너사 임원 미팅',
        body: '기업 경영진과 해외 파트너 간 중요 미팅을 위한 전문 순차 통역',
      },
      {
        en: 'Global Exhibition',
        title: '해외 전시회 및 박람회',
        body: '부스 상담부터 바이어 미팅, 제품 설명, 현장 커뮤니케이션까지 지원',
      },
      {
        en: 'Business Negotiation',
        title: '해외 기업 협상',
        body: '계약 및 파트너십 논의 과정에서 정확한 의사 전달을 위한 전문 통역',
      },
      {
        en: 'Overseas Business Trip',
        title: '기업 해외 출장',
        body: '현지 기업 방문, 공장 방문, 파트너 미팅 및 일정 수행 통역',
      },
      {
        en: 'Confidential Documents',
        title: '기업 중요 문서 번역',
        body: '계약서, 제안서, 사업 자료, 프레젠테이션 및 전문 문서 번역',
      },
      {
        en: 'Multi-Language Project',
        title: '다국어 글로벌 프로젝트',
        body: '복수 국가 및 복수 언어가 필요한 프로젝트를 하나의 창구에서 통합 관리',
      },
    ],
  },

  /* ── 20. 긴급 프로젝트 ────────────────────── */
  urgent: {
    eyebrow: 'Urgent Project Support',
    heading: '갑자기 통역이 필요한 순간에도',
    situations: [
      '해외 고객의 갑작스러운 방문',
      '예정에 없던 해외 화상회의',
      '긴급 출장',
      '갑작스러운 전시회 인력 부족',
    ],
    body: '기업 업무에서는 예상하지 못한 상황이 발생합니다. CERTO는 프로젝트 조건과 전문가 일정에 따라 긴급 프로젝트 가능 여부를 신속하게 확인합니다.',
    ctaLabel: '긴급 프로젝트 문의',
  },

  /* ── 21. 기업 담당자 경험 ─────────────────── */
  experience: {
    eyebrow: 'Corporate Client Experience',
    heading: '기업 담당자가 원하는 것은\n단순한 ‘통역사 한 명’이 아닙니다.',
    points: [
      '필요한 날짜에 필요한 전문성을 갖춘 사람이 배정되고',
      '프로젝트 내용을 정확히 이해하며',
      '변경되는 일정에 대응하고',
      '중요한 자료가 안전하게 관리되며',
      '다음 프로젝트에서도 다시 처음부터 설명할 필요가 없는 것.',
    ],
    closing: 'CERTO는 이러한 기업의 업무 방식을 이해합니다.',
  },

  /* ── 22. 첫 의뢰 안내 ─────────────────────── */
  firstProject: {
    eyebrow: 'First Project with CERTO',
    heading: '처음 의뢰하시는 기업이라면\n복잡하게 준비하지 않으셔도 됩니다.',
    lead: '아래 정보만 전달해주시면 CERTO가 필요한 조건을 정리해드립니다.',
    items: [
      '날짜 및 시간',
      '장소 또는 국가',
      '필요한 언어',
      '프로젝트 내용',
      '예상 참석 인원',
      '필요한 통역 또는 번역 형태',
      '참고 자료 유무',
    ],
    closing: '잘 모르시는 부분은 상담 과정에서 함께 정리할 수 있습니다.',
    ctaLabel: '기업 프로젝트 견적 요청',
  },

  /* ── 23. 마지막 CTA ───────────────────────── */
  finalCta: {
    eyebrow: 'Agency for Global Business',
    heading: '기업이 해외와 연결되는 순간에는\n언어 이상의 전문성이 필요합니다.',
    points: [
      '적합한 전문가를 찾고',
      '프로젝트를 이해하고',
      '과정을 관리하고',
      '다음 프로젝트까지 연결합니다.',
    ],
    lead: '우리는 단순히 사람을 연결하지 않습니다.',
    scope: 'Interpreting · Translation · Global Business Support · Corporate Projects',
    tagline: 'Your Global Communication Partner.',
    ctaLabel: '기업 프로젝트 상담하기',
  },

  /* ── 24. Corporate FAQ ────────────────────── */
  faqs: [
    {
      q: '기업 계약도 가능한가요?',
      a: '네. 단발성 프로젝트부터 반복·장기 프로젝트까지 협의할 수 있습니다.',
    },
    {
      q: '여러 언어를 동시에 요청할 수 있나요?',
      a: '가능합니다. 복수 언어가 필요한 프로젝트도 하나의 창구에서 관리할 수 있습니다.',
    },
    {
      q: '통역사 프로필을 먼저 받을 수 있나요?',
      a: '프로젝트 특성에 따라 적합한 후보자의 경력과 정보를 사전에 확인할 수 있도록 협의 가능합니다.',
    },
    {
      q: 'NDA 체결이 가능한가요?',
      a: '기업 기밀이 포함된 프로젝트는 NDA 등 필요한 기밀 유지 절차를 협의할 수 있습니다.',
    },
    {
      q: '해외 현지 통역도 가능한가요?',
      a: '프로젝트 국가와 일정에 따라 현지 전문가 또는 출장 동행 형태로 검토합니다.',
    },
    {
      q: '장기적으로 같은 통역사를 배정할 수 있나요?',
      a: '일정과 프로젝트 조건이 맞는 경우 동일 전문가 또는 전담 후보군 중심으로 운영할 수 있습니다.',
    },
    {
      q: '긴급 프로젝트도 가능한가요?',
      a: '일정과 언어, 지역에 따라 가능 여부를 빠르게 확인합니다.',
    },
    {
      q: '기업 전담 담당자가 있나요?',
      a: '장기 또는 반복 프로젝트의 경우 효율적인 진행을 위해 담당 창구를 운영할 수 있습니다.',
    },
  ],

  /* ── 다른 서비스 ──────────────────────────── */
  related: [
    {
      label: '전문 통역',
      description: '동시·순차·수행 통역과 국제회의 지원',
      href: '/interpretation',
    },
    {
      label: '전문 번역',
      description: '계약서, 제안서, 기술 문서 등 전문 문서 번역',
      href: '/translation',
    },
    {
      label: '해외 통역',
      description: '해외 출장, 현지 미팅, 전시회 현장 지원',
      href: '/global',
    },
  ],
} as const;

export type BusinessPage = typeof businessPage;
