var http = require("http");
var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

app = express();

// this tells the app where our views are and which view engine to use
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var fun = require("./functions");

app.use(express.static(__dirname + '/'));


/*routes */


app.get("/", function(req, res){
	res.render("index", {"shop": fun.pickCoffeeShop()});
});

app.post("/", function(req, res){
	res.render("index", {"shop": fun.pickCoffeeShop()});
});



// this starts the server on port 3000
http.createServer(app).listen((process.env.PORT || 3000), function(){
	console.log("We've started the app on port 3000!");
})