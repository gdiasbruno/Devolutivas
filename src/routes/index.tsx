import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '../pages/Index/index';
import Reports from '../pages/Reports/index';
import Months from '../pages/Months/index';
import ResponseCCA from '../pages/Response/maskCCA';
import ResponseCJ from '../pages/Response/maskCJ';
import ResponseSASF from '../pages/Response/maskSASF';
import Header from '../components/Header';

const Routes: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/reports" component={Reports} />
      <Route path="/months" component={Months} />
      <Route path="/responsecca" component={ResponseCCA} />
      <Route path="/responsecj" component={ResponseCJ} />
      <Route path="/responsesasf" component={ResponseSASF} />
    </Switch>
  </>
);

export default Routes;
