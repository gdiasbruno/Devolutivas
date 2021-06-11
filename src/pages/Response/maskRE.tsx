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
  atendimentosRemotosFamiliaSemanaRE,
  familiasVulnerabilidadeRE,
  atendimentosRemotosRE,
  atendimentoFamiliaRE,
  demandaReprimidaRE,
  familiasInsumosRE,
  encaminhamentosRE,
  motivosSaidaRE,
  temasItemsRE,
  sexoRacaCorRE,
  atendidosMesRE,
} from './ServiceValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableFourColumns from '../../components/TableFourColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import ListComponent from '../../components/ListComponent';
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

const atendidosMesHeaders = [
  'N° de usuários atendidos no mês',
  'Nº de usuários que frequentaram presencialmente o serviço',
  'Nº de usuários atendidos remotamente pelo serviço',
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

const motivosSaidaHeaders = [
  '15 a 17 anos',
  '18 a 21 anos',
];

const familiasInsumosHeaders = ['', 'N° de famílias'];

const familiasVulnerabilidadeHeaders = ['', 'Nº de famílias'];

const atendimentoFamiliaHeaders = ['', 'Nº de famílias'];

const demandaReprimidaHeaders = ['', 'Nº de pessoas'];

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const atendimentosRemotosHeaders = ['', 'Atendimentos Remotos'];

const atendimentosRemotosFamiliaSemanaHeaders = ['Semanas', 'Nº de famílias'];

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

  const atendidosMes = atendidosMesRE({ services, createData });

  const sexoRacaCor = sexoRacaCorRE({ services, createData });

  const motivosSaida = motivosSaidaRE({ services, createData });

  const familiasInsumos = familiasInsumosRE({ services, createData });

  const familiasVulnerabilidade = familiasVulnerabilidadeRE({ services, createData });

  const atendimentoFamilia = atendimentoFamiliaRE({ services, createData });

  const temasItems = temasItemsRE({ services, createData });

  const demandaReprimida = demandaReprimidaRE({ services, createData });

  const encaminhamentos = encaminhamentosRE({ services, createData });

  const atendimentosRemotos = atendimentosRemotosRE({ services, createData });

  const atendimentosRemotosFamiliaSemana = atendimentosRemotosFamiliaSemanaRE({
    services,
    createData,
  });

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
              1. Quantidade de pessoas atendidas no mês de referência:
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMes} />

            <h2>
              2. Quantidade pessoas atendidas por sexo e raça/cor no mês de referência.
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
            <h2>
              3. Nº de pessoas por motivo de saída do serviço no mês de referência:
            </h2>
            <TableThreeColumns headers={motivosSaidaHeaders} body={motivosSaida} />

            <h2>
              4. Nº de pessoas com deficiência atendidas no mês de referência
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.restausuariospcd, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              5. Nº de pessoas incluídas em lista de espera (
              demanda reprimida) no mês de referência:
            </h2>
            <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />

            <h2>6. Encaminhamentos realizados pelo serviço no mês de referência:</h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              7. Nº de famílias que receberam insumos no mês de referência:
            </h2>
            <TableTwoColumns headers={familiasInsumosHeaders} body={familiasInsumos} />

            <h2>
              8. Quantidade de refeições servidas no espaço no mês de referência
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Refeição/Refeições', services.restarefeicao, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              9. Famílias atendidas no mês de referência:
            </h2>
            <TableTwoColumns headers={atendimentoFamiliaHeaders} body={atendimentoFamilia} />

            <h2>
              10. Indique o número de famílias ou pessoas que
              buscaram atendimento presencial no mês de
              referência devido a alguma vulnerabilidade relacional listada abaixo
            </h2>
            <TableTwoColumns
              headers={familiasVulnerabilidadeHeaders}
              body={familiasVulnerabilidade}
            />

            <h2>
              11. Indique os temas discutidos com as pessoas atendidas
              pelo serviço no mês de referência
            </h2>
            <ListComponent items={temasItems} />

            <h2>
              12. Quantidade de atendimentos remotos de usuários por semana no mês
            </h2>
            <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

            <h2>
              13. Quantidade de atendimentos remotos de familiares por semana no mês
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosFamiliaSemanaHeaders}
              body={atendimentosRemotosFamiliaSemana}
            />

          </Section>
        </>
      )

  );
};

export default Response;
