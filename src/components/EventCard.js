import React from "react";

import "../css/EventCard.css";

function daysLeft(event, condition) {
  const now = Date.now();
  const days = (time) => {
    return Math.floor(time / 86400000);
  };
  switch (condition) {
    case "start":
      return `In ${days(event.startDate - now)} days`;
    case "end":
      return `${days(now - event.endDate)} days ago`;
    case "ongoing":
      return `${days(now - event.startDate)} days left`;
    default:
      return null;
  }
}

function displayLocation(event) {
  console.log(event["state"]);
  const attributes = ["addressOne", "addressTwo", "city", "state", "zip"];
  var location = "";
  for (const attribute of attributes) {
    if (event[attribute] !== "") location += event[attribute] + ", ";
  }
  console.log(location);
  return location.slice(0, -2);
}

function displayTime(timeInput) {
  const time = new Date(timeInput);
  const hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  const mid = time.getHours() > 12 ? "pm" : "am";
  const minutes =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const day = time.getDate();
  const month = time.toString().slice(4, 7);
  const year = time.getFullYear();
  return `${hours}:${minutes} ${mid}, ${day} ${month} ${year}`;
}

const EventCard = (props) => {
  return (
    <div>
      <a href={`/event/${props.event._id}`} className="link">
        <div className="padding-between-cards">
          <div className="image-spacing">
            <img src={props.event.image} alt="event banner" />
          </div>
          <div className="card-body">
            <h5 className="title-card primary-mont">{props.event.name}</h5>
            <div className="date-event secondary-sans"></div>
            <div className="date-event secondary-sans">
              <div className="date secondary-sans">
                Start: &nbsp;
                <div className="bolded">
                  {displayTime(props.event.startDate)}
                </div>
              </div>
              <div className="date secondary-sans">
                End: &nbsp;
                <div className="bolded">{displayTime(props.event.endDate)}</div>
              </div>
            </div>
            <div className="date-event secondary-sans">
              <div>
                Location: &nbsp;
                <div className="bolded">{displayLocation(props.event)}</div>
              </div>
            </div>
            <div className="upcoming-past secondary-sans">
              {daysLeft(props.event, props.condition)}
            </div>
            <ul className="tags secondary-sans">
              <li className="tag">{props.event.tag}</li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};

export default EventCard;
