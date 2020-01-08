"use strict";

// Getting the users screen height for section #1

const screenHeight = screen.height - 120;

document.getElementById('section1').style.height = screenHeight+'px';

//Building the carousel for my skills and expertise section
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

//Sticky Navbar background
window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");
var section1 = document.getElementById("section1");
var sticky = 10;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky", "fade_in_show");
  } else {
    navbar.classList.remove("sticky", "fade_in_show").add("");
  }
}