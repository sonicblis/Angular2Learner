(function (app) {
	app.taskListComponent = ng.core
		.Component({
			selector: 'task-list',
			templateUrl: 'app/components/taskList/taskList.html'
		})
		.Class({
			constructor: [app.taskService, function (taskService) {
				this.tasks = taskService.getTasks();
				this.removeTask = function(task){
					console.log('deleting a task', task);
				};
				this.toggleTask = function(task){
					task.completed = !task.completed;
					console.info('task is now', task.completed);
				};
			}]
		})
})(window.app || (window.app = {}));