(function(app){
	app.coreModule =
		ng.core.NgModule({
			imports: [
				ng.platformBrowser.BrowserModule,
				ng.forms.FormsModule,
				langdoggler.MaterialModule,
				// ng.router.RouterModule,
				// app.routing
				],
			declarations: [
				app.coreComponent,
				app.taskComponent,
				app.taskListComponent,
				app.taskToolsComponent,
				app.statsComponent,
				app.aboutComponent,
				app.contactComponent,
				app.welcomeComponent,
				langdoggler.materialInputComponent
			],
			bootstrap: [ app.coreComponent ]
		})
		.Class({
			constructor: [function () {
				//enableProdMode();
			}]
		})
})(window.app || (window.app = {}));