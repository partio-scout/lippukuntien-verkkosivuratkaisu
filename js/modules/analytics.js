const analytics = {

    appname: '',
    UA: '',

    trackEvent: function (action, category = null, label = null, value = null, customparams = {}) {
        //https://developers.google.com/analytics/devguides/collection/gtagjs/events
        let params = {};

        //<action> is the string that will appear as the event action in Google Analytics Event reports.

        //<category> is the string that will appear as the event category.
        if(category) {
            params.event_category = category;
        }

        //<label> is the string that will appear as the event label.
        if(label) {
            params.event_label = label;
        }

        //<value> is a non-negative integer that will appear as the event value.
        if(parseInt(value) > -1) {
            params.event_value = parseInt(value);
        }

	// anomyze_ip
	params.anonymize_ip = true;

        //Custom params for ecommerce and commonengagements (search, login,)
        //https://developers.google.com/analytics/devguides/collection/gtagjs/events#default_google_analytics_events
        for(let paramname in customparams) {
            params[paramname] = customparams[paramname];
        }


        if("gtag" in window) {
            gtag('event', action, params);
        } else {
            console.log(action + ': ' + JSON.stringify(params));
        }
    },

    trackPageView: function (urlpath) {
        //https://developers.google.com/analytics/devguides/collection/gtagjs/single-page-applications
        if(!this.UA) {
            this.getAndSetUA();
        }

        if(this.UA) {
            if("gtag" in window) {
                gtag('config', this.UA, { 'anonymize_ip': true, 'page_path': '/' + urlpath});
            } else {
                console.log('pageview: /' + urlpath);
            }
        } else {
            console.log('pageview: /' + urlpath);
        }
    },

    getAndSetUA: function () {
        //This works only if id and attribute, which are referenced below, are set manually in site html.
        let scriptElement = document.getElementById('gtag');
        if(scriptElement) {
            let UA = scriptElement.getAttribute('data-ua');
            if(UA) {
                this.UA = UA;
            }
        }

    },

    trackScreenView: function (screenname) {
        //https://developers.google.com/analytics/devguides/collection/gtagjs/screens
        if("gtag" in window) {
            gtag('event', 'screen_view', {'app_name' : analytics.appname, 'screen_name': screenname, 'anonymize_ip': true});
        } else {
            console.log('screen_view: ' + screenname);
        }
    }

};

export { analytics };
