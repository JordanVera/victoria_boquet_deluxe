export const COMPANY = {
  name: 'Victoria Boquet Deluxe',
  shortName: 'Victoria Boquet',
  tagline: 'Luxury Ramós & Custom Floral Designs',
  phone: '',
  phoneHref: '',
  email: '',
  address: 'By Appointment',
  city: 'Houston, TX',
  serviceArea: 'Houston · Pickup & Delivery',
  instagram: 'https://www.instagram.com/victoria_bouquet_deluxe/',
  instagramHandle: '@victoriaboquetdeluxe',
  facebook: '',
  website: 'https://victoriaboquetdeluxe.com',
  jotformUrl: '',
  googleUrl: 'https://www.google.com/maps/search/?api=1&query=Houston+TX',
  googleReviewsUrl: 'https://www.instagram.com/victoriaboquetdeluxe/',
  googleRating: 5.0,
  reviewCount: 0,
  languages: 'Se habla español',
};

export const ACCENT = '#e56b8c';
export const ACCENT_HOVER = '#c94f71';

export const NAV_LINKS = [
  { id: 'home', href: '/' },
  { id: 'about', href: '/about' },
  { id: 'gallery', href: '/gallery' },
  { id: 'pricing', href: '/pricing' },
  { id: 'order', href: '/order' },
  { id: 'faq', href: '/faq' },
  { id: 'contact', href: '/contact' },
] as const;

export type NavId = (typeof NAV_LINKS)[number]['id'];

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
    'Victoria Boquet Deluxe is a Houston floral studio specializing in luxury ramós, wrapped rose bouquets, and statement blooms for the moments that matter — birthdays, proposals, graduation, prom, and just because.',
  body: 'Every bouquet is built to order: rose count, color story, wrapping paper, and add-ons you choose. Pickup is by appointment in Houston, with delivery available across the city. Se habla español.',
  evolution:
    'Orders start with a form or Instagram DM. Once details are confirmed, a 50% deposit locks your bouquet in place — then Victoria designs, wraps, and gets it into your hands looking as full and photo-ready as the occasion deserves.',
};

export const OWNER = {
  name: 'Victoria',
  role: 'Founder & Lead Florist',
  image: '/owner.png',
  imageAlt:
    'Victoria, founder of Victoria Boquet Deluxe, holding a deluxe red rose ramó',
  intro:
    'Victoria founded Victoria Boquet Deluxe to bring full, wrapped luxury ramós to Houston — bouquets built to look as good in your hands as they do in every photo.',
  bio: 'Every order passes through her personally: rose count, color story, wrapping paper, and add-ons. From a 25-rose birthday ramó to a 100-count statement piece, she confirms the details, packs each bouquet tight, and makes sure the wrap is part of the moment.',
  closing:
    'Questions in English or Spanish? Reach out on Instagram or through the order form — Victoria handles follow-ups herself.',
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
      'From classic black and burgundy to gold-rim, translucent, Dior-inspired, Coach-inspired, and graduation wraps — the paper is part of the look.',
  },
  {
    title: 'Grad, Prom & Milestones',
    description:
      'Tassels, banners, toppers, and extra stems for the big-night ramó that has to photograph as good as it feels to hold.',
  },
  {
    title: 'Pickup or Delivery',
    description:
      'Collect by appointment in Houston or add delivery. Zelle, Cash App, and Apple Pay keep checkout simple.',
  },
];

export const OFFERINGS = [
  '25–100 rose ramós',
  'Luxury wrapping paper',
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
    text: 'Ordered the black-and-gold grad wrap with a tassel and banner. Pickup in Houston was easy and the bouquet was the star of every photo.',
  },
  {
    id: 3,
    name: 'Diego L.',
    event: 'Anniversary · Instagram',
    rating: 5,
    text: 'I picked the colors and wrapping, sent a photo, and Victoria handled the rest. She confirmed details fast and the roses lasted all week.',
  },
  {
    id: 4,
    name: 'Camila V.',
    event: 'Prom · Instagram',
    rating: 5,
    text: 'Burgundy roses with the gold-rim wrap — exactly what I wanted. The add-ons made it feel custom instead of like a shop bouquet.',
  },
  {
    id: 5,
    name: 'Marisol G.',
    event: 'Just because · Instagram',
    rating: 5,
    text: 'Se habla español, the form is simple, and the ramó showed up looking like a deluxe arrangement. Already planning the next order.',
  },
  {
    id: 6,
    name: 'Isaiah T.',
    event: 'Proposal · Instagram',
    rating: 5,
    text: 'Needed a statement 75-count for a proposal. Victoria helped me lock colors and wrapping, then followed up to confirm the deposit. Perfect.',
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
      'Fill out the bouquet order form with your rose count, colors, wrapping, add-ons, and pickup or delivery date. Victoria will confirm details and send 50% deposit instructions to place the order. You can also start on Instagram @victoriaboquetdeluxe.',
    link: { href: '/order', label: 'Start Your Order' },
  },
  {
    question: 'What sizes and prices do you offer?',
    answer:
      '25 roses are $125 (1 color), 50 roses are $195 (1–2 colors), 75 roses are $275 (1–3 colors), and 100 roses are $350 (1–4 colors). Add-ons like lilies, tulips, glitter, toppers, and wrapping upgrades are extra.',
    link: { href: '/pricing', label: 'View Pricing' },
  },
  {
    question: 'Where is pickup, and do you deliver?',
    answer:
      'Pickup is by appointment in Houston. Delivery is available for an additional fee — share the address on your order form and Victoria will confirm the delivery total when following up.',
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
      'Options include black, burgundy, white, gold-rim, red, pink, translucent wraps, Dior-inspired and Coach-inspired papers, and graduation black or burgundy.',
  },
  {
    question: 'Do you make graduation and prom ramós?',
    answer:
      'Yes. Grad and prom bouquets are a Victoria Boquet Deluxe specialty — tassels, banners, custom notes, and statement wrapping are all available as add-ons.',
  },
  {
    question: 'How do I care for my flowers?',
    answer:
      'Trim stems at an angle, place in clean water, keep out of direct sun and AC vents, and change the water daily. Remove wrapping if it sits in water. Victoria can share extra care notes with your order confirmation.',
  },
  {
    question: 'Se habla español?',
    answer:
      'Sí. Victoria Boquet Deluxe is happy to take orders and questions in Spanish via the form or Instagram DM.',
  },
];

export const ROSE_COUNTS = [
  {
    id: '25',
    label: '25 Roses',
    price: 125,
    colors: 1,
    note: '1 color',
  },
  {
    id: '50',
    label: '50 Roses',
    price: 195,
    colors: 2,
    note: '1–2 colors',
  },
  {
    id: '75',
    label: '75 Roses',
    price: 275,
    colors: 3,
    note: '1–3 colors',
  },
  {
    id: '100',
    label: '100 Roses',
    price: 350,
    colors: 4,
    note: '1–4 colors',
  },
] as const;

export const ROSE_COLORS = [
  'Red',
  'Burgundy',
  'Pink',
  'White',
  'Lavender',
  'Yellow',
  'Blush',
] as const;

export const WRAPPING_PAPERS = [
  'Black',
  'Burgundy',
  'Red',
  'White',
  'Gold Rim',
  'Pink',
  'Hot Pink',
  'Pastel Yellow',
  'Pastel Purple',
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
  'Graduation Burgundy',
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
  { id: 'tassel', label: 'Graduation tassel (burgundy/black)', note: '+$10' },
  {
    id: 'cherries',
    label: 'Artificial cherries / strawberries',
    note: '+$2 for 3',
  },
  { id: 'rocher', label: 'Ferrero Rocher', note: '+$15' },
] as const;

export const PAYMENT_METHODS = ['Zelle', 'Cash App', 'Apple Pay'] as const;
