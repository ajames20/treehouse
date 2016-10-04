//User interaction not working

//solution when user interacts causes changes properly
var color = $('.selected').css('background-color');

var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent ;
var mouseDown = false;

//1.Change class on click of li items of controls
$('.controls').on('click', 'li', function(){
  //select class and remove class
  $(this).siblings().removeClass('selected');
  //add class to current selected color
  $(this).addClass('selected');
  //cache of color
  color = $('.selected').css('background-color');

});

//2. When new color is clicked we want the color select to show
$('#revealColorSelect').click(function() {
  changeColor();

  $('#colorSelect').toggle();

});

//3 we want to show color picked with slider in span
  //3.1 append newColor to when add color is clicked add to ul
  //3.1 also adds class of seleceted to new color
function changeColor() {
  var red = $('#red').val();
  var green = $('#green').val();
  var blue = $('#blue').val();

  $('#newColor').css('background-color', "rgb("+ red +", "+ green + ", "+ blue + ")");
}

$('input[type=range]').change(changeColor);



$('#addNewColor').click(function() {
  var $newColor = $("<li></li>");

  $newColor.css("background-color", $('#newColor').css("background-color"));

  $('.controls ul').append($newColor);

  $newColor.click();

});


$canvas.mousedown(function(e) {
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e) {
    if(mouseDown){
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function() {
    mouseDown = false;
}).mouseleave(function() {
  $canvas.mouseup();
});


//4 on mouseevents on canvas draw lines
