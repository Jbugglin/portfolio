//This section will give our navbar click-logic.
//Declarations...
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
