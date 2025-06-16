// https://reeteshghimire.com.np/2020/03/27/play-musical-notes-with-javascript/
function playNote(frequency = 329.6) {
	const context = new AudioContext()
	const osc = context.createOscillator()
	const gn = context.createGain()
	
	osc.type = 'sine'
	osc.connect(gn)
	osc.frequency.value = frequency
	osc.start(0)
	osc.stop(1) // duration sec

	gn.connect(context.destination)
	gn.gain.setValueAtTime(0.1, context.currentTime) // volume
	gn.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
}
