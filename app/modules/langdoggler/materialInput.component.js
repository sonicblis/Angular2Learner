(function(langdoggler) {
	var idSeed = 1;

	langdoggler.materialInputComponent = ng.core
		.Component({
			inputs: ['label'],
			selector: 'material-input',
			template: '' +
'<div class="material-input-container" [ngClass]="{ focused: focused, populated: populated }">\
	<label [attr.for]="id">{{label}}</label>\
	<input [id]="id" (blur)="focused = false" (change)="populated = ($event.target.value !== \'\')" (focus)="focused = true" type="text">\
</div>'
		})
		.Class({
			constructor: [function() {
				var self = this;

				self.id = 'materialInput' + idSeed++;
				self.focused = false;
				self.populated = false;

				// TODO let's say we didn't want two-way binding here, how do we do our #field, addTask(field.value) trick on a component we wrote?

				// TODO how can we get validation wired up to our custom input?

				// TODO how can we inspect the default value (or if we're two-way bound, how can we $watch) to set populated = true?

				// TODO how can we store our template in a file, use templateUrl, but compile it for distribution like ui-bootstrap.tpls.js?

				// TODO i didn't like this, but it's a problem that exists in angular 1... i didn't really need div.material-input-container, except to put ngClass on it... it's a shame i can't ngClass on the parent container somehow
			}]
		});
}(window.langdoggler || (window.langdoggler = {})));
