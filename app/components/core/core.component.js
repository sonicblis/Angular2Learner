(function(app){
	app.coreComponent =
		ng.core.Component({
			selector: 'body',
			templateUrl: 'app/components/core/core.component.html',
			viewProviders: [ app.taskService ],
			directives: [ ng.router.ROUTER_DIRECTIVES ]
		})
		.Class({
			constructor: function() {}
		})
})(window.app || (window.app = {}));
