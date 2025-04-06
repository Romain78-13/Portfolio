// timeline.js

// 1) afficher et cacher les événements avec le scroll en utilisant IntersectionObserver
const events = document.querySelectorAll('.event');

const observerOptions = {
  threshold: 0.1 // or adjust if needed
};

const revealOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
      entry.target.classList.add('hidden');
    }
  });
}, observerOptions);

events.forEach(event => {
  revealOnScroll.observe(event);
});

// 2) Mettre à jour la barre de timeline en fonction du scroll
const timeline = document.querySelector('.timeline');
const lineFill = document.querySelector('.line-fill');
const leafIndicator = document.querySelector('.leaf-indicator');

const totalHeight = timeline.offsetHeight;

// Revised updateLineFill with an offset
function updateLineFill() {
  const rect = timeline.getBoundingClientRect();

  // Commence quand la barre est à 35% de la vue utilisateur
  const offset = window.innerHeight * 0.35;

  let scrolled = offset - rect.top;

  if (scrolled < 0) scrolled = 0;
  if (scrolled > totalHeight) scrolled = totalHeight;

  // Appliquer sur la ligne
  lineFill.style.height = scrolled + 'px';

  // Positionner la feuille
  if (leafIndicator) {
    leafIndicator.style.top = scrolled + 'px';
  }
}

// Réponds au scroll et au resize
window.addEventListener('scroll', updateLineFill);
window.addEventListener('resize', updateLineFill);

// Initialize on load
updateLineFill();
