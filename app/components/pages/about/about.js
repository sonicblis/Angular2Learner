(function (app) {
	app.aboutComponent =
		ng.core
			.Component({
				selector: 'about',
				template: '<div>We are experts in angular 2</div>'
			})
			.Class({
				constructor: function () {
				}
			})
})(window.app || (window.app = {}));
