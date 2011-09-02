Ext.Loader.setConfig({ 
	enabled: true
});

Ext.Loader.setLocale({
    enabled: true,
    language: 'fr',
    localizedByDefault: false,
    types: [ 'controller', 'view' ]
});

Ext.create('Ext.app.Application', {
	name: 'AppTest',
	appFolder: 'app',
	autoCreateViewport: true,
	controllers: [ 'AppController' ],
	
	launch: function () {
	}	
});
