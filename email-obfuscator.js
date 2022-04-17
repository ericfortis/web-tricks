setTimeout(function setEmailAddress() {
	var email = [
		'm', 'o', 'c',
		'.',
		'l', 'i', 'a', 'm', 'g',
		String.fromCharCode(64), // @
		't', 'c', 'a', 't', 'n', 'o', 'c'
	].reverse().join('')

	var linkEl = document.getElementById('emailField')
	if (linkEl) {
		linkEl.href = 'mailto:' + email
		linkEl.innerText = email
	}
}, 200)
