AOS.init({
  duration: 1200
});

var SCROLLING_NAVBAR_OFFSET_TOP = 50;
$(window).on("scroll", function() {
  var $navbar = $(".navbar");

  if ($navbar.length) {
    if ($navbar.offset().top > SCROLLING_NAVBAR_OFFSET_TOP) {
      $(".scrolling-navbar").addClass("top-nav-collapse");
    } else {
      $(".scrolling-navbar").removeClass("top-nav-collapse");
    }
  }
});

 let toggler = document.querySelector(".navbar-toggler");

 function heroClassToggle() {
  var element = document.getElementById("hero-section");
  element.classList.toggle("mystyle");
}