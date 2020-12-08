import React from "react";
import SignIn from "./pages/SignIn";
import BrowseContent from "./pages/BrowseContent";
import HomePage from "./pages/HomePage";
import Register from './pages/Register'
import Profile from './pages/Profile'
import CreateEventPage from './pages/CreateEventPage'
import GetEventID from "./components/GetEventID";

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
