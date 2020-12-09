import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import {Redirect} from "react-router-dom"

import '../css/CreateEventCard.css'

import axios from "axios";
const url = "http://upandcoming-env.eba-icsyb2cg.us-east-1.elasticbeanstalk.com/events/create";

class CreateEventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      startTime: '12:00',
      startDate: '1970-03-08',
      endTime: '12:00',
      endDate: '1970-03-08',
      user: JSON.parse(localStorage.getItem('user')),
      checked: false
    };
    this.nameRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.tagRef = React.createRef();
    this.organizationRef = React.createRef();
    this.emailRef = React.createRef();
    this.websiteRef = React.createRef();
    this.imageRef = React.createRef();
    this.addressOneRef = React.createRef();
    this.addressTwoRef = React.createRef();
    this.cityRef = React.createRef();
    this.stateRef = React.createRef();
    this.zipRef = React.createRef();

    this.createEvent = this.createEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCheck(event) {
    this.setState({checked: !this.state.checked})
  }

  createEvent = (e) => {
    if (!this.state.checked) {
      alert('Please confirm the details of your event')
    } else {
      e.preventDefault();
      const start = Date.parse(
        `${this.state.startDate} ${this.state.startTime}`
      );
      const end = Date.parse(
        `${this.state.endDate} ${this.state.endTime}`
      );

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
              this.setState({ submitted: false });
              alert('Please fill in all the required fields')
            }
          },
          (err) => {
            this.setState({ submitted: false });
            console.log(err)
          }
        )
        .catch((error) => {
          console.log(error);
        });
    }
  }

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
                  required
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
                  required
                  ref={this.organizationRef}
                  type="text"
                  className="placeholder-text-style"
                  placeholder="Enter the name of your organization"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="title-text-style">Tag</Form.Label>
                <Form.Control
                  required
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
                <Form.Control
                  required
                  className="placeholder-text-style"
                  onChange={this.handleChange}
                  value={this.state.startTime}
                  name="startTime"
                  type="time"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="title-text-style">Start Date:</Form.Label>
                <Form.Control
                  required
                  className="placeholder-text-style"
                  onChange={this.handleChange}
                  value={this.state.startDate}
                  name="startDate"
                  type="date"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="title-text-style">End Time:</Form.Label>
                <Form.Control
                  required
                  className="placeholder-text-style"
                  onChange={this.handleChange}
                  value={this.state.endTime}
                  name="endTime"
                  type="time"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="title-text-style">Start Date:</Form.Label>
                <Form.Control
                  required
                  className="placeholder-text-style"
                  onChange={this.handleChange}
                  value={this.state.endDate}
                  name="endDate"
                  type="date"
                />
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
                  required
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
                required
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
                  required
                  className="placeholder-text-style"
                  ref={this.cityRef}
                  type="text" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="title-text-style">State</Form.Label>
                <Form.Control
                  required
                  className="placeholder-text-style"
                  ref={this.stateRef}
                  as="select"
                  defaultValue="CA"
                >
                  <option>AL</option>
                  <option>AK</option>
                  <option>AZ</option>
                  <option>AR</option>
                  <option>CA</option>
                  <option>CO</option>
                  <option>CT</option>
                  <option>DE</option>
                  <option>FL</option>
                  <option>GA</option>
                  <option>HI</option>
                  <option>ID</option>
                  <option>IL</option>
                  <option>IN</option>
                  <option>IA</option>
                  <option>KS</option>
                  <option>KY</option>
                  <option>LA</option>
                  <option>ME</option>
                  <option>MD</option>
                  <option>MA</option>
                  <option>MI</option>
                  <option>MN</option>
                  <option>MS</option>
                  <option>MO</option>
                  <option>MT</option>
                  <option>NE</option>
                  <option>NV</option>
                  <option>NH</option>
                  <option>NJ</option>
                  <option>NM</option>
                  <option>NY</option>
                  <option>NC</option>
                  <option>ND</option>
                  <option>OH</option>
                  <option>OK</option>
                  <option>OR</option>
                  <option>PA</option>
                  <option>RI</option>
                  <option>SC</option>
                  <option>SD</option>
                  <option>TN</option>
                  <option>TX</option>
                  <option>UT</option>
                  <option>VT</option>
                  <option>VA</option>
                  <option>WA</option>
                  <option>WV</option>
                  <option>WI</option>
                  <option>WY</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label className="title-text-style">Zip</Form.Label>
                <Form.Control
                  required
                  className="placeholder-text-style"
                  ref={this.zipRef}
                  type="text" />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" onChange={this.handleCheck} checked={this.state.checked} name="checked" label="Confirm" />
            </Form.Group>

            <div className="butn-padding">
              <Button
                className="submit-button"
                onClick={(e) => this.createEvent(e)}
                type="submit"
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
