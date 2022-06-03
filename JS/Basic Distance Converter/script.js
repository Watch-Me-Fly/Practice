(function() {
    "use strict";


    document.getElementById('convert')
    .addEventListener('submit', function (event) {
        // prevent processing by php
        event.preventDefault();


        // 1. getting the value entered into a variable 'distance'
        // 2. turning the value from string (default js) into number
        // parse float allows taking the number and turning it to  a floating decimal point
        // distance = parseFloat(distance);
        const distance = parseFloat(document
            .getElementById('distance').value);
        const answer = document.querySelector('#answer');


        if (distance) {
            // conversion will give many decimals
            // to get only a couple of decimals:
                // Math.round(var) will round up the number.
                // by *100 then /100, we allow to have decimals as much as the zeros
                        // var roundedConversion = (Math.round(conversion * 100)/100);
                // or use 'toFixed(number of decimals)', separated eg :
                        // var roundedConversion = conversion.toFixed(2);
            const conversion = (distance * 1.609344).toFixed(2); 


            // display the answer in the bottom div using inner HTML
            answer.innerHTML = `<h2> ${distance} miles are equal to ${conversion} Km </h2>`;
        } else {
            // display error
            answer.innerHTML = `<h2>please enter a number</h2>`;
        }
    });
})();