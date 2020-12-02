<<<<<<< HEAD
// <<<<<<< HEAD
// hello world
// second edit
// =======
=======

>>>>>>> 47f7702db79e5d9eef00fb6c581a9d61856f2f9a
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
<<<<<<< HEAD
// >>>>>>> origin
=======
>>>>>>> 47f7702db79e5d9eef00fb6c581a9d61856f2f9a
