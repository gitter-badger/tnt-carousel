"use strict";

var Carousel = require( '../src/Carousel.js' );

var carousel = new Carousel( document.querySelector( '.carousel' ), {
	autoplay: false,
	mouseSwipe: false
} );