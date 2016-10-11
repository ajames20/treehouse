//Create questions
var questions = [
  new Question("Who sings Childs Play?", ["Drake", "Weezy"],"Drake"),
  new Question("Who sings the wasted remix?", ["Drake", "Weezy"],"Weezy")
];

var quiz = new Quiz(questions);

QuizUI.displayNext();
