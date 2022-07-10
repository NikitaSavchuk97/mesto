import Popup from "./Popup.js";

class PopupImage extends Popup {
    constructor (popupSelector, popupConfiguration, {popupIllustrationImageSelector, popupIllustrationSubtitleSelector}) {
        super(popupSelector, popupConfiguration);
        this._popupIllustrationImageSelector = popupIllustrationImageSelector;
        this._popupIllustrationSubtitleSelector = popupIllustrationSubtitleSelector;

        this._cardImage = this._popupSelector.querySelector(`.${this._popupIllustrationImageSelector}`);
        this._cardSubtitle = this._popupSelector.querySelector(`.${this._popupIllustrationSubtitleSelector}`);

        this.open = this.open.bind(this);
    }

    open ({name, link}) {
        this._cardImage.src = link;
        this._cardImage.alt = name;
        this._cardSubtitle.textContent = name;
        super.open()
    }
}

export default PopupImage;