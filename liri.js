

require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

//Input values
var command = process.argv[2];
var input = process.argv.slice(3).join(" ");

function fruit(){
    switch (command) {
        case "concert-this":
            concert();
            break;
        case "spotify-this-song":
            spot();
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
}

fruit();

// --------- Functions --------- //
function concert(){
    var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    var data;
    if (input === ""){
        console.log("\n\nEnter a band you ding dong\n\n")
    } else {        
        axios.get(queryUrl)
        .then(function(response){
            data = response.data[0];
            console.log("\n\nArtist: " + input 
            + "\nis playing at " + data.venue.name 
            + "\n" + data.venue.city + ", " + data.venue.country
            + "\non " + moment(data.datetime).format("MM/DD/YYYY") + "\n\n");
        })
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

function spot(){
    var data;
    if (input === ""){
        input = "Free Bird";
        songSearch();
    } else {
        songSearch();
    }
    function songSearch(){
        spotify.search({type: "track", query: input})
        .then(function(response){
            data = response.tracks.items[0];
            console.log(data.album.artists);
            console.log("\n\nArtist: " + data.album.artists.name
            + "\nSong: " + data.name
            + "\nLink to song: " + data
            + "\nAlbum: " + data.album.name + "\n\n");
        })
    }
}

//Use the fs node package to run stuff from random.txt
function whatSays(){
    fs.readFile("random.txt", "utf8", function(error, data){
        var arrData = data.split(", ");
        command = arrData[0];
        input = arrData[1];
        fruit();
    });
}