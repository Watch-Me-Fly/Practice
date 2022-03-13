var currentImage = 0;
var myImage = ["image1.png", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"];

var container = document.getElementById('content');
var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('previous');


// this is where we're creating the fade in effect
// adding a new image on top of the previous, comes in as transparent till it becomes opaque (thus fades in)
var newSlide = document.createElement('img'); // 1. create new img element
newSlide.src = `slides/${myImage[currentImage]}`; // 2.set src attribute
// ${} holds inside the variable, goes to get the next photo from folder
newSlide.className = "fadeinimg"; // 3. set class name
newSlide.appendChild(newSlide); // 4. append to container


nextBtn.addEventListener('click', function (event) {
    event.preventDefault(); // prevents trying to go the # in the href by default
    currentImage++;
    if (currentImage > (myImage.length-1)) {currentImage = 0;}
});
prevBtn.addEventListener('click', function (event) {
    event.preventDefault();
    currentImage--;
    if (currentImage < 0) {currentImage = myImage.length-1 ;}
});