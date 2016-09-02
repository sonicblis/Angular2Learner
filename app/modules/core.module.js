(function(app){
	app.coreModule =
		ng.core.NgModule({
			imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule ],
			declarations: [ app.coreComponent, app.taskComponent, app.taskListComponent, app.taskToolsComponent, app.statsComponent ],
			bootstrap: [ app.coreComponent ]
		})
		.Class({
			constructor: [function () {
				//enableProdMode();
			}]
		})
})(window.app || (window.app = {}));