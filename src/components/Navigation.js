
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
  import { Link, Redirect } from 'react-router-dom'
  import React, { Component } from 'react'
  import axios from 'axios'
  
  export default class Navigation extends Component {
  
  
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
  
    // conponentDidUpdate(prevProps){
    //   console.log(prevProps, this.props,"hhh")
    // }
  
    handleChange = (e) => {
      this.setState(
          { [e.target.name]: e.target.value }
      )
  }
  
  submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/users/login', this.state)
        .then((response) => {
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
           
            this.setState({ isLoggedIn: true })
           
        }).catch((err) => console.log(err.response))
      
    this.setState({ email: '', password: '' })
    
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
      if (this.state.isLoggedIn === true) {
        return <Redirect to='/Home' />
    }
      return (
        <div>
          <Container>
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">NepWork</NavbarBrand>
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
                      <NavLink href="/Registration/">Registration</NavLink>
                    </NavItem>
                    {/* <NavItem>
                      <NavLink href="/Dashboard">Dashboard</NavLink>
                    </NavItem> */}
         
  
                  </Nav>
                  <div className="Login">
                    <Button color="primary" onClick={this.toggle1}>Login</Button>
  
                    <Modal isOpen={this.state.modal} toggle1={this.toggle}>
                      <ModalHeader toggle={this.toggle1}>Login</ModalHeader>
  
                      <Form>
                        <Col>
                          <FormGroup>
                          
                            <Label for='email'>email</Label>
                            <Input type='email' name='email' id='email' value={this.state.email} onChange={this.handleChange} />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input type='password' name='password' id='password' value={this.state.password} onChange={this.handleChange} />
                          </FormGroup>
                        </Col>
                        &nbsp; &nbsp; <Button color="primary" onClick={this.submitForm}  type="submit">Submit</Button>
                        <FormText>&nbsp; &nbsp;Not yet a user? <Link to='/Registration'>Sign Up here!</Link></FormText>
                      </Form>
                      <ModalFooter>
                        If you are doctor please <Link to='/DocRegistration'>Click here!</Link>  
                     </ModalFooter>
                    </Modal>
                  </div>
                </Collapse>
              </Navbar>
            </div>
          </Container>
        </div>
      )
    }
  }
  
  
  