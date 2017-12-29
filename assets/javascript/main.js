function renderTheThing(){
        html2canvas($("#widget"), {
            onrendered: function(canvas) {
                // theCanvas = canvas;
                // document.body.appendChild(canvas);
                // var canvasX = canvas;
                var dataURL = canvas.toDataURL();
                console.log(dataURL);
                $('#downloader').attr('href',dataURL);
                // Convert and download as image
                // Canvas2Image.saveAsPNG(canvas);
                // $("#img-out").append(canvas);
                // var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
                // function convertCanvasToImage(canvas) {
                // 	var image = new Image();
                // 	image.src = canvas.toDataURL("image/png");
                // 	return image;
                // }
                //
                // $('body').append(convertCanvasToImage(canvas));
                // console.log(convertCanvasToImage(canvas));
                // Clean up
                // document.body.removeChild(canvas);
            }
        });
}








$(window).bind("load", function() {

    $("#btnSave").click(function(e) {
        e.preventDefault();
        renderTheThing();
        setTimeout(function() {
          $('#downloader')[0].click();
        },500);
    });

  $('#downloader').click(function(){
    // return false;
  });

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
