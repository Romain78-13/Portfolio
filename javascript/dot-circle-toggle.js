document.addEventListener("DOMContentLoaded", function() {
  const dotsCircle = document.querySelector(".dots-circle");
  const quickLinks = dotsCircle.querySelector(".quick-links");

  // Helper function to toggle open
  function toggleOpen(e) {
    e.stopPropagation();
    dotsCircle.classList.toggle("open");
  }

  // Listen for click
  dotsCircle.addEventListener("click", toggleOpen);
  // Listen for touchstart (for mobile devices)
  dotsCircle.addEventListener("touchstart", toggleOpen);

  // Close if user taps/clicks outside the circle
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
