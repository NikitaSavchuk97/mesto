import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor (popup, popupConfiguration, {popupFormSelector, popupFormInputSelector, popupFormSubmitBtnSelector}, {callBack}) {
        super(popup, popupConfiguration);

        this._popupForm = this._popup.querySelector(popupFormSelector);
        this._popupFormInputs = Array.from(this._popup.querySelectorAll(popupFormInputSelector));
        this._popupFormSubmitBtn = this._popup.querySelector(popupFormSubmitBtnSelector);
        this._callBack = callBack;
    }

    _getInputvalues () {
        this._inputValues = {};
        this._popupFormInputs.forEach((item) => {
            this._inputValues[item.name] = item.value;
        })
        return this._inputValues;
    }

    setEventListeners () {
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callBack(this._getInputvalues());
            this.close();
        });
        super.setEventListeners();
    }

    close () {
        this._popupForm.reset()
        super.close()
    }
}

export default PopupWithForm;