var slideNumber = 0;
function showSlides() {
var i;
var slides = document.getElementsByClassName("Slides");
var dots = document.getElementsByClassName("pound");

for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideNumber++;

if (slideNumber > slides.length) {
slideNumber = 1
}

for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideNumber-1].style.display = "block";
dots[slideNumber-1].className += " active";
setTimeout(showSlides, 3000);
}