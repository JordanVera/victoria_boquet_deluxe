export type BouquetPackageId = '25' | '50' | '75' | '100';
export type AddOnId = 'finishing' | 'stems' | 'grad';

export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const BOUQUET_PACKAGES: Array<
  Omit<PricingPackage, 'id'> & { id: BouquetPackageId }
> = [
  {
    id: '25',
    name: '25 Roses',
    price: '$125',
    priceNote: '1 color',
    description:
      'A compact statement ramó — one color, wrapped your way, ready for birthdays and just-because moments.',
    features: [
      '25 roses, 1 color',
      'Choice of wrapping paper',
      'Optional banner or note',
      'Pickup by appointment in Houston',
    ],
  },
  {
    id: '50',
    name: '50 Roses',
    price: '$195',
    priceNote: '1–2 colors',
    description:
      'The crowd-favorite size — full, photo-ready, and big enough to feel like a moment.',
    highlighted: true,
    features: [
      '50 roses, 1–2 colors',
      'Signature wrapping options',
      'Add-ons available',
      'Pickup or delivery',
    ],
  },
  {
    id: '75',
    name: '75 Roses',
    price: '$275',
    priceNote: '1–3 colors',
    description:
      'A show-stopper ramó for proposals, grad, and the nights that need extra volume.',
    features: [
      '75 roses, 1–3 colors',
      'Luxe wrap and add-ons',
      'Grad & prom ready',
      '50% deposit to place',
    ],
  },
  {
    id: '100',
    name: '100 Roses',
    price: '$350',
    priceNote: '1–4 colors',
    description:
      'The full Victoria statement — four colors, maximum impact, made to be carried and photographed.',
    features: [
      '100 roses, 1–4 colors',
      'Premium wrapping library',
      'Custom personalization',
      'Delivery available',
    ],
  },
];

export const ADD_ONS: Array<Omit<PricingPackage, 'id'> & { id: AddOnId }> = [
  {
    id: 'finishing',
    name: 'Finishing Touches',
    price: 'From $2',
    description: 'Layer on the details that make a ramó feel personal.',
    features: [
      'Glitter +$10',
      'Cardstock topper +$5',
      'Crown +$10',
      'Butterflies +$2 each',
      "Baby's breath",
    ],
  },
  {
    id: 'stems',
    name: 'Extra Stems & Treats',
    price: 'From $10',
    description: 'Mix in other blooms, a plushie, or a sweet surprise.',
    features: [
      'Lilies +$25',
      'Tulips +$25',
      'Plushie +$10–$15',
      'Ferrero Rocher +$15',
      'Artificial cherries / strawberries +$2 for 3',
    ],
  },
  {
    id: 'grad',
    name: 'Grad & Prom',
    price: 'From $10',
    description: 'Built for the big-night photos — tassels, letters, and statement wrap.',
    features: [
      'Graduation tassel burgundy/black +$10',
      'Initial or number +$20',
      'Graduation burgundy or black wrap',
      'Custom banner or note',
    ],
  },
];

export const PRICING_NOTES = [
  'A 50% deposit is required to place your order after Victoria confirms details.',
  'Pickup is by appointment in Houston. Delivery is available for an additional fee.',
  'Preferred payment methods: Zelle, Cash App, and Apple Pay.',
  'Final design may vary slightly based on flower availability — inspo photos are welcome.',
  'Se habla español. Orders can also be started via Instagram DM @victoriaboquetdeluxe.',
];
