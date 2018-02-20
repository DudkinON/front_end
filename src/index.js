import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools as compose } from 'redux-devtools-extension';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import './index.css';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer, compose(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main} />

    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();


