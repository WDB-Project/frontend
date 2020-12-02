import React, { Component } from "react";
import "./filter.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [
  { value: "all-tags", label: "All Tags" },
  {
    value: "social-good",
    label: "Social Good",
    className: "myOptionClassName",
  },
  {
    value: "food-&-drink",
    label: "Food & Drink",
    className: "myOptionClassName",
  },
  {
    value: "educational",
    label: "Educational",
    className: "myOptionClassName",
  },
  {
    value: "professional",
    label: "Professional",
    className: "myOptionClassName",
  },
  {
    value: "personal",
    label: "Personal",
    className: "myOptionClassName",
  },
];

const defaultOption = options[0];

class Filter extends Component {
  render() {
    return (
      <div class="flex">
        <p className="sort-wording">Sort By Tag:</p>

        <Dropdown
          options={options}
          onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select an option"
          className="dropdown-size"
        />
      </div>
    );
  }
}
export default Filter;
