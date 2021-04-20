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
import ResponseRE from '../pages/Response/maskRE';
import ResponseSADPI from '../pages/Response/maskSADPI';
import ResponseCDCM from '../pages/Response/maskCDCM';
import ResponseCDI from '../pages/Response/maskCDI';
import ResponseMSE from '../pages/Response/maskMSE';
import ResponseNCPOPRUA from '../pages/Response/maskNCPOPRUA';
import ResponseBAGAGEIRO from '../pages/Response/maskBAGAGEIRO';
import ResponseSPVV from '../pages/Response/maskSPVV';
import ResponseSISP from '../pages/Response/maskSISP';
import ResponseNAISPD from '../pages/Response/maskNAISPD';

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
              <Route path="/responseCIRCO SOCIAL" component={ResponseCIRCOSOCIAL} />
              <Route path="/responseNCI" component={ResponseNCI} />
              <Route path="/responseRESTAURANTE ESCOLA" component={ResponseRE} />
              <Route path="/responseSERVIÇO DE ALIMENTACAO DOMICILIAR PARA PESSOA IDOSA" component={ResponseSADPI} />
              <Route path="/responseCDCM" component={ResponseCDCM} />
              <Route path="/responseCDI" component={ResponseCDI} />
              <Route path="/responseMSE-MA" component={ResponseMSE} />
              <Route path="/responseNUCLEO DE CONVIVENCIA PARA ADULTOS EM SITUACAO DE RUA" component={ResponseNCPOPRUA} />
              <Route path="/responseBAGAGEIRO" component={ResponseBAGAGEIRO} />
              <Route path="/responseSPVV" component={ResponseSPVV} />
              <Route path="/responseSISP" component={ResponseSISP} />
              <Route path="/responseNAISPD" component={ResponseNAISPD} />
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
              <Route path="/responseCCA" component={Index} />
              <Route path="/responseCJ" component={Index} />
              <Route path="/responseSASF" component={Index} />
              <Route path="/responseCRECI" component={Index} />
              <Route path="/responseCCInter" component={Index} />
              <Route path="/responseCEDESP" component={Index} />
              <Route path="/responseCIRCO SOCIAL" component={Index} />
              <Route path="/responseNCI" component={Index} />
              <Route path="/responseRESTAURANTE ESCOLA" component={Index} />
              <Route path="/responseSERVIÇO DE ALIMENTACAO DOMICILIAR PARA PESSOA IDOSA" component={Index} />
              <Route path="/responseCDCM" component={Index} />
              <Route path="/responseCDI" component={Index} />
              <Route path="/responseMSE" component={Index} />
              <Route path="/responseNUCLEO DE CONVIVENCIA PARA ADULTOS EM SITUACAO DE RUA" component={Index} />
              <Route path="/responseBAGAGEIRO" component={Index} />
              <Route path="/responseSPVV" component={Index} />
              <Route path="/responseSISP" component={Index} />
              <Route path="/responseNAISPD" component={Index} />
            </Switch>
          </>
        )}

    </>
  );
};

export default Routes;
