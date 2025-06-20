/**
 *  Greeting, I want to use this to adjust the greeting on the landing
 *      page based upon the time of the day. 
 */
function homeGreeting() {
    let span = document.getElementById("greeting");
    let hours = new Date();
    if (hours.getHours() < 12) {
        //console.log("Morning");
        span.innerText = "Morning";
    } else if (hours.getHours() >= 12 && hours.getHours() < 18 ){
        //console.log("Afternoon");
        span.innerText = "Afternoon";
    } else {
        //console.log("Evening");
        span.innerText = "Evening";
    }
}

/**
 *  Responsive Navbar with hamburger menu
 */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
