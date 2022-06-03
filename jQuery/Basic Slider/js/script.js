/*
    animation is taking place in css, triggered by js
    
    window.addEventListener('load') is equivalent to on.load in jQuery
    I don't need to add in an IIFE
*/

window.addEventListener('load', function () {
    // DOM ELEMENTS

    // how many slides?
    const slideCount = this.document
        .querySelectorAll('#slider-wrapper ul li').length;
    // how wide are the slides (each)? --- .OFFSETWIDTH gets the width()
    const slideWidth = this.document
        .querySelector('#slider-wrapper').offsetWidth;
    // total width of the slider
    const totalWidth = slideCount * slideWidth + "px";
    // slider dom element
    const slider = this.document.querySelector('#slider-wrapper ul');
    // buttons
    const next = this.document.getElementById('next');
    const previous = this.document.getElementById('prev');

    let leftPosition = 0;
    let counter = 0;

    slider.style.width = totalWidth;

    function movement() {
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    }

    next.addEventListener('click', function (event) {
        event.preventDefault();
        counter++;
        if (counter == slideCount) {
            counter = 0;
            // the rest of movement will not change since it's a 0*0
        }
        movement();
    });

    previous.addEventListener('click', function (event) {
        event.preventDefault();
        counter--;
        if (counter < 0) {
            counter = slideCount - 1;
        } else {
            movement();
        }
    });

});