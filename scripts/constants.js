// относящиеся к валидации форм попапов
export const validationConfiguration = {
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
}

// относящиеся к стандартным фотографиям
export const initialCards = [
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

export const selectors = {
    // относящиеся к месту для вставки карточек
    elements = document.querySelector('.elements'),

    // относящиеся ко всем попапам
    popupAll = document.querySelectorAll('.popup'),

    template = document.querySelector('.template-item'),

    // относящиеся к тегам имени и призвания на странице
    profileName = document.querySelector('.profile-info__name'),
    profileJob = document.querySelector('.profile-info__title'),
    profileInfoEditBtn = document.querySelector('.profile-info__edit-button'),

    // относящиеся к попапу редактирования имени и призвания
    popupInfo = document.querySelector('.popup_type_info'),
    popupInfoForm = popupInfo.querySelector('.popup__form'),
    popupInfoNameInput = popupInfoForm.querySelector('.popup__name'),
    popupInfoJobInput = popupInfoForm.querySelector('.popup__about'),
    popupInfoSaveButton = popupInfoForm.querySelector('.popup__save-button'),

    // относящиеся к попапу просмотра иллюстрации
    popupIllustration = document.querySelector('.popup_type_illustration'),
    popupIllustrationImage = popupIllustration.querySelector('.popup__image'),
    popupIllustrationSubtitle = popupIllustration.querySelector('.popup__subtitle'),

    // относящиеся к тегам добавления фото на странице
    profileAddPhotoBtn = document.querySelector('.add-button'),

    // относящиеся к попапу добавления фото
    popupPhoto = document.querySelector('.popup_type_photo'),
    popupPhotoForm = popupPhoto.querySelector('.popup__form'),
    popupPhotoNameInput = popupPhotoForm.querySelector('.popup__name'),
    popupPhotoJobInput = popupPhotoForm.querySelector('.popup__about'),
    popupPhotoSaveButton = popupPhotoForm.querySelector('.popup__save-button'),
}