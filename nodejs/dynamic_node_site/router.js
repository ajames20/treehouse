var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");
var commonHeader = {
    'Content-Type': 'text/html'
};


// handle HTTP route GET / and POST / ie Home
function home(request, response) {
    // if url == "/" && GET
    if (request.url === "/") {
        if (request.method.toLowerCase() === "get") {
            //    show search
            response.writeHead(200, commonHeader);
            renderer.view("header", {}, response);
            renderer.view("search", {}, response);
            renderer.view("footer", {}, response);
            response.end();
        } else {
            //if URL == "/" && POST
            request.on("data", function(postBody) {
                console.log(postBody.toString());
                //get the post data from body
                var query = querystring.parse(postBody.toString());
                //extract the username
                response.writeHead(303, {
                    "Location": "/" + query.username
                });
                response.end();
                //redirect to /:username
            });

        }
    }
}

// handle HTTP route GET /:username ie /chalkers
function user(request, response) {
    // if url = "/...."
    var username = request.url.replace("/", "");
    if (username.length > 0) {
        response.writeHead(200, commonHeader);
        renderer.view("header", {}, response);

        //  get json from Trehouse
        var studentProfile = new Profile(username);
        //on end
        studentProfile.on("end", function(profileJSON) {
            //show username
            //store the value we need
            var values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                JavaScriptPoints: profileJSON.points.JavaScript
            };
            // show simple message
            renderer.view("profile", values, response);
            renderer.view("footer", {}, response);
            response.end();
        });
        //    on "error"
        studentProfile.on("error", function(error) {

            //      show error
            renderer.view("error", {
                errorMessage: error.message
            }, response);
            renderer.view("search", {}, response);
            renderer.view("footer", {}, response);
            response.end();
        });


    }



}

module.exports.home = home;
module.exports.user = user;
