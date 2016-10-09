import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory,  } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui';

import routes from './routes.js';
import './styles/normalize.css';
import './styles/app.less';

injectTapEventPlugin();

const RouterTree = () => (
  <MuiThemeProvider>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>
);

render(
  <RouterTree />,
  document.querySelector('#root')
);
