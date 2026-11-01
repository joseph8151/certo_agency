/**
 * 영문 도시 페이지 — "interpreter in Seoul" 같은 검색어용
 * 한국어 사이트의 국내 지역 페이지(korea-regions.ts)와 같은 사실을 영어 독자 기준으로 정리했습니다.
 * 서울 · 수도권은 현장 동행이 기본이고, 그 밖의 도시는 일정에 따라 가능 여부를 확인한다고 적습니다.
 */
import type { EnPage } from './types';

const base = {
  section: 'interpreter' as const,
  itemsEyebrow: 'Where you might need one',
  notesHeading: 'Planning your visit',
};

export const enCities: EnPage[] = [
  {
    ...base,
    slug: 'seoul',
    name: 'Seoul',
    h1: 'Interpreter in Seoul',
    lead: 'Seoul is where Korean headquarters, trade fairs, finance and law firms sit within one city, so the interpreter you need depends on which district your meeting is in.',
    facts: [
      {
        label: 'Districts we cover',
        value: 'Gangnam, Yeouido, Jongno, Mapo, Songpa, Seongsu and more',
      },
      { label: 'Time zone', value: 'KST, UTC+9, no daylight saving' },
      { label: 'Format', value: 'On-site interpreters in Seoul as standard' },
    ],
    itemsHeading: 'Business in Seoul, district by district',
    items: [
      {
        title: 'Gangnam, Samseong and COEX',
        body: 'Corporate headquarters, consulting and investment firms, and COEX, the main venue for international exhibitions and conferences.',
      },
      {
        title: 'Yeouido and Yeongdeungpo',
        body: 'Securities firms, asset managers and broadcasters. Interpreters here handle investor briefings and financial vocabulary.',
      },
      {
        title: 'Seocho and Gyodae',
        body: 'The court and law-firm district. Meetings with Korean lawyers need careful legal terminology, though interpreters do not give legal advice.',
      },
      {
        title: 'Jongno, Gwanghwamun and City Hall',
        body: 'Government offices and major company headquarters, where formal courtesy and titles matter.',
      },
      {
        title: 'Seongsu, Mapo and Hongdae',
        body: 'Start-ups, design, fashion and content companies. Meetings are shorter and less formal.',
      },
    ],
    notes: [
      {
        label: 'Allow travel time',
        body: 'Seoul traffic is heavy. If you have several meetings in one day, tell us the addresses and we plan the route with you.',
      },
      {
        label: 'Exhibition days',
        body: 'COEX and other large venues need registration and equipment access. Tell us the show name and dates early.',
      },
    ],
    faqs: [
      {
        q: 'Can I book an interpreter in Seoul at short notice?',
        a: 'Sometimes. It depends on the language and field. Send your dates and we check availability first; the earlier you tell us, the wider the choice.',
      },
      {
        q: 'Do you provide interpreters outside Seoul too?',
        a: 'Yes. See the pages for Busan, Daegu, Daejeon, Gwangju, Ulsan, Incheon and Jeju, or ask about any other city.',
      },
      {
        q: 'What languages can you interpret with Korean?',
        a: 'English, Japanese and Chinese are the most requested. We support 39 languages in total; see our languages list.',
      },
    ],
    related: [
      'services/business-interpreter-korea',
      'services/trade-show-interpreter-korea',
      'services/escort-interpreter-korea',
    ],
    seoTitle: 'Interpreter in Seoul | Korean–English Business Interpreter',
    seoDescription:
      'Hire a business interpreter in Seoul — Gangnam, Yeouido, COEX and beyond. Korean–English, Japanese, Chinese and more. Request a quote from CERTO AGENCY.',
    keywords: [
      'interpreter in Seoul',
      'Seoul interpreter',
      'Korean interpreter Seoul',
      'hire interpreter Seoul',
      'Gangnam interpreter',
      'COEX interpreter',
    ],
  },
  {
    ...base,
    slug: 'gyeonggi',
    name: 'Gyeonggi (Pangyo, Suwon, Pyeongtaek)',
    h1: 'Interpreter in Gyeonggi: Pangyo, Suwon and Pyeongtaek',
    lead: 'Gyeonggi Province surrounds Seoul and holds Korea’s tech campuses, semiconductor plants and industrial parks, so distance is the main variable in planning an interpreter.',
    facts: [
      { label: 'Key areas', value: 'Pangyo, Suwon, Hwaseong, Pyeongtaek, Yongin, Ansan, Goyang' },
      { label: 'Time from Seoul', value: 'Roughly 30 minutes to 2 hours by road' },
      { label: 'Format', value: 'Interpreter travels with you or meets on site' },
    ],
    itemsHeading: 'Where the work is',
    items: [
      {
        title: 'Pangyo Techno Valley',
        body: 'Software, gaming and bio companies. Technology partnership and investor meetings.',
      },
      {
        title: 'Suwon, Hwaseong, Pyeongtaek and Yongin',
        body: 'Electronics and semiconductor manufacturing and suppliers. Plant visits require security procedures and site approval.',
      },
      {
        title: 'Ansan and Siheung industrial parks',
        body: 'Metal, chemical and machinery parts suppliers. Quality discussions on the shop floor.',
      },
      {
        title: 'Goyang and KINTEX',
        body: 'KINTEX hosts large trade shows. Interpreters are often needed for several days in a row.',
      },
    ],
    notes: [
      {
        label: 'Site access',
        body: 'Many plants and research centres need the interpreter’s name for approval days ahead. Tell us your visit date as soon as it is fixed.',
      },
      {
        label: 'Plan the drive',
        body: 'Travel between sites can take as long as a meeting. Ask us to propose a route.',
      },
    ],
    faqs: [
      {
        q: 'Can the interpreter travel with us from Seoul?',
        a: 'Yes. For capital-area visits the interpreter usually starts in Seoul and travels with you. Travel is quoted per trip.',
      },
      {
        q: 'Can you interpret inside semiconductor or electronics plants?',
        a: 'We match interpreters with industry experience and arrange the access paperwork with your host.',
      },
    ],
    related: [
      'interpreter/seoul',
      'services/factory-audit-interpreter-korea',
      'services/trade-show-interpreter-korea',
    ],
    seoTitle: 'Interpreter in Gyeonggi | Pangyo, Suwon, Pyeongtaek, KINTEX',
    seoDescription:
      'Interpreters for factory visits and meetings in Pangyo, Suwon, Pyeongtaek and KINTEX. Korean–English and other languages. Request a quote from CERTO AGENCY.',
    keywords: [
      'interpreter Pangyo',
      'interpreter Suwon',
      'interpreter Pyeongtaek',
      'KINTEX interpreter',
      'Gyeonggi interpreter',
    ],
  },
  {
    ...base,
    slug: 'incheon',
    name: 'Incheon (Songdo, Airport)',
    h1: 'Interpreter in Incheon: Songdo and the airport',
    lead: 'Incheon combines the international airport, a major port, Songdo’s bio and convention district, and long-established industrial parks.',
    facts: [
      { label: 'Key areas', value: 'Songdo, Cheongna, Yeongjong (airport), Bupyeong, Namdong' },
      { label: 'Time from Seoul', value: 'About 1 hour' },
      { label: 'Format', value: 'Airport greeting through to meetings' },
    ],
    itemsHeading: 'Typical Incheon assignments',
    items: [
      {
        title: 'Airport arrival and greeting',
        body: 'Meeting guests at Incheon Airport and interpreting during the transfer and first meetings.',
      },
      {
        title: 'Songdo bio and conventions',
        body: 'Biopharma facilities, research labs and the Songdo convention centre. Specialist vocabulary needs advance material.',
      },
      {
        title: 'Industrial parks',
        body: 'Bupyeong and Namdong host auto-parts, metal and chemical suppliers.',
      },
    ],
    notes: [
      {
        label: 'Flight times',
        body: 'Give us your flight number so the interpreter can be at arrivals when you land, even if the flight is delayed.',
      },
      {
        label: 'Biopharma terms',
        body: 'Medical and pharmaceutical wording has little margin for error. Share glossaries in advance.',
      },
    ],
    faqs: [
      {
        q: 'Can an interpreter meet us at Incheon Airport?',
        a: 'Yes. Send your flight details and we plan the greeting and transfer.',
      },
      {
        q: 'Do you cover Songdo conferences?',
        a: 'Yes, in simultaneous or consecutive format. Tell us the event and we plan the team and equipment.',
      },
    ],
    related: [
      'interpreter/seoul',
      'services/conference-interpreter-korea',
      'services/escort-interpreter-korea',
    ],
    seoTitle: 'Interpreter in Incheon | Songdo & Incheon Airport',
    seoDescription:
      'Interpreters in Incheon: airport greeting, Songdo bio and convention events, and industrial park visits. Korean–English and more. Request a quote.',
    keywords: [
      'interpreter Incheon',
      'Songdo interpreter',
      'Incheon airport interpreter',
      'Korean interpreter Incheon',
    ],
  },
  {
    ...base,
    slug: 'busan',
    name: 'Busan',
    h1: 'Interpreter in Busan',
    lead: 'Busan is Korea’s main port city, with shipping, logistics and marine equipment companies, plus BEXCO, the largest exhibition venue outside the capital area.',
    facts: [
      { label: 'Key areas', value: 'Haeundae, Centum City (BEXCO), Seomyeon, Gangseo, Busan Port' },
      { label: 'From Seoul', value: 'About 2.5 hours by KTX' },
      { label: 'Format', value: 'Local interpreters, or travelling with you from Seoul' },
    ],
    itemsHeading: 'What brings visitors to Busan',
    items: [
      {
        title: 'BEXCO exhibitions',
        body: 'International fairs in Centum City. Booth interpreting and buyer meetings across several days.',
      },
      {
        title: 'Port, shipping and logistics',
        body: 'Meetings with shipping lines, forwarders and port authorities, with transport and customs vocabulary.',
      },
      {
        title: 'Marine and machinery suppliers',
        body: 'Factories around Gangseo and Noksan. Plant tours need safety briefings.',
      },
    ],
    notes: [
      {
        label: 'Day trips from Seoul',
        body: 'KTX makes a one-day trip possible. A local interpreter avoids travel time; a Seoul interpreter keeps continuity with earlier meetings.',
      },
      {
        label: 'Trade show season',
        body: 'Interpreters and hotels fill quickly around big BEXCO events.',
      },
    ],
    faqs: [
      {
        q: 'Can you provide an interpreter in Busan?',
        a: 'Yes. Give us your dates, language pair and topic, and we confirm availability and the best set-up.',
      },
      {
        q: 'Do you cover BEXCO events?',
        a: 'Yes. Tell us the event and dates and we plan the team.',
      },
    ],
    related: [
      'services/trade-show-interpreter-korea',
      'services/factory-audit-interpreter-korea',
      'interpreter/seoul',
    ],
    seoTitle: 'Interpreter in Busan | BEXCO, Port & Business Meetings',
    seoDescription:
      'Business and trade-show interpreters in Busan — BEXCO, Haeundae, port and logistics meetings. Korean–English and more. Request a quote from CERTO AGENCY.',
    keywords: [
      'interpreter in Busan',
      'Busan interpreter',
      'BEXCO interpreter',
      'Korean interpreter Busan',
    ],
  },
  {
    ...base,
    slug: 'daegu',
    name: 'Daegu',
    h1: 'Interpreter in Daegu',
    lead: 'Daegu has strong textile, machinery and auto-parts industries and hosts EXCO, the main exhibition and convention centre of the Yeongnam region.',
    facts: [
      { label: 'Key areas', value: 'EXCO, Dongdaegu, Suseong-gu, Seongseo Industrial Complex' },
      { label: 'From Seoul', value: 'About 1 hr 50 min by KTX' },
      { label: 'Format', value: 'On-site, from Daegu or from Seoul' },
    ],
    itemsHeading: 'Where interpreters are used in Daegu',
    items: [
      {
        title: 'EXCO fairs and conferences',
        body: 'Industrial exhibitions and academic meetings at EXCO.',
      },
      {
        title: 'Seongseo Industrial Complex',
        body: 'Machinery, metal and auto-parts makers. Supplier meetings and plant visits.',
      },
      {
        title: 'Technopolis and Dalseong',
        body: 'Newer industrial and research zones where Korean and foreign firms work together.',
      },
    ],
    notes: [
      {
        label: 'Textile and machinery terms',
        body: 'Materials and process vocabulary is specialised. Share product sheets beforehand.',
      },
      {
        label: 'KTX from Seoul',
        body: 'Most visitors arrive at Dongdaegu station. Tell us the transfer plan so the interpreter meets you there.',
      },
    ],
    faqs: [
      {
        q: 'Is there an interpreter available in Daegu?',
        a: 'Depends on the language and field. Send the details and we confirm availability.',
      },
      {
        q: 'Can you cover an EXCO exhibition?',
        a: 'Yes, subject to availability. Give us the event name and dates.',
      },
    ],
    related: [
      'interpreter/busan',
      'services/factory-audit-interpreter-korea',
      'services/trade-show-interpreter-korea',
    ],
    seoTitle: 'Interpreter in Daegu | EXCO & Industrial Visits',
    seoDescription:
      'Interpreters for EXCO events and factory visits in Daegu. Korean–English and other languages. Request a quote from CERTO AGENCY.',
    keywords: [
      'interpreter in Daegu',
      'Daegu interpreter',
      'EXCO interpreter',
      'Korean interpreter Daegu',
    ],
  },
  {
    ...base,
    slug: 'daejeon',
    name: 'Daejeon',
    h1: 'Interpreter in Daejeon',
    lead: 'Daejeon is Korea’s science city. Government research institutes, universities and technology firms in Daedeok make it a centre for joint research and technology transfer.',
    facts: [
      {
        label: 'Key areas',
        value: 'Daedeok Research Complex, Daedeok Technovalley, Yuseong, Dunsan',
      },
      { label: 'From Seoul', value: 'About 1 hour by KTX' },
      { label: 'Format', value: 'Interpreter for research and technical meetings' },
    ],
    itemsHeading: 'Research and technology meetings',
    items: [
      {
        title: 'Joint research and technology transfer',
        body: 'Discussions between foreign companies or universities and Korean research institutes. Papers and presentations help interpreters prepare.',
      },
      {
        title: 'Daedeok Technovalley start-ups',
        body: 'Technology partnerships and investment talks with venture companies.',
      },
      {
        title: 'Dunsan government offices',
        body: 'Courts, finance and administration. Formal meetings with careful wording.',
      },
    ],
    notes: [
      {
        label: 'Specialised vocabulary',
        body: 'Each lab has its own terms. The more material you share, the better the interpreting.',
      },
      {
        label: 'Security zones',
        body: 'Some research facilities need visitor approval in advance.',
      },
    ],
    faqs: [
      {
        q: 'Can you interpret at a Korean research institute?',
        a: 'Yes. Tell us the field and we match an interpreter with experience in it.',
      },
      {
        q: 'Can you cover a scientific seminar?',
        a: 'Yes, in consecutive or simultaneous format depending on size.',
      },
    ],
    related: [
      'services/conference-interpreter-korea',
      'services/business-interpreter-korea',
      'interpreter/seoul',
    ],
    seoTitle: 'Interpreter in Daejeon | Daedeok Research & Technology Meetings',
    seoDescription:
      'Interpreters for research institutes and technology meetings in Daejeon and Daedeok. Korean–English and more. Request a quote from CERTO AGENCY.',
    keywords: [
      'interpreter in Daejeon',
      'Daejeon interpreter',
      'Daedeok interpreter',
      'Korean research interpreter',
    ],
  },
  {
    ...base,
    slug: 'gwangju',
    name: 'Gwangju',
    h1: 'Interpreter in Gwangju',
    lead: 'Gwangju is the centre of Korea’s south-west with automotive, home-appliance, optics and AI industries and the Kim Dae-jung Convention Center.',
    facts: [
      { label: 'Key areas', value: 'Sangmu, Cheomdan, Gwangsan, Hanam Industrial Complex' },
      { label: 'From Seoul', value: 'About 2 hours by KTX' },
      { label: 'Format', value: 'Local or travelling interpreters' },
    ],
    itemsHeading: 'What interpreters do in Gwangju',
    items: [
      {
        title: 'Sangmu convention and government',
        body: 'Conferences and official meetings in the administrative district.',
      },
      {
        title: 'Cheomdan and Gwangsan',
        body: 'Research and venture companies, and auto-parts and appliance makers.',
      },
      {
        title: 'Regional trips',
        body: 'Gwangju is a base for trips to Naju or the south coast industrial areas. Plan travel time.',
      },
    ],
    notes: [
      {
        label: 'Regional links',
        body: 'If you also plan visits in Jeonnam, tell us the route and we plan interpreter coverage.',
      },
      {
        label: 'Availability',
        body: 'Local interpreters are limited by language. We check first and propose alternatives.',
      },
    ],
    faqs: [
      {
        q: 'Can you provide an interpreter in Gwangju?',
        a: 'Send your language, date and topic and we confirm availability.',
      },
      {
        q: 'Do you cover auto-parts factory visits?',
        a: 'Yes, with interpreters familiar with manufacturing terms.',
      },
    ],
    related: [
      'services/factory-audit-interpreter-korea',
      'interpreter/daejeon',
      'interpreter/seoul',
    ],
    seoTitle: 'Interpreter in Gwangju | Business & Factory Visit Interpreters',
    seoDescription:
      'Interpreters in Gwangju for business meetings and factory visits. Korean–English and other languages. Request a quote from CERTO AGENCY.',
    keywords: ['interpreter in Gwangju', 'Gwangju interpreter', 'Korean interpreter Gwangju'],
  },
  {
    ...base,
    slug: 'ulsan',
    name: 'Ulsan',
    h1: 'Interpreter in Ulsan',
    lead: 'Ulsan is Korea’s industrial heartland, where automotive, shipbuilding and petrochemical plants sit side by side, so most interpreting happens on the factory floor.',
    facts: [
      { label: 'Key areas', value: 'Ulsan Mipo and Onsan national industrial complexes' },
      { label: 'From Seoul', value: 'About 2 hr 20 min by KTX' },
      { label: 'Format', value: 'Plant and meeting-room interpreting' },
    ],
    itemsHeading: 'Typical Ulsan assignments',
    items: [
      {
        title: 'Automotive and parts suppliers',
        body: 'Quality and delivery discussions with auto-parts makers.',
      },
      {
        title: 'Shipbuilding and heavy industry',
        body: 'Technical meetings on equipment and production schedules.',
      },
      {
        title: 'Petrochemical and materials',
        body: 'Process and safety discussions. Safety training is required before entering.',
      },
    ],
    notes: [
      {
        label: 'Safety training',
        body: 'Chemical and heavy-industry sites require a safety briefing and protective gear. The interpreter goes through the same steps, so tell us early.',
      },
      {
        label: 'Technical glossary',
        body: 'Process vocabulary matters. Send documents beforehand.',
      },
    ],
    faqs: [
      {
        q: 'Can an interpreter go inside Ulsan plants?',
        a: 'Yes, once access is approved. Give us your host’s requirements and the visit date.',
      },
      {
        q: 'Do you have shipbuilding experience?',
        a: 'We check for experience in your sector first and tell you honestly if a match is limited.',
      },
    ],
    related: ['services/factory-audit-interpreter-korea', 'interpreter/busan', 'interpreter/seoul'],
    seoTitle: 'Interpreter in Ulsan | Factory & Industrial Visit Interpreters',
    seoDescription:
      'Interpreters for automotive, shipbuilding and petrochemical visits in Ulsan. Korean–English and more. Request a quote from CERTO AGENCY.',
    keywords: [
      'interpreter in Ulsan',
      'Ulsan interpreter',
      'Korean factory interpreter',
      'Ulsan industrial interpreter',
    ],
  },
  {
    ...base,
    slug: 'jeju',
    name: 'Jeju',
    h1: 'Interpreter in Jeju',
    lead: 'Jeju is Korea’s main island destination and the home of ICC Jeju, a convention centre for international meetings, forums and incentive trips.',
    facts: [
      { label: 'Key areas', value: 'ICC Jeju (Jungmun), Seogwipo, Jeju City' },
      { label: 'From Seoul', value: 'About 1 hour by air' },
      { label: 'Format', value: 'Event interpreting, often with an interpreter from Seoul' },
    ],
    itemsHeading: 'Why people hire interpreters in Jeju',
    items: [
      {
        title: 'International conferences',
        body: 'Events at ICC Jeju in simultaneous or consecutive format, planned with the organiser.',
      },
      {
        title: 'Tourism and hospitality partnerships',
        body: 'Meetings with resort and travel companies on sales conditions.',
      },
      {
        title: 'Corporate retreats',
        body: 'Interpreting for groups that mix meetings and activities.',
      },
    ],
    notes: [
      {
        label: 'Flights',
        body: 'Everyone flies in. Weather can change schedules, so allow buffer time.',
      },
      {
        label: 'Peak season',
        body: 'Flights and hotels fill early in high season. Book interpreter travel at the same time.',
      },
    ],
    faqs: [
      {
        q: 'Can you interpret an event at ICC Jeju?',
        a: 'Yes. Send the programme and dates and we plan the team.',
      },
      {
        q: 'Do you have interpreters based in Jeju?',
        a: 'It depends on the language. We often send an interpreter from Seoul and confirm this with you in advance.',
      },
    ],
    related: ['services/conference-interpreter-korea', 'interpreter/seoul', 'interpreter/busan'],
    seoTitle: 'Interpreter in Jeju | ICC Jeju Conferences & Events',
    seoDescription:
      'Conference and business interpreters in Jeju, including ICC Jeju events. Korean–English and more. Request a quote from CERTO AGENCY.',
    keywords: [
      'interpreter in Jeju',
      'Jeju interpreter',
      'ICC Jeju interpreter',
      'Korean interpreter Jeju',
    ],
  },
];
