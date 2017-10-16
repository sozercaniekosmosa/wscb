define(function () {

	// для поддержки remove в IE
	if (!('remove' in Element.prototype)) {
		Element.prototype.remove = function () {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		};
	}

});