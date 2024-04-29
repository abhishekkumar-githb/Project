// document.addEventListener("DOMContentLoaded", function() {
//     const slides = document.querySelectorAll('.slide');
//     const totalSlides = slides.length;
//     let counter = 0;

//     slides.forEach((slide, index) => {
//         slide.style.left = `${index * 100}%`;
//     });

//     window.goPrev = () => {
//         counter--;
//         if (counter < 0) {
//             counter = totalSlides - 1;
//         }
//         slideImage();
//     };

//     window.goNext = () => {
//         counter++;
//         if (counter === totalSlides) {
//             counter = 0;
//         }
//         slideImage();
//     };

//     const slideImage = () => {
//         slides.forEach(slide => {
//             slide.style.transform = `translateX(-${counter * 100}%)`;
//         });
//     };
// });


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}