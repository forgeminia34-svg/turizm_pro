// Turizm portali uchun ma'lumotlar bazasi (Mock Data)

const TOURS_DATA = [
  {
    id: 1,
    title: "Registon va Qadimiy Samarqand Afsonalari",
    category: "historical",
    categoryName: "Tarixiy & Madaniy",
    location: "Samarqand, O'zbekiston",
    city: "samarkand",
    duration: "3 kun / 2 kecha",
    daysCount: 3,
    price: 1250000,
    priceFormatted: "1,250,000 so'm",
    currency: "UZS",
    rating: 4.9,
    reviewsCount: 148,
    badge: "Ommabop",
    badgeColor: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1629814696238-d6b38c2084c7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Sharq gavhari bo'lmish Samarqandning 2750 yillik boy tarixiga sayohat. Registon maydoni, Go'ri Amir maqbarasi, Bibixonim masjidi va afsonaviy Shohi Zinda majmuasi sizni sehrlaydi.",
    included: [
      "4 yulduzli mehmonxona (nonushta bilan)",
      "Afrosiyob poyezdiga chiptalar (borish-qaytish)",
      "Professional tarixchi gid xizmati",
      "Barcha muzey va obidalarga kirish chiptalari",
      "Komfortli VIP avtobus transferi"
    ],
    itinerary: [
      { day: "1-kun", title: "Samarqandga yetib kelish & Registon", text: "Toshkentdan 'Afrosiyob' poyezdida yetib kelish, mehmonxonaga joylashish. Registon maydoni va Go'ri Amir maqbarasiga ekskursiya." },
      { day: "2-kun", title: "Bibixonim & Shohi Zinda sirlari", text: "Bibixonim masjidi, mashhur Siiob bozori va moviy gumbazli Shohi Zinda nekropolini ziyorat qilish. Milliy Samarqand oshi tayyorlash mahorat darsi." },
      { day: "3-kun", title: "Ulug'bek rasadxonasi & Qaytish", text: "Mirzo Ulug'bek rasadxonasi va Konigil qog'oz fabrikasiga tashrif. Toshkentga qaytish." }
    ]
  },
  {
    id: 2,
    title: "Qadimiy Buxoroi Sharif Mo''jizalari",
    category: "historical",
    categoryName: "Tarixiy & Ziyorat",
    location: "Buxoro, O'zbekiston",
    city: "bukhara",
    duration: "2 kun / 1 kecha",
    daysCount: 2,
    price: 980000,
    priceFormatted: "980,000 so'm",
    currency: "UZS",
    rating: 4.8,
    reviewsCount: 112,
    badge: "Chegirma -15%",
    badgeColor: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Sharqning islom madaniyati poytaxti Buxoroi Sharif bo'ylab unutilmas sayohat. Somoniylar maqbarasi, Ark qal'asi, Poi Kalon va Labi Hovuz ansamblining betakror muhiti.",
    included: [
      "Milliy uslubdagi butik-mehmonxona",
      "Transfer va barcha shahar ichidagi yo'llar",
      "Rus va o'zbek tillaridagi gid",
      "Labi Hovuz bo'yida shohona kechki ovqat"
    ],
    itinerary: [
      { day: "1-kun", title: "Ark qal'asi va Poi Kalon", text: "Mehmonxonaga joylashish, Poi Kalon minorasi va madrasasi, Ark qal'asi bo'ylab tarixiy sayohat." },
      { day: "2-kun", title: "Sitorai Mohi Xosa & Savdo toqlari", text: "Buxoro amirining yozgi saroyi Sitorai Mohi Xosa va qadimiy gumbazli bozorlar (Toqi Zargaron)." }
    ]
  },
  {
    id: 3,
    title: "Sehrli Xiva - Ochiq Osmon Ostidagi Muzey",
    category: "historical",
    categoryName: "Tarixiy Shahar",
    location: "Xiva, Xorazm, O'zbekiston",
    city: "khiva",
    duration: "4 kun / 3 kecha",
    daysCount: 4,
    price: 1850000,
    priceFormatted: "1,850,000 so'm",
    currency: "UZS",
    rating: 5.0,
    reviewsCount: 89,
    badge: "Tavsiya etiladi",
    badgeColor: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Ichan Qal'aning qadimiy devorlari ichida o'zingizni ertaklar olamiga tushib qolgandek his etasiz. Kalta Minor, Juma masjidi, Pahlavon Mahmud maqbarasi va Xorazm milliy raqslari.",
    included: [
      "Ichan Qal'a ichidagi tarixiy mehmonxona",
      "Toshkent-Urganch-Toshkent aviachiptalari",
      "Shaxsiy ekskursiya xizmati",
      "Xorazm milliy taomlari (Tuxum barak, Shivit oshi)"
    ],
    itinerary: [
      { day: "1-kun", title: "Urganchga uchish va Xivaga transfer", text: "Aeroportda kutib olish, Xivaga transfer, kechki nurafshon Ichan Qal'a bo'ylab sayr." },
      { day: "2-kun", title: "Ichan Qal'a to'liq ekspeditsiyasi", text: "Kalta Minor, Ko'hna Ark, Tosh Hovli saroyi va 218 ustunli Juma masjidi." },
      { day: "3-kun", title: "Cho'l qal'alari (Ayoz qal'a, Tuproq qal'a)", text: "Qadimiy Xorazm sivilizatsiyasining sahrodagi afsonaviy qal'alariga safar." },
      { day: "4-kun", title: "Xaridlar va Toshkentga parvoz", text: "Xiva hunarmandchilik buyumlari, esdalik sovg'alari xaridi va parvoz." }
    ]
  },
  {
    id: 4,
    title: "Zomin Tog'lari - O'zbekiston Shveytsariyasi",
    category: "nature",
    categoryName: "Tog' & Tabiat",
    location: "Zomin, Jizzax, O'zbekiston",
    city: "zomin",
    duration: "2 kun / 1 kecha",
    daysCount: 2,
    price: 790000,
    priceFormatted: "790,000 so'm",
    currency: "UZS",
    rating: 4.9,
    reviewsCount: 230,
    badge: "Tabiat quchog'ida",
    badgeColor: "bg-teal-600",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Musaffo archazor havosi, qoyalar ustidagi mashhur shisha osma ko'prik, sharsharalar va tog' yonbag'ridagi qulay kottejlar. Shahar shovqinidan qochish uchun eng yaxshi maskan.",
    included: [
      "Zomin tog' kottejida tunash",
      "3 mahal to'liq tabiiy taomlar",
      "Shisha osma ko'prikka va sharsharaga kirish",
      "Tog' trekingi yo'lboshchisi bilan",
      "Gultoj o'simlik choylari va tog' asalini tatib ko'rish"
    ],
    itinerary: [
      { day: "1-kun", title: "Tog'larga yo'l & Osma ko'prik", text: "Ertalab Toshkentdan jo'nab ketish, Jizzax somsasi, Zomin milliy bog'i va shisha osma ko'prikdan hayajonli o'tish." },
      { day: "2-kun", title: "Boboong'oq va sharshara sayohati", text: "Ming yillik yong'oq daraxti, sharsharalar bo'ylab yengil sayohat va Toshkentga qaytish." }
    ]
  },
  {
    id: 5,
    title: "Dubay Mo''jizalari & Sahro Safarisi",
    category: "beach",
    categoryName: "Xalqaro & Plyaj",
    location: "Dubay, Birlashgan Arab Amirliklari",
    city: "dubai",
    duration: "6 kun / 5 kecha",
    daysCount: 6,
    price: 8400000,
    priceFormatted: "8,400,000 so'm ($660)",
    currency: "UZS",
    rating: 4.9,
    reviewsCount: 310,
    badge: "VIP Tur",
    badgeColor: "bg-purple-600",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Kelajak shahri Dubay: Burj Khalifa cho'qqisi, Dubai Mall favvoralari, hashamatli Marina yaxta sayri va qizil qum barxanlarida jip safari sarguzashtlari.",
    included: [
      "To'g'ridan-to'g'ri Toshkent-Dubay aviaparvozi",
      "4* Deluxe mehmonxona Marina hududida",
      "Viza rasmiylashtirish va sug'urta",
      "VIP Desert Safari (Kechki ovqat va shou)",
      "Dubai Frame va Burj Khalifa chiptalari"
    ],
    itinerary: [
      { day: "1-kun", title: "Dubayga kelish & Marina kechasi", text: "Dubay xalqaro aeroportida kutib olish, Marina mehmonxonasiga joylashish va tungi yaxta sayri." },
      { day: "2-kun", title: "Burj Khalifa va Dubai Mall", text: "Burj Khalifa kuzatuv maydonchasi, raqsga tushuvchi favvoralar va Mall bo'ylab xaridlar." },
      { day: "3-kun", title: "Sahro Safarisi va Arab kechasi", text: "To'rt g'ildirakli jiplarda qum tepaliklarida ekstremal uchish, badaviy qishlog'ida kechki ziyofat." },
      { day: "4-5-kun", title: "Jumeirah plyaji & Miracle Garden", text: "Fors ko'rfazi moviy sohilida dam olish, gullar bog'i va kelajak muzeyiga tashrif." },
      { day: "6-kun", title: "Xaridlar va Toshkentga qaytish", text: "Oltin bozori (Gold Souk) va aeroportga transfer." }
    ]
  },
  {
    id: 6,
    title: "Antaliya - O'rta Yer Dengizi Kurorti (All Inclusive)",
    category: "beach",
    categoryName: "Plyaj & Dengiz",
    location: "Antaliya, Turkiya",
    city: "antalya",
    duration: "7 kun / 6 kecha",
    daysCount: 7,
    price: 9200000,
    priceFormatted: "9,200,000 so'm ($725)",
    currency: "UZS",
    rating: 4.8,
    reviewsCount: 195,
    badge: "All Inclusive",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Turkiyaning eng mashhur moviy sohillarida to'liq hordiq. Birinchi qatordagi 5 yulduzli ultra all-inclusive mehmonxona, qumli sohil, suv attraksionlari va mazali taomlar.",
    included: [
      "To'g'ridan-to'g'ri charter reys chiptalari",
      "5* Ultra All Inclusive sohilbo'yi oteli",
      "Aeroport-Mehmonxona-Aeroport transferi",
      "Tibbiy sug'urta va 24/7 o'zbek tilidagi gid"
    ],
    itinerary: [
      { day: "1-kun", title: "Antaliyaga parvoz va kutib olish", text: "Mehmonxonaga joylashish, tanishuv kokteyli va dengiz bo'yida hordiq." },
      { day: "2-6-kun", title: "Dengiz, quyosh va hordiq", text: "Sohilbo'yida dam olish, spa, ochiq basseynlar, O'rta yer dengizi kruizi va Kaleichi qadimiy shahar sayri." },
      { day: "7-kun", title: "Xaridlar va Toshkentga qaytish", text: "Turk shirinliklari xaridi va qulay qaytish parvozi." }
    ]
  },
  {
    id: 7,
    title: "Amirsoy & Chimyon - Tog' Sarguzashtlari",
    category: "extreme",
    categoryName: "Tog' & Ekstremal",
    location: "Bo'stonliq, Toshkent viloyati",
    city: "chimgan",
    duration: "1 kunlik",
    daysCount: 1,
    price: 350000,
    priceFormatted: "350,000 so'm",
    currency: "UZS",
    rating: 4.7,
    reviewsCount: 420,
    badge: "1 kunlik weekend",
    badgeColor: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Dam olish kunida tog' havosidan bahramand bo'ling! Amirsoy zamonaviy kanat yo'lida 2290 metr balandlikka ko'tarilish, Chimyon go'zalligi va Chorvoq suvlari manzarasi.",
    included: [
      "Konditsionerli qulay transport",
      "Amirsoy kanat yo'liga chipta",
      "Tog' shashliklari bilan to'liq tushlik",
      "Guruh yetakchisi va fotosessiya"
    ],
    itinerary: [
      { day: "08:00 - 10:00", title: "Toshkentdan Amirsoyga yo'l", text: "Shimoliy vokzaldan qulay mikroavtobusda Amirsoy kurortiga qarab yo'lga chiqish." },
      { day: "10:30 - 13:30", title: "Amirsoy kanat yo'li va cho'qqi", text: "Kanatda eng baland cho'qqiga ko'tarilish, ajoyib fotosuratlar va tog' havosi." },
      { day: "14:00 - 18:00", title: "Tushlik, Chimyon va Chorvoq", text: "Milliy tushlik, Chorvoq suv ombori manzarasi bo'ylab sayr va Toshkentga qaytish." }
    ]
  },
  {
    id: 8,
    title: "Istanbul - Ikki Qit'ani Birlashtirgan Poytaxt",
    category: "historical",
    categoryName: "Madaniy & Savdo",
    location: "Istanbul, Turkiya",
    city: "istanbul",
    duration: "5 kun / 4 kecha",
    daysCount: 5,
    price: 7400000,
    priceFormatted: "7,400,000 so'm ($580)",
    currency: "UZS",
    rating: 4.9,
    reviewsCount: 260,
    badge: "Sevimli manzil",
    badgeColor: "bg-rose-600",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Osiyo va Yevropa chegarasidagi sehrli shahar. Ayasofya, Moviy Masjid, Topkapi saroyi, Bosfor bo'ylab kema sayri va tarixiy Kapali Charshi bozori.",
    included: [
      "Aviaparvoz Toshkent-Istanbul-Toshkent",
      "Sultonahmet markazidagi 4* mehmonxona",
      "Bosfor bo'ylab romantik kema sayohati",
      "Gid hamrohligida tarixiy ekskursiyalar"
    ],
    itinerary: [
      { day: "1-kun", title: "Istanbulga xush kelibsiz", text: "Aeroportda kutib olish, Sultonahmetga joylashish va Taksim maydonida kechki sayr." },
      { day: "2-kun", title: "Usmoniylar xazinasi", text: "Topkapi saroyi, Ayasofya va Moviy masjidni ziyorat qilish." },
      { day: "3-kun", title: "Bosfor bo'g'ozi kruizi", text: "Kema sayohati, Qiz minorasi va Galata minorasidan panoramali manzara." },
      { day: "4-kun", title: "Kapali Charshi & Savdo", text: "Katta bozor (Grand Bazaar) va Misr bozoridan ziravorlar xaridi." },
      { day: "5-kun", title: "Toshkentga qaytish", text: "Mehmonxonadan aeroportga transfer va vatanimizga parvoz." }
    ]
  },
  {
    id: 9,
    title: "Maldiv Orollari - Oq Qum va Moviy Ummon",
    category: "beach",
    categoryName: "Romantika & Ekzotika",
    location: "Maldiv Respublikasi",
    city: "maldives",
    duration: "6 kun / 5 kecha",
    daysCount: 6,
    price: 15900000,
    priceFormatted: "15,900,000 so'm ($1,250)",
    currency: "UZS",
    rating: 5.0,
    reviewsCount: 74,
    badge: "Premium Ta'til",
    badgeColor: "bg-emerald-600",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Hind okeanidagi jannatmonand orollar. Suv ustidagi shinam villa, oppoq qumli plyajlar, marjon riflari va delfinlar bilan birga suzish imkoniyati.",
    included: [
      "Xalqaro aviaparvoz va gidro-samolyot transferi",
      "5* Suv ustidagi hashamatli villa (Overwater Villa)",
      "Nonushta va kechki ovqatlar",
      "Snorkeling (suv osti dunyosi) to'plami"
    ],
    itinerary: [
      { day: "1-kun", title: "Malega parvoz va orolga transfer", text: "Suv samolyotida orol-kurortga uchish va villaga joylashish." },
      { day: "2-5-kun", title: "Okean rohati va romantika", text: "Marjon riflari, suzish, kurort spa xizmatlari va quyosh botishini tomosha qilish." },
      { day: "6-kun", title: "Xayr, Maldiv!", text: "Gidrosamolyotda Malega qaytish va uyga parvoz." }
    ]
  }
];

// O'zbekistonning mashhur turizm shaharlari
const DESTINATIONS_DATA = [
  {
    id: "samarkand",
    name: "Samarqand",
    subtitle: "Sharq Javohiri",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
    toursCount: 12,
    description: "Buyuk Ipak yo'lining markaziy nuqtasi, moviy gumbazlar va Registon saltanati."
  },
  {
    id: "bukhara",
    name: "Buxoro",
    subtitle: "Islom Madaniyati Poytaxti",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    toursCount: 9,
    description: "Har bir g'ishti tarixdan so'zlovchi, o'rta asr sharq sirlarini saqlagan qadim shahar."
  },
  {
    id: "khiva",
    name: "Xiva",
    subtitle: "Tirik Ertak Shahri",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    toursCount: 7,
    description: "Ichan Qal'a - YUNESKO merosi, ochiq osmon ostidagi betakror muzey shahar."
  },
  {
    id: "zomin",
    name: "Zomin",
    subtitle: "O'zbekiston Shveytsariyasi",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    toursCount: 5,
    description: "Shifobaxsh tog' havosi, yashil archazorlar va baland tog' osma ko'prigi."
  },
  {
    id: "dubai",
    name: "Dubay",
    subtitle: "Kelajak Shahri",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    toursCount: 8,
    description: "Eng baland osmono'par binolar, hashamatli plyajlar va sahro sarguzashtlari."
  },
  {
    id: "antalya",
    name: "Antaliya",
    subtitle: "O'rta Yer Marvaridi",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    toursCount: 11,
    description: "Issiq quyosh, tiniq dengiz va eng yuqori darajadagi All-Inclusive kurortlar."
  }
];

// Mijozlar sharhlari
const REVIEWS_DATA = [
  {
    id: 1,
    name: "Sardor Rahimov",
    role: "Tadbirkor, Toshkent",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tour: "Samarqand & Buxoro turi",
    comment: "Tashkilotchilik juda a'lo darajada bo'ldi! Ayniqsa 'Afrosiyob' poyezdi va Samarqanddagi gidimizning bilimi bizni hayratda qoldirdi. Oilaviy juda xursand bo'ldik.",
    date: "14-oktabr, 2026"
  },
  {
    id: 2,
    name: "Madina Aliyeva",
    role: "Dizayner, Samarqand",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tour: "Antaliya All Inclusive",
    comment: "Antaliyadagi 5 yulduzli mehmonxona aynan va'da qilingandek chiqdi. Transfer, reyslar vaqti va xizmatlar uchun SilkTour jamoasiga katta rahmat!",
    date: "28-sentabr, 2026"
  },
  {
    id: 3,
    name: "Javohir Karimov",
    role: "Dasturchi, Toshkent",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tour: "Zomin Tog'lari weekend",
    comment: "Dam olish kuni uchun ajoyib variant. Shisha ko'prikdan o'tish adreanalin bag'ishladi. Shovqinli shahardan keyin toza havoda hordiq chiqarish maza!",
    date: "5-oktabr, 2026"
  }
];

// FAQ - Savol-Javoblar
const FAQS_DATA = [
  {
    question: "Tur paketiga nimalar kiritilgan?",
    answer: "Har bir tur paketimiz o'ziga xos tuzilgan. Odatda unga qulay mehmonxonada tunash, barcha transferlar, professional gid xizmati, diqqatga sazovor joylarga kirish chiptalari va dasturdagi taomlar kiritiladi. Batafsil ma'lumotni har bir turni ochib ko'rishingiz mumkin."
  },
  {
    question: "To'lovni qanday usullarda amalga oshirish mumkin?",
    answer: "Biz barcha qulay to'lov turlarini qo'llab-quvvatlaymiz: Click, Payme, Uzum Bank ilovalari orqali onlayn, bank hisob raqamiga o'tkazma yoki ofisimizda naqd/terminal orqali to'lashingiz mumkin."
  },
  {
    question: "Tur rejasini bekor qilsa pul qaytariladimi?",
    answer: "Ha, tur boshlanishiga 7 kun qolgangacha bekor qilsangiz 100% to'liq mablag'ingiz qaytariladi. 3 kundan 7 kungacha 50% qaytariladi. Shuningdek boshqa qulay sanaga bepul ko'chirish imkoniyati ham mavjud."
  },
  {
    question: "Chet el turlari uchun viza masalasida yordam berasizmi?",
    answer: "Albatta! Kompaniyamiz BAA (Dubay), Shengen davlatlari, Saudiya Arabistoni va boshqa barcha yo'nalishlar bo'yicha viza hujjatlarini tayyorlash va elchixonaga topshirishda to'liq yordam beradi."
  },
  {
    question: "Guruh bo'lib yoki oilaviy borganimizda chegirmalar bormi?",
    answer: "Ha, 5 kishidan ortiq oilaviy va do'stlar guruhi uchun 10% dan 15% gacha maxsus chegirmalar taqdim etiladi. Shuningdek 6 yoshgacha bo'lgan bolalar uchun ko'plab xizmatlar mutlaqo bepul!"
  }
];
