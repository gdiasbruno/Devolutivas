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
  temasItemsSASF,
  motivoSaidaSASF,
  sexoRacaCorSASF,
  atendidosMesSASF,
  atividadesItemsSASF,
  encaminhamentosSASF,
  familiasInsumosSASF,
  familiasVulnerabilidadeSASF,
  atendimentosRemotosTiposSASF,
  atendimentosRemotosFamiliaSemanaSASF,
  numeroBPCSASF,
  numeroPDUSASF,
  numeroPPISASF,
} from './ServiceValues';

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
  '',
  'Nº de famílias',
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

const familiasVulnerabilidadeHeaders = ['', 'Nº de famílias'];

const familiasInsumosHeaders = ['', 'N° de famílias'];

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

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

  const atendidosMes = atendidosMesSASF({ services, createData });

  const sexoRacaCor = sexoRacaCorSASF({ services, createData });

  const motivoSaida = motivoSaidaSASF({ services, createData });

  const familiasVulnerabilidade = familiasVulnerabilidadeSASF({ services, createData });

  const atividadesItems = atividadesItemsSASF({ services, createData });

  const temasItems = temasItemsSASF({ services, createData });

  const numeroBPC = numeroBPCSASF({ services, createData });

  const numeroPDU = numeroPDUSASF({ services, createData });

  const numeroPPI = numeroPPISASF({ services, createData });

  const familiasInsumos = familiasInsumosSASF({ services, createData });

  const encaminhamentos = encaminhamentosSASF({ services, createData });

  const atendimentosRemotosTipos = atendimentosRemotosTiposSASF({ services, createData });

  const atendimentosRemotosFamiliaSemana = atendimentosRemotosFamiliaSemanaSASF({
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
              1. Informe um valor para cada situação apresentada abaixo:
            </h2>
            <TableTwoColumns headers={atendidosMesHeaders} body={atendidosMes} />

            <h2>
              2. Quantidade responsáveis familiares atendidos
              por sexo e raça/cor no mês de referência.
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
            <h2>
              3. Nº de famílias por motivo de saída do serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={motivoSaidaHeaders} body={motivoSaida} />

            <h2>
              4. Encaminhamentos realizados pelo serviço no mês de referência:
            </h2>

            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />
            <br />
            <h2>
              5. Nº de famílias que receberam insumos no mês de referência:
            </h2>
            <TableTwoColumns headers={familiasInsumosHeaders} body={familiasInsumos} />
            <br />
            <h2>
              6. Nº de pessoas ou famílias beneficiários de
              Programas de Transferência de Renda e/ou
              Benefício de Prestação Continuada no mês de referência:
            </h2>
            <TableTwoColumns headers={['', '']} body={numeroBPC} />
            <h2>
              7. O valor para as situações abaixo
              relacionadas ao Plano de Desenvolvimento do Usuário – PDU
            </h2>

            <TableTwoColumns headers={['', '']} body={numeroPDU} />
            <h2>
              8. O valor para cada situação apresentada sobre
              o Programa Primeira Infância no SUAS no mês de referência
            </h2>

            <TableTwoColumns headers={['', '']} body={numeroPPI} />

            <h2>
              9. Indique o número de famílias ou pessoas que buscaram
              atendimento presencial no mês de referência devido a
              alguma vulnerabilidade relacional
            </h2>
            <TableTwoColumns
              headers={familiasVulnerabilidadeHeaders}
              body={familiasVulnerabilidade}
            />

            <h2>
              10. Indique as atividades realizadas com as
              famílias atendidas pelo serviço no mês de referência
            </h2>

            <ListComponent items={atividadesItems} />
            <br />
            <h2>
              11. Indique os temas discutidos com as
              famílias atendidas pelo serviço no mês de referência
            </h2>
            <ListComponent items={temasItems} />
            <br />

            <br />
            <h2>
              12. Quantidade de atendimentos remotos de famílias por semana no mês
            </h2>

            <TableTwoColumns
              headers={atendimentosRemotosFamiliaSemanaHeaders}
              body={atendimentosRemotosFamiliaSemana}
            />

            <h2>
              13. Quantidade de atividades remotas
              realizadas no mês, pelos meios em que foram disponibilizadas
            </h2>

            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTipos}
            />

          </Section>
        </>
      )

  );
};

export default Response;
