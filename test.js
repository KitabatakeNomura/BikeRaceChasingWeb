
$(function(){

	var map = new GMaps(
		{
			div: '#map',
			lat: 35.714926,
			lng: 139.761919,
			zoom: 14
		}
	);

	map.addMarker(
		{
			time: 8888888,
			lat: 35.714926,
			lng: 139.761919,
			title: "ktbng",
			icon: "tktbtk.jpg"
		}
	);

	$.getJSON("data.json", function(data){
		console.log("JSON Data: "+ data[0].name);
	});
});
