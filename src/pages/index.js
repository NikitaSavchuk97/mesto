import {
    validationConfiguration,
    popupConfiguration,
    popupWithImageConfiguration,
    popupWithFormConfiguration,
    userInfoConfiguration,
    sectionConfiguration,
    initialCards,
    templateSelector,
    profileInfoEditBtn,
    popupInfoForm,
    popupInfoNameInput,
    popupInfoJobInput,
    profileAddPhotoBtn,
    popupPhotoForm,
} from "../utils/constants.js";

import '../pages/index.css'
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js"
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";



const popupPhotoValid = new FormValidator (
    validationConfiguration,
    popupPhotoForm,
);

const popupInfoValid = new FormValidator (
    validationConfiguration,
    popupInfoForm,
);

const popupWithImage = new PopupWithImage (
    '.popup_type_illustration',                                  
    popupConfiguration,
    popupWithImageConfiguration,
);

const userInfoClass = new UserInfo (
    userInfoConfiguration,
);

const elementsRender = new Section (
    sectionConfiguration,
    {
        items: initialCards.reverse(),
        renderer: createCard,
    },
);

const popupInfoFormClass = new PopupWithForm (
    '.popup_type_info',
    popupConfiguration,
    popupWithFormConfiguration,
    {
        callBack: (inputValues) => {
            userInfoClass.setUserInfo( inputValues )
        }
    },
);

const popupPhotoFormClass = new PopupWithForm (
    '.popup_type_photo',
    popupConfiguration,
    popupWithFormConfiguration,
    {
        callBack: (inputValues) => {
            elementsRender.addItem( createCard(inputValues) )
        }
    },
);



// функция открытия попапа редактирования имени и призвания
const handleOpenPopupInfoForm = () => {
    popupInfoValid.disableValidation();
    popupInfoFormClass.open();
    
    const {name, job} = userInfoClass.getUserInfo()
    popupInfoNameInput.value = name;
    popupInfoJobInput.value = job;
};

// функция открытия попапа добавления фото
const handleOpenPopupPhotoForm = () => {
    popupPhotoValid.disableValidation();
    popupPhotoFormClass.open();
};



//функция передачи данных для создания карточки
function createCard (item) {
    const card = new Card (item, templateSelector, popupWithImage.open);
    const cardElement = card.createCard();
    return cardElement;
};



// слушатель вызова функции открытия попапа редактирования имени и призвания
profileInfoEditBtn.addEventListener ('click', handleOpenPopupInfoForm);

// слушатель вызова функции открытия попапа добавления фото
profileAddPhotoBtn.addEventListener('click', handleOpenPopupPhotoForm)



popupInfoValid.enableValidation();
popupPhotoValid.enableValidation();

popupInfoFormClass.setEventListeners();
popupPhotoFormClass.setEventListeners();
popupWithImage.setEventListeners();

elementsRender.renderItems();

