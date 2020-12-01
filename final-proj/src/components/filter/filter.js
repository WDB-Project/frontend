import React, { Component } from "react";
import "./filter.css";

const items = ["One", "Two", "Three"];

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { checked } = e.target;
    this.setState({ checked });
  }
  render() {
    return (
      <div class="green-background">
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.onChange}
          class="checkboxes"
        />
      </div>
    );
  }
}
export default Filter;
