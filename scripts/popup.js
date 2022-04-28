
const popupOpenBtn = document.querySelector('.profile-info__edit-button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

popupOpenBtn.addEventListener ('click', function() {
    togglePopup();
});

popupClose.addEventListener ('click', function() {
    togglePopup();
});

function togglePopup () {
    popup.classList.toggle('popup_active');
}



let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__about');

let nameInfo = document.querySelector('.profile-info__name');
let jobInfo = document.querySelector('.profile-info__title');

nameInput.value = nameInfo.textContent;
jobInput.value = jobInfo.textContent;

function formSubmitHandler (evt) {
    evt.preventDefault();
    document.querySelector('.profile-info__name').innerHTML = nameInput.value;
    document.querySelector('.profile-info__title').innerHTML = jobInput.value;
    togglePopup();
}

formElement.addEventListener('submit', formSubmitHandler);


