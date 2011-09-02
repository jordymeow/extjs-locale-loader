Ext.define('AppTest.view.Viewport', {
	extend: 'Ext.container.Viewport',
	
	// Resources
	localized: true,
	xWelcome: "Welcome",
	xVerySimpleApplication: "Very simple application using ext-locale-loader with extjs-4 mvc!",
	
	// Init
	initComponent: function () {
		Ext.apply(this, {
			layout: 'border',
			padding: 10,
			items: [
				{
					region: 'north',
					xtype: 'panel',
					frame: true,
					height: 60,
					title: this.xWelcome,
					html: "<span style='font-size: 16px; font-weight: bold; margin-left: 2px;'>" + this.xVerySimpleApplication + "</span>"
				}, {
					region: 'center',
					xtype: 'appMain',
					margin: '5 0 0 0',
					frame: false
				}
			]
		});
		this.callParent();
	}
});
