import React from "react";

import "../css/Filter.css";

const Filter = (props) => {
    return (
      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Advanced Search
        </a>

        <div className="dropdown-menu">
          <form className="px-4 py-3">
            <div className="form-group">
              <div className="sort-start-date">
                
                <label htmlFor="start-range1">Sort by Date:</label>
                <label htmlFor="start-range2">Start Date:</label>

                <input
                  value={props.state.start}
                  onChange={props.onChange}
                  type="date"
                  id="start-range1"
                  name="start"
                />

              </div>

                <label htmlFor="start-range2">End Date: </label>
                
                <input
                  value={props.state.end}
                  onChange={props.onChange}
                  type="date"
                  id="start-range2"
                  name="end"
                />
            </div>

            <div className="sort-tag">
              <p> Sort By Tag: </p>
              <select name="tag" value={props.state.tag} onChange={props.onChange}>
                <option>All</option>
                <option>Food & Drink</option>
                <option>Educational</option>
                <option>Social Good</option>
                <option>Professional</option>
                <option>Personal</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary" id="search-button" onClick={props.onClick}>
              Search
            </button>
          </form>
        </div>
      </div>
    );
}

export default Filter;
