async function sleep(ms = 1000) {
	await new Promise(resolve => setTimeout(resolve, ms))
}

// Demo
(async () => {
	const textarea = document.getElementById('sleep.js').nextElementSibling
	textarea.value = new Date() + '\n'
	await sleep()
	textarea.value += new Date()
})()