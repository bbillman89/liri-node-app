

require("dotenv").config();

var axios = require("axios")

var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
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
    console.log("\nGive me a command you fruit!\n");
}

// --------- Functions --------- //
function concert(){
    if(input === ""){
        console.log("\n\nEnter a band you ding dong\n\n")
    } else {
        console.log("\n\nArtist: " + input 
        + "\n is playing at " + data.venue 
        + "\n" + data.location 
        + "\n on " + data.date + "\n\n");        //make sure time is converted to MM/DD/YYYY using moment
    }
};

function movie(){
    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
    var data;
    axios.get(queryUrl)
    .then(function(response){
        data = response.data
        if (input === ""){
            console.log("\n\nIf you haven't watched 'Mr. Nobody,' then you should\nhttp://www.imdb.com/title/tt0485947/\nIt's on Netflix!\n\n");
        } else {
            console.log(data);
            console.log("\n\nMovie title: " + data.Title 
            + "\nYear: " + data.Year
            + "\nIMDB rating: " + data.imdbRating
            + "\nRotten Tomatoes rating: " + data.Rating
            + "\nProduced in: " + data.Country
            + "\nLanguage: " + data.Language
            + "\nPlot: " + data.Plot
            + "\nActors: " + data.Actors + "\n\n");
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