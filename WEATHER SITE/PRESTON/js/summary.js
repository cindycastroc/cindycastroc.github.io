const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=79e15b681560d53f708b95aafeb82274`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('temp').textContent = jsObject.weather[0].description;
        document.getElementById('hum').textContent = jsObject.main.humidity;
        document.getElementById('wind-speed').textContent = jsObject.wind.speed;
        document.getElementById('currently').textContent = Math.round(jsObject.main.temperature);
    
    let temp = jsObject.
    });
