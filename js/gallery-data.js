// Reihenfolge der Slideshow-Fotos ändern:
// Einfach die Dateien im entsprechenden images/-Unterordner umbenennen
// (z. B. 01.jpg, 02.jpg, 03.jpg, ...). Die Slideshow sortiert die Fotos
// automatisch nach Dateiname - der Inhalt dieser Listen muss dafür NICHT
// angepasst werden, solange keine Fotos hinzugefügt/entfernt werden.
//
// Neues Foto hinzufügen: Datei in den passenden Ordner legen und ihren
// Dateinamen unten in der jeweiligen "files"-Liste ergänzen.
const galleryData = {
  haus: {
    title: 'Haus',
    folder: 'images/haus',
    files: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg']
  },
  aussenbereich: {
    title: 'Außenbereich',
    folder: 'images/aussenbereich',
    files: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg']
  },
  umgebung: {
    title: 'Umgebung',
    folder: 'images/umgebung',
    files: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg']
  }
};
