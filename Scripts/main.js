let map = new Map();
const setUpCurrentLocation = () => {
	console.log(map._map);
	L.easyButton('fa-star', function(){
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const latlng = [position.coords.latitude, position.coords.longitude];
				map.setLocation(latlng, 13);
				map.setMarker(latlng);
			}
		);
	}, "Your Current Location!").addTo(map._map);
};

const setUpMuseums = () => {
	$.ajax({
			url: `http://api.thewalters.org/v1/geographies?apikey=v3p6gqbr0YhriN75p1P5B6RZhgJbOVhmTHNO8cnEaQCsV7LK6s05LKfocFOzWzSU&pageSize=1000`,
			method: 'GET',
			async: false,
			success : (data) => {
			console.log(data);
			for(let d of data.Items){
				const latlng = [d.LatitudeNumber, d.LongitudeNumber];
				map.setMarker(latlng);
			}
		}
	});
}
function main(){
	setUpCurrentLocation();
	setUpMuseums();
}
main();