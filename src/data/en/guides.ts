/**
 * 영문 가이드 — 한국에서 통역사를 처음 구하는 외국 기업 담당자를 위한 글
 * 요금은 pricing.ts 의 공개 구간을 그대로 인용합니다. (src/data/en/site.ts 의 enPricing)
 */
import { enPricing } from './site';
import type { EnPage } from './types';

const base = {
  section: 'guides' as const,
  itemsEyebrow: 'Step by step',
  notesHeading: 'Keep in mind',
};

const price = (id: string) => enPricing.find((p) => p.id === id)?.range ?? '';

export const enGuides: EnPage[] = [
  {
    ...base,
    slug: 'how-to-hire-an-interpreter-in-korea',
    name: 'How to hire an interpreter in Korea',
    h1: 'How to hire an interpreter in Korea',
    lead: 'Hiring an interpreter for a trip to Korea is straightforward if you decide five things early: the languages, the dates and places, the type of interpreting, the material to share, and the budget.',
    facts: [
      {
        label: 'Lead time',
        value: 'Two weeks ahead is comfortable; longer for rare languages or big shows',
      },
      { label: 'You provide', value: 'Dates, city, languages, topic, attendees' },
      { label: 'We provide', value: 'Interpreter match, quote and preparation' },
    ],
    itemsHeading: 'Five steps',
    items: [
      {
        title: '1. Confirm languages and direction',
        body: 'Usually Korean plus your language. If several languages are spoken in the room, tell us so we can plan a team.',
      },
      {
        title: '2. Fix dates, city and venue',
        body: 'Seoul, a factory in the provinces or a trade show hall changes the logistics. Interpreters need travel time.',
      },
      {
        title: '3. Choose the interpreting type',
        body: 'Consecutive for meetings and negotiations, simultaneous for conferences, whispered for one or two listeners.',
      },
      {
        title: '4. Share your material',
        body: 'Agenda, attendee list, slides, glossary. The interpreter prepares from these.',
      },
      {
        title: '5. Get a quote and confirm',
        body: 'We confirm availability, send a quote, and brief the interpreter before your meeting.',
      },
    ],
    notes: [
      {
        label: 'Tell us the industry',
        body: 'Interpreters work best in fields they know. The sooner we know, the better the match.',
      },
      {
        label: 'Interpreting is not advice',
        body: 'Interpreters convey meaning. They do not give legal, financial or regulatory advice.',
      },
    ],
    faqs: [
      {
        q: 'How much does an interpreter in Korea cost?',
        a: `Daily guide ranges are ${price('standard')} (standard), ${price('business')} (business premium) and ${price('executive')} (executive). Travel and the final quote depend on your meeting.`,
      },
      {
        q: 'Can I hire the interpreter only for a few hours?',
        a: 'Ask us. Part-day work can sometimes be arranged depending on location and interpreter availability.',
      },
    ],
    related: [
      'guides/interpreter-rates-in-korea',
      'services/business-interpreter-korea',
      'guides/korean-business-etiquette-for-visitors',
    ],
    seoTitle: 'How to Hire an Interpreter in Korea | Step-by-Step Guide',
    seoDescription:
      'A practical guide to hiring a business interpreter in Korea: languages, dates, interpreting type, materials and budget. By CERTO AGENCY.',
    keywords: [
      'how to hire an interpreter in Korea',
      'hiring a Korean interpreter',
      'Korean interpreter service',
      'interpreter for Korea business trip',
    ],
  },
  {
    ...base,
    slug: 'interpreter-rates-in-korea',
    name: 'Interpreter rates in Korea',
    h1: 'Interpreter rates in Korea',
    lead: 'Interpreter pricing in Korea follows the work involved, not only the hours spoken. Preparation, subject difficulty, language and travel all affect the quote.',
    facts: [
      { label: 'Standard', value: `${price('standard')} per day` },
      { label: 'Business premium', value: `${price('business')} per day` },
      { label: 'Executive / specialist', value: `${price('executive')} per day` },
    ],
    itemsHeading: 'What the three levels cover',
    items: [
      {
        title: 'Standard interpreter',
        body: 'Everyday business meetings, simple consultations and basic on-site interpreting.',
      },
      {
        title: 'Business premium',
        body: 'Important buyer meetings and specialist discussions, with document review, terminology preparation, a summary of key points and follow-up email support if needed.',
      },
      {
        title: 'Executive / specialist',
        body: 'M&A, investment, contract negotiations, technical meetings, factory audits and board-level meetings, with extra preparation and a record of decisions.',
      },
    ],
    notes: [
      {
        label: 'Not included',
        body: 'For trips outside Seoul, travel, accommodation and local transport are quoted separately.',
      },
      {
        label: 'The final quote varies',
        body: 'Language, subject difficulty, hours and the volume of preparation material all change the price. Simultaneous interpreting needs a team and equipment and is quoted separately.',
      },
    ],
    faqs: [
      {
        q: 'Why do prices differ between interpreters?',
        a: 'Because the work differs: a casual meeting needs little preparation, while a contract negotiation needs careful study of the documents beforehand.',
      },
      {
        q: 'Do you charge for waiting time?',
        a: 'Quotes are based on the schedule you give us. Tell us the likely hours, including gaps, so the quote is accurate.',
      },
    ],
    related: [
      'guides/how-to-hire-an-interpreter-in-korea',
      'services/business-interpreter-korea',
      'services/conference-interpreter-korea',
    ],
    seoTitle: 'Interpreter Rates in Korea | Daily Prices in KRW',
    seoDescription: `Typical interpreter rates in Korea: ${price('standard')} standard, ${price('business')} premium, ${price('executive')} executive per day. What affects the quote. CERTO AGENCY.`,
    keywords: [
      'interpreter rates in Korea',
      'interpreter cost Korea',
      'how much does a Korean interpreter cost',
      'Korean interpreter price',
    ],
  },
  {
    ...base,
    slug: 'korean-business-etiquette-for-visitors',
    name: 'Korean business etiquette for visitors',
    h1: 'Korean business etiquette: what visitors should know',
    lead: 'Korean business culture values hierarchy, courtesy and relationships. A few habits will help your first meetings go smoothly, and a good interpreter can help you read the room.',
    facts: [
      { label: 'Greetings', value: 'A slight bow with a handshake is normal' },
      { label: 'Cards', value: 'Offer and receive with both hands, and read them' },
      { label: 'Titles', value: 'Use the title and surname, not first names' },
    ],
    itemsHeading: 'Habits that help',
    items: [
      {
        title: 'Use titles and respect seniority',
        body: 'Korean companies are hierarchical. Greet the most senior person first and address people by their title.',
      },
      {
        title: 'Handle business cards with care',
        body: 'Take a moment to read the card and place it on the table in front of you during the meeting.',
      },
      {
        title: 'Expect the meeting to start with small talk',
        body: 'Tea or coffee and a few minutes of conversation come before business. Do not rush it.',
      },
      {
        title: 'Be patient with decisions',
        body: 'Decisions may need approval from higher up. Ask what the next steps are rather than pushing for an answer in the room.',
      },
      {
        title: 'Dinners can be part of the work',
        body: 'Meals after a meeting are common and help build relationships. Tell your interpreter if you want them to stay.',
      },
    ],
    notes: [
      {
        label: 'These are general habits',
        body: 'Companies differ. Younger firms and start-ups are often more relaxed than traditional manufacturers.',
      },
      {
        label: 'Ask your interpreter',
        body: 'Before the meeting, ask what to expect. A good interpreter will brief you on the people and tone.',
      },
    ],
    faqs: [
      {
        q: 'Should I bow?',
        a: 'A slight bow combined with a handshake is a safe, respectful greeting.',
      },
      {
        q: 'Is it rude to say no?',
        a: 'A direct no can be uncomfortable. Koreans may say it is difficult, or that they will consider it. Your interpreter can help you read these cues.',
      },
    ],
    related: [
      'guides/how-to-hire-an-interpreter-in-korea',
      'services/escort-interpreter-korea',
      'interpreter/seoul',
    ],
    seoTitle: 'Korean Business Etiquette for Visitors | Meeting Tips',
    seoDescription:
      'Korean business etiquette for foreign visitors: greetings, business cards, titles, meetings and dinners. A practical guide from CERTO AGENCY.',
    keywords: [
      'Korean business etiquette',
      'business culture in Korea',
      'meeting Korean business partners',
      'Korea business trip tips',
    ],
  },
  {
    ...base,
    slug: 'consecutive-vs-simultaneous-interpreting',
    name: 'Consecutive vs simultaneous interpreting',
    h1: 'Consecutive vs simultaneous interpreting: which do you need?',
    lead: 'Consecutive interpreting suits meetings and negotiations, while simultaneous interpreting suits conferences and presentations. The choice affects cost, time and equipment.',
    facts: [
      { label: 'Consecutive', value: 'Speaker pauses, interpreter speaks' },
      {
        label: 'Simultaneous',
        value: 'Interpreter speaks almost in real time, usually from a booth',
      },
      { label: 'Whispered', value: 'Interpreter quietly translates for one or two listeners' },
    ],
    itemsHeading: 'How to choose',
    items: [
      {
        title: 'Consecutive interpreting',
        body: 'Best for small meetings, negotiations and site visits. It doubles the time needed because everything is said twice, but accuracy is high.',
      },
      {
        title: 'Simultaneous interpreting',
        body: 'Best for conferences and long presentations. It needs two interpreters per language, a booth and receivers, or an online platform.',
      },
      {
        title: 'Whispered interpreting',
        body: 'Works when only one or two people need interpreting, with no equipment. It is tiring for the interpreter, so it suits short sessions.',
      },
    ],
    notes: [
      {
        label: 'Plan more time for consecutive',
        body: 'A one-hour consecutive meeting contains about half an hour of actual discussion. Trim the agenda accordingly.',
      },
      {
        label: 'Equipment',
        body: 'Tell us the venue early so we can see whether simultaneous equipment is available.',
      },
    ],
    faqs: [
      {
        q: 'Which is more accurate?',
        a: 'Consecutive is slightly more precise because the interpreter hears a full thought first. Simultaneous is faster. Both are accurate with good preparation.',
      },
      {
        q: 'Can simultaneous interpreting be done online?',
        a: 'Yes, with a platform that supports interpreter channels. We confirm the set-up beforehand.',
      },
    ],
    related: [
      'services/conference-interpreter-korea',
      'services/remote-interpreter-korea',
      'guides/interpreter-rates-in-korea',
    ],
    seoTitle: 'Consecutive vs Simultaneous Interpreting | Which Do You Need?',
    seoDescription:
      'Consecutive, simultaneous or whispered interpreting: how they differ, when to use each and what each needs. A guide from CERTO AGENCY.',
    keywords: [
      'consecutive vs simultaneous interpreting',
      'simultaneous interpreter',
      'consecutive interpreter',
      'types of interpreting',
    ],
  },
  {
    ...base,
    slug: 'how-to-work-with-an-interpreter',
    name: 'How to work with an interpreter',
    h1: 'How to work with an interpreter in a meeting',
    lead: 'A few simple habits make an interpreted meeting more accurate and shorter: speak in short sections, face the other person, and be clear with numbers and names.',
    facts: [
      { label: 'Speak in', value: 'Two or three sentences at a time' },
      { label: 'Look at', value: 'The person you are talking to' },
      { label: 'Be clear on', value: 'Numbers, dates and names' },
    ],
    itemsHeading: 'Habits for speakers',
    items: [
      {
        title: 'Pause every few sentences',
        body: 'Long stretches without a break force the interpreter to compress or miss details.',
      },
      {
        title: 'Speak to the listener, not the interpreter',
        body: 'Make eye contact with your Korean counterpart. The interpreter speaks from the side.',
      },
      {
        title: 'Say numbers slowly',
        body: 'Prices, dates and quantities should be clear. Write them down if they matter.',
      },
      {
        title: 'Avoid slang and jokes that do not travel',
        body: 'Idioms rarely translate. Say what you mean plainly.',
      },
      {
        title: 'Confirm key points',
        body: 'At the end, summarise the main agreements and check you both heard the same thing.',
      },
    ],
    notes: [
      {
        label: 'Allow clarifying questions',
        body: 'If the interpreter asks you to repeat or clarify, it is to get it right, not a sign of weakness.',
      },
      {
        label: 'Brief the interpreter',
        body: 'A five-minute pre-meeting call on goals and sensitive topics improves the result.',
      },
    ],
    faqs: [
      {
        q: 'Should I speak slowly?',
        a: 'Speak at a natural pace, but pause often. Pausing helps more than slowing down.',
      },
      {
        q: 'Does the interpreter add opinions?',
        a: 'Professional interpreters do not. They convey what is said.',
      },
    ],
    related: [
      'guides/consecutive-vs-simultaneous-interpreting',
      'guides/how-to-hire-an-interpreter-in-korea',
      'services/business-interpreter-korea',
    ],
    seoTitle: 'How to Work With an Interpreter | Tips for Meetings',
    seoDescription:
      'Practical tips for speaking through an interpreter in business meetings: pacing, eye contact, numbers and briefing. CERTO AGENCY.',
    keywords: [
      'how to work with an interpreter',
      'tips for using an interpreter',
      'interpreter meeting tips',
      'speaking through an interpreter',
    ],
  },
];
