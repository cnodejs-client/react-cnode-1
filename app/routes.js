import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './container/home.js';
import Bar from './components/bar.js';
import Detail from './container/detail.js';
import About from './components/about.js';

export default
    <Route path="/" component={Home}>
      <IndexRoute component={Bar}/>
      <Route path="topic/:id" component={Detail}/>
      <Route path="about" component={About}/>
    </Route>;

// export default routes;
