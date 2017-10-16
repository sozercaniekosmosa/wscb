define(function () {

	var self = {};

	self.description = 'загрузить модуль \"таймер\"';

	self.mlsStart = 0;
	self.idTimer = 0;

	self.create = function (selector) {

		var container = document.querySelector(selector);

		self.control = document.createElement('button');
		self.control.className = 'btn-timer';
		self.control.innerHTML = 'Запустить таймер';
		container.appendChild(self.control);

		self.control.onclick = function () { // делегируем обработку клика этому методу
			clearTimeout(self.idTimer); // убиваем процесс таймера если таковой был создам ранее
			self.mlsStart = self.getDateMls(); // запомним текущую дату в мс
			self.updateTimer();
		}
	}

	self.updateTimer = function () {
		self.idTimer = setTimeout(self.updateTimer, 1000); // обновляем состояние счетчика ~ 1 раз/сек.
		var deltaMls = self.getDateMls() - self.mlsStart; // текущая дата в мс минус запомненая при запуске таймера
		self.showTime(deltaMls);
	}

	self.getDateMls = function () {
		var date = new Date();
		return date.getTime();
	}

	// добавляем в переди ноль, если  число однозначное (для выравнивания)
	function addZero(numb) {
		if (numb < 10) return '0' + numb
		return numb;

	}

	// вывести время таймера на кнопку
	self.showTime = function (mls) {
		var sec = ~~(mls / 1000);
		var min = ~~(sec / 60);
		var time = '';

		if (min === 0)
			time = addZero(sec % 60);
		else
			time = addZero(min) + ':' + addZero(sec % 60);

		self.control.innerText = time;
	}

	self.destroy = function () {
		clearTimeout(self.idTimer);
		self.control.remove()
	}

	return self;
});