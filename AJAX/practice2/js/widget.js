
//step 1
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4){
    var employees = JSON.parse(xhr.responseText);
    console.log(employees);
    var statusHTML = '<ul class= bulleted>';
    for(var i = 0; i < employees.length; i += 1) {
      if(employees[i].inoffice === true){
        statusHTML += '<li class = "in">';
      } else {
        statusHTML += '<li class = "out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';

    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};

//step 2
xhr.open('GET', 'data/employees.json');

//step 3
xhr.send();


var rooms = new XMLHttpRequest();
rooms.onreadystatechange = function() {
  if(rooms.readyState === 4){
    var meetingRooms = JSON.parse(rooms.responseText);
    console.log(meetingRooms);
    var statusHTML = '<ul class = rooms>';
    for(var i = 0; i < meetingRooms.length; i += 1) {
      if(meetingRooms[i].available === true) {
        statusHTML += '<li class = "empty">';
      } else {
        statusHTML += '<li class = "full">';
      }
      statusHTML += meetingRooms[i].room;
      statusHTML += '</li>';

    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};

//step 2
rooms.open('GET', '../data/rooms.json');

//step 3
rooms.send();
