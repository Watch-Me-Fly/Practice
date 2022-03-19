(function () {
    // defining variables
    var convertType = "miles";
    var heading = document.querySelector('h1');
    var intro = document.getElementById('intro');
    var answerDiv = document.getElementById('answer');
    var forme = document.getElementById('convert');

    // adding 2 event listeners
        document.addEventListener('keydown', function(event) {
            // handling the K & M keys
            var key = event.code; 
            // event.which is depricated (does no longer exist)
            
            // change heading
            // change intro paragraphe
            // change the value of convert type variable

            if (key === "KeyK") {
                convertType = "kilometers";
                heading.innerHTML = "Kilometers to Miles converter";
                intro.innerHTML = "Type in a number of kilometers and click the button to convert the disrance to kilometers";
            } 
            else if (key === "KeyM") {
                convertType = "miles";
                heading.innerHTML = "Miles to Kilometers Converter";
                intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
            }
        });

        forme.addEventListener('submit', function(event) {
            event.preventDefault();
            
            var distance = parseFloat(document.getElementById('distance').value);

            if (distance) { // if it is a number
                // convert M to K 1.609344
                if (convertType == "miles") {
                    var converted = (distance*1.609344).toFixed(2);
                    answerDiv.innerHTML = `<h2>${distance} miles converts to ${converted} kilometers</h2>`;
                }
                // convert K to M 0.621371192
                else {
                    var converted = (distance*0.621371192).toFixed(2);
                    answerDiv.innerHTML = `<h2>${distance} kilometers converts to ${converted} miles</h2>`;
                }
                answerDiv.style.color = "white";
            } else {
                answerDiv.innerHTML = "<h2> please enter a number </h2>";
                answerDiv.style.color = "red";
            }
        });
})();