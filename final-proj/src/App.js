import logo from "./logo.svg";
import "./App.css";
import EventPage from "./components/EventPage/EventPage";
import GetEventID from "./components/EventPage/getEventID";
import Header from "./components/NavBar/NavBar";
import SignIn from "./components/SignIn/SignIn";
import React, { Component } from "react";
import Browse_Content from "./components/Browse_Content/browse_content";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import HomePage from './components/Home_Page/Home_Page'

import Register from './components/Register/Register'
function App() {
  return (
    <HomePage />
    // <Router>
    //   <Switch>
    //     <Route path="/signin">
    //       <div className="signin-wrapper">
    //         <SignIn />
    //       </div>
    //     </Route>
    //     <Route path="/register">
    //       <div className="signin-wrapper">
    //         <Register/>
    //       </div>
    //     </Route>
    //     <Route path="/home">
    //       <div>
    //         <Browse_Content />
    //       </div>
    //     </Route>
    //     <Route path="/event/:id" children={<GetEventID />} />
    //     <Route path="/">
    //       <Redirect to="/home" />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
