// Défilement fluide au clic sur les liens du menu
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Attendre que la page soit chargée pour cacher le loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = 0;
  loader.style.pointerEvents = "none";
  setTimeout(() => (loader.style.display = "none"), 500); // petit délai pour transition douce
});

// Animation typewriter
const textArray = ["RAKOTONIRINA Fandresena votre Développeur WEB !!!🖖"];
const typedText = document.querySelector(".typed-text");
let arrayIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < textArray[arrayIndex].length) {
    typedText.textContent += textArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 1500);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    arrayIndex = (arrayIndex + 1) % textArray.length;
    setTimeout(typeText, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) typeText();
});

// Filtres des projets
const boutons = document.querySelectorAll(".filtre-btn");
const projets = document.querySelectorAll(".projet");

boutons.forEach((btn) => {
  btn.addEventListener("click", () => {
    boutons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filtre = btn.getAttribute("data-filtre");

    projets.forEach((p) => {
      if (filtre === "tous" || p.getAttribute("data-type") === filtre) {
        p.style.display = "block";
      } else {
        p.style.display = "none";
      }
    });
  });
});
