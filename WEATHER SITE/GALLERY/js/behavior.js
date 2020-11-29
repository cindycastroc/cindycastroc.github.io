const images = document.querySelectorAll("[src]");

function preloadImage(img) {
    const src = img.getAttribute("src");
    if(!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image);
})


const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});

months = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
var theDate = new Date(document.lastModified); 
theDate.setTime((theDate.getTime()+(5000*60*60)) ) 
with (theDate) { 
document.write(+getDate()+' '+months[getMonth()]+' '+getYear()+' '+getHours()+':'+getMinutes()+" GMT</i>") 
} 