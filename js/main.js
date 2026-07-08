// Mobile-Navigation ein-/ausklappen
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Karte mit Leaflet (OpenStreetMap) initialisieren
const hausKoordinaten = [57.707521, 15.642175];

const map = L.map('map', { scrollWheelZoom: false });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende',
  maxZoom: 18
}).addTo(map);

L.marker(hausKoordinaten)
  .addTo(map)
  .bindPopup('Unser Ferienhaus')
  .openPopup();

// Ausflugsziele (siehe js/poi-data.js) als eigene Marker in Gold mit Icon
function poiIcon(emoji) {
  return L.divIcon({
    className: 'poi-marker',
    html: `<span>${emoji}</span>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
  });
}

poiData.forEach(poi => {
  L.marker(poi.coords, { icon: poiIcon(poi.icon) })
    .addTo(map)
    .bindPopup(`<strong>${poi.name}</strong><br>${poi.info}`);
});

// Kartenausschnitt so wählen, dass Haus und alle Ausflugsziele sichtbar sind
const alleKoordinaten = [hausKoordinaten, ...poiData.map(poi => poi.coords)];

function passeKartenausschnittAn() {
  // invalidateSize erzwingt eine Neuberechnung der Kartengröße - ohne das kann
  // Leaflet sich beim ersten Laden eine falsche (z.B. 0px breite) Größe merken,
  // wodurch fitBounds komplett falsch zoomt.
  map.invalidateSize();
  map.fitBounds(alleKoordinaten, { padding: [30, 30] });
}

passeKartenausschnittAn();
window.addEventListener('load', passeKartenausschnittAn);

// Slideshows für die Foto-Kategorien
function buildSlideshow(container, captions) {
  const category = galleryData[container.dataset.category];
  if (!category) return;

  // Sortierung erfolgt über den Dateinamen, siehe js/gallery-data.js
  const files = [...category.files].sort();

  const slidesEl = container.querySelector('.slides');
  const dotsEl = container.querySelector('.slide-dots');
  const prevBtn = container.querySelector('.prev');
  const nextBtn = container.querySelector('.next');

  files.forEach((file, i) => {
    const src = `${category.folder}/${file}`;

    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' active' : '');

    const img = document.createElement('img');
    img.src = src;
    img.alt = `${category.title} – Foto ${i + 1}`;
    slide.appendChild(img);

    const caption = captions[src];
    if (caption) {
      const captionEl = document.createElement('div');
      captionEl.className = 'slide-caption';
      captionEl.textContent = caption;
      slide.appendChild(captionEl);
    }

    slidesEl.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Foto ${i + 1} anzeigen`);
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  });

  if (files.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    return;
  }

  const slides = slidesEl.querySelectorAll('.slide');
  const dots = dotsEl.querySelectorAll('.dot');
  let current = 0;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  // Wischen auf Touch-Geräten
  let touchStartX = 0;
  slidesEl.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  });
  slidesEl.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 40) {
      delta > 0 ? prev() : next();
    }
  });
}

document.querySelectorAll('.slideshow').forEach(el => buildSlideshow(el, captionsData));

// Lightbox: Foto in Originalformat groß anzeigen
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.slide img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxImg.src = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// Hinweisfenster beim Klick auf "Jetzt buchen"
const buchenBtn = document.getElementById('buchenBtn');
const buchenModal = document.getElementById('buchenModal');
const modalClose = document.getElementById('modalClose');
const modalWeiter = document.getElementById('modalWeiter');

buchenBtn.addEventListener('click', e => {
  e.preventDefault();
  buchenModal.classList.add('open');
});

function closeBuchenModal() {
  buchenModal.classList.remove('open');
}

modalClose.addEventListener('click', closeBuchenModal);
buchenModal.addEventListener('click', e => {
  if (e.target === buchenModal) closeBuchenModal();
});
modalWeiter.addEventListener('click', () => {
  closeBuchenModal();
  window.open(buchenBtn.href, '_blank', 'noopener');
});
