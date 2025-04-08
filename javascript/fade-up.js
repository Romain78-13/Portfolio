document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne tous les éléments qui ont la classe .fade-up
  const fadeUpElements = document.querySelectorAll(".fade-up");

  // Options pour l'intersection
  const observerOptions = {
    root: null,
    threshold: 0.1
  };

  // Observer callback
  const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // On ajoute la classe .show quand l'élément entre dans le viewport
        entry.target.classList.add("show");
      } else {
        // Si tu veux qu'elle reparte quand on ressort, retire la classe
        // Sinon, laisse la box visible :
        entry.target.classList.remove("show");
      }
    });
  }, observerOptions);

  // Observons chaque élément
  fadeUpElements.forEach(elem => {
    fadeUpObserver.observe(elem);
  });
});
