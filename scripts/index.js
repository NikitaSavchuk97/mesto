
const popupOpenBtn = document.querySelector('.profile-info__edit-button');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close');


const profileName = document.querySelector('.profile-info__name');
const profileJob = document.querySelector('.profile-info__title');

const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__name');
const jobInput = formElement.querySelector('.popup__about');



// FIRST VERSION OF POPUP OPENED-AND-CLOSE FUNCTION

/*
let popupTrue = popup.classList.contains('popup_active');

function togglePopup () {
    if (popupTrue = true) {
    popup.classList.toggle('popup_active');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    }
}

popupOpenBtn.addEventListener ('click', function() {
    togglePopup();
});

popupClose.addEventListener ('click', function() {
    togglePopup();
});

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
*/




// SECOND VERSION OF POPUP OPENED-AND-CLOSE FUNCTION

popupOpenBtn.addEventListener ('click', function() {
    popup.classList.add('popup_active');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

function popupHide () {
    popup.classList.remove('popup_active');
}

popupCloseBtn.addEventListener ('click', function() {
    popupHide();
});

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupHide();
}

formElement.addEventListener('submit', formSubmitHandler);