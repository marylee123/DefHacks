class Art {
	constructor() {
		this._apikey = "v3p6gqbr0YhriN75p1P5B6RZhgJbOVhmTHNO8cnEaQCsV7LK6s05LKfocFOzWzSU";
	}
	get data() {
		let data = [];
		let pagesize = 100;
		$.ajax({
			url: `http://api.thewalters.org/v1/objects?apikey=${this._apikey}`,
			method: 'GET',
			async: false,
			success : (dat) => {
				pagesize = dat.PageSize;
			}
		});
		for(let x = 1; x <= 5; x++){
			$.ajax({
				url: `http://api.thewalters.org/v1/objects?apikey=${this._apikey}&page=${x}`,
				method: `GET`,
				async: false,
				success : (d) => {
					data.push(d.Items);
				}
			});
		}
		return data;
	}
	classification(classif) {
		let d;
		$.ajax({
			url: `http://api.thewalters.org/v1/objects?apikey=${this._apikey}&classification=${classif}`,
			method: 'GET',
			async: false,
			success : (data) => {
				d = data;
			}
		});
		return d;
	}
}