define(function () {

	var self = {};

	self.description = 'module main';

	self.listSrc = [];
	self.lastModules = undefined;

	self.create = function (selector) {
		var list = document.querySelectorAll(selector);

		for (var i = 0; i < list.length; i++) {
			self.listSrc.push( list[i].getAttribute('src'));
		}

		require(self.listSrc, function(){
			var modules = Array.prototype.slice.call(arguments);

			for (var i = 0; i < list.length; i++) {
				list[i].innerText = modules[i].description;
				list[i].setAttribute('index', i);
				list[i].onclick = function(){
					if(self.lastModules !== undefined) self.lastModules.destroy();
					self.lastModules = modules[+this.getAttribute('index')];
					var param = this.getAttribute('param');
					self.lastModules.create.apply(null, eval(param));
				}
			}

		})

	}

	self.destroy = function () {
	}

	return self;
});