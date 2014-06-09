define(function(require, exports, module) {
	var Engine  = require('famous/core/Engine');

	// import the app view using require
	var AppView = require('views/AppView');

	var mainContext = Engine.createContext();

	// create a new instance of AppView
	var appView = new AppView();

	// add the instance to the mainContext
	mainContext.add(appView);

});
