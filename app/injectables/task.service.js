(function (app) {
	app.taskService =
		ng.core.Injectable().Class({
			constructor: function () {
				var self = this;
				var tasks = [
					{title: 'do the angular 2 quickstart', complete: true},
					{title: 'pair program some stuff', complete: true},
					{title: 'Figure out how to not check completed count on task addition using an event of some sort', complete: false},
					{title: 'Routing!!!!!!', complete: false},
					{title: 'Figure out how to order this list by title', complete: false},
					{title: 'Figure out why langdon couldn\'t use arrow functions on component constructors', complete: false},
					{title: 'Code reivew and finish MaterialModule and materialInputComponent', complete: false}
				];

				this.getTasks = () => tasks;
				this.addTask = (task) => tasks.push(task);
				this.removeTask = (task) => tasks.splice(tasks.indexOf(task), 1);

				this.getCompleteCount = () => tasks.filter((task) => task.complete).length;
				this.getTotalCount = () => tasks.length;
			}
		})
})(window.app || (window.app = {}));
