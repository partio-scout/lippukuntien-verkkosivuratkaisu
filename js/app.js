// Polyfills
//import 'whatwg-fetch'; // polyfill fetch (<2017)
//import 'promise-polyfill/src/polyfill'; // polyfill promises for fetch (IE11)
//import 'core-js/stable'; // polyfill promises and ES2015 methods (mainly IE11) https://github.com/zloirock/core-js

// Libraries should be imported in a module using them
//import Vue from 'vue';
import 'slick-carousel';
//import 'magnific-popup';

import * as Klaro from "klaro";

// Custom modules
import "./modules/input-detection";
import "./modules/menu";
import { search } from "./modules/search";
import { cookies } from './modules/cookies';
import { initMap } from './modules/map';
import "./modules/load-more";
//import './modules/googleanalytics'; // track links as events
//import { analytics } from './modules/analytics'; // methods for tracking custom events and pageviews
import components from './components/all';

const $ = window.jQuery;

const config = {
	lang: 'en',
	acceptAll: true,
	mustConsent: false,
	disablePoweredBy: false,
	styling: {
        theme: ['light'],
    },
    translations: {
        en: {
        	privacyPolicyUrl: klaro_texts.privacyPolicy.url,
        	privacyPolicy: {
        		name: klaro_texts.privacyPolicy.name,
        		text: klaro_texts.privacyPolicy.text
        	},
        	acceptAll: klaro_texts.buttons.acceptAll,
        	acceptSelected: klaro_texts.buttons.acceptSelected,
        	decline: klaro_texts.buttons.decline,
        	ok: klaro_texts.buttons.ok,
        	purposeItem: {
        		service: klaro_texts.services.service
        	},
        	service: {
                purpose: klaro_texts.services.purpose,
        		required: {
        			title: klaro_texts.services.required
        		},
        		disableAll: {
					title: klaro_texts.services.disableAll.title,
					description: klaro_texts.services.disableAll.description
				}
        	},
        	//Bottom right popup
        	consentNotice: {
                description: klaro_texts.notice.description, 
                learnMore: klaro_texts.notice.learnMore,               
            },
            //Consent modal
        	consentModal: {
	            title: klaro_texts.modal.title,
	            description: klaro_texts.modal.description,
	        },
            analytics: {
                title: klaro_texts.cookies.analytics.title,
                description: klaro_texts.cookies.analytics.description,
            },
            required_cookies: {
            	title: klaro_texts.cookies.required.title,
            	description: klaro_texts.cookies.required.description
            },            
            third_party: {
            	title: klaro_texts.cookies.thirdParty.title,
            	description: klaro_texts.cookies.thirdParty.description
            },            
            purposes: {
                analytics: klaro_texts.cookies.analytics.purpose,
                required_cookies: klaro_texts.cookies.required.purpose,
                third_party: klaro_texts.cookies.thirdParty.purpose
            },
            contextualConsent: {
            	description: klaro_texts.cookies.contextualConsent.description,
            	acceptOnce: klaro_texts.cookies.contextualConsent.acceptOnce,
            	acceptAlways: klaro_texts.cookies.contextualConsent.acceptAlways
            }
        }
    },
    services: [
    	{
            name: "required_cookies",
            purposes: ["required_cookies"],
            required: true,
        },
        {
            name: "analytics",
            purposes: ["analytics"],
        },
        {
            name: "third_party",
            purposes: ["third_party"],
        },
    ],
};

// we assign the Klaro module to the window, so that we can access it in JS
window.klaro = Klaro;
window.klaroConfig = config;
// we set up Klaro with the config
Klaro.setup(config);

$('.cookie-settings-toggle').on('click', function() {
    klaro.show();
});



$(document).ready(function() {
    $('.acf-map').each(function(){
        initMap( $(this) );
    });
})

//Article card image hover
$(document).on('mouseover', '.article-card .read-more', function(e) {
	$(this).parent('.article-card').find('.image').addClass('hover');
});

$(document).on('mouseleave', '.article-card .read-more', function(e) {
	$(this).parent('.article-card').find('.image').removeClass('hover');
});

//Article card image hover
$('.block-image-beside-content .read-more').on('mouseover', function(e) {
	$(this).closest('.block-image-beside-content').find('.image').addClass('hover');
});

$('.block-image-beside-content .read-more').on('mouseleave', function(e) {
	$(this).closest('.block-image-beside-content').find('.image').removeClass('hover');
});

//Article card image hover
$('.block-image-beside-content .image-link').on('mouseover', function(e) {
	$(this).closest('.block-image-beside-content').find('.read-more').addClass('hover');
});

$('.block-image-beside-content .image-link').on('mouseleave', function(e) {
	$(this).closest('.block-image-beside-content').find('.read-more').removeClass('hover');
});