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

// Banner slider
const slides = document.querySelectorAll('.banner-slider .slide');
let index = 0;
setInterval(() => { slides.forEach((s, i) => s.classList.toggle('active', i === index)); index = (index + 1) % slides.length; }, 4000);

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

function loadWidget() {
  // 1. Create the widget container div
  let div = document.createElement("div");
  div.className = "elfsight-app-ff0aa769-35b6-43b1-b509-29937e7567ca";
  div.setAttribute("data-elfsight-app-lazy", "");
  document.getElementById("widgetContainer").appendChild(div);

  // 2. Load the Elfsight platform script if not already loaded
  if (!document.getElementById("elfsightScript")) {
    let script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    script.id = "elfsightScript";
    document.body.appendChild(script);
  }
}
const button = document.getElementById('myButton');

button.addEventListener('click', function () {
  // Hide the button
  button.style.display = 'none';
  // Optional: do something else

});
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
