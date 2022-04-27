(function () {
    "use strict";

    $('#tabs > ul > li > a').click(function () {

        // 1. get all anchor tags
        $('#tabs > ul > li > a').css({

            // 2. make it so that the background colors are all set to default color
            color: '#cecece',
            backgroundColor: '#a2a2a2'
        })

        // 3. change color of active link
        $(this).css({
            color: '#333',
            backgroundColor: '#eaeaea'
        });

        // 4.change text according to clicked link
        const thisTab = $(this).attr('href');
        /*
            to do this :
            - fade out current content
            - fade in new content
            Do it in split seconds
        */
        $('#tabs > div:visible').fadeOut(200, function () {
            // I want this current tab to appear
            $(thisTab).fadeIn(200);
        });
    });
})();