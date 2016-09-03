(function (app) {
	app.statsComponent =
		ng.core.Component({
			selector: 'stats',
			templateUrl: 'app/components/stats/stats.html'
		})
			.Class({
				constructor: [app.taskService, function (taskService) {
					this.complete = () => taskService.getCompleteCount();
					this.total = () => taskService.getTotalCount();
				}]
			})
})(window.app || (window.app = {}));