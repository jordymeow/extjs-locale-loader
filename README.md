ExtJS Locale Loader
===================

The ext-locale-loader is used to dynamically load the required resources files for your classes + the ExtJS locale file. Your existing ExtJS 4 MVC application will be able to be localized very easily, without too many steps (except, of course, translating).

Prerequisites
=============

You need ExtJS 4.x, and the demonstration will look for it in the folder `/ext`.

Example
=======
You can run the example using either of those files hosted on a web server:

- ext-locale-loader.html
- ext-locale-loader-fr.html

The ext-locale-loader is disabled on the first one and enabled on the second one. It's set to the 'fr' (french) language, so you should be able to notice a difference :)

Initialization
==============
The initialization code must be executed along with the Ext.Loader.setConfig (before or after):

	Ext.Loader.setLocale({
	
		enabled: true, // false by default
		// extLocalePath: 'ext-4.0.2/locale' if you want to use ExtJS locale file (check the end of the README)
		language: 'fr',
		localizedByDefault: false,
		types: [ 'controller', 'view' ]
		
	});	

This configuration will enable the dynamic localization, using the 'fr' locale, for the controllers and views (or more specifically, classes' namespaces which contain the application name + . + type).

Existing classes
================
Let's say we have a `app.controller.Coordinator`. The resources would be ideally found at the beginning, and declared this way:

	Ext.define('app.controller.Coordinator', {
	
		localized: true,
		xDeleteCurrentTabConfirmation: "Do you really want to remove this tab?"
		
		[...]
		
	});
	
Please note that the resource attributes MUST start with the letter `x`. The `localized` attribute should be set to true if it's a localizable class, otherwise to false. You can play with this attribute differently depending on how you configured `localizedByDefault` during the initialization. It's recommended to write the content of those resources in English here, as they will be the ones used by default.

Localization files
==================
The localization files would be found in this folder: `{appFolder}/locale/{language}`. For instance, with the previous configuration, it would be found in `app/locale/fr`.

Each of them contain a class which redefine the resources (which are used in the normal classes). For instance, for a `app.controller.Coordinator`, the localization file would be `app/locale/fr/controller/Coordinator.js` and would contain something like:

	Ext.define('app.locale.fr.controller.Coordinator', {
		xDeleteCurrentTabConfirmation: "Souhaitez-vous vraiment supprimer cet onglet ?"
	});

The ExtJS 4 Locale File Issue
=============================
- Using "ext.js" only (and not ext-all), the ExtJS locale file will not be applied properly. It doesn't affect the Application's classes though, so those ones will still be translated. Thanks for your help on that issue if you find any solution.
