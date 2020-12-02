import React, { Component } from "react";
import { Form, Button, button } from 'react-bootstrap';
import "./SignInCard.css"

class SignInCard extends Component{
  render(){
    const buttonStyle = {
      backgroundColor: '#C2A83E',
      color: "black",
    };
    const textStyle ={
      color: "white",
      font: "Montserrat"
    };

    return (
      <div style={{width: 500, borderRadius: '5px!important'}}>
        <Form className="padding" style={{backgroundColor: '#7CA982'}}>
          <h2 className="MontserratFont title">Sign In</h2>
          <div>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={textStyle}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text style={textStyle} className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label style={textStyle}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button style={buttonStyle} type="submit">
              Submit
            </Button>
            <div className="d-flex flex-column align-items-center align-content-center" >
              <p style={{marginBottom: .75}}>Don't have an account?</p>
              <button type="button" class="btn btn-secondary btn-sm" style={buttonStyle}>
              Sign up!
              </button>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}

export default SignInCard;
