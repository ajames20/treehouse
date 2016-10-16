//we need a simple way to look at users badge counts and JavaScript points
var https = require("https");
var http = require("http");

//Solution: use Node.js to connect to Treehouse's API to print out profile information

//Print message
function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
    console.log(message);
}

//Error Print message
function printError(error) {
    console.error(error.message);
}



function get(username) {
    //Connect to the API URL (http://teamtreehouse.com/username.json
    var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
        // console.log(response.statusCode);
        //Read the data
        var body = "";

        response.on('data', function(chunk) {
            // console.log('BODY:' + chunk);
            body += chunk;
        });

        response.on('end', function() {
            if (response.statusCode === 200) {
                //Parse the data
                try {
                    var profile = JSON.parse(body);
                    //Print the data
                    printMessage(username, profile.badges.length, profile.points.JavaScript);
                } catch (error) {
                    //parse error
                    printError(error);
                }
            } else {
                //print statusCode error
                printError({
                    message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"
                });
            }
        });
    });


    //connection error
    request.on("error", printError);
}

module.exports.get = get;
