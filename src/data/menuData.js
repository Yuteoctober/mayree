// Import authentic high-resolution MayRee dish images (1MB - 5.7MB master quality)
import jorRangImg from '../assets/picture/dishes/jor_rang.jpg';
import gaiTodImg from '../assets/picture/dishes/gai_tod_hat_yai.jpg';
import kraProwImg from '../assets/picture/dishes/kra_prow.jpg';
import khaoPadPuuImg from '../assets/picture/dishes/khao_pad_puu.jpg';
import kuaKlingImg from '../assets/picture/dishes/kuakling.jpg';
import padThaiHorKhaiImg from '../assets/picture/dishes/pad_thai_hor_khai.jpg';
import padPongKareeImg from '../assets/picture/dishes/pad_pong_karee_talay.jpg';
import padPedKraDookImg from '../assets/picture/dishes/pad_ped_kra_dook_moo.jpg';
import edamameImg from '../assets/picture/dishes/edamame.jpg';
import friedTofuImg from '../assets/picture/dishes/fried_tofu.jpg';
import springRollImg from '../assets/picture/dishes/spring_roll.jpg';
import parkMorImg from '../assets/picture/dishes/park_mor.jpg';
import hedTodImg from '../assets/picture/dishes/hed_tod.jpg';
import rotiMatabaImg from '../assets/picture/dishes/roti_mataba.jpg';
import baconHorNamImg from '../assets/picture/dishes/bacon_hor_nam.jpg';
import namWoonSenImg from '../assets/picture/dishes/nam_woon_sen.jpg';
import enGaiTodImg from '../assets/picture/dishes/en_gai_tod.jpg';
import peekGaiTodImg from '../assets/picture/dishes/peek_gai_tod.jpg';
import gaiGorLaeImg from '../assets/picture/dishes/gai_gor_lae.jpg';
import goongChaeNamPlaImg from '../assets/picture/dishes/goong_chae_nam_pla.jpg';
import tomYumGoongImg from '../assets/picture/dishes/tom_yum_goong.jpg';
import tomKhaGaiImg from '../assets/picture/dishes/tom_kha_gai.jpg';
import gaiTomKaminImg from '../assets/picture/dishes/gai_tom_kamin.jpg';
import kengJeidImg from '../assets/picture/dishes/keng_jeid.jpg';
import thaiGardenSaladImg from '../assets/picture/dishes/thai_garden_salad.jpg';
import somtumImg from '../assets/picture/dishes/somtum.jpg';
import yumWoonSenImg from '../assets/picture/dishes/yum_woon_sen.jpg';
import yumHuaPleeImg from '../assets/picture/dishes/yum_hua_plee.jpg';
import larbImg from '../assets/picture/dishes/larb.jpg';
import grilledShrimpMangoSaladImg from '../assets/picture/dishes/grilled_shrimp_mango_salad.jpg';

const externalDishImages = {
  kaengPhedPed: 'https://chefcares.org/uploads/source/15/Foodshot/food_1200x900px_redcurryduck.jpg',
  meeKaeng: 'https://www.prapaipat.com/cdn/shop/articles/514886CC-6F33-416C-9CC5-E849CAAF34F3.png?v=1774626298',
  keeMaoTalay: 'https://www.simplysuwanee.com/wp-content/uploads/2024/02/thai-spaghetti-3.jpg',
  padMeeKati: 'https://www.healthychefoil.com/uploaded/recipe/thumb/201201-133544-c.jpg',
  khaoMokGai: 'https://cdn.resepichenom.com/images/recipes/7eafee48-510d-4bd9-b743-5fd379a88b8f-1c65873c-016e-452a-b384-80d672a4f693-enhanced-1773205596837-u4lz-1024.webp',
  khaoNarPed: 'https://d1w7312wesee68.cloudfront.net/kJN4vFGg9OykK_YumbmV62CV6MG-aebl0kvJG7vB5qU/resize%3Afit%3A720%3A720/plain/s3%3A/toasttab/menu_service/restaurants/380f55bd-f10d-4e13-87c9-3bcac0681f30/MenuItem/9e32788e-464d-408b-88e5-b629d6d3f581.png',
  padKeeMao: 'https://static.wixstatic.com/media/dd4600_c569652956934e239fedcba18872c2ec~mv2.jpg',
  padSeeEw: 'https://images.squarespace-cdn.com/content/v1/5eeafd02c67e7b3555a8354a/1632309421400-E9DKV3FNRZWKTL3QJTY6/Pad-See-Ew-Thai-Noodles_3.jpg',
  kuaGai: 'https://images.deliveryhero.io/image/fd-ph/Products/5377752.jpg?width=1000',
  thaiFriedRice: 'https://static.wixstatic.com/media/dc2b55_55ad2bc9ac164d60a594cc97c257f8fa~mv2.jpg',
  pineappleFriedRice: 'https://www.restaurant-pattaya.at/uploads/kVdkw7B2/WhatsAppImage2025-01-09at16.45.422_511__msi___jpeg.jpeg',
  spicyBasilFriedRice: 'https://static.wixstatic.com/media/c3e23b_add0f9d7a0004ddb88ecfb322f689dc8~mv2.webp',
  greenCurry: 'https://houseofcasserole.com.au/cdn/shop/products/GreenThaiCurrySpiceMix_2.png?v=1687262639&width=1445',
  plaLouiSuan: 'https://files.thailandtourismdirectory.go.th/assets/upload/2023/5/8/c473c0a7-0e43-4e82-aa98-91d23b4ea904.jpg',
  plaRadPrik: 'https://images.pickyourtrail.com/Pla_rad_prik_b77719c365.jpeg?auto=format&fit=crop&q=90&w=1600',
  mangoStickyRice: 'https://www.citysearch.ae/uf/albums/41034/coco-mango-jumeirah-dubai_26.jpg',
  coconutIceCream: 'https://img.wongnai.com/p/1920x0/2019/04/06/7946980bfba949b295aeb248aba82bad.jpg',
  friedIceCream: 'https://cdn2.relax-fm.ru/proxy/vardata/modules/news/files/1/4091/news_file_4091_696f4a0a0de34.png?h=680&pos=center&q=100&t=1768901123&w=1020'
};

const externalDrinkImages = {
  matesara: 'https://d2uqlwridla7kt.cloudfront.net/recipe-media/recipe-2m7asa1ma/ro2jw2m7asa55g/captain-s-sour-png',
  budsara: 'https://www.chowhound.com/img/gallery/the-best-type-of-alcohol-to-pair-with-canada-drys-blackberry-ginger-ale/cocktail-considerations-for-canada-dry-blackberry-1741121148.jpg',
  paga: 'https://cdn7.kiwilimon.com/ss_secreto/3402/640x640/p_21470.jpg.webp',
  malai: 'https://cdn.pratico-pratiques.com/app/uploads/sites/2/2018/12/04121245/flotteurs-ananas-coco-epicee.jpg',
  prysob: 'https://www.bargpt.app/_next/image?q=75&url=https%3A%2F%2Fheybairtender.s3.amazonaws.com%2Frecipes%2Fmango-mirage9700_GPT1.png&w=3840',
  morrakot: 'https://images.cookjunkie.com/recipes/a1fc61ca7be419d02cf0f1025b62ae9fe0f0261408d354122351d924bdfa6579.jpg',
  saowarat: 'https://www.kikoriwhiskey.com/images/wpImages/green-tea-matcha-highball.jpg',
  benjawan: 'https://gastronomiapalacio.com/cdn/shop/files/galeria-mezcaleria_500x.jpg?v=1680722281',
  malee: 'https://heybairtender.s3.amazonaws.com/recipes/hibiscus-elixir.png',
  kesaorn: 'https://nyc3.digitaloceanspaces.com/arcadia-media/2020/05/Secret-Passion.jpg',
  lumpao: 'https://assets.epicurious.com/photos/64a709def0a537ecfb046bcc/master/w_1600%2Cc_limit/AngosturaFizz_IG_062923_56127.jpg',
  manee: 'https://www.bargpt.app/_next/image?q=75&url=https%3A%2F%2Fheybairtender.s3.amazonaws.com%2Frecipes%2Femerald-saigon-sling.png&w=3840'
};

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Full Menu' },
  { id: 'signatures', label: 'MayRee Signatures' },
  { id: 'classics', label: 'MayRee Classics' },
  { id: 'specials', label: 'MayRee Specials' },
  { id: 'appetizers', label: 'Appetizers' },
  { id: 'soups', label: 'Soups' },
  { id: 'salads', label: 'Salads' },
  { id: 'cocktails', label: 'Signature Cocktails' },
  { id: 'desserts', label: 'Desserts' },
];

export const MENU_ITEMS = [
  // ==========================================
  // 1. MayRee Signatures
  // ==========================================
  {
    id: 'sig-1',
    name: 'Jor Rang',
    thaiName: 'แกงจอรัง',
    category: 'signatures',
    price: 25,
    spicyLevel: 3,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Gluten-Free', 'Shellfish'],
    image: jorRangImg,
    description: 'Southern style curry with shrimps, coconut milk, fresh turmeric, lemongrass, shallot, shrimp paste and bell pepper served with jasmine rice and fresh salad.',
    pairing: 'Morrakot or Singha Lager'
  },
  {
    id: 'sig-2',
    name: 'Roti Nam Keang (V)',
    thaiName: 'โรตีน้ำแกง',
    category: 'signatures',
    price: 23,
    spicyLevel: 2,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Vegetarian Option', 'Contains Peanuts'],
    image: rotiMatabaImg,
    description: 'Southern Thai style massaman curry with potato, onion, peanut, coconut milk topped with fried shallot served with pan fried roti with a choice of Chicken or Tofu. Substitution : Beef for $3.00 Extra.',
    pairing: 'Matesara or Pinot Noir'
  },
  {
    id: 'sig-3',
    name: 'Gai Tod Hat Yai',
    thaiName: 'ไก่ทอดหาดใหญ่',
    category: 'signatures',
    price: 21,
    spicyLevel: 1,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Crispy Shallots', 'House Specialty'],
    image: gaiTodImg,
    description: 'Deep fried chicken Southern style with Thai spices battered topped with fried onion and fried garlic served with sweet chili sauce, house made spicy tamarind sauce and sticky rice.',
    pairing: 'Brooklyn IPA or Singha Beer'
  },
  {
    id: 'sig-4',
    name: 'Kee Mao Talay',
    thaiName: 'ขี้เมาทะเล',
    category: 'signatures',
    price: 29,
    spicyLevel: 3,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Seafood', 'Spicy Herbs'],
    image: externalDishImages.keeMaoTalay,
    description: 'Sautéed spaghetti with shrimps, squids, mussels, fresh basil, onion, fresh green pepper corn, bell pepper and chili in a spicy basil sauce.',
    pairing: 'Benjawan or Sauvignon Blanc'
  },
  {
    id: 'sig-5',
    name: 'Pad Mee Kati (GF)',
    thaiName: 'ผัดหมี่กะทิ',
    category: 'signatures',
    price: 27,
    spicyLevel: 2,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Gluten-Free', 'Crabmeat'],
    image: externalDishImages.padMeeKati,
    description: 'Sautéed vermicelli noodle with lump crab meat, Southern Thai style with coconut milk, dried chili pepper, shallot, bean sprout and chive topped with green mango, crabmeat and omelet.',
    pairing: 'Manee or Sparkling Prosecco'
  },
  {
    id: 'sig-6',
    name: 'Kra Prow',
    thaiName: 'กะเพรา',
    category: 'signatures',
    price: 23,
    spicyLevel: 3,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Spicy Holy Basil', 'Fried Egg'],
    image: kraProwImg,
    description: 'Sautéed spicy basil sauce with ground chicken or ground pork, fresh Thai basil, chili pepper, garlic, string bean and onion served with jasmine rice and fried egg on top. Substitution : Beef for $3.00 Extra.',
    pairing: 'Saowarat or Singha Beer'
  },
  {
    id: 'sig-7',
    name: 'Khao Pad Puu',
    thaiName: 'ข้าวผัดปู',
    category: 'signatures',
    price: 27,
    spicyLevel: 1,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Lump Crab', 'Gluten-Free Option'],
    image: khaoPadPuuImg,
    description: 'Fried rice with lump crab meat, egg, garlic, green onion served with house spicy sauce.',
    pairing: 'Pinot Grigio or Manee'
  },
  {
    id: 'sig-8',
    name: 'KuaKling',
    thaiName: 'คั่วกลิ้ง',
    category: 'signatures',
    price: 23,
    spicyLevel: 4,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Southern Spices', 'Michelin Feature'],
    image: kuaKlingImg,
    description: 'Southern style roasted curry paste with ground pork, kaffir lime leaf and Thai chili served with jasmine rice and fried egg on top. Substitution: Ground Beef for $3.00 Extra.',
    pairing: 'Coconut Ice Cream or Cold Singha'
  },
  {
    id: 'sig-9',
    name: 'Khao Mok Gai (GF)',
    thaiName: 'ข้าวหมกไก่',
    category: 'signatures',
    price: 21,
    spicyLevel: 1,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Gluten-Free', 'Spiced Turmeric Rice'],
    image: externalDishImages.khaoMokGai,
    description: 'Marinated chicken over turmeric curry rice served with house special sauce topped with fried onion.',
    pairing: 'Chardonnay or Saowarat'
  },
  {
    id: 'sig-10',
    name: 'Kaeng Phed Ped',
    thaiName: 'แกงเผ็ดเป็ดย่าง',
    category: 'signatures',
    price: 31,
    spicyLevel: 3,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Roasted Duck', 'Tropical Fruit'],
    image: externalDishImages.kaengPhedPed,
    description: 'Roasted duck curry with pineapple, lychee, tomato, chili paste and coconut milk served with jasmine rice.',
    pairing: 'Cabernet Sauvignon or Matesara'
  },
  {
    id: 'sig-11',
    name: 'Pad Thai Hor Khai',
    thaiName: 'ผัดไทยห่อไข่',
    category: 'signatures',
    price: 25,
    spicyLevel: 1,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Omelet Wrapped', 'Contains Peanuts'],
    image: padThaiHorKhaiImg,
    description: 'Sautéed rice noodle with shrimps, house made tamarind sauce, egg, peanut, beansprout, bean curd and chive wrapped with omelet.',
    pairing: 'Manee or Villa Jolanda Prosecco'
  },
  {
    id: 'sig-12',
    name: 'Khao Nar Ped',
    thaiName: 'ข้าวหน้าเป็ด',
    category: 'signatures',
    price: 23,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Roasted Duck', 'House Gravy'],
    image: externalDishImages.khaoNarPed,
    description: 'Roasted duck over jasmine rice with yu choy, pickled ginger and topped with house gravy.',
    pairing: 'Pinot Noir or Matesara'
  },
  {
    id: 'sig-13',
    name: 'Pad Pong Karee Talay',
    thaiName: 'ผัดผงกะหรี่ทะเล',
    category: 'signatures',
    price: 31,
    spicyLevel: 2,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Seafood', 'Aromatic Curry Powder'],
    image: padPongKareeImg,
    description: 'Southern Thai Chinese creamy and aromatic curry powder sauce stir fried with shrimps, squids, mussels, scallion, Chinese celery, bell pepper and onion served with jasmine rice.',
    pairing: 'Sauvignon Blanc or Budsara'
  },
  {
    id: 'sig-14',
    name: 'Pad Ped Kra Dook Moo',
    thaiName: 'ผัดเผ็ดกระดูกหมู',
    category: 'signatures',
    price: 23,
    spicyLevel: 4,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Tender Ribs', 'Southern Chili Paste'],
    image: padPedKraDookImg,
    description: 'Tender pork ribs stir fried with a spicy chili paste, fragrant herbs, green peppercorns, kaffir lime leaves served with jasmine rice.',
    pairing: 'Singha Beer or Malee'
  },
  {
    id: 'sig-15',
    name: 'Mee Kaeng (GF)',
    thaiName: 'หมี่แกงเบตง',
    category: 'signatures',
    price: 21,
    spicyLevel: 2,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Gluten-Free', 'Betong Red Curry'],
    image: externalDishImages.meeKaeng,
    description: 'Betong style red curry noodle soup with green squash, bean sprouts, scallion topped with fried garlic with choice of Chicken or Tofu. Substitution : Beef or Shrimp for $3.',
    pairing: 'Saowarat or Dry Riesling'
  },

  // ==========================================
  // 2. MayRee Classics
  // ==========================================
  {
    id: 'cls-1',
    name: 'Pad Kee Mao',
    thaiName: 'ผัดขี้เมา',
    category: 'classics',
    price: 18.95,
    spicyLevel: 3,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Broad Noodles', 'Fresh Basil & Chili'],
    image: externalDishImages.padKeeMao,
    description: 'Stir fried wide noodle with egg, bell pepper, onion, fresh chili and fresh basil. Choice of : Chicken / Ground Pork / Tofu / Vegetable for $18.95 | Shrimp / Beef for $21.95.',
    pairing: 'Singha Beer or Malee'
  },
  {
    id: 'cls-2',
    name: 'Pad Se Ew',
    thaiName: 'ผัดซีอิ๊ว',
    category: 'classics',
    price: 18.95,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Sweet Soy', 'Chinese Broccoli'],
    image: externalDishImages.padSeeEw,
    description: 'Stir fried wide rice noodle with egg, Chinese broccoli and sweet soy sauce. Choice of : Chicken / Ground Pork / Tofu / Vegetable for $18.95 | Shrimp / Beef for $21.95.',
    pairing: 'Manee or Chardonnay'
  },
  {
    id: 'cls-3',
    name: 'Kua Gai (V)',
    thaiName: 'ก๋วยเตี๋ยวคั่วไก่',
    category: 'classics',
    price: 18.95,
    spicyLevel: 1,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Vegetarian Option', 'Wok-Charred'],
    image: externalDishImages.kuaGai,
    description: 'Stir fried wide noodle with egg, sesame oil, soy sauce, mushroom sauce, beansprout, Napa cabbage and scallion served with spicy sriracha sauce. Choice of protein.',
    pairing: 'Singha or Prysob'
  },
  {
    id: 'cls-4',
    name: 'Thai Fried Rice',
    thaiName: 'ข้าวผัดไทย',
    category: 'classics',
    price: 18.95,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Jasmine Rice', 'Classic Wok Stir-Fry'],
    image: externalDishImages.thaiFriedRice,
    description: 'Stir Fried rice with egg, scallion, onion, and tomato. Choice of : Chicken / Ground Pork / Tofu / Vegetable for $18.95 | Shrimp / Beef for $21.95.',
    pairing: 'Pinot Grigio or Budsara'
  },
  {
    id: 'cls-5',
    name: 'Pineapple Fried Rice',
    thaiName: 'ข้าวผัดสับปะรด',
    category: 'classics',
    price: 18.95,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Cashew Nuts', 'Raisins & Curry Powder'],
    image: externalDishImages.pineappleFriedRice,
    description: 'Stir fried rice with curry powder, egg, pineapple, cashew nut, onion, tomato, carrot and raisins. Choice of : Chicken / Ground Pork / Tofu / Vegetable for $18.95 | Shrimp / Beef for $21.95.',
    pairing: 'Paga or Sparkling Wine'
  },
  {
    id: 'cls-6',
    name: 'Spicy Basil Fried Rice',
    thaiName: 'ข้าวผัดกะเพรา',
    category: 'classics',
    price: 18.95,
    spicyLevel: 3,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Fiery Chili', 'Thai Holy Basil'],
    image: externalDishImages.spicyBasilFriedRice,
    description: 'Stir fried rice with egg, onion, bell pepper, carrot, fresh basil in a spicy fresh chili and basil sauce. Choice of : Chicken / Ground Pork / Tofu / Vegetable for $18.95 | Shrimp / Beef for $21.95.',
    pairing: 'Malee or Singha Beer'
  },
  {
    id: 'cls-7',
    name: 'Green Curry',
    thaiName: 'แกงเขียวหวาน',
    category: 'classics',
    price: 18.95,
    spicyLevel: 3,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Thai Eggplant', 'Coconut Broth'],
    image: externalDishImages.greenCurry,
    description: 'Coconut milk curry with green curry paste, Thai eggplant, bell pepper, fresh basil and kaffir lime leaf served with jasmine rice. Choice of : Chicken / Ground Pork / Tofu / Vegetable for $18.95 | Shrimp / Beef for $21.95.',
    pairing: 'Sauvignon Blanc or Morrakot'
  },

  // ==========================================
  // 3. MayRee Special
  // ==========================================
  {
    id: 'spc-1',
    name: 'Pla Loui Suan',
    thaiName: 'ปลากะพงลุยสวน',
    category: 'specials',
    price: 41,
    spicyLevel: 3,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Whole Branzino', 'Fresh Thai Herbs'],
    image: externalDishImages.plaLouiSuan,
    description: 'Deep fried butterfly filleted Branzino with fresh herbs salad, ginger, lime, lemongrass, kaffir lime leaf, mint, roasted peanut, green mango, shallot, dried chili pepper, cilantro, fresh chili pepper served with jasmine rice.',
    pairing: 'Paddle Reef Sauvignon Blanc or Benjawan'
  },
  {
    id: 'spc-2',
    name: 'Pla Rad Prik',
    thaiName: 'ปลากะพงราดพริก',
    category: 'specials',
    price: 41,
    spicyLevel: 2,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Whole Branzino', 'Sweet Chili Glaze'],
    image: externalDishImages.plaRadPrik,
    description: 'Deep fried butterfly filleted Branzino topped with house made sweet chili sauce, tomato, onion, garlic, scallion and bell pepper served with jasmine rice.',
    pairing: 'Sparkling Prosecco or Malee'
  },

  // ==========================================
  // 4. Appetizers
  // ==========================================
  {
    id: 'app-1',
    name: 'Edamame (V)',
    thaiName: 'ถั่วแระญี่ปุ่น',
    category: 'appetizers',
    price: 9,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Vegan', 'Gluten-Free'],
    image: edamameImg,
    description: 'Pan seared soy beans. Additional : a choice of spicy basil or garlic black pepper flavor $2.',
    pairing: 'Singha Lager'
  },
  {
    id: 'app-2',
    name: 'Fried Tofu (V)',
    thaiName: 'เต้าหู้ทอด',
    category: 'appetizers',
    price: 11,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Vegan', 'Gluten-Free'],
    image: friedTofuImg,
    description: 'Deep fried tofu served with house sweet chili sauce.',
    pairing: 'Khun Phaen Pale Ale'
  },
  {
    id: 'app-3',
    name: 'Spring Roll (V)',
    thaiName: 'ปอเปี๊ยะทอด',
    category: 'appetizers',
    price: 11,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Vegan', 'Crispy Pastry'],
    image: springRollImg,
    description: 'Fried spring rolls with cabbage, sweet potatoes and carrot served with plum sauce.',
    pairing: 'Prosecco or Manee'
  },
  {
    id: 'app-4',
    name: 'Park Mor (V, GF)',
    thaiName: 'ข้าวเกรียบปากหม้อ',
    category: 'appetizers',
    price: 15,
    spicyLevel: 0,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Vegan Option', 'Gluten-Free', 'Michelin Feature'],
    image: parkMorImg,
    description: 'Steamed rice skin dumpling filled with peanut, sweet radish and coconut grated topped with coconut milk and fried garlic.',
    pairing: 'Manee or Clos Anais Chardonnay'
  },
  {
    id: 'app-5',
    name: 'Hed Tod (V)',
    thaiName: 'เห็ดทอด',
    category: 'appetizers',
    price: 15,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Vegan', 'Crispy Shimeji'],
    image: hedTodImg,
    description: 'Deep fried battered shimeji mushroom served with house made sweet chili sauce.',
    pairing: 'Singha Beer'
  },
  {
    id: 'app-6',
    name: 'Roti Mataba',
    thaiName: 'โรตีมะตะบะ',
    category: 'appetizers',
    price: 15,
    spicyLevel: 1,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Southern Curry Powder', 'Cucumber Relish'],
    image: rotiMatabaImg,
    description: 'Roti stuffed with ground chicken, diced potatoes, onions, Southern style curry powder served with house made Thai cucumber relish.',
    pairing: 'Matesara or Brooklyn IPA'
  },
  {
    id: 'app-7',
    name: 'Bacon Hor Nam',
    thaiName: 'เบคอนห่อแหนม',
    category: 'appetizers',
    price: 15,
    spicyLevel: 1,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Thai Pork Sausage', 'Crispy Bacon'],
    image: baconHorNamImg,
    description: 'Thai pork sausages wrapped with bacon served with sweet chili sauce.',
    pairing: 'Singha Beer or Benjawan'
  },
  {
    id: 'app-8',
    name: 'Nam Woon Sen',
    thaiName: 'แหนมวุ้นเส้น',
    category: 'appetizers',
    price: 15,
    spicyLevel: 1,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Isan Style', 'Lemongrass & Garlic'],
    image: namWoonSenImg,
    description: 'Thai pork sausages with glass noodle, lemongrass, cilantro and garlic served with sweet chili sauce.',
    pairing: 'Singha or Prysob'
  },
  {
    id: 'app-9',
    name: 'En Gai Tod',
    thaiName: 'เอ็นไก่ทอด',
    category: 'appetizers',
    price: 15,
    spicyLevel: 1,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Crispy Tendon', 'Sesame Seeds'],
    image: enGaiTodImg,
    description: 'Battered deep fried chicken tendon with a choice of sesame seeds served with sweet chili sauce. Additional : Larb Esan style (spicy) for $1.',
    pairing: 'Brooklyn IPA'
  },
  {
    id: 'app-10',
    name: 'Peek Gai Tod',
    thaiName: 'ปีกไก่ทอด',
    category: 'appetizers',
    price: 15,
    spicyLevel: 2,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Crispy Wings', 'Green Curry Glaze'],
    image: peekGaiTodImg,
    description: 'Deep fried chicken wings with a choice of green curry or sweet and spicy chili sauce. Additional : Larb Esan style (spicy) for $1.',
    pairing: 'Singha or Malee'
  },
  {
    id: 'app-11',
    name: 'Gai Gor Lae',
    thaiName: 'ไก่กอและ',
    category: 'appetizers',
    price: 15,
    spicyLevel: 2,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Southern Grilled Skewers', 'Coconut & Tamarind'],
    image: gaiGorLaeImg,
    description: 'Grilled marinated chicken skewers with coconut milk, tamarind and dried chili served with house made Thai cucumber relish.',
    pairing: 'Matesara or Saowarat'
  },
  {
    id: 'app-12',
    name: 'Goong Chae Nam Pla (GF)',
    thaiName: 'กุ้งแช่น้ำปลา',
    category: 'appetizers',
    price: 18,
    spicyLevel: 4,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Raw Prawn Sashimi', 'Fiery Nam Jim'],
    image: goongChaeNamPlaImg,
    description: 'Thai style spicy prawns sashimi with garlic, bird’s eye chili, mint, and fresh lime dressing.',
    pairing: 'Villa Jolanda Prosecco or Manee'
  },

  // ==========================================
  // 5. Soups
  // ==========================================
  {
    id: 'sop-1',
    name: 'Tom Yum Goong (GF)',
    thaiName: 'ต้มยำกุ้ง',
    category: 'soups',
    price: 21,
    spicyLevel: 3,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Gluten-Free', 'Fragrant Lemongrass & Galangal'],
    image: tomYumGoongImg,
    description: 'Spicy Thai aromatic soup with shrimp, lemongrass, mushroom, galangal, kaffir lime leaf, shallot, fresh chili pepper, onion, tomato, cilantro, green onion and fresh lime juice.',
    pairing: 'Morrakot or Sauvignon Blanc'
  },
  {
    id: 'sop-2',
    name: 'Tom Kha Gai (GF)',
    thaiName: 'ต้มข่าไก่',
    category: 'soups',
    price: 17,
    spicyLevel: 1,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Gluten-Free', 'Rich Coconut Milk'],
    image: tomKhaGaiImg,
    description: 'Coconut milk soup with chicken, mushroom, galangal, lemongrass, kaffir lime leaf, red onion, cilantro and fresh lime juice.',
    pairing: 'Pinot Grigio or Malai'
  },
  {
    id: 'sop-3',
    name: 'Gai Tom Kamin (GF)',
    thaiName: 'ไก่ต้มขมิ้น',
    category: 'soups',
    price: 17,
    spicyLevel: 2,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Gluten-Free', 'Fresh Southern Turmeric'],
    image: gaiTomKaminImg,
    description: 'Southern Thai style herbal soup with chicken and turmeric with fresh turmeric, lemongrass, dried garcinia cambogia, shallot, galangal, kaffir lime leaf, garlic, cilantro and fresh chili pepper.',
    pairing: 'Manee or Riesling'
  },
  {
    id: 'sop-4',
    name: 'Keng Jeid (V)',
    thaiName: 'แกงจืดเต้าหู้',
    category: 'soups',
    price: 15,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Vegan', 'Clear Broth'],
    image: kengJeidImg,
    description: 'Thai style vegetable soup with tofu, Napa cabbage, carrot, scallion topped with black pepper and fried garlic.',
    pairing: 'Chardonnay'
  },

  // ==========================================
  // 6. Salads
  // ==========================================
  {
    id: 'sld-1',
    name: 'Thai Garden Salad (V)',
    thaiName: 'สลัดแขก',
    category: 'salads',
    price: 11,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Vegan', 'Southern Peanut Dressing'],
    image: thaiGardenSaladImg,
    description: 'Mixed greens, cucumber, tomato, carrot and roasted cashew nuts served with Southern Thai style peanut sauce dressing.',
    pairing: 'Pinot Grigio'
  },
  {
    id: 'sld-2',
    name: 'Somtum (GF)',
    thaiName: 'ส้มตำ',
    category: 'salads',
    price: 16,
    spicyLevel: 3,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Gluten-Free', 'Green Papaya'],
    image: somtumImg,
    description: 'Papaya salad with green papaya, tomato, chili, peanut, string beans, fresh lime juice with a choice of Original style with dried shrimp or Esan style with fermented fish sauce and salted crab.',
    pairing: 'Singha Beer or Morrakot'
  },
  {
    id: 'sld-3',
    name: 'Yum Woon Sen',
    thaiName: 'ยำวุ้นเส้น',
    category: 'salads',
    price: 16,
    spicyLevel: 3,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Glass Noodle', 'Spicy Lime & Herbs'],
    image: yumWoonSenImg,
    description: 'Thai spicy salad with ground pork, shrimp, fresh chili pepper, fresh lime juice, fish sauce, onion, cilantro, green onion, tomato with glass noodle.',
    pairing: 'Sauvignon Blanc or Budsara'
  },
  {
    id: 'sld-4',
    name: 'Yum Hua Plee (GF)',
    thaiName: 'ยำหัวปลี',
    category: 'salads',
    price: 19,
    spicyLevel: 2,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Gluten-Free', 'Banana Blossom'],
    image: yumHuaPleeImg,
    description: 'Banana blossom salad with shrimp, ground pork, coconut milk, fresh lime juice, fish sauce and roasted chili paste topped with fried onion and fresh mint.',
    pairing: 'Manee or Prosecco'
  },
  {
    id: 'sld-5',
    name: 'Larb (V, GF)',
    thaiName: 'ลาบ',
    category: 'salads',
    price: 16,
    spicyLevel: 3,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Gluten-Free', 'Toasted Rice Powder'],
    image: larbImg,
    description: 'Spicy salad with fresh lime juice, fish sauce, shallot, chili powder, cilantro, green onion, fresh mint and ground roasted rice. Choice of ground pork, ground chicken. Vegan choice : tofu or mushroom.',
    pairing: 'Singha or Benjawan'
  },
  {
    id: 'sld-6',
    name: 'Grilled Shrimp Mango Salad (GF)',
    thaiName: 'ยำมะม่วงกุ้งย่าง',
    category: 'salads',
    price: 18,
    spicyLevel: 2,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Gluten-Free', 'Green Mango & Cashews'],
    image: grilledShrimpMangoSaladImg,
    description: 'Grilled shrimps served with Thai spicy fresh lime house sauce, green mango, tomato, roasted cashew nuts, pineapple, cilantro, culantro and fresh mint.',
    pairing: 'Villa Jolanda Prosecco or Kesaorn'
  },

  // ==========================================
  // 7. Signature Cocktails (The 12 Sisters)
  // ==========================================
  {
    id: 'ckt-1',
    name: 'Matesara',
    thaiName: 'เมธัสรา',
    category: 'cocktails',
    price: 17,
    spicyLevel: 0,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Bourbon', 'Bael Infused'],
    image: externalDrinkImages.matesara,
    description: 'Bourbon infused bael, honey syrup, lime juice, topped red wine.',
    pairing: 'Pairs with Jor Rang or Roti Nam Keang'
  },
  {
    id: 'ckt-2',
    name: 'Budsara',
    thaiName: 'บุษรา',
    category: 'cocktails',
    price: 17,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Vodka', 'Fresh Ginger'],
    image: externalDrinkImages.budsara,
    description: 'Vodka infused ginger, fresh ginger, lime juice, topped Crème De Mûre.',
    pairing: 'Pairs with Pad Pong Karee Talay'
  },
  {
    id: 'ckt-3',
    name: 'Paga',
    thaiName: 'ผกา',
    category: 'cocktails',
    price: 17,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Malibu Rum', 'Tropical Banana & Melon'],
    image: externalDrinkImages.paga,
    description: 'Malibu coconut rum, banana liqueur, melon liqueur, pineapple juice, lime juice.',
    pairing: 'Pairs with Gai Tod Hat Yai'
  },
  {
    id: 'ckt-4',
    name: 'Malai',
    thaiName: 'มาลัย',
    category: 'cocktails',
    price: 19,
    spicyLevel: 0,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['House Signature', 'Coconut Ice Cream Float'],
    image: externalDrinkImages.malai,
    description: 'Malibu coconut rum, homemade coconut mix, pineapple juice, topped with Maekhong rum and coconut ice cream.',
    pairing: 'Signature Sip • Pairs with Kua Kling'
  },
  {
    id: 'ckt-5',
    name: 'Prysob',
    thaiName: 'พรายสบ',
    category: 'cocktails',
    price: 17,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Mekhong Rum', 'Palm Sugar'],
    image: externalDrinkImages.prysob,
    description: 'Mekhong rum, mango juice, lime juice, honey syrup, palm sugar syrup.',
    pairing: 'Pairs with Pad Thai Hor Khai'
  },
  {
    id: 'ckt-6',
    name: 'Morrakot',
    thaiName: 'มรกต',
    category: 'cocktails',
    price: 17,
    spicyLevel: 1,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Sake & Lemongrass Vodka', 'Tom Yum Botanicals'],
    image: externalDrinkImages.morrakot,
    description: 'Sake, vodka infused lemongrass, fresh galanga, Kaffir lime leaves, fresh lemongrass, lime juice, coconut milk, palm sugar syrup.',
    pairing: 'Pairs with Tom Yum Goong or Branzino'
  },
  {
    id: 'ckt-7',
    name: 'Saowarat',
    thaiName: 'เสาวรส',
    category: 'cocktails',
    price: 17,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Whiskey', 'Green Tea & Honey'],
    image: externalDrinkImages.saowarat,
    description: 'Whiskey, green tea syrup, honey syrup, lime juice, pineapple juice.',
    pairing: 'Pairs with Khao Mok Gai or Pork Ribs'
  },
  {
    id: 'ckt-8',
    name: 'Benjawan',
    thaiName: 'เบญจวรรณ',
    category: 'cocktails',
    price: 17,
    spicyLevel: 1,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Smoky Mezcal', 'Ancho Reyes & Yuzu'],
    image: externalDrinkImages.benjawan,
    description: 'Mezcal, Ancho Reyes chili liqueur, lime juice, agave syrup, yuzu purée.',
    pairing: 'Pairs with Kee Mao Talay or Pla Loui Suan'
  },
  {
    id: 'ckt-9',
    name: 'Malee',
    thaiName: 'มาลี',
    category: 'cocktails',
    price: 17,
    spicyLevel: 1,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Hibiscus Tequila', 'Thai Herbs'],
    image: externalDrinkImages.malee,
    description: 'Tequila infused hibiscus, Ancho Reyes chili liqueur, lime juice, agave syrup, fresh cilantro, fresh ginger, fresh lemongrass.',
    pairing: 'Pairs with Pad Ped Kra Dook Moo'
  },
  {
    id: 'ckt-10',
    name: 'Kesaorn',
    thaiName: 'เกสร',
    category: 'cocktails',
    price: 17,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Tito\'s Vodka', 'Passion Fruit & Watermelon'],
    image: externalDrinkImages.kesaorn,
    description: 'Tito\'s vodka, passion fruit purée, watermelon syrup, lime juice, topped cranberry juice.',
    pairing: 'Pairs with Grilled Shrimp Mango Salad'
  },
  {
    id: 'ckt-11',
    name: 'Lumpao',
    thaiName: 'ลำเพา',
    category: 'cocktails',
    price: 17,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Phraya Premium Rum', 'Peychaud\'s Bitters'],
    image: externalDrinkImages.lumpao,
    description: 'Phraya rum, Peychaud\'s bitter, pineapple juice, lime juice, syrup.',
    pairing: 'Pairs with Kaeng Phed Ped'
  },
  {
    id: 'ckt-12',
    name: 'Manee',
    thaiName: 'มณี',
    category: 'cocktails',
    price: 17,
    spicyLevel: 0,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Pandan Gin', 'St. Germain & Fresh Mint'],
    image: externalDrinkImages.manee,
    description: 'Gin infused pandan leaf, St. Germain, fresh cucumber, fresh mint, lime juice.',
    pairing: 'Pairs with Park Mor or Crab Fried Rice'
  },

  // ==========================================
  // 8. Desserts
  // ==========================================
  {
    id: 'dst-1',
    name: 'Mango Sticky Rice (Seasonal)',
    thaiName: 'ข้าวเหนียวมะม่วง',
    category: 'desserts',
    price: 15,
    spicyLevel: 0,
    isChefSpecial: true,
    isMichelin: false,
    dietary: ['Gluten-Free', 'Vegan Option'],
    image: externalDishImages.mangoStickyRice,
    description: 'Sweet coconut sticky rice served with sweet ripe mango slices and warm salted coconut cream.',
    pairing: 'Manee or Hot Lemongrass Tea'
  },
  {
    id: 'dst-2',
    name: 'Coconut Ice Cream',
    thaiName: 'ไอศกรีมกะทิ',
    category: 'desserts',
    price: 8,
    spicyLevel: 0,
    isChefSpecial: true,
    isMichelin: true,
    dietary: ['Gluten-Free', 'Michelin Feature'],
    image: externalDishImages.coconutIceCream,
    description: 'Authentic Thai coconut ice cream served refreshingly chilled in a real coconut shell.',
    pairing: 'The perfect finish after fiery Southern Thai spice'
  },
  {
    id: 'dst-3',
    name: 'Fried Ice Cream',
    thaiName: 'ไอศกรีมทอด',
    category: 'desserts',
    price: 12,
    spicyLevel: 0,
    isChefSpecial: false,
    isMichelin: false,
    dietary: ['Crispy Hot Shell', 'Cold Ice Cream Center'],
    image: externalDishImages.friedIceCream,
    description: 'Crispy golden fried shell enclosing cold, rich ice cream, drizzled with sweet syrups.',
    pairing: 'Espresso or Saowarat'
  }
];

export const REVIEWS = [
  {
    source: 'The Michelin Guide',
    quote: 'Chef/Owner Orawan Sawangphol tells us a story of southern Thai cooking at Mayree, named for a character from the Thai folktale, Twelve Sisters. The space is cozy and charming, as is the compact menu. Spice levels are far from timid, and all of the dishes showcase great personality. Sek Saraboon runs the serious cocktail program, while all of the creative sips are named for Mayree’s sisters.',
    author: 'Michelin Inspector',
    stars: 5,
    badge: 'Michelin Guide 2025'
  },
  {
    source: 'The New York Times',
    quote: 'Recognized by the Michelin Guide, MayRee Thai Kitchen brings the authentic flavors of Southern Thailand to the heart of Manhattan’s East Village. The curries are rich with fresh herbs and hand-ground spices.',
    author: 'Pete Wells / NYT Dining',
    stars: 5,
    badge: 'Critics’ Pick'
  },
  {
    source: 'Eater NY',
    quote: 'MayRee sets a high benchmark for NYC Thai dining, fusing bold Southern Thai curries, crispy Hat Yai chicken, and betel leaf delicacies with world-class craft cocktail mixology.',
    author: 'Robert Sietsema',
    stars: 5,
    badge: 'East Village Essential'
  },
  {
    source: 'Verified Diner',
    quote: 'Hands down the best authentic Thai meal I have had in New York City. The Jor Rang curry, Kua Kling, and Gai Tod Hat Yai are incredible, and the cocktails are true works of art. Warm, intimate ambiance!',
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
    { days: 'Friday', time: '12:00 PM – 4:00 PM, 5:00 PM – 10:30 PM' },
    { days: 'Saturday', time: '12:00 PM – 10:30 PM' },
    { days: 'Sunday', time: '12:00 PM – 10:00 PM' },
    { days: 'Happy Hour (Mon – Wed)', time: 'All Day' },
    { days: 'Happy Hour (Thu – Fri)', time: '12:00 PM – 8:00 PM' },
    { days: 'Happy Hour (Sat – Sun)', time: '12:00 PM – 5:00 PM' },
  ],
  transit: 'F train to 2nd Avenue (1 min walk), 6 train to Bleecker St / Astor Pl (5 min walk)'
};
