$('window').on('load', () => {
    /*
        Strategy :
        clone the entier set of slides (the ul not images) to give a 
        sliding effect
    */

    "use strict";

    // DOM Elements
    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = (imageCount * imageWidth) + "px";
    let leftPosition = 0;
    let counter = 0;

    $('#slider ul').css('width', totalWidth);

    function animation() {
        /*
            The starting position of the slider (the whole strip)
        */
        leftPosition = `-${counter * imageCount}px`;
        $('#slider ul').animate({ left: leftPosition }, 300, "easeInQuad");
    }
    function cloning() {
        /*
            1. jQuery clone method : clone the whole ul 
            2. then; append it to the slider by putting it at the 
            end of slider on either side
        */
        $('#slider ul').clone().appendTo('#slider');
    }

    $("#next").click(() => {
        counter++;
        if (counter == imageCount) {
            /*
                1. clone and append
                2. set the css left property 
                    (this will make it show at the end)
                3. obtain total width and set to left position:
                    a single list has 2000px of width, obtain length
                    to move the whole second list right or left.
                4. Animate both unordered lists at the same time :
                    second list (the cloned list)
                        to left : zero. (move it to the left side)
                    first list (the original)
                        I need 2000px for it to go to the right side
                5. After the animation is completed :
                    add a callback function to remove the first one
                    of the DOM entierly.
                6. after it is off : set the counter to zero, 
                    and everything should go back to how it should be.
            */
            cloning();
            $('#slider ul').last().css({ 'left': `${imageWidth}px` });

            leftPosition: `-${totalWidth}px`;

            //    second list
            $('#slider ul').last().animate({ 'left': 0 }, 300, 'easeInQuad');
            //    first list
            $('#slider ul').first().animate({ 'left': leftPosition }, 300, 'easeInQuad', () => {
                $('#slider ul').first().remove();
            });

            counter = 0;
        }
        else {
            animation();
        }
    });

    $('#previous').click(() => {
        counter--;
        if (counter < 0) {
            /*
                1. decrement
                2. check if counter < 0 (we ran through all imgs)
                3. set counter to imgCount -1 (for js reading)
                4. clone ul and append to slider on the left side
                    starting at a negative position -2000px
                    going +ve and less negative with every movement
                5. changing the left position by subtracting the width
                    of image.
            */
            counter = imageCount - 1;

            cloning();
            $('#slider ul').last()
                .css({ 'left': `-${imageWidth}px` });

            leftPosition: `-${counter * imageWidth}px`;

            $('#slider ul').last()
                .animate({ 'left': leftPosition }, 300, 'easeInQuad');
            $('#slider ul').first()
                .animate({ 'left': imageWidth + 'px' }, 300, 'easeInQuad', () => {
                    $('#slider ul').first().remove();
                });

        } else {
            animation();
        }
    });

});