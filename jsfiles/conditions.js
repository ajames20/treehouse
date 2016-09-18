//Variables for questions

var question1 = prompt("Guess my Name?");
var question2 = prompt("Guess my age?");
var question3 = prompt("Guess where I am from?");
var question4 = prompt("Guess my moms name?");
var question5 = prompt("Guess my dads name?");

var answerCorrect = 0;
// Conditional Statments

if (question1.toLowerCase() === "andrew") {
    answerCorrect += 1;
}


if (parseInt(question2) === 35)  {
  answerCorrect += 1;
}

if (question3.toLowerCase() === "nogales") {
    answerCorrect += 1;
}

if (question4.toLowerCase() === "sandra") {
    answerCorrect += 1;
}

if (question5.toLowerCase() === "tom") {
    answerCorrect += 1;
}

document.write("You got " + answerCorrect + " answers correct.");

if (answerCorrect === 5) {
  document.write("You get a gold star.");
} else if (answerCorrect >= 3 && answerCorrect <=4) {
  document.write("You get a silver star.");
} else if ( answerCorrect >=2 && answerCorrect <=3 ) {
  document.write("You get a bronze star.");
} else {
  document.write("You suck no star for you!");
}
