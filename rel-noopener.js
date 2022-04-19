// https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener
function injectRelNoOpener() {
	document.querySelectorAll('a').forEach(link => link.rel = 'noopener')
}
