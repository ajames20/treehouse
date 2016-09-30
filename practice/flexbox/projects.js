//variables
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');

//adds image to overlay
$overlay.append($image);

//adds overlay ot body
$("body").append($overlay);

//function to show overlay on click

$("#imageGallery a").click(function(event){
  //cancels link from opeining as usual
  event.preventDefault();
  var imgLocation = $(this).attr("href");
  //update overlay wit image linked location
  $image.attr("src", imgLocation);
  //show overlay
  $overlay.show();
});
//anon function to hide overlay
$overlay.click(function(){
    $overlay.hide();
});
