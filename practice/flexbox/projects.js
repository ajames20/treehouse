//Add overlay to body
var $overlay = $('<div id="overlay"></div>');

$("body").append($overlay);

$("#imageGallery a").click(function(event){
  event.preventDefault();
  var href = $(this).attr("href");
  $overlay.show();
});
