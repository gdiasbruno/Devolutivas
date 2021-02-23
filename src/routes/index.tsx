import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '../pages/Index/index';
import Reports from '../pages/Reports/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/reports" component={Reports} />
  </Switch>
);

export default Routes;
