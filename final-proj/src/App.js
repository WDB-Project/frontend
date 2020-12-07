import logo from "./logo.svg";
import "./App.css";
import EventPage from "./components/EventPage/EventPage";
import GetEventID from "./components/EventPage/getEventID";
import Header from "./components/NavBar/NavBar";
import SignIn from "./components/SignIn/SignIn";
import React, { Component } from "react";
import Browse_Content from "./components/Browse_Content/browse_content";
import PopEvents from "./components/Popular_Events/Popular_Events";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import HomePage from "./components/Home_Page/Home_Page";
import CreateEventCard from "./components/Create_Event_Page/Create_Event_Card";
import Event_Card from "./components/Event_Card/Event_Card";

import Register from './components/Register/Register'
import AboutUs from './components/AboutUs/AboutUs'
import Profile from './components/Profile/Profile'
import CreateEventPage from './components/Create_Event_Page/Create_Event_Page'

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
            <Browse_Content />
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
