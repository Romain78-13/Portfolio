// JS pour customCursor:

document.addEventListener("DOMContentLoaded", () => {
  // Si l'appareil est tactile, on ne crée pas le curseur personnalisé
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return;
  }

  // Créer l'élément du curseur personnalisé
  const customCursor = document.createElement("div");
  customCursor.classList.add("custom-cursor");
  document.body.appendChild(customCursor);

  // Mettre à jour la position du curseur sur chaque mouvement de souris
  document.addEventListener("mousemove", (e) => {
    customCursor.style.left = e.clientX + "px";
    customCursor.style.top = e.clientY + "px";
  });

  // Ajouter l'effet d'ombre sur hover pour certains éléments interactifs (liens et boutons)
  document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("mouseenter", () => customCursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => customCursor.classList.remove("hover"));
  });

  // Ajouter un effet au clic
  document.addEventListener("mousedown", () => {
    customCursor.classList.add("active");
  });
  document.addEventListener("mouseup", () => {
    customCursor.classList.remove("active");
  });
});
