$(document).ready(function() {
  var viewportWidth = $(window).width();
    if ( viewportWidth < 992) {
        $('video').attr('src','');
        $('#jellyfish').addClass('jellyfish');
        $('#yt').addClass('yt');
        $('#mj').css({
            'background':'url("images/works/mj-bg.jpg") center no-repeat',
            'background-size':'cover'
            });
    }
});

//loader animation
$(window).load(function() {
  $('.loader__page').delay(300).fadeOut('slow');
});

//nav toggle animation
$(window).scroll(function() {
      if ($(document).scrollTop() > 40) {
        $('.nav__img').attr({src: "images/logo-small.png", srcset: "images/logo-small@2x.png"}).addClass('nav__img--small');
        $('nav').addClass('small');
        $('.nav__container').addClass('small');
        $('.nav__option').addClass('small');
        
      } else {
        $('.nav__img').attr({src: "images/logo.png", srcset: "images/logo@2x.png"}).removeClass('nav__img--small');
        $('nav').removeClass('small');
        $('.nav__container').removeClass('small');
        $('.nav__option').removeClass('small');
        
      }
    });