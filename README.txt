The ext-locale-loader can be used to dynamically load the required resources files.

<h1>The demonstration<h1>
You can run the demonstration using either of those files:
- ext-locale-loader.html
- ext-locale-loader-fr.html
The ext-locale-loader is disabled on the first one, and on the second one, it's set
to the 'fr' (french) language, so you should be able to notice a difference :)

<h1> How it works <h1>
The setup code must be executed along with the Ext.Loader.setConfig (before or after):

Ext.Loader.setLocale({
    enabled: true, // false by default
    language: 'fr',
    localizedByDefault: true,
    types: [ 'controller', 'view' ]
});

This configuration will enable the dynamic localization, using the 'fr' locale,
for the controllers and views (or more specifically, classes' namespaces which contain
the application name + . + type).

The localization files have to be in this folder: '/locale/{language}'.
For instance, with the previous configuration, it would be found in '/locale/fr'.

Localization files must contain classes which will redefine string resources (which are used in 
the normal classes). For instance, for a 'eNodes.controller.Coordinator', the localization
file would be '/locale/fr/controller/Coordinator.js' and would contain something like:

Ext.define('eNodes.locale.fr.controller.Coordinator', {
    xDeleteCurrentTabConfirmation: "Souhaitez-vous vraiment supprimer cet onglet ?"
});

Please note that the resource attributes MUST start with the letter 'x'.

Of course, the 'eNodes.controller.Coordinator' class also contains the 'xDeleteCurrentTabConfirmation'
string that should be, ideally, in English (as a default language). If the strings aren't found in the
locale file, the defaults strings will be used.

Ext.define('eNodes.controller.Coordinator', {
    xDeleteCurrentTabConfirmation: "Do you really want to remove this tab?"
});

<h1> Further configuration <h1>
The 'localized' property can be used on classes to disable the automatic loading of its
locale file. By default, localized will be considered 'true'.
On the contrary, if localizedByDefault is true (via Ext.Loader.setLocale), the 'localized'
property of the classes will have to be set to true if required.
