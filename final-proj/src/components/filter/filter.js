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
      <div class="dropdown">
        <a
          class="btn btn-secondary dropdown-toggle"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Advanced Search
        </a>

        <div class="dropdown-menu">
          <form class="px-4 py-3">
            <div class="form-group">
              <div class="sort-start-date">
                <label for="start-range1">Sort by Start Date:</label>
                <label for="start-range2">From:</label>

                <input
                  type="date"
                  id="start-range1"
                  name="trip-start"
                  min="2018-01-01"
                  // value=""
                  max="2021-12-31"
                />
              </div>
              <label for="start-range2">To: </label>
              <input
                type="date"
                id="start-range2"
                name="trip-start"
                min="2018-01-01"
                max="2021-12-31"
              />
            </div>
            <div className="sort-tag">
              <p> Sort By Tag: </p>
              <Dropdown
                options={options}
                onChange={this._onSelect}
                value={defaultOption}
                placeholder="Select an option"
                className="dropdown-size"
              />
            </div>

            <button type="submit" class="btn btn-primary" id="search-button">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Filter;
