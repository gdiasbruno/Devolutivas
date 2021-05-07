import React, {
  useState, useEffect, useContext,
} from 'react';
import { useHistory } from 'react-router-dom';

import MoonLoader from 'react-spinners/MoonLoader';

import {
  Section, LoaderBody,
} from './styles';
import {
  fetchServicesAnswers,
  temasItemsCEDESP,
  sexoRacaCorCEDESP,
  motivosSaidaCEDESP,
  encaminhamentosCEDESP,
  familiasInsumosCEDESP,
  demandaReprimidaCEDESP,
  atendimentoFamiliaCEDESP,
  atendimentosRemotosCEDESP,
  atendidosMesFemininoCEDESP,
  atendidosMesMasculinoCEDESP,
  familiasVulnerabilidadeCEDESP,
  atendimentosRemotosTiposCEDESP,
  atendimentosRemotosFamiliaSemanaCEDESP,
} from './ServiceValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableFourColumns from '../../components/TableFourColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import TableFiveColumns from '../../components/TableFiveColumns';
import ListComponent from '../../components/ListComponent';
import HeaderInfo from '../../components/HeaderInfo';
import Navbar from '../../components/Navbar';

import { infoContext } from '../../providers/reactContext';

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
  '18 a 29 anos',
  '30 a 59 anos',
  'Total Geral',
];

const familiasInsumosHeaders = ['', 'N° de famílias'];

const familiasVulnerabilidadeHeaders = ['', 'Nº de famílias'];

const atendimentoFamiliaHeaders = ['', 'Nº de famílias'];

const demandaReprimidaHeaders = ['', 'Nº de pessoas'];

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const atendimentosRemotosHeaders = ['', 'Atendimentos Remotos'];

const atendimentosRemotosTiposHeaders = ['Tipos', ''];

const atendimentosRemotosFamiliaSemanaHeaders = ['Semanas', 'Nº de famílias'];

const Response:any = () => {
  const [services, setServices]:any = useState([]);
  const { context }:any = useContext(infoContext);
  const {
    nomeSAS, mes, token, tipologia,
  } = context;
  const history = useHistory();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServicesAnswers({
      nomeSAS, mes, token, tipologia, setServices, setLoading,
    });
  }, []);

  const atendidosMesFeminino = atendidosMesFemininoCEDESP({ services, createData });

  const atendidosMesMasculino = atendidosMesMasculinoCEDESP({ services, createData });

  const sexoRacaCor = sexoRacaCorCEDESP({ services, createData });

  const motivosSaida = motivosSaidaCEDESP({ services, createData });

  const familiasInsumos = familiasInsumosCEDESP({ services, createData });

  const familiasVulnerabilidade = familiasVulnerabilidadeCEDESP({ services, createData });

  const atendimentoFamilia = atendimentoFamiliaCEDESP({ services, createData });

  const temasItems = temasItemsCEDESP({ services, createData });

  const demandaReprimida = demandaReprimidaCEDESP({ services, createData });

  const encaminhamentos = encaminhamentosCEDESP({ services, createData });

  const atendimentosRemotos = atendimentosRemotosCEDESP({ services, createData });

  const atendimentosRemotosTipos = atendimentosRemotosTiposCEDESP({ services, createData });

  const atendimentosRemotosFamiliaSemana = atendimentosRemotosFamiliaSemanaCEDESP({
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
              1. Quantidade de pessoas do sexo feminino atendidas no mês, por faixa etária:
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesFeminino} />

            <h2>
              2. Quantidade de pessoas do sexo masculino atendidas no mês, por faixa etária:
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesMasculino} />

            <h2>
              3. Quantidade de pessoas atendidas por sexo e raça/cor no mês de referência:
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <h2>
              4. Quantidade de usuários por motivo de saída do serviço no mês:
            </h2>
            <TableFiveColumns headers={motivosSaidaHeaders} body={motivosSaida} />

            <h2>
              5. Atendimento às famílias no mês:
            </h2>
            <TableTwoColumns headers={atendimentoFamiliaHeaders} body={atendimentoFamilia} />

            <h2>
              6. Quantidade de pessoas com deficiência atendidas no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.cedespcd, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              7. Quantidade de visitas domicilares realizadas no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Visita(s)', services.cedesvisitadom, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              8. O número de famílias ou pessoas que buscaram atendimento presencial
              no mês de referência devido a alguma vulnerabilidade relacional:
            </h2>
            <TableTwoColumns
              headers={familiasVulnerabilidadeHeaders}
              body={familiasVulnerabilidade}
            />

            <h2>
              9. Os temas discutidos com pessoas atendidas pelo serviço no mês:
            </h2>
            <ListComponent items={temasItems} />

            <h2>
              11. Quantidade de pessoas incluídas em lista de
              espera (demanda reprimida) no mês, por faixa etária:
            </h2>

            <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />

            <h2>
              12. Quantidade de famílias que receberam insumos no mês
            </h2>

            <TableTwoColumns headers={familiasInsumosHeaders} body={familiasInsumos} />

            <h2>
              13. Quantidade de encaminhamentos realizados pelo serviço no mês:
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              14. Quantidade de atendimentos remotos de usuários por semana no mês:
            </h2>
            <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

            <h2>
              15. Quantidade de atividades remotas realizadas no mês,
              pelos meios em que foram disponibilizadas:
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTipos}
            />

            <h2>
              16. Quantidade de atendimentos remotos de familiares por semana no mês:
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
