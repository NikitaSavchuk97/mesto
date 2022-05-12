// относящиеся к стандартным фотографиям
const initialCards = [
    {
      name: 'Самое время отдохнуть',
      link: 'https://images.unsplash.com/photo-1592528855735-14e349c28919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
    },
    {
      name: 'Я похож на свинку?',
      link: 'https://images.unsplash.com/photo-1508547003855-6502567e0cc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Мааааам, я запутался',
      link: 'https://images.unsplash.com/photo-1507449863419-a3aa39ac22d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Обеденный перерыв',
      link: 'https://images.unsplash.com/photo-1621005881955-ddf54d05c6cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
    },
    {
      name: 'Водные процедуры',
      link: 'https://images.unsplash.com/photo-1616406751397-b280e83b80bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
    },
    {
      name: 'Чего?',
      link: 'https://images.unsplash.com/photo-1598894591353-9e7c935dd774?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    }
];

// относящиеся к месту для вставки карточек
const elements = document.querySelector('.elements');

//относящиеся к разметке карточки
const templateContent = document.querySelector('.template-item').content;



// функция переключения лайка
const clickLikeHandler = (evt) => {
    evt.target.classList.toggle('element__like_active');
}

// функция удаления карточки
const clickDeleteHandler = (evt) => {
    evt.target.closest('.element').remove();
}

// относящиеся к попапу просмотра иллюстрации
const popupIllustration = document.querySelector('.popup_type_illustration');
const popupIllustrationCloseBtn = popupIllustration.querySelector('.popup__close');
const popupIllustrationImage = popupIllustration.querySelector('.popup__image');
const popupIllustrationSubtitle = popupIllustration.querySelector('.popup__subtitle');

// функция открытия попапа просмотра иллюстрации
const clickImageHandler = (evt) => {
    popupIllustration.classList.add('popup_active');
    popupIllustrationImage.src = evt.target.src;
    popupIllustrationSubtitle.textContent = evt.target.alt;
}

// функция закрытия попапа просмотра иллюстрации
function closePopupIllustration () {
    popupIllustration.classList.remove('popup_active');
}

// слушатель вызова функции закрытия попапа просмотра иллюстрации
popupIllustrationCloseBtn.addEventListener ('click', closePopupIllustration);


// метод перебора массива для добавления данных в каждую карточку
initialCards.forEach ((item) => {
    const element = templateContent.cloneNode(true);
    const elementPhoto = element.querySelector('.element__photo');
    const elementTitle = element.querySelector('.element__title');
    const elementLikeBtn = element.querySelector('.element__like');
    const elementDeleteBtn = element.querySelector('.element__delete')
    elementLikeBtn.addEventListener('click', clickLikeHandler);
    elementDeleteBtn.addEventListener('click', clickDeleteHandler);
    elementPhoto.addEventListener('click', clickImageHandler);
    elementPhoto.src = item.link;
    elementPhoto.alt = item.name;
    elementTitle.textContent = item.name;
    elements.prepend(element);
});





// относящиеся к кнопке добавления фото
const profileAddPhotoBtn = document.querySelector('.add-button');

// относящиеся к попапу добавления фото
const popupPhoto = document.querySelector('.popup_type_photo');
const popupPhotoCloseBtn = popupPhoto.querySelector('.popup__close');
const popupPhotoForm = popupPhoto.querySelector('.popup__form');
const popupPhotoNameInput = popupPhotoForm.querySelector('.popup__name');
const popupPhotoJobInput = popupPhotoForm.querySelector('.popup__about');

// функция добавления карточки с любым именем и ссылкой
const addElement = () => {
    const element = templateContent.cloneNode(true);
    const elementPhoto = element.querySelector('.element__photo');
    const elementTitle = element.querySelector('.element__title');
    const elementLikeBtn = element.querySelector('.element__like');
    const elementDeleteBtn = element.querySelector('.element__delete')
    elementLikeBtn.addEventListener('click', clickLikeHandler);
    elementDeleteBtn.addEventListener('click', clickDeleteHandler);
    elementPhoto.addEventListener('click', clickImageHandler);
    elementPhoto.src = popupPhotoJobInput.value;
    elementPhoto.alt = popupPhotoNameInput.value;
    elementTitle.textContent = popupPhotoNameInput.value;
    elements.prepend(element);
}

// открытие окна добавления фото
profileAddPhotoBtn.addEventListener('click', function() {
    popupPhoto.classList.add('popup_active');
});

// функция закрытия попапа добавления фото
function closePopupPhoto() {
    popupPhoto.classList.remove('popup_active');
}

// слушатель события вызова функции закрытия попапа добавления фото
popupPhotoCloseBtn.addEventListener ('click', closePopupPhoto);

// функция отправки формы. включает в себя:
// вызов функции отмены стандартного действие браузера
// вызов функции добавления карточки с любым именем и ссылкой
// вызов функции закрытия попапа добавления фото
// вызов метода очистки формы
function submitPopupPhotoFormHandler (evt) {
    evt.preventDefault();
    addElement();
    closePopupPhoto();
    popupPhotoForm.reset();
}
// слушатель вызова функции отправки формы добавления фото
popupPhotoForm.addEventListener('submit', submitPopupPhotoFormHandler);





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

// открытие окна редактирования имени и призвания
profileInfoEditBtn.addEventListener ('click', function() {
    popupInfo.classList.add('popup_active');
    popupInfoNameInput.value = profileName.textContent;
    popupInfoJobInput.value = profileJob.textContent;
});

// функция закрытия попапа редактирования имени и призвания
function closePopupInfo() {
    popupInfo.classList.remove('popup_active');
}

// слушатель вызова функции закрытия попапа редактирования имени и призвания
popupInfoCloseBtn.addEventListener ('click', function() {
    closePopupInfo();
});

// функция отправки формы. включает в себя: 
// вызов функции отмены стандартного действие браузера
// перенос полученных данных из формы имени и призвания в теги имени и призвания на странице
// вызов функции закрытия попапа редактирования имени и призвания
function submitPopupInfoFormHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupInfoNameInput.value;
    profileJob.textContent = popupInfoJobInput.value;
    closePopupInfo();
}
// слушатель вызова функции отправки формы редактирования имени и призвания
popupInfoForm.addEventListener('submit', submitPopupInfoFormHandler);