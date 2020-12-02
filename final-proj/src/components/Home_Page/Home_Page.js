import React, { Component } from "react";
import Header from '../NavBar/NavBar'
import PopEvents from  '../Popular_Events/Popular_Events'
import SignInCard from '../Sign_In/Sign_In_Card'

class HomePage extends Component{
  render(){
    return (
      <div>
        <Header />

        <div className="d-flex flex-row justify-content-around align-items-center" style={{height: 600, backgroundColor: '#F1F7ED'}}>
          <div className="d-flex flex-column">
            <h1>Up&Coming</h1>
            <h4>
              subtitle blah blah blah blah blah
              blah blah blah
            </h4>
          </div>
          <div>
            <img src={"./Humans1.png"}/>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-around align-items-center">
          <div style={{padding: 20}}>
            <PopEvents />
          </div>
          <div style={{padding: 20}}>
          <SignInCard />
          </div>
        </div>

      </div>
    )
  }
}

export default HomePage;
