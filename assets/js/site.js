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



const burgerMenu = document.getElementById('burger-menu');

// Samme princip: find elementet med id="menu" (selve navigationsmenuen)
const overlay = document.getElementById('menu');


// --- TRIN 2: Lyt efter klik på burger-ikonet ---

burgerMenu.addEventListener('click', function() {

  overlay.classList.toggle("overlay");

});
