class FormValidator {
    constructor (configuration, form) {
        this._inputSelector = configuration.inputSelector;
        this._submitButtonSelector = configuration.submitButtonSelector;
        this._inactiveButtonClass = configuration.inactiveButtonClass;
        this._inputErrorClass = configuration.inputErrorClass;
        this._errorClass = configuration.errorClass;
        this._form = form;
    }

    // #1
    enableValidation () {
        const inputElementList = Array.from(this._form.querySelectorAll(`.${this._inputSelector}`));
        const formSaveButton = this._form.querySelector(`.${this._submitButtonSelector}`);

        inputElementList.forEach( function (inputElement) {
            inputElement.addEventListener('input', function () {
                this._isValid (inputElement);
                this._toggleButtonState (inputElementList, formSaveButton);
            });
        });
        this._toggleButtonState (inputElementList, formSaveButton);
    }

    // #2
    _toggleButtonState (inputElementList, formSaveButton) {
        if (this._hasInvalidInput(inputElementList)) {
            formSaveButton.classList.add(this._inactiveButtonClass);
            formSaveButton.disabled = true;
        } else {
            formSaveButton.classList.remove(this._inactiveButtonClass);
            formSaveButton.disabled = false;
        }
    }

    // #3
    _hasInvalidInput (inputElementList) {
        return inputElementList.some( function (inputElement) {
            return !inputElement.validity.valid;
        });
    }

    // #4
    _isValid (inputElement) {
        if (!inputElement.validity.valid) {
            const errorMessage = inputElement.validationMessage
            this._showInputError (inputElement, errorMessage);
        } else {
            this._hideInputError (inputElement);
        }
    }

    //#5
    _showInputError (inputElement, errorMessage) {
        const spanError = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        spanError.classList.add(this._errorClass);
        spanError.textContent = errorMessage;
    }
    _hideInputError (inputElement) {
        const spanError = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        spanError.textContent = '';
        spanError.classList.remove(this._errorClass);
    }
}

export default FormValidator;