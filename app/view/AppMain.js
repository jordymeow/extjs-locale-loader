Ext.define('AppTest.view.AppMain', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.appMain',
	
	// Resources
	localized: true,
	xFile: "File",
	xEdit: "Edit",
	xTitle: "Title",
	xPleaseClick: "Please click those buttons. All the text of this application is translated by ext-locale-loader.",

    // Init
	initComponent: function () {
		Ext.apply(this, {
			tbar: [ 
				{
					xtype: 'button',
					action: 'file',
					text: this.xFile
				}, {
					xtype: 'button',
					action: 'edit',
					text: this.xEdit
				}
			],
			title: this.xTitle,
			html: this.xPleaseClick
		});
		this.callParent();
	}
});