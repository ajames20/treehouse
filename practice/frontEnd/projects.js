//variables
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//adds image to overlay
$overlay.append($image);

//append caption to overlay
$overlay.append($caption);

//adds overlay ot body
$("body").append($overlay);



//function to show overlay on click

$("#imageGallery a").click(function(event) {
    //cancels link from opeining as usual
    event.preventDefault();
    var imgLocation = $(this).attr("href");
    //update overlay wit image linked location
    $image.attr("src", imgLocation);
    //show overlay
    $overlay.show();
    //get childs alt attribute to show on overlay
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);

});



//anon function to hide overlay
$overlay.click(function() {
    $overlay.hide();
});





//menu section

var $select = $("<select></select>");

$(".nav").append($select);


$(".nav a").each(function (){
  var $anchor = $(this);

  var $option = $("<option></option>");

  if($anchor.parent().hasClass('selected')) {
    $option.prop("selected", true);
  }

  $option.val($anchor.attr("href"));

  $option.text($anchor.text());

  $select.append($option);
});



//create a button to go to location
//bind click to button
// go to selects location

$select.change(function() {
    window.location = $select.val();

});
