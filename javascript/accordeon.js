document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      // On "toggle" la classe .open sur l’item cliqué
      // => s’il est fermé, on l’ouvre ; s’il est ouvert, on le ferme.
      item.classList.toggle("open");
    });
  });
});
