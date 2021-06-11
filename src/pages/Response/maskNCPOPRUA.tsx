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
  infosNCPOPRUA,
  atividadesNCPOPRUA,
  sexoRacaCorNCPOPRUA,
  encaminhamentosNCPOPRUA,
  atendidosMesFemininoNCPOPRUA,
  atendidosMesMasculinoNCPOPRUA,
} from './ServiceValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import HeaderInfo from '../../components/HeaderInfo';
import Navbar from '../../components/Navbar';

import { infoContext } from '../../providers/reactContext';
import TableThreeColumns from '../../components/TableThreeColumns';

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

const atendidosMesHeaders = ['',
  'N° de usuários atendidos no mês',
];

const sexoRacaCorHeaders = [
  'Branca',
  'Preta',
  'Parda',
  'Amarela',
  'Indígena',
  'Não informada',
  'Total',
];

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const Response:any = () => {
  const [services, setServices]:any = useState([]);
  const { context }:any = useContext(infoContext);
  const {
    nomeSAS, mes, token,
  } = context;
  const [loading, setLoading] = useState(true);
  const tipologia = 'ncp';
  const history = useHistory();

  useEffect(() => {
    fetchServicesAnswers({
      nomeSAS, mes, token, tipologia, setServices, setLoading, history,
    });
  }, []);

  const atendidosMesFeminino = atendidosMesFemininoNCPOPRUA({ services, createData });

  const atendidosMesMasculino = atendidosMesMasculinoNCPOPRUA({ services, createData });

  const sexoRacaCor = sexoRacaCorNCPOPRUA({ services, createData });

  const atividades = atividadesNCPOPRUA({ services, createData });

  const infos = infosNCPOPRUA({ services, createData });

  const encaminhamentos = encaminhamentosNCPOPRUA({ services, createData });

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
              1. Quantidade de pessoas do sexo feminino atendidas pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={atendidosMesHeaders} body={atendidosMesFeminino} />

            <h2>
              2. Quantidade de pessoas do sexo masculino
              atendidos pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={atendidosMesHeaders} body={atendidosMesMasculino} />
            <h2>
              3. Quantidade de pessoas atendidas por sexo e raça/cor no mês de referência.
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <h2>
              4. Nº de pessoas que participaram das atividades propostas pelo serviço:
            </h2>
            <br />
            <TableThreeColumns headers={['Número de atividades realizadas', 'Número de participantes na atividade']} body={atividades} />

            <h2>
              5. Quantifique as situações abaixo com os dados do mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={infos} />
            <br />
            <h2>
              6. Encaminhamentos realizados pelo serviço no mês de referência:
            </h2>

            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

          </Section>
        </>
      )
  );
};

export default Response;
