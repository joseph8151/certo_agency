import type { Config } from 'tailwindcss';

/**
 * CERTO AGENCY Design Tokens
 * White 55% / Ivory 25% / Blue 15% / Etc 5%
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F7F4EE',
          light: '#FAF8F3',
        },
        brand: {
          DEFAULT: '#285A8C', // Premium Blue
          deep: '#173B5E', // Deep Blue
          soft: '#EAF2F8', // Soft Blue
        },
        navy: '#192C3B', // Text Navy
        mist: '#F4F5F6', // Light Gray
        line: {
          DEFAULT: 'rgba(25, 44, 59, 0.12)',
          strong: 'rgba(25, 44, 59, 0.24)',
          invert: 'rgba(255, 255, 255, 0.18)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Pretendard', 'Pretendard Variable', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      fontSize: {
        // Editorial display scale — fluid, clamped
        eyebrow: ['0.6875rem', { lineHeight: '1.2', letterSpacing: '0.22em' }],
        display: ['clamp(2.125rem, 4.6vw, 3.625rem)', { lineHeight: '1.22', letterSpacing: '-0.025em' }],
        headline: ['clamp(1.625rem, 3.1vw, 2.5rem)', { lineHeight: '1.32', letterSpacing: '-0.02em' }],
        title: ['clamp(1.375rem, 2.1vw, 1.75rem)', { lineHeight: '1.4', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        shell: '1320px',
        prose: '68ch',
      },
      spacing: {
        section: 'clamp(4.5rem, 9vw, 9.5rem)',
        gutter: 'clamp(1.25rem, 4vw, 3.5rem)',
      },
      borderRadius: {
        // Minimal, editorial — no pill-shaped SaaS cards
        none: '0',
        xs: '2px',
        sm: '3px',
        DEFAULT: '4px',
      },
      transitionTimingFunction: {
        certo: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--accordion-height)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
