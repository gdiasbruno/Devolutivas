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
    nomeSAS, mes, serviceName, token, tipologia,
  } = context;
  const history = useHistory();
  const [loading, setLoading] = useState(true);

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
    createData('60 a 64 anos (F)',
      services['cdiatenfxetariafem[60a64f_atendmesatual]'],
      services['cdiatenfxetariafem[60a64f_freqpres]'],
      services['cdiatenfxetariafem[60a64f_freqrem]'],
      1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos (F)',
      services['cdiatenfxetariafem[65a69f_atendmesatual]'],
      services['cdiatenfxetariafem[65a69f_freqpres]'],
      services['cdiatenfxetariafem[65a69f_freqrem]'],
      1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos (F)',
      services['cdiatenfxetariafem[70a74f_atendmesatual]'],
      services['cdiatenfxetariafem[70a74f_freqpres]'],
      services['cdiatenfxetariafem[70a74f_freqrem]'],
      1, 1, 1, 1, 1, 1),
    createData('75 anos ou mais (F)',
      services['cdiatenfxetariafem[75oumaisf_atendmesatual]'],
      services['cdiatenfxetariafem[75oumaisf_freqpres]'],
      services['cdiatenfxetariafem[75oumaisf_freqrem]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['cdiatenfxetariafem[60a64f_atendmesatual]'], 10)
      + parseInt(services['cdiatenfxetariafem[65a69f_atendmesatual]'], 10)
      + parseInt(services['cdiatenfxetariafem[70a74f_atendmesatual]'], 10)
      + parseInt(services['cdiatenfxetariafem[75oumaisf_atendmesatual]'], 10),
      parseInt(services['cdiatenfxetariafem[60a64f_freqpres]'], 10)
      + parseInt(services['cdiatenfxetariafem[65a69f_freqpres]'], 10)
      + parseInt(services['cdiatenfxetariafem[70a74f_freqpres]'], 10)
      + parseInt(services['cdiatenfxetariafem[75oumaisf_freqpres]'], 10),
      parseInt(services['cdiatenfxetariafem[60a64f_freqrem]'], 10)
      + parseInt(services['cdiatenfxetariafem[65a69f_freqrem]'], 10)
      + parseInt(services['cdiatenfxetariafem[70a74f_freqrem]'], 10)
      + parseInt(services['cdiatenfxetariafem[75oumaisf_freqrem]'], 10), 1, 1, 1, 1, 1, 1),
  ];

  const atendidosMesMasculino = [
    createData('60 a 64 anos (M)',
      services['cdiatenfxetariamasc[60a64m_atendmesatual]'],
      services['cdiatenfxetariamasc[60a64m_freqpres]'],
      services['cdiatenfxetariamasc[60a64m_freqrem]'],
      1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos (M)',
      services['cdiatenfxetariamasc[65a69m_atendmesatual]'],
      services['cdiatenfxetariamasc[65a69m_freqpres]'],
      services['cdiatenfxetariamasc[65a69m_freqrem]'],
      1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos (M)',
      services['cdiatenfxetariamasc[70a74m_atendmesatual]'],
      services['cdiatenfxetariamasc[70a74m_freqpres]'],
      services['cdiatenfxetariamasc[70a74m_freqrem]'],
      1, 1, 1, 1, 1, 1),
    createData('75 anos ou mais (M)',
      services['cdiatenfxetariamasc[75oumaism_atendmesatual]'],
      services['cdiatenfxetariamasc[75oumaism_freqpres]'],
      services['cdiatenfxetariamasc[75oumaism_freqrem]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['cdiatenfxetariamasc[60a64m_atendmesatual]'], 10)
      + parseInt(services['cdiatenfxetariamasc[65a69m_atendmesatual]'], 10)
      + parseInt(services['cdiatenfxetariamasc[70a74m_atendmesatual]'], 10)
      + parseInt(services['cdiatenfxetariamasc[75oumaism_atendmesatual]'], 10),
      parseInt(services['cdiatenfxetariamasc[60a64m_freqpres]'], 10)
      + parseInt(services['cdiatenfxetariamasc[65a69m_freqpres]'], 10)
      + parseInt(services['cdiatenfxetariamasc[70a74m_freqpres]'], 10)
      + parseInt(services['cdiatenfxetariamasc[75oumaism_freqpres]'], 10),
      parseInt(services['cdiatenfxetariamasc[60a64m_freqrem]'], 10)
      + parseInt(services['cdiatenfxetariamasc[65a69m_freqrem]'], 10)
      + parseInt(services['cdiatenfxetariamasc[70a74m_freqrem]'], 10)
      + parseInt(services['cdiatenfxetariamasc[75oumaism_freqrem]'], 10), 1, 1, 1, 1, 1, 1),

  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['cdiracasexo[fem_branca]'],
      services['cdiracasexo[fem_preta]'],
      services['cdiracasexo[fem_parda]'],
      services['cdiracasexo[fem_amarela]'],
      services['cdiracasexo[fem_indigena]'],
      services['cdiracasexo[fem_naoinf]'],
      parseInt(services['cdiracasexo[fem_branca]'], 10)
      + parseInt(services['cdiracasexo[fem_preta]'], 10)
      + parseInt(services['cdiracasexo[fem_parda]'], 10)
      + parseInt(services['cdiracasexo[fem_amarela]'], 10)
      + parseInt(services['cdiracasexo[fem_indigena]'], 10)
      + parseInt(services['cdiracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['cdiracasexo[masc_branca]'],
      services['cdiracasexo[masc_preta]'],
      services['cdiracasexo[masc_parda]'],
      services['cdiracasexo[masc_amarela]'],
      services['cdiracasexo[masc_indigena]'],
      services['cdiracasexo[masc_naoinf]'],
      parseInt(services['cdiracasexo[masc_branca]'], 10)
      + parseInt(services['cdiracasexo[masc_preta]'], 10)
      + parseInt(services['cdiracasexo[masc_parda]'], 10)
      + parseInt(services['cdiracasexo[masc_amarela]'], 10)
      + parseInt(services['cdiracasexo[masc_indigena]'], 10)
      + parseInt(services['cdiracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['cdiracasexo[masc_branca]'], 10)
      + parseInt(services['cdiracasexo[fem_branca]'], 10),
      parseInt(services['cdiracasexo[masc_preta]'], 10)
      + parseInt(services['cdiracasexo[fem_preta]'], 10),
      parseInt(services['cdiracasexo[masc_parda]'], 10)
      + parseInt(services['cdiracasexo[fem_parda]'], 10),
      parseInt(services['cdiracasexo[masc_amarela]'], 10)
      + parseInt(services['cdiracasexo[fem_amarela]'], 10),
      parseInt(services['cdiracasexo[masc_indigena]'], 10)
      + parseInt(services['cdiracasexo[fem_indigena]'], 10),
      parseInt(services['cdiracasexo[masc_naoinf]'], 10)
      + parseInt(services['cdiracasexo[fem_naoinf]'], 10),
      parseInt(services['cdiracasexo[masc_branca]'], 10)
      + parseInt(services['cdiracasexo[fem_branca]'], 10)
      + parseInt(services['cdiracasexo[masc_preta]'], 10)
      + parseInt(services['cdiracasexo[fem_preta]'], 10)
      + parseInt(services['cdiracasexo[masc_parda]'], 10)
      + parseInt(services['cdiracasexo[fem_parda]'], 10)
      + parseInt(services['cdiracasexo[masc_amarela]'], 10)
      + parseInt(services['cdiracasexo[fem_amarela]'], 10)
      + parseInt(services['cdiracasexo[masc_indigena]'], 10)
      + parseInt(services['cdiracasexo[fem_indigena]'], 10)
      + parseInt(services['cdiracasexo[masc_naoinf]'], 10)
      + parseInt(services['cdiracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const motivosSaida = [
    createData('Dificuldades em frequentar o serviço - transporte',
      services['cdisaida[saidatransp]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),
    createData('Dificuldades em frequentar o serviço - participação familiar',
      services['cdisaida[saidapartfam]'],
      services['cdisaida[mudancaendereco_18a29]'],
      services['cdisaida[mudancaendereco_30a59]'],
      parseInt(services['cdisaida[mudancaendereco_15a17]'], 10)
      + parseInt(services['cdisaida[mudancaendereco_18a29]'], 10)
      + parseInt(services['cdisaida[mudancaendereco_30a59]'], 10), 1, 1, 1, 1, 1),
    createData('Mudança de endereço',
      services['cdisaida[saidamudend]'],
      services['cdisaida[mudancaendereco_18a29]'],
      services['cdisaida[mudancaendereco_30a59]'],
      parseInt(services['cdisaida[mudancaendereco_15a17]'], 10)
      + parseInt(services['cdisaida[mudancaendereco_18a29]'], 10)
      + parseInt(services['cdisaida[mudancaendereco_30a59]'], 10), 1, 1, 1, 1, 1),
    createData('Problemas de saúde',
      services['cdisaida[saidaproblsaude]'],
      services['cdisaida[transferencia_18a29]'],
      services['cdisaida[transferencia_30a59]'],
      parseInt(services['cdisaida[transferencia_15a17]'], 10)
      + parseInt(services['cdisaida[transferencia_18a29]'], 10)
      + parseInt(services['cdisaida[transferencia_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Acolhimento Institucional',
      services['cdisaida[saidaacolhimento]'],
      services['cdisaida[aband_18a29]'],
      services['cdisaida[aband_30a59]'],
      parseInt(services['cdisaida[aband_15a17]'], 10)
      + parseInt(services['cdisaida[aband_18a29]'], 10)
      + parseInt(services['cdisaida[aband_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Óbito',
      services['cdisaida[saidaobito]'],
      services['cdisaida[obito_18a29]'],
      services['cdisaida[obito_30a59]'],
      parseInt(services['cdisaida[obito_15a17]'], 10)
      + parseInt(services['cdisaida[obito_18a29]'], 10)
      + parseInt(services['cdisaida[obito_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),

  ];

  const atendimentoTecnico = [
    createData('Assistente Social', services['cdiatendtecnico[atendas_atendpres]'], services['cdiatendtecnico[atendas_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Psicólogo', services['cdiatendtecnico[atendpsico_atendpres]'], services['cdiatendtecnico[atendpsico_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Nutricionista', services['cdiatendtecnico[atendnutri_atendpres]'], services['cdiatendtecnico[atendnutri_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Enfermeiro', services['cdiatendtecnico[atendenfer_atendpres]'], services['cdiatendtecnico[atendenfer_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Terapeuta Ocupacional', services['cdiatendtecnico[atendto_atendpres]'], services['cdiatendtecnico[atendto_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
  ];
  const atendimentoTecnicoFamilias = [
    createData('Assistente Social', services['cdifamatendtecnico[atendas_atendpres]'], services['cdifamatendtecnico[atendas_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Psicólogo', services['cdifamatendtecnico[atendpsico_atendpres]'], services['cdifamatendtecnico[atendpsico_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Nutricionista', services['cdifamatendtecnico[atendnutri_atendpres]'], services['cdifamatendtecnico[atendnutri_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Enfermeiro', services['cdifamatendtecnico[atendenfer_atendpres]'], services['cdifamatendtecnico[atendenfer_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Terapeuta Ocupacional', services['cdifamatendtecnico[atendto_atendpres]'], services['cdifamatendtecnico[atendto_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
  ];

  const usuarioGrauDependencia = [
    createData('Grau de Dependência I', services['cdigraudepend[grau1]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Grau de Dependência II', services['cdigraudepend[grau2]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Grau de Dependência III', services['cdigraudepend[grau3]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
    createData('CRAS', services['cdiencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['cdiencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['cdiencaminhamentos[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Saúde', services['cdiencaminhamentos[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Direitos Humanos', services['cdiencaminhamentos[dh]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Documentação', services['cdiencaminhamentos[doc]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Serviços de Garantia de Direitos (MP, Defensoria)', services['cdiencaminhamentos[gdireitos]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['cdiencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotos = [
    createData('Semana 1', services['cdiatendremperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['cdiatendremperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['cdiatendremperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['cdiatendremperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['cdiatendremperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['cdiatendremperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosTipos = [
    createData('Telefone / Celular / Whatsapp', services['cdiatenddisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Email', services['cdiatenddisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Facebook', services['cdiatenddisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('YouTube', services['cdiatenddisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras redes sociais', services['cdiatenddisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Entrega de kits de atividades', services['cdiatenddisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outros', services['cdiatenddisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['cdiatendremfamperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['cdiatendremfamperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['cdiatendremfamperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['cdiatendremfamperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['cdiatendremfamperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['cdiatendremfamperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
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

          <Section>
            <HeaderInfo />
            <h2>
              1. Quantidade de pessoas do sexo masculino atendidas pelo serviço no mês de referência
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesMasculino} />

            <h2>
              2. Quantidade de pessoas do sexo feminino atendidos pelo serviço no mês de referência
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesFeminino} />
            <h2>
              3. Quantidade idosos atendidos no mês, por sexo e raça/cor
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
            <h2>
              4. Quantidade de idosos por motivo de saída do serviço no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={motivosSaida} />
            <br />

            <h2>
              5. Quantidade de pessoas que receberam atendimento técnico no mês de referência
            </h2>
            <TableThreeColumns headers={['Presencialmente', 'Remotamente']} body={atendimentoTecnico} />
            <br />
            <h2>
              6. Quantidade de famílias que receberam
              atendimento técnico no mês de referência
            </h2>
            <TableThreeColumns headers={['Presencialmente', 'Remotamente']} body={atendimentoTecnicoFamilias} />
            <h2>
              7. Quantidade de pessoas atendidas
              pelo serviço com algum grau de dependência, no mês de referência
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={usuarioGrauDependencia} />
            <h2>
              8. Quantidade de visitas domicilares realizadas no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Visita(s)', services.cdivisdom, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              9. Quantidade de pessoas beneficiárias do BPC
              atendidas pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.cdibpc, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              10. Quantidade de usuários que utilizaram
              o transporte ofertado pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Usuário(s)', services.cditransporte, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              11. N° de pessoas que recebem lanche tipo 2 no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.cdilanche2, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              12. Quantidade de pessoas atendidas com dietas especiais no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.cdidieta, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              13. N° de oficinas realizadas no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Oficina(s)', services.cdioficina, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              14. Encaminhamentos realizados pelo serviço no mês de referência
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              15. Quantidade de atendimentos remotos dos usuários por semana no mês
            </h2>
            <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

            <h2>
              16. Quantidade de atividades remotas
              realizadas no mês, pelos meios em que foram disponibilizadas
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTipos}
            />

            <h2>
              17. Quantidade de atendimentos remotos dos familiares por semana no mês
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
