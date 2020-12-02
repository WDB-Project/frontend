import React, { Component } from "react";
import { Card, ListGroup, Row, Col } from 'react-bootstrap';
import "./PopularEvents.css"


class PopEvents extends Component{
  render(){
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
    return (
      <Card style={cardStyle}>
        <Card.Header className="MontserratFont" style={title}>Upcoming</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row noGutters>
              <p style={pstyle}>blah blah blah</p>
              <Col className="d-flex justify-content-end">
                <p style={pstyle}>date</p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row noGutters>
              <p style={pstyle}>blah blah blah</p>
              <Col className="d-flex justify-content-end">
                <p style={pstyle}>date</p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row noGutters>
              <p style={pstyle}>blah blah blah</p>
              <Col className="d-flex justify-content-end">
                <p style={pstyle}>date</p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row noGutters>
              <p style={pstyle}>blah blah blah</p>
              <Col className="d-flex justify-content-end">
                <p style={pstyle}>date</p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row noGutters>
              <p style={pstyle}>blah blah blah</p>
              <Col className="d-flex justify-content-end">
                <p style={pstyle}>date</p>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}

export default PopEvents;
