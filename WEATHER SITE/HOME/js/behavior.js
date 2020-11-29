// NAVBAR
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});


// DATE
months = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
var theDate = new Date(document.lastModified); 
theDate.setTime((theDate.getTime()+(5000*60*60)) ) 
with (theDate) { 
document.write(+getDate()+' '+months[getMonth()]+' '+getYear()+' '+getHours()+':'+getMinutes()+" GMT</i>") 
} 

// API
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
        let town = document.createElement('div');
        let entry = document.createElement('sectionapi');
        let name = document.createElement('h3');
        let motto = document.createElement('motto');
        let yearFounded = document.createElement('yearfounded');
        let population = document.createElement('population');
        let annualrain = document.createElement('annualrain');
        let image = document.createElement('img');

        town.appendChild(entry);

        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        annualrain.textContent = 'Annual Rain: ' + towns[i].averageRainfall;

        entry.appendChild(name);
        entry.appendChild(motto);
        entry.appendChild(yearFounded);
        entry.appendChild(population);
        entry.appendChild(annualrain);
        entry.appendChild(image);

        image.setAttribute('class', 'image');
        image.setAttribute('src', 'images/' + towns[i].photo);
        image.setAttribute('alt', 'Image of ' + towns[i].name);


        document.querySelector('div.entries').appendChild(entry);
      };
    };  
  });

