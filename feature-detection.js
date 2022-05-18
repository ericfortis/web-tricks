const isMac = (function () {
	if (typeof navigator === 'undefined')
		return false

	if (navigator.userAgentData && navigator.userAgentData.platform)
		return navigator.userAgentData.platform === 'macOS'

	return /Mac|iP/.test(navigator.platform)
}())


const isSafari = typeof navigator !== 'undefined'
	&& navigator.vendor === 'Apple Computer, Inc.'


export const isIos = typeof navigator !== 'undefined' 
	&& ['iPhone', 'iPad'].includes(navigator.platform)


const touchSupported = typeof document !== 'undefined'
	&& 'ontouchstart' in document.documentElement


const isCommantrol = isMac
	? event => event.metaKey // Command
	: event => event.ctrlKey


function isCommantrolOnly(event) {
	if (!isCommantrol(event))
		return false

	return isMac
		? event.keyCode === 91 // Meta
		: event.keyCode === 17 // Control
}
