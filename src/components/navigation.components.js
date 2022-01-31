import { Component } from "../core/component";

export class NavigationComponent extends Component{
    constructor(id) {
        super(id)

        this.tabs = []

    }

    registerTabs(tabs) {
        this.tabs = tabs
    }

    init() {
        const tab = this.$el.querySelector('.tab');
        tab.addEventListener('click', tabClickHandler.bind(this))
    }
}

function tabClickHandler(event) {
if (event.target.classList.contains('tablinks')) {
    Array.from(this.$el.querySelectorAll('.tablinks')).forEach((item) => {
        item.classList.remove('active')
    })
    event.target.classList.add('active')
}
this.tabs.forEach((tab) => {
    if (tab.name === event.target.dataset.name) {
        tab.component.show()
    } else {
        tab.component.hide()
    }
})

}
