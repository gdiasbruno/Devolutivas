import React, {
  useState, useEffect, useContext,
} from 'react';

import MoonLoader from 'react-spinners/MoonLoader';

import {
  Section, LoaderBody,
} from './styles';
import { fetchServicesAnswers } from './TableLinesValues';

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

  useEffect(() => {
    fetchServicesAnswers({
      nomeSAS, mes, token, tipologia, setServices, setLoading,
    });
  }, []);

  const atendidosMes = [
    createData('Nº de pessoas atendidas no mês',
      services['sadpifluxopessoas[atendidos_60a64m]'],
      services['sadpifluxopessoas[atendidos_60a64f]'],
      services['sadpifluxopessoas[atendidos_65a69m]'],
      services['sadpifluxopessoas[atendidos_65a69f]'],
      services['sadpifluxopessoas[atendidos_70a74m]'],
      services['sadpifluxopessoas[atendidos_70a74f]'],
      services['sadpifluxopessoas[atendidos_75maism]'],
      services['sadpifluxopessoas[atendidos_75maisf]'],
      parseInt(services['sadpifluxopessoas[atendidos_60a64m]'], 10)
      + parseInt(services['sadpifluxopessoas[atendidos_60a64f]'], 10)
    + parseInt(services['sadpifluxopessoas[atendidos_65a69m]'], 10)
    + parseInt(services['sadpifluxopessoas[atendidos_65a69f]'], 10)
    + parseInt(services['sadpifluxopessoas[atendidos_70a74m]'], 10)
    + parseInt(services['sadpifluxopessoas[atendidos_70a74f]'], 10)
    + parseInt(services['sadpifluxopessoas[atendidos_75maism]'], 10)
    + parseInt(services['sadpifluxopessoas[atendidos_75maisf]'], 10)),
  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['sadpiracasexo[fem_branca]'],
      services['sadpiracasexo[fem_preta]'],
      services['sadpiracasexo[fem_parda]'],
      services['sadpiracasexo[fem_amarela]'],
      services['sadpiracasexo[fem_indigena]'],
      services['sadpiracasexo[fem_naoinf]'],
      parseInt(services['sadpiracasexo[fem_branca]'], 10)
      + parseInt(services['sadpiracasexo[fem_preta]'], 10)
      + parseInt(services['sadpiracasexo[fem_parda]'], 10)
      + parseInt(services['sadpiracasexo[fem_amarela]'], 10)
      + parseInt(services['sadpiracasexo[fem_indigena]'], 10)
      + parseInt(services['sadpiracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['sadpiracasexo[masc_branca]'],
      services['sadpiracasexo[masc_preta]'],
      services['sadpiracasexo[masc_parda]'],
      services['sadpiracasexo[masc_amarela]'],
      services['sadpiracasexo[masc_indigena]'],
      services['sadpiracasexo[masc_naoinf]'],
      parseInt(services['sadpiracasexo[masc_branca]'], 10)
      + parseInt(services['sadpiracasexo[masc_preta]'], 10)
      + parseInt(services['sadpiracasexo[masc_parda]'], 10)
      + parseInt(services['sadpiracasexo[masc_amarela]'], 10)
      + parseInt(services['sadpiracasexo[masc_indigena]'], 10)
      + parseInt(services['sadpiracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['sadpiracasexo[masc_branca]'], 10)
      + parseInt(services['sadpiracasexo[fem_branca]'], 10),
      parseInt(services['sadpiracasexo[masc_preta]'], 10)
      + parseInt(services['sadpiracasexo[fem_preta]'], 10),
      parseInt(services['sadpiracasexo[masc_parda]'], 10)
      + parseInt(services['sadpiracasexo[fem_parda]'], 10),
      parseInt(services['sadpiracasexo[masc_amarela]'], 10)
      + parseInt(services['sadpiracasexo[fem_amarela]'], 10),
      parseInt(services['sadpiracasexo[masc_indigena]'], 10)
      + parseInt(services['sadpiracasexo[fem_indigena]'], 10),
      parseInt(services['sadpiracasexo[masc_naoinf]'], 10)
      + parseInt(services['sadpiracasexo[fem_naoinf]'], 10),
      parseInt(services['sadpiracasexo[masc_branca]'], 10)
      + parseInt(services['sadpiracasexo[fem_branca]'], 10)
      + parseInt(services['sadpiracasexo[masc_preta]'], 10)
      + parseInt(services['sadpiracasexo[fem_preta]'], 10)
      + parseInt(services['sadpiracasexo[masc_parda]'], 10)
      + parseInt(services['sadpiracasexo[fem_parda]'], 10)
      + parseInt(services['sadpiracasexo[masc_amarela]'], 10)
      + parseInt(services['sadpiracasexo[fem_amarela]'], 10)
      + parseInt(services['sadpiracasexo[masc_indigena]'], 10)
      + parseInt(services['sadpiracasexo[fem_indigena]'], 10)
      + parseInt(services['sadpiracasexo[masc_naoinf]'], 10)
      + parseInt(services['sadpiracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const motivoSaida = [
    createData('Mudança de endereço',
      services['sadpisaida[mudancaendereco_quantidade]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Encaminhado para ILPI',
      services['sadpisaida[ilpi_quantidade]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Óbito',
      services['sadpisaida[obito_quantidade]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Alcance de autonomia',
      services['sadpisaida[autonomia_quantidade]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Resgate de vínculos familiares',
      services['sadpisaida[resgate_quantidade]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['sadpisaida[autonomia_quantidade]'], 10)
      + parseInt(services['sadpisaida[ilpi_quantidade]'], 10)
      + parseInt(services['sadpisaida[obito_quantidade]'], 10)
      + parseInt(services['sadpisaida[mudancaendereco_quantidade]'], 10)
      + parseInt(services['sadpisaida[resgate_quantidade]'], 10),
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];

  const idososMoramSozinho = [
    createData('Quantidade de idosos que moram sozinhos',
      services['sadpiidosossozinho[idososo]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Destes, quantos contam com apoio da família / comunidade',
      services['sadpiidosossozinho[ajudaidosos]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];

  const infoSobreIdosos = [
    createData('Nº de idosos com deficiência atendidos pelo serviço', services['sadpiinfogerais[pcd]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de idosos que recebem BPC', services['sadpiinfogerais[bpc]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de refeições concedidas pelo serviço', services['sadpiinfogerais[refeicao]'], 1, 1, 1, 1, 1, 1, 1, 1),

  ];

  const familiasVulnerabilidade = [
    createData('Conflitos', services['sadpivulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Preconceitos/discriminação', services['sadpivulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Abandono', services['sadpivulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Apartação', services['sadpivulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Confinamento', services['sadpivulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Isolamento', services['sadpivulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Violência', services['sadpivulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const temasItems = [
    ['Direitos e programas sociais', services['sadpitema[temadireitos]']],
    ['Segurança alimentar e nutricional', services['sadpitema[temanutricao]']],
    ['Orientações sobre higiene e cuidados pessoais', services['sadpitema[temahigiene]']],
  ];

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
