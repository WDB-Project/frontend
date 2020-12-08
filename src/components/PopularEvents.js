import React, { Component } from "react";
import { Card, ListGroup, Row, Col } from 'react-bootstrap';

import "../css/PopularEvents.css"

import axios from 'axios'
const url = "http://upandcoming-env.eba-icsyb2cg.us-east-1.elasticbeanstalk.com/events/get"

const EventRow = ({ event }) => {
  return (
    <ListGroup.Item>
      <a href={`/event/${event._id}`}>
      <Row noGutters>
        <p style={ { marginBottom:0 } }>{event.name}</p>
        <Col className="d-flex justify-content-end">
          <p style={ { marginBottom:0 } }>{new Date(event.startDate).toString().slice(4, 15)}</p>
        </Col>
      </Row>
      </a>
    </ListGroup.Item>
  )
}

function DisplayEvents(items) {
  if (items == undefined) {
    return null
  }
  return (
    <ListGroup variant="flush">
      {items.map((event) => {
        return <EventRow event={event} />
      })}
    </ListGroup>
  )
}

class PopEvents extends Component{
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      data: undefined
    }
    this.getEvents = this.getEvents.bind(this)
  }

  componentDidMount() {
    this.getEvents();
    console.log(this.state.data);
  }

  getEvents() {
    axios.get(url)
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
          error: error,
        });
      });
  }

  render() {
    const cardStyle = {
      padding: 30,
      width: 500,
      backgroundColor: '#7CA982',
      boxShadow: "5px 5px 30px 11px rgba(0, 0, 0, 0.26)"
    };
    const title = {
      backgroundColor: '#7CA982',
      color: "white",
      fontSize: 25,
      padding: 2
    };
    const pstyle = {
      marginBottom: 0
    };
    const innertext = {
      fontFamily: 'Open Sans'
    }
    if (!this.state.isLoaded) {
      return (<div>Loading...</div>)
    } else {
      return (
        <Card className="box-style" style={cardStyle}>
          <Card.Header className="MontserratFont" style={title}>Upcoming</Card.Header>
          <ListGroup style={innertext} variant="flush">
            {DisplayEvents(this.state.data.upcoming)}
          </ListGroup>
        </Card>
      )
    }
  }
}

export default PopEvents;
