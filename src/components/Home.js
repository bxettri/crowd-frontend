import React, { Component } from 'react'
import Navigation2 from './Navigation2';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Image from 'react-bootstrap/Image';
import {
    Jumbotron, Container, Row, Col, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
import Footer from './Footer'


export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            taskName: '',
            categoryType: '',
            discription: '',
            categoryName: '',
            task: [],
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },


        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3002/tasks', this.config)
            .then((response) => {
                const data = response.data;
                this.setState({ task: data });
                console.log("data fecth");

            }).catch(error => console.log(error.response));
    }


    render() {
        return (
            <div>
                <Navigation2 />
                <br />
                <Container>
                  


                    <div >
                        {this.state.task.map((tasks =>
                            <Card body outline color="info">
                                <Container>
                                    <Row>
                                        <Col md={3}>
                                            <h4>Posted By</h4>
                                            <Image height="170" src={`http://localhost:3002/uploads/${tasks.owner.profilePicture}`} />

                                            <p className="text-primary  font-weight-bold">{tasks.owner.fullName}</p>
                                        </Col>

                                        <CardBody md={9} >
                                            <h3>{tasks.taskName}</h3>
                                            <h4>{tasks.categoryType}</h4>
                                            <CardSubtitle>Skills Required: {tasks.skills}</CardSubtitle>
                                            <CardText>{tasks.amount}</CardText>
                                            <Link to={`/viewPost/${tasks._id}`} > <Button color="info">Click to view</Button></Link>
                                        </CardBody>

                                    </Row>
                                </Container>

                            </Card>
                        ))}<br />
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
}



