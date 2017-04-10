import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Layout from './pages/Layout';
import '../scss/main.scss';

const app = document.getElementById('app');

ReactDOM.render(
  <Router>
    <Route path="/" component={Layout} />
  </Router>,
app);
