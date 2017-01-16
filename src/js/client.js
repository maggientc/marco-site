import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Layout from './pages/Layout';
import '../scss/main.scss';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/(:page)" component={Layout}></Route>
  </Router>,
app);
