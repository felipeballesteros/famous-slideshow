define(function(require, exports, module) {
	var Engine  = require('famous/core/Engine');

	// import Utility
	var Utility = require('famous/utilities/Utility');

	// import the app view using require
	var AppView = require('views/AppView');

	// import SlideData
	var SlideData = require('data/SlideData');

	var mainContext = Engine.createContext();

	function initApp(data) {

		// parses out response data and retrieves arrays of URLs
		data = SlideData.parse(data);

		// instatiates AppView with our URL data
		var appView = new AppView({
			data: data
		});

		// add the instance to the mainContext
		mainContext.add(appView);
	}

	// simple Get request to the Picasa API with a callback
	Utility.loadURL(SlideData.getUrl(), initApp);
});
