/* =========================================================
   PORTFOLIO — JavaScript vanilla (simple et commenté)
   3 fonctionnalités :
   1) le menu burger sur mobile
   2) l'apparition des éléments au défilement
   3) l'année automatique dans le footer
   ========================================================= */

// --- 1) Menu burger (mobile) ---
const burger = document.getElementById("burger");
const navList = document.getElementById("navList");

burger.addEventListener("click", () => {
  const ouvert = navList.classList.toggle("is-open");
  burger.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", ouvert);
});

// On referme le menu quand on clique sur un lien
navList.querySelectorAll("a").forEach((lien) => {
  lien.addEventListener("click", () => {
    navList.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  });
});

// --- 2) Apparition au défilement (IntersectionObserver) ---
// Quand un élément ".reveal" entre dans l'écran, on lui ajoute la classe "is-visible" qui déclenche la transition CSS.
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target); // on n'observe plus une fois affiché
    }
  });
},{ threshold: 0.15 });

elements.forEach((el) => observer.observe(el));

// --- 3) Année automatique dans le footer ---
document.getElementById("year").textContent = new Date().getFullYear();
