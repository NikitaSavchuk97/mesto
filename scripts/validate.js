
const configuration = {
    formSelector: 'popup__form',
    inputSelector: 'popup__input',
    submitButtonSelector: 'popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_type_active'
}



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