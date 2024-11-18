/**
 * This will get the current hour of the day and
 *  will change the greeting of the webpage 
 *  accordingly. (Morning, Afternoon, and Evening).
 */
const hours = new Date().getHours();
if(hours < 12){
    document.getElementById('timeGreet').innerHTML = "Morning!";
} else if (hours > 12 < 17) {
    document.getElementById('timeGreet').innerHTML = "Afternoon!";
} else {
    document.getElementById('timeGreet').innerHTML = "Evening!";
}