import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '../pages/Index/index';
import Reports from '../pages/Reports/index';
import Months from '../pages/Months/index';
import Response from '../pages/Response/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/reports" component={Reports} />
    <Route path="/months" component={Months} />
    <Route path="/response" component={Response} />
  </Switch>
);

export default Routes;
