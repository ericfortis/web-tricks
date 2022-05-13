window.addEventListener('load', function () {
	const numA = document.getElementById('numA')
	const numB = document.getElementById('numB')
	const output = document.getElementById('outputAB');

	[numA, numB].forEach(el => el.addEventListener('change', function () {
		output.innerText = parseFloat(numA.value) + parseFloat(numB.value)
		
		output.classList.remove('feedbackPulse')
		requestAnimationFrame(function () {
			output.classList.add('feedbackPulse')
		})
	}))
})
