import '../pages/index.css'
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js"
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import Api from "../components/Api.js";
import {
    validationConfiguration,
    popupConfiguration,
    popupWithImageConfiguration,
    popupWithFormConfiguration,
    userInfoConfiguration,
    sectionConfiguration,
    apiConfiguration,
    popupAvatar,
    initialCards,
    templateSelector,
    profileInfoEditBtn,
    profileAvatarEditBtn,
    profileAvatar,
    popupInfoForm,
    popupInfoNameInput,
    popupInfoJobInput,
    profileAddPhotoBtn,
    popupPhotoForm,
} from "../utils/constants.js";



const popupPhotoValid = new FormValidator(
    validationConfiguration,
    popupPhotoForm,
);

const popupInfoValid = new FormValidator(
    validationConfiguration,
    popupInfoForm,
);

const popupAvatarValid = new FormValidator(
    validationConfiguration,
    popupAvatar
)

const popupWithImage = new PopupWithImage(
    '.popup_type_illustration',
    popupConfiguration,
    popupWithImageConfiguration,
);

const userInfoClass = new UserInfo(
    userInfoConfiguration,
);

const elementsRender = new Section(
    sectionConfiguration,
    {
        items: initialCards.reverse(),
        renderer: createCard,
    },
);

const popupInfoFormClass = new PopupWithForm(
    '.popup_type_info',
    popupConfiguration,
    popupWithFormConfiguration,
    {
        callBack: (inputValues) => {
            apiClass
                .setUserInfo(inputValues)
                .then((data) => userInfoClass.setUserInfo(data));
        }
    },
);

const popupAvatarFormClass = new PopupWithForm(
    '.popup_type_avatar',
    popupConfiguration,
    popupWithFormConfiguration,
    {
        callBack: (inputValues) => {
            apiClass
                .setAvatar(inputValues)
                .then((data) => userInfoClass.setUserInfo(data));
        }
    },
)

const popupPhotoFormClass = new PopupWithForm(
    '.popup_type_photo',
    popupConfiguration,
    popupWithFormConfiguration,
    {
        callBack: (inputValues) => {
            apiClass
                .setCard(inputValues)
                .then((data) => elementsRender.addItem(createCard(data)))

        }
    },
);

const popupWithConfirm = new PopupWithConfirm(
    '.popup_type_delete',
    popupConfiguration,
    popupWithFormConfiguration,
    {
        callBack: (card) => {
            apiClass
                .deleteCard(card._cardId)
                .then(() => {
                    card.deleteCard()
                })
                .then(() => popupWithConfirm.close())
        }
    },
)

const apiClass = new Api(
    apiConfiguration
)

let userId;
let cohortId;

Promise.all([apiClass.getUserInfo(), apiClass.getCards()])
    .then(([user, cards]) => {
        userId = user._id
        cohortId = user.cohort
        userInfoClass.setUserInfo(user)
        elementsRender.renderItems(cards)
    })
    .catch((err) => console.log(err));




















// функция открытия попапа редактирования имени и призвания
const handleOpenPopupInfoForm = () => {
    popupInfoValid.disableValidation();
    popupInfoFormClass.open();

    const { name, job } = userInfoClass.getUserInfo()
    popupInfoNameInput.value = name;
    popupInfoJobInput.value = job;
};

// функция открытия попапа добавления фото
const handleOpenPopupPhotoForm = () => {
    popupPhotoValid.disableValidation();
    popupPhotoFormClass.open();
};

// функция открытия попапа редактирования аватара
const handleOpenPopupAvatarEdit = () => {
    popupAvatarValid.disableValidation();
    popupAvatarFormClass.open();
}

const handleOpenPopupDeleteCard = () => {
    popupDeleteFormClass.open()
}


//функция передачи данных для создания карточки
function createCard(item) {
    const card = new Card(
        item,
        templateSelector,
        userId,
        {
            handleImageClick: (name, link) => {
                popupWithImage.open(name, link);
            },
            handleDeleteConfirm: (card) => {
                popupWithConfirm.open(card);
            },
            handleLikeClick: (id) => {
                apiClass
                    .likeCard(id)
                    .then((resolve) => card.likeCard(resolve))
            },
            handleDislikeClick: (id) => {
                apiClass
                    .dislikeCard(id)
                    .then((resolve) => card.likeCard(resolve))
            },
        }
    );
    const cardElement = card.createCard();
    return cardElement;
};



// слушатель вызова функции открытия попапа редактирования аватара
profileAvatarEditBtn.addEventListener('click', handleOpenPopupAvatarEdit);

// слушатель вызова функции открытия попапа редактирования имени и призвания
profileInfoEditBtn.addEventListener('click', handleOpenPopupInfoForm);

// слушатель вызова функции открытия попапа добавления фото
profileAddPhotoBtn.addEventListener('click', handleOpenPopupPhotoForm)



popupInfoValid.enableValidation();
popupPhotoValid.enableValidation();
popupAvatarValid.enableValidation()
popupWithConfirm.setEventListeners()

popupAvatarFormClass.setEventListeners()
popupInfoFormClass.setEventListeners();
popupPhotoFormClass.setEventListeners();
popupWithImage.setEventListeners();

