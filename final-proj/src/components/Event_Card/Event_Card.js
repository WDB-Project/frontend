import React, { Component } from "react";
import "./event_card.css";

const Event_Card = ({ event }) => {
  return (
    <div class="entire-card">
      <img src="http://placecorgi.com/310/178.34" alt="Pictures of Events" />
      <div class="card-interior">
        <h5 class="title-card">{event.title}</h5>
        <div class="date-of-event">
          <div class="location-event">{event.location}</div>
        </div>
        <div class="date-of-event">{event.date}</div>

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
