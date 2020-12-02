<<<<<<< HEAD
hello world
second edit
=======
import React, { Component } from "react";
import "./event_card.css";

const Event_Card = ({ event }) => {
  return (
    <div class="padding-between-cards">
      <img src="http://placecorgi.com/310/178.34" alt="Card image cap" />
      <div class="card-body">
        <h5 class="title-card">{event.title}</h5>
        <div class="date-event">
          <div class="location-event">{event.location}</div>
        </div>
        <div class="date-event">{event.date}</div>

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
>>>>>>> c983d0e06feb8591c93a422fbf7d474c6160db1d
