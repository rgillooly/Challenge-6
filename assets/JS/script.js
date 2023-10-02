var search = document.querySelector('#search-form');

function style() {
search.classList.add('form');
}

function handleSubmit() {
var searchInputVal = document.querySelector('#search-input').value;


}

function searchApi() {
var lat = 1;
var lon = 1;
var QueryUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid={bb88c3494e0f6b098d4bc2ce0773a4d4}";

var output = document.querySelector('#output');
output.textContent(QueryUrl)
}


// function makeWeather() {
// var searchBar = document.createElement('div');
// searchBar.classList.add('form');
// document.getElementById('bar').appendChild(div);
// document.textContent('Search');
// }