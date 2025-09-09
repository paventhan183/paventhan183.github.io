// your code goes here

// Loader hide
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  const myElement = document.getElementById("call-btn");

  if (myElement) {
    myElement.classList.add("show");
  }
  //document.getElementById("call-btn").classList.add("show"); 
});

// Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => navMenu.classList.toggle('show'));
menuToggle.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navMenu.classList.toggle('show'); } });


// Animate counters
function animateCount(id, target, duration, plus) {
  let el = document.getElementById(id), start = 0, inc = target / (duration / 20),
    intv = setInterval(() => {
      start += inc; if (start >= target) { start = target; clearInterval(intv); }

      el.textContent = Math.floor(start).toLocaleString();
      el.textContent = plus ? el.textContent + '+' : el.textContent;
    }, 20);

}
animateCount("experience", 12, 2000, true);
animateCount("patients", 10000, 2000, true);
animateCount("surgery", 1500, 2000, true);
animateCount("star", 5, 2000, false);
// Get the button
let moveUpBtn = document.getElementById("moveUpBtn");

// Show the button when scrolling down
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    moveUpBtn.style.display = "block";
  } else {
    moveUpBtn.style.display = "none";
  }
};

// When button is clicked, scroll to top smoothly
moveUpBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Animate stat cards when they scroll into view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // When the element is in view, add the 'visible' class
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stop observing the element once it has become visible
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 }); // Trigger when 10% of the item is visible

// Tell the observer to watch for all stat items
document.querySelectorAll('.stat-item').forEach(item => observer.observe(item));

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqAnswer = button.nextElementSibling;

    // Toggle active class on the button
    button.classList.toggle('active');

    if (button.classList.contains('active')) {
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
    } else {
      faqAnswer.style.maxHeight = 0;
    }
  });
});

// Lazy load Google Map to improve performance
const mapObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const iframe = entry.target;
      iframe.src = iframe.dataset.src; // Set the src from data-src
      observer.unobserve(iframe); // Stop observing once loaded
    }
  });
}, { threshold: 0.1 });

// Tell the observer to watch for the map iframe
mapObserver.observe(document.getElementById('google-map-iframe'));

// Highlight active navigation link on scroll
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href'))).filter(section => section);

function highlightNavOnScroll() {
  const scrollY = window.pageYOffset;
  let currentSectionId = '';

  sections.forEach(section => {
    // 150px offset to trigger the highlight a bit before the section top hits the very top of the viewport
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSectionId) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNavOnScroll);
document.addEventListener('DOMContentLoaded', highlightNavOnScroll); // Run on initial load to highlight the top link
