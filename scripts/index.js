import { initialCards, validationConfiguration } from "./initialCards.js";
import FormValidator from "./FormValidator.js";





// относящиеся к месту для вставки карточек
const elements = document.querySelector('.elements');

// относящиеся ко всем попапам
const popupAll = document.querySelectorAll('.popup');
const popupAllForm = document.querySelectorAll('.popup__form');
const popupAllSaveButton = document.querySelector('.popup__save-button');



// относящиеся к темплейту
const templateElement = document.querySelector('.template-item');



// относящиеся к тегам имени и призвания на странице
const profileName = document.querySelector('.profile-info__name');
const profileJob = document.querySelector('.profile-info__title');
const profileInfoEditBtn = document.querySelector('.profile-info__edit-button');

// относящиеся к попапу редактирования имени и призвания
const popupInfo = document.querySelector('.popup_type_info');
// const popupInfoCloseBtn = popupInfo.querySelector('.popup__close');
const popupInfoForm = popupInfo.querySelector('.popup__form');
const popupInfoNameInput = popupInfoForm.querySelector('.popup__name');
const popupInfoJobInput = popupInfoForm.querySelector('.popup__about');
const popupInfoSaveButton = popupInfoForm.querySelector('.popup__save-button');



// относящиеся к попапу просмотра иллюстрации
const popupIllustration = document.querySelector('.popup_type_illustration');
// const popupIllustrationCloseBtn = popupIllustration.querySelector('.popup__close');
const popupIllustrationImage = popupIllustration.querySelector('.popup__image');
const popupIllustrationSubtitle = popupIllustration.querySelector('.popup__subtitle');



// относящиеся к тегам добавления фото на странице
const profileAddPhotoBtn = document.querySelector('.add-button');

// относящиеся к попапу добавления фото
const popupPhoto = document.querySelector('.popup_type_photo');
// const popupPhotoCloseBtn = popupPhoto.querySelector('.popup__close');
const popupPhotoForm = popupPhoto.querySelector('.popup__form');
const popupPhotoNameInput = popupPhotoForm.querySelector('.popup__name');
const popupPhotoJobInput = popupPhotoForm.querySelector('.popup__about');
const popupPhotoSaveButton = popupPhotoForm.querySelector('.popup__save-button');





/*
// метод перебора массива для закрытия любого попапа при нажатии на задний фон
popupAll.forEach(function (popupAllItem) {
    popupAllItem.addEventListener('mousedown', function (event) {
        closePopup(event.target);
    });   
});
*/

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



// метод перебора массива для добавления данных в каждую карточку
initialCards.forEach(function (item) {
    const card = createCard(item);
    renderCard(card);
});





// функция разметки карточки
function createCard ({name, link}) {
    // относящиеся к разметке карточки
    const element = templateElement.content.cloneNode(true);
    const elementPhoto = element.querySelector('.element__photo');
    const elementTitle = element.querySelector('.element__title');
    const elementLikeBtn = element.querySelector('.element__like');
    const elementDeleteBtn = element.querySelector('.element__delete');
    // слушатели вызова функций: удаления карточки, лайка и просмотра иллюстрации
    elementLikeBtn.addEventListener('click', handleLikeClick);
    elementDeleteBtn.addEventListener('click', handleDeleteClick);
    elementPhoto.addEventListener('click', () => handleImageClick (name, link));

    elementPhoto.src = link;
    elementPhoto.alt = name;
    elementTitle.textContent = name;

    return element;
}

function addCard (newFlex) {
    elements.prepend(newFlex);
}

function renderCard (flex) {
    elements.append(flex);
}



// функции открытия/закрытия попапа
function openPopup (popupAll) {
    popupAll.classList.add('popup_active');
    // слушатель вызова функции закрытия попапа на кнопку ESC
    document.addEventListener('keydown', handleESCKey);
}
function closePopup (popupAll) {
    popupAll.classList.remove('popup_active');
    document.removeEventListener('keydown', handleESCKey);
}



// функции закрытия попапа на кнопку ESC
function handleESCKey (event) {
    if (event.key === 'Escape') {
        popupAll.forEach(function (popupAllItemESC) {
            closePopup(popupAllItemESC);
        });
    }
}


// функция удаления карточки
function handleDeleteClick (evt) {
    evt.target.closest('.element').remove();
}
// функция переключения лайка
function handleLikeClick (evt) {
    evt.target.classList.toggle('element__like_active');
}
// функция открытия попапа просмотра иллюстрации
function handleImageClick (name, link) {
    openPopup(popupIllustration);
    popupIllustrationImage.src = link; //evt.target.src;
    popupIllustrationImage.alt = name;
    popupIllustrationSubtitle.textContent = name; //evt.target.alt;
    
}



// функция отправки формы имени и призвания. включает в себя: 
// вызов функции отмены стандартного действие браузера
// перенос полученных данных из формы имени и призвания в теги имени и призвания на странице
// вызов функции закрытия попапа редактирования имени и призвания
function handleSubmitPopupInfoForm (evt) {
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
function handleSubmitPopupPhotoForm (evt) {
    evt.preventDefault();
    const newCard = createCard({name: popupPhotoNameInput.value,
                                link: popupPhotoJobInput.value});
    addCard(newCard);
    
    closePopup(popupPhoto);
    popupPhotoForm.reset();
    popupPhotoSaveButton.disabled = true;
    popupPhotoSaveButton.classList.add('popup__save-button_disabled')
}




const FormValidators = {};

Array.from(document.forms).forEach( function(formElement){
    FormValidators[formElement.name] = new FormValidator(validationConfiguration, formElement);
    FormValidators[formElement.name].enableValidation();
});





// слушатель вызова функции открытия попапа редактирования имени и призвания
profileInfoEditBtn.addEventListener ('click', function() {
    openPopup(popupInfo);
    popupInfoNameInput.value = profileName.textContent;
    popupInfoJobInput.value = profileJob.textContent;
});
/*
// слушатель вызова функции закрытия попапа редактирования имени и призвания
popupInfoCloseBtn.addEventListener ('click', function() {
    closePopup(popupInfo);
});
*/
// слушатель вызова функции отправки формы редактирования имени и призвания
popupInfoForm.addEventListener('submit', handleSubmitPopupInfoForm);



// слушатель вызова функции открытия попапа добавления фото
profileAddPhotoBtn.addEventListener('click', function() {
    openPopup(popupPhoto);
});
/*
// слушатель вызова функции закрытия попапа добавления фото
popupPhotoCloseBtn.addEventListener ('click', function () {
    closePopup(popupPhoto);
});
*/
// слушатель вызова функции отправки формы добавления фото
popupPhotoForm.addEventListener('submit', handleSubmitPopupPhotoForm);


/*
// слушатель вызова функции закрытия попапа просмотра иллюстрации
popupIllustrationCloseBtn.addEventListener ('click', function () {
    closePopup(popupIllustration);
});
*/