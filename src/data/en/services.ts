/**
 * 영문 서비스 페이지 — 한국을 방문하는 외국 기업 · 방문객 대상
 * 문구는 한국어 사이트의 서비스 범위(통역 · 문서 지원)와 같은 사실만 담습니다.
 */
import type { EnPage } from './types';

const base = {
  section: 'services' as const,
  notesHeading: 'Before you book',
};

export const enServices: EnPage[] = [
  {
    ...base,
    slug: 'business-interpreter-korea',
    name: 'Business interpreter in Korea',
    h1: 'Business interpreter in Korea',
    lead: 'A business interpreter for your meetings in Seoul and across Korea — buyer meetings, negotiations, supplier visits and partner discussions — matched to your industry rather than just your language.',
    facts: [
      { label: 'Languages', value: 'Korean ↔ English, Japanese, Chinese and 36 more' },
      { label: 'Where', value: 'Seoul and the capital area; other cities on request' },
      { label: 'Format', value: 'On-site, or by video call' },
    ],
    itemsHeading: 'Where a business interpreter helps',
    items: [
      {
        title: 'First meetings with Korean partners',
        body: 'Introductions, company overviews and early conditions. The interpreter handles titles and tone so the first impression is right.',
      },
      {
        title: 'Price and contract negotiations',
        body: 'Numbers, delivery dates and liability wording are passed on exactly as said — nothing softened, nothing added.',
      },
      {
        title: 'Technical and quality meetings',
        body: 'Specifications, drawings and test results. Send your materials in advance and we match an interpreter who has worked in your field.',
      },
      {
        title: 'Ongoing project calls',
        body: 'For repeat meetings, the same interpreter can be kept so terminology and context carry over.',
      },
    ],
    notes: [
      {
        label: 'Share the agenda',
        body: 'Send the agenda, attendee list and any slides or contract drafts a few days ahead. Preparation is the biggest factor in interpreting quality.',
      },
      {
        label: 'Interpreting is not advice',
        body: 'Interpreters convey what is said. They do not give legal, financial or regulatory advice.',
      },
    ],
    faqs: [
      {
        q: 'How far in advance should I book an interpreter in Korea?',
        a: 'Two weeks ahead gives the widest choice. During large trade shows or for less common languages, tell us as soon as your dates are fixed.',
      },
      {
        q: 'Will you match an interpreter who knows my industry?',
        a: 'Yes. We ask about your industry, attendees and topics first, then propose an interpreter who has handled similar meetings.',
      },
      {
        q: 'Can the same interpreter join several meetings?',
        a: 'Usually yes. If your trip spans several days or cities, tell us the schedule and we plan the team around it.',
      },
    ],
    related: [
      'services/escort-interpreter-korea',
      'services/factory-audit-interpreter-korea',
      'guides/how-to-hire-an-interpreter-in-korea',
    ],
    seoTitle: 'Business Interpreter in Korea | Seoul Korean–English Interpreter',
    seoDescription:
      'Hire a business interpreter in Seoul or anywhere in Korea. Korean–English, Japanese, Chinese and more, matched to your industry. Request a quote from CERTO AGENCY.',
    keywords: [
      'business interpreter in Korea',
      'Korean interpreter Seoul',
      'hire interpreter in Korea',
      'Korean English interpreter',
      'business interpreter Seoul',
    ],
  },
  {
    ...base,
    slug: 'trade-show-interpreter-korea',
    name: 'Trade show interpreter in Korea',
    h1: 'Trade show and exhibition interpreter in Korea',
    lead: 'An interpreter for your booth at Korean trade shows such as COEX and KINTEX — fast, accurate conversations with Korean buyers across a full show day.',
    facts: [
      { label: 'Typical venues', value: 'COEX, KINTEX, aT Center, BEXCO, EXCO' },
      { label: 'Format', value: 'Booth interpreting and scheduled buyer meetings' },
      { label: 'Booking tip', value: 'Book as soon as your show dates are fixed' },
    ],
    itemsHeading: 'What a booth interpreter does',
    items: [
      {
        title: 'Booth conversations',
        body: 'Short, repeated conversations with visitors. We learn your product names and specifications beforehand so answers are quick and consistent.',
      },
      {
        title: 'Scheduled buyer meetings',
        body: 'For pre-arranged buyers, the interpreter joins the meeting and, if you wish, notes the follow-up points.',
      },
      {
        title: 'Card collection and follow-up',
        body: 'Agree in advance how business cards and requests are logged so nothing is lost after the show.',
      },
    ],
    notes: [
      {
        label: 'Send product material',
        body: 'Catalogues, price lists and spec sheets let the interpreter prepare names, units and figures.',
      },
      {
        label: 'Plan breaks',
        body: 'Standing and speaking all day is tiring. For multi-day shows we recommend two interpreters taking turns.',
      },
    ],
    faqs: [
      {
        q: 'Which Korean trade shows can you cover?',
        a: 'Tell us the show name and dates. We confirm availability for shows in Seoul, Goyang (KINTEX), Busan, Daegu and other cities.',
      },
      {
        q: 'Do I need one interpreter or two?',
        a: 'One is usually enough for a single day. For several days or a busy booth, two interpreters keep quality high.',
      },
    ],
    related: ['services/business-interpreter-korea', 'interpreter/seoul', 'interpreter/busan'],
    seoTitle: 'Trade Show Interpreter in Korea | COEX, KINTEX, BEXCO',
    seoDescription:
      'Booth and buyer-meeting interpreters for Korean trade shows at COEX, KINTEX, BEXCO and more. Korean–English and other languages. Get a quote from CERTO AGENCY.',
    keywords: [
      'trade show interpreter Korea',
      'exhibition interpreter Seoul',
      'COEX interpreter',
      'KINTEX interpreter',
      'booth interpreter Korea',
    ],
  },
  {
    ...base,
    slug: 'factory-audit-interpreter-korea',
    name: 'Factory visit and audit interpreter',
    h1: 'Factory visit and audit interpreter in Korea',
    lead: 'An interpreter for supplier audits, plant tours and production meetings at Korean factories, where safety rules, noise and specialist vocabulary all matter.',
    facts: [
      {
        label: 'Typical sites',
        value: 'Industrial complexes around Seoul, Incheon, Pyeongtaek, Ulsan, Changwon',
      },
      { label: 'Format', value: 'On-site, walking tours and meeting rooms' },
      { label: 'Needs', value: 'Site access approval and safety briefing' },
    ],
    itemsHeading: 'What we prepare for',
    items: [
      {
        title: 'Supplier and quality audits',
        body: 'Questions and answers on the record. The interpreter flags vague answers so you can ask again.',
      },
      {
        title: 'Production line tours',
        body: 'Short explanations while walking the line. In noisy areas we use whispered or wireless interpreting.',
      },
      {
        title: 'Installation and commissioning',
        body: 'Instructions between your engineers and the factory team during equipment set-up.',
      },
    ],
    notes: [
      {
        label: 'Access and safety',
        body: 'Many Korean plants require advance approval, with the interpreter’s name on the visitor list, and a safety briefing with protective equipment.',
      },
      {
        label: 'Photography',
        body: 'Photos and video are often restricted inside plants. Check with your host before the visit.',
      },
    ],
    faqs: [
      {
        q: 'Can the interpreter be added to the visitor access list?',
        a: 'Yes. Send us the site’s access requirements and we provide the interpreter’s details in time.',
      },
      {
        q: 'Is the interpreter familiar with manufacturing terms?',
        a: 'We match interpreters with experience in your sector and ask for your checklist and glossary beforehand.',
      },
    ],
    related: [
      'services/business-interpreter-korea',
      'interpreter/busan',
      'guides/how-to-hire-an-interpreter-in-korea',
    ],
    seoTitle: 'Factory Visit & Audit Interpreter in Korea | Supplier Audits',
    seoDescription:
      'Interpreters for supplier audits, factory tours and production meetings in Korea. Sector-matched Korean–English and other languages. Request a quote from CERTO AGENCY.',
    keywords: [
      'factory audit interpreter Korea',
      'supplier audit interpreter',
      'factory visit interpreter Korea',
      'manufacturing interpreter Korea',
    ],
  },
  {
    ...base,
    slug: 'conference-interpreter-korea',
    name: 'Conference interpreter (simultaneous)',
    h1: 'Conference and simultaneous interpreters in Korea',
    lead: 'Simultaneous interpreting for conferences, seminars and corporate events in Korea, with the booth, receivers and interpreter team planned together.',
    facts: [
      { label: 'Method', value: 'Simultaneous (booth) or consecutive' },
      { label: 'Team', value: 'Two interpreters per language, taking turns' },
      { label: 'Needs', value: 'Booth and receivers, or remote platform' },
    ],
    itemsHeading: 'How a conference is set up',
    items: [
      {
        title: 'Choose the method',
        body: 'Large audiences and long presentations suit simultaneous interpreting. Smaller discussions work better with consecutive.',
      },
      {
        title: 'Team and equipment',
        body: 'Simultaneous interpreters work in pairs because the work is intensive. Booth and receivers are arranged with the venue.',
      },
      {
        title: 'Materials in advance',
        body: 'Speeches, slides and speaker bios received ahead let interpreters prepare terminology and names.',
      },
    ],
    notes: [
      {
        label: 'Equipment',
        body: 'Tell us the venue early so we can check whether interpreting equipment is available or must be hired.',
      },
      {
        label: 'Relay interpreting',
        body: 'For uncommon language pairs, interpreting may pass through English, which adds a little delay.',
      },
    ],
    faqs: [
      {
        q: 'Can you provide interpreting equipment?',
        a: 'It depends on the venue. Share the location and audience size and we confirm what is needed.',
      },
      {
        q: 'Can you cover an online conference?',
        a: 'Yes. Remote simultaneous interpreting depends on your platform; we confirm the set-up before the event.',
      },
    ],
    related: [
      'services/business-interpreter-korea',
      'services/remote-interpreter-korea',
      'interpreter/seoul',
    ],
    seoTitle: 'Conference & Simultaneous Interpreters in Korea',
    seoDescription:
      'Simultaneous and consecutive conference interpreters in Seoul and across Korea. Booth, receivers and team planned with you. Request a quote from CERTO AGENCY.',
    keywords: [
      'conference interpreter Korea',
      'simultaneous interpreter Seoul',
      'event interpreter Korea',
      'seminar interpreter Korea',
    ],
  },
  {
    ...base,
    slug: 'escort-interpreter-korea',
    name: 'Escort interpreter for visitors',
    h1: 'Escort interpreter for visitors to Korea',
    lead: 'An interpreter who stays with you through the day — meetings, site visits, transfers and meals — so you never have to manage the language gap alone.',
    facts: [
      { label: 'Best for', value: 'Executives and delegations visiting Korea' },
      { label: 'Format', value: 'Full day or multi-day accompaniment' },
      { label: 'Includes', value: 'Interpreting at meetings, visits and meals' },
    ],
    itemsHeading: 'Typical escort days',
    items: [
      {
        title: 'Executive visits',
        body: 'Airport arrival, meetings with Korean partners, dinners and site tours, all interpreted by one person who knows your agenda.',
      },
      {
        title: 'Delegations',
        body: 'For groups, the interpreter keeps the schedule moving and whispers translation to the lead guest.',
      },
      {
        title: 'Multi-city trips',
        body: 'Seoul to Busan or Ulsan in one trip. Tell us the route and we plan transport and interpreter coverage.',
      },
    ],
    notes: [
      {
        label: 'Share the itinerary',
        body: 'A day-by-day itinerary with names and titles of everyone you will meet lets the interpreter prepare.',
      },
      {
        label: 'Define the scope',
        body: 'Agree in advance whether interpreting also covers dinners, so the hours are clear.',
      },
    ],
    faqs: [
      {
        q: 'Can the interpreter meet us at Incheon Airport?',
        a: 'Yes. Send the flight details and we plan the arrival and the transfer into the schedule.',
      },
      {
        q: 'Is whispered interpreting available?',
        a: 'Yes, for one or two listeners. For larger groups we recommend equipment.',
      },
    ],
    related: [
      'services/business-interpreter-korea',
      'interpreter/seoul',
      'guides/korean-business-etiquette-for-visitors',
    ],
    seoTitle: 'Escort Interpreter in Korea | Interpreter for Visiting Executives',
    seoDescription:
      'A personal interpreter for executives and delegations visiting Korea — meetings, site visits, transfers and dinners. Request a quote from CERTO AGENCY.',
    keywords: [
      'escort interpreter Korea',
      'interpreter for visitors Korea',
      'executive interpreter Seoul',
      'Korean interpreter for delegation',
    ],
  },
  {
    ...base,
    slug: 'remote-interpreter-korea',
    name: 'Remote / video-call interpreter',
    h1: 'Remote Korean interpreter for video calls',
    lead: 'A Korean interpreter who joins your Zoom or Teams meeting — useful for recurring calls with Korean partners when nobody needs to travel.',
    facts: [
      { label: 'Platforms', value: 'Zoom, Microsoft Teams and similar' },
      { label: 'Format', value: 'Consecutive or simultaneous, by platform support' },
      { label: 'Time zones', value: 'We schedule around Korea Standard Time (UTC+9)' },
    ],
    itemsHeading: 'Making a remote call work',
    items: [
      {
        title: 'Audio first',
        body: 'Good headsets and a quiet room matter more than video quality. We run a short connection test before important calls.',
      },
      {
        title: 'Turn-taking',
        body: 'Agree that one person speaks at a time. Interpreters cannot work on overlapping speech.',
      },
      {
        title: 'Recurring calls',
        body: 'For weekly or monthly meetings we can keep the same interpreter so terminology stays consistent.',
      },
    ],
    notes: [
      {
        label: 'Time difference',
        body: 'Korea is UTC+9 all year with no daylight saving. Give us meeting times in both time zones to avoid confusion.',
      },
      {
        label: 'Share slides',
        body: 'Send presentation files to the interpreter in advance; numbers on a shared screen are easy to miss.',
      },
    ],
    faqs: [
      {
        q: 'Does remote interpreting cost less?',
        a: 'It saves travel costs, but the interpreter’s time and preparation are the same. See our pricing section for daily guide ranges.',
      },
      {
        q: 'Can you interpret phone calls?',
        a: 'Short calls can be arranged. Tell us when and for how long and we confirm availability.',
      },
    ],
    related: [
      'services/business-interpreter-korea',
      'services/conference-interpreter-korea',
      'guides/interpreter-rates-in-korea',
    ],
    seoTitle: 'Remote Korean Interpreter | Zoom & Teams Interpreting',
    seoDescription:
      'Korean interpreters for video calls on Zoom and Teams. Korean–English and other languages, matched to your industry. Request a quote from CERTO AGENCY.',
    keywords: [
      'remote Korean interpreter',
      'Zoom interpreter Korean',
      'video call interpreter Korea',
      'online Korean interpreter',
    ],
  },
  {
    ...base,
    slug: 'document-translation-korea',
    name: 'Korean business document translation',
    h1: 'Korean business document translation',
    lead: 'Translation of contracts, NDAs, proposals, technical documents and meeting minutes between Korean and your language, with consistent terminology across interpreting and documents.',
    facts: [
      { label: 'Documents', value: 'Contracts, NDAs, proposals, manuals, minutes' },
      { label: 'Files', value: 'Word, Excel, PowerPoint, PDF, editable originals preferred' },
      { label: 'Review', value: 'Proofreading and review available' },
    ],
    itemsHeading: 'What we translate',
    items: [
      {
        title: 'Contracts and NDAs',
        body: 'Clauses, defined terms and numbers are checked against the original. Translation is not legal advice; have a lawyer review binding documents.',
      },
      {
        title: 'Proposals and company profiles',
        body: 'Persuasive documents are adapted to read naturally for Korean readers, not just translated word for word.',
      },
      {
        title: 'Technical documents and manuals',
        body: 'Specifications, procedures and safety text with terminology kept consistent across the set.',
      },
      {
        title: 'Meeting minutes and follow-up emails',
        body: 'Notes from interpreted meetings written up in both languages so agreements are clear.',
      },
    ],
    notes: [
      {
        label: 'Tell us the purpose',
        body: 'Submission to an authority, or internal reference? The answer changes the level of review and whether certification is needed.',
      },
      {
        label: 'Send editable files',
        body: 'Editable originals keep the layout. Scanned PDFs take extra time.',
      },
    ],
    faqs: [
      {
        q: 'How do I get a quote for a translation?',
        a: 'Send the file, the language pair and your deadline through the contact form. We reply with scope and timing.',
      },
      {
        q: 'Can you handle confidential documents?',
        a: 'Yes. For sensitive material we sign an NDA before receiving the files.',
      },
    ],
    related: ['services/business-interpreter-korea', 'guides/how-to-hire-an-interpreter-in-korea'],
    seoTitle: 'Korean Business Document Translation | Contracts & NDAs',
    seoDescription:
      'Translate contracts, NDAs, proposals and technical documents between Korean and English or other languages, with review. Request a quote from CERTO AGENCY.',
    keywords: [
      'Korean contract translation',
      'Korean business translation',
      'Korean NDA translation',
      'translate Korean documents',
    ],
  },
];
