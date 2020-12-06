import React from "react";
import ReactDOM from "react-dom";
import Header from "../NavBar/NavBar.js";
import axios from "axios";
import "./Profile.css";
import ErrorPage from "../ErrorPage/ErrorPage";
import Event_Card from "../Event_Card/Event_Card";

const url = "http://ec2-3-86-143-220.compute-1.amazonaws.com:3000/events/get";

// `http://ec2-3-86-143-220.compute-1.amazonaws.com:3000`;

const Repeater = (items) => {
  if (items == undefined) {
    return null;
  }
  return (
    <div>
      <ul>
        {items.map((event) => {
          return <Event_Card event={event} />;
        })}
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
  }

  componentDidMount() {
    this.getEvents();
    console.log(this.state.data);

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
    axios
      .get(url)
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
          isLoaded: true,
          error: error,
        });
      });
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
        this.componentDidMount();
      },
      (err) => {
        console.log(err);
        alert("Volunteer addition failed");
        this.state.data.volunteers.pop();
      }
    );
  };

  render() {
    if (!this.state.user) {
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
            <div className="description">
              <div className="description-wrapper">
                <div className="banner">
                  <p className="banner-text">My Upcoming Events</p>
                </div>
                <div>{Repeater(this.state.data?.upcoming)}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Profile;
