(function (app) {
	app.taskService =
		ng.core.Injectable().Class({
			constructor: function () {
				var self = this;
				var tasks = [
					{complete: true, title: 'do the angular 2 quickstart'},
					{complete: true, title: 'pair program some stuff'},
					{complete: false, title: 'wire up removeTask'},
					{complete: true, title: 'Figure out how to not check completed count on task addition using an event of some sort'},
					{complete: false, title: 'Routing!!!!!!'},
					{complete: false, title: 'Figure out how to order this list by title'},
					{complete: false, title: 'Figure out why langdon couldn\'t use arrow functions on component constructors'},
					{complete: false, title: 'Code review and finish MaterialModule and materialInputComponent'},
					{complete: false, title: 'Everybody\'s favorite, validation!!!'},
					{complete: false, title: 'Create our own *structuralDirective that does... something?'}
				];

				self.getTasks = () => tasks;
				self.addTask = (task) => tasks.push(task);
				self.removeTask = (task) => tasks.splice(tasks.indexOf(task), 1);

				self.getCompleteCount = () => tasks.filter((task) => task.complete).length;
				self.getTotalCount = () => tasks.length;
			}
		})
})(window.app || (window.app = {}));
