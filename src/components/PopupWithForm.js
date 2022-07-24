import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, popupConfiguration, { popupFormSelector, popupFormInputSelector, popupFormSubmitBtnSelector }, { callBack }) {
        super(popupSelector, popupConfiguration);
        this._popupForm = this._popup.querySelector(popupFormSelector);
        this._popupFormInputs = Array.from(this._popup.querySelectorAll(popupFormInputSelector));
        this._popupFormSubmitBtn = this._popup.querySelector(popupFormSubmitBtnSelector);
        this._popupFormSubmitBtnText = this._popupFormSubmitBtn.textContent;
        this._callBack = callBack;
    }

    _getInputvalues() {
        this._inputValues = {};
        this._popupFormInputs.forEach((item) => {
            this._inputValues[item.name] = item.value;
        });
        return this._inputValues;
    }

    setEventListeners() {
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callBack(this._getInputvalues());
            this.close();
        });
        super.setEventListeners();
    }

    close() {
        this._popupForm.reset()
        super.close()
    }

    isLoading(load) {
        if (load) {
            this._popupFormSubmitBtn.textContent = 'Идет загрузка данных на сервер';
        } else {
            this._popupFormSubmitBtn.textContent = this._popupFormSubmitBtnText;
        }
    }
}

export default PopupWithForm;