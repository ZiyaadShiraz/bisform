import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// TODO:
// put the buy invest and sell divs on the homepage to a new line when the screen is small. when big, just have it at the left side as current.
// on the invest, you can create some coins in cinema and let it fall.
