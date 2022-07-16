const elementsSelector = '.elements';
const templateSelector = '.template-item';

const profileInfoEditBtn = document.querySelector('.profile-info__edit-button');
const profileName = document.querySelector('.profile-info__name');
const profileJob = document.querySelector('.profile-info__title');
const profileAddPhotoBtn = document.querySelector('.add-button');

const popupInfo = document.querySelector('.popup_type_info');
const popupInfoForm = popupInfo.querySelector('.popup__form');
const popupInfoNameInput = popupInfoForm.querySelector('.popup__name');
const popupInfoJobInput = popupInfoForm.querySelector('.popup__about');

const popupPhoto = document.querySelector('.popup_type_photo');
const popupPhotoForm = popupPhoto.querySelector('.popup__form');

const popupIllustration = document.querySelector('.popup_type_illustration');
const popupIllustrationImage = popupIllustration.querySelector('.popup__image');
const popupIllustrationSubtitle = popupIllustration.querySelector('.popup__subtitle');



const validationConfiguration = {
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active',
};

const popupConfiguration = {
  popupCloseBtnCssClass: 'popup__close',
  popupActiveCssClass: 'popup_active',
};

const popupWithImageConfiguration = {
  popupIllustrationImage,
  popupIllustrationSubtitle,
};

const popupWithFormConfiguration = {
  popupFormSelector: '.popup__form',
  popupFormInputSelector: '.popup__input',
  popupFormSubmitBtnSelector: '.popup__save-button',
};

const userInfoConfiguration = {
  profileName,
  profileJob,
};

const sectionConfiguration = {
  elementsSelector,
};



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



export {
  validationConfiguration,
  popupConfiguration,
  popupWithImageConfiguration,
  popupWithFormConfiguration,
  userInfoConfiguration,
  sectionConfiguration,
  initialCards,
  templateSelector,
  profileInfoEditBtn,
  popupInfo,
  popupInfoForm,
  popupInfoNameInput,
  popupInfoJobInput,
  popupIllustration,
  profileAddPhotoBtn,
  popupPhoto,
  popupPhotoForm,
};