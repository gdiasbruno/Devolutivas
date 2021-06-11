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
  temasItemsSADPI,
  motivoSaidaSADPI,
  sexoRacaCorSADPI,
  atendidosMesSADPI,
  infoSobreIdososSADPI,
  idososMoramSozinhoSADPI,
  familiasVulnerabilidadeSADPI,

} from './ServiceValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableTenColumns from '../../components/TableTenColumns';
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

const atendidosMesHeaders = [
  '60 a 64 anos (M)',
  '60 a 64 anos (F)',
  '65 a 69 anos (M)',
  '65 a 69 anos (F)',
  '70 a 74 anos (M)',
  '70 a 74 anos (F)',
  '75 anos ou mais (M)',
  '75 anos ou mais (F)',
  'Total',
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
const motivoSaidaHeaders = ['', 'Quantidade'];

const ResponseCRECI:any = () => {
  const [services, setServices]:any = useState([]);
  const { context }:any = useContext(infoContext);
  const {
    nomeSAS, mes, token,
  } = context;
  const [loading, setLoading] = useState(true);
  const tipologia = 'sad';
  const history = useHistory();

  useEffect(() => {
    fetchServicesAnswers({
      nomeSAS, mes, token, tipologia, setServices, setLoading, history,
    });
  }, []);

  const atendidosMes = atendidosMesSADPI({ services, createData });

  const sexoRacaCor = sexoRacaCorSADPI({ services, createData });

  const motivoSaida = motivoSaidaSADPI({ services, createData });

  const idososMoramSozinho = idososMoramSozinhoSADPI({ services, createData });

  const infoSobreIdosos = infoSobreIdososSADPI({ services, createData });

  const familiasVulnerabilidade = familiasVulnerabilidadeSADPI({ services, createData });

  const temasItems = temasItemsSADPI({ services, createData });

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
              1. Quantidade de pessoas atendidas no mês, por sexo e faixa etária
            </h2>
            <TableTenColumns headers={atendidosMesHeaders} body={atendidosMes} />
            <h2>
              2. Quantidade idosos atendidos no mês, por sexo e raça/cor
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
            <h2>
              3. Quantidade de usuários por motivo de saída do serviço no mês
            </h2>
            <TableTwoColumns headers={motivoSaidaHeaders} body={motivoSaida} />
            <h2>
              4. Informe um valor para as situações apresentadas abaixo
            </h2>
            <TableTwoColumns headers={idososMoramSozinhoHeaders} body={idososMoramSozinho} />

            <br />
            <h2>
              5. Os temas discutidos com as pessoas atendidas pelo serviço no mês de referência
            </h2>
            <ListComponent items={temasItems} />
            <br />
            <h2>
              6. O número de famílias ou pessoas
              que buscaram atendimento presencial no mês
              de referência devido a alguma vulnerabilidade
              relacional
            </h2>
            <TableTwoColumns
              headers={familiasVulnerabilidadeHeaders}
              body={familiasVulnerabilidade}
            />

            <h2>
              7. Quantifique as situações abaixo com os dados do mês de referência:
            </h2>
            <TableTwoColumns headers={infoSobreIdososHeaders} body={infoSobreIdosos} />
          </Section>
        </>
      )
  );
};

export default ResponseCRECI;
