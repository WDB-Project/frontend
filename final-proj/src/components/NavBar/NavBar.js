import React, { Component } from "react";
import "./NavBar.css";

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

class Header extends Component{
  render(){
    const navStyle = {
      backgroundColor: "#243E36",
      height: 75
    };

    const buttonStyle = {
      backgroundColor: "#7CA982",
      color: "white",
    };

    const rightPadding = {
      padding: 40
    }

    return (
      <div>
        <Navbar fixed="top" light expand="xs" className="border-bottom border-gray" style={navStyle}>

          <Container>
            <Row noGutters className="position-relative w-100 align-items-center">

              <Col className="d-none d-lg-flex justify-content-start">
                <Nav className="mrx-auto" navbar>

                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold font" style={{color: "#7CA982"}} href="/">Up&Coming</NavLink>
                </NavItem>

                </Nav>
              </Col>

              <Col className="d-none d-lg-flex justify-content-end">
                <NavLink className="font-weight-bold" style={rightPadding} href="/">Browse</NavLink>
                <Form inline>
                  <Button type="submit" style={buttonStyle} outline>Create Event</Button>
                </Form>
              </Col>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" style={rightPadding} href="/">
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

export default Header;
