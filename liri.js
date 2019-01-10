

require("dotenv").config();

var axios = require("axios")

var Spotify = require("node-spotify-api");

//pass (i think) the keys file into this document
var keys = require("./keys.js");

//load spotify keys
var spotify = new Spotify(keys.spotify);

//Input values
var command = process.argv[2];
var input = process.argv.slice(3).join(" ");

switch (command) {
    case "concert-this":
        concert();
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        whatSays();
        break;
    default:
        console.log("Give me a command you fruit!");
}

// --------- Functions --------- //
function concert(){
    if(input === ""){
        console.log("Enter a band you ding dong")
    } else {
        console.log("Artist: " + input 
        + "\n is playing at " + data.venue 
        + "\n" + data.location 
        + "\n on " + data.date);        //make sure time is converted to MM/DD/YYYY using moment
    }
};

function movie(){
    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
    var data;
    axios.get(queryUrl)
    .then(function(response){
        data = response.data
        if (input === ""){
            console.log("");
            console.log("");
            console.log("If you haven't watched 'Mr. Nobody,' then you should:\nhttp://www.imdb.com/title/tt0485947/\nIt's on Netflix!");
            console.log("");
            console.log("");
        } else {
            console.log("");
            console.log("");
            console.log("Movie title: " + data.Title);
            console.log("Year: " + data.Year);
            console.log("IMDB rating: " + data.imdbRating);
            console.log("Rotten Tomatoes rating: " + data.Rating);
            console.log("Produced in: " + data.Country);
            console.log("Language: " + data.Language);
            console.log("Plot: " + data.Plot);
            console.log("Actors: " + data.Actors);
            console.log("");
            console.log("");
        }
    })
};

function spotify(){
    console.log("Artist: " + data);
    console.log("Song: " + data);
    console.log("Link to song: " + data);
    console.log("Album: " + data);
}

//Use the fs node package to run stuff from random.txt
function whatSays(){
    console.log("doing what you said");
}