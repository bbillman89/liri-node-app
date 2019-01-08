

require("dotenv").config();


var Spotify = require("node-spotify-api");

//pass (i think) the keys file into this document
var keys = require("./keys.js");

//load spotify keys
var spotify = new Spotify(keys.spotify);

//Input value
var command = process.argv[2];

if(command === "concert-this"){
    console.log("concert");
} 

if(command === "spotify-this-song"){
    console.log("Artist: " + data);
    console.log("Song: " + data);
    console.log("Link to song: " + data);
    console.log("Album: " + data);
} 

if(command === "movie-this"){
    console.log("movie");
} 

if(command === "do-what-it-says"){
    console.log("doing what you said");
}