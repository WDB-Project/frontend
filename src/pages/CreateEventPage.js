import React, { Component } from "react";
import CreateEventCard from '../components/CreateEventCard.js'
import Header from '../components/NavBar.js'

import '../css/CreateEventPage.css'

class CreateEventPage extends Component {
  render(){
    return(
      <div className="site-background">
        <Header />
        <div className="position">
          <svg className="blob1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#E0EEC6" d="M54.3,-54.6C68.1,-53,75.6,-33.9,73.4,-17.3C71.1,-0.7,59,13.2,46,17.8C32.9,22.3,18.8,17.5,8.9,18.5C-0.9,19.6,-6.5,26.4,-9.7,25.7C-13,25,-13.8,16.7,-25.4,8.8C-37,0.9,-59.3,-6.8,-64,-16.6C-68.6,-26.5,-55.6,-38.6,-42,-40.3C-28.4,-41.9,-14.2,-33.1,3,-36.7C20.2,-40.3,40.4,-56.2,54.3,-54.6Z" transform="translate(100 100)" />
          </svg>

          <svg className="blob2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#243C36" d="M32.2,-4C39.2,11.1,40.7,34.6,26.7,47.1C12.8,59.7,-16.6,61.5,-38.7,46.9C-60.9,32.3,-75.9,1.4,-68.2,-14.7C-60.6,-30.7,-30.3,-31.9,-8.8,-29.1C12.6,-26.2,25.2,-19.2,32.2,-4Z" transform="translate(100 100)" />
          </svg>

          <svg className="blob4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#243C36" d="M25.9,-16.8C30.2,4.8,28,20.2,13.1,35C-1.8,49.8,-29.4,64.1,-43.7,54.9C-58.1,45.7,-59.3,13,-49.8,-15.8C-40.3,-44.5,-20.2,-69.4,-4.7,-67.9C10.8,-66.4,21.6,-38.4,25.9,-16.8Z" transform="translate(100 100)" />
          </svg>

          <svg className="blob5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#E0EEC6" d="M49,-8.2C57.3,9.5,53.5,38.9,35.9,52.4C18.3,65.9,-13.1,63.5,-25.5,50.8C-37.9,38.1,-31.3,15,-23.9,-1.5C-16.5,-18,-8.2,-27.9,6.1,-29.9C20.4,-31.9,40.8,-25.9,49,-8.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="d-flex justify-content-center card-style">
          <CreateEventCard />
        </div>
      </div>
    )

  }

}
export default CreateEventPage;
