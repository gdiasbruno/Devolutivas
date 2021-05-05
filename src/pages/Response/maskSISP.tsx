import React, {
  useState, useEffect, useContext,
} from 'react';

import { useHistory } from 'react-router-dom';

import MoonLoader from 'react-spinners/MoonLoader';

import {
  Section, LoaderBody,
} from './styles';
import { fetchServicesAnswers } from './ServiceValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import Navbar from '../../components/Navbar';

import { infoContext } from '../../providers/reactContext';
import HeaderInfo from '../../components/HeaderInfo';

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
const encaminhamentosHeaders = ['Origem', 'Total'];

const genericTotalTecHeader = ['', 'Total'];

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
  const atendFem = [
    createData('18 a 29 anos (F)',
      services['sispatendfem[18a29f]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos (F)',
      services['sispatendfem[30a59f]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('60 a 64 anos (F)',
      services['sispatendfem[60a64f]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos (F)',
      services['sispatendfem[65a69f]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos (F)',
      services['sispatendfem[70a74f]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('75 anos ou mais (F)',
      services['sispatendfem[75maisf]'],
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendMasc = [
    createData('18 a 29 anos (M)',
      services['sispatendmasc[18a29m]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos (M)',
      services['sispatendmasc[30a59m]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('60 a 64 anos (M)',
      services['sispatendmasc[60a64m]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos (M)',
      services['sispatendmasc[65a69m]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos (M)',
      services['sispatendmasc[70a74m]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('75 anos ou mais (M)',
      services['sispatendmasc[75maism]'],
      1, 1, 1, 1, 1, 1, 1, 1),

  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['sispracasexo[fem_branca]'],
      services['sispracasexo[fem_preta]'],
      services['sispracasexo[fem_parda]'],
      services['sispracasexo[fem_amarela]'],
      services['sispracasexo[fem_indigena]'],
      services['sispracasexo[fem_naoinf]'],
      parseInt(services['sispracasexo[fem_branca]'], 10)
      + parseInt(services['sispracasexo[fem_preta]'], 10)
      + parseInt(services['sispracasexo[fem_parda]'], 10)
      + parseInt(services['sispracasexo[fem_amarela]'], 10)
      + parseInt(services['sispracasexo[fem_indigena]'], 10)
      + parseInt(services['sispracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['sispracasexo[masc_branca]'],
      services['sispracasexo[masc_preta]'],
      services['sispracasexo[masc_parda]'],
      services['sispracasexo[masc_amarela]'],
      services['sispracasexo[masc_indigena]'],
      services['sispracasexo[masc_naoinf]'],
      parseInt(services['sispracasexo[masc_branca]'], 10)
      + parseInt(services['sispracasexo[masc_preta]'], 10)
      + parseInt(services['sispracasexo[masc_parda]'], 10)
      + parseInt(services['sispracasexo[masc_amarela]'], 10)
      + parseInt(services['sispracasexo[masc_indigena]'], 10)
      + parseInt(services['sispracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['sispracasexo[masc_branca]'], 10)
      + parseInt(services['sispracasexo[fem_branca]'], 10),
      parseInt(services['sispracasexo[masc_preta]'], 10)
      + parseInt(services['sispracasexo[fem_preta]'], 10),
      parseInt(services['sispracasexo[masc_parda]'], 10)
      + parseInt(services['sispracasexo[fem_parda]'], 10),
      parseInt(services['sispracasexo[masc_amarela]'], 10)
      + parseInt(services['sispracasexo[fem_amarela]'], 10),
      parseInt(services['sispracasexo[masc_indigena]'], 10)
      + parseInt(services['sispracasexo[fem_indigena]'], 10),
      parseInt(services['sispracasexo[masc_naoinf]'], 10)
      + parseInt(services['sispracasexo[fem_naoinf]'], 10),
      parseInt(services['sispracasexo[masc_branca]'], 10)
      + parseInt(services['sispracasexo[fem_branca]'], 10)
      + parseInt(services['sispracasexo[masc_preta]'], 10)
      + parseInt(services['sispracasexo[fem_preta]'], 10)
      + parseInt(services['sispracasexo[masc_parda]'], 10)
      + parseInt(services['sispracasexo[fem_parda]'], 10)
      + parseInt(services['sispracasexo[masc_amarela]'], 10)
      + parseInt(services['sispracasexo[fem_amarela]'], 10)
      + parseInt(services['sispracasexo[masc_indigena]'], 10)
      + parseInt(services['sispracasexo[fem_indigena]'], 10)
      + parseInt(services['sispracasexo[masc_naoinf]'], 10)
      + parseInt(services['sispracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const perfilAssociados = [
    createData('Número de gestantes atendidas pelo serviço:',
      services['sispoutrasinfos[gestante]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Número de gestantes com pré-natal em dia atendidas pelo serviço:',
      services['sispoutrasinfos[gestanteprenatal]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Número de pessoas vinculadas a um Centro de Acolhida atendidas pelo serviço:',
      services['sispoutrasinfos[vinculadoca]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Número de pessoas com PIA em execução atendidas pelo serviço:',
      services['sispoutrasinfos[piaexecucao]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Número de pessoas que se associaram a cooperativas e/ou centrais de coleta atendidas pelo serviço:',
      services['sispoutrasinfos[cooperativa]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Número de pessoas com deficiência atendidas pelo serviço:',
      services['sispoutrasinfos[pcd]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const oficinas = [
    createData('Número de oficinas realizadas no mês:', services['sispoficinas[qtdoficinas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Número de inscritos nas oficinas realizadas no mês:', services['sispoficinas[inscritosoficina]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentosFinal = [
    createData('CRAS', services['sispencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['sispencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CENTRO POP', services['sispencaminhamentos[cpop]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['sispencaminhamentos[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['sispencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
              1. Nº de pessoas do sexo feminino atendidas pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={atendFem} />

            <h2>
              2. Nº de pessoas do sexo masculino atendidas pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={atendMasc} />

            <h2>
              3. Quantidade de pessoas atendidas por sexo e raça/cor no mês de referência.
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <br />

            <h2>
              4. Perfil das pessoas que se associaram no mês:
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={perfilAssociados} />

            <br />

            <h2>
              5. Oficinas realizadas no mês:
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={oficinas} />

            <h2>
              6. Encaminhamentos realizados pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentosFinal} />

            <br />

          </Section>
        </>
      )

  );
};

export default Response;
