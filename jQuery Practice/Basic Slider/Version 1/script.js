/*
    The important strategy here is that the images are all going to be
    lined up in a row.

    What we have as the actual window, 
    - the slider div, is going to have overflow hidden on it so that 
        you can't see the other images,
    - and it's going to be set to position relative so that we can
        absolutely position the string of images, the strip of images 
        inside that window.
    - The current image will be displaying 
    - and when you click "Next", the next image will slide in
    - or if you click "Previous", the previous image will slide in.
*/



/*
    add an EventListener (.on('load', function() {...})):
    to make sure all assets of the page have been downloaded before 
    running script.
    called "window load function".
    I don't need to create an IIFE.
*/
// Window Load Function :

// $('window').on('load', () => {
//     "use strict";


// DOM Elements

// how many images (if i don't know)
const imageCount = $('#slider ul li').length;

// how wide the first image is
const imageWidth = $('#slider ul li img').first().width();

// total width of slider (take the total no of imgs and * by width of each img)
const totalWidth = (imageCount * imageWidth) + "px";

// starting point for counters
let leftPosition = 0;
let counter = 0;

/*
    Slider ul was not given a specific width in CSS
    Adding a width to it, ensures that display flex would make everything
    fit properly inside the ul, thus the slider has the exact same width
*/
$('#slider ul').css('width', totalWidth);

function animation() {
    leftPosition = `-${counter * imageCount}px`;

    $('#slider ul').animate({ left: leftPosition }, 300, "easeInQuad");
}
console.log('leftPosition:', leftPosition);


// Add a click handler for the "next" button
$("#next").click(() => {

    // counter goes up
    counter++;

    // to inhibit the slider from exceeding the number of photos on sides
    if (counter === imageCount) {
        counter = 0;
    }
    animation();
});

$('#previous').click(() => {
    counter--;

    if (counter < 0) {
        /*
            because counting in js starts from 0, subtract 1 to restart
            from the last image. the ppposite of previous click listener
        */
        counter = imageCount - 1;
    }
    animation();
});

/*

*/


// });
