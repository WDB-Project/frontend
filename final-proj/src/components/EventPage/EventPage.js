import React from "react";
import ReactDOM from "react-dom";
import Header from "../NavBar/NavBar.js";
import axios from "axios";
import ErrorPage from "../ErrorPage/ErrorPage";
const url = `http://ec2-3-86-143-220.compute-1.amazonaws.com:3000`;

class EventPage extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
    this.updateEvent = this.updateEvent.bind(this);
    this.buttonRef = React.createRef();
    this.state.user = JSON.parse(localStorage.getItem("user"));
  }

  componentDidMount() {
    this._isMounted = true;
    try {
      this.updateEvent(() => {
        var volunteers = [];
        for (const [index, value] of this.state.data.volunteers.entries()) {
          if (JSON.parse(value)) {
            volunteers.push(
              <li className="volunteer-list" key={index}>
                {JSON.parse(value).realname}
              </li>
            );
          }
        }

        this.setState({ volunteers: volunteers });
        if (!this.state.user) {
          this.setState({
            button: (
              <button className="button-go" ref={this.buttonRef}>
                Sign In to Join
              </button>
            ),
          });
        } else if (
          this.state.data.volunteers.some(item => JSON.parse(item) && JSON.parse(item)._id === this.state.user._id)
        ) {
          this.setState({
            button: (
              <button
                className="button-go"
                onClick={this.deleteVolunteer}
                ref={this.buttonRef}
              >
                Leave Event
              </button>
            ),
          });
        } else {
          this.setState({
            button: (
              <button
                className="button-go"
                onClick={this.addVolunteer}
                ref={this.buttonRef}
              >
                Join this Event!
              </button>
            ),
          });
        }
      });
    } catch (err) {
      console.log(err);
      this.setState({ isLoaded: false });
    }
  }

  updateEvent(callback) {
    axios.get(url + `/events/get?_id=${this.props.eventID}`).then(
      (result) => {
        if (!result.data || result.data.upcoming) {
          this.setState({
            isLoaded: false,
            error: "this event does not exist",
          });
        } else {
          this.setState({
            isLoaded: true,
            data: result.data[0],
          });
          let config = {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") },
          };
          axios.get(url + `/profile/basic?uid=${this.state.user._id}`, config).then(
            (result) => {
              this.setState({user: result.data})
              localStorage.setItem('user', JSON.stringify(result.data))
              callback()
            },
            (err) => {
              console.log(err)
              this.setState({isLoaded: false, error: err})
            }
          )
        }
      },
      (err) => {
        console.log(err);
        this.setState({ isLoaded: false, error: err });
      }
    );
  }

  addVolunteer = () => {
    this.state.data.volunteers.push(JSON.stringify(this.state.user));
    let config = {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    };
    let body = {
      id: this.state.data._id,
      volunteers: this.state.data.volunteers,
    };
    axios.put(url + "/events/signup", body, config).then(
      (result) => {
        this.setState({ join: "Leave Event", update: this.deleteVolunteer });
      },
      (err) => {
        console.log(err);
        alert("Volunteer addition failed");
        this.state.data.volunteers.pop();
      }
    );
    this.state.user.events.push(this.props.eventID)
    axios.put(url + "/profile/join", {id: this.state.user._id, events: this.state.user.events}, config).then(
      (result) => {
        this.componentDidMount();
      },
      (err) => {
        console.log(err)
        this.state.user.events.pop()
      }
    )
  };

  deleteVolunteer = () => {
    var index = this.state.data.volunteers.indexOf(
      JSON.stringify(this.state.user)
    );
    this.state.data.volunteers.splice(index, 1);
    let config = {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    };
    let body = {
      id: this.state.data._id,
      volunteers: this.state.data.volunteers,
    };
    axios.put(url + "/events/signup", body, config).then(
      (result) => {
        this.setState({ join: "Join This Event!", update: this.addVolunteer });
      },
      (err) => {
        console.log(err);
        alert("Volunteer deletion failed");
        this.state.data.volunteers.push(this.state.user);
      }
    );
    var userIndex = this.state.user.events.indexOf(
      this.props.eventID
    )
    this.state.user.events.splice(userIndex, 1)
    axios.put(url + "/profile/join", {id: this.state.user._id, events: this.state.user.events}, config).then(
      (result) => {
        this.componentDidMount();
      },
      (err) => {
        console.log(err)
        this.state.user.events.push(this.props.eventID)
      }
    )
  };


  render() {
    require('./EventPage.css')
    if (!this.state.isLoaded) {
      console.log("Loading");
      if (this.state.error) {
        return <ErrorPage />;
      } else {
        return <div>Loading...</div>;
      }
    }

    return (
      <div className="wrapper">
        <div className="nav-bar">
          <Header />
        </div>
        <div className="image">
          <img className="title-image" src={this.state.data.image} alt="" />
        </div>
        <div className="eventpage-content">
          <div className="name-signup">
            <div className="name-wrap">
              <h1 className="name">{this.state.data.name}</h1>
            </div>
            <div className="signup">
              <p
                className="detail-title-text"
                style={{ marginLeft: "20px", marginTop: "20px" }}
              >
                SIGN UP
              </p>

              <div className="signup-cont">
                <ol className="vol-wrapper">{this.state.volunteers}</ol>
              </div>
              <div className="add-vol">{this.state.button}</div>
            </div>
          </div>
          <div className="description">
            <div className="description-wrapper">
              <div className="detail-content">
                <div className="description-wrapper-sub">
                  <p
                    className="detail-title-text"
                    style={{ marginLeft: "20px", marginTop: "20px" }}
                  >
                    DESCRIPTION
                  </p>
                  <p className="event-detail-text" style={{ marginLeft: 30 }}>
                    {this.state.data.description}
                  </p>
                </div>
                <div className="event-details">
                  <div className="event-date">
                    <div className="event-detail-head">
                      <img
                        src="https://i.pinimg.com/originals/ff/22/c6/ff22c66b5f7d9b60ec981b2f7411ed0d.png"
                        className="event-detail-icon"
                      ></img>
                      <p className="detail-title-text">DATE:</p>
                    </div>
                    <p className="event-detail-text">
                      Start:{" "}
                      {new Date(this.state.data.startDate)
                        .toString()
                        .slice(4, 21)}
                    </p>
                    <p className="event-detail-text">
                      End:{" "}
                      {new Date(this.state.data.endDate)
                        .toString()
                        .slice(4, 21)}
                    </p>
                  </div>
                  <div className="event-location">
                    <div className="event-detail-head">
                      <img
                        src="data:image/png;base64,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"
                        className="event-detail-icon"
                      ></img>
                      <p className="detail-title-text">LOCATION:</p>
                    </div>
                    <p className="event-detail-text">
                      Location: {this.state.data.location}
                    </p>
                  </div>
                  <div className="event-contact">
                    <div className="event-detail-head">
                      <img
                        src="data:image/png;base64,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"
                        className="event-detail-icon"
                      ></img>
                      <p className="detail-title-text">CONTACT:</p>
                    </div>
                    <p className="event-detail-text">
                      Contact: {this.state.data.contact}
                    </p>
                  </div>
                  <div className="event-host">
                    <div className="event-detail-head">
                      <img
                        src="https://img.icons8.com/pastel-glyph/2x/person-male.png"
                        className="event-detail-icon"
                      ></img>
                      <p className="detail-title-text">HOSTED BY:</p>
                    </div>
                    <p className="event-detail-text">
                      Host: {this.state.data.organization}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventPage;
