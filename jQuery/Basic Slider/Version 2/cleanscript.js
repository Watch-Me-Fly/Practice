$('window').on('load', () => {

    'use strict';

    // Dom elements
    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = `${imageCount * imageWidth}px`;
    let leftPosition = 0;
    let counter = 0;

    $('#slider ul').css('width', totalWidth);

    function animate() {
        leftPosition = `-${imageCount * imageWidth}px`;
        $('#slider ul').animate({ 'left': leftPosition }, 500, 'easeInQuad');
    }

    $('#next').click(() => {
        counter++;
        if (counter == imageCount) {
            $('#slider ul').clone()
                .appendTo('#slider');
            $('#slider ul').last()
                .css({ 'left': `-${imageWidth}px` }, 500, 'easeInQuad');

            leftPosition = `-${totalWidth}px`;

            $('#slider ul').last()
                .animate({ 'left': 0 }, 500, 'easeInQuad');
            $('#slider ul').first()
                .animate({ 'left': leftPosition }, 500, 'easeInQuad');

            counter = 0;

        } else {
            animate();
        }
    });

    $('#previous').click(() => {
        counter--;
        if (counter < 0) {
            counter = imageCount - 1;

            $('#slider ul').clone().appendTo('#slider ul');
            $('#slider ul').last()
                .css({ 'left': `-${imageWidth}px` }, 500, 'easeInQuad');

            leftPosition = `-${counter * imageWidth}px`;

            $('#slider ul').last()
                .animate({ 'left': leftPosition }, 500, 'easeInQuad');
            $('#slider ul').first()
                .animate({ 'left': `${imageWidth}px` }, 500, 'easeInQuad', () => {
                    $('#slider ul').first().remove();
                });

        } else {
            animate();

        }
    });

});