export const COMPANY = {
  name: 'Bloomify Boutique',
  shortName: 'Bloomify',
  tagline: 'Custom Floral Designs & Bouquets',
  phone: '',
  phoneHref: '',
  email: '',
  address: 'Far East El Paso',
  city: 'El Paso, TX',
  serviceArea: 'Far East El Paso · Delivery Available',
  instagram: 'https://www.instagram.com/bloomifyboutique/',
  instagramHandle: '@bloomifyboutique',
  facebook: '',
  website: 'https://www.instagram.com/bloomifyboutique/',
  jotformUrl: 'https://form.jotform.com/261211909674156',
  googleUrl:
    'https://www.google.com/maps/search/?api=1&query=Far+East+El+Paso+TX',
  googleReviewsUrl: 'https://www.instagram.com/bloomifyboutique/',
  googleRating: 5.0,
  reviewCount: 2504,
  languages: 'Se habla español',
};

export const ACCENT = '#e56b8c';
export const ACCENT_HOVER = '#d15476';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Order', href: '/order' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'ramos', label: 'Ramós' },
  { id: 'seasonal', label: 'Seasonal' },
  { id: 'grad', label: 'Grad & Prom' },
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]['id'];

export { GALLERY_IMAGES, type GalleryImage } from './gallery-images';

export const ABOUT_CONTENT = {
  intro:
    'Bloomify Boutique is an El Paso floral studio specializing in custom ramós, wrapped rose bouquets, and statement blooms for the moments that matter — birthdays, proposals, graduation, prom, and just because.',
  body: 'Every bouquet is built to order: rose count, color story, wrapping paper, and add-ons you choose. Pickup is in Far East El Paso, with delivery available across the city. Se habla español.',
  evolution:
    'Orders start with a form or Instagram DM. Once details are confirmed, a 50% deposit locks your bouquet in place — then Bloomify designs, wraps, and gets it into your hands looking as full and photo-ready as the feed.',
};

export const OWNER = {
  name: 'Marissa',
  role: 'Founder & Lead Florist',
  image: '/owner.png',
  imageAlt:
    'Marissa, founder of Bloomify Boutique, holding a large custom pink rose ramó',
  intro:
    'Marissa started Bloomify Boutique to bring full, wrapped rose ramós to El Paso — bouquets built to look as good in your hands as they do on the feed.',
  bio: 'Every order passes through her personally: rose count, color story, wrapping paper, and add-ons. From a 25-rose birthday ramó to a 100-count grad statement piece, she confirms the details, packs each bouquet tight, and makes sure the wrap is part of the moment.',
  closing:
    'Questions in English or Spanish? Reach out on Instagram or through the order form — Marissa handles follow-ups herself.',
};

export const STUDIO_HIGHLIGHTS = [
  {
    title: 'Custom Rose Ramós',
    description:
      '25, 50, 75, or 100 roses in one to four colors — packed tight, wrapped luxe, and built around your palette.',
  },
  {
    title: 'Signature Wrapping',
    description:
      'From classic pink and black to translucent, Dior-inspired, Coach-inspired, and graduation wraps — the paper is part of the look.',
  },
  {
    title: 'Grad, Prom & Milestones',
    description:
      'Tassels, banners, toppers, and extra stems for the big-night ramó that has to photograph as good as it feels to hold.',
  },
  {
    title: 'Pickup or Delivery',
    description:
      'Collect in Far East El Paso or add delivery. Zelle, Cash App, and Apple Pay keep checkout simple.',
  },
];

export const OFFERINGS = [
  '25–100 rose ramós',
  'Custom wrapping paper',
  'Grad & prom bouquets',
  'Lilies, tulips & add-ons',
  'Banners & custom notes',
  'Pickup or delivery',
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Alejandra M.',
    event: 'Birthday ramó · Instagram',
    rating: 5,
    text: 'The 50-rose ramó was packed so full it looked even better in person. Wrapping, color, everything matched the inspo I sent.',
  },
  {
    id: 2,
    name: 'Sofia R.',
    event: 'Graduation · Instagram',
    rating: 5,
    text: 'Ordered the black-and-pink grad wrap with a tassel and banner. Pickup in Far East El Paso was easy and the bouquet was the star of every photo.',
  },
  {
    id: 3,
    name: 'Diego L.',
    event: 'Anniversary · Instagram',
    rating: 5,
    text: 'I picked the colors and wrapping, sent a photo, and Bloomify handled the rest. She confirmed details fast and the roses lasted all week.',
  },
  {
    id: 4,
    name: 'Camila V.',
    event: 'Prom · Instagram',
    rating: 5,
    text: 'Hot pink roses with the translucent wrap — exactly what I wanted. The add-ons made it feel custom instead of like a shop bouquet.',
  },
  {
    id: 5,
    name: 'Marisol G.',
    event: 'Just because · Instagram',
    rating: 5,
    text: 'Se habla español, the form is simple, and the ramó showed up looking like the Instagram page. Already planning the next order.',
  },
  {
    id: 6,
    name: 'Isaiah T.',
    event: 'Proposal · Instagram',
    rating: 5,
    text: 'Needed a statement 75-count for a proposal. Bloomify helped me lock colors and wrapping, then followed up to confirm the deposit. Perfect.',
  },
] as const;

export type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export const FAQS: FaqItem[] = [
  {
    question: 'How do I order a bouquet?',
    answer:
      'Fill out the bouquet order form with your rose count, colors, wrapping, add-ons, and pickup or delivery date. Bloomify will confirm details and send 50% deposit instructions to place the order. You can also start on Instagram @bloomifyboutique.',
    link: { href: '/order', label: 'Start Your Order' },
  },
  {
    question: 'What sizes and prices do you offer?',
    answer:
      '25 roses are $110 (1 color), 50 roses are $175 (1–2 colors), 75 roses are $235 (1–3 colors), and 100 roses are $300 (1–4 colors). Add-ons like lilies, tulips, glitter, toppers, and wrapping upgrades are extra.',
    link: { href: '/pricing', label: 'View Pricing' },
  },
  {
    question: 'Where is pickup, and do you deliver?',
    answer:
      'Pickup is in Far East El Paso. Delivery is available for an additional fee — share the address on your order form and Bloomify will confirm the delivery total when following up.',
  },
  {
    question: 'How does the deposit work?',
    answer:
      'Once your order is reviewed, a 50% deposit is required to place it. Preferred payment methods are Zelle, Cash App, and Apple Pay. The remaining balance is due before pickup or delivery.',
  },
  {
    question: 'Can I send an inspiration photo?',
    answer:
      'Yes — upload a photo of the style you like. Final design may vary based on flower availability, but the photo helps match color, wrap, and overall vibe.',
  },
  {
    question: 'What wrapping paper can I choose?',
    answer:
      'Options include black, red, white, pink, hot pink, pastels, translucent wraps, Dior-inspired and Coach-inspired papers, pink + gold rim, Snoopy + hearts, and graduation pink or black.',
  },
  {
    question: 'Do you make graduation and prom ramós?',
    answer:
      'Yes. Grad and prom bouquets are a Bloomify specialty — tassels, banners, custom notes, and statement wrapping are all available as add-ons.',
  },
  {
    question: 'How do I care for my flowers?',
    answer:
      'Trim stems at an angle, place in clean water, keep out of direct sun and AC vents, and change the water daily. Remove wrapping if it sits in water. Bloomify can share extra care notes with your order confirmation.',
  },
  {
    question: 'Se habla español?',
    answer:
      'Sí. Bloomify Boutique is based in El Paso and happy to take orders and questions in Spanish via the form or Instagram DM.',
  },
];

export const ROSE_COUNTS = [
  {
    id: '25',
    label: '25 Roses',
    price: 110,
    colors: 1,
    note: '1 color',
  },
  {
    id: '50',
    label: '50 Roses',
    price: 175,
    colors: 2,
    note: '1–2 colors',
  },
  {
    id: '75',
    label: '75 Roses',
    price: 235,
    colors: 3,
    note: '1–3 colors',
  },
  {
    id: '100',
    label: '100 Roses',
    price: 300,
    colors: 4,
    note: '1–4 colors',
  },
] as const;

export const ROSE_COLORS = [
  'Red',
  'Pink',
  'White',
  'Lavender',
  'Yellow',
  'Blue',
  'Hot pink',
] as const;

export const WRAPPING_PAPERS = [
  'Black',
  'Red',
  'White',
  'Pink',
  'Hot Pink',
  'Pastel Yellow',
  'Pastel Purple',
  'Pastel Green',
  'Translucent Pink',
  'Translucent Black',
  'Translucent Purple',
  'Translucent Red',
  'Dior Red',
  'Dior Pink',
  'Dior Black',
  'Coach Red',
  'Coach Pink',
  'Pink + Gold Rim',
  'Snoopy + Hearts',
  'Graduation Pink',
  'Graduation Black',
] as const;

export const ADD_ON_OPTIONS = [
  { id: 'plushie', label: 'Plushie', note: '+$10–$15' },
  { id: 'crown', label: 'Crown', note: '+$10' },
  { id: 'glitter', label: 'Glitter', note: '+$10' },
  { id: 'topper', label: 'Cardstock topper', note: '+$5' },
  { id: 'babys-breath', label: "Baby's breath", note: '' },
  { id: 'initial', label: 'Initial / number', note: '+$20' },
  { id: 'lilies', label: 'Lilies', note: '+$25' },
  { id: 'tulips', label: 'Tulips', note: '+$25' },
  { id: 'butterflies', label: 'Butterflies', note: '+$2 each' },
  { id: 'tassel', label: 'Graduation tassel (pink/black)', note: '+$10' },
  {
    id: 'cherries',
    label: 'Artificial cherries / strawberries',
    note: '+$2 for 3',
  },
  { id: 'rocher', label: 'Ferrero Rocher', note: '+$15' },
] as const;

export const PAYMENT_METHODS = ['Zelle', 'Cash App', 'Apple Pay'] as const;
