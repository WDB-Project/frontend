import React, { Component } from 'react';
import { render } from 'react-dom';
import Humans1 from '../Home_Page/Humans1.png'
import Humans2 from '../Home_Page/Humans2.png'
import './AboutUs.css'
import {Button} from "react-bootstrap";

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
    }
    return(
      <div>
        <div>
          <Button
            onClick={() => this.handleOnClick("product")}>Product
          </Button>
          <Button
            onClick={() => this.handleOnClick("people")}>People
          </Button>
        </div>

          {(this.state.switch==="people") ? <div>

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

            </div></div> : <div>product stuff alsdjflaksdjfk</div>}

        </div>
    )
  }
}

export default AboutUs;
