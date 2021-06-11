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
  temasItemsCRECI,
  sexoRacaCorCRECI,
  atendidosMesCRECI,
  idososInsumosCRECI,
  atividadesItemsCRECI,
  encaminhamentosCRECI,
  infoSobreIdososCRECI,
  demandaReprimidaCRECI,
  idososMoramSozinhoCRECI,
  atendimentosRemotosCRECI,
  familiasVulnerabilidadeCRECI,
  atendimentosRemotosTiposCRECI,
  atendimentosRemotosFamiliaSemanaCRECI,
} from './ServiceValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableNineColumns from '../../components/TableNineColumns';
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
  };
}

const atendidosMesHeaders = [
  '60 a 64 anos (M)',
  '60 a 64 anos (F)',
  '65 a 69 anos (M)',
  '65 a 69 anos (F)',
  '70 a 74 anos (M)',
  '70 a 74 anos (F)',
  '75 anos ou mais (M)',
  '75 anos ou mais (F)',
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

const idososMoramSozinhoHeaders = ['', 'Quantidade'];

const infoSobreIdososHeaders = ['', 'Nº de idosos'];

const familiasVulnerabilidadeHeaders = ['', 'Nº de famílias'];

const demandaReprimidaHeaders = ['', 'Nº de adolescentes'];

const idososInsumosHeaders = ['', 'N° de idosos'];

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const atendimentosRemotosHeaders = ['', 'Atendimentos Remotos'];

const atendimentosRemotosTiposHeaders = ['Tipos', ''];

const atendimentosRemotosFamiliaSemanaHeaders = ['Semanas', 'Nº de famílias'];

const ResponseCRECI:any = () => {
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

  const atendidosMes = atendidosMesCRECI({ services, createData });

  const sexoRacaCor = sexoRacaCorCRECI({ services, createData });

  const idososMoramSozinho = idososMoramSozinhoCRECI({ services, createData });

  const infoSobreIdosos = infoSobreIdososCRECI({ services, createData });

  const familiasVulnerabilidade = familiasVulnerabilidadeCRECI({ services, createData });

  const atividadesItems = atividadesItemsCRECI({ services, createData });

  const temasItems = temasItemsCRECI({ services, createData });

  const demandaReprimida = demandaReprimidaCRECI({ services, createData });

  const idososInsumos = idososInsumosCRECI({ services, createData });

  const encaminhamentos = encaminhamentosCRECI({ services, createData });

  const atendimentosRemotos = atendimentosRemotosCRECI({ services, createData });

  const atendimentosRemotosTipos = atendimentosRemotosTiposCRECI({ services, createData });

  const atendimentosRemotosFamiliaSemana = atendimentosRemotosFamiliaSemanaCRECI({
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
              1. Quantidade de idosos atendidos no mês, por faixa etária e sexo:
            </h2>
            <TableNineColumns headers={atendidosMesHeaders} body={atendidosMes} />

            <h2>
              2. Quantidade de idosos atendidos no mês, por sexo e raça/cor:
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <h2>
              3. A quantidade de idosos com deficiência atendidos no mês de referência
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Idoso(s)', services.creciusuariospcd, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              4. Quantidade de idosos que moram sozinhos atendidos no mês:
            </h2>
            <TableTwoColumns headers={idososMoramSozinhoHeaders} body={idososMoramSozinho} />

            <h2>
              4. o número de famílias ou pessoas que buscaram atendimento
              presencial no mês de referência devido a alguma vulnerabilidade relacional :
            </h2>

            <TableTwoColumns
              headers={familiasVulnerabilidadeHeaders}
              body={familiasVulnerabilidade}
            />

            <h2>
              5. Quantidade de idosos incluídos na lista de espera
              (demanda reprimida) do serviço no mês:
            </h2>
            <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />

            <h2>
              6. Quantifique as informações abaixo com os dados do mês de referência
            </h2>
            <TableTwoColumns headers={infoSobreIdososHeaders} body={infoSobreIdosos} />

            <h2>
              7. As atividades realizadas com os idosos atendidas no mês pelo serviço
            </h2>
            <ListComponent items={atividadesItems} />

            <h2>
              8. Os temas discutidos com os idosos atendidos no mês pelo serviço:
            </h2>
            <ListComponent items={temasItems} />

            <h2>
              9. Encaminhamentos realizados pelo serviço no mês:
            </h2>

            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              10. Quantidade de idosos que receberam insumos no mês:
            </h2>
            <TableTwoColumns headers={idososInsumosHeaders} body={idososInsumos} />

            <h2>
              11. Quantidade de atendimentos remotos de usuários por semana no mês:
            </h2>
            <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

            <h2>
              12. Quantidade de atividades remotas realizadas no mês,
              pelos meios em que foram disponibilizadas:
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTipos}
            />

            <h2>
              13. Quantidade de atendimentos remotos de familiares por semana no mês:
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

export default ResponseCRECI;
