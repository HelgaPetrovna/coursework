import { Component } from "../core/component";

export class HeaderComponent extends Component{
    constructor(id) {
        super(id)
    }

    init() {
        const btn = this.$el.querySelector('.header_button');
        btn.addEventListener('click', buttonHandler.bind(this))
    }
}

const buttonHandler = function() {
  this.hide()
}