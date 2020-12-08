import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../NavBar/NavBar.js" 
import axios from 'axios'
import "./Register.css"
import {Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const url = "http://upandcoming-env.eba-icsyb2cg.us-east-1.elasticbeanstalk.com/auth/"

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {registered: false, incorrect: false}
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.realNameRef = React.createRef();
        this.emailRef = React.createRef();
        this.pfpRef = React.createRef();

    }

    switch = (e) => {
        console.log()
        this.setState({switchPage: true})
        e.preventDefault();
        console.log('switch')
        this.props.history.push('/signin');
    }

    registerAttempt = (e)  => {
        e.preventDefault();
        console.log("register attempt")
        const uName = this.usernameRef.current.value;
        const pwd = this.passwordRef.current.value;
        const realName = this.realNameRef.current.value;
        const email = this.emailRef.current.value;
        const pfpUrl = this.pfpRef.current.value
        if (pfpUrl == null || pfpUrl == undefined) {
            pfpUrl = ""
        }
        console.log(pfpUrl)
        // return;

        axios.post(url + "register", {
            username: uName,
            password: pwd,
            realname: realName,
            email: email,
            pfp: pfpUrl
        }).then((result) => {
                if (result.data.message == "success") {
                    console.log("Registered success in! Token: ");
                    this.switch(e)
                } else {
                    console.log("Did not register");
                    this.setState({incorrect: true})
                     // switch page to proper url
                }},(err) => {
                    console.log("Did not register");
                    this.setState({incorrect: true})
                    console.log(err)
                }
            )
    }
 
    render() {
        const { incorrect } = this.state;
        let warn = <div></div>;
        if (incorrect) {
            warn = <div className="warning">Failed to register. Please try again with a new username.</div>
        }
        return(
            <div className = 'wrapper' style={{display: "block"}}>
                <div className = 'nav-bar' >
                        <Header />
                </div>
                <div className = "separator">

                </div>
                <div className='content'>
                    <div className="title">Register</div> 
                    {warn}
                <Form className="form">
                    <Form.Group className = "field" controlId="formBasicName">
                        <Form.Control ref={this.realNameRef} type="name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className = "field" controlId="formBasicUsername">
                        <Form.Control ref={this.usernameRef} type="name" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className = "field" controlId="formBasicEmail">
                        <Form.Control ref={this.emailRef} type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className = "field" controlId="formBasicPassword">
                        <Form.Control ref={this.passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className = "field" controlId="formBasicPfp">
                        <Form.Control ref={this.pfpRef} type="name" placeholder="Profile Picture link" />
                    </Form.Group>
                    {/* <Form.File ref={this.pfpRef}
                        id="custom-file"
                        label="Upload a profile picture (optional)!"
                        custom
                    /> */}

                    <Button className = "submitButton" onClick={(e) => this.registerAttempt(e)} id="register" variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <div className="subtext" onClick={(e) => this.switch(e)}>Already have an account?</div>
                </div>
            </div>
        )
        
    }
}



export default withRouter(Register);