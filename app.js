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


app.get("/", function(req, res){
	res.send(fun.pickCoffeeShop());
})

// this starts the server on port 3000
http.createServer(app).listen(3000, function(){
	console.log("We've started the app on port 3000!");
})