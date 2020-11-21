const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c40d4d140624f48174136067e6a2694d";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);

    const curtemp = document.querySelector('#current-temp');
    const weathericon = document.querySelector('#icon')
    const iconsource = document.querySelector('#imagesrc')
    curtemp.innerHTML = jsObject.main.temp;

    iconsource.textContent = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const isrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

    weathericon.setAttribute('src', isrc)
    weathericon.setAttribute('alt', jsObject.weather[0].description);
});