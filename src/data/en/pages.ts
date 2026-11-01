import { enCities } from './cities';
import { enGuides } from './guides';
import { enLanguages } from './languages';
import { enServices } from './services';
import type { EnPage, EnSection } from './types';

export const enPages: EnPage[] = [...enServices, ...enCities, ...enLanguages, ...enGuides];

export const enSectionLabels: Record<EnSection, string> = {
  services: 'Services',
  interpreter: 'Cities',
  language: 'Languages',
  guides: 'Guides',
};

export const enPageKey = (p: Pick<EnPage, 'section' | 'slug'>) => `${p.section}/${p.slug}`;
export const enPageByKey = Object.fromEntries(enPages.map((p) => [enPageKey(p), p]));
export const enPath = (p: Pick<EnPage, 'section' | 'slug'>) => `/en/${p.section}/${p.slug}`;
