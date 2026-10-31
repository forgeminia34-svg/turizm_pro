# 🌍 SilkTour — Zamonaviy Turizm va Sayyohlik Portali

**SilkTour** — O'zbekistonning boy madaniy merosi (Samarqand, Buxoro, Xiva, Zomin) hamda dunyoning mashhur sayyohlik maskanlari (Dubay, Antaliya, Maldiv) bo'ylab xizmat ko'rsatuvchi interaktiv va zamonaviy turizm veb-sayti.

Loyiha to'liq **HTML5**, **Tailwind CSS** va **Vanilla JavaScript (ES6+)** texnologiyalari yordamida yaratilgan.

---

## 🚀 Loyihaning Asosiy Imkoniyatlari

### 1. 🔍 Qidiruv va Aqlli Filtrlash
- **Matnli qidiruv:** Sayohat nomi, shahar yoki kalit so'zlar bo'yicha tezkor qidiruv.
- **Kategoriya filtrlari:** Barcha turlar, Tarixiy shaharlar, Tog' va tabiat, Plyaj & dengiz, Sarguzasht & ekstremal turlar.
- **Narx chegarasi (Price Range Slider):** Byudjetga mos turlarni qulay slayd orqali saralash.
- **Tartiblash (Sort):** Narx (arzondan qimmatga / qimmatdan arzonga) hamda reyting bo'yicha saralash.

### 2. 🏛️ Mashhur Shaharlar Bo'limi
- Samarqand, Buxoro, Xiva, Zomin, Dubay, Antaliya kabi yo'nalishlar uchun maxsus kartalar.
- Har bir shaharni bosganda shu manzilga doir turlar avtomatik tarzda filtrlanadi.

### 3. 🧮 Interaktiv Sayohat Byudjet Kalkulyatori
- Sayyoh shahar, kunlar soni, kattalar va bolalar soni, mehmonxona toifasi (3*, 4*, 5*) hamda qo'shimcha xizmatlarni (shaxsiy gid, VIP transfer, sug'urta) tanlaydi.
- Tizim real vaqt rejimida umumiy narxni hisoblab beradi.
- *"Ushbu hisob bilan bron qilish"* tugmasi orqali hisoblangan ma'lumotlar bilan buyurtma berish mumkin.

### 4. ❤️ Sevimlilar Ro'yxati (Wishlist)
- Har bir turning yurakcha belgisini bosib, uni sevimlilarga qo'shish yoki o'chirish.
- Ma'lumotlar brauzerning `localStorage` xotirasida saqlanib qoladi.
- O'ng tomondan chiquvchi qulay panel (Slide-over Drawer) orqali saqlangan turlarni boshqarish va to'g'ridan-to'g'ri bron qilish.

### 5. 📋 Batafsil Tur Tafsilotlari (Modal)
- Yuqori sifatli fotosuratlar.
- Narx ichiga kiritilgan barcha xizmatlar ro'yxati (mehmonxona, poyezd/aviachipta, gid, transport).
- **Kunlik marshrut (Itinerary):** 1-kun, 2-kun, 3-kunda nimalar qilinishi ko'rsatilgan vaqt jadvali.

### 6. 📝 Onlayn Buyurtma & Bron Qilish
- To'liq validatsiyali buyurtma formasi (Ism, Telefon, Sana, Odamlar soni, To'lov turi: Click/Payme/Uzum/Ofis).
- Buyurtma yuborilgach, sayyohga maxsus buyurtma raqami (`#TRZ-xxxxxx`) bilan muvaffaqiyat oynasi ko'rsatiladi.

### 7. 🌓 Tungi va Kunduzgi Rejim (Dark / Light Mode)
- Bir marta bosish bilan qulay tungi rejimga o'tish.
- Foydalanuvchi tanlovi `localStorage` da avtomatik saqlanadi.

### 8. 🔔 Toast Xabarnomalar
- Sevimlilarga qo'shish, o'chirish, mavzuni o'zgartirish va obuna bo'lishda chiroyli animatsiyali xabarnomalar.

---

## 📁 Fayllar Strukturasi

```
turizm_pro/
│
├── index.html          # Asosiy HTML sahifa (Barcha bo'limlar va modallar)
├── css/
│   └── style.css       # Maxsus shriftlar, glassmorphism, scrollbar va animatsiyalar
├── js/
│   ├── data.js         # Turlar, shaharlar, sharhlar va FAQ ma'lumotlar bazasi
│   └── app.js          # Filtrlash, kalkulyator, sevimlilar, buyurtma va tema mantiqi
└── README.md           # Loyiha qo'llanmasi
```

---

## 💻 Loyihani Ishga Tushirish

Hech qanday murakkab server yoki kutubxona o'rnatish talab qilinmaydi!

1. Loyiha papkasidagi `index.html` faylini istalgan brauzerda (Google Chrome, Microsoft Edge, Firefox, Safari) ikki marta bosib oching.
2. Yoki VS Code / IDE da **Live Server** kengaytmasi orqali ishga tushiring.

---

## 🎨 Foydalanilgan Texnologiyalar
- **HTML5:** Semantik va qulay veb-tuzilma
- **Tailwind CSS (CDN):** Zamonaviy dizayn, moslashuvchan (Responsive) layout va dark mode
- **JavaScript (Vanilla ES6+):** Reaktiv filtrlash, kalkulyator, mahalliy xotira (localStorage), modal va xabarnomalar
- **Unsplash Photography:** Yuqori sifatli sayyohlik suratlari
"# turizm_pro" 
