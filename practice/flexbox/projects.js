/*prevent link from openeing without stopping client from being able to open
 photo is js is off.*/

$("#jsPractice a").click(function(event){
  event.preventDefault();
  var href = $(this).attr("href");
  console.log(href);
});
