var main = function() {
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);
  
   $('icon-close').animate ({
        left: '0px'
    }, 200);
});

  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-123px"
    }, 200);
  });

  $('.icon-menu-contact').click(function() {
    $('.contact-menu').animate({
      right: "0px"
    }, 200);
  
   $('contact-icon-close').animate ({
        right: '0px'
    }, 200);
});

  $('.contact-icon-close').click(function() {
    $('.contact-menu').animate({
      right: "-303px"
    }, 200);
  });
};

$(document).ready(main);