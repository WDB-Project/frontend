import React, { Component } from "react";
import "./event_card.css";

const Event_Card = ({ event }) => {
  return (
    <div class="card">
      <img
        class="card-img-top"
        src="http://placecorgi.com/310/178.34"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{event.title}</h5>
        <div class="date">
          <div class="location">{event.location}</div>
        </div>
        <div class="date">{event.date}</div>

        <ul class="tags">
          <li>
            <a href="#" class="tag">
              {event.tag}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Event_Card;

// <p class="card-text">
//   Some quick example text to build on the card title and make up the
//   bulk of the card's content.
// </p>
