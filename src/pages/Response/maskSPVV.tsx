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
import TableTwoColumns from '../../components/TableTwoColumns';
import TableSevenColumns from '../../components/TableSevenColumns';


import { infoContext } from '../../providers/reactContext';

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

const qtdCriAdoMesHeader = [

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

const princViolenciaHeader = [
  'Pai',
  'Mãe',
  'Irmão',
  'Padrasto/Madrasta',
  'Outros familiares',
  'Outras pessoas',
];

const encaminhamentosHeaders = ['Origem', 'Total'];

const tempPermaHeaders = ['', 'Nº de usuários'];

const genericTotalTecHeader = ['', 'Total'];

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

  const qtdCriAdoMes = [
    createData('0 a 5 anos (F)',
      services['spvvatenfxetaria[0a5f_atendmesatual]'],
      services['spvvatenfxetaria[0a5f_presmesatual]'],
      services['spvvatenfxetaria[0a5f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('0 a 5 anos (M)',
      services['spvvatenfxetaria[0a5m_atendmesatual]'],
      services['spvvatenfxetaria[0a5m_presmesatual]'],
      services['spvvatenfxetaria[0a5m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('6 a 11 anos (F)',
      services['spvvatenfxetaria[6a11f_atendmesatual]'],
      services['spvvatenfxetaria[6a11f_presmesatual]'],
      services['spvvatenfxetaria[6a11f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('6 a 11 anos (M)',
      services['spvvatenfxetaria[6a11m_atendmesatual]'],
      services['spvvatenfxetaria[6a11m_presmesatual]'],
      services['spvvatenfxetaria[6a11m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos (F)',
      services['spvvatenfxetaria[12a14f_atendmesatual]'],
      services['spvvatenfxetaria[12a14f_presmesatual]'],
      services['spvvatenfxetaria[12a14f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos (M)',
      services['spvvatenfxetaria[12a14m_atendmesatual]'],
      services['spvvatenfxetaria[12a14m_presmesatual]'],
      services['spvvatenfxetaria[12a14m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('15 a 17 anos (F)',
      services['spvvatenfxetaria[15a17f_atendmesatual]'],
      services['spvvatenfxetaria[15a17f_presmesatual]'],
      services['spvvatenfxetaria[15a17f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('15 a 17 anos (M)',
      services['spvvatenfxetaria[15a17m_atendmesatual]'],
      services['spvvatenfxetaria[15a17m_presmesatual]'],
      services['spvvatenfxetaria[6a11m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['spvvatenfxetaria[0a5f_atendmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[0a5m_atendmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[6a11f_atendmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[6a11m_atendmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[12a14f_atendmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[12a14m_atendmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[15a17f_atendmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[15a17m_atendmesatual]'], 10),
      parseInt(services['spvvatenfxetaria[0a5f_presmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[0a5m_presmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[6a11f_presmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[6a11m_presmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[12a14f_presmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[12a14m_presmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[15a17f_presmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[15a17m_presmesatual]'], 10),
      parseInt(services['spvvatenfxetaria[0a5f_remmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[0a5m_remmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[6a11f_remmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[6a11m_remmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[12a14f_remmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[12a14m_remmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[15a17f_remmesatual]'], 10)
      + parseInt(services['spvvatenfxetaria[15a17m_remmesatual]'], 10),
      1, 1, 1, 1, 1, 1),

  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['spvvracasexo[fem_branca]'],
      services['spvvracasexo[fem_preta]'],
      services['spvvracasexo[fem_parda]'],
      services['spvvracasexo[fem_amarela]'],
      services['spvvracasexo[fem_indigena]'],
      services['spvvracasexo[fem_naoinf]'],
      parseInt(services['spvvracasexo[fem_branca]'], 10)
      + parseInt(services['spvvracasexo[fem_preta]'], 10)
      + parseInt(services['spvvracasexo[fem_parda]'], 10)
      + parseInt(services['spvvracasexo[fem_amarela]'], 10)
      + parseInt(services['spvvracasexo[fem_indigena]'], 10)
      + parseInt(services['spvvracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['spvvracasexo[masc_branca]'],
      services['spvvracasexo[masc_preta]'],
      services['spvvracasexo[masc_parda]'],
      services['spvvracasexo[masc_amarela]'],
      services['spvvracasexo[masc_indigena]'],
      services['spvvracasexo[masc_naoinf]'],
      parseInt(services['spvvracasexo[masc_branca]'], 10)
      + parseInt(services['spvvracasexo[masc_preta]'], 10)
      + parseInt(services['spvvracasexo[masc_parda]'], 10)
      + parseInt(services['spvvracasexo[masc_amarela]'], 10)
      + parseInt(services['spvvracasexo[masc_indigena]'], 10)
      + parseInt(services['spvvracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['spvvracasexo[masc_branca]'], 10)
      + parseInt(services['spvvracasexo[fem_branca]'], 10),
      parseInt(services['spvvracasexo[masc_preta]'], 10)
      + parseInt(services['spvvracasexo[fem_preta]'], 10),
      parseInt(services['spvvracasexo[masc_parda]'], 10)
      + parseInt(services['spvvracasexo[fem_parda]'], 10),
      parseInt(services['spvvracasexo[masc_amarela]'], 10)
      + parseInt(services['spvvracasexo[fem_amarela]'], 10),
      parseInt(services['spvvracasexo[masc_indigena]'], 10)
      + parseInt(services['spvvracasexo[fem_indigena]'], 10),
      parseInt(services['spvvracasexo[masc_naoinf]'], 10)
      + parseInt(services['spvvracasexo[fem_naoinf]'], 10),
      parseInt(services['spvvracasexo[masc_branca]'], 10)
      + parseInt(services['spvvracasexo[fem_branca]'], 10)
      + parseInt(services['spvvracasexo[masc_preta]'], 10)
      + parseInt(services['spvvracasexo[fem_preta]'], 10)
      + parseInt(services['spvvracasexo[masc_parda]'], 10)
      + parseInt(services['spvvracasexo[fem_parda]'], 10)
      + parseInt(services['spvvracasexo[masc_amarela]'], 10)
      + parseInt(services['spvvracasexo[fem_amarela]'], 10)
      + parseInt(services['spvvracasexo[masc_indigena]'], 10)
      + parseInt(services['spvvracasexo[fem_indigena]'], 10)
      + parseInt(services['spvvracasexo[masc_naoinf]'], 10)
      + parseInt(services['spvvracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const PrincViolencia = [
    createData('Violência Física',
      services['spvvagtagress[viofisica_agresspai]'],
      services['spvvagtagress[viofisica_agressmae]'],
      services['spvvagtagress[viofisica_agressirmao]'],
      services['spvvagtagress[viofisica_agresspadrmadr]'],
      services['spvvagtagress[viofisica_agressoutrfami]'],
      services['spvvagtagress[viofisica_agressoutrpesso]'],
      1, 1, 1),
    createData('Violência Psicológica',
      services['spvvagtagress[viopsico_agresspai]'],
      services['spvvagtagress[viopsico_agressmae]'],
      services['spvvagtagress[viopsico_agressirmao]'],
      services['spvvagtagress[viopsico_agresspadrmadr]'],
      services['spvvagtagress[viopsico_agressoutrfami]'],
      services['spvvagtagress[viopsico_agressoutrpesso]'],
      1, 1, 1),
    createData('Exploração Sexual',
      services['spvvagtagress[vioexplo_agresspai]'],
      services['spvvagtagress[vioexplo_agressmae]'],
      services['spvvagtagress[vioexplo_agressirmao]'],
      services['spvvagtagress[vioexplo_agresspadrmadr]'],
      services['spvvagtagress[vioexplo_agressoutrfami]'],
      services['spvvagtagress[vioexplo_agressoutrpesso]'],
      1, 1, 1),
    createData('Abuso Sexual',
      services['spvvagtagress[vioabuso_agresspai]'],
      services['spvvagtagress[vioabuso_agressmae]'],
      services['spvvagtagress[vioabuso_agressirmao]'],
      services['spvvagtagress[vioabuso_agresspadrmadr]'],
      services['spvvagtagress[vioabuso_agressoutrfami]'],
      services['spvvagtagress[vioabuso_agressoutrpesso]'],
      1, 1, 1),
    createData('Negligência',
      services['spvvagtagress[vionegli_agresspai]'],
      services['spvvagtagress[vionegli_agressmae]'],
      services['spvvagtagress[vionegli_agressirmao]'],
      services['spvvagtagress[vionegli_agresspadrmadr]'],
      services['spvvagtagress[vionegli_agressoutrfami]'],
      services['spvvagtagress[vionegli_agressoutrpesso]'],
      1, 1, 1),
    createData('Total',
      parseInt(services['spvvagtagress[viofisica_agresspai]'], 10)
      + parseInt(services['spvvagtagress[viopsico_agresspai]'], 10)
      + parseInt(services['spvvagtagress[vioexplo_agresspai]'], 10)
      + parseInt(services['spvvagtagress[vioabuso_agresspai]'], 10)
      + parseInt(services['spvvagtagress[vionegli_agresspai]'], 10),
      parseInt(services['spvvagtagress[viofisica_agressmae]'], 10)
      + parseInt(services['spvvagtagress[viopsico_agressmae]'], 10)
      + parseInt(services['spvvagtagress[vioexplo_agressmae]'], 10)
      + parseInt(services['spvvagtagress[vioabuso_agressmae]'], 10)
      + parseInt(services['spvvagtagress[vionegli_agressmae]'], 10),
      parseInt(services['spvvagtagress[viofisica_agressirmao]'], 10)
      + parseInt(services['spvvagtagress[viopsico_agressirmao]'], 10)
      + parseInt(services['spvvagtagress[vioexplo_agressirmao]'], 10)
      + parseInt(services['spvvagtagress[vioabuso_agressirmao]'], 10)
      + parseInt(services['spvvagtagress[vionegli_agressirmao]'], 10),
      parseInt(services['spvvagtagress[viofisica_agresspadrmadr]'], 10)
      + parseInt(services['spvvagtagress[viopsico_agresspadrmadr]'], 10)
      + parseInt(services['spvvagtagress[vioexplo_agresspadrmadr]'], 10)
      + parseInt(services['spvvagtagress[vioabuso_agresspadrmadr]'], 10)
      + parseInt(services['spvvagtagress[vionegli_agresspadrmadr]'], 10),
      parseInt(services['spvvagtagress[viofisica_agressoutrfami]'], 10)
      + parseInt(services['spvvagtagress[viopsico_agressoutrfami]'], 10)
      + parseInt(services['spvvagtagress[vioexplo_agressoutrfami]'], 10)
      + parseInt(services['spvvagtagress[vioabuso_agressoutrfami]'], 10)
      + parseInt(services['spvvagtagress[vionegli_agressoutrfami]'], 10),
      parseInt(services['spvvagtagress[viofisica_agressoutrpesso]'], 10)
      + parseInt(services['spvvagtagress[viopsico_agressoutrpesso]'], 10)
      + parseInt(services['spvvagtagress[vioexplo_agressoutrpesso]'], 10)
      + parseInt(services['spvvagtagress[vioabuso_agressoutrpesso]'], 10)
      + parseInt(services['spvvagtagress[vionegli_agressoutrpesso]'], 10),
      1, 1, 1),
  ];

  const SecViolencia = [
    createData('Violência Física',
      services['spvvagtagress2[viofisica_agresspai]'],
      services['spvvagtagress2[viofisica_agressmae]'],
      services['spvvagtagress2[viofisica_agressirmao]'],
      services['spvvagtagress2[viofisica_agresspadrmadr]'],
      services['spvvagtagress2[viofisica_agressoutrfami]'],
      services['spvvagtagress2[viofisica_agressoutrpesso]'],
      1, 1, 1),
    createData('Violência Psicológica',
      services['spvvagtagress2[viopsico_agresspai]'],
      services['spvvagtagress2[viopsico_agressmae]'],
      services['spvvagtagress2[viopsico_agressirmao]'],
      services['spvvagtagress2[viopsico_agresspadrmadr]'],
      services['spvvagtagress2[viopsico_agressoutrfami]'],
      services['spvvagtagress2[viopsico_agressoutrpesso]'],
      1, 1, 1),
    createData('Exploração Sexual',
      services['spvvagtagress2[vioexplo_agresspai]'],
      services['spvvagtagress2[vioexplo_agressmae]'],
      services['spvvagtagress2[vioexplo_agressirmao]'],
      services['spvvagtagress2[vioexplo_agresspadrmadr]'],
      services['spvvagtagress2[vioexplo_agressoutrfami]'],
      services['spvvagtagress2[vioexplo_agressoutrpesso]'],
      1, 1, 1),
    createData('Abuso Sexual',
      services['spvvagtagress2[vioabuso_agresspai]'],
      services['spvvagtagress2[vioabuso_agressmae]'],
      services['spvvagtagress2[vioabuso_agressirmao]'],
      services['spvvagtagress2[vioabuso_agresspadrmadr]'],
      services['spvvagtagress2[vioabuso_agressoutrfami]'],
      services['spvvagtagress2[vioabuso_agressoutrpesso]'],
      1, 1, 1),
    createData('Negligência',
      services['spvvagtagress2[vionegli_agresspai]'],
      services['spvvagtagress2[vionegli_agressmae]'],
      services['spvvagtagress2[vionegli_agressirmao]'],
      services['spvvagtagress2[vionegli_agresspadrmadr]'],
      services['spvvagtagress2[vionegli_agressoutrfami]'],
      services['spvvagtagress2[vionegli_agressoutrpesso]'],
      1, 1, 1),
    createData('Total',
      parseInt(services['spvvagtagress2[viofisica_agresspai]'], 10)
      + parseInt(services['spvvagtagress2[viopsico_agresspai]'], 10)
      + parseInt(services['spvvagtagress2[vioexplo_agresspai]'], 10)
      + parseInt(services['spvvagtagress2[vioabuso_agresspai]'], 10)
      + parseInt(services['spvvagtagress2[vionegli_agresspai]'], 10),
      parseInt(services['spvvagtagress2[viofisica_agressmae]'], 10)
      + parseInt(services['spvvagtagress2[viopsico_agressmae]'], 10)
      + parseInt(services['spvvagtagress2[vioexplo_agressmae]'], 10)
      + parseInt(services['spvvagtagress2[vioabuso_agressmae]'], 10)
      + parseInt(services['spvvagtagress2[vionegli_agressmae]'], 10),
      parseInt(services['spvvagtagress2[viofisica_agressirmao]'], 10)
      + parseInt(services['spvvagtagress2[viopsico_agressirmao]'], 10)
      + parseInt(services['spvvagtagress2[vioexplo_agressirmao]'], 10)
      + parseInt(services['spvvagtagress2[vioabuso_agressirmao]'], 10)
      + parseInt(services['spvvagtagress2[vionegli_agressirmao]'], 10),
      parseInt(services['spvvagtagress2[viofisica_agresspadrmadr]'], 10)
      + parseInt(services['spvvagtagress2[viopsico_agresspadrmadr]'], 10)
      + parseInt(services['spvvagtagress2[vioexplo_agresspadrmadr]'], 10)
      + parseInt(services['spvvagtagress2[vioabuso_agresspadrmadr]'], 10)
      + parseInt(services['spvvagtagress2[vionegli_agresspadrmadr]'], 10),
      parseInt(services['spvvagtagress2[viofisica_agressoutrfami]'], 10)
      + parseInt(services['spvvagtagress2[viopsico_agressoutrfami]'], 10)
      + parseInt(services['spvvagtagress2[vioexplo_agressoutrfami]'], 10)
      + parseInt(services['spvvagtagress2[vioabuso_agressoutrfami]'], 10)
      + parseInt(services['spvvagtagress2[vionegli_agressoutrfami]'], 10),
      parseInt(services['spvvagtagress2[viofisica_agressoutrpesso]'], 10)
      + parseInt(services['spvvagtagress2[viopsico_agressoutrpesso]'], 10)
      + parseInt(services['spvvagtagress2[vioexplo_agressoutrpesso]'], 10)
      + parseInt(services['spvvagtagress2[vioabuso_agressoutrpesso]'], 10)
      + parseInt(services['spvvagtagress2[vionegli_agressoutrpesso]'], 10),
      1, 1, 1),
  ];

  const encaminhamentos = [
    createData('Conselho Tutelar', services['spvvorigemencaminha[origemconselho]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Comunidade / Família', services['spvvorigemencaminha[origemfamilia]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['spvvorigemencaminha[origemsocioa]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['spvvorigemencaminha[origempp]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Poder Judiciário / Ministério Público', services['spvvorigemencaminha[origempoder]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Total Geral',
      parseInt(services['spvvorigemencaminha[origemconselho]'], 10)
      + parseInt(services['spvvorigemencaminha[origemfamilia]'], 10)
      + parseInt(services['spvvorigemencaminha[origemsocioa]'], 10)
      + parseInt(services['spvvorigemencaminha[origempp]'], 10)
      + parseInt(services['spvvorigemencaminha[origempoder]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const qtdAtendTec = [
    createData('Nº de pessoas que receberam orientação psicossocial', services['spvvatendtecnico[atendtecnicopsico]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de visitas domiciliares realizadas', services['spvvatendtecnico[atendtecnicovisita]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de atendimentos familiares', services['spvvatendtecnico[atendtecnicofamilia]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de reuniões de articulação com a rede', services['spvvatendtecnico[atendtecnicorede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de reuniões para discussão de caso com técnicos do serviço e CREAS', services['spvvatendtecnico[atendtecnicocaso]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const motivosSaida = [
    createData('Conclusão do caso',
      services['spvvsaida[saidaconclusao]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Transferência para outro serviço',
      services['spvvsaida[saidalimiteidade]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Óbito',
      services['spvvsaida[saidaobito]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Abandono',
      services['spvvsaida[saidaabandono]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Medida restritiva de liberdade',
      services['spvvsaida[saidamedidaliberdade]'],
      1, 1, 1, 1, 1, 1, 1, 1),

  ];

  const tempoPerma = [
    createData('Até 1 ano',
      services['spvvtempopermanen[ate1ano_qtde]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('De 1 a 2 anos',
      services['spvvtempopermanen[1a2_qtde]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Mais de 2 anos Nº de usuários',
      services['spvvtempopermanen[maisde2_qtde]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['spvvtempopermanen[ate1ano_qtde]'], 10)
      + parseInt(services['spvvtempopermanen[1a2_qtde]'], 10)
      + parseInt(services['spvvtempopermanen[maisde2_qtde]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const TerriMoradia = [
    createData('No mesmo distrito onde o serviço está localizado',
      services['spvvregiao[spvvdistrito]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Na mesma subprefeitura (SAS) onde o serviço está localizado',
      services['spvvregiao[spvvsubpr]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Em outra subprefeitura (SAS) onde o serviço está localizado',
      services['spvvregiao[spvvservi]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['spvvregiao[spvvdistrito]'], 10)
      + parseInt(services['spvvregiao[spvvsubpr]'], 10)
      + parseInt(services['spvvregiao[spvvservi]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentosFinal = [
    createData('CRAS', services['spvvencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['spvvencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['spvvencaminhamentos[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Saúde', services['spvvencaminhamentos[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Educação', services['spvvencaminhamentos[educacao]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Defensoria Pública', services['spvvencaminhamentos[defensoria]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Judiciário', services['spvvencaminhamentos[judiciario]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['spvvencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotos = [
    createData('Semana 1', services['spvvatendremotoperio[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['spvvatendremotoperio[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['spvvatendremotoperio[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['spvvatendremotoperio[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['spvvatendremotoperio[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['spvvatendremotoperio[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['spvvperiofam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['spvvperiofam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['spvvperiofam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['spvvperiofam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['spvvperiofam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['spvvperiofam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
          <FirstSection>
            <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb
                component="a"
                onClick={() => {
                  history.push('/');
                }}
                label={nomeSAS}
                icon={<HomeIcon fontSize="small" />}
              />
              <StyledBreadcrumb
                component="a"
                onClick={() => {
                  setContext({
                    nomeSAS,
                    mes,
                  });
                  history.push('months');
                }}
                label={monthString}
              />
              <StyledBreadcrumb
                component="a"
                onClick={() => {
                  setContext({
                    nomeSAS,
                    mes,
                  });
                  history.push('/reports');
                }}
                label={serviceName}
              />
              <Typography color="textPrimary">Respostas</Typography>
            </Breadcrumbs>
            <div>

              <MyButton
                variant="contained"
                onClick={() => {
                  window.print();
                }}
                color="primary"
              >
                Imprimir

              </MyButton>
              <MyButton
                variant="contained"
                color="primary"
                onClick={() => {
                  setContext({
                    nomeSAS,
                    mes,
                  });
                  history.push('/reports');
                }}
              >
                Voltar
              </MyButton>
            </div>

          </FirstSection>

          <Section>

            <h2>
              1. Quantidade de crianças e adolescentes atendidos no mês, por faixa etária e sexo
            </h2>
            <TableFourColumns headers={qtdCriAdoMesHeader} body={qtdCriAdoMes} />

            <br />

            <h2>
              2. Quantidade crianças e adolescentes atendidos no mês, por sexo e raça/cor
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <br />

            <h2>
              3. Principal violência sofrida por cada uma das pessoas que entraram no serviço no mês
            </h2>
            <TableSevenColumns headers={princViolenciaHeader} body={PrincViolencia} />

            <br />

            <h2>
              4. Forma secundária de violência sofrida pelas pessoas que entraram no serviço no mês
            </h2>
            <TableSevenColumns headers={princViolenciaHeader} body={SecViolencia} />

            <br />

            <h2>
              5. Origem dos encaminhamentos realizados
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <br />

            <h2>
              6. Quantidade de pessoas que passaram pelo CREAS antes de serem encaminhados:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Quantidade(s)', services.spvvcreas, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />

            <h2>
              7. Quantidade de pessoas que receberam atendimento técnico no mês
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={qtdAtendTec} />

            <br />

            <h2>
              8. Quantidade de usuários por motivo de saída do serviço no mês
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={motivosSaida} />

            <br />

            <h2>
              9. Número de usuários atendidos no mês por tempo de permanência no serviço
            </h2>
            <TableTwoColumns headers={tempPermaHeaders} body={tempoPerma} />

            <br />

            <h2>
              10. Território de moradia das pessoas atendidas pelo serviço no mês
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={TerriMoradia} />

            <br />

            <h2>
              11. Número de casos em acompanhamento jurídico no mês:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Caso(s)', services.spvvacompjur, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />

            <h2>
              12. Quantidade de agressores atendidos pelo serviço no mês:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.spvvagressoratendido, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />

            <h2>
              13. Quantidade de crianças e adolescentes com deficiência atendidas no mês:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Criança(s) e Adolecente(s)', services.spvvpcd, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />

            <h2>
              14. Quantidade de usuários atendidos no mês que também estão acolhidos em SAICAs:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Usuário(s)', services.spvvacolhidos, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />

            <h2>
              15. Usuários que também são atendidos em MSE/MA:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Usuário(s)', services.spvvmse, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />

            <h2>
              16. Usuários que também são atendidos em SCFV:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Usuário(s)', services.spvvscfv, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />

            <h2>
              17. Encaminhamentos realizados pelo serviço no mês de referência
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={encaminhamentosFinal} />

            <br />

            <h2>
              18. Quantidade de atendimentos remotos de crianças e adolescentes por semana no mês
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={atendimentosRemotos} />

            <br />

            <h2>
              19. Quantidade de atendimentos familiares remotos por semana no mês
            </h2>
            <TableTwoColumns
              headers={genericTotalTecHeader}
              body={atendimentosRemotosFamiliaSemana}
            />

            <br />

          </Section>
        </>
      )

  );
};

export default Response;
