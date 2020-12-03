import React, { Component } from 'react';
import { render } from 'react-dom';
import Humans1 from '../Home_Page/Humans1.png'
import Humans2 from '../Home_Page/Humans2.png'
import './AboutUs.css'

class AboutUs extends Component {
  render(){
    const ImgStyle = {
      width: 150,
      height: 150
    };

    const ItemPadding = {
      padding: 30
    }
    return(
      <div>
        <div>

          <div className="d-flex flex-row justify-content-center justify-content-space-between" >
            <div style={ItemPadding}>
              <img className="rounded-circle" style={ImgStyle} src={Humans1}></img>
              <div className="d-flex flex-column justify-content-center">
                <h4>
                  Dhruv
                </h4>
                <span>Back End Developer</span>
              </div>
            </div>

            <div style={ItemPadding}>
              <img className="rounded-circle" style={ImgStyle} src={Humans1}></img>
              <h4>
                Guatam
              </h4>
              <span>Back End Developer</span>
            </div>

            <div style={ItemPadding}>
              <img className="rounded-circle" style={ImgStyle} src={Humans1}></img>
              <h4>
                Anjan
              </h4>
              <span>Back End Developer</span>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-center justify-content-space-between">
          <div style={ItemPadding}>
            <img className="rounded-circle" style={ImgStyle} src={Humans1}></img>
            <h4>
              Isabel
            </h4>
            <div className="d-flex flex-column">
              <span>Front End Developer</span>
              <span>UI Designer</span>
            </div>
          </div>

          <div style={ItemPadding}>
            <img className="rounded-circle" style={ImgStyle} src={Humans1}></img>
            <h4>
              Kim
            </h4>
            <div className="d-flex flex-column">
              <span>Front End Developer</span>
              <span>UI Designer</span>
            </div>
          </div>
          </div>

        </div>
      </div>
    )
  }
}

export default AboutUs;
