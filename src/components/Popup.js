class Popup {
    constructor (popup, {popupActiveCssClass, popupCloseBtnCssClass}) {
        this._popup = popup;
        this._popupActiveCssClass = popupActiveCssClass;
        this._popupCloseBtnCssClass = popupCloseBtnCssClass;

        this._handleEscClose = this._handleEscClose.bind(this);
    }

    setEventListeners () {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains(this._popupActiveCssClass)) { this.close() }
            if (evt.target.classList.contains(this._popupCloseBtnCssClass)) { this.close() }
        });
        
    }

    _handleEscClose (evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    open () {
        this._popup.classList.add(this._popupActiveCssClass);
        document.addEventListener('keydown', this._handleEscClose);
    }

    close () {
        this._popup.classList.remove(this._popupActiveCssClass);
        document.removeEventListener('keydown', this._handleEscClose);
    }
}

export default Popup;