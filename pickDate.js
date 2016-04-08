var getMonth = function (date) {
	return date.getMonth();
};

var getYear = function () {
	date.getFullYear();
};

var getDaysNumInMonth = function (year, month) {
	return [31, year % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

function PickDate () {

}

PickDate.prototype.render = function () {

}

PickDate.prototype.setTable = function () {
	this.table = document.createElement('table');
	this.setHeader();
	this.setBody();
};

PickDate.prototype.setHeader = function () {
	var thead = document.createElement('thead');
	thead.innerHTML = '<tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr>';
	this.table.appendChild(thead);
	this.table.appendChild(tbody);
};

PickDate.prototype.setBody = function () {
	var tbody = document.createElement('tbody'),
		year = this.getYear(),
		month = this.getMonth(),
		daysNum = getDaysNumInMonth(year, month),
		day = this.today.getDay();

	for (var i = 0, l = 7; i < l; i ++) {
		var tr = document.createElement('tr');
		for (var m = 0, n = 6; m < n; m++) {
			var td = document.createElement('td');
			var value = i * 7 + m + 1;
            if (value - day > 0 && value - day < daysNum) {
                td.textContent = value - day;
            }
            tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	this.table.appendChild(tbody);
};



