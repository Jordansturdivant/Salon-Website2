// Menu Open Close
//This selects the HTML element with the class menu-icon and assigns it to the variable menu.
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

//This sets an event listener for the click event on the menu element. When the menu is clicked, the function inside will execute
//This is for my hamburger menu
menu.onclick = () => {     
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};






