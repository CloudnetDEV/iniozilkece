// ===== LIVE CLOCK =====
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const el = document.getElementById('navClock');
  if (el) el.textContent = h + ':' + m + ':' + s;
}
setInterval(updateClock, 1000);
updateClock();

// ===== NAVBAR SCROLL =====
var navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== SCROLL DOWN =====
var scrollBtn = document.getElementById('heroScroll');
if (scrollBtn) {
  scrollBtn.addEventListener('click', function() {
    var target = document.getElementById('about');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

// ===== REVEAL ON SCROLL =====
var revealEls = document.querySelectorAll('.reveal');
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(function(el) {
  observer.observe(el);
});

// ===== DUPLICATE SKILLS SLIDER FOR INFINITE LOOP =====
var slider = document.getElementById('skillsSlider');
if (slider) {
  var items = Array.prototype.slice.call(slider.children);
  items.forEach(function(item) {
    slider.appendChild(item.cloneNode(true));
  });
}
