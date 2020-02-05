import { observable } from 'mobx'

export class Items {
    @observable name 
    @observable price = 1
    @observable quantity = 0
    constructor(name) {
        this.name = name
    }
}