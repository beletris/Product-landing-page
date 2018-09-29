//TO do {
// - IE, get a hold of yourself;

//adding element manually - because IE
document.createElement("main");

//navbar fixed
const navBar = document.getElementById("nav-bar");
const headBar = document.getElementById("header");

window.onscroll = function scrollToStick() {
  if (window.pageYOffset > (headBar.clientHeight - navBar.clientHeight)) {  // height of header - height of navbar
    navBar.classList.add("sticky-dark");
  } else {
    navBar.classList.remove("sticky-dark");
  };
};


//for scrolling IE does not work
//scroll to top
const toTop = document.getElementById("to-top");

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
