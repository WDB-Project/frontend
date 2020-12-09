import React from "react";
import Header from "../components/NavBar";
import ErrorPage from "../components/ErrorPage";
import ProfileCard from "../components/ProfileCard";
import EventCard from "../components/EventCard";
import { withRouter } from "react-router-dom";

import axios from "axios";
const url = `http://upandcoming-env.eba-icsyb2cg.us-east-1.elasticbeanstalk.com/profile/`;

function myEvents(data, condition) {
  return data && data.length > 0 ? (
    Repeater2(data, condition)
  ) : (
    <p className="secondary-sans" id="nothing-to-see">
      Nothing to see here...
    </p>
  );
}

function myProfileArea(data) {
  return data ? (
    ProfileFormatter(data)
  ) : (
    <p className="secondary-sans" id="nothing-to-see">
      Nothing to see here...
    </p>
  );
}
const ProfileFormatter = (data) => {
  console.log(data);
  return (
    <ProfileCard
      user={data.user}
      events={data.events}
      myEvents={data.myEvents}
    />
  );
};

const Repeater = (items, condition) => {
  console.log(condition);
  if (!items || items.length === 0) {
    return (
      <p className="secondary-sans" id="nothing-to-see">
        Nothing to see here...
      </p>
    );
  }
  return (
    <div>
      <ul>
        <div>
          {items.map((event) => {
            console.log(<EventCard event={event} condition={condition} />);
            return (
              <div class="individual-event">
                <EventCard event={event} condition={condition} />
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

const Repeater2 = (items) => {
  const date = Date.now();
  const displayItems = [];
  for (const event of items) {
    if (event.startDate > date) {
      const eventCard1 = (event) => {
        return (
          <div>
            <ul>
              <div class="individual-event">
                <EventCard event={event} condition="start" />
              </div>
            </ul>
          </div>
        );
      };
      displayItems.push(eventCard1(event));
    } else if (event.endDate > date) {
      const eventCard2 = (event) => {
        return (
          <div>
            <ul>
              <div class="individual-event">
                <EventCard event={event} condition="ongoing" />
              </div>
            </ul>
          </div>
        );
      };
      displayItems.push(eventCard2(event));
    } else {
      const eventCard3 = (event) => {
        return (
          <div>
            <ul>
              <div class="individual-event">
                <EventCard event={event} condition="end" />
              </div>
            </ul>
          </div>
        );
      };
      displayItems.push(eventCard3(event));
    }
  }
  return displayItems;
};

class Profile extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = { isLoaded: false, data: undefined };
    this.getProfileInfo = this.getProfileInfo.bind(this);
    this.buttonRef = React.createRef();
    this.pfpRef = React.createRef();

    this.state.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.state.user);
  }

  componentDidMount() {
    if (this.state.user) {
      this.getProfileInfo();
    } else {
      this.setState({ isLoaded: false });
    }

    this._isMounted = true;
    try {
    } catch (err) {
      console.log(err);
      this.setState({ isLoaded: false });
    }
  }

  async getProfileInfo() {
    console.log("get profile info");
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .get(url + "basic", config)
      .then((res) => {
        let result = res.data;
        this.setState({
          user: result.userProfile,
          events: result.userEvents,
          myEvents: result.myEvents,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoaded: true, error: err });
      });
  }
  showWidget = (e) => {
    if (this.state.noMoreUpload) {
      alert("Only 1 profile picture upload allowed.");
      return;
    }
    e.preventDefault();
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dqfre6apd",
        uploadPreset: "nbmcvhae",
      },
      (error, result) => {
        this.checkUploadResult(result);
      }
    );
    console.log("showWidget");
    widget.open();
  };
  checkUploadResult = (resultEvent) => {
    if (resultEvent.event === "success") {
      console.log(resultEvent.info.secure_url);
      this.setState({
        noMoreUpload: true,
        profileUrl: resultEvent.info.secure_url,
      });
      let newUrl = resultEvent.info.secure_url;
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .post(
          url + "updateProfilePic",
          {
            pfp: newUrl,
          },
          config
        )
        .then(
          (result) => {
            if (result.data.message === "success") {
              let user1 = this.state.user;
              user1.profilepic = newUrl;
              localStorage.setItem("user", JSON.stringify(user1));
            } else {
              console.log("Did not register");
            }
            this.setState({ modalRequested: false });
          },
          (err) => {
            console.log("Did not register");
            console.log(err);
            this.setState({ modalRequested: false });
          }
        );
    }
  };
  render() {
    require("../css/Profile.css");
    if (!this.state.user || !this.state.isLoaded) {
      console.log("Loading");
      if (this.state.error) {
        return <ErrorPage />;
      } else {
        return <div>Loading...</div>;
      }
    } else {
      let pfp = "https://i.stack.imgur.com/34AD2.jpg";
      if (this.state.user.profilepic && this.state.user.profilepic !== "") {
        pfp = this.state.user.profilepic;
      }
      return (
        <div className="wrapper">
          <div className="nav-bar">
            <Header pfp={pfp} />
          </div>

          <div className="eventpage-content">
            <div className="profile-personal">
              <div className="name-wrap">
                <img className="profile-pic" src={pfp} alt="" />
                <div className="centered-text">
                  <a href="" onClick={(e) => this.showWidget(e)}>
                    Change photo
                  </a>
                </div>
                <div className="profile-box">
                  <div className="banner">
                    <p className="banner-text primary-mont">About Me</p>
                    <div>
                      {myProfileArea({
                        user: this.state.user,
                        events: this.state.events,
                        myEvents: this.state.myEvents,
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="description-wrapper">
              <div className="flex-on-myevent">
                <div className="event-type">
                  <div className="banner">
                    <p className="banner-text primary-mont">
                      My Upcoming Events
                    </p>
                    <div>{myEvents(this.state.events.upcoming)}</div>
                  </div>
                </div>
                <div className="event-type">
                  <div className="banner">
                    <p className="banner-text primary-mont">
                      My Ongoing Events
                    </p>
                    <div>{myEvents(this.state.events.ongoing)}</div>
                  </div>
                </div>
                <div className="event-type">
                  <div className="banner">
                    <p className="banner-text primary-mont">My Past Events</p>
                    <div>{myEvents(this.state.events.past)}</div>
                  </div>
                </div>
                <div className="event-type">
                  <div className="banner">
                    <p className="banner-text primary-mont">
                      Events Created By Me
                    </p>
                  </div>
                  {myEvents(this.state.myEvents)}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Profile);
