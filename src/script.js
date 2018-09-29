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

/* The function actually applying the offset
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }
}

// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);

// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).
*/
