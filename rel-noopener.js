// https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener
(function AddRelNoOpener() {
	const links = document.querySelectorAll('a')
	for (let i = 0; i < links.length; i++)
		links[i].rel = 'noopener'
}());
