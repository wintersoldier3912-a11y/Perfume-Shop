import { Product, Review } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  {
    _id: '1',
    name: 'Midnight Rose',
    slug: 'midnight-rose',
    shortDescription: 'A romantic blend of Bulgarian rose and dark oud.',
    description: 'Midnight Rose captures the essence of a secret garden at dusk. The top notes of spicy pink pepper give way to a heart of velvety Bulgarian rose, resting on a base of warm oud and amber. Perfect for evening wear and special occasions.',
    price: 120,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 120 }, { size: '100ml', price: 200 }],
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585218356055-e1bbc58b11c3?q=80&w=800&auto=format&fit=crop',
    ],
    category: 'Floral',
    tags: ['rose', 'oud', 'romantic', 'evening'],
    rating: 4.8,
    reviewsCount: 12
  },
  {
    _id: '2',
    name: 'Ocean Breeze',
    slug: 'ocean-breeze',
    shortDescription: 'Fresh aquatic notes with a hint of sea salt.',
    description: 'Experience the refreshing power of the ocean. Crisp top notes of sea salt and bergamot blend seamlessly with a heart of sage and driftwood. This scent is invigorating, clean, and perfect for daily wear.',
    price: 95,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 95 }, { size: '100ml', price: 160 }],
    images: [
      'https://images.unsplash.com/photo-1588015302787-73d8db1947b0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Fresh',
    tags: ['aquatic', 'fresh', 'summer', 'daytime'],
    rating: 4.5,
    reviewsCount: 8
  },
  {
    _id: '3',
    name: 'Golden Amber',
    slug: 'golden-amber',
    shortDescription: 'Warm, oriental spices mixed with sweet vanilla.',
    description: 'A luxurious and opulent fragrance that wraps you in warmth. Golden Amber features rich notes of vanilla, cinnamon, and sandalwood, creating a comforting yet sophisticated aura.',
    price: 145,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 145 }, { size: '100ml', price: 240 }],
    images: [
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Oriental',
    tags: ['amber', 'vanilla', 'warm', 'unisex'],
    rating: 4.9,
    reviewsCount: 25
  },
  {
    _id: '4',
    name: 'Citrus Burst',
    slug: 'citrus-burst',
    shortDescription: 'Energetic blend of lemon, lime, and mandarin.',
    description: 'Wake up your senses with Citrus Burst. A vibrant explosion of lemon zest, lime, and juicy mandarin orange that settles into a soft musk base. It is sunshine in a bottle.',
    price: 85,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 85 }, { size: '100ml', price: 140 }],
    images: [
      'https://images.unsplash.com/photo-1512777576244-b846ac3d816f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Citrus',
    tags: ['lemon', 'citrus', 'energetic', 'summer'],
    rating: 4.2,
    reviewsCount: 5
  },
  {
    _id: '5',
    name: 'Velvet Oud',
    slug: 'velvet-oud',
    shortDescription: 'Intense woody notes for a bold statement.',
    description: 'Velvet Oud is for those who want to be remembered. A potent mix of agarwood (oud), leather, and smoke that commands attention. Sophisticated, dark, and mysteriously alluring.',
    price: 180,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 180 }, { size: '100ml', price: 300 }],
    images: [
      'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Woody',
    tags: ['oud', 'woody', 'intense', 'luxury'],
    rating: 4.7,
    reviewsCount: 18
  },
  {
    _id: '6',
    name: 'Jasmine Whisper',
    slug: 'jasmine-whisper',
    shortDescription: 'Delicate white florals with a touch of honey.',
    description: 'Soft, feminine, and graceful. Jasmine Whisper combines jasmine sambac, tuberose, and a hint of honey for a floral fragrance that is both classic and modern.',
    price: 110,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 110 }, { size: '100ml', price: 190 }],
    images: [
      'https://images.unsplash.com/photo-1610461888137-979140e6df2e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Floral',
    tags: ['jasmine', 'floral', 'feminine', 'spring'],
    rating: 4.6,
    reviewsCount: 14
  },
  {
    _id: '7',
    name: 'Spiced Vanilla',
    slug: 'spiced-vanilla',
    shortDescription: 'Gourmand sweetness with a spicy kick.',
    description: 'A treat for the senses. Creamy Madagascar vanilla is elevated with nutmeg and clove, creating a scent that is cozy, inviting, and deliciously addictive.',
    price: 100,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 100 }, { size: '100ml', price: 175 }],
    images: [
      'https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605615701726-259160533dbb?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Gourmand',
    tags: ['vanilla', 'spice', 'sweet', 'winter'],
    rating: 4.8,
    reviewsCount: 22
  },
  {
    _id: '8',
    name: 'Lavender Haze',
    slug: 'lavender-haze',
    shortDescription: 'Calming French lavender with aromatic herbs.',
    description: 'Find your center with Lavender Haze. Authentic French lavender is blended with rosemary and thyme for an aromatic experience that soothes the mind and spirit.',
    price: 90,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 90 }, { size: '100ml', price: 150 }],
    images: [
      'https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602143407151-1111550e90c6?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Aromatic',
    tags: ['lavender', 'herbal', 'calming', 'unisex'],
    rating: 4.4,
    reviewsCount: 9
  },
  {
    _id: '9',
    name: 'Noir Intense',
    slug: 'noir-intense',
    shortDescription: 'A deep, mysterious blend of black pepper and vetiver.',
    description: 'For the night owl. Noir Intense combines the sharp bite of black pepper with the earthy depth of vetiver and cedarwood. A modern masculine classic.',
    price: 135,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 135 }, { size: '100ml', price: 210 }],
    images: [
      'https://images.unsplash.com/photo-1523293188086-b589b9b400e7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Woody',
    tags: ['spicy', 'woody', 'masculine', 'night'],
    rating: 4.7,
    reviewsCount: 6
  },
  {
    _id: '10',
    name: 'Cherry Blossom',
    slug: 'cherry-blossom',
    shortDescription: 'Springtime in a bottle with sweet cherry notes.',
    description: 'Celebrate the arrival of spring. Light, airy, and delicately sweet, Cherry Blossom captures the fleeting beauty of sakura petals dancing in the wind.',
    price: 105,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 105 }, { size: '100ml', price: 180 }],
    images: [
      'https://images.unsplash.com/photo-1519669576420-754c048b2657?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514804153920-d3a3ce4fb155?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Floral',
    tags: ['cherry', 'floral', 'sweet', 'spring'],
    rating: 4.5,
    reviewsCount: 15
  },
  {
    _id: '11',
    name: 'Sandalwood Serenity',
    slug: 'sandalwood-serenity',
    shortDescription: 'Creamy sandalwood with a touch of cardamom.',
    description: 'Find peace with Sandalwood Serenity. The meditative scent of creamy Indian sandalwood is brightened with a hint of green cardamom. Pure relaxation.',
    price: 150,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 150 }, { size: '100ml', price: 250 }],
    images: [
      'https://images.unsplash.com/photo-1623886561578-1549646487df?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594125311687-3b1b3e5b318d?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Woody',
    tags: ['sandalwood', 'calm', 'woody', 'unisex'],
    rating: 4.9,
    reviewsCount: 30
  },
  {
    _id: '12',
    name: 'Royal Musk',
    slug: 'royal-musk',
    shortDescription: 'Clean white musk with a powdery finish.',
    description: 'Simple, elegant, and timeless. Royal Musk is a skin-scent that enhances your natural chemistry. Clean white musk notes with a soft, powdery iris finish.',
    price: 95,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 95 }, { size: '100ml', price: 155 }],
    images: [
      'https://images.unsplash.com/photo-1605615701726-259160533dbb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512777576244-b846ac3d816f?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Fresh',
    tags: ['musk', 'clean', 'powder', 'daily'],
    rating: 4.3,
    reviewsCount: 11
  },
  {
    _id: '13',
    name: 'Emerald Woods',
    slug: 'emerald-woods',
    shortDescription: 'Fresh pine and earthy moss notes.',
    description: 'A walk through an ancient forest. Emerald Woods blends crisp pine needles with earthy oakmoss and a touch of wild berries for a grounding and refreshing scent.',
    price: 115,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 115 }, { size: '100ml', price: 190 }],
    images: [
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523293188086-b589b9b400e7?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Woody',
    tags: ['pine', 'moss', 'earthy', 'fresh'],
    rating: 4.6,
    reviewsCount: 7
  },
  {
    _id: '14',
    name: 'Ruby Petals',
    slug: 'ruby-petals',
    shortDescription: 'Vibrant red poppy and sweet raspberry.',
    description: 'Bold and beautiful. Ruby Petals celebrates the vibrancy of life with notes of wild red poppy, sweet raspberry, and a soft musk base.',
    price: 105,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 105 }, { size: '100ml', price: 180 }],
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519669576420-754c048b2657?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Floral',
    tags: ['poppy', 'floral', 'fruity', 'bright'],
    rating: 4.5,
    reviewsCount: 16
  },
  {
    _id: '15',
    name: 'Sapphire Mist',
    slug: 'sapphire-mist',
    shortDescription: 'Cool blue mint and white tea.',
    description: 'Cool and calming. Sapphire Mist features refreshing notes of blue mint, white tea, and cucumber water. The perfect antidote to a hot summer day.',
    price: 90,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 90 }, { size: '100ml', price: 155 }],
    images: [
      'https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588015302787-73d8db1947b0?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Fresh',
    tags: ['mint', 'tea', 'cool', 'unisex'],
    rating: 4.4,
    reviewsCount: 10
  },
  {
    _id: '16',
    name: 'Diamond Dust',
    slug: 'diamond-dust',
    shortDescription: 'Sparkling aldehydes and white amber.',
    description: 'Pure radiance. Diamond Dust is an ethereal scent featuring sparkling aldehydes, white amber, and a touch of iris. Elegant, sophisticated, and luminous.',
    price: 160,
    currency: 'USD',
    sizes: [{ size: '50ml', price: 160 }, { size: '100ml', price: 280 }],
    images: [
      'https://images.unsplash.com/photo-1594125311687-3b1b3e5b318d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605615701726-259160533dbb?q=80&w=800&auto=format&fit=crop'
    ],
    category: 'Fresh',
    tags: ['clean', 'amber', 'luxury', 'evening'],
    rating: 4.9,
    reviewsCount: 20
  }
];

export const MOCK_REVIEWS: Review[] = [
  { _id: 'r1', productId: '1', name: 'Alice M.', rating: 5, comment: 'Absolutely stunning scent. Lasts all day!', createdAt: '2023-10-15T10:00:00Z' },
  { _id: 'r2', productId: '1', name: 'John D.', rating: 4, comment: 'Very nice, but a bit strong for office wear.', createdAt: '2023-10-18T14:30:00Z' },
  { _id: 'r3', productId: '3', name: 'Sarah K.', rating: 5, comment: 'My new signature scent. Warm and cozy.', createdAt: '2023-11-01T09:15:00Z' },
  { _id: 'r4', productId: '5', name: 'Mike T.', rating: 5, comment: 'Pure luxury. Worth every penny.', createdAt: '2023-11-05T18:20:00Z' },
];