import PopupImage from "./PopupImage.js";

class Card {
    constructor (configuration, template, popupIllustration) {
        this._name = configuration.name;
        this._link = configuration.link;
        this._template = template;
        this._popupIllustration = popupIllustration;
    }

    _getTemplate = () => {
        const element = this._template
            .content
            .querySelector('.element')
            .cloneNode(true);
        return element;
    }

    // функция разметки карточки
    createCard = () => {
        // относящиеся к разметке карточки
        this._element = this._getTemplate();
        this._elementPhoto = this._element.querySelector('.element__photo');
        this._elementTitle = this._element.querySelector('.element__title');
        this._elementLikeBtn = this._element.querySelector('.element__like');
        this._elementDeleteBtn = this._element.querySelector('.element__delete');

        this._elementPhoto.src = this._link;
        this._elementPhoto.alt = this._name;
        this._elementTitle.textContent = this._name;

        this._setEventListeners();

        return this._element;
    }

    // функция переключения лайка
    _handleLikeClick = () => {
        this._elementLikeBtn.classList.toggle('element__like_active');
    }

    // функция удаления карточки
    _handleDeleteClick = () => {
        this._element.remove();
    }
    
    _handleImageClick = () => {
        this._popupIllustration({name: this._name, link: this._link})
    }

    // слушатели вызова функций: удаления карточки, лайка и просмотра иллюстрации
    _setEventListeners = () => {
        this._elementLikeBtn.addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._elementDeleteBtn.addEventListener('click', () => {
            this._handleDeleteClick();
        });

        this._elementPhoto.addEventListener('click', () => {
            this._handleImageClick();
        });
    }
}

export default Card;