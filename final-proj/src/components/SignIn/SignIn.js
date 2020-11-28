import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../NavBar/NavBar.js" 
import axios from 'axios'
import "./SignIn.css"
import {Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
const dbUrl = "localhost:3000/auth/"
class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isSignIn: true}
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }
    loginAttempt = (e)  => {
        e.preventDefault();
        console.log("login attempt")
        const uName = this.usernameRef.current.value;
        const pwd = this.passwordRef.current.value;
        console.log(uName);
        console.log(pwd);
        const json = JSON.stringify({ answer: 42 });
        axios.post("http://localhost:3000/auth/login", {
            username: uName,
            password: pwd
        }).then((result) => {
            console.log(result)
                if (result.data.message == "Success!") {
                    console.log("Logged in! Token: " + result.token);
                    window.open("//google.com", '_blank');
                    // switch page to proper url
                } else {
                    console.log("Did not log in");
                    window.open("//youtube.com", '_blank');
                     // switch page to proper url
                }},(err) => {
                    console.log(err)
                    this.setState({isLoaded: false, error : err})
                }
            )
    }

    signupAttempt() {
        axios.post("http://ec2-3-86-143-220.compute-1.amazonaws.com:3000/events/get", {name : this.props.eventID})
            .then((result) => {
                if (!result.data) {
                    this.setState({isLoaded: false, error : "this event does not exist"})
                } else {
                this.setState({
                    isLoaded: true,
                    data : result.data
                })}},
                (err) => {
                    console.log(err)
                    this.setState({isLoaded: false, error : err})
                }
            )
    }

    render() {
        if (this.state.isSignIn) {
            return(
                <div className = 'wrapper' style={{display: "block"}}>
                    <div className = 'nav-bar' >
                            <Header />
                    </div>
                    <div className = "separator">

                    </div>
                    <div className='content'>
                        <div className="title">Sign In</div> 
                        
                    <Form className="form">
                        <Form.Group className = "field" controlId="formBasicUsername">
                            <Form.Control ref={this.usernameRef} type="name" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className = "field" controlId="formBasicPassword">
                            <Form.Control ref={this.passwordRef} type="password" placeholder="Password" />
                        </Form.Group>

                        <Button className = "submitButton" id="login" onClick={(e) => this.loginAttempt(e)} variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <div className="subtext" onClick={() => {this.setState({isSignIn: !this.state.isSignIn})}}>Don't have an account?</div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className = 'wrapper' style={{display: "block"}}>
                    <div className = 'nav-bar' >
                            <Header />
                    </div>
                    <div className = "separator">

                    </div>
                    <div className='content'>
                        <div className="title">Register</div> 
                        
                    <Form className="form">
                        <Form.Group className = "field" controlId="formBasicName">
                            <Form.Control type="name" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className = "field" controlId="formBasicUsername">
                            <Form.Control type="name" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className = "field" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className = "field" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button className = "submitButton" id="register" variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                    <div className="subtext" onClick={() => {this.setState({isSignIn: !this.state.isSignIn})}}>Already have an account?</div>
                    </div>
                </div>
            )
        }
    }
}



export default SignIn;