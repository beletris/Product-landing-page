/*TO DO
- smooth scrolling
- scroll to top
- navigation bar position fixed


 */

//adding element manually - because IE
document.createElement("main");

//smooth scrolling
let toTop = document.getElementById("to-top"),
    scrollTimer,
    scrollValue;

let scrollToTop = function(event) {
  event.preventDefault();
  scrollValue = window.scrollY;
  scrollTimer = setInterval(scrollStep, 10);
};

let scrollStep = function() {
  scrollValue -= 30;
  window.scrollTo(0, scrollValue);
  if (scrollValue <= 0) {
    clearInterval(scrollTimer);
  };
};

toTop.addEventListener("click", scrollToTop);
