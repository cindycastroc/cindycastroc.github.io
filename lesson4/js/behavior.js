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