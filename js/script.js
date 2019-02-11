
//CAROUSEL

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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

//LIGHTBOX
// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('myImg1');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');
var modalImg1 = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");
var modalImg5 = document.getElementById("img05");
var captionText1 = document.getElementById("caption1");
var captionText2 = document.getElementById("caption2");
var captionText3 = document.getElementById("caption3");
var captionText4 = document.getElementById("caption4");
var captionText5 = document.getElementById("caption5");
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  // captionText1.innerHTML = this.alt;
}
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  // captionText2.innerHTML = this.alt;
}
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  // captionText3.innerHTML = this.alt;
}
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  // captionText4.innerHTML = this.alt;
}
img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
  // captionText5.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementById("myModal1");
var span2 = document.getElementById("myModal2");
var span3 = document.getElementById("myModal3");
var span4 = document.getElementById("myModal4");
var span5 = document.getElementById("myModal5");

// When the user clicks outside the modal, close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
span5.onclick = function() {
  modal5.style.display = "none";
}

// QUOTES SLIDESHOW

var text = ["Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson", "For every minute you remain angry, you give up sixty seconds of peace of mind. -Ralph Waldo Emerson", "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you. -Ralph Waldo Emerson"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 5000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
