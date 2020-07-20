import React, { Component } from 'react'
import Axios from 'axios'
import Navigation from './Navigation2'
import Footer from './Footer'
import Image from 'react-bootstrap/Image';
import {
  Jumbotron, Container, Row, Col, Button, Card, CardImg, CardText, CardBody, Modal, ModalHeader, Form, FormGroup, Label, Input, ModalFooter,
  CardTitle, CardSubtitle,
} from 'reactstrap';
export default class viewPosts extends Component {
  constructor(props) {
    super(props)

    this.state = {

      isOpen: false,
      setIsOpen: false,
      modal: false,
      visible1: false,
      task: [],
      user: {},
      proposal: [],
      proposalDiscription: '',
      proposedAmount: '',
      proposedBy: '',
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }
    }
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
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  componentDidMount() {
    Axios.get('http://localhost:3002/tasks/' + (this.props.match.params.id), this.state.config)
      .then((response) => {
        console.log(response.data)
        this.setState({
          task: response.data
        })
      })

    Axios.get('http://localhost:3002/users/myProfile', this.state.config)
      .then((response) => {
        console.log(response.data)
        this.setState({
          user: response.data
        })
      })
      .catch((err) => console.log(err.response));
  }

  post = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:3002/tasks/{$id}/proposal', this.state, this.state.config)
      .then((response) => {
        alert("Task added sucessfully")
        this.setState({});
      }).catch((err) => console.log(err))
  }



  render() {

    return (
      <div>
        <Navigation />
        <Container>
          <Jumbotron >
            <container >


              <h4>Posted By {this.state.task.owner}</h4>
              <Image height="180" src={require('./images/doc1.jpg')} />
              <h3>{this.state.task.owner}</h3>



              <h1> Details</h1><br />
              <h2 className="display-5">{this.state.task.taskName}</h2>
              <h4>Category: {this.state.task.categoryType}</h4>
              <p className="lead">{this.state.task.discription}</p>
              <p className="lead">{this.state.task.skills}</p>
              <p className="lead">{this.state.task.amount}</p>
              <div className="Login">
                <Button color="primary" onClick={this.toggle1}>Proposal</Button>

                <Modal isOpen={this.state.modal} toggle1={this.toggle}>
                  <ModalHeader toggle={this.toggle1}>Fill Up proposal from.</ModalHeader>

                  <Form>

                    <FormGroup>
                      <Label for="proposalDiscription">Task Discription</Label>
                      <Input type="textarea" name="proposalDiscription" id="proposalDiscription"
                        value={this.state.proposalDiscription} onChange={this.handleChange}
                        placeholder="Enter your project discription" />
                    </FormGroup>



                    <Col md={6}>
                      <FormGroup >
                        <Label for="proposedAmount" check>Amount</Label>
                        <Input type="text" name="proposedAmount"
                          value={this.state.proposedAmount} onChange={this.handleChange}
                          id="proposedAmount" />
                      </FormGroup>
                    </Col>

                    <Button onClick={this.post}>Post</Button>
                  </Form>
                  <ModalFooter>

                  </ModalFooter>
                </Modal>
              </div>


            </container>
          </Jumbotron>
        </Container>

        <Footer />
      </div>
    )
  }
}
