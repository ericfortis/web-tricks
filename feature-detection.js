const isMac = (function () {
	if (typeof navigator === 'undefined')
		return false

	if (navigator.userAgentData && navigator.userAgentData.platform)
		return navigator.userAgentData.platform === 'macOS'

	return /Mac|iP/.test(navigator.platform)
}())


const isSafari = typeof navigator !== 'undefined'
	&& navigator.vendor === 'Apple Computer, Inc.'


const touchSupported = typeof document !== 'undefined'
	&& 'ontouchstart' in document.documentElement


const isCommantrol = isMac
	? event => event.metaKey // Command
	: event => event.ctrlKey


const KC = {
	meta: 91,
	control: 17
}

function isCommantrolOnly(event) {
	if (!isCommantrol(event))
		return false

	return isMac
		? event.keyCode === KC.meta
		: event.keyCode === KC.control
}
