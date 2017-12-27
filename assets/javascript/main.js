$(window).bind("load", function() {

    setTimeout(function() {

    $('.platform-link--facebook').trigger('click');
        },10);


    $('.platform-link').click(function(){
      $('.platform-link').removeClass('platform-link--active');
      $(this).addClass('platform-link--active');

      if ( $(this).hasClass('platform-link--facebook') ) {
        $('.winbox-container').css('background-color','#3C5B9B');
        $('.winbox-container').css('background-image','url(assets/images/winbox-facebook.svg)');
      }

      if ( $(this).hasClass('platform-link--twitter') ) {
        $('.winbox-container').css('background-color','#2DAAE1');
        $('.winbox-container').css('background-image','url(assets/images/winbox-twitter.svg)');
      }

      if ( $(this).hasClass('platform-link--yelp') ) {
        $('.winbox-container').css('background-color','#C61B00');
        $('.winbox-container').css('background-image','url(assets/images/winbox-yelp.svg)');
      }

      return false;
    });


});
