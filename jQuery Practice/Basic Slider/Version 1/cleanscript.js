
$('window').on('load', () => {
    "use strict";
    // DOM Elements
    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = (imageCount * imageWidth) + "px";
    let leftPosition = 0;
    let counter = 0;

    $('#slider ul').css('width', totalWidth);

    function animation() {
        leftPosition = `-${counter * imageCount}px`;
        $('#slider ul').animate({ left: leftPosition }, 300, "easeInQuad");
    }
    $("#next").click(() => {
        counter++;
        if (counter === imageCount) {
            counter = 0;
        }
        animation();
    });

    $('#previous').click(() => {
        counter--;
        if (counter < 0) {
            counter = imageCount - 1;
        }
        animation();
    });

});