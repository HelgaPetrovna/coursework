import { Component } from "../core/component";

export class HeaderComponent extends Component{
    constructor(id) {
        super(id)
    }

    init() {
        if (localStorage.getItem('visited')) {
        this.hide()
        }
        const btn = this.$el.querySelector('.header_button');
        btn.addEventListener('click', buttonHandler.bind(this))
    }
}

const buttonHandler = function() {
    localStorage.setItem('visited', 'true');
  this.hide()
}