// относящиеся к месту для вставки карточек
const elements = document.querySelector('.elements');

// относящиеся ко всем попапам
const popupAll = document.querySelector('.popup');
const popupAllArray = Array.from(document.querySelectorAll('.popup'));
const popupAllForm = document.querySelector('.popup__form')



// относящиеся к темплейту
const templateElement = document.querySelector('.template-item');



// относящиеся к тегам имени и призвания на странице
const profileName = document.querySelector('.profile-info__name');
const profileJob = document.querySelector('.profile-info__title');
const profileInfoEditBtn = document.querySelector('.profile-info__edit-button');

// относящиеся к попапу редактирования имени и призвания
const popupInfo = document.querySelector('.popup_type_info');
const popupInfoCloseBtn = popupInfo.querySelector('.popup__close');
const popupInfoForm = popupInfo.querySelector('.popup__form');
const popupInfoNameInput = popupInfoForm.querySelector('.popup__name');
const popupInfoJobInput = popupInfoForm.querySelector('.popup__about');



// относящиеся к попапу просмотра иллюстрации
const popupIllustration = document.querySelector('.popup_type_illustration');
const popupIllustrationCloseBtn = popupIllustration.querySelector('.popup__close');
const popupIllustrationImage = popupIllustration.querySelector('.popup__image');
const popupIllustrationSubtitle = popupIllustration.querySelector('.popup__subtitle');



// относящиеся к тегам добавления фото на странице
const profileAddPhotoBtn = document.querySelector('.add-button');

// относящиеся к попапу добавления фото
const popupPhoto = document.querySelector('.popup_type_photo');
const popupPhotoCloseBtn = popupPhoto.querySelector('.popup__close');
const popupPhotoForm = popupPhoto.querySelector('.popup__form');
const popupPhotoNameInput = popupPhotoForm.querySelector('.popup__name');
const popupPhotoJobInput = popupPhotoForm.querySelector('.popup__about');






// метод перебора массива для закрытия любого попапа при нажатии на задний фон
popupAllArray.forEach(function (popupAllItem) {
    popupAllItem.addEventListener('click', function (event) {
        popupClose(event.target);
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
    elementLikeBtn.addEventListener('click', clickLikeHandler);
    elementDeleteBtn.addEventListener('click', clickDeleteHandler);
    elementPhoto.addEventListener('click', clickImageHandler);

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
function popupOpen (popupAll) {
    popupAll.classList.add('popup_active');
    // слушатель вызова функции закрытия попапа на кнопку ESC
    document.addEventListener('keydown', popupAllCloseESC);
}
function popupClose (popupAll) {
    popupAll.classList.remove('popup_active');
}

// фукция снятия слушателя вызова функции закрытия попапа на кнопку ESC
function popupAllRemoveEscListener () {
    document.removeEventListener('keydown', popupAllCloseESC);
}

// функции закрытия попапа на кнопку ESC
function popupAllCloseESC (event) {
    popupAllArray.forEach(function (popupAllItemESC) {
        if (event.key === 'Escape') {
            popupClose(popupAllItemESC);
        }
    });
}



// функция удаления карточки
function clickDeleteHandler (evt) {
    evt.target.closest('.element').remove();
}
// функция переключения лайка
function clickLikeHandler (evt) {
    evt.target.classList.toggle('element__like_active');
}
// функция открытия попапа просмотра иллюстрации
function clickImageHandler (evt) {
    popupOpen(popupIllustration);
    popupIllustrationImage.src = evt.target.src;
    popupIllustrationSubtitle.textContent = evt.target.alt;
}



// функция отправки формы имени и призвания. включает в себя: 
// вызов функции отмены стандартного действие браузера
// перенос полученных данных из формы имени и призвания в теги имени и призвания на странице
// вызов функции закрытия попапа редактирования имени и призвания
function submitPopupInfoFormHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupInfoNameInput.value;
    profileJob.textContent = popupInfoJobInput.value;
    popupClose(popupInfo);
}

// функция отправки формы добавления фотографии. включает в себя:
// вызов функции отмены стандартного действие браузера
// вызов функции добавления карточки с любым именем и ссылкой
// вызов функции закрытия попапа добавления фото
// вызов метода очистки формы
function submitPopupPhotoFormHandler (evt) {
    evt.preventDefault();
    const newCard = createCard({name: popupPhotoNameInput.value,
                                link: popupPhotoJobInput.value});
    addCard(newCard);
    popupClose(popupPhoto);
    popupPhotoForm.reset();
}



// слушатель вызова функции открытия попапа редактирования имени и призвания
profileInfoEditBtn.addEventListener ('click', function() {
    popupOpen(popupInfo);
    popupInfoNameInput.value = profileName.textContent;
    popupInfoJobInput.value = profileJob.textContent;
});
// слушатель вызова функции закрытия попапа редактирования имени и призвания
popupInfoCloseBtn.addEventListener ('click', function() {
    popupClose(popupInfo);
    popupAllRemoveEscListener();
});
// слушатель вызова функции отправки формы редактирования имени и призвания
popupInfoForm.addEventListener('submit', submitPopupInfoFormHandler);



// слушатель вызова функции закрытия попапа добавления фото
popupPhotoCloseBtn.addEventListener ('click', function () {
    popupClose(popupPhoto);
    popupAllRemoveEscListener();
});
// слушатель вызова функции открытия попапа добавления фото
profileAddPhotoBtn.addEventListener('click', function() {
    popupOpen(popupPhoto);
});
// слушатель вызова функции отправки формы добавления фото
popupPhotoForm.addEventListener('submit', submitPopupPhotoFormHandler);



// слушатель вызова функции закрытия попапа просмотра иллюстрации
popupIllustrationCloseBtn.addEventListener ('click', function () {
    popupClose(popupIllustration);
    popupAllRemoveEscListener();
});