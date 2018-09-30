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

var scrollTimer;
var scrollValue;

const scrollToTop = function(event) {
  event.preventDefault();
  scrollValue = window.scrollY;
  scrollTimer = setInterval(scrollStep, 10);
};

const scrollStep = function() {
  scrollValue -= 30;
  window.scrollTo(0, scrollValue);
  if (scrollValue <= 0 || scrollValue == NaN) {
    clearInterval(scrollTimer);
  };
};

toTop.addEventListener("click", scrollToTop);


//JQUERY

jQuery(document).ready(function($) {
//adding .menu class on small devices

  var alterClass = function() {
    let ww = document.body.clientWidth;
    if (ww <= 430) {
      $("#nav-bar").addClass("menu");
    } else if (ww > 430) {
      $("#nav-bar").removeClass("menu");
    };
  };
  $(window).resize(function(){
    alterClass();
  });

  alterClass();

//hamburger jQuery
  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

});
