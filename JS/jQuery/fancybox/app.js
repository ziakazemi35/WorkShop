//FANCYBOX (and our mobile menu)
$(function() {

  //TRIGGER THE MOBILE MENU
  $('.trigger').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('menu-is-open');
  });

  $('[data-fancybox="gallery"]').fancybox({
    loop: true,
    arrows: true,
    infobar: false,
    toolbar: true,
    buttons: [
      //"zoom",
      //"share",
      //"slideShow",
      //"fullScreen",
      //"download",
      //"thumbs",
      "close"
    ],
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionEffect: "tube",
    transitionDuration: 500,
  });

});