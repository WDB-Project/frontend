import React, { Component } from "react";
import CreateEventCard from './Create_Event_Card'
import Header from '../NavBar/NavBar'
import './CreateEventPage.css'

class CreateEventPage extends Component {
  render(){
    return(
      <div className="site-background">
        <Header />
        <div className="position">

          <svg className="blob2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#243C36" d="M32.2,-4C39.2,11.1,40.7,34.6,26.7,47.1C12.8,59.7,-16.6,61.5,-38.7,46.9C-60.9,32.3,-75.9,1.4,-68.2,-14.7C-60.6,-30.7,-30.3,-31.9,-8.8,-29.1C12.6,-26.2,25.2,-19.2,32.2,-4Z" transform="translate(100 100)" />
          </svg>

          <svg className="blob4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#E0EEC6" d="M25.9,-16.8C30.2,4.8,28,20.2,13.1,35C-1.8,49.8,-29.4,64.1,-43.7,54.9C-58.1,45.7,-59.3,13,-49.8,-15.8C-40.3,-44.5,-20.2,-69.4,-4.7,-67.9C10.8,-66.4,21.6,-38.4,25.9,-16.8Z" transform="translate(100 100)" />
          </svg>

          <svg className="blob5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#243C36" d="M49,-8.2C57.3,9.5,53.5,38.9,35.9,52.4C18.3,65.9,-13.1,63.5,-25.5,50.8C-37.9,38.1,-31.3,15,-23.9,-1.5C-16.5,-18,-8.2,-27.9,6.1,-29.9C20.4,-31.9,40.8,-25.9,49,-8.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="d-flex justify-content-center card-style">
          {/**/}
          <CreateEventCard />
        </div>
      </div>
    )

  }

}
export default CreateEventPage;
