import React from "react";
import ReactDOM from "react-dom";
import Header from "../NavBar/NavBar.js";
import axios from "axios";
import ErrorPage from "../ErrorPage/ErrorPage";
import Event_Card from "../Event_Card/Event_Card";

const url = `http://upandcoming-env.eba-icsyb2cg.us-east-1.elasticbeanstalk.com/profile/get_events?id=`;

// `http://ec2-3-86-143-220.compute-1.amazonaws.com:3000`;
function myEvents(data) {
  return data && data.length > 0 ? (
    Repeater(data)
  ) : (
    <p id="nothing-to-see">Nothing to see here...</p>
  );
}

const Repeater = (items) => {
  console.log(items);
  if (!items || items.length == 0) {
    return <p id="nothing-to-see">Nothing to see here...</p>;
  }
  return (
    <div>
      <ul>
        <div>
          {items.map((event) => {
            return (
              <div class="individual-event">
                <Event_Card event={event} />
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

class Profile extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = { isLoaded: false, data: undefined };
    this.getEvents = this.getEvents.bind(this);
    // this.updateProfile = this.updateProfile.bind(this)
    this.buttonRef = React.createRef();
    this.state.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.state.user);
  }

  componentDidMount() {
    if (this.state.user) {
      this.getEvents();
      console.log(this.state.data);
    } else {
      this.setState({ isLoaded: false });
    }

    this._isMounted = true;
    try {
      // this.updateProfile();
    } catch (err) {
      console.log(err);
      this.setState({ isLoaded: false });
    }
  }

  getEvents() {
    console.log("hello");
    let config = {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    };
    axios
      .get(`http://upandcoming-env.eba-icsyb2cg.us-east-1.elasticbeanstalk.com/profile/basic?id=${this.state.user._id}`, config)
      .then((res) => {
        this.state.user = res.data

        axios
        .get(url + this.state.user._id, config)
        .then((response) => {
          this.setState({
            data: response.data,
          });
          axios.get(`http://upandcoming-env.eba-icsyb2cg.us-east-1.elasticbeanstalk.com/profile/get_myevents?id=${this.state.user._id}`, config)
          .then((res) => {
            console.log(res.data)
            this.setState({
              isLoaded: true,
              myEvents: res.data
            })
          }, (err) => {
            this.setState({
              isLoaded: false,
              error: err
            })
          })
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            isLoaded: false,
            error: error,
          });
        });
      }, (err) => {
        console.log("uoh")
        console.log(err)
      })
  }

  // updateProfile() {
  //     let config = {headers : {"Authorization" : "Bearer " + localStorage.getItem('token')}}
  //     axios.get(url + `/auth/get`, config)
  //         .then((result) => {
  //             if (!result.data || result.data.upcoming) {
  //                 this.setState({isLoaded: false, error : "this user does not exist"})
  //             } else {
  //                 console.log(result.data)
  //             this.setState({
  //                 isLoaded: true,
  //                 data : result.data[0]
  //             })
  //             callback()}
  //             },
  //             (err) => {
  //                 console.log(err)
  //                 this.setState({isLoaded: false, error : err})
  //             }
  //         )
  // }

  // addVolunteer = () => {
  //   this.state.data.volunteers.push(JSON.stringify(this.state.user));
  //   let config = {
  //     headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  //   };
  //   let body = {
  //     id: this.state.data._id,
  //     volunteers: this.state.data.volunteers,
  //   };
  //   axios.put(url + "/events/signup", body, config).then(
  //     (result) => {
  //       this.setState({ join: "Leave Event", update: this.deleteVolunteer });
  //       this.componentDidMount();
  //     },
  //     (err) => {
  //       console.log(err);
  //       alert("Volunteer addition failed");
  //       this.state.data.volunteers.pop();
  //     }
  //   );
  // };

  render() {
    require("./Profile.css");
    if (!this.state.user || !this.state.isLoaded) {
      console.log("Loading");
      if (this.state.error) {
        return <ErrorPage />;
      } else {
        return <div>Loading...</div>;
      }
    } else {
      return (
        <div className="wrapper">
          <div className="nav-bar">
            <Header />
          </div>

          <div className="eventpage-content">
            <div className="realname">
              <div className="name-wrap">
                <img
                  className="profile-pic"
                  src="https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/m/mountain-gorilla_thumb.jpg"
                  alt=""
                />
                <h1 className="name">{this.state.user.realname}</h1>

                <p className="description-text">{this.state.user.username}</p>
              </div>
            </div>
            <div className="description-wrapper">
              <div className="flex-on-myevent">
                <div className="event-type">
                  <div className="banner">
                    <p className="banner-text">My Upcoming Events</p>
                    <div>{myEvents(this.state.data.upcoming)}</div>
                  </div>
                </div>
                <div className="event-type">
                  <div className="banner">
                    <p className="banner-text">My Past Events</p>
                  </div>
                  {myEvents(this.state.data.past)}
                </div>
                <div className="event-type">
                  <div className="banner">
                    <p className="banner-text">Events Created By Me</p>
                  </div>
                  {Repeater(this.state.myEvents)}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Profile;
