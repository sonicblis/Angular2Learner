(function(langdoggler) {
	langdoggler.materialInputComponent = ng.core
		.Component({
			inputs: ['label'],
			selector: 'material-input',
			template: '<label>{{label}}</label><input type="text">'
		})
		.Class({
			constructor: [ng.core.ElementRef, function(ElementRef) {
				console.log('langdoggler.materialInputComponent initialized');
				console.log('element', ElementRef.nativeElement);

				// let's say we didn't want two-way binding here, how do we do our #field, addTask(field.value) trick on a component we wrote?

				// i had to setTimeout here, because nothing has been created when the constructor runs
				// 1. where's our link function?
				// 2. better yet, can these events and class changes be done with angular binding (probably)?
				setTimeout(function() {
					var c = ElementRef.nativeElement,
						i = c.querySelector('input'),
						l = c.querySelector('label');

					i.addEventListener('focus', function() {
						c.classList.add('focused');
					});

					i.addEventListener('blur', function() {
						c.classList.remove('focused');
					});

					i.addEventListener('change', onValueChange);

					l.addEventListener('mousedown', function() {
						setTimeout(function() {
							i.focus();
						});
					});

					function onValueChange() {
						if (i.value !== '') {
							c.classList.add('populated');
						}
						else {
							c.classList.remove('populated');
						}
					}
				});
			}]
		});

	// app.directive('weirdField', ['$timeout', function ($timeout) {
	// 	return {
	// 		restrict: 'E',
	// 		requires: 'ngModel',
	// 		scope: {
	// 			ngModel: '=',
	// 			label: '@'
	// 		},
	// 		template: '' +
	// 		'<div class="input-container">' +
	// 		'	<label>{{label}}</label>' +
	// 		'	<input type="text" ng-model="ngModel" />' +
	// 		'</div>',
	// 		link: function (scope, el, attrs) {
	// 		}
	// 	}
	// }]);
}(window.langdoggler || (window.langdoggler = {})));
