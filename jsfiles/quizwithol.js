var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var incorrectAnswers = 0;
var question;
var answer;
var response;
var html;
var answersCorrect = [];
var answersIncorrect = [];

function orderdList(arr) {
  var listHTML = "<ol>"
  for(var i = 0; i < arr.length; i += 1) {
    listHTML += "<li>" + arr[i] + "</li>";
  }
  listHTML += "</ol>";
  return listHTML;
}

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
    answersCorrect.push(question);
  } else {
    answersIncorrect.push(question);
    incorrectAnswers += 1;
  }
}

html = "<h2>You got " + correctAnswers + " question(s) right.</h2>"
html += "<h2> You got these answer(s): "
html += orderdList(answersCorrect);
html += "<h2> You got these answer(s) incorrect: "
html += orderdList(answersIncorrect);
print(html);

console.log(answersCorrect);
console.log(answersIncorrect);
