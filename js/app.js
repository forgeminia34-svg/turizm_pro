// Asosiy ilova mantiqi va interaktivlik

// Ilova holati (State)
const state = {
  activeCategory: 'all',
  searchQuery: '',
  maxPrice: 16000000,
  sortBy: 'default',
  favorites: JSON.parse(localStorage.getItem('silk_travel_favorites')) || [],
  isDark: localStorage.getItem('silk_travel_theme') === 'dark' || 
          (!('silk_travel_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
  selectedTourForBooking: null
};

// DOM elementlari
const elements = {
  html: document.documentElement,
  themeToggle: document.getElementById('theme-toggle'),
  themeToggleMobile: document.getElementById('theme-toggle-mobile'),
  themeIconLight: document.getElementById('theme-icon-light'),
  themeIconDark: document.getElementById('theme-icon-dark'),
  mobileMenuBtn: document.getElementById('mobile-menu-btn'),
  mobileMenu: document.getElementById('mobile-menu'),
  toursGrid: document.getElementById('tours-grid'),
  toursCount: document.getElementById('tours-count'),
  categoryPills: document.getElementById('category-pills'),
  searchInput: document.getElementById('search-input'),
  heroSearchInput: document.getElementById('hero-search-input'),
  heroSearchBtn: document.getElementById('hero-search-btn'),
  priceRange: document.getElementById('price-range'),
  priceRangeDisplay: document.getElementById('price-range-display'),
  sortSelect: document.getElementById('sort-select'),
  destinationsGrid: document.getElementById('destinations-grid'),
  reviewsGrid: document.getElementById('reviews-grid'),
  faqAccordion: document.getElementById('faq-accordion'),
  favoritesBadge: document.getElementById('favorites-badge'),
  favoritesBadgeMobile: document.getElementById('favorites-badge-mobile'),
  favoritesBtn: document.getElementById('favorites-btn'),
  favoritesBtnMobile: document.getElementById('favorites-btn-mobile'),
  favoritesDrawer: document.getElementById('favorites-drawer'),
  favoritesDrawerOverlay: document.getElementById('favorites-drawer-overlay'),
  favoritesCloseBtn: document.getElementById('favorites-close-btn'),
  favoritesList: document.getElementById('favorites-list'),
  tourDetailModal: document.getElementById('tour-detail-modal'),
  tourDetailContent: document.getElementById('tour-detail-content'),
  bookingModal: document.getElementById('booking-modal'),
  bookingForm: document.getElementById('booking-form'),
  bookingTourSelect: document.getElementById('booking-tour-select'),
  bookingSuccessModal: document.getElementById('booking-success-modal'),
  toastContainer: document.getElementById('toast-container'),
  // Kalkulyator elementlari
  calcDest: document.getElementById('calc-dest'),
  calcDays: document.getElementById('calc-days'),
  calcAdults: document.getElementById('calc-adults'),
  calcChildren: document.getElementById('calc-children'),
  calcHotel: document.getElementById('calc-hotel'),
  calcGuide: document.getElementById('calc-guide'),
  calcTransfer: document.getElementById('calc-transfer'),
  calcInsurance: document.getElementById('calc-insurance'),
  calcTotalPrice: document.getElementById('calc-total-price'),
  calcBookBtn: document.getElementById('calc-book-btn')
};

// Dasturni ishga tushirish (Init)
function init() {
  initTheme();
  renderDestinations();
  renderCategoryPills();
  renderTours();
  renderReviews();
  renderFAQs();
  updateFavoritesBadge();
  populateBookingTourOptions();
  setupEventListeners();
  initCalculator();

  const bookDate = document.getElementById('book-date');
  if (bookDate) {
    const today = new Date().toISOString().split('T')[0];
    bookDate.min = today;
    bookDate.value = today;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// 1. Mavzuni boshqarish (Dark / Light Mode)
function initTheme() {
  if (state.isDark) {
    elements.html.classList.add('dark');
    updateThemeIcons(true);
  } else {
    elements.html.classList.remove('dark');
    updateThemeIcons(false);
  }
}

function toggleTheme() {
  state.isDark = !state.isDark;
  if (state.isDark) {
    elements.html.classList.add('dark');
    localStorage.setItem('silk_travel_theme', 'dark');
    updateThemeIcons(true);
    showToast('Tungi rejim yoqildi', 'info');
  } else {
    elements.html.classList.remove('dark');
    localStorage.setItem('silk_travel_theme', 'light');
    updateThemeIcons(false);
    showToast('Kunduzgi rejim yoqildi', 'info');
  }
}

function updateThemeIcons(isDark) {
  const lightIcons = document.querySelectorAll('.theme-icon-light');
  const darkIcons = document.querySelectorAll('.theme-icon-dark');
  
  lightIcons.forEach(icon => {
    if (icon) icon.classList.toggle('hidden', isDark);
  });
  darkIcons.forEach(icon => {
    if (icon) icon.classList.toggle('hidden', !isDark);
  });
}

// 2. Turlar kategoriyalari filtri
const CATEGORIES = [
  { id: 'all', name: 'Barcha turlar', icon: 'compass' },
  { id: 'historical', name: 'Tarixiy shaharlar', icon: 'landmark' },
  { id: 'nature', name: 'Tog\' va Tabiat', icon: 'mountain' },
  { id: 'beach', name: 'Plyaj & Dengiz', icon: 'palmtree' },
  { id: 'extreme', name: 'Sarguzasht & Ekstremal', icon: 'zap' }
];

function renderCategoryPills() {
  if (!elements.categoryPills) return;
  
  elements.categoryPills.innerHTML = CATEGORIES.map(cat => {
    const isActive = state.activeCategory === cat.id;
    const activeClasses = isActive 
      ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20' 
      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700';
    
    return `
      <button 
        onclick="handleCategoryChange('${cat.id}')"
        class="px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer ${activeClasses}">
        <span>${cat.name}</span>
      </button>
    `;
  }).join('');
}

function handleCategoryChange(catId) {
  state.activeCategory = catId;
  renderCategoryPills();
  renderTours();
}

// 3. Turlar ro'yxatini render qilish
function renderTours() {
  if (!elements.toursGrid) return;

  // Filtrlash
  let filtered = TOURS_DATA.filter(tour => {
    // Kategoriya tekshiruvi
    const matchesCategory = state.activeCategory === 'all' || tour.category === state.activeCategory;
    
    // Matn qidiruvi (nom, joylashuv, ta'rif)
    const q = state.searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      tour.title.toLowerCase().includes(q) || 
      tour.location.toLowerCase().includes(q) ||
      tour.description.toLowerCase().includes(q);

    // Narx oralig'i
    const matchesPrice = tour.price <= state.maxPrice;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Saralash (Sort)
  if (state.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Soni yangilash
  if (elements.toursCount) {
    elements.toursCount.textContent = `${filtered.length} ta tur topildi`;
  }

  if (filtered.length === 0) {
    elements.toursGrid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sky-50 dark:bg-sky-900/30 text-sky-500 mb-4">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-2">Hech qanday tur topilmadi</h3>
        <p class="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">Qidiruv so'zini yoki narx chegarasini o'zgartirib ko'ring.</p>
        <button onclick="resetFilters()" class="px-6 py-2.5 bg-sky-600 text-white rounded-xl font-medium hover:bg-sky-700 transition">
          Filtrlarni tozalash
        </button>
      </div>
    `;
    return;
  }

  elements.toursGrid.innerHTML = filtered.map(tour => {
    const isFav = state.favorites.includes(tour.id);
    const heartFill = isFav ? 'fill-rose-500 text-rose-500' : 'fill-none text-white hover:text-rose-500';

    return `
      <div class="tour-card bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
        <!-- Rasm va Badge -->
        <div class="relative h-64 overflow-hidden">
          <img 
            src="${tour.image}" 
            alt="${tour.title}" 
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20"></div>
          
          <!-- Badge -->
          <span class="absolute top-4 left-4 ${tour.badgeColor} text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow">
            ${tour.badge}
          </span>

          <!-- Sevimlilar tugmasi -->
          <button 
            onclick="toggleFavorite(${tour.id}, event)"
            aria-label="Sevimlilarga qo'shish"
            class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-all hover:bg-white/40 active:scale-90">
            <svg class="w-5 h-5 ${heartFill} transition-colors" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          <!-- Manzil va Baho -->
          <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
            <div class="flex items-center gap-1.5 font-medium drop-shadow">
              <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>${tour.location}</span>
            </div>
            <div class="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-amber-300">
              <svg class="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span>${tour.rating}</span>
              <span class="text-white/70">(${tour.reviewsCount})</span>
            </div>
          </div>
        </div>

        <!-- Matn ma'lumotlari -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
              <span class="bg-sky-50 dark:bg-sky-950/60 px-2.5 py-1 rounded-md">${tour.duration}</span>
              <span class="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md text-slate-600 dark:text-slate-400">${tour.categoryName}</span>
            </div>
            <h3 class="text-lg font-bold text-slate-800 dark:text-white line-clamp-2 mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              ${tour.title}
            </h3>
            <p class="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
              ${tour.description}
            </p>
          </div>

          <!-- Narx va Tugmalar -->
          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
            <div>
              <p class="text-xs text-slate-400 dark:text-slate-500">Narxi (kishi boshiga)</p>
              <p class="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">${tour.priceFormatted}</p>
            </div>
            <div class="flex items-center gap-2">
              <button 
                onclick="openTourDetail(${tour.id})"
                class="px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition">
                Batafsil
              </button>
              <button 
                onclick="openBookingModal(${tour.id})"
                class="px-4 py-2 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white rounded-xl text-xs font-bold shadow-md shadow-sky-600/20 transition">
                Band qilish
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 4. Mashhur shaharlar (Destinations) render qilish
function renderDestinations() {
  if (!elements.destinationsGrid) return;

  elements.destinationsGrid.innerHTML = DESTINATIONS_DATA.map(dest => `
    <div 
      onclick="filterByCity('${dest.id}')"
      class="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300">
      <img 
        src="${dest.image}" 
        alt="${dest.name}" 
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
      
      <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
        ${dest.toursCount} ta tur
      </div>

      <div class="absolute bottom-6 left-6 right-6 text-white">
        <span class="text-sky-400 text-xs font-bold uppercase tracking-wider block mb-1">${dest.subtitle}</span>
        <h3 class="text-2xl font-bold mb-1">${dest.name}</h3>
        <p class="text-sm text-slate-300 line-clamp-2">${dest.description}</p>
      </div>
    </div>
  `).join('');
}

function filterByCity(cityId) {
  state.searchQuery = cityId === 'all' ? '' : cityId;
  const tourSection = document.getElementById('tours');
  if (tourSection) {
    tourSection.scrollIntoView({ behavior: 'smooth' });
  }
  renderTours();
}

// 5. Mijozlar fikrlari (Reviews)
function renderReviews() {
  if (!elements.reviewsGrid) return;

  elements.reviewsGrid.innerHTML = REVIEWS_DATA.map(rev => `
    <div class="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
      <div>
        <!-- Yulduzchalar -->
        <div class="flex items-center gap-1 text-amber-400 mb-4">
          ${Array(rev.rating).fill(`
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          `).join('')}
        </div>
        <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 italic">
          "${rev.comment}"
        </p>
      </div>

      <div class="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <img src="${rev.avatar}" alt="${rev.name}" class="w-12 h-12 rounded-full object-cover border-2 border-sky-500" />
        <div>
          <h4 class="font-bold text-slate-800 dark:text-white text-sm">${rev.name}</h4>
          <p class="text-xs text-slate-400">${rev.role}</p>
          <span class="inline-block mt-1 text-[11px] font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 px-2 py-0.5 rounded">
            ${rev.tour}
          </span>
        </div>
      </div>
    </div>
  `).join('');
}

// 6. Savol-Javoblar (FAQ Accordion)
function renderFAQs() {
  if (!elements.faqAccordion) return;

  elements.faqAccordion.innerHTML = FAQS_DATA.map((faq, idx) => `
    <div class="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 transition-all">
      <button 
        onclick="toggleFAQ(${idx})"
        class="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-800 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition cursor-pointer">
        <span>${faq.question}</span>
        <svg id="faq-icon-${idx}" class="w-5 h-5 text-slate-400 transform transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div id="faq-content-${idx}" class="hidden px-6 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
        ${faq.answer}
      </div>
    </div>
  `).join('');
}

function toggleFAQ(idx) {
  const content = document.getElementById(`faq-content-${idx}`);
  const icon = document.getElementById(`faq-icon-${idx}`);
  if (!content) return;

  const isHidden = content.classList.contains('hidden');
  content.classList.toggle('hidden', !isHidden);
  icon.classList.toggle('rotate-180', isHidden);
}

// 7. Sevimlilar (Favorites / Wishlist) tizimi
function toggleFavorite(tourId, event) {
  if (event) event.stopPropagation();
  
  const index = state.favorites.indexOf(tourId);
  const tour = TOURS_DATA.find(t => t.id === tourId);

  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast(`"${tour?.title}" sevimlilardan olib tashlandi`, 'info');
  } else {
    state.favorites.push(tourId);
    showToast(`"${tour?.title}" sevimlilarga qo'shildi! ❤️`, 'success');
  }

  localStorage.setItem('silk_travel_favorites', JSON.stringify(state.favorites));
  updateFavoritesBadge();
  renderTours();
  if (!elements.favoritesDrawer.classList.contains('translate-x-full')) {
    renderFavoritesDrawer();
  }
}

function updateFavoritesBadge() {
  const count = state.favorites.length;
  [elements.favoritesBadge, elements.favoritesBadgeMobile].forEach(badge => {
    if (badge) {
      badge.textContent = count;
      badge.classList.toggle('hidden', count === 0);
    }
  });
}

function openFavoritesDrawer() {
  renderFavoritesDrawer();
  elements.favoritesDrawerOverlay.classList.remove('hidden');
  setTimeout(() => {
    elements.favoritesDrawer.classList.remove('translate-x-full');
  }, 10);
  document.body.style.overflow = 'hidden';
}

function closeFavoritesDrawer() {
  elements.favoritesDrawer.classList.add('translate-x-full');
  setTimeout(() => {
    elements.favoritesDrawerOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }, 300);
}

function renderFavoritesDrawer() {
  if (!elements.favoritesList) return;

  const favTours = TOURS_DATA.filter(t => state.favorites.includes(t.id));

  if (favTours.length === 0) {
    elements.favoritesList.innerHTML = `
      <div class="py-20 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </div>
        <h4 class="text-lg font-bold text-slate-800 dark:text-white mb-1">Sevimlilar ro'yxati bo'sh</h4>
        <p class="text-sm text-slate-500 dark:text-slate-400">O'zingizga yoqqan turlarni yurakcha tugmasi orqali saqlab qo'ying.</p>
      </div>
    `;
    return;
  }

  elements.favoritesList.innerHTML = favTours.map(tour => `
    <div class="flex gap-4 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-800 items-center justify-between">
      <img src="${tour.image}" alt="${tour.title}" class="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <h4 class="font-bold text-sm text-slate-800 dark:text-white truncate">${tour.title}</h4>
        <p class="text-xs text-slate-400 mb-1">${tour.duration} • ${tour.location}</p>
        <p class="text-sm font-extrabold text-sky-600 dark:text-sky-400">${tour.priceFormatted}</p>
      </div>
      <div class="flex flex-col gap-2">
        <button 
          onclick="openBookingModal(${tour.id}); closeFavoritesDrawer();"
          class="px-3 py-1.5 bg-sky-600 text-white rounded-lg text-xs font-bold hover:bg-sky-700 transition">
          Band qilish
        </button>
        <button 
          onclick="toggleFavorite(${tour.id}, event)"
          class="p-1.5 text-slate-400 hover:text-rose-500 transition self-center">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
        </button>
      </div>
    </div>
  `).join('');
}

// 8. Tur haqida batafsil ma'lumot modal oynasi
function openTourDetail(tourId) {
  const tour = TOURS_DATA.find(t => t.id === tourId);
  if (!tour || !elements.tourDetailContent) return;

  const itineraryHTML = tour.itinerary ? tour.itinerary.map(item => `
    <div class="relative pl-6 pb-6 border-l-2 border-sky-200 dark:border-sky-900 last:border-none last:pb-0">
      <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-sky-600 border-2 border-white dark:border-slate-900"></div>
      <span class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">${item.day}</span>
      <h5 class="font-bold text-slate-800 dark:text-white text-sm mb-1">${item.title}</h5>
      <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">${item.text}</p>
    </div>
  `).join('') : '';

  const includedHTML = tour.included ? tour.included.map(inc => `
    <li class="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
      <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
      <span>${inc}</span>
    </li>
  `).join('') : '';

  elements.tourDetailContent.innerHTML = `
    <!-- Asosiy rasm -->
    <div class="relative h-72 md:h-96 w-full">
      <img src="${tour.image}" alt="${tour.title}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
      
      <button 
        onclick="closeTourDetailModal()" 
        class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>

      <div class="absolute bottom-6 left-6 right-6 text-white">
        <div class="flex items-center gap-2 mb-2">
          <span class="${tour.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full">${tour.badge}</span>
          <span class="bg-white/20 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full">${tour.duration}</span>
        </div>
        <h2 class="text-2xl md:text-3xl font-extrabold mb-2">${tour.title}</h2>
        <div class="flex items-center gap-4 text-sm text-slate-200">
          <span class="flex items-center gap-1">📍 ${tour.location}</span>
          <span class="flex items-center gap-1 font-bold text-amber-300">⭐ ${tour.rating} (${tour.reviewsCount} ta sharh)</span>
        </div>
      </div>
    </div>

    <!-- Tana qismi -->
    <div class="p-6 md:p-8 space-y-6">
      <div>
        <h4 class="text-base font-bold text-slate-900 dark:text-white mb-2">Tur tavsifi</h4>
        <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">${tour.description}</p>
      </div>

      <!-- Kiritilgan xizmatlar -->
      <div class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
        <h4 class="text-sm font-bold text-emerald-900 dark:text-emerald-300 mb-3 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Narxga nimalar kiritilgan:
        </h4>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
          ${includedHTML}
        </ul>
      </div>

      <!-- Kunlik Dastur -->
      <div>
        <h4 class="text-base font-bold text-slate-900 dark:text-white mb-4">Sayohat marshruti (Kunlik dastur)</h4>
        <div class="ml-2">
          ${itineraryHTML}
        </div>
      </div>

      <!-- Narx va Bron qilish pastki panel -->
      <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
        <div>
          <span class="text-xs text-slate-400 block">Umumiy narxi</span>
          <span class="text-2xl font-black text-sky-600 dark:text-sky-400">${tour.priceFormatted}</span>
        </div>
        <button 
          onclick="closeTourDetailModal(); openBookingModal(${tour.id});"
          class="px-8 py-3.5 bg-sky-600 hover:bg-sky-700 text-white rounded-2xl font-bold text-sm shadow-lg shadow-sky-600/30 transition active:scale-95">
          Ushbu turni band qilish
        </button>
      </div>
    </div>
  `;

  elements.tourDetailModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeTourDetailModal() {
  if (!elements.tourDetailModal) return;
  elements.tourDetailModal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// 9. Bron qilish (Booking Modal & Form)
function populateBookingTourOptions() {
  if (!elements.bookingTourSelect) return;
  elements.bookingTourSelect.innerHTML = `
    <option value="">Turni tanlang...</option>
    ${TOURS_DATA.map(t => `<option value="${t.id}">${t.title} - ${t.priceFormatted}</option>`).join('')}
  `;
}

function openBookingModal(tourId = null) {
  state.selectedTourForBooking = tourId;
  if (tourId && elements.bookingTourSelect) {
    elements.bookingTourSelect.value = tourId;
  }
  elements.bookingModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  if (!elements.bookingModal) return;
  elements.bookingModal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function handleBookingSubmit(e) {
  e.preventDefault();
  
  const tourId = elements.bookingTourSelect.value;
  const fullName = document.getElementById('book-name').value.trim();
  const phone = document.getElementById('book-phone').value.trim();
  const date = document.getElementById('book-date').value;
  const travelers = document.getElementById('book-travelers').value;

  if (!tourId || !fullName || !phone || !date) {
    showToast('Iltimos, barcha maydonlarni to\'ldiring', 'error');
    return;
  }

  const selectedTour = TOURS_DATA.find(t => t.id === parseInt(tourId));
  const bookingCode = `TRZ-${Math.floor(100000 + Math.random() * 900000)}`;

  // Muvaffaqiyatli buyurtma oynasi
  closeBookingModal();
  openSuccessModal({
    code: bookingCode,
    tourTitle: selectedTour ? selectedTour.title : 'Maxsus Tur',
    fullName,
    phone,
    date,
    travelers
  });

  // Formani tozalash
  elements.bookingForm.reset();
}

function openSuccessModal(details) {
  const codeEl = document.getElementById('success-code');
  const detailsEl = document.getElementById('success-details');

  if (codeEl) codeEl.textContent = details.code;
  if (detailsEl) {
    detailsEl.innerHTML = `
      <p><strong>Tur:</strong> ${details.tourTitle}</p>
      <p><strong>Mijoz:</strong> ${details.fullName}</p>
      <p><strong>Telefon:</strong> ${details.phone}</p>
      <p><strong>Boshlanish sanasi:</strong> ${details.date}</p>
      <p><strong>Sayohatchilar soni:</strong> ${details.travelers} kishi</p>
    `;
  }

  elements.bookingSuccessModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
  elements.bookingSuccessModal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// 10. Sayohat Narxini Hisoblash Kalkulyatori
function initCalculator() {
  const calcInputs = [
    elements.calcDest,
    elements.calcDays,
    elements.calcAdults,
    elements.calcChildren,
    elements.calcHotel,
    elements.calcGuide,
    elements.calcTransfer,
    elements.calcInsurance
  ];

  calcInputs.forEach(input => {
    if (input) {
      input.addEventListener('change', calculateTourBudget);
      input.addEventListener('input', calculateTourBudget);
    }
  });

  if (elements.calcBookBtn) {
    elements.calcBookBtn.addEventListener('click', () => {
      const destId = elements.calcDest.value;
      const matchedTour = TOURS_DATA.find(t => t.city === destId) || TOURS_DATA[0];
      openBookingModal(matchedTour.id);
    });
  }

  calculateTourBudget();
}

function calculateTourBudget() {
  if (!elements.calcTotalPrice) return;

  const destBasePrices = {
    samarkand: 380000,
    bukhara: 420000,
    khiva: 450000,
    zomin: 350000,
    dubai: 1300000,
    antalya: 1200000
  };

  const dest = elements.calcDest ? elements.calcDest.value : 'samarkand';
  const days = parseInt(elements.calcDays ? elements.calcDays.value : 3) || 1;
  const adults = parseInt(elements.calcAdults ? elements.calcAdults.value : 1) || 1;
  const children = parseInt(elements.calcChildren ? elements.calcChildren.value : 0) || 0;
  const hotelMultiplier = parseFloat(elements.calcHotel ? elements.calcHotel.value : 1.2);

  const baseDayCost = (destBasePrices[dest] || 380000) * hotelMultiplier;

  // Kattalar 100%, bolalar 50%
  const peopleFactor = adults + (children * 0.5);

  let total = baseDayCost * days * peopleFactor;

  // Qo'shimcha xizmatlar
  if (elements.calcGuide && elements.calcGuide.checked) total += 350000 * days;
  if (elements.calcTransfer && elements.calcTransfer.checked) total += 400000;
  if (elements.calcInsurance && elements.calcInsurance.checked) total += 80000 * (adults + children);

  // Formatlash
  const formatted = Math.round(total).toLocaleString('uz-UZ') + " so'm";
  elements.calcTotalPrice.textContent = formatted;
}

// 11. Toast Xabarnoma Tizimi
function showToast(message, type = 'success') {
  if (!elements.toastContainer) return;

  const toast = document.createElement('div');
  const bgColors = {
    success: 'bg-emerald-600 text-white',
    error: 'bg-rose-600 text-white',
    info: 'bg-sky-600 text-white'
  };

  toast.className = `${bgColors[type] || bgColors.success} px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 toast-enter text-sm font-medium z-50`;
  toast.innerHTML = `
    <span>${message}</span>
  `;

  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('toast-enter');
    toast.classList.add('toast-leave');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// 12. Filtrlarni tozalash (Reset)
function resetFilters() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  state.maxPrice = 16000000;
  state.sortBy = 'default';

  if (elements.searchInput) elements.searchInput.value = '';
  if (elements.heroSearchInput) elements.heroSearchInput.value = '';
  if (elements.priceRange) elements.priceRange.value = 16000000;
  if (elements.priceRangeDisplay) elements.priceRangeDisplay.textContent = "16,000,000 so'm";
  if (elements.sortSelect) elements.sortSelect.value = 'default';

  renderCategoryPills();
  renderTours();
}

// 13. Event Listenerlar
function setupEventListeners() {
  // Mavzu almashtirish
  if (elements.themeToggle) elements.themeToggle.addEventListener('click', toggleTheme);
  if (elements.themeToggleMobile) elements.themeToggleMobile.addEventListener('click', toggleTheme);

  // Mobil menyu
  if (elements.mobileMenuBtn && elements.mobileMenu) {
    elements.mobileMenuBtn.addEventListener('click', () => {
      elements.mobileMenu.classList.toggle('hidden');
    });
  }

  // Qidiruv maydoni (Catalog)
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderTours();
    });
  }

  // Hero qidiruvi
  if (elements.heroSearchBtn && elements.heroSearchInput) {
    elements.heroSearchBtn.addEventListener('click', () => {
      state.searchQuery = elements.heroSearchInput.value;
      if (elements.searchInput) elements.searchInput.value = elements.heroSearchInput.value;
      const section = document.getElementById('tours');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      renderTours();
    });

    elements.heroSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        elements.heroSearchBtn.click();
      }
    });
  }

  // Narx slideri
  if (elements.priceRange && elements.priceRangeDisplay) {
    elements.priceRange.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      state.maxPrice = val;
      elements.priceRangeDisplay.textContent = val.toLocaleString('uz-UZ') + " so'm";
      renderTours();
    });
  }

  // Saralash (Sort)
  if (elements.sortSelect) {
    elements.sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderTours();
    });
  }

  // Sevimlilar ochish/yopish
  if (elements.favoritesBtn) elements.favoritesBtn.addEventListener('click', openFavoritesDrawer);
  if (elements.favoritesBtnMobile) elements.favoritesBtnMobile.addEventListener('click', openFavoritesDrawer);
  if (elements.favoritesCloseBtn) elements.favoritesCloseBtn.addEventListener('click', closeFavoritesDrawer);
  if (elements.favoritesDrawerOverlay) elements.favoritesDrawerOverlay.addEventListener('click', closeFavoritesDrawer);

  // Bron qilish formasi
  if (elements.bookingForm) {
    elements.bookingForm.addEventListener('submit', handleBookingSubmit);
  }

  // Obuna bo'lish formasi
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      if (emailInput && emailInput.value) {
        showToast("Rahmat! Sayyohlik yangiliklariga muvaffaqiyatli obuna bo'ldingiz.", 'success');
        emailInput.value = '';
      }
    });
  }

  // Modal tashqarisiga bosganda yopish
  if (elements.tourDetailModal) {
    elements.tourDetailModal.addEventListener('click', (e) => {
      if (e.target === elements.tourDetailModal) {
        closeTourDetailModal();
      }
    });
  }

  if (elements.bookingModal) {
    elements.bookingModal.addEventListener('click', (e) => {
      if (e.target === elements.bookingModal) {
        closeBookingModal();
      }
    });
  }

  if (elements.bookingSuccessModal) {
    elements.bookingSuccessModal.addEventListener('click', (e) => {
      if (e.target === elements.bookingSuccessModal) {
        closeSuccessModal();
      }
    });
  }

  // ESC klavishi bilan modallarni yopish
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeTourDetailModal();
      closeBookingModal();
      closeSuccessModal();
      closeFavoritesDrawer();
      if (elements.mobileMenu) elements.mobileMenu.classList.add('hidden');
    }
  });
}
