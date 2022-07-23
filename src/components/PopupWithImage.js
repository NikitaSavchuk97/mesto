import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector, popupConfiguration, { popupIllustrationImageSelector, popupIllustrationSubtitleSelector }) {
        super(popupSelector, popupConfiguration);
        this._cardImage = this._popup.querySelector(popupIllustrationImageSelector);
        this._cardSubtitle = this._popup.querySelector(popupIllustrationSubtitleSelector);
    }

    open(name, link) {
        this._cardImage.src = link;
        this._cardImage.alt = name;
        this._cardSubtitle.textContent = name;
        super.open()
    }
}

export default PopupWithImage;