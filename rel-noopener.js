// https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener
(function AddRelNoOpener() {
	var links = document.querySelectorAll('a')
	for (var i = 0; i < links.length; i++)
		links[i].rel = 'noopener'
}());