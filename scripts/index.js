// импорты модулей
import { initialCards, validationConfiguration } from "./constants.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";



// относящиеся к месту для вставки карточек
const elements = document.querySelector('.elements');

// относящиеся ко всем попапам
const popupAll = document.querySelectorAll('.popup');

const template = document.querySelector('.template-item');

// относящиеся к тегам имени и призвания на странице
const profileName = document.querySelector('.profile-info__name');
const profileJob = document.querySelector('.profile-info__title');
const profileInfoEditBtn = document.querySelector('.profile-info__edit-button');

// относящиеся к попапу редактирования имени и призвания
const popupInfo = document.querySelector('.popup_type_info');
const popupInfoForm = popupInfo.querySelector('.popup__form');
const popupInfoNameInput = popupInfoForm.querySelector('.popup__name');
const popupInfoJobInput = popupInfoForm.querySelector('.popup__about');
const popupInfoSaveButton = popupInfoForm.querySelector('.popup__save-button');

// относящиеся к попапу просмотра иллюстрации
const popupIllustration = document.querySelector('.popup_type_illustration');
const popupIllustrationImage = popupIllustration.querySelector('.popup__image');
const popupIllustrationSubtitle = popupIllustration.querySelector('.popup__subtitle');

// относящиеся к тегам добавления фото на странице
const profileAddPhotoBtn = document.querySelector('.add-button');

// относящиеся к попапу добавления фото
const popupPhoto = document.querySelector('.popup_type_photo');
const popupPhotoForm = popupPhoto.querySelector('.popup__form');
const popupPhotoNameInput = popupPhotoForm.querySelector('.popup__name');
const popupPhotoJobInput = popupPhotoForm.querySelector('.popup__about');
const popupPhotoSaveButton = popupPhotoForm.querySelector('.popup__save-button');



// функция открытия попапа просмотра иллюстрации
const handleImageClick = (name, link) => {
    openPopup(popupIllustration);
    popupIllustrationImage.src = link; //evt.target.src;
    popupIllustrationImage.alt = name;
    popupIllustrationSubtitle.textContent = name; //evt.target.alt;
}


// функция вставки нового элемента в начало
const addCard = (newFlex) => {
    elements.prepend(newFlex);
}

// функция вставки стандартного элемента в конец
const renderCard = (flex) => {
    elements.append(flex);
}



// функции открытия/закрытия попапа
const openPopup = (popupAll) => {
    popupAll.classList.add('popup_active');
    // слушатель вызова функции закрытия попапа на кнопку ESC
    document.addEventListener('keydown', handleESCKey);
}
const closePopup = (popupAll) => {
    popupAll.classList.remove('popup_active');
    document.removeEventListener('keydown', handleESCKey);
}



// функции закрытия попапа на кнопку ESC
const handleESCKey = (event) => {
    if (event.key === 'Escape') {
        popupAll.forEach(function (popupAllItemESC) {
            closePopup(popupAllItemESC);
        });
    }
}



// функция отправки формы имени и призвания. включает в себя: 
// вызов функции отмены стандартного действие браузера
// перенос полученных данных из формы имени и призвания в теги имени и призвания на странице
// вызов функции закрытия попапа редактирования имени и призвания
const handleSubmitPopupInfoForm = (evt) => {
    evt.preventDefault();

    profileName.textContent = popupInfoNameInput.value;
    profileJob.textContent = popupInfoJobInput.value;

    closePopup(popupInfo);
    popupInfoSaveButton.disabled = true;
    popupInfoSaveButton.classList.add('popup__save-button_disabled')
}

// функция отправки формы добавления фотографии. включает в себя:
// вызов функции отмены стандартного действие браузера
// вызов функции добавления карточки с любым именем и ссылкой
// вызов функции закрытия попапа добавления фото
// вызов метода очистки формы
const handleSubmitPopupPhotoForm = (evt) => {
    evt.preventDefault();

    const newCardValues = {
        name: popupPhotoNameInput.value,
        link: popupPhotoJobInput.value,
    };
    const newCard = new Card(newCardValues, template, handleImageClick);
    const newCardElement = newCard.createCard();
    addCard(newCardElement);
    
    closePopup(popupPhoto);
    popupPhotoSaveButton.disabled = true;
    popupPhotoSaveButton.classList.add('popup__save-button_disabled')
}



// метод перебора массива для добавления данных в каждую карточку
initialCards.forEach((initialCard) => {
    const card = new Card (initialCard, template, handleImageClick);
    const cardElement = card.createCard();
    renderCard(cardElement);
});

// метод перебора массива для закрытия любого попапа при нажатии на крестик и задний фон
popupAll.forEach((popupAllItem) => {
    popupAllItem.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_active')) {
            closePopup(popupAllItem)
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popupAllItem)
        }
    });
});

// метод перебора массива форм 
Array.from(document.forms).forEach( function(formElement){
    formElement.name = new FormValidator(validationConfiguration, formElement).enableValidation();
});



// слушатель вызова функции открытия попапа редактирования имени и призвания
profileInfoEditBtn.addEventListener ('click', function() {
    openPopup(popupInfo);
    popupInfoNameInput.value = profileName.textContent;
    popupInfoJobInput.value = profileJob.textContent;
});

// слушатель вызова функции отправки формы редактирования имени и призвания
popupInfoForm.addEventListener('submit', handleSubmitPopupInfoForm);



// слушатель вызова функции открытия попапа добавления фото
profileAddPhotoBtn.addEventListener('click', function() {
    openPopup(popupPhoto);
    popupPhotoForm.reset();
});

// слушатель вызова функции отправки формы добавления фото
popupPhotoForm.addEventListener('submit', handleSubmitPopupPhotoForm);



























// const popupIllustrationCloseBtn = popupIllustration.querySelector('.popup__close');
// const popupPhotoCloseBtn = popupPhoto.querySelector('.popup__close');
// const popupInfoCloseBtn = popupInfo.querySelector('.popup__close');

/*
// слушатель вызова функции закрытия попапа просмотра иллюстрации
popupIllustrationCloseBtn.addEventListener ('click', function () {
    closePopup(popupIllustration);
});
*/

/*
// слушатель вызова функции закрытия попапа добавления фото
popupPhotoCloseBtn.addEventListener ('click', function () {
    closePopup(popupPhoto);
});
*/

/*
// слушатель вызова функции закрытия попапа редактирования имени и призвания
popupInfoCloseBtn.addEventListener ('click', function() {
    closePopup(popupInfo);
});
*/

/*
// метод перебора массива для закрытия любого попапа при нажатии на задний фон
popupAll.forEach(function (popupAllItem) {
    popupAllItem.addEventListener('mousedown', function (event) {
        closePopup(event.target);
    });   
});
*/