class FormValidator {
    constructor(configuration, form) {
        this._form = form;
        this._inputSelector = configuration.inputSelector;
        this._inputElementList = Array.from(this._form.querySelectorAll(`.${this._inputSelector}`));
        this._submitButtonSelector = configuration.submitButtonSelector;
        this._formSaveButton = this._form.querySelector(`.${this._submitButtonSelector}`);
        this._inactiveButtonClass = configuration.inactiveButtonClass;
        this._inputErrorClass = configuration.inputErrorClass;
        this._errorClass = configuration.errorClass;
    }



    _showInputError = (inputElement, errorMessage) => {
        const spanError = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        spanError.classList.add(this._errorClass);
        spanError.textContent = errorMessage;
    }
    _hideInputError = (inputElement) => {
        const spanError = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        spanError.textContent = '';
        spanError.classList.remove(this._errorClass);
    }

    _isValid = (inputElement) => {
        if (!inputElement.validity.valid) {
            const errorMessage = inputElement.validationMessage;
            this._showInputError(inputElement, errorMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput = (inputElementList) => {
        return inputElementList.some(function (inputElement) {
            return !inputElement.validity.valid;
        });
    }

    _disableSubmitBtn = () => {
        this._formSaveButton.classList.add(this._inactiveButtonClass);
        this._formSaveButton.disabled = true;
    }
    _enableSubmitBtn = () => {
        this._formSaveButton.classList.remove(this._inactiveButtonClass);
        this._formSaveButton.disabled = false;
    }

    _toggleButtonState = () => {
        if (this._hasInvalidInput(this._inputElementList)) {
            this._disableSubmitBtn();
        } else {
            this._enableSubmitBtn();
        }
    }

    disableValidation = () => {
        this._disableSubmitBtn();
        this._inputElementList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    }
    enableValidation = () => {
        this._inputElementList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState();
            });
        });
        this._toggleButtonState();
    }
}

export default FormValidator;