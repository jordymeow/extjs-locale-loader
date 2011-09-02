Ext.define('AppTest.controller.AppController', {
	extend: 'Ext.app.Controller',
	
	views: [ 'AppMain' ],
	uses: [],
	refs: [],

    // Resources
	localized: true,
	xButtonWasClicked: "The button called '{0}' was clicked.",
    
	// Init
	init: function () {
		this.control({
			'[action=file]': { click: this.onButtonClick },
			'[action=edit]': { click: this.onButtonClick }
        });
	},
	
	onButtonClick: function (btn) {
		Ext.Msg.alert("Alert", Ext.String.format(this.xButtonWasClicked, btn.text));
	}
});