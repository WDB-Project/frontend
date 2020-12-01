import React, { Component } from "react";
import "./browse_content.css";
import Event_Card from "../Event_Card/event_card";
import Filter from "../filter/filter";

const a = [
  {
    title: "Protest",
    location: "Walnut, CA",
    date: "March 23, 2018",
    time: "3:30PM",
    tag: "Social Good",
  },
  {
    title: "Birthday Party",
    location: "Alaska, CA",
    date: "May 29, 2020",
    time: "2:30PM",
    tag: "Music",
  },
  {
    title: "Career Fair",
    location: "Berkeley, CA",
    date: "August 23, 2018",
    time: "3:30PM",
    tag: "Professional",
  },
  {
    title: "Protest",
    location: "Walnut, CA",
    date: "March 23, 2018",
    time: "3:30PM",
    tag: "Social Good",
  },
  {
    title: "Protest",
    location: "Walnut, CA",
    date: "March 23, 2018",
    time: "3:30PM",
    tag: "Social Good",
  },
  {
    title: "Protest",
    location: "Walnut, CA",
    date: "March 23, 2018",
    time: "3:30PM",
    tag: "Social Good",
  },
];
const Repeater = () => {
  return (
    <ul class="right-side">
      {a.map((event) => {
        return <Event_Card event={event} />;
      })}
    </ul>
  );
};

class Browse_Content extends Component {
  render() {
    return (
      <div>
        <h1 class="title">
          Browse Events
          <h2>5,230 Available Events</h2>
        </h1>

        <Filter />
        <div>{Repeater()}</div>
      </div>
    );
  }
}

export default Browse_Content;
