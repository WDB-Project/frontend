import logo from './logo.svg';
import './App.css';
import EventPage from  './components/EventPage/EventPage'
import Header from './components/NavBar/NavBar'
import SignIn from './components/SignIn/SignIn'

import Register from './components/Register/Register'
import {Redirect} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/events" component={EventPage} />

      </Switch>
  </Router>
      // <EventPage eventID = "test_volunteer_event" />
  );
}

export default App;
