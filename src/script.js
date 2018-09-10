/*TO DO
- navigation bar position fixed
 */

//adding element manually - because IE
document.createElement("main");


//navbar fixed
const navBar = document.getElementById("nav-bar");

window.onscroll = function scrollToStick() {
  if (window.pageYOffset > 530) {  // height of header - height of navbar
    navBar.classList.add("sticky-dark");
  } else {
    navBar.classList.remove("sticky-dark");
  };
};

//scroll to top
const toTop = document.getElementById("to-top");
let scrollTimer,
    scrollValue;

const scrollToTop = function(event) {
  event.preventDefault();
  scrollValue = window.scrollY;
  scrollTimer = setInterval(scrollStep, 10);
};
const scrollStep = function() {
  scrollValue -= 30;
  window.scrollTo(0, scrollValue);
  if (scrollValue <= 0) {
    clearInterval(scrollTimer);
  };
};

toTop.addEventListener("click", scrollToTop);
