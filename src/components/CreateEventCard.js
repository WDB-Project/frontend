import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import {Redirect} from "react-router-dom"
import TimePicker from "react-bootstrap-time-picker";

import '../css/CreateEventCard.css'

import axios from "axios";
const url = "http://upandcoming-env.eba-icsyb2cg.us-east-1.elasticbeanstalk.com/events/create";

class CreateEventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      startTime: 0,
      endTime: 0,
      user: JSON.parse(localStorage.getItem('user'))
    };
    this.nameRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.tagRef = React.createRef();
    this.organizationRef = React.createRef();
    this.startTimeRef = React.createRef();
    this.startDayRef = React.createRef();
    this.startMonthRef = React.createRef();
    this.startYearRef = React.createRef();
    this.endTimeRef = React.createRef();
    this.endDayRef = React.createRef();
    this.endMonthRef = React.createRef();
    this.endYearRef = React.createRef();
    this.emailRef = React.createRef();
    this.websiteRef = React.createRef();
    this.imageRef = React.createRef();
    this.addressOneRef = React.createRef();
    this.addressTwoRef = React.createRef();
    this.cityRef = React.createRef();
    this.stateRef = React.createRef();
    this.zipRef = React.createRef();

    this.createEvent = this.createEvent.bind(this);
    this.handleTimeChangeStart = this.handleTimeChangeStart.bind(this);
    this.handleTimeChangeEnd = this.handleTimeChangeEnd.bind(this);
  }

  handleTimeChangeStart(time) {
    this.setState({ startTime: time });
  }

  handleTimeChangeEnd(time) {
    this.setState({ endTime: time });
  }

  createEvent = (e) => {
    e.preventDefault();
    const start = Date.parse(
      `${this.startDayRef.current.value} ${this.startMonthRef.current.value} ${this.startYearRef.current.value}`
    ) + (this.state.startTime * 1000); // needs time
    const end = Date.parse(
      `${this.endDayRef.current.value} ${this.endMonthRef.current.value} ${this.endYearRef.current.value}`
    ) + (this.state.endTime * 1000); // needs time

    const eventAttributes = {
      name: this.nameRef.current.value,
      tag: this.tagRef.current.value,
      image: this.imageRef.current.value,
      description: this.descriptionRef.current.value,
      addressOne: this.addressOneRef.current.value,
      addressTwo: this.addressTwoRef.current.value,
      city: this.cityRef.current.value,
      state: this.stateRef.current.value,
      zip: this.zipRef.current.value,
      organization: this.organizationRef.current.value,
      website: this.websiteRef.current.value,
      contact: this.emailRef.current.value,
      startDate: start,
      endDate: end,
    };

    let config = {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    };

    axios
      .post(url, eventAttributes, config)
      .then(
        (result) => {
          if (result.data.message === "success") {
            console.log("Event created successfully");
            this.setState({ submitted: true });
            axios.put("http://upandcoming-env.eba-icsyb2cg.us-east-1.elasticbeanstalk.com/profile/create", {id: this.state.user._id, event: result.data.id}, config).then(
              (result) => {

              }, (err) => {
                console.log(err)
              }
            )
          } else {
            console.log("Failed to create Event");
            this.setState({ submitted: false });
            // switch page to proper url
          }
        },
        (err) => {
          console.log("Error raised");
          this.setState({ submitted: false });
          console.log(err);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  };


  render() {
    const cardStyle = {
      padding: 30,
      width: 1000,
      backgroundColor: '#7CA982',
      boxShadow: "5px 5px 30px 11px rgba(0, 0, 0, 0.26)"
    };

    if (this.state.submitted === true) {
      return (<Redirect path="/browse" />)
    } else {
      return (
        <div>
          <Form style={cardStyle}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="title-text-style">Event Name</Form.Label>
                <Form.Control
                  ref={this.nameRef}
                  size="lg"
                  type="text"
                  className="placeholder-text-style"
                  placeholder="Enter event name"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="title-text-style">Description</Form.Label>
                <Form.Control
                required
                  ref={this.descriptionRef}
                  type="text"
                  className="placeholder-text-style"
                  placeholder="Enter event description"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="title-text-style">Organization</Form.Label>
                <Form.Control
                  ref={this.organizationRef}
                  type="text"
                  className="placeholder-text-style"
                  placeholder="Enter the name of your organization"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="title-text-style">Tag</Form.Label>
                <Form.Control
                  className="placeholder-text-style"
                  ref={this.tagRef}
                  as="select">
                  <option>Food & Drink</option>
                  <option>Music</option>
                  <option>Professional</option>
                  <option>Social Good</option>
                  <option>Personal</option>
                  <option>Educational</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="title-text-style">Start Time:</Form.Label>
                <TimePicker
                  className="placeholder-text-style"
                  ref={this.startTimeRef}
                  onChange={this.handleTimeChangeStart}
                  value={this.state.startTime}
                  start="00:00"
                  end="23:45"
                  step={15}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="title-text-style">End Time:</Form.Label>
                <TimePicker
                  className="placeholder-text-style"
                  ref={this.endTimeRef}
                  onChange={this.handleTimeChangeEnd}
                  value={this.state.endTime}
                  start="00:00"
                  end="23:45"
                  step={15}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="title-text-style">Day</Form.Label>
                <Form.Control
                  className="placeholder-text-style"
                  ref={this.startDayRef}
                  type="text"
                  placeholder="1-31"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="title-text-style">Month</Form.Label>
                <Form.Control
                  className="placeholder-text-style"
                  ref={this.startMonthRef}
                  as="select">
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="title-text-style">Year</Form.Label>
                <Form.Control
                  className="placeholder-text-style"
                  ref={this.startYearRef}
                  type="text" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="title-text-style">Day</Form.Label>
                <Form.Control
                  className="placeholder-text-style"
                  ref={this.endDayRef}
                  type="text"
                  placeholder="1-31"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="title-text-style">Month</Form.Label>
                <Form.Control
                  className="placeholder-text-style"
                  ref={this.endMonthRef}
                  as="select">
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  className="placeholder-text-style"
                  ref={this.endYearRef}
                  type="text" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="title-text-style">Email</Form.Label>
                <Form.Control
                  className="placeholder-text-style"
                  ref={this.emailRef}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWebsite">
                <Form.Label className="title-text-style">Website</Form.Label>
                <Form.Control
                  className="placeholder-text-style"
                  ref={this.websiteRef}
                  type="text"
                  placeholder="Enter event website"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridImage">
                <Form.Label className="title-text-style">Image</Form.Label>
                <Form.Control
                  className="placeholder-text-style"
                  ref={this.imageRef}
                  type="text"
                  placeholder="Enter the link to the image"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label className="title-text-style">Address</Form.Label>
              <Form.Control
                className="placeholder-text-style"
                ref={this.addressOneRef}
                placeholder="1234 Main St"
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label className="title-text-style">Address 2</Form.Label>
              <Form.Control
                className="placeholder-text-style"
                ref={this.addressTwoRef}
                placeholder="Apartment, studio, or floor"
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="title-text-style">City</Form.Label>
                <Form.Control
                  className="placeholder-text-style"
                  ref={this.cityRef}
                  type="text" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="title-text-style">State</Form.Label>
                <Form.Control
                  className="placeholder-text-style"
                  ref={this.stateRef}
                  as="select">
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>Arizona</option>
                  <option>Arkansas</option>
                  <option>California</option>
                  <option>Colorado</option>
                  <option>Connecticut</option>
                  <option>Delaware</option>
                  <option>Florida</option>
                  <option>Georgia</option>
                  <option>Hawaii</option>
                  <option>Idaho</option>
                  <option>Illinois</option>
                  <option>Indiana</option>
                  <option>Iowa</option>
                  <option>Kansas</option>
                  <option>Kentucky</option>
                  <option>Louisiana</option>
                  <option>Maine</option>
                  <option>Maryland</option>
                  <option>Massachusetts</option>
                  <option>Michigan</option>
                  <option>Minnesota</option>
                  <option>Mississippi</option>
                  <option>Missouri</option>
                  <option>Montana</option>
                  <option>Nebraska</option>
                  <option>Nevada</option>
                  <option>New Hampshire</option>
                  <option>New Jersey</option>
                  <option>New Mexico</option>
                  <option>New York</option>
                  <option>North Carolina</option>
                  <option>North Dakota</option>
                  <option>Ohio</option>
                  <option>Oklahoma</option>
                  <option>Oregon</option>
                  <option>Pennsylvania</option>
                  <option>Rhode Island</option>
                  <option>South Carolina</option>
                  <option>South Dakota</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Utah</option>
                  <option>Vermont</option>
                  <option>Virginia</option>
                  <option>Washington</option>
                  <option>West Virginia</option>
                  <option>Wisconsin</option>
                  <option>Wyoming</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label className="title-text-style">Zip</Form.Label>
                <Form.Control
                  className="placeholder-text-style"
                  ref={this.zipRef}
                  type="text" />
              </Form.Group>
            </Form.Row>

            {/* <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            <div className="butn-padding">
              <Button
                className="submit-button"
                onClick={(e) => this.createEvent(e)}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      );
    }
  }
}

export default CreateEventCard;
