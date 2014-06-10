/*** AppView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    // import the SlideshowView class
    var SlideshowView = require('views/SlideshowView');

    // Constructor function for our AppView class

    function AppView() {

        // Applies View's constructor function to AppView class
        View.apply(this, arguments);

        // Create a new instance of the SlideshowView class / pass photo data
        var slideshowView = new SlideshowView({
            data: this.options.data
        });

        // add SlideshowView instance to app view
        this.add(slideshowView);
    }

    // Establishes prototype chain for AppView class to inherit from View
    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    // Default options for AppView class
    AppView.DEFAULT_OPTIONS = {

        // it's a good idea to add a property in the
        // default options, even when it's undefined
        data: undefined
    };

    // Define your helper functions and prototype methods here

    module.exports = AppView;
});
