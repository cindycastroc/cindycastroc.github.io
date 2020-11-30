const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=79e15b681560d53f708b95aafeb82274`;
// https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=3efcd4225e37daee266d0b251f791a4b&units=imperial
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('temp').textContent = jsObject.weather[0].description;
        document.getElementById('hum').textContent = jsObject.main.humidity;
        document.getElementById('wind-speed').textContent = jsObject.wind.speed;
        document.getElementById('currently').textContent = jsObject.weather[0].main;
    
    let temp = jsObject.
});



const curtemp = document.querySelector('#current-temp');
const weathericon = document.querySelector('#icon')
const iconsource = document.querySelector('#imagesrc')
curtemp.innerHTML = jsObject.main.temp;

iconsource.textContent = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const isrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

weathericon.setAttribute('src', isrc)
weathericon.setAttribute('alt', jsObject.weather[0].description);