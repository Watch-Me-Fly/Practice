(function() {
    "use strict";

    let currentImage = 0;
    const myphotos = ["image1.png", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"];
    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');

    // inside, we define a variable newSlide: 
        // this is where we're creating the fade in effect
        // adding a new image on top of the previous, comes in as transparent till it becomes opaque (thus fades in)
            // 1. create new img element
            // 2.set src attribute
                // ${} holds inside the variable, goes to get the next photo from folder
            // 3. set class name
            // 4. append to container

    // to prevent html stacking on page for newly created elements :
        // remove extra children - to keep the DOM cleaner

    // instead of repeating the code inside next and previous buttons :
        // create a separate function to be mentioned inside each button

    function swapImage () {
        // fade in effect
        const newSlide = document.createElement('img'); 
        newSlide.src = `Slides/${myphotos[currentImage]}`; 
        newSlide.className = "fadeinimg"; 
        container.appendChild(newSlide);

        // removing children
        if (container.children.length > 1) {
            container.removeChild(container.children[0]);
        }
    }

    nextBtn.addEventListener('click', function (event) {
        event.preventDefault(); // prevents trying to go the # in the href by default
        currentImage++;
        if (currentImage > (myphotos.length-1)) {currentImage = 0;}

        swapImage();
    });
    prevBtn.addEventListener('click', function (event) {
        event.preventDefault();
        currentImage--;
        if (currentImage < 0) {currentImage = myphotos.length-1 ;}

        swapImage();
    });

}) ();