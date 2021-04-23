import React, {
  useState, useEffect, useContext,
} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import {
  withStyles, Theme,
} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import { Typography } from '@material-ui/core';
import MoonLoader from 'react-spinners/MoonLoader';

import {
  FirstSection, MyButton, Section, LoaderBody,
} from './styles';

import TableEigthColumns from '../../components/TableEightColumns';
import TableFourColumns from '../../components/TableFourColumns';
import TableTenColumns from '../../components/TableTenColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import TableFiveColumns from '../../components/TableFiveColumns';
import ListComponent from '../../components/ListComponent';
import HeaderInfo from '../../components/HeaderInfo';
import Navbar from '../../components/Navbar';

import { infoContext } from '../../providers/reactContext';
import TableThreeColumns from '../../components/TableThreeColumns';

const StyledBreadcrumb = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[900],
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 15,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
  },
}))(Chip) as typeof Chip;

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

const motivosSaidaHeaders = [
  '15 a 17 anos',
  '18 a 29 anos',
  '30 a 59 anos',
  'Total Geral',
];

const familiasInsumosHeaders = ['', 'N° de famílias'];

const familiasVulnerabilidadeHeaders = ['', 'Nº de famílias'];

const atendimentoFamiliaHeaders = ['', 'Nº de famílias'];

const demandaReprimidaHeaders = ['', 'Nº de pessoas'];

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const atendimentosRemotosHeaders = ['', 'Atendimentos Remotos'];

const atendimentosRemotosTiposHeaders = ['Tipos', ''];

const atendimentosRemotosFamiliaSemanaHeaders = ['Semanas', 'Nº de famílias'];

const Response:any = () => {
  const [services, setServices]:any = useState([]);
  const { context, setContext }:any = useContext(infoContext);
  const {
    nomeSAS, mes, serviceName, token,
  } = context;
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const tipologia = 'ncp';
  const fetchUserProfiles = () => {
    axios.get(`http://localhost:8080/devolutivas/${nomeSAS}/${mes}/${token}/${tipologia}`).then((res) => {
      setServices(res.data);
      console.log(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
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

  const familiasInsumos = [
    createData('Cesta de alimentos', services['cedesinsumos[cestasaliment_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Kit de material de higiene', services['cedesinsumos[kithiginene_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const familiasVulnerabilidade = [
    createData('Conflitos', services['cedesvulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Preconceitos/discriminação', services['cedesvulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Abandono', services['cedesvulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Apartação', services['cedesvulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Confinamento', services['cedesvulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Isolamento', services['cedesvulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Violência', services['cedesvulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
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

  const atendimentoFamilia = [
    createData('Nº de famílias atendidas presencialmente', services['cedesatenfam[ccafampres]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de famílias acompanhadas de forma remota', services['cedesatenfam[ccafamrem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº total de famílias atendidas no mês', services['cedesatenfam[ccafamtotal]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atividadesItems = [
    ['Atividades esportivas', services['cedespatividades[atvesporte]']],
    ['Musicalidade (cantar, tocar instrumentos etc.)', services['ccintatividades[atvmusica]']],
    ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', services['ccintatividades[atvcultura]']],
    ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', services['ccintatividades[atvarte]']],
    ['Atividades de inclusão digital', services['ccintatividades[atvincdigital]']],
    ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['ccintatividades[atvlinguagem]']],
    ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['ccintatividades[atvculinaria]']],
    ['Atividades recreativas (jogos, brincadeiras, etc.)', services['ccintatividades[atvrecreacao]']],

  ];

  const temasItems = [
    ['Garantia de direitos sociais (saúde, educação, previdência, moradia, envelhecimento, saúde mental, etc.)', services['cedesptemas[temadireitossociais]']],
    ['Relacionamento familiar (gravidez na adolescência, álcool e drogas, orientação sexual, aborto, etc.)', services['cedesptemas[temafamiliar]']],
    ['Direitos e programas sociais', services['cedesptemas[temadireitos]']],
    ['Igualdade entre homens e mulheres', services['cedesptemas[temaigualdade]']],
    ['Relações étnico-raciais', services['cedesptemas[temaetnico]']],
    ['Prevenção à violência', services['cedesptemas[temaprevencaovio]']],
    ['Parentalidade', services['cedesptemas[temaparental]']],
    ['Deficiência e acessibilidade', services['cedesptemas[temapcd]']],
    ['Mundo do trabalho', services['cedesptemas[tematrabalho]']],
  ];

  const demandaReprimida = [
    createData('6 a 11 anos', services['cedeslistaespera[6a11_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('12 a 17 anos', services['cedeslistaespera[12a14_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos', services['cedeslistaespera[18a29_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos', services['cedeslistaespera[30a59_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['cedeslistaespera[6a11_quantidade]'], 10)
      + parseInt(services['cedeslistaespera[12a14_quantidade]'], 10)
      + parseInt(services['cedeslistaespera[18a29_quantidade]'], 10)
      + parseInt(services['cedeslistaespera[30a59_quantidade]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['ncpopruaencaminhamen[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['ncpopruaencaminhamen[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CENTRO POP', services['ncpopruaencaminhamen[cpop]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['ncpopruaencaminhamen[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['ncpopruaencaminhamen[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotos = [
    createData('Semana 1', services['cedespesremperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['cedespesremperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['cedespesremperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['cedespesremperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['cedespesremperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['cedespesremperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosTipos = [
    createData('Telefone / Celular / Whatsapp', services['cedesatendremdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Email', services['cedesatendremdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Facebook', services['cedesatendremdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('YouTube', services['cedesatendremdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras redes sociais', services['cedesatendremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Entrega de kits de atividades', services['cedesatendremdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outros', services['cedesatendremdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['cedesfamremperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['cedesfamremperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['cedesfamremperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['cedesfamremperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['cedesfamremperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['cedesfamremperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  let monthString = '';

  if (mes === '0121') {
    monthString = 'Janeiro 2021';
  } else if (mes === '0221') {
    monthString = 'Fevereiro 2021';
  } else if (mes === '0321') {
    monthString = 'Março 2021';
  }

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
          <HeaderInfo />

          <Section>
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
