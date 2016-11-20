const art = new Art();
const getRandom = () => {
	return Math.floor(Math.random() * 25);
};
const carousel = () => {
	const data = new Art().data;
	for(let x = 0; x <= 5; x++) {
		const source = data[Math.floor(Math.random() * 5)][getRandom()];
		const aurl = source.PrimaryImage.Large;
		let carouselimg = $("#item" + x);
		carouselimg.attr('src', aurl);
	}
};
const show  = (classifcation) => {
	let output = $("#output");
	const data = art.classification(classifcation);
	output.html("");
	for(let d in data.Items){
		d = data.Items[d];
		console.log(d.PrimaryImage.Small);
		const newart = new Artwork(d.Period, d.Creator, d.DateText, d.Description, d.DisplayLocation, d.Title, d.PrimaryImage.Small);
		output.html(output.html() + `Image: <img src=${newart._img}></img><br>
					 Title: ${newart._title} <br>
					 Origin: ${newart._origin} <br>
					 Nationality: ${newart._nationality} <br>
					 Time Of Creation: ${newart._creation} <br>
					 Description: ${newart._description}<br>`);
	}
	
};

carousel();
//
show("Sculpture");