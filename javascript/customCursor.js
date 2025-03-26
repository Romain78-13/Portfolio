// JS pour customCursor:

document.addEventListener("DOMContentLoaded", () => {
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

  // Quand la souris quitte la fenêtre du document, on masque le curseur
  document.addEventListener("mouseleave", () => {
    customCursor.style.opacity = "0";
  });

// Quand la souris revient dans la fenêtre, on le réaffiche
  document.addEventListener("mouseenter", () => {
    customCursor.style.opacity = "1";
  });
});
