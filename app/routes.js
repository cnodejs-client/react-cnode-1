import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './container/home.js';

const routes = (
    <Route path="/" component={ Home }>
      <IndexRoute component={ Home }/>
    </Route>
);

export default routes;
