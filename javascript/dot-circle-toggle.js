// dots-circle-toggle.js

document.addEventListener("DOMContentLoaded", function() {
  const dotsCircle = document.querySelector(".dots-circle");
  const quickLinks = dotsCircle.querySelector(".quick-links");

  // 1) On click, toggle .open
  dotsCircle.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling up
    dotsCircle.classList.toggle("open");
  });

  // 2) Close if user clicks anywhere outside
  document.addEventListener("click", (e) => {
    // If the target of the click is not the dotsCircle nor a descendant
    if (!dotsCircle.contains(e.target)) {
      dotsCircle.classList.remove("open");
    }
  });
});
