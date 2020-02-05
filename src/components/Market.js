/* eslint-disable quotes */
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Item from "./Item";
@inject("inventory","items")
@observer
class Market extends Component {
  constructor() {
    super();
    this.state = { newItem: "" };
  }

  addItem = async e => {
    if (e.key === "Enter") {
      await this.setState({
        newItem: e.target.value
      });
      this.props.inventory.addItem(this.state.newItem);
    }
  };
  render() {
    const agora = this.props.inventory;
    return (
      <div>
        <input type="text" onKeyPress={this.addItem} />
        {agora.items.map((i, ind) => (
          <Item key={ind} item={i} agora={agora} />
        ))}
      </div>
    );
  }
}
export default Market;
