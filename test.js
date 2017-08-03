var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/trace.sqlite3');

$(function(){

	var map = new GMaps(
		{
			div: '#map',
			lat: 35.714926,
			lng: 139.761919,
			zoom: 14
		}
	);

	db.serialize(function(){
		db.each("SELECT * FROM trace", function(err, row){
			if(err) throw err;
			else console.log(row);
		});
	});

	db.close()

	map.addMarker(
		{
			time: 8888888,
			lat: 35.714926,
			lng: 139.761919,
			title: "ktbng",
			icon: "tktbtk.jpg"
		}
	);
});
