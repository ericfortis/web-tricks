function fetchWithRetry(url, options) {
	const maxRetries = 3
	const msRetryDelayIncrement = 1500

	return new Promise((resolve, reject) => {
		attemptFetch(1)

		function attemptFetch(nRetry) {
			fetch(url, options)
				.then(response => {
					if (nRetry <= maxRetries
						&& response.status >= 500
						&& response.status < 600)
						retry(nRetry)
					else
						resolve(response)
				})
				.catch(error => {
					if (nRetry <= maxRetries)
						retry(nRetry)
					else
						reject(error)
				})
		}

		function retry(nRetry) {
			setTimeout(() => {
				attemptFetch(++nRetry)
			}, msRetryDelayIncrement * nRetry)
		}
	})
}

