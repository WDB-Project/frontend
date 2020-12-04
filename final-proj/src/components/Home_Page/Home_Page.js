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
          <div className="d-flex flex-column">
            <h1 className="title-style">Up&Coming</h1>
            <h4>
              subtitle blah blah blah blah blah
              blah blah blah
            </h4>
          </div>
          <div>
            <img src={Humans1} className="humans-style"/>
          </div>
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
