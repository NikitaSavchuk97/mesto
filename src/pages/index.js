import {
    validationConfiguration,
    popupConfiguration,
    popupWithImageConfiguration,
    popupWithFormConfiguration,
    userInfoConfiguration,
    sectionConfiguration,
    initialCards,
    template,
    profileInfoEditBtn, 
    popupInfo, 
    popupInfoForm, 
    popupInfoNameInput,
    popupInfoJobInput, 
    popupIllustration,
    profileAddPhotoBtn, 
    popupPhoto, 
    popupPhotoForm,
} from "../utils/constants.js";

import '../pages/index.css'
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js"
import Popup from "../components/Popup.js"
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";



const addPhotoValid = new FormValidator (
    validationConfiguration,
    popupPhotoForm,
);

const addInfoValid = new FormValidator (
    validationConfiguration,
    popupInfoForm,
);

const closeOpenPopupInfo = new Popup (
    popupInfo,
    popupConfiguration,
);

const closeOpenPopupPhoto = new Popup (
    popupPhoto,
    popupConfiguration,
);

const popupImage = new PopupWithImage (
    popupIllustration,                                  
    popupConfiguration,
    popupWithImageConfiguration,
);

const userInfoClass = new UserInfo (
    userInfoConfiguration,
);

const renderElements = new Section (
    sectionConfiguration,
    {
        items: initialCards.reverse(),
        renderer: createCard
    },
);

const popupInfoFormClass = new PopupWithForm (
    popupInfo,
    popupConfiguration,
    popupWithFormConfiguration,
    {
        callBack: () => {
            userInfoClass.setUserInfo( popupInfoFormClass._getInputvalues() )
        }
    },
);

const popupPhotoFormClass = new PopupWithForm (
    popupPhoto,
    popupConfiguration,
    popupWithFormConfiguration,
    {
        callBack: () => {
            const newCard = createCard( popupPhotoFormClass._getInputvalues() );
            renderElements.addItem(newCard);
        }
    },
);



// функция открытия попапа добавления фото
const handleOpenPopupPhotoForm = () => {
    popupPhotoForm.reset();
    addPhotoValid.disableValidation();
    closeOpenPopupPhoto.open();
};



// функция открытия попапа редактирования имени и призвания
const handleOpenPopupInfoForm = () => {
    addInfoValid.disableValidation();
    closeOpenPopupInfo.open();
    
    const {name, job} = userInfoClass.getUserInfo()
    popupInfoNameInput.value = name;
    popupInfoJobInput.value = job;
};



//функция передачи данных для создания карточки
function createCard (item) {
    const card = new Card (item, template, popupImage.open);
    const cardElement = card.createCard();
    return cardElement;
};



// слушатель вызова функции открытия попапа редактирования имени и призвания
profileInfoEditBtn.addEventListener ('click', handleOpenPopupInfoForm);

// слушатель вызова функции открытия попапа добавления фото
profileAddPhotoBtn.addEventListener('click', handleOpenPopupPhotoForm)



addInfoValid.enableValidation();
addPhotoValid.enableValidation();

popupInfoFormClass.setEventListeners();
popupPhotoFormClass.setEventListeners();

renderElements.renderItems();