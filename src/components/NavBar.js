import React, { Component } from "react";
import createHistory from 'history/createBrowserHistory'
import {
  Container, Row, Col, Form, Button, Navbar, Nav,
  NavLink, NavItem, 
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

import '../css/NavBar.css';

class Header extends Component{

  signout = (e) => {
    console.log()
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.props.history.push('/home');

  }

  signin = (e) => {
    e.preventDefault()
    const history = createHistory()
    history.push('/signin')
    history.go(0)
  }

  create = (e) => {
    e.preventDefault()
    const history = createHistory()
    if (!(localStorage.getItem('user') && localStorage.getItem('token'))) {
      history.push('/signin')
    } else {
      history.push('/create')
    }
    history.go(0)
  }
  render(){

    const navStyle = {
      backgroundColor: "#243E36",
      height: 75
    };

    const buttonStyle = {
      backgroundColor: "#7CA982",
      color: "white",
      fontFamily: 'Montserrat',
      fontSize: 14
    };

    const rightPadding = {
      padding: 40
    }

    const browseStyle = {
      color: 'white',
      padding: 40
    }
    if (localStorage.getItem('token') || localStorage.getItem('user')) {
      let pfp = "https://i.stack.imgur.com/34AD2.jpg"
      let user = JSON.parse(localStorage.getItem('user'))
      if (user.profilepic && user.profilepic !== "") {
        pfp = user.profilepic
      }
      return (
        <div>
          <Navbar fixed="top" expand="xs" className="border-bottom border-gray" style={navStyle}>

            <Container>
              <Row noGutters className="position-relative w-100 align-items-center">

                <Col className="d-none d-lg-flex justify-content-start">
                  <Nav className="mrx-auto" navbar>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold font" style={{color: "#7CA982", fontSize: 25}} href="/">Up&Coming</NavLink>
                  </NavItem>

                  </Nav>
                </Col>


                <Col className="d-none d-lg-flex justify-content-end">
                  <NavLink className="font" style={browseStyle} href="/browse">Browse</NavLink>
                  <Form inline>
                      <Button onClick = {(e) => this.create(e)} className="submit-button" outline>Create Event</Button>
                  </Form>
                </Col>
                <NavItem className="d-flex align-items-center justify-content-end">
                  <NavLink className="font-weight-bold" style={rightPadding} href="/profile">
                    <img src={pfp} alt="avatar" className="nav-profile-pic" />
                  </NavLink>
                </NavItem>
                <NavItem className="d-flex align-items-center justify-content-end">
                  <Form inline>
                    <Button style={buttonStyle} outline onClick={(e) => this.signout(e)}>Sign Out</Button>
                  </Form>
                </NavItem>


              </Row>
            </Container>

          </Navbar>
        </div>
      )
    }
    else{
      return (
        <div>
          <Navbar fixed="top" light expand="xs" className="border-bottom border-gray" style={navStyle}>

            <Container>
              <Row noGutters className="position-relative w-100 align-items-center">

                <Col className="d-none d-lg-flex justify-content-start">
                  <Nav className="mrx-auto" navbar>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold font" style={{color: "#7CA982", fontSize: 25}} href="/">Up&Coming</NavLink>
                  </NavItem>

                  </Nav>
                </Col>


                <Col className="d-none d-lg-flex justify-content-end">
                  <NavLink className="font" style={browseStyle} href="/browse">Browse</NavLink>
                  <Form inline>
                      <Button onClick = {(e) => this.create(e)}style={buttonStyle} outline>Create Event</Button>
                  </Form>
                </Col>
                <NavItem style={{marginLeft: 25}} className="d-flex align-items-center justify-content-end">
                  <Form inline>
                    <Button style={buttonStyle} outline onClick={(e) => this.signin(e)}>Sign In</Button>
                  </Form>
                </NavItem>

              </Row>
            </Container>

          </Navbar>
        </div>
      )
    }
  }

}

export default withRouter(Header);
