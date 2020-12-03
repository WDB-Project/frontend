import React, { Component } from "react";
import "./browse_content.css";
import Event_Card from "../Event_Card/Event_Card";
import Filter from "../filter/filter";
import Header from "../NavBar/NavBar";
import axios from "axios"; 

const url = "http://localhost:3030/events/get"

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

const Repeater = (events) => {
  return (
    <ul class="wrapping-browsing">
      {events.map((event) => {
        return <Event_Card event={event} />;
      })}
    </ul>
  );
};

class Browse_Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      data: undefined
    }
    this.getEvents = this.getEvents.bind(this)
  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents() {
    axios.get('http://localhost:3030/events/get')
      .then((response) => {
        this.setState({
          isLoaded: true,
          data: response.data
        })
      }).catch((error) => {
        console.log(error)
        this.setState({
          isLoaded: true,
          error: error
        })
      })
  }


  render() {
    if (!this.state.isLoaded) {
      if (this.state.error) {
        return (
          <div>{this.state.error}</div>
        )
      } else {
        return (
        <div>Loading...</div>
      )}
    }

    return (
      <div>
        <div>
          <Header />
        </div>
        
        <div>
          <h1 className="title-browse">
            Browse Events
            <div id="available-events">5,237 Available Events</div>
          </h1>

          <Filter />

          <div className="event-type">
            <div className="event-list">{Repeater(this.state.data.upcoming)}</div>
          </div>
          <div className="event-type">
            <div className="event-list">{Repeater(this.state.data.ongoing)}</div>
          </div>
          <div className="event-type">
            <div className="event-list">{Repeater(this.state.data.past)}</div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Browse_Content;



// {
//   title: "Birthday Party",
//   location: "Alaska, CA",
//   date: "May 29, 2020",
//   time: "2:30PM",
//   tag: "Music",
// },
// {
//   title: "Career Fair",
//   location: "Berkeley, CA",
//   date: "August 23, 2018",
//   time: "3:30PM",
//   tag: "Professional",
// },
// {
//   title: "Protest",
//   location: "Walnut, CA",
//   date: "March 23, 2018",
//   time: "3:30PM",
//   tag: "Social Good",
// },
// {
//   title: "Protest",
//   location: "Walnut, CA",
//   date: "March 23, 2018",
//   time: "3:30PM",
//   tag: "Social Good",
// },
// {
//   title: "Protest",
//   location: "Walnut, CA",
//   date: "March 23, 2018",
//   time: "3:30PM",
//   tag: "Social Good",
// },