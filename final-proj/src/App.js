import logo from "./logo.svg";
import "./App.css";
import EventPage from "./components/EventPage/EventPage";
import Header from "./components/NavBar/NavBar";
import SignIn from "./components/SignIn/SignIn";
import React, { Component } from "react";
import Browse_Content from "./components/Browse_Content/browse_content";

function App() {
  return (
    <div>
      <Browse_Content />
      <SignIn />
    </div>
    // <EventPage eventID = "test_volunteer_event" />
  );
}

export default App;
