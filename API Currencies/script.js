// DOM Elements:
const currencyForm = document.querySelector('form');
const results = document.getElementById('results');
const errorBox = document.getElementById('errorBox');
const amountToConvert = document.getElementById('amount').value;

let newSelect = "";
const dropdownFrom = document.getElementById('fromCurrency');
const dropdownTo = document.getElementById('toCurrency');

let apiRequest = new XMLHttpRequest();
const apiKey = 'xI0xszrkEfcI9ZuTNgQeNcDMDqESn2A8';
let apiURL = 'https://api.apilayer.com/exchangerates_data/convert?apikey=' + apiKey;

// get data from json for currency lists
$.getJSON('list.json', function (data) {
    for (var key in data) {
        newSelect += "<option value=" + key + ">" + data[key] + "</option>";
        dropdownFrom.innerHTML = newSelect;
        dropdownTo.innerHTML = newSelect;
    }
});

currencyForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let currencyselected = dropdownFrom.value;
    let destination = dropdownTo.value;

    apiRequest.open('GET', apiURL + '&to=' + destination + '&from='
        + currencyselected + '&amount=' + amountToConvert);
    apiRequest.send();

});

apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {

        if (apiRequest.status === 404 || apiRequest.status === 403) {
            errorBox.style.display = 'block';
            return errorBox.textContent = 'Not found';
        } else if (apiRequest.status === 401 || apiRequest.status === 402) {
            errorBox.style.display = 'block';
            return errorBox.textContent = 'access NOT authorized';
        } else if (apiRequest.status === 101) {
            errorBox.style.display = 'block';
            return errorBox.textContent =
                'No API Key was specified or an invalid API Key was specified';
        } else if (apiRequest.status === 104) {
            errorBox.style.display = 'block';
            return errorBox.textContent =
                'The maximum allowed API amount of monthly API requests has been reached';
        }

        const response = JSON.parse(apiRequest.response);
        let currencyselected = dropdownFrom.value;
        let destination = dropdownTo.value;

        results.style.display = 'block';
        results.textContent = amountToConvert + ' ' + currencyselected +
            ' is equal to ' + response.result + ' ' + destination;
    }
}