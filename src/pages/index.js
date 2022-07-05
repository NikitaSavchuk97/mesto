// импорты модулей
import {
    validationConfiguration,
    popupConfiguration,
    popupImageConfiguration,
    initialCards, 
    elements,
    template, 
    profileName, 
    profileJob, 
    profileInfoEditBtn, 
    popupInfo, 
    popupInfoForm, 
    popupInfoNameInput, 
    popupInfoJobInput, 
    popupIllustration, 
    popupIllustrationImage, 
    popupIllustrationSubtitle, 
    profileAddPhotoBtn, 
    popupPhoto, 
    popupPhotoForm, 
    popupPhotoNameInput, 
    popupPhotoJobInput,
} from "../utils/constants.js";

import '../pages/index.css'
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js"
import Popup from "../components/Popup.js"
import PopupImage from '../components/PopupImage.js'

const addPhotoValid = new FormValidator (validationConfiguration, popupPhotoForm);

const addInfoValid = new FormValidator (validationConfiguration, popupInfoForm);

const closeOpenPopupInfo = new Popup (popupInfo, popupConfiguration);

const closeOpenPopupPhoto = new Popup (popupPhoto, popupConfiguration);

const popupImage = new PopupImage (popupIllustration, popupConfiguration, popupImageConfiguration);


addPhotoValid.enableValidation();
addInfoValid.enableValidation();

/*
const renderElements = new Section ({
        items: initialCards.reverse(),
        renderer: createCard,
    }, elements
);
*/















/*
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
*/













/*
// функция открытия попапа просмотра иллюстрации
const handleImageClick = (name, link) => {
    openPopup(popupIllustration);
    popupIllustrationImage.src = link; //evt.target.src;
    popupIllustrationImage.alt = name;
    popupIllustrationSubtitle.textContent = name; //evt.target.alt;
}
*/


// функция вставки нового элемента в начало
const addCard = (newFlex) => {
    elements.prepend(newFlex);
}

// функция вставки стандартного элемента в конец
const renderCard = (flex) => {
    elements.append(flex);
}







//функция передачи данных для создания карточки
const createCard = (item) => {
    const card = new Card (item, template, popupImage.open);
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

    closeOpenPopupInfo.close();
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
    
    closeOpenPopupPhoto.close();
}



// метод перебора массива карточек для добавления данных в каждую карточку
initialCards.forEach((initialCard) => {
    const card = createCard(initialCard);
    renderCard(card);
});





// слушатель вызова функции открытия попапа редактирования имени и призвания
profileInfoEditBtn.addEventListener ('click', () => {
    closeOpenPopupInfo.open();
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
    closeOpenPopupPhoto.open();
});

// слушатель вызова функции отправки формы добавления фото
popupPhotoForm.addEventListener('submit', handleSubmitPopupPhotoForm);