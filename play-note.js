// https://reeteshghimire.com.np/2020/03/27/play-musical-notes-with-javascript/
function playNote(frequency = 329.6) {
	const context = new AudioContext()
	const oscillatorNode = context.createOscillator()
	const gainNode = context.createGain()
	oscillatorNode.type = 'sine'
	oscillatorNode.connect(gainNode)
	oscillatorNode.frequency.value = frequency
	oscillatorNode.start(0)
	gainNode.connect(context.destination)
	gainNode.gain.setValueAtTime(0.1, context.currentTime) // volume
	gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
	setTimeout(function () {
		oscillatorNode.stop()
	}, 1000)
}