(function(langdoggler){
	langdoggler.MaterialModule = ng.core
		.NgModule({
			imports: [ ng.platformBrowser.BrowserModule ],
			declaration: [ langdoggler.materialInputComponent ]
		})
		.Class({
			constructor: [function() {
				console.log('langdoggler.MaterialModule initialized');
			}]
		});
}(window.langdoggler || (window.langdoggler = {})));
