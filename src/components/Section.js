class Section {
    constructor ({elementsSelector}, {items, renderer}) {
        this._elementsSelector = elementsSelector
        this._items = items;
        this._renderer = renderer;

        this._elements = document.querySelector(`.${this._elementsSelector}`)
    }

    renderItems () {
        this._items.forEach( (item) => {
            const card = this._renderer(item);
            this.addItem(card)
        })
    }

    addItem (item) {
        this._elements.prepend(item)
    }
}

export default Section;
