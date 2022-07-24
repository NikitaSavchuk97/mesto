class Api {
	constructor({ baseUrl, headers }) {
		this._baseUrl = baseUrl;
		this._headers = headers;
	}



	getUserInfo() {
		return fetch(`${this._baseUrl}/users/me`, {
			headers: this._headers,
		})
			.then(this._dataServerAnswer)
			.catch((err) => console.log(err))
	}

	setUserInfo({ name, job }) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: name,
				about: job,
			})
		})
			.then(this._dataServerAnswer)
			.catch((err) => console.log(err))
	}

	getCards() {
		return fetch(`${this._baseUrl}/cards`, {
			headers: this._headers,
		})
			.then(this._dataServerAnswer)
			.catch((err) => console.log(err))
	}

	setCard({ name, link }) {
		return fetch(`${this._baseUrl}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: name,
				link: link,
			})
		})
			.then(this._dataServerAnswer)
			.catch((err) => console.log(err))
	}

	deleteCard(id) {
		return fetch(`${this._baseUrl}/cards/${id}`, {
			method: 'DELETE',
			headers: this._headers,
		})
			.then(this._dataServerAnswer)
			.catch((err) => console.log(err))
	}

	likeCard(id) {
		return fetch(`${this._baseUrl}/cards/likes/${id}`, {
			method: 'PUT',
			headers: this._headers,
		})
			.then(this._dataServerAnswer)
			.catch((err) => console.log(err))
	}

	dislikeCard(id) {
		return fetch(`${this._baseUrl}/cards/likes/${id}`, {
			method: 'DELETE',
			headers: this._headers,
		})
			.then(this._dataServerAnswer)
			.catch((err) => console.log(err))
	}

	setAvatar({ avatar }) {
		return fetch(`${this._baseUrl}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: avatar,
			})
		})
			.then(this._dataServerAnswer)
			.catch((err) => console.log(err))
	}

	_dataServerAnswer(resolve) {
		if (resolve.ok) {
			return resolve.json()
		}
		return Promise.reject(resolve.status)
	}
}

export default Api;