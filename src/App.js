import React from "react";
import SignIn from "./components/SignIn/SignIn";
import BrowseContent from "./components/Browse_Content/browse_content";
import HomePage from "./components/Home_Page/Home_Page";
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import CreateEventPage from './components/Create_Event_Page/Create_Event_Page'
import GetEventID from "./components/EventPage/getEventID";

import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
      <Route path="/profile">
          <div className="profile-wrapper">
            <Profile />
          </div>
        </Route>
        <Route path="/signin">
          <div className="signin-wrapper background-img">
            <SignIn />
          </div>
        </Route>
        <Route path="/register">
          <div className="signin-wrapper background-img">
            <Register />
          </div>
        </Route>
        <Route path="/browse">
          <div>
            <BrowseContent />
          </div>
        </Route>
        <Route path="/home">
          <div>
            <HomePage />
          </div>
        </Route>
        <Route path="/create">
          <div>
            <CreateEventPage />
          </div>
        </Route>
        <Route path="/event/:id" children={<GetEventID />} />
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
