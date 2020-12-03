import React, { Component } from "react";
import "./event_card.css";

const Event_Card = ({ event }) => {
  return (
    <div className="padding-between-cards">
      <img src="http://placecorgi.com/310/178.34" alt="Card image cap" />
      <div className="card-body">
        <h5 className="title-card">{event.title}</h5>
        <div className="date-event">
          <div className="location-event">{event.location}</div>
        </div>
        <div className="date-event">{event.date}</div>

        <ul className="tags">
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
