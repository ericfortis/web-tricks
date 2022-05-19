function fetchWithRetry(url, options) {
	var maxRetries = 3
	var msRetryDelayIncrement = 1500

	return new Promise(function (resolve, reject) {
		attemptFetch(1)

		function attemptFetch(nRetry) {
			fetch(url, options)
				.then(function (response) {
					if (nRetry <= maxRetries
						&& response.status >= 500
						&& response.status < 600)
						retry(nRetry)
					else
						resolve(response)
				})
				.catch(function (error) {
					if (nRetry <= maxRetries)
						retry(nRetry)
					else
						reject(error)
				})
		}

		function retry(nRetry) {
			setTimeout(function () {
				attemptFetch(++nRetry)
			}, msRetryDelayIncrement * nRetry)
		}
	})
}
