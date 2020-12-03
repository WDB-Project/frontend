import React, { Component } from "react";
import "./event_card.css";

const Event_Card = ({ event }) => {
  return (
    <div>
      <a href={`/event/${event._id}`} class="link">
        <div class="padding-between-cards">
          <div class="card-entire">
            <div class="image-spacing">
              <img src={event.image} alt="event image" />
            </div>
            <div class="card-body">
              <h5 class="title-card">{event.name}</h5>
              <div class="date-event">
                <div class="upcoming-past">UPCOMING</div>
              </div>
              <div class="date-event">
                <div class="date">
                  Start: {new Date(event.startDate).toString().slice(4, 15)}
                </div>
                <div class="date">
                  End: {new Date(event.endDate).toString().slice(4, 15)}
                </div>
              </div>
              <div class="date-event">
                <div>Location: {event.location}</div>
              </div>
              <ul className="tags">
                <li>
                  <a href="#" class="tag">
                    {event.tag}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Event_Card;
