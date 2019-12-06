var express = require('express'),
	app = express();

app.get("/", function(req, res){
	res.render("./index.html");
});

app.listen(3000, function(){
	console.log("listening...");
});