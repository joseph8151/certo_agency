/**
 * 영문 언어 페이지 — "Korean Japanese interpreter" 같은 검색어용
 * 가용 인력이 적은 언어는 그 점을 숨기지 않고 "일정을 일찍 알려 달라" 고 적습니다.
 */
import type { EnPage } from './types';

const base = {
  section: 'language' as const,
  itemsEyebrow: 'Typical assignments',
  notesHeading: 'Good to know',
};

export const enLanguages: EnPage[] = [
  {
    ...base,
    slug: 'korean-english',
    name: 'Korean–English',
    h1: 'Korean–English interpreter',
    lead: 'The most requested pairing, covering buyer meetings, negotiations, factory visits and conferences. Both directions are handled by one interpreter in consecutive work, with a team for simultaneous.',
    facts: [
      { label: 'Direction', value: 'Korean → English and English → Korean' },
      { label: 'Accents', value: 'American, British, Indian, Singaporean and others' },
      { label: 'Also available', value: 'Korean–English translation and proofreading' },
    ],
    itemsHeading: 'Where Korean–English interpreters work',
    items: [
      {
        title: 'Buyer and supplier meetings',
        body: 'Prices, minimum orders, delivery and payment terms discussed between Korean and overseas companies.',
      },
      {
        title: 'Investor and partner talks',
        body: 'Financial vocabulary and numbers are handled carefully, with large figures read back where needed.',
      },
      {
        title: 'Technical sessions',
        body: 'Engineers discussing specifications and test results. Interpreters prepare from your slides and glossary.',
      },
    ],
    notes: [
      {
        label: 'Say what you mean',
        body: 'Korean often leaves out the subject and relies on context. Short, direct sentences travel best through an interpreter.',
      },
      {
        label: 'Honorific levels',
        body: 'Korean uses different speech levels for seniority. A good interpreter conveys respect without changing your message.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between Korean–English and English–Korean interpreting?',
        a: 'Nothing in practice: an interpreter works both directions in the same meeting.',
      },
      {
        q: 'Do you provide English translation of Korean documents too?',
        a: 'Yes. See our document translation service.',
      },
    ],
    related: [
      'services/business-interpreter-korea',
      'interpreter/seoul',
      'services/document-translation-korea',
    ],
    seoTitle: 'Korean–English Interpreter | Business Interpreting in Korea',
    seoDescription:
      'Korean–English business interpreters in Seoul and across Korea for meetings, negotiations, factory visits and events. Request a quote from CERTO AGENCY.',
    keywords: [
      'Korean English interpreter',
      'Korean to English interpreter',
      'English Korean interpreter Seoul',
      'Korean interpreter',
    ],
  },
  {
    ...base,
    slug: 'korean-japanese',
    name: 'Korean–Japanese',
    h1: 'Korean–Japanese interpreter',
    lead: 'Korea and Japan share a business culture of careful courtesy, so Korean–Japanese interpreting is as much about tone and indirect expressions as about vocabulary.',
    facts: [
      { label: 'Direction', value: 'Korean ↔ Japanese' },
      { label: 'Common fields', value: 'Parts and materials, electronics, trade, tourism' },
      { label: 'Also available', value: 'Japanese translation of Korean documents' },
    ],
    itemsHeading: 'Typical assignments',
    items: [
      {
        title: 'Supply-chain and parts meetings',
        body: 'Japanese suppliers meeting Korean manufacturers on specifications, quality and schedules.',
      },
      {
        title: 'Courtesy-led first meetings',
        body: 'Introductions, business cards and formal greetings where tone sets the relationship.',
      },
      {
        title: 'Tourism and retail partnerships',
        body: 'Contracts and promotions between Japanese and Korean companies.',
      },
    ],
    notes: [
      {
        label: 'Indirect refusals',
        body: 'Phrases like “we will consider it” may signal a no. Experienced interpreters help you read the situation.',
      },
      {
        label: 'Share documents early',
        body: 'Technical Japanese and Korean share many Sino-origin terms but not all. A glossary prevents surprises.',
      },
    ],
    faqs: [
      {
        q: 'Can the same interpreter handle both Japanese and English?',
        a: 'Some can. Tell us the languages used in the meeting and we plan accordingly.',
      },
      { q: 'Is Japanese translation available too?', a: 'Yes. We translate Korean business documents into Japanese, including contracts and product sheets.' },
    ],
    related: [
      'services/business-interpreter-korea',
      'interpreter/seoul',
      'language/korean-chinese',
    ],
    seoTitle: 'Korean–Japanese Interpreter | Business Interpreting in Korea',
    seoDescription:
      'Korean–Japanese business interpreters in Seoul and across Korea for meetings, supplier talks and events. Request a quote from CERTO AGENCY.',
    keywords: [
      'Korean Japanese interpreter',
      'Japanese interpreter in Korea',
      'Japanese Korean interpreter Seoul',
    ],
  },
  {
    ...base,
    slug: 'korean-chinese',
    name: 'Korean–Chinese (Mandarin)',
    h1: 'Korean–Chinese (Mandarin) interpreter',
    lead: 'Mandarin–Korean interpreting for trade, manufacturing and retail partnerships, from supplier visits to retail launches, in both simplified and traditional Chinese contexts.',
    facts: [
      { label: 'Direction', value: 'Korean ↔ Mandarin Chinese' },
      { label: 'Writing', value: 'Simplified and traditional Chinese translation' },
      { label: 'Common fields', value: 'Cosmetics, food, electronics, tourism, e-commerce' },
    ],
    itemsHeading: 'Typical assignments',
    items: [
      {
        title: 'Sourcing trips to Korea',
        body: 'Buyers visiting Korean factories and showrooms for cosmetics, food, fashion and consumer goods.',
      },
      {
        title: 'Retail and distribution talks',
        body: 'Terms with Korean brands on distribution, pricing and marketing.',
      },
      {
        title: 'Delegations and events',
        body: 'Company or government delegations on Korean visits, including formal meetings and dinners.',
      },
    ],
    notes: [
      {
        label: 'Tell us your region',
        body: 'Mainland, Taiwan and Hong Kong visitors use different vocabulary and writing. Tell us who is attending.',
      },
      {
        label: 'Names and titles',
        body: 'Give us names in Chinese characters and your titles in advance.',
      },
    ],
    faqs: [
      {
        q: 'Do you provide Cantonese?',
        a: 'Please ask. Availability depends on the dates and topic.',
      },
      {
        q: 'Can you translate into simplified or traditional characters?',
        a: 'Both are possible; tell us which you need.',
      },
    ],
    related: [
      'services/trade-show-interpreter-korea',
      'services/escort-interpreter-korea',
      'interpreter/seoul',
    ],
    seoTitle: 'Korean–Chinese Interpreter | Mandarin Interpreter in Korea',
    seoDescription:
      'Mandarin–Korean business interpreters in Seoul and across Korea for sourcing trips, retail talks and delegations. Request a quote from CERTO AGENCY.',
    keywords: [
      'Korean Chinese interpreter',
      'Mandarin interpreter in Korea',
      'Chinese interpreter Seoul',
    ],
  },
  {
    ...base,
    slug: 'korean-vietnamese',
    name: 'Korean–Vietnamese',
    h1: 'Korean–Vietnamese interpreter',
    lead: 'Many Korean manufacturers operate in Vietnam, so Vietnamese partners often visit Korea for training, audits and supplier meetings.',
    facts: [
      { label: 'Direction', value: 'Korean ↔ Vietnamese' },
      { label: 'Common fields', value: 'Electronics, textiles, manufacturing, logistics' },
      { label: 'Availability', value: 'Limited; please book early' },
    ],
    itemsHeading: 'Typical assignments',
    items: [
      {
        title: 'Supplier training and audits',
        body: 'Vietnamese suppliers learning Korean quality standards or hosting audits.',
      },
      {
        title: 'Headquarters visits',
        body: 'Staff from Vietnamese plants visiting Korean headquarters for planning meetings.',
      },
      {
        title: 'Labour and HR discussions',
        body: 'Sensitive conversations where wording matters. We use experienced interpreters.',
      },
    ],
    notes: [
      {
        label: 'Book early',
        body: 'The Korean–Vietnamese pool is smaller than for English. Tell us your dates as soon as you can.',
      },
      {
        label: 'North and south',
        body: 'Accents differ between regions of Vietnam. Tell us where your team is from.',
      },
    ],
    faqs: [
      {
        q: 'Can you provide Vietnamese interpreting at a factory?',
        a: 'Yes, subject to availability and site access. Send the details.',
      },
      { q: 'Do you translate training materials?', a: 'Yes. See our document translation page.' },
    ],
    related: [
      'services/factory-audit-interpreter-korea',
      'services/business-interpreter-korea',
      'interpreter/seoul',
    ],
    seoTitle: 'Korean–Vietnamese Interpreter | Business Interpreting in Korea',
    seoDescription:
      'Korean–Vietnamese interpreters for supplier visits, audits and training in Korea. Request a quote from CERTO AGENCY.',
    keywords: [
      'Korean Vietnamese interpreter',
      'Vietnamese interpreter in Korea',
      'Vietnamese interpreter Seoul',
    ],
  },
  {
    ...base,
    slug: 'korean-german',
    name: 'Korean–German',
    h1: 'Korean–German interpreter',
    lead: 'German–Korean interpreting for the automotive, machinery and engineering relationships between the two countries, where precision of terminology matters most.',
    facts: [
      { label: 'Direction', value: 'Korean ↔ German' },
      { label: 'Common fields', value: 'Automotive, machinery, chemicals, engineering' },
      { label: 'Availability', value: 'Limited; please book early' },
    ],
    itemsHeading: 'Typical assignments',
    items: [
      {
        title: 'Engineering and quality meetings',
        body: 'Drawings, tolerances and test standards with a strong evidence-based style.',
      },
      {
        title: 'Supplier negotiations',
        body: 'Delivery terms and liability, where exact wording is critical.',
      },
      { title: 'Plant visits', body: 'German engineers visiting Korean production sites.' },
    ],
    notes: [
      {
        label: 'Punctuality',
        body: 'German visitors usually expect exact timing. Share a realistic itinerary with travel times.',
      },
      {
        label: 'Technical glossary',
        body: 'Agree on terms for key components before the meeting.',
      },
    ],
    faqs: [
      {
        q: 'Is German interpreting available at short notice?',
        a: 'The pool is small. Tell us your dates early and we confirm availability.',
      },
      {
        q: 'Can the interpreter work from English if needed?',
        a: 'In some cases yes; tell us the participants’ languages.',
      },
    ],
    related: [
      'services/factory-audit-interpreter-korea',
      'services/business-interpreter-korea',
      'language/korean-english',
    ],
    seoTitle: 'Korean–German Interpreter | German Interpreter in Korea',
    seoDescription:
      'Korean–German interpreters for automotive and engineering meetings and plant visits in Korea. Request a quote from CERTO AGENCY.',
    keywords: [
      'Korean German interpreter',
      'German interpreter in Korea',
      'German interpreter Seoul',
    ],
  },
  {
    ...base,
    slug: 'korean-french',
    name: 'Korean–French',
    h1: 'Korean–French interpreter',
    lead: 'French–Korean interpreting for luxury, cosmetics, food and cultural partnerships, and for visitors from France, Belgium, Switzerland and French-speaking Africa.',
    facts: [
      { label: 'Direction', value: 'Korean ↔ French' },
      { label: 'Common fields', value: 'Luxury, cosmetics, wine and food, culture' },
      { label: 'Availability', value: 'Limited; please book early' },
    ],
    itemsHeading: 'Typical assignments',
    items: [
      {
        title: 'Brand and retail partnerships',
        body: 'Distribution and showroom meetings for French brands entering Korea.',
      },
      {
        title: 'Cultural and arts exchange',
        body: 'Exhibitions, film and performance collaborations.',
      },
      {
        title: 'Government and institutional visits',
        body: 'Delegation visits with formal protocol.',
      },
    ],
    notes: [
      {
        label: 'Tell us the country',
        body: 'French in Canada, Africa and Europe differs. Tell us who is attending.',
      },
      { label: 'Share names', body: 'Give us the spelling of names and titles beforehand.' },
    ],
    faqs: [
      {
        q: 'Can you interpret for French-speaking African delegations?',
        a: 'Please ask with your dates; availability varies.',
      },
      { q: 'Do you offer French translation?', a: 'Yes. Brochures, contracts and product descriptions can be translated between Korean and French.' },
    ],
    related: [
      'services/business-interpreter-korea',
      'services/escort-interpreter-korea',
      'interpreter/seoul',
    ],
    seoTitle: 'Korean–French Interpreter | French Interpreter in Korea',
    seoDescription:
      'Korean–French interpreters for brand, culture and delegation meetings in Seoul and across Korea. Request a quote from CERTO AGENCY.',
    keywords: [
      'Korean French interpreter',
      'French interpreter in Korea',
      'French interpreter Seoul',
    ],
  },
  {
    ...base,
    slug: 'korean-spanish',
    name: 'Korean–Spanish',
    h1: 'Korean–Spanish interpreter',
    lead: 'Spanish–Korean interpreting for visitors from Spain and Latin America in automotive, electronics, agriculture and energy.',
    facts: [
      { label: 'Direction', value: 'Korean ↔ Spanish' },
      { label: 'Regions', value: 'Spain, Mexico, Chile, Colombia and others' },
      { label: 'Availability', value: 'Limited; please book early' },
    ],
    itemsHeading: 'Typical assignments',
    items: [
      {
        title: 'Supplier and buyer meetings',
        body: 'Latin American buyers visiting Korean manufacturers.',
      },
      {
        title: 'Energy and infrastructure',
        body: 'Project discussions with Korean contractors and agencies.',
      },
      { title: 'Trade show support', body: 'Spanish-speaking visitors at Korean exhibitions.' },
    ],
    notes: [
      {
        label: 'Regional Spanish',
        body: 'Vocabulary differs between countries. Tell us where your team is from.',
      },
      {
        label: 'Book early',
        body: 'The Korean–Spanish pool is smaller. Tell us your dates early.',
      },
    ],
    faqs: [
      { q: 'Do you cover Latin American delegations?', a: 'Please ask with your dates and topic.' },
      { q: 'Is Spanish translation available?', a: 'Yes. Contracts, spec sheets and brochures can be translated between Korean and Spanish.' },
    ],
    related: [
      'services/trade-show-interpreter-korea',
      'services/business-interpreter-korea',
      'interpreter/seoul',
    ],
    seoTitle: 'Korean–Spanish Interpreter | Spanish Interpreter in Korea',
    seoDescription:
      'Korean–Spanish interpreters for delegations and business meetings in Korea. Request a quote from CERTO AGENCY.',
    keywords: [
      'Korean Spanish interpreter',
      'Spanish interpreter in Korea',
      'Spanish interpreter Seoul',
    ],
  },
  {
    ...base,
    slug: 'korean-arabic',
    name: 'Korean–Arabic',
    h1: 'Korean–Arabic interpreter',
    lead: 'Arabic–Korean interpreting for delegations from the Gulf and North Africa visiting Korean companies in construction, energy, automotive and healthcare.',
    facts: [
      { label: 'Direction', value: 'Korean ↔ Arabic' },
      { label: 'Regions', value: 'Gulf, Levant, North Africa' },
      { label: 'Availability', value: 'Very limited; please book early' },
    ],
    itemsHeading: 'Typical assignments',
    items: [
      {
        title: 'Delegation visits',
        body: 'Official visits to Korean companies, with meetings, tours and formal dinners.',
      },
      {
        title: 'Project and procurement talks',
        body: 'Meetings with Korean contractors and suppliers.',
      },
      {
        title: 'Healthcare and education visits',
        body: 'Delegations touring hospitals, universities and research institutes. Clinical interpreting is separate and needs advance discussion.',
      },
    ],
    notes: [
      {
        label: 'Prayer times and meals',
        body: 'Tell us the schedule needs so we plan breaks and halal meals with the interpreter.',
      },
      {
        label: 'Dialects',
        body: 'Modern Standard Arabic and regional dialects are different. Tell us who is attending.',
      },
    ],
    faqs: [
      {
        q: 'Can the interpreter work with a mixed-gender group?',
        a: 'Please tell us any preferences in advance.',
      },
      { q: 'How early should we request Arabic?', a: 'As early as possible; the pool is small.' },
    ],
    related: [
      'services/escort-interpreter-korea',
      'services/business-interpreter-korea',
      'interpreter/seoul',
    ],
    seoTitle: 'Korean–Arabic Interpreter | Arabic Interpreter in Korea',
    seoDescription:
      'Korean–Arabic interpreters for delegations and business visits in Korea. Request a quote from CERTO AGENCY.',
    keywords: [
      'Korean Arabic interpreter',
      'Arabic interpreter in Korea',
      'Arabic interpreter Seoul',
    ],
  },
  {
    ...base,
    slug: 'korean-russian',
    name: 'Korean–Russian',
    h1: 'Korean–Russian interpreter',
    lead: 'Russian–Korean interpreting for visitors from Russia, Kazakhstan, Uzbekistan and other Russian-speaking countries.',
    facts: [
      { label: 'Direction', value: 'Korean ↔ Russian' },
      { label: 'Regions', value: 'Russian-speaking Central Asia and neighbours' },
      { label: 'Note', value: 'Trade restrictions may apply; check before you plan' },
    ],
    itemsHeading: 'Typical assignments',
    items: [
      {
        title: 'Trade and sourcing',
        body: 'Russian-speaking buyers visiting Korean manufacturers.',
      },
      { title: 'Education and exchange', body: 'University and institutional visits.' },
      {
        title: 'Central Asia partnerships',
        body: 'Companies from Kazakhstan and Uzbekistan meeting Korean partners.',
      },
    ],
    notes: [
      {
        label: 'Regulation first',
        body: 'Sanctions and export controls may restrict some transactions. Interpreters do not judge legality, so check with a specialist.',
      },
      { label: 'Book early', body: 'The pool is limited. Tell us your dates as soon as you can.' },
    ],
    faqs: [
      {
        q: 'Do you interpret for Central Asian delegations?',
        a: 'Yes. Tell us the countries and languages used in the meeting.',
      },
      { q: 'Is Russian translation available?', a: 'Yes. We translate commercial and technical documents between Korean and Russian.' },
    ],
    related: [
      'services/business-interpreter-korea',
      'interpreter/seoul',
      'language/korean-english',
    ],
    seoTitle: 'Korean–Russian Interpreter | Russian Interpreter in Korea',
    seoDescription:
      'Korean–Russian interpreters for business visits in Korea, including Central Asian delegations. Request a quote from CERTO AGENCY.',
    keywords: [
      'Korean Russian interpreter',
      'Russian interpreter in Korea',
      'Russian interpreter Seoul',
    ],
  },
  {
    ...base,
    slug: 'korean-indonesian',
    name: 'Korean–Indonesian',
    h1: 'Korean–Indonesian interpreter',
    lead: 'Indonesian–Korean interpreting for the growing number of Indonesian partners in manufacturing, mining equipment, retail and training.',
    facts: [
      { label: 'Direction', value: 'Korean ↔ Indonesian (Bahasa Indonesia)' },
      { label: 'Common fields', value: 'Manufacturing, retail, energy, training' },
      { label: 'Availability', value: 'Limited; please book early' },
    ],
    itemsHeading: 'Typical assignments',
    items: [
      {
        title: 'Factory and supplier visits',
        body: 'Indonesian buyers and partners visiting Korean plants.',
      },
      { title: 'Retail and brand partnerships', body: 'Distribution and licensing discussions.' },
      {
        title: 'Training programmes',
        body: 'Short courses for Indonesian staff at Korean companies.',
      },
    ],
    notes: [
      {
        label: 'Prayer and meals',
        body: 'Let us know of any prayer time or dietary needs so we plan the schedule.',
      },
      { label: 'Book early', body: 'The pool is limited. Share your dates early.' },
    ],
    faqs: [
      {
        q: 'Can you provide Indonesian interpreting at a factory?',
        a: 'Subject to availability and site access. Send the details.',
      },
      { q: 'Do you translate training material?', a: 'Yes, see our document translation page.' },
    ],
    related: [
      'services/factory-audit-interpreter-korea',
      'services/business-interpreter-korea',
      'interpreter/seoul',
    ],
    seoTitle: 'Korean–Indonesian Interpreter | Indonesian Interpreter in Korea',
    seoDescription:
      'Korean–Indonesian interpreters for factory visits and business meetings in Korea. Request a quote from CERTO AGENCY.',
    keywords: [
      'Korean Indonesian interpreter',
      'Indonesian interpreter in Korea',
      'Indonesian interpreter Seoul',
    ],
  },
];
