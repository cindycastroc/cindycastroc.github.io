const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=1cc637f409022b0ae721d53d7a4fea4e";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);

    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(forecast);
    let day = 0;
    const weekdays = ['Sunday:', 'Monday:', 'Tuesday:', 'Wednesday:', 'Thursday:', 'Friday:', 'Saturday:'];
    forecast.forEach(x => {
        const d= new Date(x.dt_txt);
        document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
        day++;
    })
});
//     const curtemp = document.querySelector('#current-temp');
//     const weathericon = document.querySelector('#icon')
//     const iconsource = document.querySelector('#imagesrc')
//     curtemp.innerHTML = jsObject.main.temp;

//     iconsource.textContent = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
//     const isrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

//     weathericon.setAttribute('src', isrc)
//     weathericon.setAttribute('alt', jsObject.weather[0].description);
// });