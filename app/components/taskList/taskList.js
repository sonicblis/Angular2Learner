(function (app) {
	app.taskListComponent =
		ng.core.Component({
			selector: 'task-list',
			templateUrl: 'app/components/taskList/taskList.html'
		})
			.Class({
				constructor: [app.taskService, function (taskService) {
					this.tasks = taskService.tasks();
				}]
			})
})(window.app || (window.app = {}));