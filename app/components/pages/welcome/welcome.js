(function (app) {
	app.welcomeComponent =
		ng.core
			.Component({
				selector: 'about',
				template: '<div>We\'re so glad you\'re here.  It\'s nice to meet you.</div>'
			})
			.Class({
				constructor: function () {
				}
			})
})(window.app || (window.app = {}));