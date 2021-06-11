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
  temasItemsCJ,
  motivoSaidaCJ,
  sexoRacaCorCJ,
  atendidosMesCJ,
  atividadesItemsCJ,
  encaminhamentosCJ,
  familiasInsumosCJ,
  demandaReprimidaCJ,
  familiasAtendidasCJ,
  atendimentosRemotosCJ,
  familiasVulnerabilidadeCJ,
  atendimentosRemotosTiposCJ,
  atendimentosRemotosFamiliaSemanaCJ,
} from './ServiceValues';

import TableFourColumns from '../../components/TableFourColumns';
import TableEigthColumns from '../../components/TableEightColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
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
) {
  return {
    title, attribute1, attribute2, attribute3, attribute4, attribute5, attribute6, attribute7,
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

const motivoSaidaHeaders = ['', 'Quantidade'];

const familiasAtendidasHeaders = ['', 'Nº de famílias'];

const familiasVulnerabilidadeHeaders = ['', 'Nº de famílias'];

const demandaReprimidaHeaders = ['', 'Nº de adolescentes'];

const familiasInsumosHeaders = ['', 'N° de famílias'];

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
      nomeSAS, mes, token, tipologia, setServices, setLoading, history,
    });
  }, []);

  const atendidosMes = atendidosMesCJ({ services, createData });

  const sexoRacaCor = sexoRacaCorCJ({ services, createData });

  const motivoSaida = motivoSaidaCJ({ services, createData });

  const familiasAtendidas = familiasAtendidasCJ({ services, createData });

  const familiasVulnerabilidade = familiasVulnerabilidadeCJ({ services, createData });

  const atividadesItems = atividadesItemsCJ({ services, createData });

  const temasItems = temasItemsCJ({ services, createData });

  const demandaReprimida = demandaReprimidaCJ({ services, createData });

  const familiasInsumos = familiasInsumosCJ({ services, createData });

  const encaminhamentos = encaminhamentosCJ({ services, createData });

  const atendimentosRemotos = atendimentosRemotosCJ({ services, createData });

  const atendimentosRemotosTipos = atendimentosRemotosTiposCJ({ services, createData });

  const atendimentosRemotosFamiliaSemana = atendimentosRemotosFamiliaSemanaCJ({
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
              1. Quantidade de adolescentes atendidos no mês, por sexo
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMes} />

            <h2>
              2. Quantidade de adolescentes atendidos no mês, por sexo e raça/cor
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
            <h2>
              3. Quantidade de adolescentes por motivo de saída do serviço no mês
            </h2>
            <TableTwoColumns headers={motivoSaidaHeaders} body={motivoSaida} />

            <h2>
              4. Quantidade de adolescentes com deficiência atendidos no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Adolecente(s)', services.cjusuariospcd, 1, 1, 1, 1, 1, 1)]} />
            <br />
            <h2>
              5. Atendimento às famílias no mês de referência
            </h2>
            <TableTwoColumns headers={familiasAtendidasHeaders} body={familiasAtendidas} />
            <br />
            <h2>
              6. Quantidade de visitas domicilares realizadas no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Visita(s)', services.cjvisitdom, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              7. O número de famílias ou pessoas que buscaram
              atendimento presencial no mês de referência
              devido a alguma vulnerabilidade relacional listada abaixo
            </h2>

            <TableTwoColumns
              headers={familiasVulnerabilidadeHeaders}
              body={familiasVulnerabilidade}
            />

            <h2>
              8. Indique as atividades realizadas com os adolescentes atendidos pelo serviço no mês
            </h2>

            <ListComponent items={atividadesItems} />

            <h2>
              9. Indique os temas discutidos com os adolescentes atendidos pelo serviço no mês
            </h2>

            <ListComponent items={temasItems} />

            <h2>
              10. Quantidade de adolescentes incluídos na lista de espera
              (demanda reprimida) do serviço no mês
            </h2>

            <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />
            <br />
            <h2>
              11. Quantidade de famílias que receberam insumos no mês
            </h2>

            <TableTwoColumns headers={familiasInsumosHeaders} body={familiasInsumos} />

            <h2>
              12. Quantidade de encaminhamentos realizados pelo serviço no mês
            </h2>

            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              13. Quantidade de atendimentos remotos de adolescentes por semana no mês
            </h2>

            <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

            <h2>
              14. Quantidade de atividades remotas realizadas no mês,
              pelo meio em que foram disponibilizadas
            </h2>

            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTipos}
            />

            <h2>
              15. Quantidade de atendimentos
              remotos de familiares por semana no mês
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
