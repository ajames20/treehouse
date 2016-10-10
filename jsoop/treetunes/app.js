var playlist = new Playlist();

var childsPlay = new Song("Childs Play", "Drake", "12:07");
var hype = new Song("Hype", "Drake", "4:19");

playlist.add(childsPlay);
playlist.add(hype);

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
