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
