document.addEventListener("DOMContentLoaded", () => {
  const flipCards = document.querySelectorAll(".flip-card");

  flipCards.forEach(card => {
    card.addEventListener("click", () => {
      const inner = card.querySelector(".flip-card-inner");
      // On bascule la classe "flipped" au clic
      inner.classList.toggle("flipped");
    });
  });
});
