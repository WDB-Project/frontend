import React, { Component } from "react";
import CreateEventCard from './Create_Event_Card'
import Header from '../NavBar/NavBar'
import './CreateEventPage.css'

class CreateEventPage extends Component {
  render(){
    return(
      <div className="site-background">
        <Header />
        <div className="d-flex justify-content-center padding">
          <CreateEventCard />
        </div>
      </div>
    )

  }

}
export default CreateEventPage;
