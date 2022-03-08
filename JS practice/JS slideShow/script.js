(function () {
    var myImages = ["image1.png", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"];
    var currentImage = 0;
    
    document.getElementById('previous').onclick = previousImage;
    document.getElementById('next').onclick = nextImage;
    
    function previousImage () {
        currentImage--;
        if (currentImage < 0) { currentImage = myImages.length-1; }
        document.getElementById('myimage').src = myImages[currentImage];
    }
    function nextImage () {
        currentImage++;
        if (currentImage > myImages.length-1) { currentImage = 0; }
        document.getElementById('myimage').src = myImages[currentImage];
    }
} ) ();