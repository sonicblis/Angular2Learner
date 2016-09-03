(function (app) {
	app.taskComponent =
		ng.core.Component({
			selector: 'task',
			templateUrl: 'app/components/task/task.html',
			inputs: ['task'],
			outputs: ['taskRemoved', 'taskToggleCompleted']
		})
			.Class({
				constructor: [function () {
					this.taskRemoved = new ng.core.EventEmitter();
					this.taskToggleCompleted = new ng.core.EventEmitter();

					this.onRemove = function(task) {
						this.taskRemoved.emit(task);
					};
					this.onToggleComplete = function(task){
						this.taskToggleCompleted.emit(task);
					};
				}]
			})
})(window.app || (window.app = {}));