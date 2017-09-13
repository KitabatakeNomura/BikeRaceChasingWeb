$(function(){

	var map = new GMaps(
		{
			div: '#map',
			lat: 35.714926,
			lng: 139.761919,
			zoom: 14
		}
	);


	setInterval(function(){
		$.getJSON("/cgi-bin/getLocation.cgi", function(data){
			console.log(data);

			for(rider of data){
				console.log(rider)
		
				map.addMarker(
					{
						lat: parseFloat(rider.lat),
						lng: parseFloat(rider.lng),
						title: rider.name,
						icon: "tktbtk.jpg"
					}
				);
			}

		});
	},5000);

});
