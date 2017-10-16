
define(function () {

	var self = {};

	self.description = 'распечатать \"div с пунктиром\"';

	self.create = function (selector) {
		var container = document.querySelector(selector);

		self.control = document.createElement('span');
		self.control.setAttribute('style', 'width: 100px; height: 200px');
		self.control.innerHTML =
			'Съешь ещё этих мягких французских булок, да выпей же чаю.<br>' +
			'Съешь ещё этих мягких французских булок, да выпей же чаю.<br>' +
			'Съешь ещё этих мягких французских булок, да выпей же чаю.<br>' +
			'Съешь ещё этих мягких французских булок, да выпей же чаю.<br>';
		container.appendChild(self.control);

		print(container.innerHTML);
	}

	function print(data) {
		var printWindow = window.open('', 'content', 'width=800,height=600');
		printWindow.document.write('<html><head>');
		printWindow.document.write('<title></title>');
		printWindow.document.write('</head><body>');
		printWindow.document.write(data);
		printWindow.document.write('</body></html>');
		printWindow.document.close();
		printWindow.focus();
		printWindow.print();
		printWindow.close();
		return true;
	}


	self.destroy = function () {
		self.control.remove()
	}

	return self;
});