document.addEventListener("DOMContentLoaded", function() {
  const dotsCircle = document.querySelector(".dots-circle");
  const quickLinks = dotsCircle.querySelector(".quick-links");

  // Fonction pour basculer l'affichage du menu
  function toggleOpen(e) {
    e.stopPropagation();
    dotsCircle.classList.toggle("open");
  }

  // Écoute sur le cercle pour click et touchstart
  dotsCircle.addEventListener("click", toggleOpen);
  dotsCircle.addEventListener("touchstart", toggleOpen);

  // Empêcher la propagation sur chaque quick-link pour ne pas fermer le menu lorsqu'on les touche
  const quickLinkElements = dotsCircle.querySelectorAll(".quick-link");
  quickLinkElements.forEach(link => {
    link.addEventListener("click", function(e) {
      e.stopPropagation();
    });
    link.addEventListener("touchstart", function(e) {
      e.stopPropagation();
    });
  });

  // Fermer le menu si on clique ou touche en dehors du cercle
  document.addEventListener("click", (e) => {
    if (!dotsCircle.contains(e.target)) {
      dotsCircle.classList.remove("open");
    }
  });
  document.addEventListener("touchstart", (e) => {
    if (!dotsCircle.contains(e.target)) {
      dotsCircle.classList.remove("open");
    }
  });
});
