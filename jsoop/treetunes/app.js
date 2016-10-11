var playlist = new Playlist();

var childsPlay = new Song("Childs Play", "Drake", "12:07");
var hype = new Song("Hype", "Drake", "4:19");
var batman = new Movie("The Dark Knight Rises", "2012", "2:45:00");

playlist.add(childsPlay);
playlist.add(hype);
playlist.add(batman);

var playlistElement = document.getElementById('playlist');

playlist.renderInElement(playlistElement);

var playButton = document.getElementById('play');
playButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playlistElement);

};
var nextButton = document.getElementById('next');
nextButton.onclick = function(){
  playlist.next();
  playlist.renderInElement(playlistElement);

};
var stopButton = document.getElementById('stop');
stopButton.onclick = function(){
  playlist.stop();
  playlist.renderInElement(playlistElement);

};
