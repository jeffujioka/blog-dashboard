import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Administration from './components/administration/Administration';
import Dashboard from './components/Dashboard';

const Routes = () => {
  return (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/admin" exact component={Administration} />
  </Switch>);
}

export default Routes;