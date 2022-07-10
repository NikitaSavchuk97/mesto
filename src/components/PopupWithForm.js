
import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor (popupSelector, popupConfiguration, {popupFormSelector, popupFormInputSelector}, {callBack}) {
        super(popupSelector, popupConfiguration);
        this._popupFormSelector = popupFormSelector;
        this._popupFormInputSelector = popupFormInputSelector;
        this._callBack = callBack;

        this._popupForm = this._popupSelector.querySelector(`.${this._popupFormSelector}`);
        this._popupFormInputs = this._popupForm.querySelectorAll(`.${this._popupFormInputSelector}`);
    }

    _getInputvalues () {
        this._inputValues = {};
        this._popupFormInputs.forEach((item) => {
            this._inputValues[item.name] = item.value;
        })
        return this._inputValues;
    }

    setEventListeners () {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._callBack()
            this.close()
        })
    }

    close () {
        super.close()
        this._popupForm.reset()
    }
}

export default PopupWithForm;