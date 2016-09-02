(function (app) {
	app.statsComponent =
		ng.core.Component({
			selector: 'stats',
			templateUrl: 'app/components/stats/stats.html'
		})
			.Class({
				constructor: [app.taskService, function (taskService) {
					this.complete = () => taskService.complete();
					this.total = 0;
				}]
			})
})(window.app || (window.app = {}));