// dependencies
var body-parser = require("body-parser");
var path = require("path");
var express = require("express");

//creating express server
var app = express();
var PORT = process.env.PORT || 3000;

//interpret data to server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

//routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener
app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});