import { Component } from "../core/component";

export class NavigationComponent extends Component{
    constructor(id) {
        super(id)

        this.tabs = []
    }

    init() {
        const tab = this.$el.querySelector('.tab');
        tab.addEventListener('click', tabClickHandler.bind(this))
    }
}

function tabClickHandler(event) {
if (event.target.classList.contains('tablinks')) {
    console.log('Bingo!')
    Array.from(this.$el.querySelectorAll('.tablinks')).forEach((item) => {
        item.classList.remove('active')
    })
    event.target.classList.add('active')
}
}
