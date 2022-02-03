import { Component } from "../core/component";
import {Form} from "../core/form"

export class CreateComponent extends Component{
    constructor(id) {
        super(id)
    }

    init() {
        this.form = new Form(this.$el, {
            title: [],
            fulltext: [],
        })
        this.$el.addEventListener('submit', submitHandler.bind(this))
    }
}

let submitHandler = function(event){
    event.preventDefault
}