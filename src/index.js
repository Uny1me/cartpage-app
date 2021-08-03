import React from 'react';
import ReactDOM from 'react-dom';
// For Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Part Pages
import { MainPage, ProductPage } from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/prodpage" component={ProductPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
