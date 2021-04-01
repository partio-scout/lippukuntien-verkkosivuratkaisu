var $ = window.jQuery;

$(document).ready(function() {

    let sitename = 'partio';
    let cookiename = sitename + '-cookies-accepted';

    let accepted = cookies.get(cookiename);
    if(!accepted) {
	let notification = document.getElementById('cookie-notification');
	if(notification) {
	    notification.classList.add('active');
	    let acceptButton = document.getElementById('cookie-accept-button');
	    acceptButton.addEventListener('click', function cookiesAccepted(e) {
		e.preventDefault();
		acceptButton.removeEventListener('click', cookiesAccepted, false);
		notification.classList.remove('active');
		cookies.set(cookiename, 1, 365);
	    });
	}
    }

});

const cookies = {

    set: function (name, value, days)	{
	let cookie = name + "=" + value;

	if (days) {
	    var date = new Date();
	    date.setTime(date.getTime() + days * 24 * 3600000);
	    cookie += "; expires=" + date.toUTCString();
	}

	document.cookie = cookie + "; path=/";
    },

    get: function (name) {
	let pattern = new RegExp(name + '=([^;]+)', 'i');
	let match = document.cookie.match(pattern);

	return match && match[1] || null;
    }

}

export { cookies };
