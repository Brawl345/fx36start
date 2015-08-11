var matches = /Firefox\/(\d+)/.exec(navigator.userAgent);
	
// if using Fx
if (matches !== null && matches.length > 1) {
	var version = parseInt(matches[1], 10);

// if not using Fx, redirect
} else {
	document.location.href = 'https://www.mozilla.org/firefox/desktop/';
}
