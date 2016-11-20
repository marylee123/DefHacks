const art = new Art();
const getRandom = () => {
	return Math.floor(Math.random() * 25);
};
const carousel = () => {
	const data = new Art().data;
	for(let x = 0; x <= 5; x++) {
		const source = data[getRandom()][getRandom()];
		const aurl = source.PrimaryImage.Large;
		let carouselimg = $("#item" + x);
		carouselimg.attr('src', aurl);
	}
};
const show  = (classifcation) => {
	const data = art.classification(classifcation);
};

carousel();