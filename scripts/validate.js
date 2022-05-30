function showInputError (popupAllForm, popupAllFormInput, errorMessage) {
    const popupAllSpanError = popupAllForm.querySelector(`.${popupAllFormInput.id}-error`);
    popupAllFormInput.classList.add('popup__input_type_error')
    popupAllSpanError.textContent = errorMessage;
    popupAllSpanError.classList.add('popup__input-error_type_active');
}

function hideInputError (popupAllForm, popupAllFormInput) {
    const popupAllSpanError = popupAllForm.querySelector(`.${popupAllFormInput.id}-error`);
    popupAllFormInput.classList.remove('popup__input_type_error')
    popupAllSpanError.textContent = '';
    popupAllSpanError.classList.remove('popup__input-error_type_active');
}



function isValid (popupAllForm, popupAllFormInput) {
    if (!popupAllFormInput.validity.valid) {
        showInputError(popupAllForm, popupAllFormInput, popupAllFormInput.validationMessage);
    } else {
        hideInputError(popupAllForm, popupAllFormInput);
    }
}

function setEventListeners (popupAllForm) {
    const popupAllFormInputList = Array.from(popupAllForm.querySelectorAll('.popup__input'));
    const popupAllFormSaveBtn = popupAllForm.querySelector('.popup__save-button');
    toggleButtonState (popupAllFormInputList, popupAllFormSaveBtn)

    popupAllFormInputList.forEach( function (popupAllFormInputListElement) {
        popupAllFormInputListElement.addEventListener('input', function () {
            isValid(popupAllForm, popupAllFormInputListElement)
            toggleButtonState (popupAllFormInputList, popupAllFormSaveBtn)
        });
    });
}

function enableValidation () {
    const popupAllFormList = Array.from(document.querySelectorAll('.popup__form'));

    popupAllFormList.forEach( function (popupAllFormListElement) {
        popupAllFormListElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(popupAllFormListElement);
    });
}

function hasInvalidInput (popupAllFormInputList) {
    return popupAllFormInputList.some( function (popupAllFormInputListElement) {
        return !popupAllFormInputListElement.validity.valid;
    });
}

function toggleButtonState (popupAllFormInputList, popupAllFormSaveBtn) {
    if (hasInvalidInput(popupAllFormInputList)) {
        popupAllFormSaveBtn.classList.add('popup__save-button_disabled');
        popupAllFormSaveBtn.disabled = true;
    } else {
        popupAllFormSaveBtn.classList.remove('popup__save-button_disabled');
        popupAllFormSaveBtn.disabled = false;
    }
}

enableValidation();