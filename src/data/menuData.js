// Import dish images
import crabCurryImg from '../assets/picture/southern_crab_curry.jpg';
import shortRibImg from '../assets/picture/thai_short_rib.jpg';
import padThaiImg from '../assets/picture/padthai.jpg';
import cocktailImg from '../assets/picture/mayree_craft_cocktail.jpg';
import bgImg2 from '../assets/picture/mayree_bg2.png';
import bgImg3 from '../assets/picture/mayree_bg3.png';

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Full Menu' },
  { id: 'curries', label: 'Southern Curries' },
  { id: 'signatures', label: "Chef's Signatures" },
  { id: 'noodles', label: 'Noodles & Rice' },
  { id: 'small_plates', label: 'Small Bites & Crudo' },
  { id: 'cocktails', label: 'Bespoke Cocktails' },
  { id: 'desserts', label: 'Desserts' },
];

export const MENU_ITEMS = [
  // Southern Curries
  {
    id: 'dish-1',
    name: 'Gaeng Pu Bai Cha Plu',
    thaiName: 'แกงปูใบชะพลู',
    category: 'curries',
    price: 36,
    spicyLevel: 3,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Gluten-Free', 'Shellfish'],
    image: crabCurryImg,
    description: 'Signature Southern Thai jumbo lump crab curry with wild betel leaves, fresh yellow turmeric, hand-pressed coconut cream, and aromatic lemongrass. Served with steamed jasmine rice or vermicelli.',
    pairing: 'Dry Riesling or Siam Dusk Cocktail'
  },
  {
    id: 'dish-2',
    name: 'Massaman Beef Short Rib',
    thaiName: 'มัสมั่นเนื้อแกะ',
    category: 'curries',
    price: 38,
    spicyLevel: 1,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Gluten-Free', 'Contains Peanuts'],
    image: shortRibImg,
    description: '12-hour slow-braised prime beef short rib in an opulent Massaman curry spiced with cardamom, cinnamon, star anise, baby Dutch potatoes, charred pearl onions, and toasted peanuts.',
    pairing: 'Pinot Noir or Smoked Chili Old Fashioned'
  },
  {
    id: 'dish-3',
    name: 'Gaeng Tai Pla',
    thaiName: 'แกงไตปลา',
    category: 'curries',
    price: 30,
    spicyLevel: 4,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Gluten-Free', 'Fish Sauce'],
    image: crabCurryImg,
    description: 'The quintessential Southern Thai fermented fish entrail curry with smoked king mackerel, bamboo shoots, yardlong beans, baby eggplant, and blistering bird’s eye chilies. Uncompromisingly authentic.',
    pairing: 'Crisp Singha Lager or Cold Coconut Water'
  },
  {
    id: 'dish-4',
    name: 'Southern Yellow Fish Curry',
    thaiName: 'แกงส้มปลากะพง',
    category: 'curries',
    price: 32,
    spicyLevel: 3,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Gluten-Free', 'Seafood'],
    image: bgImg3,
    description: 'Crisp wild Chilean sea bass simmered in a tart and fiery Southern turmeric tamarind broth with green papaya, elephant ear stems, and pickled bamboo shoots.',
    pairing: 'Sauvignon Blanc or Lemongrass Fizz'
  },

  // Chef's Signatures
  {
    id: 'dish-5',
    name: 'Hat Yai Fried Chicken',
    thaiName: 'ไก่ทอดหาดใหญ่',
    category: 'signatures',
    price: 26,
    spicyLevel: 1,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Contains Gluten', 'Crispy Shallots'],
    image: bgImg2,
    description: 'Crispy heritage chicken marinated with coriander root, white peppercorn, and dark soy, topped with an avalanche of golden fried shallots. Served with house sweet-chili dipping sauce and sticky rice.',
    pairing: 'Craft IPA or Phuket Breeze'
  },
  {
    id: 'dish-6',
    name: 'Pla Tod Kamin',
    thaiName: 'ปลาทอดขมิ้น',
    category: 'signatures',
    price: 34,
    spicyLevel: 2,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Gluten-Free', 'Seafood'],
    image: bgImg3,
    description: 'Whole crispy Mediterranean bronzini encrusted with fresh crushed Southern turmeric, sea salt, and crispy garlic chips. Served with fiery Nam Jim seafood dipping sauce.',
    pairing: 'Sparkling Cava or Lychee Spritz'
  },
  {
    id: 'dish-7',
    name: 'Khua Kling Moo',
    thaiName: 'คั่วกลิ้งหมู',
    category: 'signatures',
    price: 25,
    spicyLevel: 4,
    isChefSpecial: false,
    isMichelin: true,
    dietary: ['Gluten-Free', 'Dairy-Free'],
    image: shortRibImg,
    description: 'Dry-fried Southern Thai minced pork with house-pounded curry paste, thinly julienned makrut lime leaves, green peppercorns, and fresh herbs. Extremely bold and fragrant.',
    pairing: 'Thai Milk Tea or Off-Dry Riesling'
  },

  // Noodles & Rice
  {
    id: 'dish-8',
    name: 'Mayree Signature Pad Thai',
    thaiName: 'ผัดไทยสูตรพิเศษ',
    category: 'noodles',
    price: 24,
    spicyLevel: 1,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Gluten-Free', 'Nut-Free Option'],
    image: padThaiImg,
    description: 'Artisanal rice noodles stir-fried in a 6-hour simmered tamarind palm sugar glaze with jumbo tiger prawns, pressed pressed tofu, sweet radish, chives, bean sprouts, crushed peanuts, and wrapped in an egg crepe.',
    pairing: 'Crisp Rosé or Thai Basil Smash'
  },
  {
    id: 'dish-9',
    name: 'Southern Crab Fried Rice',
    thaiName: 'ข้าวผัดปู',
    category: 'noodles',
    price: 29,
    spicyLevel: 1,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Gluten-Free', 'Shellfish'],
    image: crabCurryImg,
    description: 'Fragrant jasmine rice wok-charred with colossal lump blue crab, organic eggs, scallions, cilantro, white pepper, and served with house Prik Nam Pla (bird’s eye chili lime fish sauce).',
    pairing: 'Chablis or East Village Mule'
  },
  {
    id: 'dish-10',
    name: 'Pad Kee Mao (Drunken Noodles)',
    thaiName: 'ผัดขี้เมาซีฟู้ด',
    category: 'noodles',
    price: 26,
    spicyLevel: 3,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Dairy-Free', 'Spicy'],
    image: padThaiImg,
    description: 'Broad rice noodles wok-seared with wild squid, colossal shrimp, holy basil, young green peppercorns, garlic, baby corn, and fiery Thai chilies with deep wok-hei smoke.',
    pairing: 'Mayree Chili Cocktail or Cold Beer'
  },

  // Small Bites & Crudo
  {
    id: 'dish-11',
    name: 'Thai Snapper Crudo',
    thaiName: 'ก้อยปลาสด',
    category: 'small_plates',
    price: 21,
    spicyLevel: 2,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Raw Seafood', 'Gluten-Free'],
    image: bgImg3,
    description: 'Sashimi-grade red snapper thinly sliced with bird’s eye chili lemongrass vinaigrette, toasted rice powder, micro cilantro, makrut lime oil, and crispy shallot pearls.',
    pairing: 'Siam Dusk Cocktail or Champagne'
  },
  {
    id: 'dish-12',
    name: 'Miang Kham Betel Leaf Wraps',
    thaiName: 'เมี่ยงคำ',
    category: 'small_plates',
    price: 18,
    spicyLevel: 1,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Gluten-Free', 'Vegetarian Available'],
    image: bgImg2,
    description: 'Traditional Royal Thai appetizer: fresh wild betel leaves filled with toasted coconut flakes, dried baby shrimp, ginger, lime wedges, shallots, peanuts, and rich caramelized palm sugar sauce.',
    pairing: 'Gin Tonic or Prosecco'
  },
  {
    id: 'dish-13',
    name: 'Southern Grilled Pork Skewers (Moo Ping)',
    thaiName: 'หมูปิ้งโบราณ',
    category: 'small_plates',
    price: 17,
    spicyLevel: 1,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Dairy-Free', 'Gluten-Free'],
    image: shortRibImg,
    description: 'Charcoal-grilled heritage pork shoulder glazed with coconut milk, palm sugar, garlic, and cilantro roots. Served with spicy toasted rice tamarind sauce (Jaew).',
    pairing: 'Smoked Old Fashioned'
  },

  // Bespoke Cocktails
  {
    id: 'dish-14',
    name: 'Siam Dusk (Signature)',
    thaiName: 'สยามดัสก์',
    category: 'cocktails',
    price: 19,
    spicyLevel: 0,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Cocktail', 'Contains Alcohol'],
    image: cocktailImg,
    description: 'Butterfly pea infused botanical gin, charred lemongrass cordial, makrut lime tincture, elderflower liqueur, topped with dry sparkling wine and edible 24k gold leaf.',
    pairing: 'Pairs perfectly with Snapper Crudo or Crab Curry'
  },
  {
    id: 'dish-15',
    name: 'Smoked Bird’s Eye Old Fashioned',
    thaiName: 'โอลด์แฟชั่นรมควันพริกไทย',
    category: 'cocktails',
    price: 20,
    spicyLevel: 1,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Cocktail', 'Contains Alcohol'],
    image: cocktailImg,
    description: 'Rye whiskey infused with roasted Thai bird’s eye chilies and star anise, organic smoked coconut palm sugar, aromatic bitters, served over hand-carved ice sphere with flamed orange twist.',
    pairing: 'Pairs with Massaman Short Rib'
  },
  {
    id: 'dish-16',
    name: 'Bangkok Nights Clarified Milk Punch',
    thaiName: 'บางกอกไนท์ มิลค์พันช์',
    category: 'cocktails',
    price: 19,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Cocktail', 'Dairy Processed (Clarified)'],
    image: cocktailImg,
    description: 'Aged Mekhong spiced rum, fresh pineapple, roasted pandan leaf tea, lime, clarified with coconut milk for an ultra-silky, crystal-clear tropical experience.',
    pairing: 'Pairs with Pad Thai or Hat Yai Chicken'
  },
  {
    id: 'dish-17',
    name: 'Phuket Breeze',
    thaiName: 'ภูเก็ตบรีซ',
    category: 'cocktails',
    price: 18,
    spicyLevel: 1,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Cocktail', 'Contains Alcohol'],
    image: cocktailImg,
    description: 'Blanco tequila, passionfruit puree, fresh Thai basil, lime juice, agave nectar, rimmed with roasted Thai chili salt and lime zest.',
    pairing: 'Pairs with Fried Whole Fish or Noodles'
  },

  // Desserts
  {
    id: 'dish-18',
    name: 'Butterfly Pea Mango Sticky Rice',
    thaiName: 'ข้าวเหนียวมะม่วงอัญชัน',
    category: 'desserts',
    price: 15,
    spicyLevel: 0,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Gluten-Free', 'Vegan'],
    image: bgImg2,
    description: 'Sweet coconut sticky rice naturally tinted royal indigo with butterfly pea flowers, served with sweet ripened Nam Dok Mai mango slices, warm salted coconut cream, and crispy mung bean pearls.',
    pairing: 'Pandan Iced Tea or Dessert Wine'
  },
  {
    id: 'dish-19',
    name: 'Thai Tea Mille Crepe Cake',
    thaiName: 'เค้กเครปชาไทย',
    category: 'desserts',
    price: 14,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Vegetarian', 'Contains Dairy'],
    image: bgImg3,
    description: 'Twenty layers of delicate paper-thin crepes stacked with fragrant Thai iced tea infused diplomat cream, drizzled with warm condensed milk reduction.',
    pairing: 'Espresso or Hot Lemongrass Tea'
  }
];

export const REVIEWS = [
  {
    source: 'The Michelin Guide',
    quote: 'Recognized for culinary excellence, MayRee delivers an uncompromising, fiery homage to Southern Thai culinary traditions with soulful depth and intoxicating cocktail pairings.',
    author: 'Michelin Inspector',
    stars: 5,
    badge: 'Michelin Guide 2024'
  },
  {
    source: 'The New York Times',
    quote: 'The Gaeng Pu (crab curry) at Mayree is nothing short of transcendent—rich with fresh coconut cream, vibrant turmeric, and succulent lump crab. An East Village jewel.',
    author: 'Pete Wells / NYT Dining',
    stars: 5,
    badge: 'Critics’ Pick'
  },
  {
    source: 'Eater NY',
    quote: 'Mayree sets a new benchmark for NYC Thai dining, fusing the blistering, aromatic flavors of Southern Thailand with world-class craft cocktail mixology.',
    author: 'Robert Sietsema',
    stars: 5,
    badge: 'Essential 38'
  },
  {
    source: 'Verified Diner',
    quote: 'Hands down the best Thai meal I have had in New York City. The Massaman short rib melts in your mouth and the cocktails are true works of art. Beautiful ambiance!',
    author: 'Chloe L. • East Village Local',
    stars: 5,
    badge: 'Verified Guest Review'
  }
];

export const RESTAURANT_INFO = {
  name: 'MayRee',
  tagline: 'Michelin Recognized Southern Thai Kitchen & Bespoke Cocktail Bar',
  address: '58 East 1st Street, New York, NY 10003',
  neighborhood: 'East Village, Manhattan',
  phone: '(929) 989-6213',
  email: 'mayree58east@gmail.com',
  instagram: 'https://www.instagram.com/mayreenyc/',
  tiktok: 'https://www.tiktok.com/@mayreenyc',
  facebook: 'https://www.facebook.com/mayreeny',
  hours: [
    { days: 'Monday – Thursday', time: '12:00 PM – 4:00 PM, 5:00 PM – 10:00 PM' },
    { days: 'Friday', time: '12:00 PM – 4:00 PM, 5:00 PM – 10:00 PM' },
    { days: 'Saturday', time: '12:00 PM – 10:30 PM' },
    { days: 'Sunday', time: '12:00 PM – 10:30 PM' },
    { days: 'Happy Hour (Daily)', time: '5:00 PM – 7:00 PM' },
  ],
  transit: 'F train to 2nd Avenue (1 min walk), 6 train to Bleecker St / Astor Pl (5 min walk)'
};
