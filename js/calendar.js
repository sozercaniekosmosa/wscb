define(["dijit/form/DateTextBox"], function (DateTextBox) {

	var self = {};

	self.description = 'загрузить модуль \"календарь\"';

	self.create = function (selector) {

		var container = document.querySelector(selector);

		self.control = document.createElement('input');
		self.control.id = 'calendar';
		container.appendChild(self.control);


		self.control = new DateTextBox({
			value:    new Date(),
			name:     "calendar",
			onChange: function (dt) {

				// расчет разницы в дате
				var dateNow = new Date();
				var dateNowMs = dateNow.getTime();
				var dayNow = dateNow.getDate();  // для обнаружения текущего дня

				var dateChoice = new Date(dt);
				var dateChoiceMs = dateChoice.getTime();
				var dayChoice = dateChoice.getDate(); // для обнаружения текущего дня

				var deltaDateSec = Math.abs(dateNowMs - dateChoiceMs) / 1000;

				var day = ~~(deltaDateSec / (3600 * 24));
				var hours = ~~(deltaDateSec / 3600 % 24);
				var min = ~~(deltaDateSec / 60 % 60);

				if (dayNow === dayChoice)  day = hours = min = 0; // обнаружили текущий день значит смещения никакого нет

				alert(
					'Между выбранной и текущей датой промежуток времени:\n' +
					'дней:   '+day+'\n' +
					'часов:  '+hours+'\n' +
					'минут:  '+min
				);
			}
		}, "calendar");
		self.control.startup();

	}

	self.destroy = function () {
		self.control.destroy();
	}

	return self;
});