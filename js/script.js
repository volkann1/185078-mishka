var navToggle = document.querySelector(".main-nav__toggle");
var nav = document.querySelector(".main-nav");

nav.classList.remove("main-nav--nojs");

navToggle.addEventListener("click",function(event) {
   event.preventDefault();
   if (nav.classList.contains("main-nav--closed")) {
    nav.classList.remove("main-nav--closed");
    nav.classList.add("main-nav--opened");
   } else {
    nav.classList.add("main-nav--closed");
    nav.classList.remove("main-nav--opened");
   }
});
