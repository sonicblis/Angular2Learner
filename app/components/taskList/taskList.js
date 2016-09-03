(function (app) {
	app.taskListComponent =
		ng.core.Component({
			selector: 'task-list',
			templateUrl: 'app/components/taskList/taskList.html'
		})
			.Class({
				constructor: [app.taskService, function (taskService) {
					this.tasks = taskService.getTasks();
				}]
			})
})(window.app || (window.app = {}));