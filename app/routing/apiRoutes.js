//load data
var friendData = require("../data/friends");
var comparison = [];
var runCount = [];

//routing
module.exports = function(app) {

	//api for displaying friends data
	app.get("/api/friends", function(req,res){
		res.json(friendData);
	});

	//api once user submits survey
	app.post("/api/friends", function(req, res){

		//compare submitted data to database
		var latestInput = req.body.scores;
		for (var i=0; i<friendData.length; i++) {
			var compInput = friendData[i].scores;
			runCount[i] = 0;
			for (var j=0; j<10; j++) {
				runCount[i] = runCount[i] + Math.abs(latestInput[j]-compInput[j]);
			};
		};
		//determine index of best match		
		var bestMatch = runCount.indexOf(Math.min.apply(Math, runCount));
		
		//best match data returned
		res.json(friendData[bestMatch]);

		//add data to data array
		friendData.push(req.body);
	});
};