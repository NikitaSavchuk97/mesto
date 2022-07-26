import Popup from "./Popup.js";

class PopupWithConfirm extends Popup {
	constructor(popupSelector, popupConfiguration, { popupFormSelector, popupFormInputSelector, popupFormSubmitBtnSelector }, { callBack }) {
		super(popupSelector, popupConfiguration)
		this._popupForm = this._popup.querySelector(popupFormSelector);
		this._callBack = callBack;
	}

	open(card) {
		super.open()
		this._card = card
	}

	setEventListeners() {
		super.setEventListeners()
		this._popupForm.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._callBack(this._card)
		})
	}
}

export default PopupWithConfirm;