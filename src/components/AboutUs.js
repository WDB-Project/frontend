import React, { Component } from 'react';

import Humans1 from '../images/Humans1.png'
import Humans2 from '../images/Humans2.png'
import LinkedIn from '../images/linkedin.png'
import Email from '../images/mail.png'
import Anjan from '../images/Anjan.png'
import Kim from '../images/Kim.jpg'
import Isabel from '../images/Isabel.png'
import '../css/AboutUs.css'

class AboutUs extends Component {
  constructor(props) { //runs everytime the file starts
    super(props);
    this.state = {
      switch: "product"
    }
  }

  handleOnClick(type) {
    this.setState({switch: type})
  }

  render(){
    const ImgStyle = {
      width: 150,
      height: 150
    };

    const ItemPadding = {
      padding: 30
    };

    return(
      <div>

        <div className="d-flex flex-row justify-content-center justify-content-around">
          <button className="button-style"
            onClick={() => this.handleOnClick("product")}>Service
          </button>
          <button className="button-style"
            onClick={() => this.handleOnClick("people")}>People
          </button>
        </div>

        {(this.state.switch==="people") ?

          <div> {/*PEOPLE*/}

            <div className="d-flex flex-row justify-content-center justify-content-space-between move-down" >
              <div style={ItemPadding}>
                <img className="rounded-circle" style={ImgStyle} src={Humans1}></img>
                <div className="d-flex flex-column justify-content-center">
                  <h4 className="d-flex justify-content-center people-text">
                    Dhruv
                  </h4>
                  <span className="d-flex justify-content-center align-items-center people-description-text" style={{height: 48}}>Back End Developer</span>
                </div>
                <div className="d-flex flex-row justify-content-center justify-content-around">
                  <a href="https://wikipedia.com">
                    <img src={Email} className="icon-style"/>
                  </a>
                  <a href="https://google.com">
                    <img src={LinkedIn} className="icon-style"/>
                  </a>
                </div>
              </div>

              <div style={ItemPadding}>
                <img className="rounded-circle" style={ImgStyle} src={Kim}></img>
                <h4 className="d-flex justify-content-center people-text">
                  Kim
                </h4>
                <div className="d-flex flex-column">
                  <span className="d-flex justify-content-center people-description-text">Front End Developer</span>
                  <span className="d-flex justify-content-center people-description-text">UI Designer</span>
                </div>
                <div className="d-flex flex-row justify-content-center justify-content-around">
                  <a href="https://wikipedia.com">
                    <img src={Email} className="icon-style"/>
                  </a>
                  <a href="https://google.com">
                    <img src={LinkedIn} className="icon-style"/>
                  </a>
                </div>
              </div>

              <div style={ItemPadding}>
                <img className="rounded-circle" style={ImgStyle} src={Humans1}></img>
                <h4 className="d-flex justify-content-center people-text">
                  Guatam
                </h4>
                <span className="d-flex justify-content-center align-items-center people-description-text" style={{height: 48}}>Back End Developer</span>
                <div className="d-flex flex-row justify-content-center justify-content-around">
                  <a href="https://wikipedia.com">
                    <img src={Email} className="icon-style"/>
                  </a>
                  <a href="https://google.com">
                    <img src={LinkedIn} className="icon-style"/>
                  </a>
                </div>
              </div>

              <div style={ItemPadding}>
                <img className="rounded-circle" style={ImgStyle} src={Isabel}></img>
                <h4 className="d-flex justify-content-center people-text">
                  Isabel
                </h4>
                <div className="d-flex flex-column">
                  <span className="d-flex justify-content-center people-description-text">Front End Developer</span>
                  <span className="d-flex justify-content-center people-description-text">UI Designer</span>
                </div>
                <div className="d-flex flex-row justify-content-center justify-content-around">
                  <a href="https://wikipedia.com">
                    <img src={Email} className="icon-style"/>
                  </a>
                  <a href="https://google.com">
                    <img src={LinkedIn} className="icon-style"/>
                  </a>
                </div>
              </div>

              <div style={ItemPadding}>
                <img className="rounded-circle" style={ImgStyle} src={Anjan}></img>
                <h4 className="d-flex justify-content-center people-text">
                  Anjan
                </h4>
                <span className="d-flex justify-content-center align-items-center people-description-text" style={{height: 48}}>Back End Developer</span>
                <div className="d-flex flex-row justify-content-center justify-content-around">
                  <a href="https://wikipedia.com">
                    <img src={Email} className="icon-style"/>
                  </a>
                  <a href="https://google.com">
                    <img src={LinkedIn} className="icon-style"/>
                  </a>
                </div>
              </div>
            </div>

          </div>
        :
          <div> {/*PRODUCT*/}
            <div className="d-flex flex-row justify-content-center justify-content-around align-items-center">
              <img src={Humans2} className="humans-2"/>
              <h3 className="product-text">
                Up&Coming allows anyone to find relevant upcoming events and aids in the creation of events.
                It’s a convenient platform for you to share and relay information about your events and discover new events.
              </h3>
            </div>
          </div>
        }

      </div>
    )
  }
}

export default AboutUs;
