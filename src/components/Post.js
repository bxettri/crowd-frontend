import React, { Component } from 'react'
import Navigation from './Navigation2'
import { FormText, Container, CustomInput, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios'

import Footer from './Footer'

import FileUploadBtn from './FileUploadBtn';

export default class Post extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tasks: {},
      taskName: '',
      discription: '',
      skills: '',
      amount: '',
      files:'',
      categoryId: '',
      category: [],
      categoryName: '',
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }
    }
  }


  componentDidMount() {
    Axios.get('http://localhost:3002/category', this.state)
      .then((response) => {
        console.log(response.body)
        this.setState({
          category: response.data,
          categoryId: response.data[0]._id
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFileSelect = (e) => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }
  uploadFile = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('Files', this.state.selectedFile)
    Axios.post('http://localhost:3002/uploadFiles', data, this.state.config)
      .then((response) => {
        this.setState({
          taskName: this.state.taskName,
          discription: this.state.discription, 
          amount: this.state.amount,
          categoryType: this.state.categoryName,
          category: this.state.category,
          skills: this.state.skills,
          files: response.data.filename
        })
      }).catch((err) => console.log(err.response))
  }


  post = (e) => {
    e.preventDefault();
    
    Axios.post('http://localhost:3002/tasks', this.state,this.state.config)
        .then((response) => {alert("Task added sucessfully")
        this.setState({
          taskName: '',
          discription: '',
          categoryName: '',
          skills: '',
          amount: '',
          files:''});
        }).catch((err)=> console.log(err)) 
}





  

  render() {
    return (
      <div>
        <Navigation />
        <br />
        <Container>
          <Row>
            <Col md={2}>
            </Col>
            <Col md={8}>
              <Form>
                <FormGroup>
                  <Label for="taskName">Task Name</Label>
                  <Input type="text" name="taskName" id="taskName"
                    value={this.state.taskName} onChange={this.handleChange}
                    placeholder="Enter task name" />
                </FormGroup>
                <FormGroup >
                  <Label for="category" >Category</Label>
                  <Input type="select" name="categoryName" id="categoryName" value={this.state.categoryName}
                    onChange={this.handleChange}>
                    {
                      this.state.category.map((categoryName) => {
                        return <option key={categoryName._id} value={categoryName._id}>{categoryName.categoryName}</option>
                      })
                    }
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="discription">Task Discription</Label>
                  <Input type="textarea" name="discription" id="discription"
                    value={this.state.discription} onChange={this.handleChange}
                    placeholder="Enter your project discription" />
                </FormGroup>
                <FormGroup>
                  <Label for="skills">Skills required</Label>
                  <Input type="text" name="skills" id="skills"
                    value={this.state.skills} onChange={this.handleChange}
                    placeholder="Any skills or knowledge" />
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      
                      <Input type='file' id='files' name='files'
                        onChange={this.handleFileSelect} />
                  {this.state.selectedFile ? (<FileUploadBtn
                        uploadFile={this.uploadFile} />) : null}
                                    
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup >
                      <Label for="amount" check>Amount</Label>
                      <Input type="text" name="amount"
                        value={this.state.amount} onChange={this.handleChange}
                        id="amount" />
                    </FormGroup>
                  </Col>
                </Row>
                <Button onClick={this.post}>Post</Button>
              </Form>
            </Col>
            <Col md={2}>
            </Col>
          </Row>
        </Container>
        <br />
        <Footer />
      </div>
    )
  }
}
