(function (app) {
	app.taskComponent =
		ng.core.Component({
			selector: 'task',
			templateUrl: 'app/components/task/task.html',
			inputs: ['task']
		})
			.Class({
				constructor: [function () {

				}]
			})
})(window.app || (window.app = {}));