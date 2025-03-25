// timeline.js

// 1) Reveal AND hide events on scroll with IntersectionObserver
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

// 2) Fill the line progressively and move the leaf indicator as we scroll
const timeline = document.querySelector('.timeline');
const lineFill = document.querySelector('.line-fill');
const leafIndicator = document.querySelector('.leaf-indicator');

// The total pixel height of the timeline container
const totalHeight = timeline.offsetHeight;

// Revised updateLineFill with an offset
function updateLineFill() {
  const rect = timeline.getBoundingClientRect();

  // Start the fill when the timeline's top is at 50% of the viewport
  const offset = window.innerHeight * 0.35;

  let scrolled = offset - rect.top;

  // Clamp the value
  if (scrolled < 0) scrolled = 0;
  if (scrolled > totalHeight) scrolled = totalHeight;

  // Apply to line fill
  lineFill.style.height = scrolled + 'px';

  // Position the leaf
  if (leafIndicator) {
    leafIndicator.style.top = scrolled + 'px';
  }
}

// Listen to scroll and resize
window.addEventListener('scroll', updateLineFill);
window.addEventListener('resize', updateLineFill);

// Initialize on load
updateLineFill();
