(function(app){
	app.routing = ng.router.RouterModule.forRoot(
		[
			{path: '', redirectTo: app.welcomeComponent, pathMatch: 'full'},
			{path: 'about', component: app.aboutComponent, name: 'about'},
			{path: 'welcome', component: app.welcomeComponent, name: 'welcome'},
			{path: 'contact', component: app.contactComponent, name: 'contact'},
		],
		{
			useHash: true
		}
	);
})(window.app || (window.app = {}));
