
const imageCount = $('#slider ul li').length;
const imageWidth = $('#slider ul li img').first().width();
const totalWidth = (imageCount * imageWidth) + "px";
let leftPosition = 0;
let counter = 0;

$('#slider ul').css('width', totalWidth);

function slider() {
    counter++;
    if (counter === imageCount) {
        counter = 0;
    }
    leftPosition = `-${counter * imageWidth}px`;
    $('#slider ul').animate({ left: leftPosition }, 300, "easeInQuad");
}

// must not put the function with (), or else it will fire right away
let intervalFunction = setInterval(slider, 2000);

$('#slider ul li img')
    .mouseover(function () {
        clearInterval(intervalFunction);
    });
