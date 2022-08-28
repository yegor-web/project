const slides = document.querySelectorAll('.slide');
for (const slide of slides){
   slide.addEventListener('click', () => {
      cleatActiveclasses();
      slide.classList.add('active');
   })
}

function cleatActiveclasses(){
   slides.forEach((slide) => {
      slide.classList.remove('active');
   })
}