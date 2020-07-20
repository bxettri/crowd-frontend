import React, { Component } from 'react';
import styled from 'styled-components'
import Navigation  from './Navigation2';
import Footer from './Footer';
import { InputGroup, InputGroupAddon, InputGroupText, CustomInput,  Input, Container, Form, FormGroup, Label, Button, FormText, Col, Row } from 'reactstrap'

import FileUploadButton from './FileUploadButton';
import Axios from 'axios';

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: {},
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
            selectedFile: null,
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3002/users/me', this.state.config)
            .then((response) => {
                this.setState({
                    users: response.data
                })
            });
    }

    handleFileSelect = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    uploadFile = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('imageFile', this.state.selectedFile)
        Axios.post('http://localhost:3002/upload', data, this.state.config)
            .then((response) => {
                this.setState({
                    users: { ...this.state.users, profilePicture: response.data.filename }
                })
            }).catch((err) => console.log(err.response))
    }

    updateUser = (e) => {
        e.preventDefault();
        Axios.put('http://localhost:3002/users/updateProfile', this.state.users, this.state.config)
            .then((response) =>alert("Updated sucessfully")).catch((err) => console.log(err.response))
        //this.props.history.push('/dashboard');
    }

    handleChange(e) {
        this.setState({
            users: { ...this.state.users, [e.target.name]: e.target.value }
        })
    }
    render() {
        if (this.state.users === null) {
            return <h3>Loading ...</h3>
        } else {
            return (
                <div>
                    <Navigation />
                    <Container>
                        <ProfileContainer className="main-container">
                            <h2 className="Profile">My Profile</h2>
                            <Form className="My_profile">
                                <Row>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for='fullName'>Full Name</Label>
                                            <Input type='text' name='fullName' id="fullName"
                                                value={this.state.users.fullName}
                                                onChange={(e) => this.handleChange(e)} />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for='phone'>Phone</Label>
                                            <Input type='text' name='phone' id="phone"
                                                value={this.state.users.phone}
                                                onChange={(e) => this.handleChange(e)} />
                                        </FormGroup>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for='address'>Address</Label>
                                            <Input type='text' name='address' id='address'
                                                value={this.state.users.address}
                                                onChange={(e) => this.handleChange(e)} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="email">Email</Label>
                                            <Input type="email" name="email" id="email"
                                                value={this.state.users.email} onChange={(e) => this.handleChange(e)} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                {/* <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for='username'>Username</Label>
                                            <Input type='text' name='username' id='username'
                                                value={this.state.patient.username} onChange={(e) => this.handleChange(e)} />

                                        </FormGroup>
                                    </Col>
                                
                                </Row> */}
                                <FormGroup>
                                    <img className='img-thumbnail'
                                        width='400' src={`http://localhost:3002/uploads/${this.state.users.profilePicture}`}
                                        alt="profile" />
                                    <CustomInput type='file' id='profilePicture'
                                        onChange={this.handleFileSelect} />
                                    {this.state.selectedFile ? (<FileUploadButton
                                        uploadFile={this.uploadFile} />) : null}
                                </FormGroup>


                                <Button color='primary' onClick={this.updateUser}>Update Profile</Button>

                            </Form>
                        </ProfileContainer>
                    </Container>
                    <Footer />
                </div>
            )
        }
    }
}
const ProfileContainer = styled.footer`

.main-container{
    .background: red;
}
.Profile{
    margin-bottom: 2rem;
    margin-top: 2rem;
    text-align: center;
}

.My_profile{
    margin-bottom: 2rem;
}
`;