// Polyfills
//import 'whatwg-fetch'; // polyfill fetch (<2017)
//import 'promise-polyfill/src/polyfill'; // polyfill promises for fetch (IE11)
//import 'core-js/stable'; // polyfill promises and ES2015 methods (mainly IE11) https://github.com/zloirock/core-js

// Libraries should be imported in a module using them
//import Vue from 'vue';
//import 'slick-carousel';
//import 'magnific-popup';

// Custom modules
import "./modules/input-detection";
import "./modules/menu";
import { search } from "./modules/search";
import { cookies } from './modules/cookies';
import "./modules/hero-carousel";
//import './modules/googleanalytics'; // track links as events
//import { analytics } from './modules/analytics'; // methods for tracking custom events and pageviews
import components from './components/all';

const $ = window.jQuery;



//Article card image hover
$('.article-card .read-more').on('mouseover', function(e) {
	$(this).parent('.article-card').find('.image').addClass('hover');
})

$('.article-card .read-more').on('mouseleave', function(e) {
	$(this).parent('.article-card').find('.image').removeClass('hover');
})


//Article card image hover
$('.block-image-beside-content .read-more').on('mouseover', function(e) {
	$(this).closest('.block-image-beside-content').find('.image').addClass('hover');
})

$('.block-image-beside-content .read-more').on('mouseleave', function(e) {
	$(this).closest('.block-image-beside-content').find('.image').removeClass('hover');
})

//Article card image hover
$('.block-image-beside-content .image-link').on('mouseover', function(e) {
	$(this).closest('.block-image-beside-content').find('.read-more').addClass('hover');
})

$('.block-image-beside-content .image-link').on('mouseleave', function(e) {
	$(this).closest('.block-image-beside-content').find('.read-more').removeClass('hover');
})