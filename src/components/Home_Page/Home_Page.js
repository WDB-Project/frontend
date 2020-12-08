import React, { Component } from "react";
import Header from '../NavBar/NavBar'
import PopEvents from  '../Popular_Events/Popular_Events'
import SignInCard from '../SignIn/SignIn'
import Humans1 from './Humans1.png'
import AboutUs from '../AboutUs/AboutUs'
import './HomePage.css'

class HomePage extends Component{
  render(){
    return (
      <div>
        <Header />

        <div className="d-flex flex-row justify-content-around align-items-center" style={{height: 600, backgroundColor: '#F1F7ED'}}>
          <div>
            <h1 className="title-style">Up&Coming</h1>
            <h4 className="subtitle-style">
              events made easy
            </h4>
          </div>
          <div>
            <img src={Humans1} className="humans-style"/>
          </div>
        </div>

        <div>
          <svg className="home-blob1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#243C36" d="M35.8,-26C44.4,-5.8,47.9,11.9,41.1,28.2C34.3,44.4,17.2,59.1,0,59.1C-17.1,59.1,-34.3,44.4,-43.4,26.8C-52.6,9.2,-53.7,-11.2,-45.2,-31.4C-36.6,-51.5,-18.3,-71.4,-2.3,-70C13.6,-68.7,27.2,-46.1,35.8,-26Z" transform="translate(100 100)" />
          </svg>

          <svg className="home-blob2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#E0EEC6" d="M54.5,-38.9C65.3,-29.9,65.1,-7.5,56.7,6.3C48.3,20.2,31.6,25.5,17.1,30.6C2.6,35.8,-9.7,40.6,-19.7,37.2C-29.6,33.8,-37.4,22,-41.8,8C-46.3,-6.1,-47.5,-22.5,-40,-30.8C-32.5,-39.1,-16.2,-39.3,2.8,-41.6C21.8,-43.8,43.6,-48,54.5,-38.9Z" transform="translate(100 100)" />
          </svg>

          <svg className="home-blob3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#243C36" d="M50.2,-43.2C56.1,-32.7,45.6,-12.3,36.7,0.9C27.7,14.1,20.1,20.1,12.3,22.9C4.4,25.7,-3.8,25.2,-20.7,24.3C-37.6,23.3,-63.3,21.8,-72.1,9.1C-80.9,-3.6,-72.7,-27.6,-57.9,-40.2C-43.1,-52.7,-21.5,-53.9,0.3,-54.2C22.2,-54.4,44.3,-53.7,50.2,-43.2Z" transform="translate(100 100)" />
          </svg>

          <svg className="home-blob4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#E0EEC6" d="M58.9,-47C71.9,-30.7,74.9,-6.4,67.3,10.8C59.8,28,41.5,38.2,23.1,46.4C4.7,54.7,-13.9,61,-27.5,55.2C-41.1,49.4,-49.8,31.3,-52.4,13.7C-55,-3.9,-51.5,-21.1,-41.8,-36.7C-32.1,-52.4,-16,-66.4,3.5,-69.1C23,-71.9,45.9,-63.4,58.9,-47Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="d-flex flex-row justify-content-around align-items-center">
          <div className="card-padding" style = {{marginLeft: "50px"}}>
            <PopEvents />
          </div>
          <div className="card-padding" style = {{marginRight: "150px"}}>
            <SignInCard />
          </div>
        </div>

        <div>
          <div className="d-flex justify-content-center about-text-padding">
            <h2 className="about-style">About</h2>
          </div>
          <AboutUs />
        </div>



      </div>
    )
  }
}

export default HomePage;
