// =============================================
// BURGER-MENU — JAVASCRIPT
//
// Dette script styrer hvad der sker, når brugeren
// klikker på burger-ikonet. Det tilføjer og fjerner
// CSS-klasser, som får ikonet og menuen til at animere.
//
// Scriptet kører EFTER at HTML-siden er indlæst,
// fordi <script>-tagget i HTML har attributten "defer".
// =============================================


// --- TRIN 1: Find elementerne i HTML-dokumentet ---

// document.getElementById() leder i HTML-koden efter det element
// der har id="burger-menu" og gemmer en reference til det i variablen.
// Vi kan herefter bruge variablen til at manipulere elementet.
const burgerMenu = document.getElementById('burger-menu');

// Samme princip: find elementet med id="menu" (selve navigationsmenuen)
const overlay = document.getElementById('menu');


// --- TRIN 2: Lyt efter klik på burger-ikonet ---

// addEventListener("click", ...) betyder:
// "Når brugeren klikker på burgerMenu, så kør funktionen herinde."
burgerMenu.addEventListener('click', () => {

  // classList.toggle("close") virker som en lyskontakt:
  // - Har elementet IKKE klassen "close"? → tilføj den.
  // - Har elementet allerede klassen "close"? → fjern den.
  //
  // I CSS skifter klassen "close" burger-ikonets tre streger til et X-tegn.
  burgerMenu.classList.toggle("close");

  // Samme toggle-princip på navigationsmenuen:
  // Klassen "overlay" gør i CSS, at menuen glider synligt frem.
  // Fjernes klassen igen, skjules menuen.
  overlay.classList.toggle("overlay");

});
