/**
 * This will get the current hour of the day and
 *  will change the greeting of the webpage 
 *  accordingly. (Morning, Afternoon, and Evening).
 */
//const hours = new Date().getHours();
const hours = 19
console.log(hours)
if(hours < 12){
    document.getElementById('timeGreet').innerHTML = "Morning!";
    // Morning bg colors
    document.body.style.backgroundImage = 'linear-gradient(0deg, green, lightblue 50%, darkblue 95%)';
} else if (12 < hours < 17) {
    document.getElementById('timeGreet').innerHTML = "Afternoon!";
    // Afternoon bg colors
    document.body.style.backgroundImage = 'linear-gradient(0deg, lightgreen, lightblue 30%)';
} else {
    document.getElementById('timeGreet').innerHTML = "Evening!";
    // Evening bg colors
    document.body.style.backgroundImage = 'linear-gradient(0deg, red, yellow, orange, darkblue)';
}