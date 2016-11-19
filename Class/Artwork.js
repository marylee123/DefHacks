class Artwork {
	constructor(when, where, creation, description, display, title, img) {
		this._origin = when;
		this._nationality = where;
		this._creation = [creation.DateBeginYear. creation.DateEndYear];
		this._description = description;
		this._display = display;
		this._title = title;
		this._img = img;
	}
	get years(){
		return this._creation.DateEndYear - this._creation.DateBeingYear;
	}
}