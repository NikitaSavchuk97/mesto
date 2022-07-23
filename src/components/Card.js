class Card {
    constructor(configuration, templateSelector, userId, { handleImageClick, handleDeleteConfirm, handleLikeClick, handleDislikeClick }) {
        //console.log(configuration)
        this._name = configuration.name;
        this._link = configuration.link;
        this._cardId = configuration._id;
        this._ownerId = configuration.owner._id;
        this._likes = configuration.likes;
        this._userId = userId;
        this._template = document.querySelector(templateSelector);
        this._handleImageClick = handleImageClick;
        this._handleDeleteConfirm = handleDeleteConfirm;
        this._handleLikeClick = handleLikeClick;
        this._handleDislikeClick = handleDislikeClick;
    }

    createCard = () => {
        this._element = this._getTemplate();
        this._elementPhoto = this._element.querySelector('.element__photo');
        this._elementTitle = this._element.querySelector('.element__title');
        this._elementLikeBtn = this._element.querySelector('.element__like');
        this._elementLikeNum = this._element.querySelector('.element__counter');
        this._elementDeleteBtn = this._element.querySelector('.element__delete');

        this._elementLikeNum.textContent = this._likes.length;

        this._elementPhoto.src = this._link;
        this._elementPhoto.alt = this._name;
        this._elementTitle.textContent = this._name;

        this._checkOwnerForLike();
        this._checkOwnerForDelete();
        this._setEventListeners();

        return this._element;
    }

    _getTemplate = () => {
        const element = this._template
            .content
            .querySelector('.element')
            .cloneNode(true);
        return element;
    }

    deleteCard() {
        this._element.remove()
        this._element = null;
    }

    _setLike() {
        if (this._elementLikeBtn.classList.contains('element__like_active')) {
            this._handleDislikeClick(this._cardId);
        } else {
            this._handleLikeClick(this._cardId);
        }
    }

    likeCard(resolve) {
        if (this._elementLikeBtn.classList.contains('element__like_active')) {
            this._elementLikeBtn.classList.remove('element__like_active');
            this._elementLikeNum.textContent = resolve.likes.length;
        } else {
            this._elementLikeBtn.classList.add('element__like_active');
            this._elementLikeNum.textContent = resolve.likes.length;
        }
    }

    _checkOwnerForLike() {
        if (this._likes.find((likes) => this._userId === likes._id)) {
            this._elementLikeBtn.classList.add('element__like_active');
        }
    }

    _checkOwnerForDelete() {
        if (!(this._ownerId === this._userId)) {
            this._elementDeleteBtn.remove();
        }
    }

    _setEventListeners() {
        this._elementLikeBtn.addEventListener('click', () => this._setLike());
        this._elementDeleteBtn.addEventListener('click', () => this._handleDeleteConfirm(this));
        this._elementPhoto.addEventListener('click', () => this._handleImageClick(this._name, this._link));
    }
}

export default Card;