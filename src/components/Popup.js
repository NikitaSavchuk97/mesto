class Popup {
    constructor (popupSelector, {popupActiveSelector, popupCloseBtnSelector}) {
        this._popupSelector = popupSelector;
        this._popupActiveSelector = popupActiveSelector;
        this._popupCloseBtnSelector = popupCloseBtnSelector;
    }

    setEventListeners () {
        this._popupSelector.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains(this._popupActiveSelector)) { this.close() }
            if (evt.target.classList.contains(this._popupCloseBtnSelector)) { this.close() }
        })
        document.addEventListener('keydown', this._handleEscClose)
    }

    _unsetEventListeners () {
        document.removeEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose (evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    open () {
        this._popupSelector.classList.add(this._popupActiveSelector);
        this.setEventListeners()
    }

    close () {
        this._popupSelector.classList.remove(this._popupActiveSelector);
        this._unsetEventListeners();
    }
}

export default Popup;