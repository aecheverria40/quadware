(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel(
      {
        fullWidth: true,
        indicators: true,
      }
    );
    $('.scrollspy').scrollSpy(
      {
        throttle: 50,
      }
    );
  }); // end of document ready
})(jQuery); // end of jQuery name space
