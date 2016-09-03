(function (app) {
	app.contactComponent =
		ng.core
			.Component({
				selector: 'about',
				template: '<div>phone: (757) 354-4627</div><div>email: angular@2.com</div>'
			})
			.Class({
				constructor: function () {
				}
			})
})(window.app || (window.app = {}));