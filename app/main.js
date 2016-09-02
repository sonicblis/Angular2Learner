(function(app){
	document.addEventListener(
		'DOMContentLoaded', function(){
			ng.platformBrowserDynamic
				.platformBrowserDynamic()
				.bootstrapModule(app.coreModule);
		}
	)
})(window.app || (window.app = {}));