document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
    dots.forEach(d => d.classList.remove('active'));
    if(dots[index]) dots[index].classList.add('active');
  }

  function nextSlide() { currentSlide = (currentSlide+1)%slides.length; showSlide(currentSlide); }
  function prevSlide() { currentSlide = (currentSlide-1+slides.length)%slides.length; showSlide(currentSlide); }

  showSlide(currentSlide);

  let autoSlide = setInterval(nextSlide, 5000);

  // Arrows
  document.querySelector('.next')?.addEventListener('click', ()=>{ nextSlide(); resetInterval(); });
  document.querySelector('.prev')?.addEventListener('click', ()=>{ prevSlide(); resetInterval(); });

  // Dots
  dots.forEach(dot => dot.addEventListener('click', ()=>{
    currentSlide = parseInt(dot.getAttribute('data-index'));
    showSlide(currentSlide);
    resetInterval();
  }));

  // Pause on hover
  const hero = document.querySelector('.hero');
  if(hero){
    hero.addEventListener('mouseenter', ()=> clearInterval(autoSlide));
    hero.addEventListener('mouseleave', ()=> autoSlide=setInterval(nextSlide,5000));
  }

  // Mobile Swipe
  let touchStartX=0, touchEndX=0;
  if(hero){
    hero.addEventListener('touchstart', e=>touchStartX=e.changedTouches[0].screenX);
    hero.addEventListener('touchend', e=>{
      touchEndX=e.changedTouches[0].screenX;
      handleGesture();
    });
    function handleGesture(){
      const threshold=50;
      if(touchEndX < touchStartX - threshold){ nextSlide(); resetInterval(); }
      if(touchEndX > touchStartX + threshold){ prevSlide(); resetInterval(); }
    }
  }

  function resetInterval(){ clearInterval(autoSlide); autoSlide=setInterval(nextSlide,5000); }

  // FAQ toggle
  const faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', ()=>{
      const answer = btn.nextElementSibling;
      if(answer.style.display === "block"){ answer.style.display = "none"; }
      else{ answer.style.display = "block"; }
    });
  });

});
