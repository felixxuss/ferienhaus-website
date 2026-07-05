// Ausflugsziele für die Karte. Koordinaten sind Circa-Angaben (Orts-/Gebietsmitte).
// Genauere Position gewünscht? In Google Maps die Stelle suchen, rechte Maustaste
// auf den Punkt -> die angezeigten Koordinaten kopieren -> hier einsetzen.
//
// HINWEIS: Die Koordinaten für "Katthult", "Bullerbü" und "Rönnäs am Sommen" sind
// grobe Schätzungen (kleine, wenig bekannte Orte) - bitte einmal in Google Maps
// gegenchecken und bei Bedarf anpassen.
const poiData = [
  {
    name: 'Astrid-Lindgren-Drehort Katthult',
    coords: [57.57, 15.87],
    icon: '🎬',
    info: 'Original-Drehort der Astrid-Lindgren-Verfilmungen'
  },
  {
    name: 'Bullerbü (Sevedstorp)',
    coords: [57.585, 15.86],
    icon: '🏡',
    info: 'ca. 20 Autominuten entfernt'
  },
  {
    name: 'Astrid Lindgrens Welt',
    coords: [57.6706, 15.8583],
    icon: '🎡',
    info: 'ca. 20 Autominuten entfernt'
  },
  {
    name: 'Norra Kvill Nationalpark',
    coords: [57.6975, 15.5199],
    icon: '🌲',
    info: 'ca. 10 Autominuten entfernt'
  },
  {
    name: 'Vimmerby',
    coords: [57.6667, 15.8667],
    icon: '🏘️',
    info: 'ca. 20 Autominuten entfernt'
  },
  {
    name: 'Sommen-See (Rönnäs)',
    coords: [58.02, 15.13],
    icon: '💧',
    info: 'ca. 45 Autominuten entfernt'
  },
  {
    name: 'Västervik',
    coords: [57.7595, 16.6386],
    icon: '⚓',
    info: 'ca. 1 Autostunde entfernt, Schärenstadt an der Ostsee'
  }
];
