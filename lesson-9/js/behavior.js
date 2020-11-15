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
        let entry = document.createElement('section');
        let name = document.createElement('h3');
        let motto = document.createElement('p');
        let yearFounded = document.createElement('p');
        let photo = document.createElement('img');

        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        photo.setAttribute('class', 'image');
        photo.setAttribute('src', 'images/' + towns[i].photo);
        photo.setAttribute('alt', 'Image' + towns[i].order);

        entry.appendChild(name);
        entry.appendChild(motto);
        entry.appendChild(yearFounded);
        entry.appendChild(photo);

        document.querySelector('div.entries').appendChild(entry);
      }  
  });

