/**
 * This will get the current hour of the day and
 *  will change the greeting of the webpage 
 *  accordingly. (Morning, Afternoon, and Evening).
 */
const now = new Date();
const hours = now.getHours();
let timeGreeting = "";

if (hours < 12) {
    greeting = "Morning!";
    document.body.style.backgroundImage = "linear-gradient(to top, pink, yellow)";
} else if (hours < 18) {
    greeting = "Afternoon!";
    document.body.style.backgroundImage = "linear-gradient(to top, lightblue, blue)";
} else {
    greeting = "Evening!";
    document.body.style.backgroundImage = "linear-gradient(to top right, red, purple, blue)";
    document.body.style.color = "white"
}

document.getElementById("timeGreet").textContent = greeting;