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
        document.body.style.backgroundColor = "rgb(244,244,77)";
        document.getElementById("greeting-container").style.backgroundColor = "rgb(216, 216, 70)";
        document.getElementById("header").style.backgroundColor = "rgb(216, 216, 70)";
    } else if (hours.getHours() >= 12 && hours.getHours() < 18 ){
        //console.log("Afternoon");
        span.innerText = "Afternoon";
        document.body.style.backgroundColor = "rgb(206,227,151)";
        document.getElementById("greeting-container").style.backgroundColor = "rgb(188, 221, 106)";
        document.getElementById("header").style.backgroundColor = "rgb(188, 221, 106)";
    } else {
        //console.log("Evening");
        span.innerText = "Evening";
        document.body.style.backgroundColor = "rgb(88,119,146)";
        document.getElementById("greeting-container").style.backgroundColor = "rgb(140, 154, 167)";
        document.getElementById("header").style.backgroundColor = "rgb(140, 154, 167)";
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
