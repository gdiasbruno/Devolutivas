import React, {
  useState, useEffect, useContext,
} from 'react';

import MoonLoader from 'react-spinners/MoonLoader';

import {
  Section, LoaderBody,
} from './styles';
import { fetchServicesAnswers } from './TableLinesValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
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
    nomeSAS, mes, token, tipologia,
  } = context;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServicesAnswers({
      nomeSAS, mes, token, tipologia, setServices, setLoading,
    });
  }, []);

  const sexoRacaCor = [
    createData('Feminino',
      services['bagracasexo[fem_branca]'],
      services['bagracasexo[fem_preta]'],
      services['bagracasexo[fem_parda]'],
      services['bagracasexo[fem_amarela]'],
      services['bagracasexo[fem_indigena]'],
      services['bagracasexo[fem_naoinf]'],
      parseInt(services['bagracasexo[fem_branca]'], 10)
      + parseInt(services['bagracasexo[fem_preta]'], 10)
      + parseInt(services['bagracasexo[fem_parda]'], 10)
      + parseInt(services['bagracasexo[fem_amarela]'], 10)
      + parseInt(services['bagracasexo[fem_indigena]'], 10)
      + parseInt(services['bagracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['bagracasexo[mas_branca]'],
      services['bagracasexo[mas_preta]'],
      services['bagracasexo[mas_parda]'],
      services['bagracasexo[mas_amarela]'],
      services['bagracasexo[mas_indigena]'],
      services['bagracasexo[mas_naoinf]'],
      parseInt(services['bagracasexo[mas_branca]'], 10)
      + parseInt(services['bagracasexo[mas_preta]'], 10)
      + parseInt(services['bagracasexo[mas_parda]'], 10)
      + parseInt(services['bagracasexo[mas_amarela]'], 10)
      + parseInt(services['bagracasexo[mas_indigena]'], 10)
      + parseInt(services['bagracasexo[mas_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['bagracasexo[mas_branca]'], 10)
      + parseInt(services['bagracasexo[fem_branca]'], 10),
      parseInt(services['bagracasexo[mas_preta]'], 10)
      + parseInt(services['bagracasexo[fem_preta]'], 10),
      parseInt(services['bagracasexo[mas_parda]'], 10)
      + parseInt(services['bagracasexo[fem_parda]'], 10),
      parseInt(services['bagracasexo[mas_amarela]'], 10)
      + parseInt(services['bagracasexo[fem_amarela]'], 10),
      parseInt(services['bagracasexo[mas_indigena]'], 10)
      + parseInt(services['bagracasexo[fem_indigena]'], 10),
      parseInt(services['bagracasexo[mas_naoinf]'], 10)
      + parseInt(services['bagracasexo[fem_naoinf]'], 10),
      parseInt(services['bagracasexo[mas_branca]'], 10)
      + parseInt(services['bagracasexo[fem_branca]'], 10)
      + parseInt(services['bagracasexo[mas_preta]'], 10)
      + parseInt(services['bagracasexo[fem_preta]'], 10)
      + parseInt(services['bagracasexo[mas_parda]'], 10)
      + parseInt(services['bagracasexo[fem_parda]'], 10)
      + parseInt(services['bagracasexo[mas_amarela]'], 10)
      + parseInt(services['bagracasexo[fem_amarela]'], 10)
      + parseInt(services['bagracasexo[mas_indigena]'], 10)
      + parseInt(services['bagracasexo[fem_indigena]'], 10)
      + parseInt(services['bagracasexo[mas_naoinf]'], 10)
      + parseInt(services['bagracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['bagencaminhamento[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['bagencaminhamento[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CENTRO POP', services['bagencaminhamento[cpop]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['bagencaminhamento[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['bagencaminhamento[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
              1. Número de pessoas que utilizaram o serviço no mês:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Visita(s)', services.bagatendmes, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              2. Quantidade de pessoas atendidas por sexo e raça/cor no mês de referência.
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <h2>
              3. Número de boxes utilizados no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Boxe(s)', services.bagbox, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              4. Nº de pessoas que utilizaram o
              serviço Bagageiro e estão vinculadas a um Centro de Acolhida no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoas(s)', services.bagvinca, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              5. Nº de pessoas que receberam atendimento social no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.bagatendsocial, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              6. Nº de pessoas com deficiência atendidas pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.bagpcd, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              7. Encaminhamentos realizados pelo serviço no mês de referência
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />
          </Section>
        </>
      )

  );
};

export default Response;
