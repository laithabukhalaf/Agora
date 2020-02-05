import { observable, action, computed } from "mobx";
import { Items } from "./items";

export class Inventory {
  @observable items = [];
  @computed get totalItems() {
    return this.items.length;
  }
  @action addItem = (name, price, quantity) => {
    if (this.items.find(i => i.name === name)) {
      let itemIndex = this.items.findIndex(i => i.name === name);
      this.items[itemIndex].quantity++;
    } else {
      let item = new Items(name);
      this.items.push(item);
    }
  };
  @action buyItem = name => {
    if (this.items.find(i => i.quantity === 0)) {
      let itemIndex = this.items.findIndex(i => i.name === name);
      this.items.splice(itemIndex, 1);
    } else {
      let itemIndex = this.items.findIndex(i => i.name === name);
      this.items[itemIndex].quantity--;
    }
  };
  @action changePrice = (name, price) => {
    let itemIndex = this.items.findIndex(i => i.name === name);

    this.items[itemIndex].price = price;
  };
}
