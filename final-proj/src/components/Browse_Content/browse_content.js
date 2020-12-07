import React, { Component } from "react";
import "./browse_content.css";
import Event_Card from "../Event_Card/Event_Card";
import Filter from "../filter/filter";
import Header from "../NavBar/NavBar";
import axios from "axios";
import "../filter/filter.css"

const url = "http://upandcoming-env.eba-icsyb2cg.us-east-1.elasticbeanstalk.com/events/get";

function Repeater(items, condition) {
  if (items === undefined) {
    return null;
  }
  return (
    <div id="background-coloring">
      <ul className="wrapping-browsing">
        {items.map((event) => {
          return <Event_Card key={event._id} event={event} condition={condition}/>;
        })}
      </ul>
    </div>
  );
};

function encodeURL(inputDict) {
  var query = '?'
  for (const [key, value] of Object.entries(inputDict)) {
    query += `${key}=${value}&`
  }
  return query.slice(0,-1)
}

class Browse_Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: undefined,
      start: '',
      end: '',
      tag: '',
    };
    this.getEvents = this.getEvents.bind(this);
    this.availableEvents = this.availableEvents.bind(this)
    this.filterParams = this.filterParams.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.getEvents();
  }

  componentWillUnmount() {
    this.setState({isLoaded: false})
  }

  availableEvents() {
    return (
      this.state.data.upcoming.length +
      this.state.data.ongoing.length +
      this.state.data.past.length
    );
  }

  filterParams() {
    const ms = 1000 * 60 * 60 * 8
    const filter = {}
    if (this.state.start !== '') {
      filter['startDate'] = Date.parse(this.state.start) + ms
    }
    if (this.state.end !== '') {
      filter['endDate'] = Date.parse(this.state.end) + ms
    }
    if (this.state.tag !== '' && this.state.tag !== 'All') {
      filter['tag'] = this.state.tag
    }
    return encodeURL(filter)
  }

  handleChange = (event) => {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.getEvents()
  }

  getEvents() {
    console.log(url + this.filterParams())
    axios.get(url + this.filterParams()) 
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
          isLoaded: false,
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
    } else {
      return (
        <div>
          <div>
            <Header />
          </div>
          <div>
            <Filter onChange={this.handleChange} onClick={this.handleClick} state={this.state} />
          </div>
          <div className="upcoming-past-sectioning">
            <div className="entire-screen">
              <div className="header">
                <h1 className="title-browse">Browse Events</h1>
                <div id="available-events">{this.availableEvents()} Available Events</div>
              </div>
              <div className="event-type">
                <div className="subtitles">Upcoming Events </div>
                {Repeater(this.state.data.upcoming, 'start')}
              </div>
              <div className="event-type">
                <div className="subtitles">Ongoing Events </div>
                {Repeater(this.state.data.ongoing, 'ongoing')}
              </div>
              <div className="event-type">
                <div className="subtitles">Past Events </div>
                {Repeater(this.state.data.past, 'end')}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

// <Filter state={this.state} startRef={this.startRef} endRef={this.endRef} tagRef={this.tagRef} onClick={this.handleClick}/>

export default Browse_Content;
