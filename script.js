document.addEventListener("DOMContentLoaded", () => {

  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if(target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Fade-in Sections
  const fadeSections = document.querySelectorAll(".fade-section");
  const fadeItems = document.querySelectorAll(".fade-item");

  const observerSection = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("show");
        observerSection.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  fadeSections.forEach(section => observerSection.observe(section));

  const observerItems = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("show"), index * 100);
        observerItems.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  fadeItems.forEach(item => observerItems.observe(item));

  // Hero Slider
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  if(slides.length > 0){
    slides[currentSlide].classList.add('active');
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }

  // Testimonials Carousel
  const testimonials = document.querySelectorAll('.testimonial-item');
  let tIndex = 0;
  if(testimonials.length > 0){
    function showTestimonial(){
      testimonials.forEach((t, i) => t.style.display = i === tIndex ? 'block' : 'none');
      tIndex = (tIndex + 1) % testimonials.length;
    }
    showTestimonial();
    setInterval(showTestimonial, 4000);
  }

  // FAQ Accordion
  const faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      parent.classList.toggle('active');
    });
  });

});
