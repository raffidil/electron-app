/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './components/Home'; //changed from container to component
import Page1 from './components/Page1'; 
import Gallery from './components/Gallery'; 
import CounterPage from './containers/CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} exact/>
      <Route path="/page1" component={Page1} exact/>
      <Route path="/Gallery" component={Gallery} exact/>
      <Route path="/" component={HomePage} exact/>

    </Switch>
  </App>
);
