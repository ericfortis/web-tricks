(function () {
	const numA = document.getElementById('numA')
	const numB = document.getElementById('numB')
	const output = document.getElementById('outputAB');

	[numA, numB].forEach(el => el.addEventListener('change', function () {
		output.innerText = numA.valueAsNumber + numB.valueAsNumber

		// 👀 here
		output.classList.remove('feedbackPulse')
		
		// Then wait for the next repaint before adding it back
		requestAnimationFrame(function () { 
			output.classList.add('feedbackPulse')
		})
	}))
}());
