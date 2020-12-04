import React, { Component } from "react";
import { Card, ListGroup, Row, Col } from 'react-bootstrap';
import "./PopularEvents.css"
import axios from 'axios'

const url = "http://ec2-3-86-143-220.compute-1.amazonaws.com:3000/events/get"

const EventRow = ({ event }) => {
  return (
    <ListGroup.Item>
      <Row noGutters>
        <p style={ { marginBottom:0 } }>{event.name}</p>
        <Col className="d-flex justify-content-end">
          <p style={ { marginBottom:0 } }>{new Date(event.startDate).toString().slice(4, 15)}</p>
        </Col>
      </Row>
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
      backgroundColor: '#7CA982'
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
    if (!this.state.isLoaded) {
      return (<div>Loading...</div>)
    } else {
      return (
        <Card style={cardStyle}>
          <Card.Header className="MontserratFont" style={title}>Upcoming</Card.Header>
          <ListGroup variant="flush">
            {DisplayEvents(this.state.data.upcoming)}
          </ListGroup>
        </Card>
      )
    }
  }
}

export default PopEvents;
