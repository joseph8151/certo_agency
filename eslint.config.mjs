import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

/** Flat config — eslint-config-next 16 은 flat config 를 직접 내보냅니다. */
const config = [
  ...coreWebVitals,
  ...typescript,
  { ignores: ['.next/**', 'node_modules/**', 'out/**', 'next-env.d.ts'] },
];

export default config;
