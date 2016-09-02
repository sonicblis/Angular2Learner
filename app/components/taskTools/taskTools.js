(function (app) {
	app.taskToolsComponent =
		ng.core.Component({
			selector: 'task-tools',
			templateUrl: 'app/components/taskTools/taskTools.html'
		})
			.Class({
				constructor: [app.taskService, function (taskService) {
					var self = this;

					self.title = '';
					self.addTask = (title) => {
						taskService.addTask({
							title: title, completed: false
						});
						self.title = '';
					}
				}]
			})
})(window.app || (window.app = {}));
