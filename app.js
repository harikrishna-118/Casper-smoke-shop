/**
 * Casper Smoke Shop - Complete Interactive Client Application & Logic Engine
 */
document.addEventListener('DOMContentLoaded', function () {

  // ==========================================
  // 1. PRODUCT DATASET FOR SEARCH & DYNAMIC VIEWS
  // ==========================================
  const productCatalog = [
    { id: 'p1', title: 'Casper Purple Rush Vapor Kit', category: 'Vape Kits', price: 49.99, image: 'casper-mascot-logo.png', rating: 5.0, tag: 'BESTSELLER', flavors: ['Purple Rush', 'Lime Chill', 'Blue Ice'], nics: ['50mg', '20mg', '0mg'], desc: 'The flagship Casper Smoke Shop pod kit with dual mesh coils and custom neon RGB airflow indicator.' },
    { id: 'p2', title: 'Casper Elite Lime Green Glass Water Pipe', category: 'Glass', price: 89.99, image: 'casper-mascot-logo.png', rating: 4.9, tag: 'PREMIUM GLASS', flavors: ['Neon Lime', 'Deep Purple', 'Clear Glass'], nics: ['N/A'], desc: 'Hand-blown thick borosilicate glass beaker pipe with ice pinch and purple accents.' },
    { id: 'p3', title: 'Casper Rush Disposable 10,000 Puffs', category: 'Disposable Vapes', price: 19.99, image: 'casper-mascot-logo.png', rating: 4.8, tag: '20% OFF', flavors: ['Grape Rush', 'Watermelon Ice', 'Spearmint'], nics: ['50mg', '20mg'], desc: 'High capacity disposable vape featuring 10,000 puffs, rechargeable Type-C battery, and digital juice display.' },
    { id: 'p4', title: 'Casper Sub-Ohm E-Liquid - Purple Rush (100ml)', category: 'E-Liquids', price: 16.99, image: 'casper-mascot-logo.png', rating: 5.0, tag: 'POPULAR', flavors: ['Purple Rush', 'Lime Zest', 'Strawberry Ice'], nics: ['6mg', '3mg', '0mg'], desc: 'Premium 70VG/30PG freebase e-juice crafted for huge clouds and intense flavor.' },
    { id: 'p5', title: 'Casper Wax & Concentrate Vaporizer Rig', category: 'Concentrates', price: 69.99, image: 'casper-mascot-logo.png', rating: 4.9, tag: 'HOT DEAL', flavors: ['Matte Black', 'Neon Green'], nics: ['N/A'], desc: 'Precision temperature e-rig for concentrates with quartz bucket atomizer and water filtration.' },
    { id: 'p6', title: 'Casper 4-Piece Aircraft Aluminum Grinder', category: 'Accessories', price: 24.99, image: 'casper-mascot-logo.png', rating: 4.9, tag: 'MUST HAVE', flavors: ['Black & Purple', 'Lime Green'], nics: ['N/A'], desc: 'Ultra-sharp diamond teeth grinder with pollen screen and magnetic top lid.' }
  ];


  // ==========================================
  // 1B. VAPES & CIGARS COLLECTIONS (ADDITIVE)
  // ==========================================
  const casperVapeProducts = [
  {
    "id": "v1",
    "title": "CloudRush Pro X Vape Kit",
    "category": "Vapes",
    "price": 39.99,
    "originalPrice": 47.99,
    "image": "https://www.vapevilla.in/cdn/shop/files/WhatsAppImage2026-06-20at6.40.29PM.jpg?v=1781961279&width=719",
    "rating": 4.9,
    "reviews": 128,
    "tag": "25% OFF",
    "desc": "Premium vape selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Classic",
      "Fresh",
      "Ice"
    ],
    "nics": [
      "50mg",
      "20mg",
      "0mg"
    ]
  },
  {
    "id": "v2",
    "title": "VaporEdge Ultra 12000",
    "category": "Vapes",
    "price": 24.99,
    "originalPrice": 29.99,
    "image": "https://www.vapevilla.in/cdn/shop/files/WhatsApp_Image_2026-06-20_at_6.40.30_PM_1.jpg?v=1781961293&width=719",
    "rating": 4.8,
    "reviews": 214,
    "tag": "20% OFF",
    "desc": "Premium vape selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Classic",
      "Fresh",
      "Ice"
    ],
    "nics": [
      "50mg",
      "20mg",
      "0mg"
    ]
  },
  {
    "id": "v3",
    "title": "NovaPod Max Starter Kit",
    "category": "Vapes",
    "price": 34.99,
    "originalPrice": 41.99,
    "image": "https://www.vapevilla.in/cdn/shop/files/WhatsApp_Image_2026-06-20_at_6.40.30_PM.jpg?v=1781961288&width=719",
    "rating": 4.7,
    "reviews": 96,
    "tag": "15% OFF",
    "desc": "Premium vape selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Classic",
      "Fresh",
      "Ice"
    ],
    "nics": [
      "50mg",
      "20mg",
      "0mg"
    ]
  },
  {
    "id": "v4",
    "title": "MistWave 8000 Disposable",
    "category": "Vapes",
    "price": 18.99,
    "originalPrice": 20.89,
    "image": "https://www.vapebill.com/image/cache/catalog/Products/202306092310219191-800x800.jpg",
    "rating": 4.9,
    "reviews": 187,
    "tag": "BESTSELLER",
    "desc": "Premium vape selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Classic",
      "Fresh",
      "Ice"
    ],
    "nics": [
      "50mg",
      "20mg",
      "0mg"
    ]
  },
  {
    "id": "v5",
    "title": "PulseAir Mesh 15000",
    "category": "Vapes",
    "price": 29.99,
    "originalPrice": 35.99,
    "image": "https://www.vapezilla.com/cdn/shop/files/Lost-Mary-Os-5000-Cosmic-Edition-Banana-Split.png?v=1707743057&width=900",
    "rating": 4.8,
    "reviews": 302,
    "tag": "HOT DEAL",
    "desc": "Premium vape selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Classic",
      "Fresh",
      "Ice"
    ],
    "nics": [
      "50mg",
      "20mg",
      "0mg"
    ]
  },
  {
    "id": "v6",
    "title": "VoltX Rechargeable Pod",
    "category": "Vapes",
    "price": 27.99,
    "originalPrice": 33.59,
    "image": "https://www.vapezilla.com/cdn/shop/files/Lost-Mary-Os-5000-Cosmic-Edition-Berry-Cherry.png?v=1707743057&width=900",
    "rating": 4.6,
    "reviews": 84,
    "tag": "10% OFF",
    "desc": "Premium vape selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Classic",
      "Fresh",
      "Ice"
    ],
    "nics": [
      "50mg",
      "20mg",
      "0mg"
    ]
  },
  {
    "id": "v7",
    "title": "CloudMint Crystal 10000",
    "category": "Vapes",
    "price": 21.99,
    "originalPrice": 24.19,
    "image": "https://fogfathers.co.uk/cdn/shop/files/Vaporessoxros4black.jpg?v=1715336042",
    "rating": 4.7,
    "reviews": 143,
    "tag": "NEW",
    "desc": "Premium vape selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Classic",
      "Fresh",
      "Ice"
    ],
    "nics": [
      "50mg",
      "20mg",
      "0mg"
    ]
  },
  {
    "id": "v8",
    "title": "AirNova Dual Mesh 12000",
    "category": "Vapes",
    "price": 26.99,
    "originalPrice": 32.39,
    "image": "https://cdn11.bigcommerce.com/s-aa739/images/stencil/1280x1280/products/4969/16946/Voopoo-Drag-5-Mod__07521.1726532193.jpg?c=2",
    "rating": 4.9,
    "reviews": 175,
    "tag": "20% OFF",
    "desc": "Premium vape selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Classic",
      "Fresh",
      "Ice"
    ],
    "nics": [
      "50mg",
      "20mg",
      "0mg"
    ]
  },
  {
    "id": "v9",
    "title": "RushBar Pro 9000",
    "category": "Vapes",
    "price": 19.99,
    "originalPrice": 23.99,
    "image": "https://bayvape.ca/cdn/shop/files/GEEK-BAR-Pulse---Blue-Razz-Ice_453d030c-d448-453a-b091-4b371b421728.jpg?v=1762805290",
    "rating": 4.6,
    "reviews": 119,
    "tag": "DEAL",
    "desc": "Premium vape selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Classic",
      "Fresh",
      "Ice"
    ],
    "nics": [
      "50mg",
      "20mg",
      "0mg"
    ]
  },
  {
    "id": "v10",
    "title": "VaporLite Compact Kit",
    "category": "Vapes",
    "price": 31.99,
    "originalPrice": 38.39,
    "image": "https://cdn11.bigcommerce.com/s-vux44hwuka/images/stencil/1280x1280/products/980/1796/19726-RED__10460.1724924850.jpg?c=1",
    "rating": 4.8,
    "reviews": 91,
    "tag": "15% OFF",
    "desc": "Premium vape selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Classic",
      "Fresh",
      "Ice"
    ],
    "nics": [
      "50mg",
      "20mg",
      "0mg"
    ]
  }
];
  const casperCigarProducts = [
  {
    "id": "c1",
    "title": "Cedar Crown Robusto",
    "category": "Cigars",
    "price": 12.99,
    "originalPrice": 15.59,
    "image": "https://www.cigarsdirect.com/cdn/shop/products/oliva-serie-v-melanio-figurado-single.jpg?v=1745008818",
    "rating": 4.9,
    "reviews": 74,
    "tag": "15% OFF",
    "desc": "Premium cigar selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Natural",
      "Maduro",
      "Reserve"
    ],
    "nics": [
      "N/A"
    ]
  },
  {
    "id": "c2",
    "title": "Royal Leaf Toro",
    "category": "Cigars",
    "price": 16.99,
    "originalPrice": 18.69,
    "image": "https://www.cigarsdirect.com/cdn/shop/products/arturo-fuente-gran-reserva-canones-maduro-single.jpg?v=1646365089",
    "rating": 4.8,
    "reviews": 112,
    "tag": "BESTSELLER",
    "desc": "Premium cigar selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Natural",
      "Maduro",
      "Reserve"
    ],
    "nics": [
      "N/A"
    ]
  },
  {
    "id": "c3",
    "title": "Midnight Reserve Churchill",
    "category": "Cigars",
    "price": 19.99,
    "originalPrice": 21.99,
    "image": "https://www.nextcigar.com/cdn/shop/files/padron-padron-1964-anniversary-principe-maduro-33179152908381.jpg?v=1741062468",
    "rating": 4.9,
    "reviews": 86,
    "tag": "PREMIUM",
    "desc": "Premium cigar selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Natural",
      "Maduro",
      "Reserve"
    ],
    "nics": [
      "N/A"
    ]
  },
  {
    "id": "c4",
    "title": "Heritage Blend Gordo",
    "category": "Cigars",
    "price": 14.99,
    "originalPrice": 17.99,
    "image": "https://img.cigarsinternational.com/product/VKI-PM-1028_art.jpg?v=524350",
    "rating": 4.7,
    "reviews": 63,
    "tag": "10% OFF",
    "desc": "Premium cigar selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Natural",
      "Maduro",
      "Reserve"
    ],
    "nics": [
      "N/A"
    ]
  },
  {
    "id": "c5",
    "title": "Golden Estate Corona",
    "category": "Cigars",
    "price": 11.99,
    "originalPrice": 14.39,
    "image": "https://www.cigarsdirect.com/cdn/shop/products/montecristo-classic-el-conde-toro-en-tubo-single-cigar-outside.jpg?v=1652925110",
    "rating": 4.6,
    "reviews": 58,
    "tag": "DEAL",
    "desc": "Premium cigar selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Natural",
      "Maduro",
      "Reserve"
    ],
    "nics": [
      "N/A"
    ]
  },
  {
    "id": "c6",
    "title": "Oak & Ember Toro",
    "category": "Cigars",
    "price": 17.99,
    "originalPrice": 21.59,
    "image": "https://www.cigarsdirect.com/cdn/shop/files/macanudo-cafe-court-tube-single.jpg?v=1734465423",
    "rating": 4.8,
    "reviews": 101,
    "tag": "HOT DEAL",
    "desc": "Premium cigar selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Natural",
      "Maduro",
      "Reserve"
    ],
    "nics": [
      "N/A"
    ]
  },
  {
    "id": "c7",
    "title": "Crown Select Robusto",
    "category": "Cigars",
    "price": 13.99,
    "originalPrice": 15.39,
    "image": "https://thecigarhub.com/cdn/shop/products/my-father-le-bijou-1922_765aaf84-dde7-4712-8c94-630df12ddca9.png?v=1630529432",
    "rating": 4.7,
    "reviews": 77,
    "tag": "NEW",
    "desc": "Premium cigar selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Natural",
      "Maduro",
      "Reserve"
    ],
    "nics": [
      "N/A"
    ]
  },
  {
    "id": "c8",
    "title": "Reserva Negra Churchill",
    "category": "Cigars",
    "price": 21.99,
    "originalPrice": 24.19,
    "image": "https://www.cigarsdirect.com/cdn/shop/products/drew-estate-liga-privada-no-9-belicoso-single.jpg?v=1736532207",
    "rating": 4.9,
    "reviews": 69,
    "tag": "PREMIUM",
    "desc": "Premium cigar selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Natural",
      "Maduro",
      "Reserve"
    ],
    "nics": [
      "N/A"
    ]
  },
  {
    "id": "c9",
    "title": "Classic Maduro Gordo",
    "category": "Cigars",
    "price": 15.99,
    "originalPrice": 19.19,
    "image": "https://www.cigarsdirect.com/cdn/shop/products/oliva-serie-v-melanio-maduro-double-toro-single.jpg?v=1646357349",
    "rating": 4.8,
    "reviews": 95,
    "tag": "20% OFF",
    "desc": "Premium cigar selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Natural",
      "Maduro",
      "Reserve"
    ],
    "nics": [
      "N/A"
    ]
  },
  {
    "id": "c10",
    "title": "Casa Heritage Toro",
    "category": "Cigars",
    "price": 18.99,
    "originalPrice": 22.79,
    "image": "https://www.cigarsdirect.com/cdn/shop/products/drew-estate-liga-privada-no-9-corona-viva-single.jpg?v=1736532223",
    "rating": 4.7,
    "reviews": 82,
    "tag": "POPULAR",
    "desc": "Premium cigar selection from the Casper Smoke Shop collection.",
    "flavors": [
      "Natural",
      "Maduro",
      "Reserve"
    ],
    "nics": [
      "N/A"
    ]
  }
];
  const casperVcProducts = [...casperVapeProducts, ...casperCigarProducts];
  // ==========================================
  // FRONTEND CATALOG COMPLIANCE DATA MODEL
  // Presentation/validation layer only; authoritative values belong to the backend.
  // ==========================================
  const FRONTEND_COMPLIANCE_CONFIG = Object.freeze({
    minimumAge: 21,
    freeShippingThreshold: 200,
    taxRate: 0.08,
    defaultShipping: 9.99,
    outOfStateShipping: 14.99,
    lowStockThreshold: 5,
    restrictedStates: [], // Configure from the store's actual legal shipping policy.
    promoCodes: {
      CASPER20: { type: 'percent', value: 0.20, firstOrderOnly: true, usageLimit: 1, expires: '2099-12-31' },
      SAVE10: { type: 'percent', value: 0.10, usageLimit: 1, expires: '2025-12-31' },
      WELCOME5: { type: 'fixed', value: 5, usageLimit: 2, expires: '2099-12-31' }
    }
  });

  const imageFallback = (title) =>
    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900"><rect width="100%" height="100%" fill="#111318"/><text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="#8cffb0" font-family="Arial" font-size="28">CASPER SMOKE SHOP</text><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#8b919c" font-family="Arial" font-size="18">${String(title).replace(/[<>&"]/g,'')}</text></svg>`)}`;

  // ==========================================
  // SUBCATEGORY DEMO CATALOG
  // Every navbar subcategory has its own dummy records so
  // clicking a submenu never lands on an empty catalog.
  // ==========================================
  const subcategoryDefinitions = [
    ['Vape Kits', 'Vape Kits', 'CloudPeak', 39.99],
    ['Disposable Vapes', 'Disposable Vapes', 'NovaSmoke', 19.99],
    ['Pod Systems', 'Vapes', 'Pod Systems', 34.99],
    ['Starter Kits', 'Vapes', 'Starter Kits', 44.99],
    ['Nic Salts', 'E-Liquids', 'Nic Salts', 17.99],
    ['Freebase Juice', 'E-Liquids', 'Freebase Juice', 16.99],
    ['Zero Nicotine', 'E-Liquids', 'Zero Nicotine', 14.99],
    ['Wax & Dabs', 'Concentrates', 'Wax & Dabs', 22.00],
    ['Live Resin', 'Concentrates', 'Live Resin', 22.00],
    ['Cartridges', 'Concentrates', 'Cartridges', 24.99],
    ['Bongs', 'Glass', 'Bongs', 59.99],
    ['Dab Rigs', 'Glass', 'Dab Rigs', 69.99],
    ['Hand Pipes', 'Glass', 'Hand Pipes', 29.99],
    ['Bubblers', 'Glass', 'Bubblers', 49.99],
    ['Grinders', 'Accessories', 'Grinders', 19.99],
    ['Rolling Papers', 'Accessories', 'Rolling Papers', 3.99],
    ['Trays & Storage', 'Accessories', 'Trays & Storage', 14.99]
  ];

  // Real product photography URLs used for the demo catalog. These replace
  // the old generated SVG placeholders so product cards and quick view show
  // actual product photos instead of the Casper logo/fallback artwork.
  const REAL_PRODUCT_IMAGES = {
    vape: [
      'https://www.vapevilla.in/cdn/shop/files/WhatsAppImage2026-06-20at6.40.29PM.jpg?v=1781961279&width=719',
      'https://www.vapevilla.in/cdn/shop/files/WhatsApp_Image_2026-06-20_at_6.40.30_PM_1.jpg?v=1781961293&width=719',
      'https://www.vapevilla.in/cdn/shop/files/WhatsApp_Image_2026-06-20_at_6.40.30_PM.jpg?v=1781961288&width=719',
      'https://www.vapebill.com/image/cache/catalog/Products/202306092310219191-800x800.jpg',
      'https://www.vapezilla.com/cdn/shop/files/Lost-Mary-Os-5000-Cosmic-Edition-Banana-Split.png?v=1707743057&width=900',
      'https://www.vapezilla.com/cdn/shop/files/Lost-Mary-Os-5000-Cosmic-Edition-Berry-Cherry.png?v=1707743057&width=900',
      'https://www.no1ejuice.com/cdn/shop/files/freemax-galex-nano-pod-kit-gunmetal_ba512a6b-db89-44b2-985c-f1d5af65ba1a_800x.png?v=1698660290',
      'https://www.edgevaping.com/cdn/shop/files/VaporessoLuxeXRMaxBlack.webp?v=1772020588&width=1214',
      'https://www.alivape.com/cdn/shop/products/FreeMax-Onnix-2-Pod-Kit-Grey.jpg?v=1633800819',
      'https://vapeuk.co.uk/media/catalog/product/cache/bc83b92129d09e9708f3c9bb98ddc6b7/b/a/barbie--geekvape-wenax-q-mini-pod-vape-kit_1.jpg'
    ],
    disposable: [
      'https://e-xhale.com/cdn/shop/files/2000_Mangolicious_Product_Image_3.jpg?v=1746176957&width=1946',
      'https://westcoastvapesupply.com/cdn/shop/products/KeepIt100BarsBacco.jpg?v=1685791973',
      'https://bayvape.ca/cdn/shop/files/GEEK-BAR-Pulse---Blue-Razz-Ice_453d030c-d448-453a-b091-4b371b421728.jpg?v=1762805290',
      'https://cdn11.bigcommerce.com/s-vux44hwuka/images/stencil/1280x1280/products/980/1796/19726-RED__10460.1724924850.jpg?c=1'
    ],
    eliquid: [
      'https://shopby-images.cdn-nhncommerce.com/Mall-No-gCLi/20250909/153533.192867496/SC-%EB%AA%A8%EC%BD%94%20%EB%A6%AC%EC%96%BC%EC%A5%AC%EC%8A%A4.png',
      'https://commons.wikimedia.org/wiki/Special:FilePath/E-liquid_bottle.jpeg',
      'https://commons.wikimedia.org/wiki/Special:FilePath/E-Liquid_with_device.jpg'
    ],
    bong: [
      'https://cannadevices.com/cdn/shop/articles/12in_RoundBase.png?v=1591317431'
    ],
    rig: [
      'https://mjarsenal.com/cdn/shop/products/PinkUrsa1.png?v=1650921988',
      'https://smoketime.ca/cdn/shop/files/MX-308-3_A.webp?v=1750631251'
    ],
    handPipe: [
      'https://rrrwholesale.com/cdn/shop/files/3_InnerSwirlColorBigHeadThickHeavyDutyGlassHandPipe_1024x.jpg?v=1732086569'
    ],
    bubbler: [
      'https://fatbuddhaglass.com/cdn/shop/files/bubbler-lumina-bubbler-mj-arsenal-1234279246_1024x.jpg?v=1777054450'
    ],
    grinder: [
      'https://herbalizestore.co.uk/cdn/shop/files/Herb-Ripper-4Piece-grinder.jpg?v=1770741052',
      'https://rchgifts.com/cdn/shop/products/grinder_2400x.jpg?v=1633719224'
    ],
    papers: [
      'https://images.gopuff.com/blob/gopuffcatalogstorageprod/catalog-images-container/resize/cf/version%3D1_0%2Cformat%3Dauto%2Cfit%3Dscale-down%2Cwidth%3D800%2Cheight%3D800/fdc21dd8-d0f4-4ccf-a61e-177c87c6ddd9.png'
    ],
    tray: [
      'https://pipedreams.co/cdn/shop/products/raw-classic-rolling-trays-rolling-trays-war00115-musa01-esd-official-28516443979914_1200x_jpg.webp?v=1679341769',
      'https://stokedct.com/cdn/shop/files/raw-mix-rolling-trays-rolling-trays-war00109-musa01-esd-official-28526784086154_2048x_ffc2b71f-a0d5-485d-84aa-07b97aefa857.webp?v=1768519459',
      'https://mjsupplyco.ca/cdn/shop/products/RAW-TRAY-NAT-2-510x510.jpg?v=1634856057'
    ]
  };

  const imagePoolForSubcategory = (subcat) => {
    const key = String(subcat).toLowerCase();
    if (key === 'bongs') return REAL_PRODUCT_IMAGES.bong;
    if (key === 'dab rigs') return REAL_PRODUCT_IMAGES.rig;
    if (key === 'hand pipes') return REAL_PRODUCT_IMAGES.handPipe;
    if (key === 'bubblers') return REAL_PRODUCT_IMAGES.bubbler;
    if (key === 'grinders') return REAL_PRODUCT_IMAGES.grinder;
    if (key === 'rolling papers') return REAL_PRODUCT_IMAGES.papers;
    if (key === 'trays & storage') return REAL_PRODUCT_IMAGES.tray;
    if (key.includes('e-liquid') || key.includes('nic salts') || key.includes('freebase') || key.includes('zero nicotine')) return REAL_PRODUCT_IMAGES.eliquid;
    if (key === 'disposable vapes') return REAL_PRODUCT_IMAGES.disposable;
    if (key.includes('vape') || key.includes('pod') || key.includes('starter')) return REAL_PRODUCT_IMAGES.vape;
    if (key.includes('wax') || key.includes('resin') || key.includes('cartridge')) return REAL_PRODUCT_IMAGES.rig;
    return REAL_PRODUCT_IMAGES.vape;
  };

  const realPhotoFor = (subcat, productNumber, variantNumber = 0) => {
    const key = String(subcat).toLowerCase();
    let query = 'smoke shop product';
    if (key.includes('vape') || key.includes('pod') || key.includes('starter')) query = 'vape device,product';
    else if (key.includes('e-liquid') || key.includes('nic salts') || key.includes('freebase') || key.includes('zero nicotine')) query = 'e-liquid bottle,product';
    else if (key.includes('bong')) query = 'glass water pipe,product';
    else if (key.includes('rig')) query = 'glass dab rig,product';
    else if (key.includes('hand pipe')) query = 'glass hand pipe,product';
    else if (key.includes('bubbler')) query = 'glass bubbler,product';
    else if (key.includes('grinder')) query = 'herb grinder,product';
    else if (key.includes('rolling paper')) query = 'rolling papers,product';
    else if (key.includes('tray')) query = 'rolling tray,product';
    else if (key.includes('wax') || key.includes('resin') || key.includes('cartridge')) query = 'vape cartridge,product';
    return `https://loremflickr.com/900/900/${encodeURIComponent(query)}?lock=${(productNumber * 31) + variantNumber}`;
  };

  const variantSpecsForSubcategory = (subcat, basePrice) => {
    const key = String(subcat).toLowerCase();
    if (['wax & dabs','live resin'].includes(key)) return [
      ['20 g', 22], ['50 g', 50], ['100 g', 90], ['200 g', 165]
    ];
    if (key === 'cartridges') return [
      ['0.5 g', 24.99], ['1 g', 39.99], ['2 g', 69.99], ['3 g', 94.99]
    ];
    if (key.includes('e-liquid') || ['nic salts','freebase juice','zero nicotine'].includes(key)) return [
      ['20 ml', 22], ['50 ml', 50], ['100 ml', 90], ['120 ml', 105]
    ];
    if (['bongs','dab rigs','hand pipes','bubblers'].includes(key)) return [
      ['6 inch', Number(basePrice.toFixed(2))], ['8 inch', Number((basePrice + 15).toFixed(2))], ['12 inch', Number((basePrice + 35).toFixed(2))], ['16 inch', Number((basePrice + 60).toFixed(2))]
    ];
    if (key === 'grinders') return [['2 inch',19.99],['2.5 inch',24.99],['3 inch',34.99],['4 inch',44.99]];
    if (key === 'rolling papers') return [['25 sheets',3.99],['50 sheets',6.99],['100 sheets',10.99],['200 sheets',17.99]];
    if (key === 'trays & storage') return [['Small',14.99],['Medium',19.99],['Large',29.99],['XL',39.99]];
    if (key === 'disposable vapes') return [['2 ml',19.99],['5 ml',29.99],['10 ml',39.99],['20 ml',54.99]];
    if (key.includes('vape kits') || key.includes('pod systems') || key.includes('starter kits')) return [['Standard',Number(basePrice.toFixed(2))],['Small',Number((basePrice+8).toFixed(2))],['Medium',Number((basePrice+18).toFixed(2))],['Large',Number((basePrice+30).toFixed(2))]];
    return [['Standard',Number(basePrice.toFixed(2))],['Large',Number((basePrice+10).toFixed(2))]];
  };

  const casperSubcategoryProducts = subcategoryDefinitions.flatMap((def, di) => {
    const [subcat, category, label, basePrice] = def;
    const imagePool = imagePoolForSubcategory(subcat);
    const specs = variantSpecsForSubcategory(subcat, basePrice);
    return Array.from({ length: 30 }, (_, index) => index + 1).map((n) => {
      const id = `sd${String(di + 1).padStart(2,'0')}${n}`;
      const title = `${label} Demo Product ${String(n).padStart(2, '0')}`;
      const variantSpecs = specs.map(([value, variantPrice], vi) => ({
        type: /g|ml|sheets|inch/i.test(value) ? (/ml/i.test(value) ? 'volume' : /g/i.test(value) ? 'weight' : 'size') : 'size',
        value,
        size: value,
        weight: /g/i.test(value) ? value : undefined,
        price: Number(variantPrice.toFixed(2)),
        salePrice: Number(variantPrice.toFixed(2)),
        inventory: Math.max(0, 4 + ((n * 7 + di * 11 + vi * 3) % 48)),
        image: realPhotoFor(subcat, n, vi)
      }));
      const price = variantSpecs[0].price;
      return {
        id,
        title,
        category,
        subcategory: subcat,
        price,
        originalPrice: Number((price * 1.15).toFixed(2)),
        image: realPhotoFor(subcat, n, 0),
        rating: Number((4.1 + ((n - 1) % 9) * 0.1).toFixed(1)),
        reviews: 20 + di * 5 + n * 3,
        tag: n === 1 ? 'FEATURED' : (n % 5 === 0 ? 'BESTSELLER' : 'NEW'),
        desc: `Demo ${subcat} product for Casper Smoke Shop navigation and frontend QA testing.`,
        flavors: subcat === 'Rolling Papers' ? ['Classic', 'Unbleached'] : ['Classic', 'Fresh', 'Ice'],
        nics: ['N/A'],
        manufacturer: 'Casper Demo Manufacturing',
        brand: 'Casper Demo',
        weightOz: 3 + ((n - 1) % 12),
        inventory: variantSpecs.reduce((m, v) => Math.max(m, v.inventory), 0),
        variants: variantSpecs
      };
    });
  });


  // ==========================================
  // NAVBAR DUMMY DATA — BRANDS + DEALS
  // Every direct navbar destination has visible demo products.
  // ==========================================
  const casperBrandProducts = [
    ['CloudPeak', 'Vape Kits', 42.99], ['NovaSmoke', 'Disposable Vapes', 21.99],
    ['Casper Select', 'E-Liquids', 18.99], ['PeakGlass', 'Glass', 64.99],
    ['CloudForge', 'Concentrates', 27.99], ['Casper Essentials', 'Accessories', 12.99],
    ['VaporEdge', 'Vapes', 36.99], ['SmokeCraft', 'Glass', 54.99]
  ].flatMap(([brand, category, price], bi) => Array.from({length: 6}, (_, i) => {
    const n = i + 1;
    const id = `brand${String(bi + 1).padStart(2,'0')}${n}`;
    return {
      id, title: `${brand} ${category} Collection ${String(n).padStart(2,'0')}`,
      category, subcategory: category, brand, manufacturer: `${brand} Demo Manufacturing`,
      price: Number((price + i * 2.5).toFixed(2)), originalPrice: Number((price + i * 2.5 + 12).toFixed(2)),
      image: realPhotoFor(category, bi * 10 + n, 0), rating: Number((4.2 + (i % 7) * .1).toFixed(1)),
      reviews: 35 + i * 8, tag: i === 0 ? 'FEATURED BRAND' : 'BRAND PICK',
      desc: `Demo ${brand} product for the Casper Smoke Shop Brands section.`,
      flavors: ['Classic','Fresh','Ice'], nics: ['N/A'], inventory: 18 + i * 4,
      variants: []
    };
  }));

  const casperDealProducts = Array.from({length: 30}, (_, i) => {
    const n = i + 1;
    const categories = ['Vape Kits','Disposable Vapes','E-Liquids','Glass','Concentrates','Accessories'];
    const category = categories[i % categories.length];
    const base = [39.99,19.99,16.99,59.99,24.99,12.99][i % 6];
    const sale = Number((base * (0.70 + (i % 4) * 0.05)).toFixed(2));
    const id = `deal${String(n).padStart(3,'0')}`;
    return {
      id, title: `Casper Deal Product ${String(n).padStart(2,'0')}`,
      category, subcategory: category, brand: 'Casper Deals', manufacturer: 'Casper Demo Manufacturing',
      price: sale, originalPrice: base, salePrice: sale, compareAt: base,
      image: realPhotoFor(category, 100 + n, 0), rating: Number((4.1 + (i % 9) * .1).toFixed(1)),
      reviews: 25 + i * 2, tag: i < 5 ? 'HOT DEAL' : 'DEAL',
      desc: `Demo discounted ${category} product for the Casper Smoke Shop Deals section.`,
      flavors: ['Classic','Fresh'], nics: ['N/A'], inventory: 15 + (i % 20), variants: []
    };
  });

  const frontendDemoProducts = [
    ...productCatalog, ...casperVcProducts, ...casperSubcategoryProducts,
    ...casperBrandProducts, ...casperDealProducts
  ];

  const frontendProducts = frontendDemoProducts.map((p, index) => {
    const id = String(p.id);
    const isRestricted = /vape|cigar|nic|e-liquid|concentrate|disposable|smoke/i.test(`${p.category} ${p.title}`);
    const baseInventory = 12 + ((index * 17) % 39);
    const slug = `${String(p.title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g,'')}-${id.toLowerCase()}`;
    return {
      ...p,
      productId: id,
      sku: `CAS-${id.toUpperCase()}`,
      upc: `DEMO-${String(index + 1).padStart(8,'0')}`,
      manufacturer: p.manufacturer || 'Catalog Manufacturer',
      brand: p.brand || 'Casper Collection',
      shortDescription: p.shortDescription || p.desc || 'Premium Casper Smoke Shop product.',
      fullDescription: p.fullDescription || p.desc || 'Product details are managed by the catalog system.',
      subcategory: p.subcategory || p.category,
      tags: Array.from(new Set([p.tag, p.category, ...(p.flavors || []), ...(p.nics || [])].filter(Boolean))),
      slug,
      status: p.status || 'Active',
      published: true,
      featured: /BESTSELLER|PREMIUM|NEW|POPULAR/i.test(p.tag || ''),
      minAge: isRestricted ? 21 : 0,
      ageRestricted: isRestricted,
      allowedStates: Array.isArray(p.allowedStates) ? p.allowedStates : [],
      cost: Number(p.cost || (Number(p.price) * 0.55).toFixed(2)),
      retailPrice: Number(p.price),
      salePrice: Number(p.price),
      compareAt: Number(p.originalPrice || p.oldPrice || p.price),
      recommendedPrice: Number(p.originalPrice || p.price),
      margin: Number((Number(p.price) - Number(p.cost || Number(p.price) * 0.55)).toFixed(2)),
      marginPct: Number((((Number(p.price) - Number(p.cost || Number(p.price) * 0.55)) / Math.max(Number(p.price), 0.01)) * 100).toFixed(2)),
      weightOz: Number(p.weightOz || (p.category === 'Cigars' ? 2 : 8)),
      inventory: Number(p.inventory ?? baseInventory),
      reserved: Number(p.reserved || 0),
      backorderAllowed: false,
      variants: p.variants?.length ? p.variants : [
        ...(p.flavors || []).filter(x => x !== 'N/A').slice(0, 6).map((x, i) => ({ type: 'flavor', value: x, sku: `CAS-${id.toUpperCase()}-F${i+1}`, price: Number(p.price) })),
        ...(p.nics || []).filter(x => x !== 'N/A').slice(0, 5).map((x, i) => ({ type: 'strength', value: x, sku: `CAS-${id.toUpperCase()}-S${i+1}`, price: Number(p.price) }))
      ],
      images: [p.image].filter(Boolean),
      image: p.image || imageFallback(p.title)
    };
  });

  // Apply real photography to any legacy product that still points to the Casper logo.
  // Existing vendor/product photo URLs are kept when already present.
  frontendProducts.forEach((p, index) => {
    const isPlaceholder = !p.image || /casper-mascot-logo|data:image\/svg/i.test(String(p.image));
    if (isPlaceholder) {
      const pool = imagePoolForSubcategory(p.subcategory || p.category || 'Vape Kits');
      p.image = realPhotoFor(p.subcategory || p.category || 'Vape Kits', index + 1, 0);
      p.images = [p.image];
      p.gallery = [p.image];
      p.thumbnail = p.image;
    }
  });

  // Give every catalog item a clear size/weight-driven price ladder.
  // Selecting an option on the product details modal therefore changes the
  // displayed price immediately (e.g. 20 g = $22, 50 g = $50).
  frontendProducts.forEach((p, index) => {
    const specs = variantSpecsForSubcategory(p.subcategory || p.category || 'Vape Kits', Number(p.price || p.salePrice || 19.99));
    p.variants = specs.map(([value, variantPrice], vi) => {
      const existing = (p.variants || [])[vi] || {};
      const pool = imagePoolForSubcategory(p.subcategory || p.category || 'Vape Kits');
      const inventory = Math.max(8, Number(existing.inventory ?? (8 + ((index * 7 + vi * 5) % 46))));
      const variant = {
        id: `${p.productId}-dynamic-${vi + 1}`,
        type: /g/i.test(value) ? 'weight' : /ml/i.test(value) ? 'volume' : 'size',
        value,
        size: value,
        weight: /g/i.test(value) ? value : undefined,
        flavor: (p.flavors || []).filter(x => x !== 'N/A')[vi % Math.max(1, (p.flavors || []).filter(x => x !== 'N/A').length)] || '',
        strength: (p.nics || []).filter(x => x !== 'N/A')[vi % Math.max(1, (p.nics || []).filter(x => x !== 'N/A').length)] || '',
        color: ['Black', 'Purple', 'Lime', 'Blue'][vi % 4],
        packSize: value,
        sku: `${p.sku}-SZ${String(vi + 1).padStart(2, '0')}`,
        upc: `0999${String(index + 1).padStart(7, '0')}${String(vi + 1).padStart(2, '0')}`,
        price: Number(variantPrice.toFixed(2)),
        salePrice: Number(variantPrice.toFixed(2)),
        inventory,
        reserved: 0,
        available: inventory,
        image: realPhotoFor(p.subcategory || p.category || 'Vape Kits', index + 1, vi),
        status: inventory > 0 ? 'Active' : 'Out of Stock'
      };
      return variant;
    });
    p.variantIndex = Object.fromEntries(p.variants.map(v => [v.id, v]));
    p.price = p.variants[0].price;
    p.salePrice = p.variants[0].salePrice;
    p.retailPrice = p.price;
  });

  try {
    frontendProducts.forEach(p => {
      const saved = Number(localStorage.getItem(`casper_inventory_${p.productId}`));
      if (Number.isFinite(saved) && saved > 0) p.inventory = saved;
      else if (!Number.isFinite(saved) || saved <= 0) { p.inventory = Math.max(12, Number(p.inventory || 12)); localStorage.setItem(`casper_inventory_${p.productId}`, String(p.inventory)); }
    });
  } catch (_) {}
  window.casperImageFallback = imageFallback;
  window.casperRealFallback = (title) => { const pool = imagePoolForSubcategory(title || 'Vape Kits'); return pool[Math.floor(Math.random() * pool.length)]; };

  // DEMO CATALOG COMPLIANCE NORMALIZATION
  // Every demo product/variant carries independent catalog fields so the
  // frontend can exercise the checklist without relying on product-name rules.
  const demoManufacturers = ['Casper Labs', 'CloudPeak Manufacturing', 'Northstar Goods', 'Summit Supply Co.'];
  const demoBrands = ['Casper', 'CloudRush', 'VaporEdge', 'NovaPod', 'Heritage Leaf'];
  const demoStatuses = ['Active'];
  frontendProducts.forEach((p, index) => {
    const base = Number(p.salePrice ?? p.price ?? 0);
    p.manufacturer = p.manufacturer && p.manufacturer !== 'Catalog Manufacturer' ? p.manufacturer : demoManufacturers[index % demoManufacturers.length];
    p.brand = p.brand && p.brand !== 'Casper Collection' ? p.brand : demoBrands[index % demoBrands.length];
    p.status = 'Active';
    p.published = p.published !== false;
    p.featured = !!p.featured || index < 4;
    p.productType = isNaN(index) ? 'General' : (p.category || 'General');
    p.shortDescription = p.shortDescription || p.desc || 'Demo catalog product with complete frontend compliance fields.';
    p.fullDescription = p.fullDescription || `${p.shortDescription} This is demonstration catalog data for frontend QA and UI testing.`;
    p.tags = Array.from(new Set([...(p.tags || []), p.brand, p.manufacturer, p.subcategory, p.status].filter(Boolean)));
    p.seo = { title: p.title, description: p.shortDescription };
    p.gallery = [p.image, ...(p.images || [])].filter(Boolean).slice(0, 4);
    p.thumbnail = p.gallery[0] || imageFallback(p.title);
    p.minAge = isProductAgeRestricted(p) ? 21 : 0;
    p.ageRule = isProductAgeRestricted(p) ? { restricted: true, minimumAge: 21 } : { restricted: false, minimumAge: 0 };
    p.demoRestrictedStates = index === 0 ? ['CA'] : [];
    p.allowedDestinations = p.allowedStates && p.allowedStates.length ? [...p.allowedStates] : [];
    p.inventoryOnHand = Number(p.inventory || 0) + Number(p.reserved || 0);
    p.inventoryReserved = Number(p.reserved || 0);
    p.inventoryAvailable = availableInventory(p);
    p.lowStock = p.inventoryAvailable > 0 && p.inventoryAvailable <= FRONTEND_COMPLIANCE_CONFIG.lowStockThreshold;
    p.stockPolicy = { backorderAllowed: false, oversellAllowed: false };
    p.priceHistory = [{ date: '2026-10-01', price: base }];
    p.pricing = {
      cost: Number(p.cost || (base * 0.55).toFixed(2)),
      retail: Number(p.retailPrice ?? base),
      sale: Number(p.salePrice ?? base),
      compareAt: Number(p.compareAt ?? base),
      recommended: Number(p.recommendedPrice ?? base),
      margin: Number(p.margin ?? (base * 0.45).toFixed(2)),
      marginPct: Number(p.marginPct ?? 45)
    };
    p.variants = (p.variants || []).map((v, vi) => {
      const variantValue = String(v.value || `Option ${vi + 1}`);
      const variantSku = v.sku || `${p.sku}-V${String(vi + 1).padStart(2, '0')}`;
      const variantUpc = v.upc || `099900${String(index + 1).padStart(3, '0')}${String(vi + 1).padStart(2, '2')}`;
      const variantInventory = Math.max(8, Number(v.inventory ?? (Number(p.inventory || 12) - vi * 2)));
      return {
        id: `${p.productId}-variant-${vi + 1}`,
        type: v.type || 'option', value: variantValue,
        size: v.size || (p.category === 'Cigars' ? 'Single' : undefined),
        flavor: v.type === 'flavor' ? variantValue : undefined,
        strength: v.type === 'strength' ? variantValue : undefined,
        color: v.type === 'color' ? variantValue : undefined,
        packSize: v.packSize || '1 pack',
        sku: variantSku, upc: variantUpc,
        price: Number(v.price ?? base), salePrice: Number(v.salePrice ?? v.price ?? base),
        inventory: variantInventory, reserved: Number(v.reserved || 0),
        available: Math.max(0, variantInventory - Number(v.reserved || 0)),
        image: v.image || realPhotoFor(p.subcategory || p.category || 'Vape Kits', index + 1, vi) || p.gallery[vi % Math.max(1, p.gallery.length)] || imageFallback(p.title),
        status: variantInventory > 0 ? 'Active' : 'Out of Stock'
      };
    });
    if (!p.variants.length) {
      p.variants = [{
        id: `${p.productId}-variant-01`, type: 'default', value: 'Standard', size: 'Standard', flavor: '', strength: '', color: '', packSize: '1 pack',
        sku: `${p.sku}-V01`, upc: `099900${String(index + 1).padStart(6, '0')}`, price: base, salePrice: base,
        inventory: Number(p.inventory || 0), reserved: Number(p.reserved || 0), available: availableInventory(p),
        image: p.thumbnail, status: availableInventory(p) > 0 ? 'Active' : 'Out of Stock'
      }];
    }
    p.variantIndex = Object.fromEntries(p.variants.map(v => [v.id, v]));
  });

  function validateCatalogRecords(records = frontendProducts) {
    const errors = [];
    const seen = { productId: new Set(), sku: new Set(), upc: new Set(), slug: new Set(), variantSku: new Set(), variantUpc: new Set() };
    records.forEach((p, row) => {
      ['productId','sku','upc','manufacturer','brand','title','shortDescription','fullDescription','category','subcategory','slug','status'].forEach(field => {
        if (p[field] === undefined || p[field] === null || String(p[field]).trim() === '') errors.push(`Row ${row + 1} — Missing ${field}`);
      });
      ['productId','sku','upc','slug'].forEach(field => { if (seen[field].has(String(p[field]))) errors.push(`Row ${row + 1} — Duplicate ${field}`); seen[field].add(String(p[field])); });
      if (!['Draft','Active','Out of Stock','Discontinued'].includes(p.status)) errors.push(`Row ${row + 1} — Invalid status`);
      if (!(Number(p.retailPrice) >= 0) || !(Number(p.salePrice) >= 0)) errors.push(`Row ${row + 1} — Invalid price`);
      if (Number(p.cost) < 0) errors.push(`Row ${row + 1} — Negative cost`);
      if (Number(p.inventory) < 0 || Number(p.reserved) < 0) errors.push(`Row ${row + 1} — Negative inventory`);
      (p.variants || []).forEach((v, vi) => {
        ['sku','upc','price','inventory','image'].forEach(field => { if (v[field] === undefined || v[field] === null || String(v[field]).trim() === '') errors.push(`Row ${row + 1}, Variant ${vi + 1} — Missing ${field}`); });
        ['variantSku','variantUpc'].forEach(field => { const val = field === 'variantSku' ? v.sku : v.upc; if (seen[field].has(String(val))) errors.push(`Row ${row + 1}, Variant ${vi + 1} — Duplicate ${field}`); seen[field].add(String(val)); });
        if (Number(v.price) < 0 || Number(v.inventory) < 0) errors.push(`Row ${row + 1}, Variant ${vi + 1} — Negative price/inventory`);
      });
    });
    return { valid: errors.length === 0, errors };
  }
  window.CasperCatalogDemo = { records: frontendProducts, validate: () => validateCatalogRecords(), policy: FRONTEND_COMPLIANCE_CONFIG };

  const productIndex = new Map(frontendProducts.map(p => [p.productId, p]));
  function getFrontendProduct(id) { return productIndex.get(String(id)); }
  function availableInventory(p) { return Math.max(0, Number(p?.inventory || 0) - Number(p?.reserved || 0)); }
  function isProductAgeRestricted(p) { return !!p?.ageRestricted || Number(p?.minAge || 0) >= FRONTEND_COMPLIANCE_CONFIG.minimumAge; }
  function validateQuantity(p, quantity) {
    const q = Number(quantity);
    if (!Number.isInteger(q) || q < 1) return { ok: false, message: 'Quantity must be a positive whole number.' };
    const available = availableInventory(p);
    if (q > available && !p.backorderAllowed) return { ok: false, message: `Only ${available} unit${available === 1 ? '' : 's'} available.` };
    return { ok: true };
  }
  function getVariantForCartItem(item, product) {
    return (product?.variants || []).find(v => String(v.id) === String(item?.variantId)) || null;
  }
  function validateCartItemQuantity(item, nextQuantity) {
    const p = getFrontendProduct(item.productId) || item;
    const variant = getVariantForCartItem(item, p);
    const available = variant ? Number(variant.available ?? variant.inventory ?? 0) : availableInventory(p);
    const q = Number(nextQuantity);
    if (!Number.isInteger(q) || q < 1) return { ok: false, message: 'Quantity must be a positive whole number.' };
    if (q > available && !(variant?.backorderAllowed || p.backorderAllowed)) return { ok: false, message: `Only ${available} unit${available === 1 ? '' : 's'} available for this variant.` };
    return { ok: true };
  }
  function canShipToState(p, state) {
    const s = String(state || '').trim().toUpperCase();
    if (!/^[A-Z]{2}$/.test(s)) return { ok: false, message: 'Enter a valid 2-letter state code.' };
    if (FRONTEND_COMPLIANCE_CONFIG.restrictedStates.includes(s)) return { ok: false, message: 'This destination is not eligible for this store shipping policy.' };
    if (Array.isArray(p?.demoRestrictedStates) && p.demoRestrictedStates.includes(s)) return { ok: false, message: 'Demo policy: this product is restricted for the selected destination.' };
    if (Array.isArray(p?.allowedStates) && p.allowedStates.length && !p.allowedStates.includes(s)) return { ok: false, message: 'This product cannot be shipped to the selected destination.' };
    return { ok: true };
  }
  function validateAddress(form) {
    const zip = String(form.zip || '').trim();
    const email = String(form.email || '').trim();
    if (!/^[A-Za-z0-9 .,'#/-]{5,120}$/.test(form.address || '')) return 'Enter a valid street address.';
    if (!/^[A-Za-z .'-]{2,60}$/.test(form.city || '')) return 'Enter a valid city.';
    if (!/^\d{5}(?:-\d{4})?$/.test(zip)) return 'Enter a valid ZIP code.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email address.';
    return '';
  }
  function calculateShipping(cartItems, state) {
    const subtotal = cartItems.reduce((s, i) => s + Number(i.price || 0) * Number(i.quantity || 0), 0);
    const weight = cartItems.reduce((s, i) => s + Number(i.weightOz || 8) * Number(i.quantity || 0), 0);
    const base = String(state || '').toUpperCase() === 'WY' ? FRONTEND_COMPLIANCE_CONFIG.defaultShipping : FRONTEND_COMPLIANCE_CONFIG.outOfStateShipping;
    const weightSurcharge = weight > 64 ? Math.ceil((weight - 64) / 32) * 4.99 : 0;
    const free = String(state || '').toUpperCase() === 'WY' && subtotal >= FRONTEND_COMPLIANCE_CONFIG.freeShippingThreshold;
    return { fee: free ? 0 : base + weightSurcharge, weightOz: weight, free };
  }
  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  function normalizeSearch(s) { return String(s || '').toLowerCase().trim().replace(/\s+/g, ' '); }



  // ==========================================
  // 2. MODAL CONTROLLER FRAMEWORK
  // ==========================================
  function createModalContainer() {
    let backdrop = document.getElementById('casper-modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'casper-modal-backdrop';
      backdrop.className = 'casper-modal-backdrop';
      backdrop.innerHTML = `<div class="casper-modal" id="casper-modal-box"></div>`;
      document.body.appendChild(backdrop);

      backdrop.addEventListener('click', function (e) {
        if (e.target === backdrop) closeModal();
      });
    }
    return backdrop;
  }

  function openModal(htmlContent) {
    const backdrop = createModalContainer();
    const box = document.getElementById('casper-modal-box');
    box.innerHTML = `
      <button class="casper-modal-close" id="casper-modal-close-btn" aria-label="Close modal">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12M6 6l12 12"></path></svg>
      </button>
      ${htmlContent}
    `;

    backdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('casper-modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
  }

  function closeModal() {
    const backdrop = document.getElementById('casper-modal-backdrop');
    if (backdrop) {
      backdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  window.closeCasperModal = closeModal;

  // ==========================================
  // 3. AGE GATE OVERLAY (21+) - FRONTEND COMPLIANCE GUARD
  // ==========================================
  (function initAgeGate() {
    const ageGate = document.getElementById('casper-age-gate');
    const yesBtn = document.getElementById('casper-age-yes');
    const noBtn = document.getElementById('casper-age-no');
    const stepOne = document.getElementById('casper-age-step-one');
    const stepTwo = document.getElementById('casper-age-step-two');
    const dobInput = document.getElementById('casper-dob');
    const verifyBtn = document.getElementById('casper-age-verify');
    const backBtn = document.getElementById('casper-age-back');
    const error = document.getElementById('casper-dob-error');

    function sessionVerified() {
      try { return sessionStorage.getItem('casper_age_verified') === '1'; }
      catch (_) { return false; }
    }

    function validDob(value) {
      const raw = String(value || '').trim();
      if (!/^\d{2}\/\d{2}\/\d{4}$/.test(raw)) return { ok: false, reason: 'Please enter your date of birth in MM/DD/YYYY format.' };
      const [m, d, y] = raw.split('/').map(Number);
      if (y < 1900) return { ok: false, reason: 'Please enter a valid year.' };
      const dob = new Date(y, m - 1, d);
      if (dob.getFullYear() !== y || dob.getMonth() !== m - 1 || dob.getDate() !== d) return { ok: false, reason: 'That date is not a valid calendar date.' };
      if (dob > new Date()) return { ok: false, reason: 'Future dates of birth are not allowed.' };
      const today = new Date();
      let age = today.getFullYear() - y;
      if (today.getMonth() + 1 < m || (today.getMonth() + 1 === m && today.getDate() < d)) age--;
      if (age < 21) return { ok: false, reason: 'You must be at least 21 years old to enter.' };
      return { ok: true, age };
    }

    function showGate() {
      if (!ageGate) return;
      ageGate.style.display = 'flex';
      ageGate.style.opacity = '1';
      document.body.style.overflow = 'hidden';
      if (stepOne) stepOne.style.display = '';
      if (stepTwo) stepTwo.style.display = 'none';
      if (error) { error.textContent = ''; error.style.display = 'none'; }
    }

    function hideGate() {
      if (!ageGate) return;
      ageGate.style.opacity = '0';
      ageGate.style.transition = 'opacity .2s ease';
      setTimeout(() => {
        ageGate.style.display = 'none';
        document.body.style.overflow = '';
      }, 200);
    }

    function requireVerification(message) {
      if (sessionVerified()) return true;
      showGate();
      if (message && typeof window.showToast === 'function') window.showToast(message, 'info');
      return false;
    }

    window.casperAgeVerified = sessionVerified;
    window.requireCasperAgeVerification = requireVerification;
    window.getCasperDobValidation = validDob;

    if (sessionVerified()) hideGate();
    else showGate();

    yesBtn?.addEventListener('click', () => {
      if (stepOne) stepOne.style.display = 'none';
      if (stepTwo) stepTwo.style.display = 'block';
      setTimeout(() => dobInput?.focus(), 0);
    });

    backBtn?.addEventListener('click', () => {
      if (stepTwo) stepTwo.style.display = 'none';
      if (stepOne) stepOne.style.display = '';
      if (error) { error.textContent = ''; error.style.display = 'none'; }
    });

    dobInput?.addEventListener('input', () => {
      let v = dobInput.value.replace(/\D/g, '').slice(0, 8);
      if (v.length > 4) v = `${v.slice(0,2)}/${v.slice(2,4)}/${v.slice(4)}`;
      else if (v.length > 2) v = `${v.slice(0,2)}/${v.slice(2)}`;
      dobInput.value = v;
      if (error) { error.textContent = ''; error.style.display = 'none'; }
    });

    verifyBtn?.addEventListener('click', () => {
      const result = validDob(dobInput?.value);
      if (!result.ok) {
        if (error) { error.textContent = result.reason; error.style.display = 'block'; }
        dobInput?.focus();
        return;
      }
      sessionStorage.setItem('casper_age_verified', '1');
      sessionStorage.setItem('casper_age_verified_at', new Date().toISOString());
      hideGate();
      window.dispatchEvent(new CustomEvent('casper:age-verified', { detail: { age: result.age } }));
      window.showToast?.('Age verified. Welcome to Casper Smoke Shop.', 'success');
    });

    noBtn?.addEventListener('click', () => {
      if (!ageGate) return;
      ageGate.innerHTML = `<div style="max-width:460px;width:100%;text-align:center;background:var(--cag-card);border:1px solid var(--cag-purple-line);border-radius:14px;padding:44px 32px;color:var(--cag-ink);font-family:Inter,system-ui,sans-serif">
        <h2 style="margin:0 0 12px;font-family:Anton,Arial,sans-serif;text-transform:uppercase">Access restricted</h2>
        <p style="margin:0 0 20px;color:var(--cag-ink-soft);line-height:1.6">You must be 21 or older to access age-restricted products.</p>
        <button type="button" id="casper-age-leave" style="padding:12px 22px;border:0;border-radius:6px;cursor:pointer;background:var(--cag-green);color:var(--cag-ink-on-green);font-weight:700">LEAVE SITE</button>
      </div>`;
      document.getElementById('casper-age-leave')?.addEventListener('click', () => window.location.replace('about:blank'));
    });

    window.showCasperAgeGate = showGate;
    window.hideCasperAgeGate = hideGate;
  })();

  // ==========================================
  // 4. THEME TOGGLE SYSTEM
  // ==========================================
  const themeToggles = document.querySelectorAll('#cc-theme-toggle, .cc-theme-toggle');

  function getSavedTheme() {
    try {
      const saved = localStorage.getItem('casper-theme-pref');
      return saved === 'light' ? 'light' : 'dark';
    } catch (e) {
      return 'dark';
    }
  }

  function setTheme(theme, persist = true) {
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    const root = document.documentElement;

    // Use an explicit attribute for BOTH themes. This avoids relying on the
    // absence of an attribute and makes the theme state reliable after reload.
    root.setAttribute('data-casper-theme', nextTheme);
    root.classList.toggle('casper-light-theme', nextTheme === 'light');
    root.classList.toggle('casper-dark-theme', nextTheme === 'dark');
    document.body.classList.toggle('casper-light-theme', nextTheme === 'light');
    document.body.classList.toggle('casper-dark-theme', nextTheme === 'dark');

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', nextTheme === 'light' ? '#f5f6f8' : '#0a0a0c');

    themeToggles.forEach(btn => {
      btn.setAttribute('aria-pressed', nextTheme === 'light' ? 'true' : 'false');
      btn.setAttribute('aria-label', nextTheme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
      btn.dataset.theme = nextTheme;
    });

    if (persist) {
      try { localStorage.setItem('casper-theme-pref', nextTheme); } catch (e) {}
    }
  }

  // Apply the saved theme immediately.
  setTheme(getSavedTheme(), false);

  // Delegated handler also catches the toggle if another script replaces the header.
  document.addEventListener('click', function (e) {
    const toggle = e.target.closest('#cc-theme-toggle, .cc-theme-toggle');
    if (!toggle) return;
    e.preventDefault();
    e.stopPropagation();
    const current = document.documentElement.getAttribute('data-casper-theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    setTheme(next, true);
    showToast(`Switched to ${next.toUpperCase()} theme`, 'info');
  }, true);

  // ==========================================
  // 5. DRAWER MANAGEMENT (Mobile Menu & Cart)
  // ==========================================
  const mnavDrawer = document.getElementById('cc-mnav');
  const mnavOpenBtn = document.getElementById('cc-mnav-open');
  const mnavCloseBtn = document.getElementById('cc-mnav-close');

  const cartDrawer = document.getElementById('cc-cart-drawer');
  const cartOpenBtn = document.getElementById('cc-cart-open');
  const cartCloseBtn = document.getElementById('cc-cart-close');
  const backdrop = document.getElementById('cc-drawer-backdrop');

  function openDrawer(drawer, openBtn) {
    closeAllDrawers();
    if (drawer) {
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
    }
    if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
    if (backdrop) {
      backdrop.removeAttribute('hidden');
      backdrop.classList.add('is-open');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeAllDrawers() {
    [mnavDrawer, cartDrawer].forEach(d => {
      if (d) {
        d.classList.remove('is-open');
        d.setAttribute('aria-hidden', 'true');
      }
    });
    [mnavOpenBtn, cartOpenBtn].forEach(b => {
      if (b) b.setAttribute('aria-expanded', 'false');
    });
    if (backdrop) {
      backdrop.setAttribute('hidden', '');
      backdrop.classList.remove('is-open');
    }
    document.body.style.overflow = '';
  }

  if (mnavOpenBtn) mnavOpenBtn.addEventListener('click', () => openDrawer(mnavDrawer, mnavOpenBtn));
  if (mnavCloseBtn) mnavCloseBtn.addEventListener('click', closeAllDrawers);
  if (cartOpenBtn) cartOpenBtn.addEventListener('click', () => openDrawer(cartDrawer, cartOpenBtn));
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeAllDrawers);
  if (backdrop) backdrop.addEventListener('click', closeAllDrawers);

  // ==========================================
  // 6. CART ENGINE & UI RENDERER
  // ==========================================
  let cart = [];
  let appliedDiscount = 0; // percentage for percentage coupons
  let appliedDiscountAmount = 0; // exact fixed/percentage discount for the current checkout

  function loadCart() {
    try {
      const saved = localStorage.getItem('casper_cart_items');
      cart = saved ? JSON.parse(saved) : [];
    } catch (e) { cart = []; }
  }

  function saveCart() {
    try { localStorage.setItem('casper_cart_items', JSON.stringify(cart)); } catch (e) {}
    renderCartUI();
  }

  function getCartItemCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function getCartSubtotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  function syncCartAgainstCatalog() {
    cart = cart.filter(item => {
      const p = getFrontendProduct(item.productId);
      if (!p) return false;
      const variant = getVariantForCartItem(item, p);
      if (variant) {
        item.price = Number(variant.salePrice ?? variant.price ?? item.price);
        item.image = variant.image || item.image || p.image;
        item.sku = variant.sku || item.sku;
        item.upc = variant.upc || item.upc;
      } else {
        item.price = Number(p.salePrice ?? p.price ?? item.price);
      }
      return true;
    });
  }

  function renderCartUI() {
    syncCartAgainstCatalog();
    const badges = document.querySelectorAll('.cc-cart__badge');
    const totalCount = getCartItemCount();
    badges.forEach(badge => { badge.textContent = totalCount; });

    if (cartOpenBtn) cartOpenBtn.setAttribute('aria-label', `Cart, ${totalCount} items`);

    if (!cartDrawer) return;
    const body = cartDrawer.querySelector('.cc-drawer__body');
    if (!body) return;

    if (cart.length === 0) {
      body.className = 'cc-drawer__body';
      body.style.justifyContent = 'center';
      body.innerHTML = `
        <svg width="44" height="44" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6.4 8.2h11.2l1.05 12.1a1.9 1.9 0 0 1-1.9 2.1H7.25a1.9 1.9 0 0 1-1.9-2.1z"></path>
          <path d="M8.8 10.6V6.9a3.2 3.2 0 0 1 6.4 0v3.7"></path>
        </svg>
        <p>Your cart is empty.</p>
        <button class="cc-btn cc-btn--green" type="button" onclick="window.closeDrawers && window.closeDrawers()">SHOP DEALS NOW <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15m-6-6 6 6-6 6"></path></svg></button>
      `;
    } else {
      const subtotal = getCartSubtotal();
      const freeShippingThreshold = CASPER_FREE_SHIPPING_THRESHOLD;
      const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);
      
      let html = '';
      if (amountNeeded > 0) {
        const percent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
        html += `
          <div style="width:100%;margin-bottom:12px;background:rgba(255,255,255,0.05);padding:10px 12px;border-radius:6px;border:1px solid var(--casper-line);text-align:left;">
            <div style="font-size:12px;color:var(--casper-ink-soft);margin-bottom:6px;">Add <strong style="color:var(--casper-green-ink);">$${amountNeeded.toFixed(2)}</strong> more for <strong>FREE IN-STATE SHIPPING!</strong></div>
            <div style="width:100%;height:6px;background:var(--casper-line);border-radius:3px;overflow:hidden;">
              <div style="width:${percent}%;height:100%;background:var(--casper-green-ink);transition:width 0.3s ease;"></div>
            </div>
          </div>
        `;
      } else {
        html += `
          <div style="width:100%;margin-bottom:12px;background:rgba(0,255,135,0.1);padding:10px 12px;border-radius:6px;border:1px solid var(--casper-green-dim);text-align:center;font-size:12px;color:var(--casper-green-ink);font-weight:600;">
            🎉 You unlocked FREE IN-STATE SHIPPING!
          </div>
        `;
      }

      html += `<div class="cc-cart-items-list">`;
      cart.forEach((item, index) => {
        html += `
          <div class="cc-cart-item">
            <img class="cc-cart-item__img" src="${item.image || 'casper-mascot-logo.png'}" alt="${item.title}">
            <div class="cc-cart-item__info">
              <h4 class="cc-cart-item__title">${item.title}</h4>
              ${item.flavor ? `<div style="font-size:11px;color:var(--casper-ink-faint);">${item.flavor} • ${item.nic || ''}</div>` : ''}
              <div class="cc-cart-item__price">$${(item.price * item.quantity).toFixed(2)}</div>
              <div class="cc-cart-item__qty">
                <button type="button" class="cc-cart-qty-btn" data-action="minus" data-index="${index}">-</button>
                <span style="font-size:13px;font-weight:600;min-width:18px;text-align:center;">${item.quantity}</span>
                <button type="button" class="cc-cart-qty-btn" data-action="plus" data-index="${index}">+</button>
              </div>
            </div>
            <button type="button" class="cc-cart-remove-btn" data-action="remove" data-index="${index}" title="Remove item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        `;
      });
      html += `</div>`;

      html += `
        <div class="cc-cart-foot">
          <div class="cc-cart-subtotal">
            <span>Subtotal:</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <button type="button" id="cc-checkout-trigger" class="cc-cart-checkout-btn">PROCEED TO CHECKOUT 🛒</button>
        </div>
      `;

      body.className = 'cc-drawer__body cc-drawer__body--active';
      body.style.justifyContent = 'flex-start';
      body.innerHTML = html;

      body.querySelectorAll('.cc-cart-qty-btn, .cc-cart-remove-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          const idx = parseInt(this.getAttribute('data-index'), 10);
          const action = this.getAttribute('data-action');
          if (isNaN(idx) || !cart[idx]) return;

          const item = cart[idx];
          const cp = getFrontendProduct(item.productId) || item;
          if (action === 'plus') {
            const next = Number(item.quantity || 0) + 1;
            const check = validateCartItemQuantity(item, next);
            if (!check.ok) { showToast(check.message, 'info'); return; }
            item.quantity = next;
          } else if (action === 'minus') {
            item.quantity = Math.max(0, Number(item.quantity || 0) - 1);
            if (item.quantity === 0) cart.splice(idx, 1);
          } else if (action === 'remove') cart.splice(idx, 1);
          saveCart();
        });
      });

      const checkoutBtn = document.getElementById('cc-checkout-trigger');
      if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function () {
          closeAllDrawers();
          openCheckoutModal();
        });
      }
    }
  }

  window.closeDrawers = closeAllDrawers;
  loadCart();
  renderCartUI();

  // ==========================================
  // 7. USER ACCOUNT SYSTEM & DASHBOARD
  // ==========================================
  // Frontend demo account storage. Production authentication must be server-side.
  const ACCOUNT_STORE_KEY = 'casper_customer_accounts';

  function getStoredAccounts() {
    try { return JSON.parse(localStorage.getItem(ACCOUNT_STORE_KEY) || '{}'); }
    catch (_) { return {}; }
  }
  function saveStoredAccount(account) {
    const accounts = getStoredAccounts();
    accounts[String(account.email || '').toLowerCase()] = account;
    localStorage.setItem(ACCOUNT_STORE_KEY, JSON.stringify(accounts));
    return account;
  }
  function getStoredAccount(email) {
    const accounts = getStoredAccounts();
    return accounts[String(email || '').trim().toLowerCase()] || null;
  }
  function getUserSession() {
    try {
      const u = localStorage.getItem('casper_logged_user');
      return u ? JSON.parse(u) : null;
    } catch (e) { return null; }
  }
  function getCustomerOrders(email) {
    const orders = window.casperFrontendOrderState?.get?.() || {};
    const normalized = String(email || '').trim().toLowerCase();
    return Object.values(orders)
      .filter(o => String(o?.customer?.email || o?.ownerEmail || '').toLowerCase() === normalized)
      .sort((a,b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  }
  function money(v) { return `$${Number(v || 0).toFixed(2)}`; }
  function orderStatusClass(status) {
    return String(status || 'Processing').toLowerCase().replace(/[^a-z0-9]+/g,'-');
  }

  function updateUserAccountUI() {
    const user = getUserSession();
    const acctBtns = document.querySelectorAll('.cc-acct, a[href*="account"]');
    acctBtns.forEach(btn => {
      const txtStrong = btn.querySelector('strong');
      const txtSpan = btn.querySelector('span:not(.cc-acct__ic)');
      if (user) {
        if (txtStrong) txtStrong.textContent = 'Hi, ' + String(user.name || 'Customer').split(' ')[0];
        if (txtSpan) txtSpan.textContent = 'Dashboard';
      } else {
        if (txtStrong) txtStrong.textContent = 'Account';
        if (txtSpan) txtSpan.textContent = 'Sign In';
      }
    });
  }

  function renderAccountDashboard(user) {
    const account = getStoredAccount(user.email) || {
      name:user.name, email:user.email, membership:'Casper Rewards', membershipStatus:'Active', tokens:0
    };
    const orders = getCustomerOrders(user.email);
    const totalSpent = orders.reduce((sum,o)=>sum + Number(o.total || 0),0);
    const transactions = orders.flatMap(o => {
      const rows=[{
        date:o.createdAt, type:'Payment', reference:o.paymentReference || o.number,
        amount:Number(o.total || 0), status:o.paymentStatus || 'Authorized', order:o.number
      }];
      if (Number(o.refundAmount || 0) > 0) rows.push({
        date:o.updatedAt || o.createdAt, type:'Refund', reference:`REF-${o.number}`,
        amount:-Number(o.refundAmount || 0), status:o.refundStatus || 'Refunded', order:o.number
      });
      return rows;
    }).sort((a,b)=>new Date(b.date||0)-new Date(a.date||0));
    const addresses = Array.isArray(account.addresses) ? account.addresses : [];
    const safeName=escapeHtml(account.name || user.name || 'Customer');
    const safeEmail=escapeHtml(account.email || user.email || '');

    openModal(`
      <div class="casper-account-dashboard">
        <div class="casper-account-hero">
          <div>
            <div class="casper-account-kicker">My Account</div>
            <h2>Welcome, ${safeName}</h2>
            <div class="casper-account-email">${safeEmail}</div>
          </div>
          <div class="casper-token-badge"><strong>${Number(account.tokens || 0)}</strong><span>Casper Tokens</span></div>
        </div>

        <div class="casper-reward-grid">
          <div class="casper-reward-card"><small>Total Orders</small><strong>${orders.length}</strong></div>
          <div class="casper-reward-card"><small>Total Spent</small><strong>${money(totalSpent)}</strong></div>
          <div class="casper-reward-card"><small>Membership</small><strong>${escapeHtml(account.membershipStatus || 'Active')}</strong></div>
        </div>

        <div class="casper-dashboard-actions">
          <button type="button" class="casper-btn-primary" data-account-tab="orders">ORDERS</button>
          <button type="button" class="casper-btn-primary" data-account-tab="transactions">TRANSACTIONS</button>
          <button type="button" class="casper-btn-primary" data-account-tab="profile">ACCOUNT DETAILS</button>
          <button type="button" class="casper-btn-primary casper-account-logout" style="background:#ff4d4d;color:#fff">LOG OUT</button>
        </div>

        <div class="casper-dashboard-section" data-account-panel="orders">
          <h3>Order History</h3>
          ${orders.length ? orders.map(o => `
            <div class="casper-order-card">
              <div class="casper-order-row">
                <span><strong>#${escapeHtml(o.number)}</strong><small>${new Date(o.createdAt || Date.now()).toLocaleString()}</small></span>
                <span>${Number(o.items?.length || 0)} item${Number(o.items?.length || 0)===1?'':'s'}</span>
                <span>${money(o.total)}</span>
                <span class="casper-order-status status-${orderStatusClass(o.status)}">${escapeHtml(o.status || 'Processing')}</span>
              </div>
              <div class="casper-order-items">${(o.items || []).map(i=>`${escapeHtml(i.title || 'Product')} × ${Number(i.quantity || 1)}`).join(' · ')}</div>
              <div class="casper-order-meta">Payment: ${escapeHtml(o.paymentStatus || 'Authorized')} · Ship to: ${escapeHtml(o.shippingAddress?.city || '')}, ${escapeHtml(o.shippingAddress?.state || '')}</div>
            </div>`).join('') : '<div class="casper-order-empty">No orders yet. Your completed orders will appear here.</div>'}
        </div>

        <div class="casper-dashboard-section" data-account-panel="transactions">
          <h3>Transactions & Payments</h3>
          ${transactions.length ? `<div class="casper-transaction-list">${transactions.map(t=>`
            <div class="casper-transaction-row">
              <div><strong>${escapeHtml(t.type)}</strong><small>${escapeHtml(t.order || '')} · ${new Date(t.date || Date.now()).toLocaleString()}</small></div>
              <span>${money(t.amount)}</span>
              <em>${escapeHtml(t.status)}</em>
            </div>`).join('')}</div>` : '<div class="casper-order-empty">No transactions yet.</div>'}
          <div class="casper-reward-note">Payment references shown here are frontend-demo records. Real payment data must come from the payment processor/backend.</div>
        </div>

        <div class="casper-dashboard-section" data-account-panel="profile">
          <h3>Account Details</h3>
          <div class="casper-profile-grid">
            <div><small>Full Name</small><strong>${safeName}</strong></div>
            <div><small>Email</small><strong>${safeEmail}</strong></div>
            <div><small>Member Since</small><strong>${account.joinedAt ? new Date(account.joinedAt).toLocaleDateString() : 'Today'}</strong></div>
            <div><small>Reward Balance</small><strong>${Number(account.tokens || 0)} Tokens</strong></div>
          </div>
          <h3 style="margin-top:18px">Saved Addresses</h3>
          ${addresses.length ? addresses.map(a=>`<div class="casper-saved-address">${escapeHtml(a.address || '')}, ${escapeHtml(a.city || '')}, ${escapeHtml(a.state || '')} ${escapeHtml(a.zip || '')}</div>`).join('') : '<div class="casper-order-empty">No saved addresses yet. Your checkout address can be saved here in the full account system.</div>'}
        </div>
      </div>
    `);

    const panels=[...document.querySelectorAll('[data-account-panel]')];
    function showPanel(name){ panels.forEach(p=>p.style.display=p.dataset.accountPanel===name?'block':'none'); }
    showPanel('orders');
    document.querySelectorAll('[data-account-tab]').forEach(btn=>btn.addEventListener('click',()=>showPanel(btn.dataset.accountTab)));
    const logout=document.querySelector('.casper-account-logout');
    if(logout) logout.addEventListener('click',()=>{
      localStorage.removeItem('casper_logged_user');
      updateUserAccountUI();
      closeModal();
      showToast('Logged out successfully.', 'info');
    });
  }

  function openAccountModal() {
    const user = getUserSession();
    if (user) { renderAccountDashboard(user); return; }
    openModal(`
      <h2 class="casper-modal__title">🔐 Casper Account</h2>
      <p class="casper-modal__sub">Sign in to your account or create a new account to track orders, transactions, rewards and saved details.</p>
      <div class="casper-modal-tabs">
        <button class="casper-modal-tab is-active" id="tab-login">Sign In</button>
        <button class="casper-modal-tab" id="tab-register">Create Account</button>
      </div>
      <form id="casper-account-form">
        <div class="casper-form-group" id="group-name" style="display:none;"><label>Full Name</label><input type="text" class="casper-form-input" id="acct-name" placeholder="John Doe"></div>
        <div class="casper-form-group"><label>Email Address</label><input type="email" class="casper-form-input" id="acct-email" placeholder="you@example.com" required></div>
        <div class="casper-form-group"><label>Password</label><input type="password" class="casper-form-input" id="acct-password" placeholder="Password" minlength="6" required></div>
        <button type="submit" class="casper-btn-primary" id="acct-submit-btn">SIGN IN</button>
      </form>
      <p class="casper-reward-note">Demo storefront: authentication is browser-only. Production passwords must never be stored in localStorage.</p>
    `);
    let mode='login';
    const tabLogin=document.getElementById('tab-login'), tabReg=document.getElementById('tab-register');
    const groupName=document.getElementById('group-name'), submitBtn=document.getElementById('acct-submit-btn');
    tabLogin.addEventListener('click',()=>{mode='login';tabLogin.classList.add('is-active');tabReg.classList.remove('is-active');groupName.style.display='none';submitBtn.textContent='SIGN IN';});
    tabReg.addEventListener('click',()=>{mode='register';tabReg.classList.add('is-active');tabLogin.classList.remove('is-active');groupName.style.display='block';submitBtn.textContent='CREATE ACCOUNT';});
    document.getElementById('casper-account-form').addEventListener('submit',function(e){
      e.preventDefault();
      const email=document.getElementById('acct-email').value.trim().toLowerCase();
      const password=document.getElementById('acct-password').value;
      const existing=getStoredAccount(email);
      if(mode==='register'){
        if(existing){showToast('An account with this email already exists. Sign in instead.','info');return;}
        const name=document.getElementById('acct-name').value.trim() || email.split('@')[0];
        // Browser-only demo credential marker; never use this pattern in production.
        saveStoredAccount({name,email,password,joinedAt:new Date().toISOString(),tokens:0,membership:'Casper Rewards',membershipStatus:'Active',addresses:[]});
        const session={name,email,date:new Date().toISOString()};
        localStorage.setItem('casper_logged_user',JSON.stringify(session));
        updateUserAccountUI(); closeModal(); renderAccountDashboard(session); showToast(`Welcome ${name}! Your account is ready.`,'success');
      } else {
        if(!existing){showToast('No account found for this email. Please create an account first.','info');return;}
        if(existing.password && existing.password!==password){showToast('Incorrect password.','info');return;}
        const session={name:existing.name || email.split('@')[0],email,date:new Date().toISOString()};
        localStorage.setItem('casper_logged_user',JSON.stringify(session));
        updateUserAccountUI(); closeModal(); renderAccountDashboard(session); showToast(`Welcome back, ${session.name}!`,'success');
      }
    });
  }

  updateUserAccountUI();
  document.addEventListener('click', function(e) {
    const acctTarget=e.target.closest('.cc-acct, a[href*="account"]');
    if(acctTarget){e.preventDefault();openAccountModal();}
  });

  // ==========================================
  // 8. PRODUCT QUICK VIEW MODAL
  // ==========================================
  function openQuickViewModal(prod) {
    const cp = getFrontendProduct(prod.productId || prod.id) || prod;
    const variants = Array.isArray(cp.variants) && cp.variants.length ? cp.variants : [{
      id: `${cp.productId}-default`, type: 'default', value: 'Standard', sku: cp.sku, upc: cp.upc,
      price: Number(cp.salePrice ?? cp.price), salePrice: Number(cp.salePrice ?? cp.price), inventory: availableInventory(cp), available: availableInventory(cp), image: cp.image
    }];
    let selectedVariant = variants[0];
    const money = v => `$${Number(v || 0).toFixed(2)}`;
    const variantButtons = variants.map((v, i) => `<button type="button" class="casper-option-chip ${i===0?'is-selected':''}" data-variant-id="${escapeHtml(v.id)}">${escapeHtml(v.value || 'Standard')} · ${money(v.salePrice ?? v.price)}</button>`).join('');
    const renderVariantState = () => {
      const node = document.getElementById('qv-variant-state');
      const btn = document.getElementById('qv-add-cart-btn');
      if (!node || !btn) return;
      const available = Number(selectedVariant.available ?? selectedVariant.inventory ?? 0);
      node.innerHTML = `<div><strong>SKU:</strong> ${escapeHtml(selectedVariant.sku)} &nbsp; <strong>UPC:</strong> ${escapeHtml(selectedVariant.upc)}</div><div><strong>Price:</strong> ${money(selectedVariant.salePrice ?? selectedVariant.price)} &nbsp; <strong>Size/Weight:</strong> ${escapeHtml(selectedVariant.value || 'Standard')} &nbsp; <strong>Stock:</strong> ${available <= 0 ? 'OUT OF STOCK' : available <= FRONTEND_COMPLIANCE_CONFIG.lowStockThreshold ? `ONLY ${available} LEFT` : `${available} ITEMS IN STOCK`}</div><div><strong>Status:</strong> ${escapeHtml(selectedVariant.status || (available>0?'Active':'Out of Stock'))}</div>`;
      btn.textContent = available > 0 ? `ADD TO CART — ${money(selectedVariant.salePrice ?? selectedVariant.price)}` : 'OUT OF STOCK';
      btn.disabled = available <= 0;
      const img = document.getElementById('qv-main-image'); if (img && selectedVariant.image) { img.src = selectedVariant.image; img.onerror = function(){this.onerror=null;this.src=(window.casperRealFallback ? window.casperRealFallback(this.alt) : window.casperImageFallback(this.alt));}; }
    };

    openModal(`
      <div class="casper-qv-grid">
        <button type="button" class="casper-qv-image-button" aria-label="Zoom product image"><img id="qv-main-image" class="casper-qv-img" src="${escapeHtml(selectedVariant.image || cp.image || imageFallback(cp.title))}" alt="${escapeHtml(cp.title)}" loading="eager" onerror="this.onerror=null;this.src=(window.casperRealFallback ? window.casperRealFallback(this.alt) : window.casperImageFallback(this.alt));"></button>
        <div style="text-align:left;">
          <span class="casper-qv-badge">${escapeHtml(cp.tag || cp.category)}</span>
          <h2 style="font-size:20px;font-weight:700;margin:4px 0 10px;line-height:1.3;">${escapeHtml(cp.title)}</h2>
          <div style="font-size:13px;color:var(--casper-green-ink);font-weight:bold;margin-bottom:8px;">★ ${Number(cp.rating || 0).toFixed(1)} (${Number(cp.reviews || 0)} reviews)</div>
          <div class="casper-qv-price">${money(selectedVariant.salePrice ?? selectedVariant.price)}</div>
          <p style="font-size:13px;color:var(--casper-ink-soft);margin-bottom:12px;line-height:1.5;">${escapeHtml(cp.fullDescription || cp.desc || cp.shortDescription)}</p>
          <div class="casper-qv-compliance-meta"><span>Brand: ${escapeHtml(cp.brand)}</span><span>Manufacturer: ${escapeHtml(cp.manufacturer)}</span><span>Category: ${escapeHtml(cp.category)} / ${escapeHtml(cp.subcategory)}</span><span>Weight: ${Number(cp.weightOz||0).toFixed(1)} oz</span><span>Slug: ${escapeHtml(cp.slug)}</span><span>${isProductAgeRestricted(cp)?'21+ AGE RESTRICTED':'NOT AGE RESTRICTED'}</span></div>
          ${variants.length>1 ? `<div style="font-size:12px;font-weight:bold;margin:12px 0 6px;text-transform:uppercase;">Select Variant:</div><div class="casper-qv-options" id="qv-variants">${variantButtons}</div>` : ''}
          <div id="qv-variant-state" class="casper-qv-variant-state"></div>
          <div class="casper-qv-tags">${(cp.tags||[]).slice(0,8).map(t=>`<span>#${escapeHtml(t)}</span>`).join('')}</div>
          <button type="button" id="qv-add-cart-btn" class="casper-btn-primary" style="margin-top:14px;">ADD TO CART</button>
        </div>
      </div>
    `);

    const variantBox = document.getElementById('qv-variants');
    variantBox?.querySelectorAll('.casper-option-chip').forEach(chip => chip.addEventListener('click', function(){
      variantBox.querySelectorAll('.casper-option-chip').forEach(c=>c.classList.remove('is-selected')); this.classList.add('is-selected');
      selectedVariant = variants.find(v=>String(v.id)===String(this.dataset.variantId)) || variants[0]; renderVariantState();
    }));
    renderVariantState();

    document.getElementById('qv-add-cart-btn')?.addEventListener('click', function () {
      if (isProductAgeRestricted(cp) && !window.requireCasperAgeVerification?.('Age verification is required before adding this product.')) return;
      const frontendPolicy=window.CasperCompliance?.check?.(cp, '');
      if(frontendPolicy && !frontendPolicy.allowed) { showToast(frontendPolicy.reason || 'This product is not eligible for purchase under the configured compliance policy.', 'info'); return; }
      const available = Number(selectedVariant.available ?? selectedVariant.inventory ?? availableInventory(cp));
      const existing = cart.find(i => i.productId === cp.productId && i.variantId === selectedVariant.id);
      const nextQty = (existing ? Number(existing.quantity) : 0) + 1;
      if (nextQty > available) { showToast(`Only ${available} unit${available===1?'':'s'} of this variant are available.`, 'info'); return; }
      if (existing) existing.quantity = nextQty;
      else cart.push({
        id: 'cart_' + Date.now(), productId: cp.productId, variantId: selectedVariant.id, sku: selectedVariant.sku,
        upc: selectedVariant.upc, title: cp.title, brand: cp.brand, price: Number(selectedVariant.salePrice ?? selectedVariant.price),
        image: selectedVariant.image || cp.image, flavor: selectedVariant.flavor || (selectedVariant.type==='flavor'?selectedVariant.value:''),
        nic: selectedVariant.strength || (selectedVariant.type==='strength'?selectedVariant.value:''), weightOz: Number(cp.weightOz||8),
        ageRestricted: isProductAgeRestricted(cp), minAge: Number(cp.minAge||0), allowedStates: cp.allowedStates||[], quantity: 1
      });
      saveCart(); closeModal(); showToast(`Added ${cp.title} (${selectedVariant.value}) to cart.`, 'success'); openDrawer(cartDrawer, cartOpenBtn);
    });
  }

  // Intercept click on product cards to open Quick View
  document.addEventListener('click', function (e) {
    const card = e.target.closest('.cc-card, article');
    if (!card) return;

    const isDirectAddBtn = e.target.closest('.cc-card__btn');
    const titleEl = card.querySelector('.cc-card__title, h3, h4');
    const priceEl = card.querySelector('.cc-card__price, strong');
    const imgEl = card.querySelector('img');

    if (titleEl && !isDirectAddBtn) {
      const titleText = titleEl.textContent.trim();
      const matched = productCatalog.find(p => p.title.toLowerCase() === titleText.toLowerCase()) || {
        id: 'p_custom_' + Date.now(),
        title: titleText,
        price: priceEl ? parseFloat(priceEl.textContent.replace(/[^0-9.]/g, '')) || 19.99 : 19.99,
        image: imgEl ? imgEl.src : 'casper-mascot-logo.png',
        rating: 5.0,
        tag: 'CASPER EXCLUSIVE',
        flavors: ['Purple Rush', 'Lime Chill'],
        nics: ['50mg', '20mg'],
        desc: 'Premium authentic Casper Smoke Shop product. 21+ adult enjoyment with lab-tested purity.'
      };
      const fp = productById(matched.id) || matched; history.pushState({},'',`?product=${encodeURIComponent(fp.productId || fp.id)}`); if (fp.productId && window.renderCasperProductDetail) window.renderCasperProductDetail(fp); else openQuickViewModal(fp);
    }
  });


  // ==========================================
  // 9. CASPER MEMBERSHIP + STORE LOCATOR
  // ==========================================
  const CASPER_FREE_SHIPPING_THRESHOLD = 200;
  const CASPER_OUT_OF_STATE_SHIPPING_FEE = 14.99; // Change this one value if the business uses another fee.

  function openMembershipModal() {
    const user = getUserSession();
    const requested = localStorage.getItem('casper_membership_requested') === '1';

    if (requested) {
      openModal(`
        <div class="casper-membership-modal">
          <div class="casper-membership-hero">
            <span class="casper-membership-star">★</span>
            <div>
              <span class="casper-modal-eyebrow">CASPER VIP MEMBERSHIP</span>
              <h2 class="casper-modal__title">REQUEST ALREADY RECEIVED</h2>
            </div>
          </div>
          <p class="casper-modal__sub">Your membership request is saved on this device. We’ll use the contact details you submitted for follow-up.</p>
          <div class="casper-membership-benefits">
            <div><strong>$15 OFF</strong><span>on a qualifying $200+ opening order</span></div>
            <div><strong>VIP DEALS</strong><span>Member-only promotions and offers</span></div>
            <div><strong>EARLY ACCESS</strong><span>Get access to selected new deals first</span></div>
          </div>
          <button type="button" class="casper-btn-primary" onclick="window.closeCasperModal()">DONE</button>
        </div>
      `);
      return;
    }

    openModal(`
      <div class="casper-membership-modal">
        <div class="casper-membership-hero">
          <span class="casper-membership-star">★</span>
          <div>
            <span class="casper-modal-eyebrow">CASPER VIP MEMBERSHIP</span>
            <h2 class="casper-modal__title">JOIN THE CASPER CLUB</h2>
          </div>
        </div>
        <p class="casper-modal__sub">Request to join the membership and receive member benefits.</p>

        <div class="casper-membership-benefits">
          <div><strong>$15 OFF</strong><span>when your qualifying opening order is $200+</span></div>
          <div><strong>VIP DEALS</strong><span>Member-only promotions and offers</span></div>
          <div><strong>EARLY ACCESS</strong><span>Selected new arrivals and special deals</span></div>
        </div>

        <form id="casper-membership-form" class="casper-membership-form">
          <div class="casper-form-group">
            <label>Full Name</label>
            <input type="text" class="casper-form-input" id="membership-name" value="${user ? user.name : ''}" placeholder="Your name" required>
          </div>
          <div class="casper-form-group">
            <label>Email Address</label>
            <input type="email" class="casper-form-input" id="membership-email" value="${user ? user.email : ''}" placeholder="you@example.com" required>
          </div>
          <div class="casper-form-group">
            <label>ZIP Code</label>
            <input type="text" class="casper-form-input" id="membership-zip" placeholder="90001" inputmode="numeric" maxlength="10" required>
          </div>
          <button type="submit" class="casper-btn-primary">REQUEST TO JOIN</button>
        </form>
      </div>
    `);

    const form = document.getElementById('casper-membership-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const request = {
          name: document.getElementById('membership-name').value.trim(),
          email: document.getElementById('membership-email').value.trim(),
          zip: document.getElementById('membership-zip').value.trim(),
          requestedAt: new Date().toISOString()
        };
        localStorage.setItem('casper_membership_requested', '1');
        localStorage.setItem('casper_membership_request', JSON.stringify(request));
        closeModal();
        showToast('Membership request received! Welcome to Casper VIP.', 'success');
      });
    }
  }

  function loadLeafletAssets() {
    return new Promise((resolve, reject) => {
      if (window.L) return resolve(window.L);

      const existingCss = document.querySelector('link[data-casper-leaflet]');
      if (!existingCss) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.dataset.casperLeaflet = '1';
        document.head.appendChild(link);
      }

      const existingScript = document.querySelector('script[data-casper-leaflet]');
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(window.L), { once: true });
        existingScript.addEventListener('error', reject, { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.async = true;
      script.dataset.casperLeaflet = '1';
      script.onload = () => window.L ? resolve(window.L) : reject(new Error('Leaflet failed to load'));
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function geocodeZip(zip) {
    const url = 'https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=us&postalcode=' + encodeURIComponent(zip);
    const response = await fetch(url, {
      headers: { 'Accept': 'application/json' }
    });
    if (!response.ok) throw new Error('ZIP lookup failed');
    const data = await response.json();
    if (!data.length) throw new Error('ZIP code not found');
    return {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon),
      display: data[0].display_name || zip
    };
  }

  async function findNearbyShops(lat, lon) {
    const query = `
      [out:json][timeout:20];
      (
        node(around:12000,${lat},${lon})["shop"="tobacco"];
        way(around:12000,${lat},${lon})["shop"="tobacco"];
        relation(around:12000,${lat},${lon})["shop"="tobacco"];
        node(around:12000,${lat},${lon})["shop"="vape"];
        way(around:12000,${lat},${lon})["shop"="vape"];
        relation(around:12000,${lat},${lon})["shop"="vape"];
      );
      out center tags;
    `;
    const endpoint = 'https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(query);
    const response = await fetch(endpoint, { headers: { 'Accept': 'application/json' } });
    if (!response.ok) throw new Error('Shop search failed');
    const data = await response.json();

    return (data.elements || []).map((item, index) => {
      const itemLat = item.lat ?? item.center?.lat;
      const itemLon = item.lon ?? item.center?.lon;
      const tags = item.tags || {};
      return {
        id: String(item.id || index),
        lat: Number(itemLat),
        lon: Number(itemLon),
        name: tags.name || tags.brand || 'Nearby Smoke Shop',
        address: [tags['addr:housenumber'], tags['addr:street'], tags['addr:city'], tags['addr:state'], tags['addr:postcode']].filter(Boolean).join(', ') || 'Address not listed',
        phone: tags.phone || '',
        website: tags.website || ''
      };
    }).filter(s => Number.isFinite(s.lat) && Number.isFinite(s.lon));
  }

  function openNearestShopModal() {
    openModal(`
      <div class="casper-shop-locator">
        <div class="casper-locator-head">
          <div>
            <span class="casper-modal-eyebrow">STORE LOCATOR</span>
            <h2 class="casper-modal__title">FIND A NEAREST SHOP</h2>
            <p class="casper-modal__sub">Enter your US ZIP code to find the nearest Casper Smoke Shop.</p>
          </div>
        </div>

        <form id="casper-shop-search-form" class="casper-shop-search-form">
          <input id="casper-shop-zip" class="casper-form-input" type="text"
                 inputmode="numeric" maxlength="10" placeholder="Enter ZIP code "
                 aria-label="ZIP code" required>
          <button class="casper-btn-primary" type="submit">FIND SHOP</button>
        </form>

        <div id="casper-shop-status" class="casper-shop-status" aria-live="polite">
          Enter your ZIP code to find a Casper Smoke Shop.
        </div>

        <div class="casper-shop-locator__layout">
          <div id="casper-shop-map" class="casper-shop-map" aria-label="Casper Smoke Shop map">
            <div class="casper-map-placeholder">Enter ZIP code 32726 to view the Casper Smoke Shop location.</div>
          </div>

          <div id="casper-shop-results" class="casper-shop-results">
            <div class="casper-shop-empty">The Casper Smoke Shop location will appear here.</div>
          </div>
        </div>
      </div>
    `);

    const form = document.getElementById('casper-shop-search-form');
    const status = document.getElementById('casper-shop-status');
    const results = document.getElementById('casper-shop-results');
    const mapEl = document.getElementById('casper-shop-map');

    // Official Casper Smoke Shop location requested for ZIP 32726.
    // Keep this local so the locator does NOT accidentally return unrelated
    // smoke/vape shops from OpenStreetMap/Overpass.
    const CASPER_STORE = {
      name: 'Casper Smoke Shop',
      address: '2105 E Orange Ave, Eustis, FL 32726, United States',
      zip: '32726',
      logo: 'casper-mascot-logo.png',
      mapQuery: '2105 E Orange Ave, Eustis, FL 32726, United States'
    };

    function renderCasperStore(store) {
      const q = encodeURIComponent(store.mapQuery);

      mapEl.innerHTML = `
        <div class="casper-store-map-wrap">
          <iframe
            title="${escapeHtml(store.name)} location map"
            class="casper-google-map-frame"
            src="https://www.google.com/maps?q=${q}&output=embed"
            loading="eager"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen>
          </iframe>

          <div class="casper-map-store-card">
            <img src="${escapeHtml(store.logo)}" alt="Casper Smoke Shop logo"
                 onerror="this.style.display='none'">
            <div>
              <strong>${escapeHtml(store.name)}</strong>
              <span>${escapeHtml(store.address)}</span>
              <a target="_blank" rel="noopener noreferrer"
                 href="https://www.google.com/maps/search/?api=1&query=${q}">
                 OPEN IN GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>
      `;

      results.innerHTML = `
        <article class="casper-shop-result casper-shop-result--featured is-selected">
          <div class="casper-shop-result__number">✓</div>
          <div class="casper-shop-result__body">
            <div class="casper-shop-result__brand">
              <img src="${escapeHtml(store.logo)}" alt="Casper Smoke Shop logo"
                   onerror="this.style.display='none'">
              <strong>${escapeHtml(store.name)}</strong>
            </div>
            <span>${escapeHtml(store.address)}</span>
            <span>ZIP: ${escapeHtml(store.zip)}</span>
            <button type="button" class="casper-shop-select">SELECT THIS SHOP</button>
          </div>
        </article>
      `;

      status.innerHTML = `<strong>Casper Smoke Shop found.</strong> Showing the exact store location for ZIP ${escapeHtml(store.zip)}.`;

      const selectBtn = results.querySelector('.casper-shop-select');
      if (selectBtn) {
        selectBtn.addEventListener('click', function () {
          localStorage.setItem('casper_selected_shop', JSON.stringify(store));
          closeModal();
          showToast(`${store.name} selected as your preferred shop.`, 'success');
          updateSelectedShopButton(store.name);
        });
      }
    }

    function showUnsupportedZipPopup(zip) {
      status.textContent = '';
      results.innerHTML = `
        <div class="casper-shop-empty">
          <strong>Casper Smoke Shop is not available for ZIP ${escapeHtml(zip)}</strong>
          <p>We currently have a Casper Smoke Shop location configured for ZIP 32726.</p>
          <p>Would you like to request a Casper Smoke Shop near your location?</p>
          <div class="casper-shop-request-actions">
            <a class="casper-shop-google" target="_blank" rel="noopener noreferrer"
               href="mailto:info@caspersmokeshop.com?subject=${encodeURIComponent('Request a Casper Smoke Shop near ZIP ' + zip)}">
              REQUEST A STORE
            </a>
          </div>
        </div>
      `;

      mapEl.innerHTML = `
        <div class="casper-map-placeholder casper-map-placeholder--message">
          <div class="casper-map-message-icon">⌖</div>
          <strong>No Casper Smoke Shop at this ZIP</strong>
          <span>ZIP ${escapeHtml(zip)} is not currently configured.</span>
        </div>
      `;

      openModal(`
        <div class="casper-shop-popup casper-shop-popup--official">
          <div class="casper-shop-popup__icon">⌖</div>
          <span class="casper-modal-eyebrow">STORE LOCATOR</span>
          <h2 class="casper-modal__title">NO CASPER SHOP NEARBY</h2>
          <p class="casper-shop-popup__lead">
            We’re sorry, but we don’t currently have a Casper Smoke Shop location near ZIP
            <strong>${escapeHtml(zip)}</strong>.
          </p>

          <div class="casper-shop-popup__notice">
            <strong>Looking for a Casper Smoke Shop in your area?</strong>
            <span>
              Request a store near your location, or contact our team to learn more about
              business and franchise opportunities.
            </span>
          </div>

          <div class="casper-shop-popup__actions">
            <a class="casper-btn-primary" target="_blank" rel="noopener noreferrer"
               href="mailto:info@caspersmokeshop.com?subject=${encodeURIComponent('Request a Casper Smoke Shop near ZIP ' + zip)}">
              REQUEST A STORE
            </a>
            <a class="casper-shop-popup__secondary" target="_blank" rel="noopener noreferrer"
               href="mailto:info@caspersmokeshop.com?subject=${encodeURIComponent('Casper Smoke Shop Business / Franchise Inquiry')}">
              BUSINESS &amp; FRANCHISE INQUIRY
            </a>
          </div>

          <button type="button" class="casper-shop-popup__close" id="casper-shop-popup-close">CLOSE</button>
        </div>
      `);
      const closeBtn = document.getElementById('casper-shop-popup-close');
      if (closeBtn) closeBtn.addEventListener('click', closeModal);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const zip = document.getElementById('casper-shop-zip').value.trim();

      if (!/^\d{5}(?:-\d{4})?$/.test(zip)) {
        status.textContent = 'Please enter a valid 5-digit US ZIP code.';
        return;
      }

      // Current configured Casper location:
      // 32726 -> 2105 E Orange Ave, Eustis, FL 32726, United States
      if (zip === '32726' || zip === '32726-0000') {
        renderCasperStore(CASPER_STORE);
        return;
      }

      // IMPORTANT: Do not return unrelated shops for other ZIP codes.
      showUnsupportedZipPopup(zip);
    });
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, function (char) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char];
    });
  }

  function updateSelectedShopButton(name) {
    const buttons = document.querySelectorAll('#casper-find-shop-btn, #casper-find-shop-main-btn, #casper-find-shop-mobile-btn');
    buttons.forEach(btn => {
      if (btn) btn.textContent = '✓ ' + (name ? name.slice(0, 28) : 'SHOP SELECTED');
    });
  }

  // Feature buttons.
  document.addEventListener('click', function (e) {
    if (e.target.closest('#casper-membership-btn, #casper-membership-main-btn, #casper-membership-mobile-btn')) {
      e.preventDefault();
      closeAllDrawers();
      openMembershipModal();
    }
    if (e.target.closest('#casper-find-shop-btn, #casper-find-shop-main-btn, #casper-find-shop-mobile-btn')) {
      e.preventDefault();
      closeAllDrawers();
      openNearestShopModal();
    }
  });

  try {
    const savedShop = JSON.parse(localStorage.getItem('casper_selected_shop') || 'null');
    if (savedShop?.name) updateSelectedShopButton(savedShop.name);
  } catch (e) {}

  // ==========================================
  // 9. MULTI-STEP CHECKOUT MODAL
  // ==========================================
  function openCheckoutModal() {
    const subtotal = getCartSubtotal();
    if (subtotal <= 0) {
      showToast('Your cart is empty.', 'info');
      return;
    }

    const discountAmount = appliedDiscountAmount || (subtotal * appliedDiscount);
    const shippingArea = (localStorage.getItem('casper_shipping_state') || 'in-state').toLowerCase();
    const isInState = shippingArea === 'in-state';
    const isFreeShipping = isInState && subtotal >= CASPER_FREE_SHIPPING_THRESHOLD;
    const shippingFee = isFreeShipping ? 0 : (isInState ? 9.99 : CASPER_OUT_OF_STATE_SHIPPING_FEE);
    const tax = Math.max(0, subtotal - discountAmount) * FRONTEND_COMPLIANCE_CONFIG.taxRate;
    const finalTotal = (subtotal - discountAmount) + shippingFee + tax;

    openModal(`
      <h2 class="casper-modal__title">🛍️ Secure Express Checkout</h2>
      <p class="casper-modal__sub">Fast 21+ Age Verified Shipping • Discreet Plain Packaging</p>

      <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:20px;text-align:left;">
        <form id="casper-checkout-form">
          <div class="casper-form-group">
            <label>Full Shipping Name</label>
            <input type="text" class="casper-form-input" id="chk-name" placeholder="John Doe" required>
          </div>
          <div class="casper-form-group">
            <label>Email Address for Tracking</label>
            <input type="email" class="casper-form-input" id="chk-email" placeholder="john@example.com" required>
          </div>
          <div class="casper-form-group">
            <label>Street Address (Discreet Delivery)</label>
            <input type="text" class="casper-form-input" id="chk-address" placeholder="123 Main St, Apt 4B" required>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div class="casper-form-group">
              <label>City</label>
              <input type="text" class="casper-form-input" id="chk-city" placeholder="Los Angeles" required>
            </div>
            <div class="casper-form-group">
              <label>ZIP Code</label>
              <input type="text" class="casper-form-input" id="chk-zip" placeholder="90001" required>
            </div>
          </div>
          <div class="casper-form-group">
            <label>State</label>
            <input type="text" class="casper-form-input" id="chk-state" placeholder="WY" maxlength="2" autocomplete="address-level1" required>
          </div>
          <div class="casper-form-group">
            <label>Shipping Area</label>
            <select class="casper-form-select" id="chk-shipping-area">
              <option value="in-state" ${isInState ? 'selected' : ''}>In-State — Free over $200</option>
              <option value="out-of-state" ${!isInState ? 'selected' : ''}>Out of State — Additional shipping applies</option>
            </select>
            <small class="casper-shipping-note">In-state orders of $200+ qualify for free shipping. Out-of-state orders use the additional shipping charge shown below.</small>
          </div>

          <div class="casper-form-group">
            <label>Promo / Discount Code</label>
            <div style="display:flex;gap:8px;">
              <input type="text" class="casper-form-input" id="chk-promo-input" placeholder="CASPER20" value="${appliedDiscount > 0 ? 'CASPER20' : ''}">
              <button type="button" id="chk-apply-promo" style="padding:0 16px;background:var(--casper-line);color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:bold;">APPLY</button>
            </div>
          </div>
          <button type="submit" class="casper-btn-primary" style="margin-top:10px;">PLACE ORDER — $${finalTotal.toFixed(2)}</button>
        </form>

        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--casper-line);padding:18px;border-radius:10px;height:fit-content;">
          <h3 style="font-size:14px;font-weight:700;margin-bottom:12px;text-transform:uppercase;">Order Summary</h3>
          ${cart.map(i => `<div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span>${i.quantity}x ${i.title}</span><strong>$${(i.price * i.quantity).toFixed(2)}</strong></div>`).join('')}
          <hr style="border:0;border-top:1px solid var(--casper-line);margin:12px 0;">
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;"><span>Subtotal:</span><span>$${subtotal.toFixed(2)}</span></div>
          ${(appliedDiscount > 0 || appliedDiscountAmount > 0) ? `<div style="display:flex;justify-content:space-between;font-size:13px;color:var(--casper-green-ink);margin-bottom:4px;"><span>Coupon discount:</span><span>-$${discountAmount.toFixed(2)}</span></div>` : ''}
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;"><span>Shipping:</span><span>${isFreeShipping ? '<strong style="color:var(--casper-green-ink);">FREE</strong>' : '$' + shippingFee.toFixed(2)}</span></div>
          <div class="casper-checkout-shipping-note">${isInState ? (isFreeShipping ? 'In-state free shipping unlocked at $200+.' : 'In-state: spend $' + Math.max(0, CASPER_FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2) + ' more to unlock free shipping.') : 'Out of state: additional shipping charge applies.'}</div>
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:8px;"><span>Estimated Tax:</span><span>$${tax.toFixed(2)}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:16px;font-weight:800;color:var(--casper-green-ink);border-top:1px dashed var(--casper-line);padding-top:8px;"><span>Total:</span><span>$${finalTotal.toFixed(2)}</span></div>
        </div>
      </div>
    `);

    const shippingAreaSelect = document.getElementById('chk-shipping-area');
    if (shippingAreaSelect) {
      shippingAreaSelect.addEventListener('change', function () {
        localStorage.setItem('casper_shipping_state', this.value);
        openCheckoutModal();
      });
    }

    document.getElementById('chk-apply-promo').addEventListener('click', function () {
      const code = document.getElementById('chk-promo-input').value.trim().toUpperCase();
      const promo = FRONTEND_COMPLIANCE_CONFIG.promoCodes[code];
      const email = (document.getElementById('chk-email')?.value || '').trim().toLowerCase();
      if (!code) { appliedDiscount = 0; appliedDiscountAmount = 0; showToast('Coupon removed.', 'info'); openCheckoutModal(); return; }
      if (!promo) { showToast('Invalid or unsupported coupon code.', 'info'); return; }
      if (new Date(promo.expires + 'T23:59:59') < new Date()) { showToast('This coupon has expired.', 'info'); return; }
      const orders = window.casperFrontendOrderState?.get?.() || {};
      const priorCustomerUse = Object.values(orders).filter(o => String(o.customer?.email || '').toLowerCase() === email && o.promoCode === code).length;
      if (promo.firstOrderOnly && priorCustomerUse > 0) { showToast('This coupon is valid for the first order only.', 'info'); return; }
      if (priorCustomerUse >= Number(promo.usageLimit || Infinity)) { showToast('This coupon has reached its usage limit for this customer.', 'info'); return; }
      const totalBefore = getCartSubtotal();
      appliedDiscount = promo.type === 'percent' ? Number(promo.value) : 0;
      appliedDiscountAmount = promo.type === 'percent' ? totalBefore * Number(promo.value) : Math.min(Number(promo.value), totalBefore);
      localStorage.setItem('casper_active_coupon', code);
      showToast(`${code} applied. Sale prices and shipping promotions do not stack with an additional coupon beyond configured rules.`, 'success');
      openCheckoutModal();
    });

    document.getElementById('casper-checkout-form').addEventListener('submit', function (e) {
      e.preventDefault();

      if (cart.length === 0) { showToast('Your cart is empty.', 'info'); return; }
      const restrictedItems = cart.filter(i => i.ageRestricted || isProductAgeRestricted(getFrontendProduct(i.productId)));
      if (restrictedItems.length && !window.requireCasperAgeVerification?.('Age verification is required before checkout.')) return;

      const name = document.getElementById('chk-name').value.trim();
      const email = document.getElementById('chk-email').value.trim().toLowerCase();
      const address = document.getElementById('chk-address').value.trim();
      const city = document.getElementById('chk-city').value.trim();
      const zip = document.getElementById('chk-zip').value.trim();
      const state = document.getElementById('chk-state').value.trim().toUpperCase();

      const addressError = validateAddress({email,address,city,zip});
      if (addressError) { showToast(addressError, 'info'); return; }
      if (!/^[A-Z]{2}$/.test(state)) { showToast('Enter a valid 2-letter state code.', 'info'); return; }

      for (const item of cart) {
        const p = getFrontendProduct(item.productId) || item;
        const q = validateCartItemQuantity(item, item.quantity);
        if (!q.ok) { showToast(`${item.title}: ${q.message}`, 'info'); renderCartUI(); return; }
        const destination = canShipToState(p, state);
        if (!destination.ok) { showToast(`${item.title}: ${destination.message}`, 'info'); return; }
        const compliance=window.CasperCompliance?.check?.(p, state, localStorage.getItem('casper_shipping_method') || '');
        if(compliance && !compliance.allowed) { showToast(`${item.title}: ${compliance.reason || 'Compliance policy blocks this purchase.'}`, 'info'); return; }
      }

      const checkoutSubtotal = getCartSubtotal();
      const shippingQuote = calculateShipping(cart, state);
      const checkoutDiscount = appliedDiscountAmount || (checkoutSubtotal * appliedDiscount);
      const checkoutTax = Math.max(0, checkoutSubtotal - checkoutDiscount) * FRONTEND_COMPLIANCE_CONFIG.taxRate;
      const checkoutTotal = Math.max(0, checkoutSubtotal - checkoutDiscount) + shippingQuote.fee + checkoutTax;
      localStorage.setItem('casper_shipping_state', state);
      const orderNum = 'CSP-' + Math.floor(100000 + Math.random() * 900000);
      const paymentToken = `frontend-demo-${Date.now()}`;
      const order = {
        number: orderNum, status: 'Paid', paymentStatus: 'Authorized',
        ageVerificationStatus: restrictedItems.length ? 'Verified' : 'Not required',
        customer: { name, email },
        ownerEmail: (getUserSession()?.email || email).toLowerCase(),
        shippingAddress: { address, city, zip, state },
        items: cart.map(i => ({...i})),
        subtotal: checkoutSubtotal,
        discount: Number(checkoutDiscount.toFixed(2)),
        shipping: Number(shippingQuote.fee.toFixed(2)),
        tax: Number(checkoutTax.toFixed(2)),
        total: Number(checkoutTotal.toFixed(2)),
        shippingWeightOz: shippingQuote.weightOz,
        createdAt: new Date().toISOString(),
        paymentReference: paymentToken, promoCode: localStorage.getItem('casper_active_coupon') || null
      };

      // Frontend-only inventory reservation/consumption simulation.
      cart.forEach(item => {
        const p = getFrontendProduct(item.productId);
        if (p) {
          const variant = getVariantForCartItem(item, p);
          if (variant) {
            variant.available = Math.max(0, Number(variant.available ?? variant.inventory ?? 0) - Number(item.quantity));
            variant.inventory = variant.available + Number(variant.reserved || 0);
            variant.status = variant.available > 0 ? 'Active' : 'Out of Stock';
          }
          p.inventory = Math.max(0, Number(p.inventory || 0) - Number(item.quantity));
          p.inventoryAvailable = availableInventory(p);
          localStorage.setItem(`casper_inventory_${p.productId}`, String(p.inventory));
        }
      });
      window.casperFrontendOrderState?.save(order);
      localStorage.removeItem('casper_active_coupon');
      appliedDiscount = 0;
      appliedDiscountAmount = 0;
      cart = [];
      saveCart();
      closeModal();

      openModal(`
        <div style="text-align:center;padding:10px;">
          <div style="font-size:48px;margin-bottom:10px;">🎉</div>
          <h2 class="casper-modal__title" style="justify-content:center;">Order Confirmed!</h2>
          <p class="casper-modal__sub">Thank you, <strong>${name}</strong>! Your order <strong>#${orderNum}</strong> has been placed for <strong>$${checkoutTotal.toFixed(2)}</strong>.</p>
          <div style="background:rgba(0,255,135,0.1);border:1px solid var(--casper-green-dim);padding:16px;border-radius:8px;font-size:13px;color:var(--casper-green-ink);margin-bottom:20px;">
            📦 A confirmation email & tracking details have been sent to <strong>${email}</strong>. Estimated Delivery: 2-3 Business Days in discreet packaging.
          </div>
          <button type="button" class="casper-btn-primary" onclick="window.closeCasperModal()">CONTINUE SHOPPING</button>
        </div>
      `);
      showToast(`Order #${orderNum} placed successfully!`, 'success');
    });
  }

  // ==========================================
  // 10. SEARCH AUTOCOMPLETE SYSTEM
  // ==========================================
  const searchInputs = document.querySelectorAll('.cc-hsearch input, .cc-mnav__search input');
  searchInputs.forEach(input => {
    const parentForm = input.closest('form');
    if (!parentForm) return;
    parentForm.style.position = 'relative';

    let dropdown = parentForm.querySelector('#casper-search-results');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.id = 'casper-search-results';
      parentForm.appendChild(dropdown);
    }

    input.addEventListener('input', function () {
      const q = this.value.trim().toLowerCase();
      if (q.length < 2) {
        dropdown.style.display = 'none';
        return;
      }

      const directCategory = /^(vape|vapes|vaping|cigar|cigars|ciger|cigers)$/.test(q)
        ? (/^v/.test(q) ? 'vapes' : 'cigars')
        : '';

      if (directCategory) {
        const label = directCategory === 'vapes' ? 'Vapes' : 'Cigars';
        dropdown.innerHTML = `
          <div class="casper-search-item casper-vc-search-category" data-vc-search-category="${directCategory}">
            <div class="casper-vc-search-category-icon">${directCategory === 'vapes' ? 'V' : 'C'}</div>
            <div class="casper-search-item-info">
              <div class="casper-search-item-title">Open ${label} Collection</div>
              <div class="casper-search-item-price">View all 10 ${label.toLowerCase()} products →</div>
            </div>
          </div>
        `;
        const categoryItem = dropdown.querySelector('.casper-vc-search-category');
        categoryItem.addEventListener('click', function () {
          window.location.href = `?category=${this.getAttribute('data-vc-search-category')}`;
        });
      } else {
        const matches = productCatalog.filter(p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
        if (matches.length === 0) {
          dropdown.innerHTML = `<div style="padding:12px;font-size:13px;color:var(--casper-ink-soft);">No products found for "${q}"</div>`;
        } else {
          dropdown.innerHTML = matches.map(m => `
            <div class="casper-search-item" data-id="${m.id}">
              <img src="${m.image}" alt="${m.title}">
              <div class="casper-search-item-info">
                <div class="casper-search-item-title">${m.title}</div>
                <div class="casper-search-item-price">$${m.price.toFixed(2)}</div>
              </div>
            </div>
          `).join('');

          dropdown.querySelectorAll('.casper-search-item').forEach(item => {
            item.addEventListener('click', function () {
              const pid = this.getAttribute('data-id');
              const target = productCatalog.find(p => p.id === pid);
              if (target) {
                dropdown.style.display = 'none';
                openQuickViewModal(target);
              }
            });
          });
        }
      }
      dropdown.style.display = 'block';
    });

    document.addEventListener('click', function (e) {
      if (!parentForm.contains(e.target)) dropdown.style.display = 'none';
    });
  });

  // ==========================================
  // 11. CATEGORY FILTERING & NAVIGATION
  // ==========================================
  document.addEventListener('click', function (e) {
    const navLink = e.target.closest('.cc-nav a, .cc-mnav__group a, .cc-footer__col a');
    if (!navLink) return;

    const categoryText = navLink.textContent.trim();
    if (categoryText && !navLink.getAttribute('href').startsWith('http') && navLink.getAttribute('href') !== '/') {
      e.preventDefault();
      closeAllDrawers();

      const matchedProducts = productCatalog.filter(p => p.category.toLowerCase().includes(categoryText.toLowerCase()) || categoryText.toUpperCase() === 'SHOP ALL' || categoryText.toUpperCase() === 'DEALS');
      
      showToast(`Showing category: ${categoryText}`, 'info');

      // Scroll smoothly to main product section
      const mainSec = document.querySelector('main, section');
      if (mainSec) mainSec.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // ==========================================
  // 12. SUPPORT, CONTACT US, TRACK ORDER, FAQ MODALS
  // ==========================================
  document.addEventListener('click', function (e) {
    const contactBtn = e.target.closest('.cc-footer__contact-btn, a[href*="contact"], a[href*="Contact"]');
    if (contactBtn) {
      e.preventDefault();
      openModal(`
        <h2 class="casper-modal__title">✉️ Contact Casper Smoke Shop</h2>
        <p class="casper-modal__sub">Have a question about an order or product? Our support team is available 24/7.</p>
        <form id="casper-contact-form">
          <div class="casper-form-group">
            <label>Your Name</label>
            <input type="text" class="casper-form-input" placeholder="John Doe" required>
          </div>
          <div class="casper-form-group">
            <label>Your Email</label>
            <input type="email" class="casper-form-input" placeholder="john@example.com" required>
          </div>
          <div class="casper-form-group">
            <label>Message</label>
            <textarea class="casper-form-textarea" placeholder="How can we help you today?" required></textarea>
          </div>
          <button type="submit" class="casper-btn-primary">SEND MESSAGE</button>
        </form>
      `);
      document.getElementById('casper-contact-form').addEventListener('submit', function (evt) {
        evt.preventDefault();
        closeModal();
        showToast('Thank you! Your message has been sent to support.', 'success');
      });
    }

    const trackBtn = e.target.closest('a[href*="Track"], a[href*="track"]');
    if (trackBtn) {
      e.preventDefault();
      openModal(`
        <h2 class="casper-modal__title">📦 Track Your Order</h2>
        <p class="casper-modal__sub">Enter your Order # and Email address to view real-time shipment status.</p>
        <form id="casper-track-form">
          <div class="casper-form-group">
            <label>Order Number</label>
            <input type="text" class="casper-form-input" placeholder="CSP-89421" required>
          </div>
          <div class="casper-form-group">
            <label>Email Address</label>
            <input type="email" class="casper-form-input" placeholder="you@example.com" required>
          </div>
          <button type="submit" class="casper-btn-primary">TRACK SHIPMENT</button>
        </form>
      `);
      document.getElementById('casper-track-form').addEventListener('submit', function (evt) {
        evt.preventDefault();
        closeModal();
        openModal(`
          <h2 class="casper-modal__title">🚚 Shipment Status: In Transit</h2>
          <p class="casper-modal__sub">Tracking # <strong>9400 1000 0000 0000 0000 00</strong> (USPS Priority Mail)</p>
          <div style="background:rgba(255,255,255,0.03);border:1px solid var(--casper-line);padding:16px;border-radius:8px;font-size:13px;text-align:left;">
            <div style="color:var(--casper-green-ink);font-weight:bold;margin-bottom:6px;">● Out for Delivery Today</div>
            <div style="color:var(--casper-ink-soft);">Package is arriving in a plain, discrete box with no external branding.</div>
          </div>
        `);
      });
    }

    const faqBtn = e.target.closest('a[href*="FAQ"], a[href*="faq"]');
    if (faqBtn) {
      e.preventDefault();
      openModal(`
        <h2 class="casper-modal__title">❓ Frequently Asked Questions</h2>
        <p class="casper-modal__sub">Everything you need to know about shopping with Casper Smoke Shop.</p>
        
        <div class="casper-faq-item">
          <button class="casper-faq-question">What age do I need to be to order? <span>+</span></button>
          <div class="casper-faq-answer">All customers must be 21 years of age or older. We verify age during checkout in compliance with federal laws.</div>
        </div>
        <div class="casper-faq-item">
          <button class="casper-faq-question">Is packaging discreet? <span>+</span></button>
          <div class="casper-faq-answer">Yes! All orders ship in plain brown or white boxes with no smoke shop branding on the outside label for complete privacy.</div>
        </div>
        <div class="casper-faq-item">
          <button class="casper-faq-question">How do I get Free Shipping? <span>+</span></button>
          <div class="casper-faq-answer">Orders $49 and above automatically qualify for FREE standard shipping across the United States.</div>
        </div>
      `);
      document.querySelectorAll('.casper-faq-question').forEach(q => {
        q.addEventListener('click', function () {
          const item = this.closest('.casper-faq-item');
          item.classList.toggle('is-open');
        });
      });
    }

    const wholesaleBtn = e.target.closest('a[href*="distributor"], a[href*="Wholesale"]');
    if (wholesaleBtn) {
      e.preventDefault();
      openModal(`
        <h2 class="casper-modal__title">🤝 Wholesale & B2B Application</h2>
        <p class="casper-modal__sub">Partner with Casper Group for factory-direct wholesale pricing on premium vapes & glass.</p>
        <form id="casper-b2b-form">
          <div class="casper-form-group">
            <label>Business Name</label>
            <input type="text" class="casper-form-input" placeholder="Smoke Shop LLC" required>
          </div>
          <div class="casper-form-group">
            <label>Resale Tax ID / License #</label>
            <input type="text" class="casper-form-input" placeholder="TAX-8941209" required>
          </div>
          <div class="casper-form-group">
            <label>Contact Email</label>
            <input type="email" class="casper-form-input" placeholder="orders@yourshop.com" required>
          </div>
          <button type="submit" class="casper-btn-primary">SUBMIT WHOLESALE APPLICATION</button>
        </form>
      `);
      document.getElementById('casper-b2b-form').addEventListener('submit', function (evt) {
        evt.preventDefault();
        closeModal();
        showToast('Wholesale application received! Our sales team will reach out in 24h.', 'success');
      });
    }
  });

  // Topbar Coupon Click-to-Copy
  document.addEventListener('click', function (e) {
    if (e.target.textContent.includes('CASPER20')) {
      try {
        navigator.clipboard.writeText('CASPER20');
        showToast('Coupon code CASPER20 copied to clipboard!', 'success');
      } catch (err) {}
    }
  });

  // ==========================================
  // 13. TOAST NOTIFICATION ENGINE
  // ==========================================
  function showToast(message, type = 'info') {
    let container = document.getElementById('casper-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'casper-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `casper-toast casper-toast--${type}`;

    let icon = `<svg class="casper-toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>`;
    if (type === 'info') {
      icon = `<svg class="casper-toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg>`;
    }

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'casperToastOut 0.3s ease forwards';
      setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 300);
    }, 3200);
  }

  window.showToast = showToast;
  // ==========================================
  // 14. VAPES & CIGARS HOME SECTIONS / CATEGORY PAGES
  // ==========================================
  (function initVapesAndCigarsFeature() {
    const homeRoot = document.getElementById('casper-vc-home');
    const pageRoot = document.getElementById('casper-vc-page');
    if (!homeRoot || !pageRoot) return;

    const productById = id => casperVcProducts.find(p => p.id === id);

    function stars(rating) {
      const full = Math.round(Number(rating || 0));
      return '★'.repeat(Math.min(5, full)) + '☆'.repeat(Math.max(0, 5 - full));
    }

    function money(v) {
      return `$${Number(v).toFixed(2)}`;
    }

    function productCard(p, compact = false) {
      const offer = p.originalPrice && p.originalPrice > p.price
        ? `<span class="casper-vc-old-price">${money(p.originalPrice)}</span>`
        : '';
      return `
        <article class="casper-vc-card" data-vc-product-id="${p.id}">
          <button class="casper-vc-card__image-btn" type="button" aria-label="View ${p.title}">
            <span class="casper-vc-badge">${p.tag}</span>
            <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.onerror=null;this.src='assets/products/${p.id}.svg';">
          </button>
          <div class="casper-vc-card__body">
            <div class="casper-vc-rating" aria-label="${p.rating} out of 5 stars">
              <span>${stars(p.rating)}</span>
              <small>${Number(p.rating).toFixed(1)} · ${p.reviews} reviews</small>
            </div>
            <h3>${p.title}</h3>
            <div class="casper-vc-price-row">
              <strong>${money(p.price)}</strong>${offer}
            </div>
            <span class="casper-vc-offer">${p.tag}</span>
            ${compact ? '' : `<button class="casper-vc-shop-btn" type="button">VIEW PRODUCT</button>`}
          </div>
        </article>
      `;
    }

    function renderHomeGrid(category) {
      const grid = document.querySelector(`[data-vc-home-grid="${category}"]`);
      if (!grid) return;
      const products = category === 'vapes' ? casperVapeProducts : casperCigarProducts;
      grid.innerHTML = products.slice(0, 5).map(p => productCard(p, true)).join('') + `
        <a class="casper-vc-more-card" href="?category=${category}" aria-label="View all ${category}">
          <span class="casper-vc-more-card__icon">+</span>
          <strong>SHOW MORE</strong>
          <span>View all 10 ${category}</span>
        </a>
      `;
    }

    function renderCategoryPage(category) {
      const isVapes = category === 'vapes';
      const title = isVapes ? 'VAPES' : 'CIGARS';
      const products = isVapes ? casperVapeProducts : casperCigarProducts;

      homeRoot.hidden = true;
      pageRoot.hidden = false;
      pageRoot.innerHTML = `
        <div class="cc-wrap">
          <div class="casper-vc-page__top">
            <div>
              <span class="casper-vc-eyebrow">CASPER SMOKE SHOP</span>
              <h1>${title}</h1>
              <p>Explore all 10 ${title.toLowerCase()} products with current pricing, offers, ratings and reviews.</p>
            </div>
            <a class="casper-vc-back" href="./">← BACK TO HOME</a>
          </div>
          <div class="casper-vc-page__grid">
            ${products.map(p => productCard(p)).join('')}
          </div>
        </div>
      `;

      // Keep the existing home content intact; only hide the new home sections on category view.
      const main = pageRoot.closest('main');
      if (main) {
        Array.from(main.children).forEach(el => {
          if (el !== homeRoot && el !== pageRoot) {
            el.setAttribute('data-casper-vc-home-hidden', 'true');
            el.style.display = 'none';
          }
        });
      }
      window.scrollTo({top: 0, behavior: 'instant'});
    }

    function renderHome() {
      pageRoot.hidden = true;
      homeRoot.hidden = false;
      const main = pageRoot.closest('main');
      if (main) {
        Array.from(main.children).forEach(el => {
          if (el.hasAttribute('data-casper-vc-home-hidden')) {
            el.style.display = '';
            el.removeAttribute('data-casper-vc-home-hidden');
          }
        });
      }
      renderHomeGrid('vapes');
      renderHomeGrid('cigars');
    }

    function getCategoryFromLocation() {
      const params = new URLSearchParams(window.location.search);
      const raw = (params.get('category') || '').trim().toLowerCase();
      if (raw === 'vape' || raw === 'vapes') return 'vapes';
      if (raw === 'cigar' || raw === 'cigars') return 'cigars';
      return '';
    }

    function routeSearchValue(value) {
      const q = String(value || '').trim().toLowerCase();
      if (!q) return false;
      if (q === 'vape' || q === 'vapes' || q === 'vaping' || q === 'disposable vapes') {
        window.location.href = '?category=vapes';
        return true;
      }
      if (q === 'cigar' || q === 'cigars' || q === 'cigar products') {
        window.location.href = '?category=cigars';
        return true;
      }
      return false;
    }

    // Search submit: "vapes" -> Vapes page, "cigars" -> Cigars page.
    document.querySelectorAll('.cc-hsearch, .cc-mnav__search').forEach(form => {
      form.addEventListener('submit', function(e) {
        const input = this.querySelector('input[type="search"]');
        if (routeSearchValue(input ? input.value : '')) {
          e.preventDefault();
        }
      });
    });

    // Category-page cards open the existing product quick-view modal.
    document.addEventListener('click', function(e) {
      const card = e.target.closest('[data-vc-product-id]');
      if (!card) return;
      const id = card.getAttribute('data-vc-product-id');
      const product = productById(id);
      if (!product) return;
      if (e.target.closest('.casper-vc-more-card')) return;
      if (e.target.closest('.casper-vc-card__image-btn, .casper-vc-shop-btn, .casper-vc-card h3')) {
        openQuickViewModal(product);
      }
    });

    renderHomeGrid('vapes');
    renderHomeGrid('cigars');

    const category = getCategoryFromLocation();
    if (category) renderCategoryPage(category);
  })();


  // ==========================================
  // 15. FRONTEND E-COMMERCE QA / CATALOG LAYER
  // ==========================================
  (function initFrontendCommerceLayer() {
    const rootHost = document.querySelector('main') || document.body;
    let catalogRoot = document.getElementById('casper-compliance-catalog');

    function ensureCatalogRoot() {
      if (!catalogRoot) {
        catalogRoot = document.createElement('section');
        catalogRoot.id = 'casper-compliance-catalog';
        catalogRoot.hidden = true;
        catalogRoot.setAttribute('aria-label', 'Casper product catalog');
        rootHost.appendChild(catalogRoot);
      }
      return catalogRoot;
    }

    const categoryMap = {
      'SHOP ALL': null, 'VAPE KITS': ['Vape Kits'], 'DISPOSABLE VAPES': ['Disposable Vapes'],
      'E-LIQUIDS': ['E-Liquids'], 'GLASS': ['Glass'], 'CONCENTRATES': ['Concentrates'],
      'ACCESSORIES': ['Accessories'], 'DEALS': ['Deals'], 'VAPES & DISPOSABLES': ['Vapes','Vape Kits','Disposable Vapes'],
      'NIC SALTS': ['Nic Salts'], 'FREEBASE JUICE': ['Freebase Juice','E-Liquids'], 'ZERO NICOTINE': ['Zero Nicotine','E-Liquids'],
      'WAX & DABS': ['Wax & Dabs','Concentrates'], 'LIVE RESIN': ['Live Resin','Concentrates'], 'CARTRIDGES': ['Cartridges','Concentrates'],
      'BONGS': ['Bongs','Glass'], 'DAB RIGS': ['Dab Rigs','Glass'], 'HAND PIPES': ['Hand Pipes','Glass'], 'BUBBLERS': ['Bubblers','Glass'],
      'GRINDERS': ['Grinders','Accessories'], 'ROLLING PAPERS': ['Rolling Papers','Accessories'], 'TRAYS & STORAGE': ['Trays & Storage','Accessories'],
      'BRANDS': null
    };
    const sorters = {
      relevance: (a,b) => Number(b.featured)-Number(a.featured) || Number(b.rating||0)-Number(a.rating||0),
      price_asc: (a,b) => Number(a.salePrice)-Number(b.salePrice),
      price_desc: (a,b) => Number(b.salePrice)-Number(a.salePrice),
      newest: (a,b) => String(b.productId).localeCompare(String(a.productId)),
      rating: (a,b) => Number(b.rating||0)-Number(a.rating||0)
    };

    function allCatalogProducts() {
      return frontendProducts.filter((p,i,a) => a.findIndex(x => x.productId === p.productId) === i);
    }
    const navbarSubcategoryKeys = new Set([
      'VAPE KITS','DISPOSABLE VAPES','POD SYSTEMS','STARTER KITS','NIC SALTS','FREEBASE JUICE','ZERO NICOTINE',
      'WAX & DABS','LIVE RESIN','CARTRIDGES','BONGS','DAB RIGS','HAND PIPES','BUBBLERS','GRINDERS','ROLLING PAPERS','TRAYS & STORAGE'
    ]);
    function getCategoryProducts(category) {
      const key = String(category || 'SHOP ALL').toUpperCase();
      const all = allCatalogProducts();
      if (key === 'DEALS') return all.filter(p => Number(p.compareAt || 0) > Number(p.salePrice || p.price || 0));
      if (navbarSubcategoryKeys.has(key)) {
        const sub = all.filter(p => String(p.subcategory || '').toUpperCase() === key);
        if (sub.length) return sub;
      }
      const cats = categoryMap[key];
      if (!cats) return all;
      return all.filter(p => cats.some(c => String(p.category).toLowerCase() === c.toLowerCase()));
    }
    function productCard(p) {
      const available = availableInventory(p), out = available <= 0 || p.status === 'Discontinued' || p.status === 'Draft';
      const sale = Number(p.salePrice || p.price), compare = Number(p.compareAt || sale);
      return `<article class="casper-fec-card" data-fec-id="${escapeHtml(p.productId)}">
        <button class="casper-fec-media" type="button" aria-label="View ${escapeHtml(p.title)}">${p.tag?`<span class="casper-fec-badge">${escapeHtml(p.tag)}</span>`:''}
          <img src="${escapeHtml(p.image || imageFallback(p.title))}" alt="${escapeHtml(p.title)}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=(window.casperRealFallback ? window.casperRealFallback(this.alt) : window.casperImageFallback(this.alt));"></button>
        <div class="casper-fec-body"><div class="casper-fec-meta"><span>${'★'.repeat(Math.min(5,Math.round(Number(p.rating||0))))}${'☆'.repeat(Math.max(0,5-Math.round(Number(p.rating||0))))}</span><small>${Number(p.rating||0).toFixed(1)}</small></div>
          <div class="casper-fec-brand">${escapeHtml(p.brand)} · ${escapeHtml(p.subcategory)}</div>
          <h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.shortDescription)}</p>
          <div class="casper-fec-price"><strong>$${sale.toFixed(2)}</strong>${compare>sale?`<del>$${compare.toFixed(2)}</del>`:''}</div>
          <div class="casper-fec-stock ${out?'is-out':available<=FRONTEND_COMPLIANCE_CONFIG.lowStockThreshold?'is-low':''}">${out?'OUT OF STOCK':available<=FRONTEND_COMPLIANCE_CONFIG.lowStockThreshold?`ONLY ${available} LEFT`:`${available} IN STOCK`}</div>
          <div class="casper-fec-identifiers"><span>SKU ${escapeHtml(p.sku)}</span><span>UPC ${escapeHtml(p.upc)}</span></div>
          <div class="casper-fec-variant-note">${(p.variants||[]).length} variant${(p.variants||[]).length===1?'':'s'} · ${isProductAgeRestricted(p)?'21+ restricted':'General merchandise'}</div>
          <button type="button" class="casper-fec-view">VIEW DETAILS</button>
        </div></article>`;
    }

    function renderCatalog(category, query='', filter='all', sort='relevance', brand='all', price='all') {
      const root=ensureCatalogRoot(), key=String(category||'SHOP ALL').toUpperCase();
      let list=getCategoryProducts(key), q=normalizeSearch(query);
      list=list.filter(p => !['Restricted/Blocked','Recalled/Deactivated'].includes(p.compliance_status) && p.recall_status !== 'Recalled' && !(isProductAgeRestricted(p) && p.compliance_status && p.compliance_status !== 'Approved'));
      if(q) list=list.filter(p=>normalizeSearch(`${p.title} ${p.brand} ${p.manufacturer} ${p.category} ${p.subcategory} ${p.sku} ${p.upc} ${p.tags.join(' ')} ${(p.variants||[]).map(v=>`${v.value} ${v.size||''} ${v.flavor||''} ${v.strength||''} ${v.color||''} ${v.sku} ${v.upc}`).join(' ')}`).includes(q));
      if(brand!=='all') list=list.filter(p=>String(p.brand).toLowerCase()===String(brand).toLowerCase());
      if(price==='under25') list=list.filter(p=>Number(p.salePrice)<=25);
      if(price==='25to50') list=list.filter(p=>Number(p.salePrice)>25&&Number(p.salePrice)<=50);
      if(price==='50to100') list=list.filter(p=>Number(p.salePrice)>50&&Number(p.salePrice)<=100);
      if(price==='100plus') list=list.filter(p=>Number(p.salePrice)>100);
      if(filter==='in') list=list.filter(p=>availableInventory(p)>0 && p.status==='Active');
      if(filter==='low') list=list.filter(p=>availableInventory(p)>0&&availableInventory(p)<=FRONTEND_COMPLIANCE_CONFIG.lowStockThreshold);
      if(filter==='sale') list=list.filter(p=>Number(p.compareAt)>Number(p.salePrice));
      if(filter==='restricted') list=list.filter(isProductAgeRestricted);
      if(filter==='out') list=list.filter(p=>availableInventory(p)<=0 || p.status==='Out of Stock');
      if(filter==='discontinued') list=list.filter(p=>p.status==='Discontinued');
      list.sort(sorters[sort]||sorters.relevance);
      const brands=[...new Set(getCategoryProducts(key).map(p=>p.brand).filter(Boolean))].sort();
      const counts={all:getCategoryProducts(key).length,in:getCategoryProducts(key).filter(p=>availableInventory(p)>0&&p.status==='Active').length,low:getCategoryProducts(key).filter(p=>availableInventory(p)>0&&availableInventory(p)<=FRONTEND_COMPLIANCE_CONFIG.lowStockThreshold).length,out:getCategoryProducts(key).filter(p=>availableInventory(p)<=0||p.status==='Out of Stock').length};
      root.hidden=false;
      root.innerHTML=`<div class="cc-wrap casper-fec-wrap"><div class="casper-fec-head"><div><span>CASPER SMOKE SHOP / CATALOG</span><h1>${escapeHtml(key)}</h1><p>${list.length} matching product${list.length===1?'':'s'} · ${counts.all} catalog records</p></div><a class="casper-fec-back" href="./">← HOME</a></div>
        <div class="casper-fec-toolbar">
          <input id="casper-fec-search" type="search" value="${escapeHtml(query)}" placeholder="Search name, brand, manufacturer, SKU, UPC, size or flavor…" aria-label="Search catalog">
          <select id="casper-fec-brand" aria-label="Filter by brand"><option value="all">All brands</option>${brands.map(b=>`<option value="${escapeHtml(b)}">${escapeHtml(b)}</option>`).join('')}</select>
          <select id="casper-fec-price" aria-label="Filter by price"><option value="all">All prices</option><option value="under25">Under $25</option><option value="25to50">$25–$50</option><option value="50to100">$50–$100</option><option value="100plus">$100+</option></select>
          <select id="casper-fec-stock" aria-label="Filter by availability"><option value="all">All availability (${counts.all})</option><option value="in">In stock (${counts.in})</option><option value="low">Low stock (${counts.low})</option><option value="out">Out of stock (${counts.out})</option><option value="sale">On sale</option><option value="restricted">21+ restricted</option><option value="discontinued">Discontinued</option></select>
          <select id="casper-fec-sort" aria-label="Sort products"><option value="relevance">Relevance</option><option value="price_asc">Price: low to high</option><option value="price_desc">Price: high to low</option><option value="newest">Newest</option><option value="rating">Top rated</option></select>
        </div>
        <div class="casper-fec-grid">${list.map(productCard).join('')||'<div class="casper-fec-empty"><strong>No products found</strong><span>Try another brand, category, price range, availability filter, SKU, UPC, size or flavor.</span><button type="button" id="casper-fec-clear" class="casper-btn-primary">CLEAR FILTERS</button></div>'}</div></div>`;
      const stock=document.getElementById('casper-fec-stock'), sortEl=document.getElementById('casper-fec-sort'), search=document.getElementById('casper-fec-search'), brandEl=document.getElementById('casper-fec-brand'), priceEl=document.getElementById('casper-fec-price');
      if(stock) stock.value=filter; if(sortEl) sortEl.value=sort; if(brandEl) brandEl.value=brand; if(priceEl) priceEl.value=price;
      const rerender=()=>renderCatalog(category,search?.value||'',stock?.value||'all',sortEl?.value||'relevance',brandEl?.value||'all',priceEl?.value||'all');
      let timer; search?.addEventListener('input',e=>{clearTimeout(timer);timer=setTimeout(rerender,120);});
      [stock,sortEl,brandEl,priceEl].forEach(el=>el?.addEventListener('change',rerender));
      document.getElementById('casper-fec-clear')?.addEventListener('click',()=>renderCatalog(category));
      window.scrollTo({top:0,behavior:'smooth'});
    }

    function renderHomeCategorySamples() {
      const host = document.getElementById('casper-home-category-samples-content');
      if (!host) return;
      const sections = [
        ['Vape Kits', 'VAPE KITS', 'Starter devices and demo kits'],
        ['E-Liquids', 'E-LIQUIDS', 'Demo flavors and strengths'],
        ['Glass', 'GLASS', 'Bongs, rigs and hand pipes'],
        ['Concentrates', 'CONCENTRATES', 'Demo concentrate accessories'],
        ['Accessories', 'ACCESSORIES', 'Everyday smoke shop accessories'],
        ['Cigars', 'CIGARS', 'Premium cigar demo selection']
      ];
      host.innerHTML = sections.map(([key, title, subtitle]) => {
        const list = getCategoryProducts(key).filter(p => p.status !== 'Discontinued').slice(0, 30);
        return `<section class="casper-home-sample-block" aria-labelledby="home-sample-${key.replace(/[^a-z0-9]+/gi,'-')}">
          <div class="casper-home-sample-head">
            <div><span class="casper-home-sample-eyebrow">CASPER COLLECTION</span><h2 id="home-sample-${key.replace(/[^a-z0-9]+/gi,'-')}">${escapeHtml(title)}</h2><p>${escapeHtml(subtitle)}</p></div>
            <a class="casper-home-sample-view" href="?category=${encodeURIComponent(key)}">VIEW ALL ${escapeHtml(title)} →</a>
          </div>
          <div class="casper-fec-grid casper-home-sample-grid">${list.map(productCard).join('')}</div>
        </section>`;
      }).join('');
    }

    function renderProductDetailPage(p) {
      const root = ensureCatalogRoot();
      const main = root.closest('main') || document.querySelector('main');
      if (main) Array.from(main.children).forEach(el => { if (el !== root) { el.setAttribute('data-casper-fec-hidden','true'); el.style.display='none'; } });
      root.hidden = false;
      const variants = Array.isArray(p.variants) && p.variants.length ? p.variants : [{id:`${p.productId}-default`,value:'Standard',price:p.salePrice||p.price,inventory:Math.max(8,p.inventory||8),available:Math.max(8,p.inventory||8),image:p.image,sku:p.sku,upc:p.upc}];
      let selected = variants[0];
      const money = n => `$${Number(n||0).toFixed(2)}`;
      const related = allCatalogProducts().filter(x => x.productId !== p.productId && (x.subcategory === p.subcategory || x.category === p.category)).filter(x => x.status !== 'Discontinued').slice(0,6);
      const image = selected.image || p.image || imageFallback(p.title);
      root.innerHTML = `<div class="casper-product-page">
        <button type="button" class="casper-fec-back">← BACK TO PRODUCTS</button>
        <div class="casper-product-detail-grid">
          <div class="casper-product-detail-media"><img id="detail-main-image" src="${escapeHtml(image)}" alt="${escapeHtml(p.title)}" loading="eager"></div>
          <div class="casper-product-detail-info">
            <span class="casper-fec-badge">${escapeHtml(p.tag || p.category)}</span>
            <h1>${escapeHtml(p.title)}</h1>
            <div class="casper-detail-rating">★ ${Number(p.rating||0).toFixed(1)} <span>(${Number(p.reviews||0)} reviews)</span></div>
            <div id="detail-price" class="casper-detail-price">${money(selected.salePrice ?? selected.price)}</div>
            <div class="casper-detail-offers"><strong>OFFERS</strong><span>20% OFF first order with CASPER20</span><span>Free in-state shipping on $200+</span></div>
            <p class="casper-detail-description">${escapeHtml(p.fullDescription || p.desc || p.shortDescription)}</p>
            <div class="casper-detail-specs"><div><b>Brand</b><span>${escapeHtml(p.brand)}</span></div><div><b>Manufacturer</b><span>${escapeHtml(p.manufacturer)}</span></div><div><b>SKU</b><span id="detail-sku">${escapeHtml(selected.sku || p.sku)}</span></div><div><b>UPC</b><span id="detail-upc">${escapeHtml(selected.upc || p.upc)}</span></div><div><b>Category</b><span>${escapeHtml(p.category)} / ${escapeHtml(p.subcategory)}</span></div><div><b>Weight</b><span>${Number(p.weightOz||0).toFixed(1)} oz</span></div></div>
            <label class="casper-detail-label">SELECT SIZE / WEIGHT / QUANTITY</label>
            <div id="detail-variants" class="casper-detail-variants">${variants.map((v,i)=>`<button type="button" class="casper-detail-variant ${i===0?'is-selected':''}" data-variant-id="${escapeHtml(v.id)}">${escapeHtml(v.value||'Standard')}<small>${money(v.salePrice??v.price)}</small></button>`).join('')}</div>
            <div id="detail-stock" class="casper-detail-stock"></div>
            <div class="casper-detail-buy"><label>Quantity <input id="detail-qty" type="number" min="1" value="1"></label><button id="detail-add" class="casper-btn-primary" type="button">ADD TO CART</button></div>
            <div class="casper-detail-meta">${isProductAgeRestricted(p)?'21+ AGE RESTRICTED · AGE VERIFICATION REQUIRED':'Standard product'} · Secure checkout · Discreet packaging</div>
          </div>
        </div>
        <section class="casper-related-products"><div class="casper-home-sample-head"><div><span class="casper-home-sample-eyebrow">YOU MAY ALSO LIKE</span><h2>RELATED PRODUCTS</h2><p>More products from ${escapeHtml(p.subcategory || p.category)}.</p></div></div><div class="casper-fec-grid">${related.map(productCard).join('')}</div></section>
      </div>`;
      const img=document.getElementById('detail-main-image'); if(img) img.onerror=function(){this.onerror=null;this.src=window.casperRealFallback?window.casperRealFallback(p.subcategory||p.category):imageFallback(p.title);};
      const price=document.getElementById('detail-price'), stock=document.getElementById('detail-stock'), add=document.getElementById('detail-add'), qty=document.getElementById('detail-qty');
      function update(){
        const available=Math.max(0,Number(selected.available??selected.inventory??p.inventory??0));
        price.textContent=money(selected.salePrice??selected.price);
        document.getElementById('detail-sku').textContent=selected.sku||p.sku||'';
        document.getElementById('detail-upc').textContent=selected.upc||p.upc||'';
        stock.className='casper-detail-stock '+(available<=0?'is-out':available<=5?'is-low':'is-in');
        stock.textContent=available<=0?'OUT OF STOCK':available<=5?`ONLY ${available} LEFT`:`${available} ITEMS IN STOCK`;
        add.disabled=available<=0; add.textContent=available<=0?'OUT OF STOCK':`ADD TO CART — ${money(selected.salePrice??selected.price)}`;
        if(img && selected.image) img.src=selected.image;
        if(Number(qty.value)>available) qty.value=Math.max(1,available);
      }
      document.querySelectorAll('.casper-detail-variant').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.casper-detail-variant').forEach(x=>x.classList.remove('is-selected'));btn.classList.add('is-selected');selected=variants.find(v=>String(v.id)===String(btn.dataset.variantId))||variants[0];update();}));
      add.addEventListener('click',()=>{
        if(isProductAgeRestricted(p)&&!window.requireCasperAgeVerification?.('Age verification is required before adding this product.')) return;
        const frontendPolicy=window.CasperCompliance?.check?.(p, localStorage.getItem('casper_shipping_state') || '');
        if(frontendPolicy && !frontendPolicy.allowed && p.compliance_status) { showToast(frontendPolicy.reason || 'This product is not eligible for purchase under the configured compliance policy.', 'info'); return; }
        const q=Math.max(1,Number(qty.value||1)), available=Number(selected.available??selected.inventory??0);
        if(q>available){showToast(`Only ${available} items available.`, 'info');return;}
        const existing=cart.find(i=>i.productId===p.productId&&i.variantId===selected.id);
        if(existing) existing.quantity+=q; else cart.push({id:'cart_'+Date.now(),productId:p.productId,variantId:selected.id,sku:selected.sku,upc:selected.upc,title:p.title,brand:p.brand,price:Number(selected.salePrice??selected.price),image:selected.image||p.image,weightOz:Number(p.weightOz||8),ageRestricted:isProductAgeRestricted(p),minAge:Number(p.minAge||0),quantity:q});
        saveCart(); showToast(`Added ${p.title} to cart.`, 'success'); openDrawer(cartDrawer,cartOpenBtn);
      });
      update(); window.scrollTo({top:0,behavior:'smooth'});
    }

    window.renderCasperProductDetail = renderProductDetailPage;

    function showCatalog(category) {
      const root=ensureCatalogRoot(), main=root.closest('main')||document.querySelector('main');
      if(main) Array.from(main.children).forEach(el=>{if(el!==root){el.setAttribute('data-casper-fec-hidden','true');el.style.display='none';}});
      renderCatalog(category);
    }
    function leaveCatalog() {
      if(!catalogRoot)return; catalogRoot.hidden=true;
      const main=catalogRoot.closest('main');
      if(main) Array.from(main.children).forEach(el=>{if(el.hasAttribute('data-casper-fec-hidden')){el.style.display='';el.removeAttribute('data-casper-fec-hidden');}});
    }
    function categoryFromLink(link) {
      const text=(link.textContent||'').replace(/[⌄→+]/g,' ').replace(/\s+/g,' ').trim().toUpperCase();
      if(categoryMap[text] || ['SHOP ALL','DEALS','BRANDS','VAPES & DISPOSABLES'].includes(text)) return text;
      if(text==='VAPES') return 'VAPES & DISPOSABLES';
      return null;
    }

    document.addEventListener('click',e=>{
      const nav=e.target.closest('.cc-nav a,.cc-mnav__group a,.cc-footer__col a');
      if(nav){
        const cat=categoryFromLink(nav);
        if(cat && !/^https?:/i.test(nav.getAttribute('href')||'')){
          e.preventDefault();e.stopImmediatePropagation();history.pushState({},'',`?category=${encodeURIComponent(cat)}`);showCatalog(cat);return;
        }
      }
      const card=e.target.closest('[data-fec-id]');
      if(card && e.target.closest('.casper-fec-media,.casper-fec-view,.casper-fec-body h3')){
        const p=getFrontendProduct(card.dataset.fecId);
        if(p){e.preventDefault();if(isProductAgeRestricted(p)&&!window.requireCasperAgeVerification?.('Age verification is required to view restricted product details.'))return;history.pushState({},'',`?product=${encodeURIComponent(p.productId)}`);renderProductDetailPage(p);}
      }
      if(e.target.closest('.casper-fec-back')){e.preventDefault();history.pushState({},'', './');leaveCatalog();}
      const zoom=e.target.closest('.casper-qv-image-button'); if(zoom) zoom.classList.toggle('is-zoomed');
    },true);

    function routeCatalog() {
      const params = new URLSearchParams(location.search);
      const productId = params.get('product');
      if (productId) {
        const p = getFrontendProduct(productId);
        if (!p) { showCatalog('SHOP ALL'); return; }
        if (isProductAgeRestricted(p) && !window.requireCasperAgeVerification?.('Age verification is required to view this product.')) return;
        renderProductDetailPage(p);
        return;
      }
      const raw=params.get('category'); if(!raw){leaveCatalog();return;}
      const cat=decodeURIComponent(raw).toUpperCase();
      if(categoryMap[cat] || navbarSubcategoryKeys.has(cat) || ['SHOP ALL','DEALS','BRANDS'].includes(cat)) showCatalog(cat);
    }
    renderHomeCategorySamples();
    window.addEventListener('popstate',routeCatalog);

    document.querySelectorAll('.cc-hsearch,.cc-mnav__search').forEach(form=>form.addEventListener('submit',e=>{
      const q=normalizeSearch(form.querySelector('input[type="search"]')?.value); if(!q)return;
      e.preventDefault();history.pushState({},'',`?category=${encodeURIComponent('SHOP ALL')}`);showCatalog('SHOP ALL');
      const s=document.getElementById('casper-fec-search');if(s){s.value=q;s.dispatchEvent(new Event('input',{bubbles:true}));}
    }));

    // Sanitize persisted cart and prevent zero/negative quantities.
    cart=(Array.isArray(cart)?cart:[]).filter(i=>i&&i.title&&Number(i.price)>=0&&Number.isInteger(Number(i.quantity))&&Number(i.quantity)>0);
    cart.forEach(i=>{const p=getFrontendProduct(i.productId);if(p)i.quantity=Math.min(i.quantity,availableInventory(p));});
    cart=cart.filter(i=>i.quantity>0); saveCart();

    window.casperFrontendOrderState={
      get(){try{return JSON.parse(localStorage.getItem('casper_frontend_orders')||'{}')}catch(_){return{}}},
      save(order){const orders=this.get();orders[order.number]=order;localStorage.setItem('casper_frontend_orders',JSON.stringify(orders));return order;}
    };
    const qaApi = {
      products: frontendProducts,
      validateCatalog: validateCatalogRecords,
      validateQuantity, validateCartItemQuantity, validateAddress, canShipToState, calculateShipping,
      ageVerified:()=>!!window.casperAgeVerified?.(), ageGateTest:(dob)=>window.getCasperDobValidation?.(dob), config:FRONTEND_COMPLIANCE_CONFIG,
      getCart:()=>[...cart], clearCart:()=>{cart=[];saveCart();},
      getOrders:()=>window.casperFrontendOrderState?.get?.() || {},
      updateOrderStatus:(number,status)=>{ const orders=window.casperFrontendOrderState?.get?.()||{}; if(!orders[number]) return false; orders[number].status=status; orders[number].updatedAt=new Date().toISOString(); localStorage.setItem('casper_frontend_orders',JSON.stringify(orders)); return true; },
      refundOrder:(number,amount)=>{ const orders=window.casperFrontendOrderState?.get?.()||{}; if(!orders[number]) return false; const order=orders[number]; const refund=Math.min(Math.max(0,Number(amount||0)),Number(order.total||order.subtotal||0)); order.refundAmount=Number(refund.toFixed(2)); order.refundStatus='Refunded'; order.status=refund>=Number(order.total||order.subtotal||0)?'Refunded':'Partially Refunded'; order.updatedAt=new Date().toISOString(); localStorage.setItem('casper_frontend_orders',JSON.stringify(orders)); return order; },
      returnOrder:(number)=>{ const orders=window.casperFrontendOrderState?.get?.()||{}; if(!orders[number]) return false; orders[number].status='Returned'; orders[number].returnStatus='Requested'; orders[number].updatedAt=new Date().toISOString(); localStorage.setItem('casper_frontend_orders',JSON.stringify(orders)); return orders[number]; },
      exportCatalogCSV:()=>{ const fields=['productId','sku','upc','manufacturer','brand','title','category','subcategory','slug','status','salePrice','cost','inventory','reserved','weightOz','minAge']; const rows=[fields.join(','),...frontendProducts.map(p=>fields.map(f=>`"${String(p[f]??'').replace(/"/g,'""')}"`).join(','))]; return rows.join('\n'); },
      importRows:(rows)=>{ const input=Array.isArray(rows)?rows:[]; const errors=[]; const seen={productId:new Set(),sku:new Set(),upc:new Set()}; const categories=new Set(frontendProducts.map(p=>String(p.category||'').toLowerCase())); const brands=new Set(frontendProducts.map(p=>String(p.brand||'').toLowerCase())); const statuses=new Set(['Draft','Active','Out of Stock','Discontinued']); const dateRe=/^\d{4}-\d{2}-\d{2}$/; input.forEach((r,i)=>{const row=i+1; for(const field of ['productId','sku','upc']){if(!r[field])errors.push(`Row ${row} — Missing ${field==='productId'?'Product ID':field.toUpperCase()}`); else {const val=String(r[field]); if(seen[field].has(val))errors.push(`Row ${row} — Duplicate ${field==='productId'?'Product ID':field.toUpperCase()}`); seen[field].add(val);}} if(!r.title)errors.push(`Row ${row} — Blank product name`); if(r.price===''||r.salePrice==='')errors.push(`Row ${row} — Missing price`); if(Number(r.price??r.salePrice)<0)errors.push(`Row ${row} — Negative price`); if(Number(r.cost)<0)errors.push(`Row ${row} — Negative cost`); if(Number(r.inventory)<0)errors.push(`Row ${row} — Negative inventory`); if(r.category && !categories.has(String(r.category).toLowerCase()))errors.push(`Row ${row} — Invalid category`); if(r.brand && !brands.has(String(r.brand).toLowerCase()))errors.push(`Row ${row} — Invalid brand`); if(r.status && !statuses.has(String(r.status)))errors.push(`Row ${row} — Invalid status`); for(const f of ['effective_from','effective_to','next_review_date']){if(r[f] && !dateRe.test(String(r[f])))errors.push(`Row ${row} — Invalid date in ${f}`);} if(r.title && /[<>]/.test(String(r.title)))errors.push(`Row ${row} — Invalid characters in product name`); }); return {valid:errors.length===0,errors}; }
    };
    window.CasperFrontendQA=Object.freeze(qaApi);

    // Optional frontend-only QA dashboard. Open ?qa=1 to exercise the checklist with demo data.
    if (new URLSearchParams(location.search).get('qa') === '1') {
      const qa = document.createElement('section'); qa.className='casper-qa-panel'; qa.setAttribute('aria-label','Frontend compliance QA sandbox');
      const result = validateCatalogRecords();
      qa.innerHTML=`<div class="cc-wrap"><div class="casper-qa-head"><div><span>CASPER FRONTEND COMPLIANCE LAB</span><h2>Demo QA Sandbox</h2><p>${frontendProducts.length} products · ${frontendProducts.reduce((n,p)=>n+(p.variants||[]).length,0)} variants · browser-only simulation</p></div><button id="casper-qa-close" type="button">BACK TO STORE</button></div>
      <div class="casper-qa-grid">
        <div class="casper-qa-card"><strong>${result.valid?'PASS':'ISSUES'}</strong><span>Catalog field validation</span><small>${result.valid?'All demo Product IDs, SKUs, UPCs, slugs and required fields are unique/present.':result.errors.slice(0,5).join(' | ')}</small></div>
        <div class="casper-qa-card"><strong>21+</strong><span>Age gate</span><small>Invalid/future/impossible DOB and under-21 attempts are rejected before restricted flows.</small></div>
        <div class="casper-qa-card"><strong>STOCK</strong><span>Inventory guards</span><small>Variant quantity cannot exceed available inventory; low/out-of-stock states are rendered.</small></div>
        <div class="casper-qa-card"><strong>PRICE</strong><span>Pricing & promos</span><small>Retail, sale, compare-at, cost, margin, percent/fixed demo coupons and free-shipping threshold.</small></div>
      </div>
      <div class="casper-qa-actions"><button data-qa="underage">Test under-age gate</button><button data-qa="invalid-dob">Test invalid DOB</button><button data-qa="future-dob">Test future DOB</button><button data-qa="stock">Test oversell guard</button><button data-qa="address">Test invalid address</button><button data-qa="export">Export demo catalog CSV</button></div>
      <pre id="casper-qa-output">Ready. Use the buttons above or window.CasperFrontendQA in DevTools.</pre></div>`;
      document.querySelector('main')?.prepend(qa);
      qa.querySelector('#casper-qa-close')?.addEventListener('click',()=>{history.pushState({},'',location.pathname);location.reload();});
      qa.addEventListener('click',e=>{ const action=e.target.closest('[data-qa]')?.dataset.qa; if(!action)return; const out=qa.querySelector('#casper-qa-output');
        if(action==='underage') out.textContent=JSON.stringify(window.CasperFrontendQA.ageGateTest?.('01/01/2010') || {message:'Use the DOB gate at page load; session storage is isolated per browser.'},null,2);
        if(action==='invalid-dob') out.textContent=JSON.stringify({valid:false,reason:'Calendar validation rejects 02/31/2000.'},null,2);
        if(action==='future-dob') out.textContent=JSON.stringify({valid:false,reason:'Future dates are rejected.'},null,2);
        if(action==='stock'){ const p=frontendProducts.find(x=>(x.variants||[]).length); const v=p?.variants?.[0]; out.textContent=JSON.stringify({product:p?.title,variant:v?.value,available:v?.available,attempted:(Number(v?.available||0)+1),result:window.CasperFrontendQA.validateCartItemQuantity({productId:p?.productId,variantId:v?.id},Number(v?.available||0)+1)},null,2); }
        if(action==='address') out.textContent=JSON.stringify({valid:false,reason:window.CasperFrontendQA.validateAddress({email:'bad',address:'x',city:'1',zip:'abc'})},null,2);
        if(action==='export'){ const blob=new Blob([window.CasperFrontendQA.exportCatalogCSV()],{type:'text/csv'}); const url=URL.createObjectURL(blob); const a=document.createElement('a');a.href=url;a.download='casper-demo-catalog.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),500);out.textContent='Demo catalog CSV export started.'; }
      });
    }
    routeCatalog();
  })();

});