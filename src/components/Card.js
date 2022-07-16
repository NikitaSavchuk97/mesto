class Card {
    constructor (configuration, templateSelector, openPopupIllustration) {
        this._name = configuration.name;
        this._link = configuration.link;
        this._template = document.querySelector(templateSelector);
        this._openPopupIllustration = openPopupIllustration;
    }

    _getTemplate = () => {
        const element = this._template
            .content
            .querySelector('.element')
            .cloneNode(true);
        return element;
    }

    createCard = () => {
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

    _handleLikeClick = () => {
        this._elementLikeBtn.classList.toggle('element__like_active');
    }

    _handleDeleteClick = () => {
        this._element.remove();
        this._element = null;
    }
    
    _handleImageClick () {
        this._openPopupIllustration({name: this._name, link: this._link})
    }

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