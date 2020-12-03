import React, { Component } from "react";
import "./browse_content.css";
import Event_Card from "../Event_Card/Event_Card";
import Filter from "../filter/filter";
import Header from "../NavBar/NavBar";
import axios from "axios";

const EVENT_LIST_API =
  "http://ec2-3-86-143-220.compute-1.amazonaws.com:3000/events/get";

// const events = [
//   {
//     image: "https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501_960_720.jpg",
//     name: "Protest",
//     location: "Walnut, CA",
//     startDate: 1584687600000,
//     endDate: 1584774000000,
//     website: "https://google.com",
//     contact: "helloWorld@google.com",
//     tag: "Social Good",
//   },
//   {
//     image: "https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501_960_720.jpg",
//     name: "Protest",
//     location: "Walnut, CA",
//     startDate: 1584687600000,
//     endDate: 1584774000000,
//     website: "https://google.com",
//     contact: "helloWorld@google.com",
//     tag: "Social Good",
//   },
//   {
//     image: "https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501_960_720.jpg",
//     name: "Protest",
//     location: "Walnut, CA",
//     startDate: 1584687600000,
//     endDate: 1584774000000,
//     website: "https://google.com",
//     contact: "helloWorld@google.com",
//     tag: "Social Good",
//   },
//   {
//     image: "https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501_960_720.jpg",
//     name: "Protest",
//     location: "Walnut, CA",
//     startDate: 1584687600000,
//     endDate: 1584774000000,
//     website: "https://google.com",
//     contact: "helloWorld@google.com",
//     tag: "Social Good",
//   },
//   {
//     image: "https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501_960_720.jpg",
//     name: "Protest",
//     location: "Walnut, CA",
//     startDate: 1584687600000,
//     endDate: 1584774000000,
//     website: "https://google.com",
//     contact: "helloWorld@google.com",
//     tag: "Social Good",
//   },
//   {
//     image: "https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501_960_720.jpg",
//     name: "Protest",
//     location: "Walnut, CA",
//     startDate: 1584687600000,
//     endDate: 1584774000000,
//     website: "https://google.com",
//     contact: "helloWorld@google.com",
//     tag: "Social Good",
//   },
//   {
//     image: "https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501_960_720.jpg",
//     name: "Protest",
//     location: "Walnut, CA",
//     startDate: 1584687600000,
//     endDate: 1584774000000,
//     website: "https://google.com",
//     contact: "helloWorld@google.com",
//     tag: "Social Good",
//   }
// ];

const Repeater = (items) => {
  if (items == undefined) {
    return null;
  }
  return (
    <div id="background-coloring">
      <ul class="wrapping-browsing">
        {items.map((event) => {
          return <Event_Card event={event} />;
        })}
      </ul>
    </div>
  );
};

class Browse_Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: undefined,
    };
    this.getEvents = this.getEvents.bind(this);
  }

  componentDidMount() {
    this.getEvents();
    console.log(this.state.data);
  }

  getEvents() {
    axios
      .get(EVENT_LIST_API)
      .then((response) => {
        console.log(response);
        this.setState({
          isLoaded: true,
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isLoaded: true,
          error: error,
        });
      });
  }

  render() {
    if (!this.state.isLoaded) {
      if (this.state.error) {
        return <div>{this.state.error}</div>;
      } else {
        return <div>Loading...</div>;
      }
    }

    return (
      <div>
        <div>
          <Header />
        </div>
        <Filter />
        <div className="upcoming-past-sectioning">
          <div className="entire-screen">
            <div className="header">
              <h1 className="title-browse">Browse Events</h1>
              <div id="available-events">5,237 Available Events</div>
            </div>
            <div className="event-type">
              <div class="subtitles">Upcoming Events </div>
              {Repeater(this.state.data.upcoming)}
            </div>
            <div className="event-type">
              <div class="subtitles">Ongoing Events </div>
              {Repeater(this.state.data.ongoing)}
            </div>
            <div className="event-type">
              <div class="subtitles">Past Events </div>
              {Repeater(this.state.data.past)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Browse_Content;
