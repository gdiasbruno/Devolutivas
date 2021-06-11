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
  infoIdososNCI,
  temasItemsNCI,
  sexoRacaCorNCI,
  atendidosMesNCI,
  motivosSaidaNCI,
  idososFamiliasNCI,
  atividadesItemsNCI,
  encaminhamentosNCI,
  familiasInsumosNCI,
  demandaReprimidaNCI,
  motivosSaidaAbrilNCI,
  idososMoramSozinhoNCI,
  atendimentosRemotosNCI,
  sexoRacaCorDomicilioNCI,
  atendidosMesDomicilioNCI,
  motivosSaidaDomicilioNCI,
  familiasVulnerabilidadeNCI,
  idososFamiliasDomicilioNCI,
  atendimentosRemotosTiposNCI,
  motivosSaidaDomicilioAbrilNCI,
  idososMoramSozinhoDomicilioNCI,
  atendimentosRemotosDomicilioNCI,
  atendimentosRemotosFamiliaSemanaNCI,
  familiasVulnerabilidadeDomicilioNCI,
  atendimentosRemotosTiposDomicilioNCI,
  atendimentosRemotosFamiliaSemanaDomicilioNCI,
} from './ServiceValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableFourColumns from '../../components/TableFourColumns';
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

const idososMoramSozinhoHeaders = ['', 'Quantidade'];

const idososFamiliasHeaders = ['', 'Quantidade'];

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
  '',
  'Quantidade',
];

const familiasInsumosHeaders = ['', 'N° de famílias'];

const infoIdososHeaders = ['', 'Quantidade'];

const familiasVulnerabilidadeHeaders = ['', 'Nº de famílias'];

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
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetchServicesAnswers({
      nomeSAS, mes, token, tipologia, setServices, setLoading, history,
    });
  }, []);

  const atendidosMes = atendidosMesNCI({ services, createData });

  const atendidosMesDomicilio = atendidosMesDomicilioNCI({ services, createData });

  const sexoRacaCor = sexoRacaCorNCI({ services, createData });

  const sexoRacaCorDomicilio = sexoRacaCorDomicilioNCI({ services, createData });

  const motivosSaida = motivosSaidaNCI({ services, createData });

  const motivosSaidaAbril = motivosSaidaAbrilNCI({ services, createData });

  const motivosSaidaDomicilio = motivosSaidaDomicilioNCI({ services, createData });

  const motivosSaidaDomicilioAbril = motivosSaidaDomicilioAbrilNCI({ services, createData });

  const idososMoramSozinho = idososMoramSozinhoNCI({ services, createData });

  const idososFamilias = idososFamiliasNCI({ services, createData });

  const idososFamiliasDomicilio = idososFamiliasDomicilioNCI({ services, createData });

  const familiasInsumos = familiasInsumosNCI({ services, createData });

  const infoIdosos = infoIdososNCI({ services, createData });

  const familiasVulnerabilidade = familiasVulnerabilidadeNCI({ services, createData });

  const familiasVulnerabilidadeDomicilio = familiasVulnerabilidadeDomicilioNCI({
    services,
    createData,
  });

  const atividadesItems = atividadesItemsNCI({ services, createData });

  const temasItems = temasItemsNCI({ services, createData });

  const demandaReprimida = demandaReprimidaNCI({ services, createData });

  const encaminhamentos = encaminhamentosNCI({ services, createData });

  const atendimentosRemotos = atendimentosRemotosNCI({ services, createData });

  const atendimentosRemotosDomicilio = atendimentosRemotosDomicilioNCI({ services, createData });

  const atendimentosRemotosTipos = atendimentosRemotosTiposNCI({ services, createData });

  const atendimentosRemotosTiposDomicilio = atendimentosRemotosTiposDomicilioNCI({
    services,
    createData,
  });

  const atendimentosRemotosFamiliaSemana = atendimentosRemotosFamiliaSemanaNCI({
    services,
    createData,
  });

  const atendimentosRemotosFamiliaSemanaDomicilio = atendimentosRemotosFamiliaSemanaDomicilioNCI({
    services,
    createData,
  });

  const idososMoramSozinhoDomicilio = idososMoramSozinhoDomicilioNCI({ services, createData });

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
            <h1>
              Informações sobre o serviço de convivência
            </h1>
            <br />

            <h2>
              1. Quantidade de pessoas atendidas do serviço de convivência no mês de referência:
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMes} />

            <h2>
              2. Quantidade de pessoas atendidas por sexo e raça/cor no mês de referência:
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <h2>
              3. Quantidade de usuários por motivo de saída do serviço no mês:
            </h2>
            <TableTwoColumns headers={motivosSaidaHeaders} body={mes === '0421' ? motivosSaidaAbril : motivosSaida} />

            <h2>
              4. N° de idosos atendidos no serviço de convivência que moram sozinhos
              e caso morem sozinhos, quantos contam com alguém se precisarem de ajuda:
            </h2>
            <TableTwoColumns headers={idososMoramSozinhoHeaders} body={idososMoramSozinho} />

            <h2>
              5. Os valores das seguites questões sobre atendimento
              às familías dos idosos do serviço de convivência no mês de referência::
            </h2>
            <TableTwoColumns headers={idososFamiliasHeaders} body={idososFamilias} />
            <h2>
              6. O número de famílias ou pessoas que buscaram atendimento presencial
              no mês de referência devido a alguma vulnerabilidade relacional:
            </h2>
            <TableTwoColumns
              headers={familiasVulnerabilidadeHeaders}
              body={familiasVulnerabilidade}
            />

            <h2>
              7. As atividades realizadas com as pessoas atendidas pelo
              serviço na modalidade convivência no mês de referência:
            </h2>

            <ListComponent items={atividadesItems} />

            <h2>
              8. Os temas discutidos com as pessoas atendidas
              pelo serviço na modalidade convivência no mês de referência:
            </h2>
            <ListComponent items={temasItems} />

            <h2>
              9. Quantidade de atendimentos remotos de usuários
              do serviço de convivência por semana no mês:
            </h2>
            <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

            <h2>
              10. Quantidade de atividades remotas realizadas pelo serviço de
              convivência no mês, pelos meios em que foram disponibilizadas:
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTipos}
            />

            <h2>
              11. Quantidade de atendimentos remotos de familiares
              no serviço de convivência por semana no mês:
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosFamiliaSemanaHeaders}
              body={atendimentosRemotosFamiliaSemana}
            />

            <h1>
              Informações sobre o acompanhamento social em domicílio
            </h1>
            <br />
            <h2>
              1. Quantidade de pessoas atendidas do serviço em domicílio no mês de referência:
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesDomicilio} />

            <h2>
              2. Quantidade de pessoas atendidas por sexo e raça/cor
              no serviço em domicílio no mês de referência:
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCorDomicilio} />

            <h2>
              3. Nº de pessoas por motivo de saída do serviço em domicílio  no mês de referência:
            </h2>
            <TableTwoColumns headers={motivosSaidaHeaders} body={mes === '0421' ? motivosSaidaDomicilioAbril : motivosSaidaDomicilio} />

            <h2>
              4.N° de idosos atendidos no serviço em domicílio que moram sozinhos e
              caso morem sozinhos, quantos contam com alguém se precisarem de ajuda:
            </h2>
            <TableTwoColumns
              headers={idososMoramSozinhoHeaders}
              body={idososMoramSozinhoDomicilio}
            />

            <h2>
              5. Os valores das seguintes questões sobre atendimento
              às famílias dos idosos do serviço em domicílio no mês de referência:
            </h2>
            <TableTwoColumns headers={idososFamiliasHeaders} body={idososFamiliasDomicilio} />
            <h2>
              6. O número de famílias ou pessoas que buscaram atendimento
              presencial do serviço em domicílio no mês de referência devido
              a alguma vulnerabilidade relacional:
            </h2>
            <TableTwoColumns
              headers={familiasVulnerabilidadeHeaders}
              body={familiasVulnerabilidadeDomicilio}
            />

            <h2>
              7. Quantidade de atendimentos remotos de usuários
              do serviço em domicílio por semana no mês:
            </h2>

            <TableTwoColumns
              headers={atendimentosRemotosHeaders}
              body={atendimentosRemotosDomicilio}
            />

            <h2>
              8. Quantidade de atividades remotas realizadas pelo
              serviço em em domicílio no mês, pelos meios em que foram disponibilizadas:
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTiposDomicilio}
            />

            <h2>
              11. Quantidade de atendimentos remotos de
              familiares do serviço em domicílio por semana no mês:
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosFamiliaSemanaHeaders}
              body={atendimentosRemotosFamiliaSemanaDomicilio}
            />

            <h1>
              Informações sobre o serviço de convivência
              e sobre o acompanhamento social em domicílio
            </h1>
            <br />
            <h2>
              1. Quantidade de pessoas com deficiência atendidas no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.nciusuariospcd, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              2. Quantidade de pessoas incluídas em lista de
              espera (demanda reprimida) no mês, por faixa etária:
            </h2>
            <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />
            <h2>
              3. Quantidade de encaminhamentos realizados pelo serviço no mês:
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              4. Quantifique as informações abaixo com os dados do mês de referência
            </h2>
            <TableTwoColumns headers={infoIdososHeaders} body={infoIdosos} />
            <h2>
              5. Nº de idosos que receberam insumos no mês de referência:
            </h2>
            <TableTwoColumns headers={familiasInsumosHeaders} body={familiasInsumos} />

          </Section>
        </>
      )

  );
};

export default Response;
