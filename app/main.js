import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui';
import Home from './container/home.js';
import Bar from './components/bar.js';
import Detail from './container/detail.js';
import About from './components/about.js';

// import routes from './routes.js';
import './styles/normalize.css';
import './styles/app.less';
import store from './store/index.js';
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

const RouterTree = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Route path="/" component={Bar}>
          <IndexRoute component={Home}/>
          <Route path="topic/:id" component={Detail}/>
          <Route path="about" component={About}/>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

render(
  <RouterTree />,
  document.querySelector('#root')
);
