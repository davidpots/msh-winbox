// Facebook = 19207
// Twitter = 19208
// Yelp = 19213

    // fieldValues: {
    //    'customfield_15628' : winPlatform,
    //
    // }
       // summary : 'XOXOX for new website designs',
       // 'starrating' : null

// var winPlatform = "19208";

        // 'customfield_16107' : '19203', // ==== Win Type : Great Interaction ====
        // 'customfield_16107' : '19204', // ==== Win Type : New Customer via HubT ====
        // 'customfield_16107' : '19205', // ==== Win Type : Review Upgraded ====

        // 'customfield_21201' : '19200', // ==== Review Rating : 5 ====
        // 'customfield_21201' : '19201', // ==== Review Rating : 4 ====
        // 'customfield_21201' : '19202', // ==== Review Rating : 3 ====
        // var reviewUpgradedTo = 'customfield_21201';



var winPlatform = 'customfield_15628';
var winType = 'customfield_16107';
var reviewUpgradedTo = 'customfield_21201';
var fieldValues = { [winPlatform] : "19208",
                    summary : "New Win",
                    [winType] : "19203",
                    [reviewUpgradedTo] : "19201" };

window.ATL_JQ_PAGE_PROPS = $.extend(window.ATL_JQ_PAGE_PROPS, {

    // ==== custom trigger function ====
    triggerFunction : function( showCollectorDialog ) {
        $('#atlwdg-trigger').on( 'click', function(e) {
            e.preventDefault();
            showCollectorDialog();
        });
    }, fieldValues
});


// Steven's advice on how to fix this -- see the stuff in the click-event area at bottom of page
          // function updateFieldValues(changedFields){
          //   fieldValues = $.extend(fieldValues, changedFields)

function updateFieldValues(){
  console.log("I am inside updateFieldValues!! -- ", fieldValues);
  window.ATL_JQ_PAGE_PROPS = $.extend(window.ATL_JQ_PAGE_PROPS, {
    fieldValues
  });
}



function renderTheThing(){
  html2canvas($("#widget"), {
    onrendered: function(canvas) {
      var dataURL = canvas.toDataURL();
      $('#downloader').attr('href',dataURL);
    }
  });
}








$(window).bind("load", function() {

    $('.jira-creator-link').click(function(e) {
      e.preventDefault();
    });


    $("#btnSave").click(function(e) {
        e.preventDefault();
        renderTheThing();
        setTimeout(function() {
          $('#downloader')[0].click();
        },500);

        // auto trigger the Jira button
            setTimeout(function() {
              $('#atlwdg-trigger')[0].click();
            },2000);

    });

    $('#submit-issue--review').click(function(){
        $('#atlwdg-trigger')[0].click();
        return false;
    });


    $('#hubT_submit').click(function(){
        fieldValues[winType] = "19204";
        fieldValues[winPlatform] = "19208";
        updateFieldValues();
        $('#atlwdg-trigger')[0].click();
        return false;
    });


    // Set default platform on page load
    setTimeout(function() {
      $('.platform-link--facebook').trigger('click');
      $('.star-rating--3').trigger('click');
    },10);


    $('.platform-link').click(function(){
      $('.platform-link').removeClass('platform-link--active');
      $(this).addClass('platform-link--active');

      if ( $(this).hasClass('platform-link--facebook') ) {
        fieldValues[winPlatform] = "19207";
        updateFieldValues();
        $('.winbox-container').css('background-color','#3C5B9B');
        $('.winbox-container').css('background-image','url(../assets/images/winbox-facebook.svg)');
      }

      if ( $(this).hasClass('platform-link--twitter') ) {
        fieldValues[winPlatform] = "19208";
        updateFieldValues();
        $('.winbox-container').css('background-color','#2DAAE1');
        $('.winbox-container').css('background-image','url(../assets/images/winbox-twitter.svg)');
      }

      if ( $(this).hasClass('platform-link--yelp') ) {
        fieldValues[winPlatform] = "19213";
        updateFieldValues();

        // updateFieldValues({ [winPlatform]: "19213" })
        // updateFieldValues({ [starRating]: 4, [winPlatform]: '19213' })
        $('.winbox-container').css('background-color','#C61B00');
        $('.winbox-container').css('background-image','url(../assets/images/winbox-yelp.svg)');
      }

      console.log("Win Platform set to: " + fieldValues[winPlatform]);

      return false;
    });



$('.picker-item').click(function(){
  $(this).siblings().removeClass('picker-item--active');
  $(this).addClass('picker-item--active');
});



    $('.star-rating').click(function(){

      fieldValues[winType] = "19205";

      $('.star-rating').removeClass('star-rating--active');
      $(this).addClass('star-rating--active');

      if ( $(this).hasClass('star-rating--3') ) {
        fieldValues[reviewUpgradedTo] = "19202";
        updateFieldValues();
        // $('.winbox-container').css('background-color','#3C5B9B');
        // $('.winbox-container').css('background-image','url(assets/images/winbox-facebook.svg)');
      }

      if ( $(this).hasClass('star-rating--4') ) {
        fieldValues[reviewUpgradedTo] = "19201";
        updateFieldValues();
        // $('.winbox-container').css('background-color','#3C5B9B');
        // $('.winbox-container').css('background-image','url(assets/images/winbox-facebook.svg)');
      }

      if ( $(this).hasClass('star-rating--5') ) {
        fieldValues[reviewUpgradedTo] = "19200";
        updateFieldValues();
        // $('.winbox-container').css('background-color','#3C5B9B');
        // $('.winbox-container').css('background-image','url(assets/images/winbox-facebook.svg)');
      }

      console.log("Star Rating set to: " + fieldValues[reviewUpgradedTo]);

      return false;
    });


});
