(function (app) {
	app.taskService =
		ng.core.Injectable().Class({
			constructor: function () {
				var self = this;
				var tasks = [
					{title: 'Figure out how to not check completed count on task addition', complete: false},
					{title: 'Routing!!!!!!', complete: false},
					{title: 'Figure out how to order this list by title', complete: false}
				];

				this.tasks = () => tasks;
				this.addTask = (task) => tasks.push(task);
				this.removeTask = (task) => tasks.splice(tasks.indexOf(task), 1);

				this.complete = () => tasks.filter((task) => task.complete).length;
			}
		})
})(window.app || (window.app = {}));
