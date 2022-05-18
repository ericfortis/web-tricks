setTimeout(function setEmailAddress() {
	const email = [
		'm', 'o', 'c',
		'.',
		'l', 'i', 'a', 'm', 'g',
		String.fromCharCode(64), // @
		's', 'i', 't', 'r', 'o', 'f', 'e' 
	].reverse().join('')

	const linkEl = document.getElementById('EmailLink')
	if (linkEl) {
		linkEl.href = 'mailto:' + email
		linkEl.innerText = email
	}
}, 200)
