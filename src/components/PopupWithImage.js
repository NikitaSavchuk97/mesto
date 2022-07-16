import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor (popup, popupConfiguration, {popupIllustrationImage, popupIllustrationSubtitle}) {
        super(popup, popupConfiguration);
        this._cardImage = popupIllustrationImage;
        this._cardSubtitle = popupIllustrationSubtitle;

        this.open = this.open.bind(this);
        /*
        так и не понял как сделать без bind() , идет потеря контекста, т.e. undefined

        Uncaught TypeError: Cannot set properties of undefined (setting 'src')                  PopupWithImage.js:60 
            at Card.open [as _popupIllustration] (PopupWithImage.js:60:27)
            at Card._handleImageClick (Card.js:74:12)
            at HTMLImageElement.eval (Card.js:61:15)
        */
    }

    open ({name, link}) {
        this._cardImage.src = link;
        this._cardImage.alt = name;
        this._cardSubtitle.textContent = name;
        super.open()
    }
}

export default PopupWithImage;