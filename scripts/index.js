// импорты модулей
import { validationConfiguration, initialCards, elements, popupsAll, popupsAllForms, 
        template, profileName, profileJob, profileInfoEditBtn, popupInfo, popupInfoForm, 
        popupInfoNameInput, popupInfoJobInput, popupIllustration, popupIllustrationImage, 
        popupIllustrationSubtitle, profileAddPhotoBtn, popupPhoto, popupPhotoForm, 
        popupPhotoNameInput, popupPhotoJobInput } from "./constants.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

const addPhotoValid = new FormValidator (validationConfiguration, popupPhotoForm);
const addInfoValid = new FormValidator (validationConfiguration, popupInfoForm);






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
    document.addEventListener('keydown', handleESCKey);
}
const closePopup = (popupAll) => {
    popupAll.classList.remove('popup_active');
    document.removeEventListener('keydown', handleESCKey);
}



// функции закрытия попапа на кнопку ESC
const handleESCKey = (event) => {
    if (event.key === 'Escape') {
        popupsAll.forEach(closePopup)
    };
}



//функция передачи данных для создания карточки
const createCard = (item) => {
    const card = new Card (item, template, handleImageClick);
    const cardElement = card.createCard();
    return cardElement;
};



// функция отправки формы имени и призвания. включает в себя: 
// вызов функции отмены стандартного действие браузера
// перенос полученных данных из формы имени и призвания в теги имени и призвания на странице
// вызов функции закрытия попапа редактирования имени и призвания
const handleSubmitPopupInfoForm = (evt) => {
    evt.preventDefault();

    profileName.textContent = popupInfoNameInput.value;
    profileJob.textContent = popupInfoJobInput.value;

    closePopup(popupInfo);
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
    const newCard = createCard(newCardValues);
    addCard(newCard);
    
    closePopup(popupPhoto);
}



// метод перебора массива карточек для добавления данных в каждую карточку
initialCards.forEach((initialCard) => {
    const card = createCard(initialCard);
    renderCard(card);
});

// метод перебора массива форм и выключение функции валидации для каждой
Array.from(popupsAllForms).forEach((formElement) => {
    formElement.name = new FormValidator(validationConfiguration, formElement).enableValidation();
});

// метод перебора массива для закрытия любого попапа при нажатии на крестик и задний фон
popupsAll.forEach((popupAllItem) => {
    popupAllItem.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_active')) {
            closePopup(popupAllItem)
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popupAllItem)
        }
    });
});



// слушатель вызова функции открытия попапа редактирования имени и призвания
profileInfoEditBtn.addEventListener ('click', () => {
    openPopup(popupInfo);
    addInfoValid.disableValidation();
    popupInfoNameInput.value = profileName.textContent;
    popupInfoJobInput.value = profileJob.textContent;
});

// слушатель вызова функции отправки формы редактирования имени и призвания
popupInfoForm.addEventListener('submit', handleSubmitPopupInfoForm);



// слушатель вызова функции открытия попапа добавления фото
profileAddPhotoBtn.addEventListener('click', () => {
    popupPhotoForm.reset();
    addPhotoValid.disableValidation();
    openPopup(popupPhoto);
});

// слушатель вызова функции отправки формы добавления фото
popupPhotoForm.addEventListener('submit', handleSubmitPopupPhotoForm);






/*
// относящиеся к месту для вставки карточек
const elements = document.querySelector('.elements');

// относящиеся ко всем попапам
const popupsAll = document.querySelectorAll('.popup');
const popupsAllForms = document.querySelectorAll('.popup__form');

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

const addPhotoValid = new FormValidator (validationConfiguration, popupPhotoForm);
const addInfoValid = new FormValidator (validationConfiguration, popupInfoForm);
*/