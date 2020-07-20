import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home'
import Index from './components/Index'
import Navigation from './components/Navigation';
import { Router, browserHistory } from 'react-router-dom';
import Post from './components/Post'
import Registration from './components/Registration'
import viewPosts from './components/viewPosts';
import Profile from './components/Profile';
import MyPost from './components/MyPost';
function App() {
  return (

    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Index} />
    <Route path= '/Registration' component={Registration}/>
    <Route path='/Home' component={Home}/>
    <Route path='/Post' component={Post}/>
    <Route path='/viewPost/:id' component={viewPosts}/>
    <Route path='/Profile' component={Profile}/>
    <Route path='/MyPost' component={MyPost}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
