
export const validationConfiguration = {
    formSelector: 'popup__form',
    inputSelector: 'popup__input',
    submitButtonSelector: 'popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_type_active'
}


export class FormValidator {
    constructor (configuration, form) {
        this._formSelector = configuration.formSelector;
        this._inputSelector = configuration.inputSelector;
        this._submitButtonSelector = configuration.submitButtonSelector;
        this._inactiveButtonClass = configuration.inactiveButtonClass;
        this._inputErrorClass = configuration.inputErrorClass;
        this._errorClass = configuration.errorClass;
        this._form = form;
    }

    // #1
    _enableValidation () {
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

    _enableValidation(configuration); 
}



/*
// #1
function enableValidation (configuration) {
    const {formSelector} = configuration;
    const formElementList = Array.from(document.querySelectorAll(`.${formSelector}`));

    formElementList.forEach( function (formElement) {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, configuration);
    });
}

// #2
function setEventListeners (formElement, configuration) {
    const {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass} = configuration;
    const inputElementList = Array.from(formElement.querySelectorAll(`.${inputSelector}`));
    const formSaveButton = formElement.querySelector(`.${submitButtonSelector}`);

    inputElementList.forEach( function (inputElement) {
        inputElement.addEventListener('input', function () {
            isValid(formElement, inputElement, inputErrorClass, errorClass);
            toggleButtonState (inputElementList, formSaveButton, inactiveButtonClass);
        });
    });
    toggleButtonState (inputElementList, formSaveButton, inactiveButtonClass);
}

// #3
function toggleButtonState (inputElementList, formSaveButton, inactiveButtonClass) {
    if (hasInvalidInput(inputElementList)) {
        formSaveButton.classList.add(inactiveButtonClass);
        formSaveButton.disabled = true;
    } else {
        formSaveButton.classList.remove(inactiveButtonClass);
        formSaveButton.disabled = false;
    }
}

// #4
function hasInvalidInput (inputElementList) {
    return inputElementList.some( function (inputElement) {
        return !inputElement.validity.valid;
    });
}

// #5
function isValid (formElement, inputElement, inputErrorClass, errorClass) {
    if (!inputElement.validity.valid) {
        const errorMessage = inputElement.validationMessage
        showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass);
    } else {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
}

// #6
function showInputError (formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
    const spanError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    spanError.textContent = errorMessage;
    spanError.classList.add(errorClass);
}
function hideInputError (formElement, inputElement, inputErrorClass, errorClass) {
    const spanError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    spanError.textContent = '';
    spanError.classList.remove(errorClass);
}

enableValidation(configuration);
*/