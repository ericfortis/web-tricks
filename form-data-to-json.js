function formDataToJSON(form) {
	const data = {}
	for (const [k, v] of new FormData(form))
		data[k] = v
	return JSON.stringify(data)
}

// Usage example:
const myForm = null;
fetch('/foo', {
	body: formDataToJSON(myForm),
	method: 'POST',
	headers: new Headers({ 'Content-Type': 'application/json' }),
	credentials: 'include'
})
