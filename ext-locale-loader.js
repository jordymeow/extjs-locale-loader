/*
The MIT License

Copyright (c) 2011 Jordy Theiller 
work@meow.fr

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the 
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit 
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the 
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Ext.apply(Ext.Loader, {
    
    locale: {
        enabled: false,
        language: null,
        path: 'locale',
        localizedByDefault: false,
        types: []
    },
    
    setLocale: function (config) {
        Ext.apply(this.locale, config);
        this.initLocaleManager();
    },
    
    // Returns the type of the class (controller, view...) if it's a localized class, otherwise, false.
    isLocalizedClass: function (className, data) {
        if (!this.locale.enabled || data.localized === false) {
            return false;
        }
        if (!this.locale.localizedByDefault && !data.localized) {
            return false;
        }
        if (className.indexOf(".locale." + this.locale.language) !== -1) {
            return false;    
        }
        for (var c in this.locale.types) {
            var currentType = this.locale.types[c];
            if (className.indexOf(currentType) !== -1) {
                return currentType;
            }
        }
        return false;
    },
    
    initLocaleManager: function () {
        
        if (!this.locale.enabled) {
            return;
        }

        // LOCALE LOADER
        Ext.Class.registerPreprocessor('localeLoader', function (cls, data, callback) {
            var scope = Ext.Loader;
            var className = data.$className;
            var type = scope.isLocalizedClass(className, data);
            if (type) {
                var dependencies = data.requires = data.requires || [];
                var appName = className.substring(0, className.indexOf("." + type));
                var dependency = appName + ".locale." + scope.locale.language + "." + className.substring(appName.length + 1);
                dependencies.push(dependency);
            }
        }, true).setDefaultPreprocessorPosition('localeLoader', 'first');
        
        // LOCALE APPLIER
        Ext.Class.registerPreprocessor('localeApplier', function (cls, data, fn) {
            var scope = Ext.Loader;
            var className = data.$className;
            var type = scope.isLocalizedClass(className, data);
            if (type) {
                var appName = className.substring(0, className.indexOf("." + type));
                var dependency = appName + ".locale." + scope.locale.language + "." + className.substring(appName.length + 1);
                var localeClass = Ext.create(dependency);
                var localeProperties = {};
                for (var member in localeClass) {
                    if (member[0] === 'x') {
                        localeProperties[member] = localeClass[member];
                    }
                };
                Ext.apply(data, localeProperties);
            }
        }, true).setDefaultPreprocessorPosition('localeApplier', 'last');
    }
});
