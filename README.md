# CERTO AGENCY

**Global Interpretation & Translation Agency** 공식 홈페이지.

> 필요한 언어만 연결하는 것이 아니라, 프로젝트에 적합한 전문가를 연결합니다.

국내·해외 통역과 전문 번역을 제공하는 프리미엄 랭귀지 에이전시 웹사이트입니다.
홈 1개 + 서비스 상세 4개(`/interpretation` `/translation` `/global` `/business`)로 구성되며,
Next.js(App Router) + TypeScript + Tailwind CSS 로 제작되었습니다.

---

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드
npm start        # 프로덕션 서버
npm run lint     # ESLint
npm run typecheck

npm run check:email # 문의 이메일 발송 점검

npm run cf:build    # Cloudflare Workers 번들 생성
npm run cf:preview  # Workers 런타임으로 로컬 미리보기 (빌드 자동 수행)
npm run cf:deploy   # Cloudflare Workers 배포 (빌드 자동 수행)
```

Node.js 20 이상을 권장합니다.

---

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 폰트, SEO 메타데이터, 조직 JSON-LD, Header/Footer 공용 배치
│   ├── page.tsx            # 홈 — 섹션 조립 (여기서 순서를 바꿀 수 있습니다)
│   ├── interpretation/     # 통역 서비스 상세
│   ├── translation/        # 번역 서비스 상세
│   ├── global/             # 해외 통역 상세
│   ├── business/           # 기업 전담 통번역 상세
│   ├── not-found.tsx       # 404
│   ├── opengraph-image.tsx # OG 카드 이미지 (빌드 시 생성)
│   ├── globals.css         # 디자인 토큰 기반 전역 스타일
│   ├── icon.svg            # 파비콘
│   ├── robots.ts / sitemap.ts
│   └── api/contact/route.ts  # 문의 접수 엔드포인트
├── components/
│   ├── Header.tsx              # 스크롤 고정 헤더 + 모바일 햄버거
│   ├── Hero.tsx                # 첫 화면
│   ├── TrustBar.tsx            # Hero 하단 신뢰 바
│   ├── WhyCerto.tsx            # More Than Translation
│   ├── Services.tsx            # Interpretation & Translation
│   ├── DomesticInterpretation.tsx
│   ├── GlobalInterpretation.tsx  # Deep Blue 섹션 + Line Map
│   ├── Business.tsx            # CERTO for Business
│   ├── Industries.tsx          # 전문 분야
│   ├── MatchingProcess.tsx     # CERTO Matching Standard (4단계)
│   ├── QualityStandard.tsx     # The CERTO Standard
│   ├── UseCases.tsx            # 통역이 필요한 상황
│   ├── Clients.tsx             # 고객 유형
│   ├── Projects.tsx            # 프로젝트 예시
│   ├── Process.tsx             # 상담 프로세스 6단계
│   ├── FAQ.tsx                 # 아코디언
│   ├── FinalCta.tsx            # 마지막 전환 구간
│   ├── Contact.tsx             # 문의 폼
│   ├── Footer.tsx
│   ├── StickyCta.tsx           # 모바일 하단 고정 CTA
│   ├── ServicePage.tsx         # 서비스 상세 페이지 템플릿 (4개 페이지 공용)
│   ├── Analytics.tsx           # CF Web Analytics / GA4 (환경 변수로 활성화)
│   └── ui/                     # Button · Figure · LineMap · Reveal · SectionHeading
├── data/                       # ← 내용 수정은 대부분 여기서 끝납니다
│   ├── site.ts                 # 회사 정보 · 연락처 · 사업자 정보 · 네비게이션 · 사이트 주소
│   ├── content.ts              # 홈 각 섹션의 문구 · 목록 데이터
│   ├── services.ts             # 서비스 상세 페이지 4개의 콘텐츠
│   └── images.ts               # 이미지 매니페스트
└── lib/
    ├── inquiry.ts              # 문의 폼 스키마 및 검증 (클라이언트/서버 공용)
    └── notify.ts               # 문의 알림 발송 (Resend / Slack)
```

---

## 내용 수정하기

### 회사 정보 · 연락처 · 사업자 정보

`src/data/site.ts` 한 곳만 고치면 헤더, 푸터, 문의 섹션, 구조화 데이터에 모두 반영됩니다.

```ts
export const contactInfo = {
  email: 'contact@certoagency.com',
  phone: '02-0000-0000',   // 값을 비워두면 화면에 렌더링되지 않습니다
  address: '서울특별시 ...',
};
```

`businessInfo` 배열의 `value` 를 채우면 푸터에 사업자 정보 영역이 자동으로 나타납니다.
값이 비어 있는 항목은 표시되지 않으므로, 확정된 정보만 순서대로 채우면 됩니다.

### 섹션 문구 · 서비스 목록 · FAQ · 프로젝트

`src/data/content.ts` 의 배열을 수정하면 됩니다. 항목을 추가·삭제하면 레이아웃이 그대로 따라갑니다.

| 데이터 | 반영되는 섹션 |
| --- | --- |
| `trustBarItems` | Hero 하단 신뢰 바 |
| `valuePillars` | 왜 CERTO 인가 (3가지 핵심 가치) |
| `serviceAreas` | Interpretation / Translation |
| `domesticServices` | 국내 통역 |
| `globalRegions` | 해외 통역 권역 |
| `businessServices` | CERTO for Business |
| `industries` | 전문 분야 |
| `matchingSteps` | Matching Standard 4단계 |
| `qualityChecks` | The CERTO Standard |
| `useCases` | 통역이 필요한 상황 |
| `clientTypes` | 고객 유형 |
| `projects` | 프로젝트 예시 |
| `processSteps` | 상담 프로세스 |
| `faqs` | FAQ (JSON-LD FAQPage 에도 자동 반영) |
| `serviceOptions` / `languageOptions` | 문의 폼 선택지 |

### 섹션 순서 변경 / 제거

`src/app/page.tsx` 에서 컴포넌트 순서를 바꾸거나 지우면 됩니다.

### 서비스 상세 페이지

`/interpretation`, `/translation`, `/global`, `/business` 네 페이지는
하나의 템플릿(`src/components/ServicePage.tsx`)이 `src/data/services.ts` 의
데이터를 받아 렌더링합니다. 문구를 고치려면 데이터만 수정하면 됩니다.

새 서비스 페이지를 추가하려면

1. `src/data/services.ts` 의 `servicePages` 에 항목을 추가합니다.
2. `src/app/<slug>/page.tsx` 를 기존 파일과 동일한 형태로 만듭니다.

네비게이션(`src/data/site.ts`), `sitemap.xml`, 조직 구조화 데이터는
이 데이터를 참조하므로 자동으로 반영됩니다.

---

## 이미지 교체 (중요)

현재는 실사 사진 대신 **브랜드 톤에 맞춘 라인 컴포지션 플레이트(SVG)** 가 들어가 있습니다.
`scripts/generate-placeholders.mjs` 로 생성되며, 실제 사진을 확보하면 교체해 주세요.

1. `public/images/` 에 사진을 넣습니다. (예: `hero.jpg`)
2. `src/data/images.ts` 의 `src` 와 `alt` 를 수정합니다.

```ts
hero: {
  src: '/images/hero.jpg',        // ← 경로만 바꾸면 됩니다
  ratio: '4 / 5',
  alt: '국제 비즈니스 컨퍼런스 현장',
  subject: '국제 컨퍼런스 · 고급 회의장 전경, 세로형 구도',
},
```

각 슬롯의 `subject` 에 어떤 사진이 들어가야 하는지 적어두었습니다. 사진 선정 기준:

- 헤드셋을 낀 콜센터 이미지는 사용하지 않습니다.
- 국제회의, 비즈니스 미팅, 해외 전시회, 기업 행사, 공항·호텔·컨벤션 등
  **실제 비즈니스 현장의 사람 중심 이미지**를 사용합니다.
- 사진 위에는 블루/아이보리 오버레이가 약하게 적용되어 사이트 전체 톤이 통일됩니다.
  (`<Figure tone="blue" | "ivory" | "none">`)

외부 CDN 이미지를 쓰려면 `next.config.mjs` 의 `images.remotePatterns` 에 호스트를 추가하세요.

---

## 문의 폼 알림 (배포 전 필수)

문의 폼은 `/api/contact` 로 접수되어 **이메일로 발송**됩니다.
수신 주소 기본값은 `src/lib/notify.ts` 의 `DEFAULT_INQUIRY_TO` 에 있습니다.
(현재 `yorkboy@gmail.com`)

### 설정 — API 키 하나만 등록하면 됩니다

1. **[resend.com](https://resend.com) 에 가입합니다. 반드시 문의를 받을 주소로 가입하세요.**
   Resend 는 도메인 인증 전까지 *가입에 사용한 이메일 주소로만* 발송을 허용합니다.
   문의를 받을 주소로 가입하면 도메인 설정 없이 바로 쓸 수 있습니다.
2. API Keys 메뉴에서 키를 발급합니다.
3. 배포 환경에 **Secret** 으로 등록합니다.
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
   ```
   Cloudflare → Workers 설정 > Variables and Secrets > **Secret** 으로 추가

무료 플랜은 월 3,000통 / 일 100통입니다. 문의 폼 용도로는 충분합니다.

### 발송 확인

폼에 가짜 문의를 넣지 않고도 이메일 경로를 점검할 수 있습니다.

```bash
RESEND_API_KEY=re_xxxx npm run check:email
```

Resend 가 돌려주는 오류를 그대로 보여주므로 키 문제인지 수신 주소 제한인지 바로 구분됩니다.

### 수신 주소 변경 / 추가

```
INQUIRY_TO_EMAIL=yorkboy@gmail.com,manager@certoagency.com
```

여러 명에게 보내거나 회사 주소로 바꿀 때 설정합니다.
단, **도메인 인증 전에는 Resend 가입 주소 외에는 발송되지 않습니다.**
회사 도메인을 Resend 에 인증한 뒤 `INQUIRY_FROM_EMAIL` 을 그 도메인 주소로 바꾸면
임의의 주소로도 보낼 수 있습니다.

### Slack (선택)

```
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/XXX/YYY/ZZZ
```

이메일과 함께 켜면 양쪽으로 모두 발송됩니다.

### 동작 방식

| 상황 | 응답 | 처리 |
| --- | --- | --- |
| 채널 미설정 | 200 | 접수 후 로그 기록 + 경고 로그 |
| 한 채널 이상 성공 | 200 | 완료 화면 표시 (실패한 채널은 경고 로그) |
| 설정된 채널이 전부 실패 | 502 | 사용자에게 재시도 안내, 문의 내용 전문을 에러 로그에 보존 |

전송 실패를 성공으로 위장하지 않습니다. 사용자는 실패를 알 수 있고,
문의 내용은 로그에 남아 복구할 수 있습니다.

구현은 `src/lib/notify.ts` 이며 `fetch` 만 사용하므로
Cloudflare Workers / Vercel / Node 어디서든 동일하게 동작합니다.
받은 메일에서 바로 회신하면 문의자에게 가도록 `reply_to` 가 설정되어 있습니다.
검증 로직(`src/lib/inquiry.ts`)은 클라이언트와 서버가 공유하고 서버에서 다시 검증합니다.
사람에게 보이지 않는 `website` 필드는 스팸 봇 트랩입니다.

---

## 분석 · CTA 추적

환경 변수로 켜집니다. 설정하지 않으면 아무 스크립트도 로드되지 않습니다.
(`src/components/Analytics.tsx`)

| 변수 | 도구 | 비고 |
| --- | --- | --- |
| `NEXT_PUBLIC_CF_BEACON_TOKEN` | Cloudflare Web Analytics | 무료 · 쿠키 미사용(동의 배너 불필요) · **페이지뷰 전용** |
| `NEXT_PUBLIC_GA_ID` | GA4 | CTA 클릭 이벤트를 받으려면 이쪽이 필요합니다 |

모든 전환 버튼에는 `data-cta` 속성이 있습니다. GA4 를 켜면
클릭이 자동으로 `cta_click` 이벤트로 수집됩니다. (이벤트 위임 방식이라
버튼을 추가해도 별도 작업이 필요 없습니다)

```
event: cta_click
  cta_id    "hero-primary"
  cta_text  "통번역 문의하기"
  page_path "/"
```

주요 `cta_id` — `hero-primary` · `header-primary` · `sticky-mobile` ·
`service-interpretation` · `global-cta` · `business-cta` · `contact-submit` ·
`usecase-1`… · `interpretation-hero-primary` 등 서비스 페이지별 CTA

GTM 을 쓰신다면 트리거를 `Click Element` matches CSS selector `[data-cta]` 로 잡으면 됩니다.

---

## 보안 헤더

`next.config.mjs` 의 `headers()` 와 `public/_headers` 두 곳에 동일하게 정의되어 있습니다.
(Cloudflare 는 정적 자산이 Worker 를 거치지 않을 수 있어 양쪽에 둡니다.
Workers 런타임에서 HTML·정적 자산 모두 적용되는 것을 확인했습니다)

`X-Content-Type-Options` · `X-Frame-Options` · `Referrer-Policy` ·
`Permissions-Policy` · `Strict-Transport-Security`

CSP 는 넣지 않았습니다. 정적 프리렌더를 유지하면서 nonce 를 쓸 수 없어
`script-src` 에 `'unsafe-inline'` 을 열어야 하고, 그러면 실효가 크게 줄어듭니다.
사용할 외부 스크립트가 확정되면 그때 추가하는 편이 낫습니다.

참고 — `public/_headers` 는 Cloudflare 전용 설정 파일입니다. Cloudflare 에서는
설정으로 소비되어 URL 로 노출되지 않지만(404), Node/Vercel 배포에서는
`/_headers` 로 조회될 수 있습니다. 헤더 설정값 외에 민감한 내용은 없습니다.

---

## SEO

- `src/app/layout.tsx` 에 title / description / keywords / Open Graph / Twitter Card 설정
- 구조화 데이터 — 전 페이지 `ProfessionalService`, 홈 `FAQPage`,
  서비스 상세 페이지 `Service` + `BreadcrumbList` + `FAQPage` (모두 데이터에서 자동 생성)
- `sitemap.xml`, `robots.txt` 자동 생성
- 시맨틱 HTML (`<header> <main> <section> <nav> <footer>`, 섹션별 `aria-labelledby`)

**배포 전에 `NEXT_PUBLIC_SITE_URL` 환경 변수를 실제 도메인으로 설정하세요.**
`metadataBase`, canonical, `sitemap.xml`, `robots.txt`, OG 태그, JSON-LD 가 모두 이 값을 씁니다.
설정하지 않으면 `src/data/site.ts` 의 기본값이 사용됩니다.

### OG 이미지

`src/app/opengraph-image.tsx` 가 브랜드 디자인의 OG 카드(1200×630)를 빌드 시 생성합니다.
촬영된 브랜드 이미지로 바꾸려면 이 파일을 지우고
`src/app/opengraph-image.png` (1200×630) 을 넣으면 됩니다.

---

## 디자인 시스템

컬러 토큰은 `tailwind.config.ts` 에 정의되어 있습니다.

| 토큰 | 값 | 용도 |
| --- | --- | --- |
| `white` | `#FFFFFF` | 기본 배경 (약 55%) |
| `ivory` / `ivory-light` | `#F7F4EE` / `#FAF8F3` | 보조 배경 (약 25%) |
| `brand` | `#285A8C` | Premium Blue — 강조 |
| `brand-deep` | `#173B5E` | Deep Blue — 반전 섹션 |
| `brand-soft` | `#EAF2F8` | Soft Blue |
| `navy` | `#192C3B` | 본문 텍스트 |
| `mist` | `#F4F5F6` | Light Gray |

- 서체: **Inter**(영문 UI) · **Pretendard**(한글 본문) · **Cormorant Garamond**(브랜드 헤드라인, 제한적 사용)
- 타이포 스케일: `text-display` / `text-headline` / `text-title` / `text-eyebrow` (모두 fluid clamp)
- 라운드는 최대 4px — 카드형 SaaS 룩 대신 얇은 규칙선 중심의 editorial 레이아웃
- 인터랙션은 Fade Up, hover underline, 약한 image zoom, header transition 으로 제한

### 모션 / 접근성

- 스크롤 진입 애니메이션은 `components/ui/Reveal.tsx` (IntersectionObserver, 1회 재생)
- `prefers-reduced-motion: reduce` 사용자는 모든 애니메이션이 비활성화됩니다
- 본문 텍스트는 WCAG AA(4.5:1) 대비를 충족하도록 조정되어 있습니다
- 키보드 포커스 링, 스킵 링크(`본문 바로가기`), FAQ 는 네이티브 `<details>` 로 구현

---

## 플레이스홀더 이미지 재생성

```bash
node scripts/generate-placeholders.mjs
```

결정론적 스크립트라 매번 동일한 결과가 나옵니다. 실사 사진으로 전부 교체한 뒤에는
이 스크립트와 `public/images/*.svg` 를 삭제해도 됩니다.

---

## 배포

### 어디에 호스팅할까

| 호스팅 | 적합도 | 비고 |
| --- | --- | --- |
| **Vercel** | ★ 권장 | Next.js 제작사. 추가 설정 없이 그대로 동작합니다. |
| **Cloudflare Workers** | ★ 가능 (설정 완료) | `@opennextjs/cloudflare` 어댑터로 이미 구성해 두었습니다. |
| Netlify / AWS Amplify / Render | 가능 | Next.js 어댑터를 통해 배포합니다. |
| Node 서버 (Docker, NCP, NHN 등) | 가능 | `npm run build && npm start` (Node 20+) |
| 순수 정적 호스팅 (S3, GitHub Pages) | ✗ | 문의 API(`/api/contact`)가 서버에서 동작해야 하므로 부적합합니다. |

이 사이트는 홈 + 서비스 상세 4개가 모두 정적 프리렌더되고, 서버에서 동작하는 것은
문의 접수 API 하나뿐입니다. 따라서 트래픽 대비 서버 비용 부담이 거의 없습니다.

### Vercel

1. GitHub 저장소를 Vercel 프로젝트로 연결합니다.
2. 프레임워크는 Next.js 로 자동 감지됩니다. 빌드 설정을 바꿀 필요가 없습니다.
3. 도메인을 연결하고 `src/data/site.ts` 의 `url` 을 같은 도메인으로 맞춥니다.
4. 문의 알림 채널의 API 키를 환경 변수로 등록합니다.

### Cloudflare Workers

`@opennextjs/cloudflare` 어댑터와 `wrangler.jsonc` 가 저장소에 포함되어 있습니다.

```bash
npm run cf:preview   # 로컬에서 Workers 런타임으로 미리보기 (빌드 자동 수행)
npm run cf:deploy    # 로컬에서 직접 배포 (빌드 자동 수행)
```

**대시보드 Git 연동으로 배포하는 경우** 설정은 아래 하나면 됩니다.

| 항목 | 값 |
| --- | --- |
| Build command | *(비움)* |
| Deploy command | `npx wrangler deploy` |
| Version command | *(비움)* |

`wrangler.jsonc` 에 build hook 이 들어 있어 `wrangler deploy` 가
빌드를 먼저 실행합니다. 그래서 Build command 를 비워두어도 동작합니다.

```jsonc
"build": { "command": "npm run cf:build" }
```

대시보드에도 Build command 를 지정하면 빌드가 두 번 돌게 되므로
둘 중 한 곳에서만 지정하세요.

> **`Could not find compiled Open Next config` 오류가 난다면**
> 빌드가 실행되지 않은 상태에서 배포가 시도된 것입니다.
> 위 build hook 이 있는 커밋을 배포하고 있는지 확인하거나,
> 대시보드 Build command 에 `npm run cf:build` 를 넣으세요.

`wrangler.jsonc` 의 `name` 은 `certo-agency` 입니다. 대시보드에서 만든 Worker 이름이
다르면 이 값을 같은 이름으로 맞춰주세요. 다르면 별도 Worker 가 새로 생성됩니다.

**환경 변수** — Workers 설정 > Variables and Secrets 에 등록합니다.
빌드 시점에 인라인되는 값이므로, 변경 후에는 재배포가 필요합니다.

| 변수 | 용도 |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 배포 도메인. canonical / sitemap / OG / JSON-LD 에 사용 |
| `RESEND_API_KEY` | 문의 이메일 발송 (Secret 으로 등록 · **필수**) |
| `INQUIRY_TO_EMAIL` | 수신 주소 변경 (기본값은 코드에 있음 · 선택) |
| `SLACK_WEBHOOK_URL` | 문의 Slack 알림 (Secret 으로 등록) |
| `NEXT_PUBLIC_CF_BEACON_TOKEN` | Cloudflare Web Analytics |
| `NEXT_PUBLIC_GA_ID` | GA4 |
| `NEXT_IMAGE_UNOPTIMIZED` | 실사 사진 사용 + Cloudflare Images 미사용 시 `true` |

API 키는 일반 변수가 아닌 **Secret** 으로 등록하세요.
`NEXT_PUBLIC_` 접두사가 붙은 값은 브라우저에 노출되므로 비밀값에 쓰면 안 됩니다.
로컬에서 `npm run cf:preview` 로 테스트할 때는 `.dev.vars` 파일을 사용합니다. (gitignore 됨)

**로그 확인** — `wrangler.jsonc` 에 `observability` 를 켜두었습니다.
알림 채널을 연결하기 전까지는 접수된 문의를 Workers 로그에서만 볼 수 있습니다.

확인된 동작 범위 — 홈과 서비스 상세 페이지, `sitemap.xml`, `robots.txt`,
OG 이미지, 문의 API(`/api/contact`)까지 Workers 런타임에서 정상 동작합니다.

**이미지 최적화 주의.** 지금은 이미지가 SVG 라서 Next.js 가 최적화를 건너뛰고
원본을 그대로 내보냅니다. 그래서 현재 상태로는 추가 설정이 필요 없습니다.
하지만 실사 사진(.jpg/.png)으로 교체하면 `next/image` 가 최적화 경로를 타게 되고,
Cloudflare 에서는 이때 둘 중 하나를 선택해야 합니다.

- Cloudflare Images 바인딩을 붙인다 (유료, 변환 단위 과금)
- 최적화를 끈다 → `NEXT_IMAGE_UNOPTIMIZED=true`
  (이 경우 사진을 업로드 전에 미리 리사이즈·압축해 두세요)

### 배포 전 체크리스트

- [ ] `NEXT_PUBLIC_SITE_URL` 환경 변수를 실제 도메인으로 설정
      (미설정 시 `src/data/site.ts` 의 기본값 `https://www.certoagency.com` 사용)
- [ ] `contactInfo` / `businessInfo` 실제 정보 입력
- [ ] `RESEND_API_KEY` 등록 후 `npm run check:email` 로 발송 확인
- [ ] `public/images/` 실사 사진 교체 및 `src/data/images.ts` 의 `alt` 갱신
- [ ] (사진 교체 후 Cloudflare 배포 시) 이미지 최적화 방식 결정
- [ ] 분석 도구 연결 (`NEXT_PUBLIC_CF_BEACON_TOKEN` 또는 `NEXT_PUBLIC_GA_ID`)
