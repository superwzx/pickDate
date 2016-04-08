

function PickDate () {

}

PickDate.prototype.render = function () {

}

PickDate.prototype.getMonth = function () {
	return this.date.getMonth();
}

PickDate.prototype.getYear = function () {
	return this.date.getFullYear();
}

PickDate.prototype.setTable = function () {
	this.table = document.createElement('table');
	
	this.thead = document.createElement('thead');

	this.tbody = document.createElement('tbody');
};

PickDate.prototype.setHeader = function () {
	var thead = document.createElement('thead');
	thead.innerHTML = '<thead><tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr></thead>';
	return thead;
};


PickDate.prototype.getDaysNumInMonth = function (year, month) {
	return [31, year % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

PickDate.prototype.setBody = function () {
	var tbody = document.createElement('tbody');
	var year = this.getYear();
	var month = this.getMonth();
	var daysNum = this.getDaysNumInMonth(year, month);

	var n = this.today.getDay();

	var cellNum = daysNum + this.today.getDay();

	var trNum = cellNum / 7 + 1;

	var tdArr = [];

	var trArr = [];

	for (var i = 0; i < cellNum; i++ ) {
		var td = document.createElement('td');
		td.textContent = n < i ? i - n : '';
		tdArr.push(td);
	}

	for (var n = 0; m < trNum; n++) {
		var tr = document.createElement('tr');
		tr.append(td)
	}

	for (var i = )

}

