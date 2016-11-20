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
	for(let d of data.Items){
		const latlng = [d.LatitudeNumber, d.LongitudeNumber];
		console.log(d);
		let marker = new L.marker(latlng).bindPopup("hi");
		marker.addTo(map._map);

	}
};
function main(){
	setUpButtons();
	setUpMuseums();
}
main();

$("#arrow0").on("click", () => show("Painting & Drawing"));
$("#arrow1").on("click", () => show("Sculpture"));
$("#arrow2").on("click", () => show("Stained & Painted Glass"));
$("#arrow3").on("click", () => show("Miniatures"));
$("#arrow4").on("click", () => show("Precious Stones & Gems"));
$("#arrow5").on("click", () => show("Pearl, Horn, Coral & Shell"));
