(function () {
    // 1. grab form element and put into value
    // 2. add an event listener of submission
    var detailsForm = document.getElementById('distantionDetailsForm');
    detailsForm.addEventListener('submit', handleFormSubmit);

    // 3. run a function called "handleFormSubmit"
    function handleFormSubmit(event) {
    // a. prevent default form submission
    event.preventDefault();


    // b. extract values from each form field
    var destName = event.target.elements["name"].value;
    var destLocation = event.target.elements['location'].value;
    var destPhoto = event.target.elements['photo'].value;
    var destDesc = event.target.elements['description'].value;


    // c. clear out the form fields
    for( var i = 0 ; i < detailsForm.length; i++ ) {
        // The loop will get element i = 0 in the form, and set its value to empty. clearing out each element of the form.
        detailsForm.elements[i].value = "";
    }


    // d. create card here
    var destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc); // passing as function


    // e. change the header at the top of destination list
    var wishListContainer = document.querySelector('#destinations-container');
    if (wishListContainer.children.length === 0) {
        // if it's empty, then do :
        document.querySelector('#title').innerHTML = "My Wish List";
    }


    // f. add card here
    document.querySelector('#destinations-container').appendChild(destCard);
    }

    // 4. run a funciton that creates the new card
    // a. createDestinationCard has 4 parameters matching each field on form 
    function createDestinationCard(name, location, photoURL, description) {
    // b. pass the data in when card is made, and use it to generate custom html for the card and add it to the dom.
    var card = document.createElement('div');
        card.className = 'card';
        // wishListContainer.appendChild(card);

    var img = document.createElement('img');
    // img needs alt, which will be set to name;
        img.setAttribute('alt', name);
    // set url source of img (determine first if url has been provided)
    var constantPhotoURL = "images/signpost.jpg";
    if ( photoURL.length === 0 ) {
        img.setAttribute('src',constantPhotoURL);
        // or
        // img.src = constantphotoURL;
    } else {
        img.setAttribute('src', photoURL);
    }
        card.appendChild(img);

    var cardBody = document.createElement('div');
        cardBody.className = "card-body";

    var cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

    var cardSubtitle = document.createElement('h4');
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);

    if (description.length !== 0) {
        // !== not equal to
        var cardText = document.createElement('p');
            cardText.className = "card-text";
            cardText.innerText = description;
            cardBody.appendChild(cardText);
    }

    // adding a remove button
    var cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerText = "Remove";
        cardDeleteBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDeleteBtn);
        card.appendChild(cardBody);

    return card;
    }

    function removeDestination(event) {
    var card = event.target.parentElement.parentElement;
        card.remove();
    }

})();