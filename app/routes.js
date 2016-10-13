import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './container/home.js';
import NavBar from './container/navBar.js';
import Detail from './container/detail.js';
import About from './components/about.js';
import User from './container/user.js';
import Login from './container/login.js';
import Post from './container/post.js';
import Message from './container/message.js';

const routes = (
  <Route path="/" component={NavBar}>
    <IndexRoute component={Home}/>
    <Route path="topic/:id" component={Detail}/>
    <Route path="user/:username" component={User}/>
    <Route path="about" component={About}/>
    <Route path="login" component={Login}/>
    <Route path="post" component={Post}/>
    <Route path="message" component={Message}/>
  </Route>
);

export default routes;
