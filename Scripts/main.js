let map = new Map();
const setUpButtons = () => {
	L.easyButton("<span class='current'>&curren;</span>", function(){
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const latlng = [position.coords.latitude, position.coords.longitude];
				map.setLocation(latlng, 13);
				map.setMarker(latlng).bindPopup("Your Current Location!").openPopup();
			}
		);
	}, "Your Current Location!").addTo(map._map);
};

const setUpMuseums = () => {
	const stuart = new Art();
	const data = stuart.geographical;
	let lastmarker;
	for(let d of data.Items){
		const latlng = [d.LatitudeNumber, d.LongitudeNumber];
		map.setMarker(latlng);
		lastmarker = latlng;
	}
	map._map.setView(latlng);
};
function main(){
	setUpButtons();
	setUpMuseums();
}
main();