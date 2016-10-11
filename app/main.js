import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui';
import routes from './routes.js';
import './styles/normalize.css';
import './styles/app.less';
import store from './store/index.js';
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

const RouterTree = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history} routes={routes}/>
    </MuiThemeProvider>
  </Provider>
);

render(
  <RouterTree />,
  document.querySelector('#root')
);
