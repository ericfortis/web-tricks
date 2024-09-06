function formDataToJSON(form) {
	return Object.fromEntries(new FormData(form))
}

// Usage example:
fetch('/foo', {
	body: formDataToJSON(myForm),
	method: 'POST'
})
