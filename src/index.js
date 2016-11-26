/*eslint no-unused-vars: "off"*/ //don't show warnings for unused
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {App, Home} from './App';
import Viz from './Viz';
import Predict from './Predict';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import './index.css';

// Needed for onTouchTap
injectTapEventPlugin();



ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="viz" component={Viz}/>
    <Route path="predict" component={Predict}/>
  </Route>
</Router>,
  document.getElementById('root')
);
