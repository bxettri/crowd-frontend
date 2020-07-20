
import {
  Container,
  Collapse,
  InputGroupText,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,

  CardImg, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter, buttonLabel, Row, Col
} from 'reactstrap'
import { Link, Redirect, withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'

class Navigation2 extends Component {


  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,

      isOpen: false,
      setIsOpen: false,
      modal: false
    }
  }

  handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.props.history.push('/')
  }
 


  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  toggle1 = () => {
    this.setState({
      modal: !this.state.modal
    })
  }





  render() {
   
    return (
      <div>
        <Container>
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/Home">NepWork</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  {/* <NavItem>
                      <NavLink href="/components/">Components</NavLink>
                    </NavItem> */}
                  <NavItem>
                    <NavLink href="/about/">About</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink href="/Post/">Post Task</NavLink>
                    </NavItem>
                  <NavItem>
                      <NavLink href="/Profile">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/MyPost">My Posts</NavLink>
                    </NavItem>


                </Nav>
                <div className="Login">
                  <Button color='warning' onClick={this.handleLogout}> Logout</Button>

                </div>
              </Collapse>
            </Navbar>
          </div>
        </Container>
      </div>
    )
  }
}


export default withRouter(Navigation2)