// Get every core element of the block
export class Component {
    constructor(id) {
        this.$el = document.getElementById(id);
        this.init();
    }

    init() {}
    hide() {
        this.$el.classList.add('hide')
    }
    show() {
        this.$el.classList.remove('hide')
    }
}