/**
 * Nav-bar click logic. 
 */
let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navItems = document.querySelector('#nav-items');

//Take 3 parameters, and modifies CSS display based on provided values
const hamburgerEvent = (navigation, close, open) => {
    navItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
}

//Attach event listeners for the clicking of the open and close
openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));


/**
 *  Greeting, I want to use this to adjust the greeting on the landing
 *      page based upon the time of the day. 
 */
function homeGreeting() {
    let span = document.getElementById("greeting");
    let hours = new Date();
    console.log(hours);
    if (hours < 12) {
        //console.log("Morning");
        span.innerText = "Morning";
    } else if (hours >= 12 && hours < 18 ){
        //console.log("Afternoon");
        span.innerText = "Afternoon";
    } else {
        //console.log("Evening");
        span.innerText = "Evening";
    }
}
