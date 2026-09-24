import { en, type Dictionary } from './en';
import { es } from './es';
import { DEFAULT_LOCALE, type Locale } from './config';

export type { Dictionary, Locale };
export { DEFAULT_LOCALE, LOCALES, isLocale, LOCALE_COOKIE } from './config';
export { galleryAlt } from './helpers';

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
