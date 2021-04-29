import React, {
  useState, useEffect, useContext,
} from 'react';
import { useHistory } from 'react-router-dom';

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

const atendidosMesHeaders = ['',
  'N° de usuários atendidos no mês',
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

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const Response:any = () => {
  const [services, setServices]:any = useState([]);
  const { context }:any = useContext(infoContext);
  const {
    nomeSAS, mes, token,
  } = context;
  const [loading, setLoading] = useState(true);
  const tipologia = 'ncp';
  useEffect(() => {
    fetchServicesAnswers({
      nomeSAS, mes, token, tipologia, setServices, setLoading,
    });
  }, []);

  const atendidosMesFeminino = [
    createData('0 a 11 anos (F)',
      services['ncpopruaatendfem[0a11f_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('12 a 17 anos (F)',
      services['ncpopruaatendfem[12a17f_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos (F)',
      services['ncpopruaatendfem[18a29f_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos (F)',
      services['ncpopruaatendfem[30a59f_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('60 a 64 anos (F)',
      services['ncpopruaatendfem[60a64f_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos (F)',
      services['ncpopruaatendfem[65a69f_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos (F)',
      services['ncpopruaatendfem[70a74f_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('75 anos ou mais (F)',
      services['ncpopruaatendfem[75maisf_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['ncpopruaatendfem[0a11f_freqpresencial]'], 10)
      + parseInt(services['ncpopruaatendfem[12a17f_freqpresencial]'], 10)
      + parseInt(services['ncpopruaatendfem[18a29f_freqpresencial]'], 10)
      + parseInt(services['ncpopruaatendfem[30a59f_freqpresencial]'], 10)
      + parseInt(services['ncpopruaatendfem[60a64f_freqpresencial]'], 10)
      + parseInt(services['ncpopruaatendfem[65a69f_freqpresencial]'], 10)
      + parseInt(services['ncpopruaatendfem[70a74f_freqpresencial]'], 10)
      + parseInt(services['ncpopruaatendfem[75maisf_freqpresencial]'], 10),
      1,
      1,
      1, 1, 1, 1, 1, 1),
  ];

  const atendidosMesMasculino = [
    createData('0 a 11 anos (M)',
      services['ncpopruaatendmasc[0a11m_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('12 a 17 anos (M)',
      services['ncpopruaatendmasc[12a17m_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos (M)',
      services['ncpopruaatendmasc[18a29m_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos (M)',
      services['ncpopruaatendmasc[30a59m_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('60 a 64 anos (M)',
      services['ncpopruaatendmasc[60a64m_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos (M)',
      services['ncpopruaatendmasc[65a69m_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos (M)',
      services['ncpopruaatendmasc[70a74m_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('75 anos ou mais (M)',
      services['ncpopruaatendmasc[75maism_freqpresencial]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['ncpopruaatendmasc[0a11m_freqpresencial]'], 10)
      + parseInt(services['ncpopruaatendmasc[12a17m_freqpresencial]'], 10)
      + parseInt(services['ncpopruaatendmasc[18a29m_freqpresencial]'], 10)
      + parseInt(services['ncpopruaatendmasc[30a59m_freqpresencial]'], 10)
      + parseInt(services['ncpopruaatendmasc[60a64m_freqpresencial]'], 10)
      + parseInt(services['ncpopruaatendmasc[65a69m_freqpresencial]'], 10)
      + parseInt(services['ncpopruaatendmasc[70a74m_freqpresencial]'], 10)
      + parseInt(services['ncpopruaatendmasc[75maism_freqpresencial]'], 10),
      1,
      1,
      1, 1, 1, 1, 1, 1),
  ];
  const sexoRacaCor = [
    createData('Feminino',
      services['ncpopruaracasexo[fem_branca]'],
      services['ncpopruaracasexo[fem_preta]'],
      services['ncpopruaracasexo[fem_parda]'],
      services['ncpopruaracasexo[fem_amarela]'],
      services['ncpopruaracasexo[fem_indigena]'],
      services['ncpopruaracasexo[fem_naoinf]'],
      parseInt(services['ncpopruaracasexo[fem_branca]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_preta]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_parda]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_amarela]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_indigena]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['ncpopruaracasexo[masc_branca]'],
      services['ncpopruaracasexo[masc_preta]'],
      services['ncpopruaracasexo[masc_parda]'],
      services['ncpopruaracasexo[masc_amarela]'],
      services['ncpopruaracasexo[masc_indigena]'],
      services['ncpopruaracasexo[masc_naoinf]'],
      parseInt(services['ncpopruaracasexo[masc_branca]'], 10)
      + parseInt(services['ncpopruaracasexo[masc_preta]'], 10)
      + parseInt(services['ncpopruaracasexo[masc_parda]'], 10)
      + parseInt(services['ncpopruaracasexo[masc_amarela]'], 10)
      + parseInt(services['ncpopruaracasexo[masc_indigena]'], 10)
      + parseInt(services['ncpopruaracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['ncpopruaracasexo[masc_branca]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_branca]'], 10),
      parseInt(services['ncpopruaracasexo[masc_preta]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_preta]'], 10),
      parseInt(services['ncpopruaracasexo[masc_parda]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_parda]'], 10),
      parseInt(services['ncpopruaracasexo[masc_amarela]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_amarela]'], 10),
      parseInt(services['ncpopruaracasexo[masc_indigena]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_indigena]'], 10),
      parseInt(services['ncpopruaracasexo[masc_naoinf]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_naoinf]'], 10),
      parseInt(services['ncpopruaracasexo[masc_branca]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_branca]'], 10)
      + parseInt(services['ncpopruaracasexo[masc_preta]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_preta]'], 10)
      + parseInt(services['ncpopruaracasexo[masc_parda]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_parda]'], 10)
      + parseInt(services['ncpopruaracasexo[masc_amarela]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_amarela]'], 10)
      + parseInt(services['ncpopruaracasexo[masc_indigena]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_indigena]'], 10)
      + parseInt(services['ncpopruaracasexo[masc_naoinf]'], 10)
      + parseInt(services['ncpopruaracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const atividades = [
    createData('Oficina de geração de renda',
      services['ncpopruaatv[atvrenda_atvrealizadas]'],
      services['ncpopruaatv[atvrenda_atvparticipantes]'],
      1, 1, 1, 1, 1, 1, 1),
    createData('Oficina ocupacional',
      services['ncpopruaatv[atvocupacional_atvrealizadas]'],
      services['ncpopruaatv[atvocupacional_atvparticipantes]'],
      1, 1, 1, 1, 1, 1, 1),
    createData('Oficina temática',
      services['ncpopruaatv[atvtematica_atvrealizadas]'],
      services['ncpopruaatv[atvtematica_atvparticipantes]'],
      1, 1, 1, 1, 1, 1, 1),
    createData('Atividade em grupo',
      services['ncpopruaatv[atvgrupo_atvrealizadas]'],
      services['ncpopruaatv[atvgrupo_atvparticipantes]'],
      1, 1, 1, 1, 1, 1, 1),
    createData('Atendimento individual',
      services['ncpopruaatv[atvatendindividual_atvrealizadas]'],
      services['ncpopruaatv[atvatendindividual_atvparticipantes]'],
      1, 1, 1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['ncpopruaatv[atvrenda_atvrealizadas]'], 10)
      + parseInt(services['ncpopruaatv[atvocupacional_atvrealizadas]'], 10)
      + parseInt(services['ncpopruaatv[atvtematica_atvrealizadas]'], 10)
      + parseInt(services['ncpopruaatv[atvgrupo_atvrealizadas]'], 10)
      + parseInt(services['ncpopruaatv[atvatendindividual_atvrealizadas]'], 10),
      parseInt(services['ncpopruaatv[atvrenda_atvparticipantes]'], 10)
      + parseInt(services['ncpopruaatv[atvocupacional_atvparticipantes]'], 10)
      + parseInt(services['ncpopruaatv[atvtematica_atvparticipantes]'], 10)
      + parseInt(services['ncpopruaatv[atvgrupo_atvparticipantes]'], 10)
      + parseInt(services['ncpopruaatv[atvatendindividual_atvparticipantes]'], 10),
      1,
      1, 1, 1, 1, 1, 1),
  ];

  const infos = [
    createData('Nº de gestantes atendidas pelo serviço', services['ncpopruaoutrasinfos[gestante]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de gestantes com pré-natal em dia', services['ncpopruaoutrasinfos[gestanteprenatal]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('N° de pessoas que vieram de outros países (refugiados/imigrantes)', services['ncpopruaoutrasinfos[estrangeiro]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('N° de pessoas LGBTQIA+ atendidas', services['ncpopruaoutrasinfos[lgbt]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de pessoas vinculadas a um Centro de Acolhida', services['ncpopruaoutrasinfos[vinculadoca]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de pessoas que tenham PIA em execução', services['ncpopruaoutrasinfos[piaexecucao]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de pessoas com deficiência atendidas pelo serviço', services['ncpopruaoutrasinfos[pcd]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];
  const encaminhamentos = [
    createData('CRAS', services['ncpopruaencaminhamen[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['ncpopruaencaminhamen[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CENTRO POP', services['ncpopruaencaminhamen[cpop]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['ncpopruaencaminhamen[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['ncpopruaencaminhamen[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
              1. Quantidade de pessoas do sexo feminino atendidas pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={atendidosMesHeaders} body={atendidosMesFeminino} />

            <h2>
              2. Quantidade de pessoas do sexo masculino
              atendidos pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={atendidosMesHeaders} body={atendidosMesMasculino} />
            <h2>
              3. Quantidade de pessoas atendidas por sexo e raça/cor no mês de referência.
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <h2>
              4. Nº de pessoas que participaram das atividades propostas pelo serviço:
            </h2>
            <br />
            <TableThreeColumns headers={['Número de atividades realizadas', 'Número de participantes na atividade']} body={atividades} />

            <h2>
              5. Quantifique as situações abaixo com os dados do mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={infos} />
            <br />
            <h2>
              6. Encaminhamentos realizados pelo serviço no mês de referência:
            </h2>

            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

          </Section>
        </>
      )
  );
};

export default Response;
