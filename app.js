var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/trace.sqlite3')

db.serialize(function(){
		
	db.each("SELECT * FROM trace", function(err, row){
			if(err) throw err;
			else{
				map.addMarker(
					{
						time: 111111,
						lat: 35,
						lng: 139,
						title: "kitabang",
						icon: "tktbtk.jpg"
					}
				);
			}
		}		
	);
});

db.close();
