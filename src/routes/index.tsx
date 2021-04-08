import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '../pages/Index/index';
import Reports from '../pages/Reports/index';
import Months from '../pages/Months/index';
import ResponseCCA from '../pages/Response/maskCCA';
import ResponseCJ from '../pages/Response/maskCJ';
import ResponseSASF from '../pages/Response/maskSASF';
import ResponseCRECI from '../pages/Response/maskCRECI';
import ResponseCCInter from '../pages/Response/maskCCInter';
import ResponseCEDESP from '../pages/Response/maskCEDESP';
import ResponseCIRCOSOCIAL from '../pages/Response/maskCIRCOSOCIAL';
import ResponseNCI from '../pages/Response/maskNCI';
import Header from '../components/Header';

import { infoContext } from '../providers/reactContext';

const Routes: React.FC = () => {
  const { context }:any = useContext(infoContext);

  return (

    <>
      {context
        ? (
          <>
            <Header />
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/reports" component={Reports} />
              <Route path="/months" component={Months} />
              <Route path="/responseCCA" component={ResponseCCA} />
              <Route path="/responseCJ" component={ResponseCJ} />
              <Route path="/responseSASF" component={ResponseSASF} />
              <Route path="/responseCRECI" component={ResponseCRECI} />
              <Route path="/responseCCInter" component={ResponseCCInter} />
              <Route path="/responseCEDESP" component={ResponseCEDESP} />
              <Route path="/responseCIRCOSOCIAL" component={ResponseCIRCOSOCIAL} />
              <Route path="/responseNCI" component={ResponseNCI} />
            </Switch>
          </>
        )
        : (
          <>
            <Header />
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/reports" component={Index} />
              <Route path="/months" component={Index} />
              <Route path="/responsecca" component={Index} />
              <Route path="/responsecj" component={Index} />
              <Route path="/responsesasf" component={Index} />

            </Switch>
          </>
        )}

    </>
  );
};

export default Routes;
