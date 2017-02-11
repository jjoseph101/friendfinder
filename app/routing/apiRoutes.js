//load data
var friendData = require("../data/friends");

//routing
module.exports = function(app) {

	//api for displaying friends data
	app.get("/api/friends", function(req,res){
		res.json(friendData);
	});

	//api once user submits survey
	app.post("/api/friends", function(req, res){

		//compare submitted data to database


		//add data to data array
		friendData.push(req.body);
	});
};