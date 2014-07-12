/*** SlideshowView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    var SlideView = require('views/SlideView');
    var Lightbox = require('famous/views/Lightbox');

    function _createLightbox() {
        this.lightbox = new Lightbox(this.options.lightboxOpts);
        this.mainNode.add(this.lightbox);
    }

     // Constructor function for our EmptyView class
    function SlideshowView() {

        // Applies View's constructor function to EmptyView class
        View.apply(this, arguments);

        this.rootModifier = new StateModifier({
            size: this.options.size,
            origins: [0.5, 0],
            align: [0.5, 0]
        });

        this.mainNode = this.add(this.rootModifier);

        _createLightbox.call(this);
        _createSlides.call(this);
    }

    function _createSlides() {
        this.slides = [];
        this.currentIndex = 0;

        for (var i = 0; i < this.options.data.length; i++){
            var slide = new SlideView({
                size: this.options.size,
                photoUrl: this.options.data[i]
            });

            this.slides.push(slide);

            // adding click listener
            // on click, calling .showNextSlide()
            // note that we are binding showNextSlide to the slidshow
            // to maintain the correct context when called

            slide.on('click', this.showNextSlide.bind(this));

        }

        this.showCurrentSlide();
    }

        // Establishes prototype chain for EmptyView class to inherit from View
    SlideshowView.prototype = Object.create(View.prototype);
    SlideshowView.prototype.constructor = SlideshowView;

    SlideshowView.prototype.showCurrentSlide = function() {
		var slide = this.slides[this.currentIndex];
		this.lightbox.show(slide);
	};

    SlideshowView.prototype.showNextSlide = function() {
        this.currentIndex++;
        if (this.currentIndex === this.slides.length) this.currentIndex = 0;
        this.showCurrentSlide();
    };

    // Default options for EmptyView class
    SlideshowView.DEFAULT_OPTIONS = {
        size: [450, 500],
        data: undefined,
        lightboxOpts: {}
    };

    // Define your helper functions and prototype methods here

    module.exports = SlideshowView;
});
