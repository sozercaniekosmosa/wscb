define(function () {

	var self = {};

	self.description = 'загрузить модуль \"радио кнопки\"';
	self.control = [];
	self.lastChecked = undefined;

	self.create = function (selector, listName) {

		var container = document.querySelector(selector);

		for (var i = 0; i < listName.length; i++) { // проходим по списку
			var control = document.createElement('input')// создаем input-ы
			self.control.push(control);
			control.className = 'radio-btn';
			control.type = 'button';
			control.value = listName[i].toString();
			container.appendChild(control); // добавляем их в контрол

			control.onclick = function () { // делегируем обработку клика этому методу
				this.className += ' checked-btn';
				if (self.lastChecked !== undefined)
					self.lastChecked.className = self.lastChecked.className.split(' checked-btn').join('');
				self.lastChecked = this;
			}
		}
	}

	self.destroy = function () {
		for (var i = 0; i < self.control.length; i++) {
			self.control[i].remove()
		}
	}

	return self;
});