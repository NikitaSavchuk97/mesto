class Section {
    constructor({ elementsSelector }, { items, renderer }) {
        this._elements = document.querySelector(elementsSelector);
        this._items = items;
        this._renderer = renderer;
    }

    renderItems(items) {
        items.reverse().forEach((item) => {
            const card = this._renderer(item);
            this.addItem(card)
        })
    }

    addItem(item) {
        this._elements.prepend(item)
    }
}

export default Section;