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
import TableFourColumns from '../../components/TableFourColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import TableFiveColumns from '../../components/TableFiveColumns';
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

const atendidosMesHeaders = [
  'PSC',
  'LA',
  'Medida Acumulada - PSC+LA',
  'Segunda Medida',
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

  const atendidosMes = [

    createData('12 a 14 (F)',
      services['mseatend[12a14f_atendpsc]'],
      services['mseatend[12a14f_atendla]'],
      services['mseatend[12a14f_atendacumulada]'],
      services['mseatend[12a14f_atendsegmedida]'],
      1, 1, 1, 1, 1),
    createData('12 a 14 (M)',
      services['mseatend[12a14m_atendpsc]'],
      services['mseatend[12a14m_atendla]'],
      services['mseatend[12a14m_atendacumulada]'],
      services['mseatend[12a14m_atendsegmedida]'],
      1, 1, 1, 1, 1),

    createData('15 a 17 (F)',
      services['mseatend[15a17f_atendpsc]'],
      services['mseatend[15a17f_atendla]'],
      services['mseatend[15a17f_atendacumulada]'],
      services['mseatend[15a17f_atendsegmedida]'],
      1, 1, 1, 1, 1),
    createData('15 a 17 (M)',
      services['mseatend[15a17m_atendpsc]'],
      services['mseatend[15a17m_atendla]'],
      services['mseatend[15a17m_atendacumulada]'],
      services['mseatend[15a17m_atendsegmedida]'],
      1, 1, 1, 1, 1),
    createData('18 anos ou mais (F)',
      services['mseatend[18oumaisf_atendpsc]'],
      services['mseatend[18oumaisf_atendla]'],
      services['mseatend[18oumaisf_atendacumulada]'],
      services['mseatend[18oumaisf_atendsegmedida]'],
      1, 1, 1, 1, 1),
    createData('18 anos ou mais (F)',
      services['mseatend[18oumaism_atendpsc]'],
      services['mseatend[18oumaism_atendla]'],
      services['mseatend[18oumaism_atendacumulada]'],
      services['mseatend[18oumaism_atendsegmedida]'],
      1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['mseatend[12a14f_atendpsc]'], 10)
      + parseInt(services['mseatend[12a14m_atendpsc]'], 10)
      + parseInt(services['mseatend[15a17f_atendpsc]'], 10)
      + parseInt(services['mseatend[15a17m_atendpsc]'], 10)
      + parseInt(services['mseatend[18oumaisf_atendpsc]'], 10)
      + parseInt(services['mseatend[18oumaism_atendpsc]'], 10),
      parseInt(services['mseatend[12a14f_atendla]'], 10)
      + parseInt(services['mseatend[12a14m_atendla]'], 10)
      + parseInt(services['mseatend[15a17f_atendla]'], 10)
      + parseInt(services['mseatend[15a17m_atendla]'], 10)
      + parseInt(services['mseatend[18oumaisf_atendla]'], 10)
      + parseInt(services['mseatend[18oumaism_atendla]'], 10),
      parseInt(services['mseatend[12a14f_atendacumulada]'], 10)
      + parseInt(services['mseatend[12a14m_atendacumulada]'], 10)
      + parseInt(services['mseatend[15a17f_atendacumulada]'], 10)
      + parseInt(services['mseatend[15a17m_atendacumulada]'], 10)
      + parseInt(services['mseatend[18oumaisf_atendacumulada]'], 10)
      + parseInt(services['mseatend[18oumaism_atendacumulada]'], 10),
      parseInt(services['mseatend[12a14f_atendsegmedida]'], 10)
      + parseInt(services['mseatend[12a14m_atendsegmedida]'], 10)
      + parseInt(services['mseatend[15a17f_atendsegmedida]'], 10)
      + parseInt(services['mseatend[15a17m_atendsegmedida]'], 10)
      + parseInt(services['mseatend[18oumaisf_atendsegmedida]'], 10)
      + parseInt(services['mseatend[18oumaism_atendsegmedida]'], 10),
      1,
      1,
      1, 1, 1),
  ];
  const entradasMes = [
    createData('12 a 14 (F)',
      services['mseentrada[12a14f_atendpsc]'],
      services['mseentrada[12a14f_atendla]'],
      services['mseentrada[12a14f_atendacumulada]'],
      services['mseentrada[12a14f_atendsegmedida]'],
      1, 1, 1, 1, 1),
    createData('12 a 14 (M)',
      services['mseentrada[12a14m_atendpsc]'],
      services['mseentrada[12a14m_atendla]'],
      services['mseentrada[12a14m_atendacumulada]'],
      services['mseentrada[12a14m_atendsegmedida]'],
      1, 1, 1, 1, 1),

    createData('15 a 17 (F)',
      services['mseentrada[15a17f_atendpsc]'],
      services['mseentrada[15a17f_atendla]'],
      services['mseentrada[15a17f_atendacumulada]'],
      services['mseentrada[15a17f_atendsegmedida]'],
      1, 1, 1, 1, 1),
    createData('15 a 17 (M)',
      services['mseentrada[15a17m_atendpsc]'],
      services['mseentrada[15a17m_atendla]'],
      services['mseentrada[15a17m_atendacumulada]'],
      services['mseentrada[15a17m_atendsegmedida]'],
      1, 1, 1, 1, 1),
    createData('18 anos ou mais (F)',
      services['mseentrada[18oumaisf_atendpsc]'],
      services['mseentrada[18oumaisf_atendla]'],
      services['mseentrada[18oumaisf_atendacumulada]'],
      services['mseentrada[18oumaisf_atendsegmedida]'],
      1, 1, 1, 1, 1),
    createData('18 anos ou mais (F)',
      services['mseentrada[18oumaism_atendpsc]'],
      services['mseentrada[18oumaism_atendla]'],
      services['mseentrada[18oumaism_atendacumulada]'],
      services['mseentrada[18oumaism_atendsegmedida]'],
      1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['mseentrada[12a14f_atendpsc]'], 10)
    + parseInt(services['mseentrada[12a14m_atendpsc]'], 10)
    + parseInt(services['mseentrada[15a17f_atendpsc]'], 10)
    + parseInt(services['mseentrada[15a17m_atendpsc]'], 10)
    + parseInt(services['mseentrada[18oumaisf_atendpsc]'], 10)
    + parseInt(services['mseentrada[18oumaism_atendpsc]'], 10),
      parseInt(services['mseentrada[12a14f_atendla]'], 10)
    + parseInt(services['mseentrada[12a14m_atendla]'], 10)
    + parseInt(services['mseentrada[15a17f_atendla]'], 10)
    + parseInt(services['mseentrada[15a17m_atendla]'], 10)
    + parseInt(services['mseentrada[18oumaisf_atendla]'], 10)
    + parseInt(services['mseentrada[18oumaism_atendla]'], 10),
      parseInt(services['mseentrada[12a14f_atendacumulada]'], 10)
    + parseInt(services['mseentrada[12a14m_atendacumulada]'], 10)
    + parseInt(services['mseentrada[15a17f_atendacumulada]'], 10)
    + parseInt(services['mseentrada[15a17m_atendacumulada]'], 10)
    + parseInt(services['mseentrada[18oumaisf_atendacumulada]'], 10)
    + parseInt(services['mseentrada[18oumaism_atendacumulada]'], 10),
      parseInt(services['mseentrada[12a14f_atendsegmedida]'], 10)
    + parseInt(services['mseentrada[12a14m_atendsegmedida]'], 10)
    + parseInt(services['mseentrada[15a17f_atendsegmedida]'], 10)
    + parseInt(services['mseentrada[15a17m_atendsegmedida]'], 10)
    + parseInt(services['mseentrada[18oumaisf_atendsegmedida]'], 10)
    + parseInt(services['mseentrada[18oumaism_atendsegmedida]'], 10),
      1,
      1,
      1, 1, 1),
  ];

  const sexoRacaCor = [
    createData('Feminino',

      services['mseracasexo[fem_branca]'],
      services['mseracasexo[fem_preta]'],
      services['mseracasexo[fem_parda]'],
      services['mseracasexo[fem_amarela]'],
      services['mseracasexo[fem_indigena]'],
      services['mseracasexo[fem_naoinf]'],
      parseInt(services['mseracasexo[fem_branca]'], 10)
      + parseInt(services['mseracasexo[fem_preta]'], 10)
      + parseInt(services['mseracasexo[fem_parda]'], 10)
      + parseInt(services['mseracasexo[fem_amarela]'], 10)
      + parseInt(services['mseracasexo[fem_indigena]'], 10)
      + parseInt(services['mseracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['mseracasexo[masc_branca]'],
      services['mseracasexo[masc_preta]'],
      services['mseracasexo[masc_parda]'],
      services['mseracasexo[masc_amarela]'],
      services['mseracasexo[masc_indigena]'],
      services['mseracasexo[masc_naoinf]'],
      parseInt(services['mseracasexo[masc_branca]'], 10)
      + parseInt(services['mseracasexo[masc_preta]'], 10)
      + parseInt(services['mseracasexo[masc_parda]'], 10)
      + parseInt(services['mseracasexo[masc_amarela]'], 10)
      + parseInt(services['mseracasexo[masc_indigena]'], 10)
      + parseInt(services['mseracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['mseracasexo[masc_branca]'], 10)
      + parseInt(services['mseracasexo[fem_branca]'], 10),
      parseInt(services['mseracasexo[masc_preta]'], 10)
      + parseInt(services['mseracasexo[fem_preta]'], 10),
      parseInt(services['mseracasexo[masc_parda]'], 10)
      + parseInt(services['mseracasexo[fem_parda]'], 10),
      parseInt(services['mseracasexo[masc_amarela]'], 10)
      + parseInt(services['mseracasexo[fem_amarela]'], 10),
      parseInt(services['mseracasexo[masc_indigena]'], 10)
      + parseInt(services['mseracasexo[fem_indigena]'], 10),
      parseInt(services['mseracasexo[masc_naoinf]'], 10)
      + parseInt(services['mseracasexo[fem_naoinf]'], 10),
      parseInt(services['mseracasexo[masc_branca]'], 10)
      + parseInt(services['mseracasexo[fem_branca]'], 10)
      + parseInt(services['mseracasexo[masc_preta]'], 10)
      + parseInt(services['mseracasexo[fem_preta]'], 10)
      + parseInt(services['mseracasexo[masc_parda]'], 10)
      + parseInt(services['mseracasexo[fem_parda]'], 10)
      + parseInt(services['mseracasexo[masc_amarela]'], 10)
      + parseInt(services['mseracasexo[fem_amarela]'], 10)
      + parseInt(services['mseracasexo[masc_indigena]'], 10)
      + parseInt(services['mseracasexo[fem_indigena]'], 10)
      + parseInt(services['mseracasexo[masc_naoinf]'], 10)
      + parseInt(services['mseracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const motivosSaida = [
    createData('Cumprimento integral da MSE',
      services['msesaida[cumprintegralmse_psc]'],
      services['msesaida[cumprintegralmse_la]'],
      services['msesaida[cumprintegralmse_pscla]'],
      services['msesaida[cumprintegralmse_segmedida]'],
      1, 1, 1, 1, 1),
    createData('Descumprimento da MSE',
      services['msesaida[descumprmse_psc]'],
      services['msesaida[descumprmse_la]'],
      services['msesaida[descumprmse_pscla]'],
      services['msesaida[descumprmse_segmedida]'],
      1, 1, 1, 1, 1),
    createData('Transferência de SMSE',
      services['msesaida[transfermse_psc]'],
      services['msesaida[transfermse_la]'],
      services['msesaida[transfermse_pscla]'],
      services['msesaida[transfermse_segmedida]'],
      1, 1, 1, 1, 1),
    createData('Detenção',
      services['msesaida[detencao_psc]'],
      services['msesaida[detencao_la]'],
      services['msesaida[detencao_pscla]'],
      services['msesaida[detencao_segmedida]'],
      1, 1, 1, 1, 1),
    createData('Óbito',
      services['msesaida[obito_psc]'],
      services['msesaida[obito_la]'],
      services['msesaida[obito_pscla]'],
      services['msesaida[obito_segmedida]'],
      1, 1, 1, 1, 1),
    createData('Aplicação de medida em meio fechado (Fundação CASA)',
      services['msesaida[fundcasa_psc]'],
      services['msesaida[fundcasa_la]'],
      services['msesaida[fundcasa_pscla]'],
      services['msesaida[fundcasa_segmedida]'],
      1, 1, 1, 1, 1),
    createData('Limite de idade (21 anos)',
      services['msesaida[limiteidade21anos_psc]'],
      services['msesaida[limiteidade21anos_la]'],
      services['msesaida[limiteidade21anos_pscla]'],
      services['msesaida[limiteidade21anos_segmedida]'],
      1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['msesaida[cumprintegralmse_psc]'], 10)
    + parseInt(services['msesaida[descumprmse_psc]'], 10)
    + parseInt(services['msesaida[transfermse_psc]'], 10)
    + parseInt(services['msesaida[detencao_psc]'], 10)
    + parseInt(services['msesaida[obito_psc]'], 10)
    + parseInt(services['msesaida[fundcasa_psc]'], 10)
    + parseInt(services['msesaida[limiteidade21anos_psc]'], 10),
      parseInt(services['msesaida[cumprintegralmse_la]'], 10)
    + parseInt(services['msesaida[descumprmse_la]'], 10)
    + parseInt(services['msesaida[transfermse_la]'], 10)
    + parseInt(services['msesaida[detencao_la]'], 10)
    + parseInt(services['msesaida[obito_la]'], 10)
    + parseInt(services['msesaida[fundcasa_la]'], 10)
    + parseInt(services['msesaida[limiteidade21anos_la]'], 10),
      parseInt(services['msesaida[cumprintegralmse_pscla]'], 10)
    + parseInt(services['msesaida[descumprmse_pscla]'], 10)
    + parseInt(services['msesaida[transfermse_pscla]'], 10)
    + parseInt(services['msesaida[detencao_pscla]'], 10)
    + parseInt(services['msesaida[obito_pscla]'], 10)
    + parseInt(services['msesaida[fundcasa_pscla]'], 10)
    + parseInt(services['msesaida[limiteidade21anos_pscla]'], 10),
      parseInt(services['msesaida[cumprintegralmse_segmedida]'], 10)
    + parseInt(services['msesaida[descumprmse_segmedida]'], 10)
    + parseInt(services['msesaida[transfermse_segmedida]'], 10)
    + parseInt(services['msesaida[detencao_segmedida]'], 10)
    + parseInt(services['msesaida[obito_segmedida]'], 10)
    + parseInt(services['msesaida[fundcasa_segmedida]'], 10)
    + parseInt(services['msesaida[limiteidade21anos_segmedida]'], 10),
      1,
      1,
      1,
      1,
      1),

  ];

  const atendimentosIndividualGrupo = [
    createData('Atendimento individual', services['mseatendtecnico[atendindiusuario_atendpresencial]'], services['mseatendtecnico[atendindiusuario_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Atendimento em grupo com os usuários', services['mseatendtecnico[atendgrupousuario_atendpresencial]'], services['mseatendtecnico[atendgrupousuario_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
  ];

  const visistasTecnicas = [
    createData('Saúde', services['msevisitatecnica[saude_adolescentes]'], services['msevisitatecnica[saude_visitas]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Educação', services['msevisitatecnica[educacao_adolescentes]'], services['msevisitatecnica[educacao_visitas]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Cultura', services['msevisitatecnica[cultuta_visitas]'], services['msevisitatecnica[cultuta_visitas]'], 1, 1, 1, 1, 1, 1, 1),
    createData('SMADS', services['msevisitatecnica[smads_adolescentes]'], services['msevisitatecnica[smads_visitas]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Organização da Sociedade Civil', services['msevisitatecnica[osc_adolescentes]'], services['msevisitatecnica[osc_visitas]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Outros', services['msevisitatecnica[outros_visitas]'], services['msevisitatecnica[outros_visitas]'], 1, 1, 1, 1, 1, 1, 1),
  ];

  const residentes = [
    createData('Serviço de Acolhimento Institucional para Crianças e Adolescentes', services['mseacolhimento[saica]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('República', services['mseacolhimento[republica]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Centro de Acolhida', services['mseacolhimento[ca]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const escolar = [
    createData('Estuda', services['msesitescolar[estuda_12a14]'], services['msesitescolar[estuda_15a17]'], services['msesitescolar[estuda_18oumais]'], 1, 1, 1, 1, 1, 1),
    createData('Não estuda', services['msesitescolar[naoestuda_12a14]'], services['msesitescolar[naoestuda_15a17]'], services['msesitescolar[naoestuda_18oumais]'], 1, 1, 1, 1, 1, 1),
    createData('Concluiu o ensino regular', services['msesitescolar[concluiu_12a14]'], services['msesitescolar[concluiu_15a17]'], services['msesitescolar[concluiu_18oumais]'], 1, 1, 1, 1, 1, 1),
  ];

  const trabalho = [
    createData('Com vínculo empregatício (CLT)', services['msesittrabalho[comvinc_12a14]'], services['msesittrabalho[comvinc_15a17]'], services['msesittrabalho[comvinc_18oumais]'], 1, 1, 1, 1, 1, 1),
    createData('Sem vínculo empregatício', services['msesittrabalho[semvinc_12a14]'], services['msesittrabalho[semvinc_15a17]'], services['msesittrabalho[semvinc_18oumais]'], 1, 1, 1, 1, 1, 1),
    createData('Não Trabalha', services['msesittrabalho[naotrabalha_12a14]'], services['msesittrabalho[naotrabalha_15a17]'], services['msesittrabalho[naotrabalha_18oumais]'], 1, 1, 1, 1, 1, 1),
  ];

  const entraramAtoInfracional = [
    createData('Agressão/Briga', services['mseatoinfracional[agressaobriga_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Crime de trânsito', services['mseatoinfracional[crimetransito_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Dano ao patrimônio', services['mseatoinfracional[danopatrimonio_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Furto', services['mseatoinfracional[furto_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Lesão Corporal', services['mseatoinfracional[lesaocorporal_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Porte de drogas', services['mseatoinfracional[portedrogas_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Receptação', services['mseatoinfracional[receptacao_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Roubo', services['mseatoinfracional[roubo_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Tentativa de Homicídio', services['mseatoinfracional[tenthomicidio_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Tráfico de Drogas', services['mseatoinfracional[traficodrogas_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outros', services['mseatoinfracional[outros_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Total', parseInt(services['mseatoinfracional[agressaobriga_qtde]'], 10)
    + parseInt(services['mseatoinfracional[crimetransito_qtde]'], 10)
    + parseInt(services['mseatoinfracional[danopatrimonio_qtde]'], 10)
    + parseInt(services['mseatoinfracional[furto_qtde]'], 10)
    + parseInt(services['mseatoinfracional[lesaocorporal_qtde]'], 10)
    + parseInt(services['mseatoinfracional[portedrogas_qtde]'], 10)
    + parseInt(services['mseatoinfracional[receptacao_qtde]'], 10)
    + parseInt(services['mseatoinfracional[roubo_qtde]'], 10)
    + parseInt(services['mseatoinfracional[tenthomicidio_qtde]'], 10)
    + parseInt(services['mseatoinfracional[traficodrogas_qtde]'], 10)
    + parseInt(services['mseatoinfracional[outros_qtde]'], 10),

    1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['mseencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['mseencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['mseencaminhamentos[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['mseencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['mseperiofam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['mseperiofam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['mseperiofam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['mseperiofam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['mseperiofam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['mseperiofam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
              1. Quantidade de adolescentes e
              jovens atendidos no mês, por faixa etária, sexo e tipo de medida socioeducativa
            </h2>
            <TableFiveColumns headers={atendidosMesHeaders} body={atendidosMes} />

            <h2>
              2. Quantidade adolescentes e jovens atendidos por sexo e raça/cor no mês
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
            <h2>
              3. Quantidade de adolescentes e
              jovens que entraram no serviço
              no mês, por faixa etária, sexo e tipo de medida socioeducativa
            </h2>
            <TableFiveColumns headers={atendidosMesHeaders} body={entradasMes} />

            <h2>
              4. Quantidade de adolescentes e jovens
              que entraram no serviço no mês por tipo de ato infracional praticado
            </h2>

            <TableTwoColumns headers={['', 'Nº de usuários que entraram no mês']} body={entraramAtoInfracional} />

            <h2>
              4.1. Se a opção “Outros” foi preenchida na pergunta
              anterior, especifique quais foram esses atos infracionais
            </h2>
            <TableTwoColumns headers={['', '']} body={[createData('Outros', services.mseatoinfraoutros, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />
            <h2>
              5. Quantidade de adolescentes e jovens por motivo de saída do serviço no mês
            </h2>
            <TableFiveColumns headers={atendidosMesHeaders} body={motivosSaida} />
            <br />
            {mes === '0421' ? (
              <>
                <h2>
                  6. Nº de atendimentos realizados no mês de referência:
                </h2>
                <TableThreeColumns headers={['Atendimento Presencial', 'Atendimento remoto']} body={atendimentosIndividualGrupo} />
              </>
            )
              : (
                <>
                  <h2>
                    6. Nº de atendimentos realizados no mês de referência:
                  </h2>
                  <TableTwoColumns headers={['', 'Atendimento Presencial']} body={atendimentosIndividualGrupo} />
                </>

              )}
            <h2>
              6. Nº de atendimentos realizados no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Atendimento Presencial']} body={atendimentosIndividualGrupo} />

            <h2>
              7. Quantidade de oficinas/grupos realizados no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Oficina(s)', services.mseoficina, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              8. Nº de audiências acompanhadas no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Audiência(s)', services.mseaudiencias, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              9. Visitas técnicas para acompanhamento de medidas no mês de referência:
            </h2>
            <TableThreeColumns headers={['Número de adolescentes/jovens', 'Número de visitas realizadas']} body={visistasTecnicas} />

            <h2>
              9.1. Se a opção “Outros” foi preenchida na
              pergunta anterior, especifique no campo abaixo quais foram as visitas técnicas:
            </h2>
            <TableTwoColumns headers={['', '']} body={[createData('Outros', services.mseoutrosvisitatecni, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              10. Número de Reuniões de Articulação da Rede:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Reunião/ões', services.msearticulacao, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              11. Nº de adolescentes e jovens com
              deficiência atendidos pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Adolecente(s) e jovem/ns', services.msepcd, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              12. Quantidade de usuários atendidos no
              mês que também são atendidos em
              serviços de convivência e
              fortalecimento de vínculos (SCFV):
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Usuário(s)', services.msescfv, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              13. Nº de adolescentes e jovens que residem em serviços de acolhimento:
            </h2>

            <TableTwoColumns headers={['', 'Quantidade']} body={residentes} />

            <h2>
              14. Nº de adolescentes e jovens
              atendidos conforme a situação escolar no mês de referência:
            </h2>

            <TableFourColumns
              headers={['12 a 14 anos', '15 a 17 anos', '18 anos ou mais']}
              body={escolar}
            />

            <h2>
              15. Nº de adolescentes e jovens
              atendidos conforme a situação de trabalho no mês de referência:
            </h2>

            <TableFourColumns
              headers={['12 a 14 anos', '15 a 17 anos', '18 anos ou mais']}
              body={trabalho}
            />

            <h2>
              16. Encaminhamentos realizados no mês de referência:
            </h2>

            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              17. Quantidade de atendimentos remotos de familiares por semana no mês
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
