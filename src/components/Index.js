import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  Collapse, Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
  UncontrolledCarousel,
  Jumbotron,
  Row,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Container, Col, Form, FormGroup, Label, Input, Button, FormText, NavbarText, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';
import image1 from './images/doctor1.png';
import image2 from './images/doctor2.jpeg';
import image3 from './images/doctor3.jpg';
import Navigation from './Navigation';
import Footer from './Footer';

import styled from 'styled-components';


const Example = (props) => {
  const [isOpen, setIsOpen, modal, setModal] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  // const toggle1 = () => setModal(!modal);

  const {
    buttonLabel,
    className
  } = props;



  const items = [
    {
      src: image1,
      altText: 'Slide 1',
      caption: 'Health is must',
      height: '500px',
      header: 'Do not worry about other things',
      key: '1'
    },
    {
      src: image2,
      altText: 'Slide 2',
      caption: 'Trust Build',
      header: 'Reservation is easy as ever',
      key: '2'
    },
    {
      src: image3,
      altText: 'Tension Free, Hassle Free',
      caption: 'Say no to headache',
      header: 'Tension Free, Hassle Free',
      key: '3'
    }
  ];


  return (
    <div>
      <Navigation />


      <Container className="main">
        <Row>
          <Col className="carousel">
            <UncontrolledCarousel className="custom-tag" items={items} />

          </Col>


        </Row>
        <div>
          <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
        </div>
      </Container>
      <Container>
        <Row >
          <Col xs="4">
            <Card>
              <CardImg top width="100%" src={require('./images/doc1.jpg')} alt="Card image cap" />
              <CardBody>
                <CardTitle>Dr. Sailesh Manandhar</CardTitle>
                <CardSubtitle>Its the best!! </CardSubtitle>
                <CardText>This site allows the patient and doctor to manage various appointment easily. Now its yours..</CardText>
                <Button>Read More</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">

            <Card>
              <CardImg top width="100%" src={require('./images/doc4.jpg')} alt="Card image cap" />
              <CardBody>
                <CardTitle>Dr. Rupa Adhikari</CardTitle>
                <CardSubtitle>Gurantee Output!!</CardSubtitle>
                <CardText>There never was and there never will be delay for the service. You came and we are taking care..</CardText>
                <Button>Read More</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">

            <Card>
              <CardImg top width="100%" src={require('./images/doc2.jpg')} alt="Card image cap" />
              <CardBody>
                <CardTitle>Dr. Sita Aryal</CardTitle>
                <CardSubtitle>Money Saver!!</CardSubtitle>
                <CardText>People find many things to be cheap in all case. This time docapp is providing money value offer..</CardText>
                <Button>Read More</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>
      <Footer />


    </div>
  );
}


export default Example;

