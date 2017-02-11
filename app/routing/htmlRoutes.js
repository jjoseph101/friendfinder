//dependencies
var path = require("path");

//routing
module.exports = function (app) {

	//routing to survey page
	app.get("/survey", function (req,res){
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	//routing to home page
	app.use(function(req,res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};