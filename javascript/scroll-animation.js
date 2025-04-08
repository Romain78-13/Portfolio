document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne toutes les sections à faire apparaître
  const fadeSections = document.querySelectorAll(".fade-section");

  // Crée un IntersectionObserver avec un seuil (threshold)
  // ex. 0.3 => l’animation se déclenche quand 30% de la section est visible
  const observerOptions = {
    threshold: 0.25
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Dès que 30% de la section entre dans l'écran, on la rend opaque
        entry.target.style.opacity = 1;
      } else {
        // Si elle sort à nouveau du viewport, on la remet à 0
        entry.target.style.opacity = 0;
      }
    });
  }, observerOptions);

  // On observe chacune des sections
  fadeSections.forEach(section => observer.observe(section));
});
