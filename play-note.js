// https://reeteshghimire.com.np/2020/03/27/play-musical-notes-with-javascript/
function playNote(frequency = 329.6) {
	const context = new AudioContext()
	const on = context.createOscillator()
	const gn = context.createGain()
	
	on.type = 'sine'
	on.connect(gn)
	on.frequency.value = frequency
	on.start(0)

	gn.connect(context.destination)
	gn.gain.setValueAtTime(0.1, context.currentTime) // volume
	gn.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
	
	setTimeout(function () {
		on.stop()
	}, 1000)
}
