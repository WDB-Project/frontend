import React, { Component } from "react";
import "./filter.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [
  { value: "", label: "All Tags" },
  {
    value: "Social Good",
    label: "Social Good",
    className: "myOptionclassName",
  },
  {
    value: "Food & Drink",
    label: "Food & Drink",
    className: "myOptionclassName",
  },
  {
    value: "Educational",
    label: "Educational",
    className: "myOptionclassName",
  },
  {
    value: "Professional",
    label: "Professional",
    className: "myOptionclassName",
  },
  {
    value: "Personal",
    label: "Personal",
    className: "myOptionclassName",
  },
];

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

// className Filter extends Component {
//   render() {
//     return (
//       <div className="dropdown">
//         <a
//           className="btn btn-secondary dropdown-toggle"
//           role="button"
//           id="dropdownMenuLink"
//           data-toggle="dropdown"
//           aria-haspopup="true"
//           aria-expanded="false"
//         >
//           Advanced Search
//         </a>

//         <div className="dropdown-menu">
//           <form className="px-4 py-3">
//             <div className="form-group">
//               <div className="sort-start-date">
//                 <label for="start-range1">Sort by Date:</label>
//                 <label for="start-range2">Start Date:</label>

//                 <input
//                   type="date"
//                   id="start-range1"
//                   name="startDate"
//                 />
//               </div>
//               <label for="start-range2">End Date: </label>
//               <input
//                 type="date"
//                 id="start-range2"
//                 name="endDate"
//               />
//             </div>
//             <div className="sort-tag">
//               <p> Sort By Tag: </p>
//               <Dropdown
//                 options={options}
//                 value={options[0]}
//                 placeholder="Select an option"
//                 className="dropdown-size"
//                 onChange={this._onSelect}
//               />
//             </div>

//             <button type="submit" className="btn btn-primary" id="search-button">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

export default Filter;
