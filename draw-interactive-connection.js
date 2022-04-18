window.addEventListener('load', function () {
	const target = document.getElementById("InteractiveConnectionTarget")
	const ic = document.getElementById("InteractiveConnection")

	let xStart = 0
	let yStart = 0

	function onMove(event) {
		event.preventDefault()
		ic.setAttribute('d', describeLinkCurve(xStart, yStart, event.offsetX, event.offsetY))
	}

	target.addEventListener('pointerdown', function (event) {
		event.preventDefault()
		target.setPointerCapture(event.pointerId)
		xStart = event.offsetX
		yStart = event.offsetY
		target.addEventListener('pointermove', onMove)
	})

	target.onpointerup = function (event) {
		target.removeEventListener('pointermove', onMove)
	}

	target.onpointercancel = function (event) {
		target.releasePointerCapture(event.pointerId)
		target.removeEventListener('pointermove', onMove)
	}
})


/**
 * A Bezier curve between two Points for drawing Links.
 * Path "M:p1 C:p1Anchor p2Anchor p2"
 */
function describeLinkCurve(x1, y1, x2, y2) {
	const xAnchorDelta = ((Math.abs(y2 - y1) + Math.abs(x2 - x1)) >> 2) | 0
	return `M${x1},${y1} C${x1 + xAnchorDelta},${y1} ${x2 - xAnchorDelta},${y2} ${x2},${y2}`
}
