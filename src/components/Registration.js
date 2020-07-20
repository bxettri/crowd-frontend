import React, { Component } from 'react'
import styled from 'styled-components'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Form, FormGroup, Label, Button, FormText, Col, Row } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import axios from 'axios'
export default class Registration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            lastname: '',
            username: '',
            password: '',
            address:'',
            email:'',
            phoneNumber:'',
            isRegistered: false
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:3002/users/signup', this.state)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token)
                this.setState({
                    fullName: '',
                    lastname: '',
                    username: '',
                    password: '',
                    email:'',
                    phoneNumber:'',
                    isRegistered: true
                });

            }).catch((err) => console.log(err))
    }

    render() {
        if (this.state.isRegistered === true) {
            return <Redirect to='/Home' />}
        return (
            <div>
                <Navigation/>
                 <Container>
                <RegistrationContainer className="main-container">
                    <h2 className="sign">Sign Up</h2>
                    <Form>
                        <Row>

                            <Col md={6}>
                                <FormGroup>
                                    <Label for='fullName'>Full Name</Label>
                                    <Input type='text' name='fullName' id='fullName'
                                    value={this.state.fullName} onChange={this.handleChange} />      
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" 
                                    value={this.state.email} onChange={this.handleChange} />
                                </FormGroup>
                            </Col>

 

                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                <Label for='address'>Address</Label>
                                    <Input type='text' name='address' id='address'
                                    value={this.state.address} onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                       
                                <FormGroup>
                                <Label for='phoneNumber'>Phone no.</Label>
                                    <Input type='text' name='phoneNumber' id='phoneNumber'
                                    value={this.state.phoneNumber} onChange={this.handleChange} />
                                </FormGroup>
                          
                            </Col>
                        </Row>
                        <Row>
                           
                        
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                <Label for='password'>Password</Label>
                                    <Input type='password' name='password' id='password'
                                    value={this.state.password} onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                       
                                <FormGroup>
                                <Label for='confirmPassword'>Confirm Password</Label>
                                    <Input type='password' name='confirmPassword' id='confirmPassword'/>
                                </FormGroup>
                          
                            </Col>
                        </Row>
                   
                        <Button color='primary' onClick={this.register}>Sign Up</Button>
                      
                    </Form>
                </RegistrationContainer>
                </Container><br/>
                <Footer/>
            </div>
        )
    }
}

const RegistrationContainer = styled.footer`

.main-container{
    .background: red;
}
.sign{
    margin-bottom: 2rem;
}
`;