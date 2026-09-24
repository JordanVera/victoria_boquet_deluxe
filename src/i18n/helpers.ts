import type { Dictionary } from './en';

export function galleryAlt(t: Dictionary, id: number) {
  return t.gallery.imageAlts[id as keyof Dictionary['gallery']['imageAlts']];
}
