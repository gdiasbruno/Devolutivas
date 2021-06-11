import React, {
  useState, useEffect, useContext,
} from 'react';

import { useHistory } from 'react-router-dom';

import MoonLoader from 'react-spinners/MoonLoader';

import {
  Section, LoaderBody,
} from './styles';

import fetchServicesAnswers from './Request';

import {
  atendFemSISP,
  oficinasSISP,
  atendMascSISP,
  sexoRacaCorSISP,
  perfilAssociadosSISP,
  encaminhamentosFinalSISP,
} from './ServiceValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import Navbar from '../../components/Navbar';

import { infoContext } from '../../providers/reactContext';
import HeaderInfo from '../../components/HeaderInfo';

function createData(
  title: string,
  attribute1: number,
  attribute2: number,
  attribute3: number,
  attribute4: number,
  attribute5: number,
  attribute6: number,
  attribute7: number,
  attribute8: number,
  attribute9: number,
) {
  return {
    title,
    attribute1,
    attribute2,
    attribute3,
    attribute4,
    attribute5,
    attribute6,
    attribute7,
    attribute8,
    attribute9,
  };
}

const sexoRacaCorHeaders = [
  'Branca',
  'Preta',
  'Parda',
  'Amarela',
  'Indígena',
  'Não informada',
  'Total',
];
const encaminhamentosHeaders = ['Origem', 'Total'];

const genericTotalTecHeader = ['', 'Total'];

const Response:any = () => {
  const [services, setServices]:any = useState([]);
  const { context }:any = useContext(infoContext);
  const {
    nomeSAS, mes, token, tipologia,
  } = context;
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetchServicesAnswers({
      nomeSAS, mes, token, tipologia, setServices, setLoading, history,
    });
  }, []);

  const atendFem = atendFemSISP({ services, createData });

  const atendMasc = atendMascSISP({ services, createData });

  const sexoRacaCor = sexoRacaCorSISP({ services, createData });

  const perfilAssociados = perfilAssociadosSISP({ services, createData });

  const oficinas = oficinasSISP({ services, createData });

  const encaminhamentosFinal = encaminhamentosFinalSISP({ services, createData });

  return (
    loading
      ? (
        <LoaderBody>
          <MoonLoader color="#3f51b5" size={100} />
        </LoaderBody>
      )
      : (
        <>
          <Navbar />

          <Section>
            <HeaderInfo />
            <h2>
              1. Nº de pessoas do sexo feminino atendidas pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={atendFem} />

            <h2>
              2. Nº de pessoas do sexo masculino atendidas pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={atendMasc} />

            <h2>
              3. Quantidade de pessoas atendidas por sexo e raça/cor no mês de referência.
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <br />

            <h2>
              4. Perfil das pessoas que se associaram no mês:
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={perfilAssociados} />

            <br />

            <h2>
              5. Oficinas realizadas no mês:
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={oficinas} />

            <h2>
              6. Encaminhamentos realizados pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentosFinal} />

            <br />

          </Section>
        </>
      )

  );
};

export default Response;
