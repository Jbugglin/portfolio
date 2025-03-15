/**
 * This will get the current hour of the day and
 *  will change the greeting of the webpage 
 *  accordingly. (Morning, Afternoon, and Evening).
 */
function timeGreet(){
    const now = new Date();
    const hours = now.getHours();
    let timeGreeting = "";

    if (hours < 12) {
        greeting = "Morning!";
    } else if (hours < 18) {
        greeting = "Afternoon!";
    } else {
        greeting = "Evening!";
    }

    document.getElementById("timeGreet").textContent = greeting;
}