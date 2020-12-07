import React, { Component } from "react";
import './NavBar.css';
import Browse_Content from '../Browse_Content/browse_content';
import createHistory from 'history/createBrowserHistory'
import {Link} from 'react-router-dom'
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const AVATAR = 'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/m/mountain-gorilla_thumb.jpg';

class Header extends Component{
  constructor(props) {
    super(props)
  }

  signout = (e) => {
    console.log()
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    const history = createHistory();
    history.go(0)

}

  create = (e) => {
    e.preventDefault()
    const history = createHistory()
    history.push('/create')
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
                      <Button onClick = {(e) => this.create(e)}style={buttonStyle} outline>Create Event</Button>
                  </Form>
                </Col>
                <NavItem className="d-flex align-items-center justify-content-end">
                  <NavLink className="font-weight-bold" style={rightPadding} href="/profile">
                    <img src={AVATAR} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
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
                <NavItem className="d-flex align-items-center justify-content-end">
                  <NavLink className="font-weight-bold" style={rightPadding} href="/signin">
                    <img src={AVATAR} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
                  </NavLink>
                </NavItem>

              </Row>
            </Container>

          </Navbar>
        </div>
      )
    }
  }

}

export default Header;
