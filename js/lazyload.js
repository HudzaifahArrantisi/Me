// Adds `loading="lazy"` to every image element that does not already have it
// This helper improves page load performance by deferring off-screen images.

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
});