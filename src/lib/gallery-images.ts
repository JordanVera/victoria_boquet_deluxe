export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
  featured: boolean;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: '/gallery/gallery-01.png',
    alt: 'Luxury red rose ramó wrapped in black and gold paper by Victoria Boquet Deluxe',
    category: 'ramos',
    featured: true,
  },
  {
    id: 2,
    src: '/gallery/gallery-02.png',
    alt: 'Blush, cream, and ivory rose bouquet with champagne gold-rim wrapping',
    category: 'ramos',
    featured: true,
  },
  {
    id: 3,
    src: '/gallery/gallery-03.png',
    alt: 'All-white rose ramó wrapped in matte black paper with a gold ribbon',
    category: 'ramos',
    featured: true,
  },
  {
    id: 4,
    src: '/gallery/gallery-04.png',
    alt: 'Burgundy and blush deluxe ramós styled together on a dark wood table',
    category: 'ramos',
    featured: true,
  },
  {
    id: 5,
    src: '/gallery/gallery-05.png',
    alt: 'Graduation ramó with black wrapping, red roses, and a gold tassel accent',
    category: 'grad',
    featured: true,
  },
  {
    id: 6,
    src: '/gallery/gallery-06.png',
    alt: 'Stargazer lily and cream rose bouquet wrapped in ivory paper',
    category: 'seasonal',
    featured: true,
  },
  {
    id: 7,
    src: '/gallery/gallery-07.png',
    alt: 'Statement 100-count red rose ramó wrapped in black and burgundy paper',
    category: 'ramos',
    featured: true,
  },
  {
    id: 8,
    src: '/gallery/gallery-08.png',
    alt: 'Lavender, white, and dusty rose ramó in translucent black wrapping',
    category: 'ramos',
    featured: true,
  },
  {
    id: 9,
    src: '/gallery/gallery-09.png',
    alt: 'Victoria Boquet Deluxe wrapping papers, gold ribbon, and rose stems on the design table',
    category: 'seasonal',
    featured: true,
  },
  {
    id: 10,
    src: '/gallery/gallery-10.png',
    alt: 'Burgundy and hot-pink rose ramó wrapped in translucent black and gold paper',
    category: 'ramos',
    featured: true,
  },
];
