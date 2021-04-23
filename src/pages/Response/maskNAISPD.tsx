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

const idososFamiliasHeaders = ['', 'Quantidade'];

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
  '',
  'Quantidade',
];

const familiasInsumosHeaders = ['', 'N° de famílias'];

const infoIdososHeaders = ['', 'Quantidade'];

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

  const atendidosMesFem = [
    createData('0 a 5 anos (F)',
      services['naisatenfxetariafem[0a5f_atendmesatual]'],
      services['naisatenfxetariafem[0a5f_atendpres]'],
      services['naisatenfxetariafem[0a5f_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('6 a 11 anos (F)',
      services['naisatenfxetariafem[6a11f_atendmesatual]'],
      services['naisatenfxetariafem[6a11f_atendpres]'],
      services['naisatenfxetariafem[6a11f_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos (F)',
      services['naisatenfxetariafem[12a14f_atendmesatual]'],
      services['naisatenfxetariafem[12a14f_atendpres]'],
      services['naisatenfxetariafem[12a14f_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('15 a 17 anos (F)',
      services['naisatenfxetariafem[15a17f_atendmesatual]'],
      services['naisatenfxetariafem[15a17f_atendpres]'],
      services['naisatenfxetariafem[15a17f_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos (F)',
      services['naisatenfxetariafem[18a29f_atendmesatual]'],
      services['naisatenfxetariafem[18a29f_atendpres]'],
      services['naisatenfxetariafem[18a29f_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos (F)',
      services['naisatenfxetariafem[30a59f_atendmesatual]'],
      services['naisatenfxetariafem[30a59f_atendpres]'],
      services['naisatenfxetariafem[30a59f_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('60 anos ou mais (F)',
      services['naisatenfxetariafem[60maisf_atendmesatual]'],
      services['naisatenfxetariafem[60maisf_atendpres]'],
      services['naisatenfxetariafem[60maisf_atendrem]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['naisatenfxetariafem[0a5f_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariafem[6a11f_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariafem[12a14f_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariafem[15a17f_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariafem[18a29f_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariafem[30a59f_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariafem[60maisf_atendmesatual]'], 10),
      parseInt(services['naisatenfxetariafem[0a5f_atendpres]'], 10)
      + parseInt(services['naisatenfxetariafem[6a11f_atendpres]'], 10)
      + parseInt(services['naisatenfxetariafem[12a14f_atendpres]'], 10)
      + parseInt(services['naisatenfxetariafem[15a17f_atendpres]'], 10)
      + parseInt(services['naisatenfxetariafem[18a29f_atendpres]'], 10)
      + parseInt(services['naisatenfxetariafem[30a59f_atendpres]'], 10)
      + parseInt(services['naisatenfxetariafem[60maisf_atendpres]'], 10),
      parseInt(services['naisatenfxetariafem[0a5f_atendrem]'], 10)
      + parseInt(services['naisatenfxetariafem[6a11f_atendrem]'], 10)
      + parseInt(services['naisatenfxetariafem[12a14f_atendrem]'], 10)
      + parseInt(services['naisatenfxetariafem[15a17f_atendrem]'], 10)
      + parseInt(services['naisatenfxetariafem[18a29f_atendrem]'], 10)
      + parseInt(services['naisatenfxetariafem[30a59f_atendrem]'], 10)
      + parseInt(services['naisatenfxetariafem[60maisf_atendrem]'], 10),
      1, 1, 1, 1, 1, 1),
  ];

  const atendidosMesMasc = [
    createData('0 a 5 anos (M)',
      services['naisatenfxetariamasc[0a5m_atendmesatual]'],
      services['naisatenfxetariamasc[0a5m_atendpres]'],
      services['naisatenfxetariamasc[0a5m_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('6 a 11 anos (M)',
      services['naisatenfxetariamasc[6a11m_atendmesatual]'],
      services['naisatenfxetariamasc[6a11m_atendpres]'],
      services['naisatenfxetariamasc[6a11m_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos (M)',
      services['naisatenfxetariamasc[12a14m_atendmesatual]'],
      services['naisatenfxetariamasc[12a14m_atendpres]'],
      services['naisatenfxetariamasc[12a14m_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('15 a 17 anos (M)',
      services['naisatenfxetariamasc[15a17m_atendmesatual]'],
      services['naisatenfxetariamasc[15a17m_atendpres]'],
      services['naisatenfxetariamasc[15a17m_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos (M)',
      services['naisatenfxetariamasc[18a29m_atendmesatual]'],
      services['naisatenfxetariamasc[18a29m_atendpres]'],
      services['naisatenfxetariamasc[18a29m_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos (M)',
      services['naisatenfxetariamasc[30a59m_atendmesatual]'],
      services['naisatenfxetariamasc[30a59m_atendpres]'],
      services['naisatenfxetariamasc[30a59m_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('60 anos ou mais (M)',
      services['naisatenfxetariamasc[60maism_atendmesatual]'],
      services['naisatenfxetariamasc[60maism_atendpres]'],
      services['naisatenfxetariamasc[60maism_atendrem]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['naisatenfxetariamasc[0a5m_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariamasc[6a11m_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariamasc[12a14m_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariamasc[15a17m_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariamasc[18a29m_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariamasc[30a59m_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariamasc[60maism_atendmesatual]'], 10),
      parseInt(services['naisatenfxetariamasc[0a5m_atendpres]'], 10)
      + parseInt(services['naisatenfxetariamasc[6a11m_atendpres]'], 10)
      + parseInt(services['naisatenfxetariamasc[12a14m_atendpres]'], 10)
      + parseInt(services['naisatenfxetariamasc[15a17m_atendpres]'], 10)
      + parseInt(services['naisatenfxetariamasc[18a29m_atendpres]'], 10)
      + parseInt(services['naisatenfxetariamasc[30a59m_atendpres]'], 10)
      + parseInt(services['naisatenfxetariamasc[60maism_atendpres]'], 10),
      parseInt(services['naisatenfxetariamasc[0a5m_atendrem]'], 10)
      + parseInt(services['naisatenfxetariamasc[6a11m_atendrem]'], 10)
      + parseInt(services['naisatenfxetariamasc[12a14m_atendrem]'], 10)
      + parseInt(services['naisatenfxetariamasc[15a17m_atendrem]'], 10)
      + parseInt(services['naisatenfxetariamasc[18a29m_atendrem]'], 10)
      + parseInt(services['naisatenfxetariamasc[30a59m_atendrem]'], 10)
      + parseInt(services['naisatenfxetariamasc[60maism_atendrem]'], 10),
      1, 1, 1, 1, 1, 1),

  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['naisracasexo[fem_branca]'],
      services['naisracasexo[fem_preta]'],
      services['naisracasexo[fem_parda]'],
      services['naisracasexo[fem_amarela]'],
      services['naisracasexo[fem_indigena]'],
      services['naisracasexo[fem_naoinf]'],
      parseInt(services['naisracasexo[fem_branca]'], 10)
      + parseInt(services['naisracasexo[fem_preta]'], 10)
      + parseInt(services['naisracasexo[fem_parda]'], 10)
      + parseInt(services['naisracasexo[fem_amarela]'], 10)
      + parseInt(services['naisracasexo[fem_indigena]'], 10)
      + parseInt(services['naisracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['naisracasexo[masc_branca]'],
      services['naisracasexo[masc_preta]'],
      services['naisracasexo[masc_parda]'],
      services['naisracasexo[masc_amarela]'],
      services['naisracasexo[masc_indigena]'],
      services['naisracasexo[masc_naoinf]'],
      parseInt(services['naisracasexo[masc_branca]'], 10)
      + parseInt(services['naisracasexo[masc_preta]'], 10)
      + parseInt(services['naisracasexo[masc_parda]'], 10)
      + parseInt(services['naisracasexo[masc_amarela]'], 10)
      + parseInt(services['naisracasexo[masc_indigena]'], 10)
      + parseInt(services['naisracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['naisracasexo[masc_branca]'], 10)
      + parseInt(services['naisracasexo[fem_branca]'], 10),
      parseInt(services['naisracasexo[masc_preta]'], 10)
      + parseInt(services['naisracasexo[fem_preta]'], 10),
      parseInt(services['naisracasexo[masc_parda]'], 10)
      + parseInt(services['naisracasexo[fem_parda]'], 10),
      parseInt(services['naisracasexo[masc_amarela]'], 10)
      + parseInt(services['naisracasexo[fem_amarela]'], 10),
      parseInt(services['naisracasexo[masc_indigena]'], 10)
      + parseInt(services['naisracasexo[fem_indigena]'], 10),
      parseInt(services['naisracasexo[masc_naoinf]'], 10)
      + parseInt(services['naisracasexo[fem_naoinf]'], 10),
      parseInt(services['naisracasexo[masc_branca]'], 10)
      + parseInt(services['naisracasexo[fem_branca]'], 10)
      + parseInt(services['naisracasexo[masc_preta]'], 10)
      + parseInt(services['naisracasexo[fem_preta]'], 10)
      + parseInt(services['naisracasexo[masc_parda]'], 10)
      + parseInt(services['naisracasexo[fem_parda]'], 10)
      + parseInt(services['naisracasexo[masc_amarela]'], 10)
      + parseInt(services['naisracasexo[fem_amarela]'], 10)
      + parseInt(services['naisracasexo[masc_indigena]'], 10)
      + parseInt(services['naisracasexo[fem_indigena]'], 10)
      + parseInt(services['naisracasexo[masc_naoinf]'], 10)
      + parseInt(services['naisracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const atendidosMesTipoDef = [
    createData('Auditiva',
      services['naistipopcd[defauditiva]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Física',
      services['naistipopcd[deffisica]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Intelectual',
      services['naistipopcd[defintelec]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Múltipla',
      services['naistipopcd[defmultipla]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Transtorno do Espectro Autista',
      services['naistipopcd[deftea]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Visual',
      services['naistipopcd[defvisual]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Surdo-cedo',
      services['naistipopcd[defsurdocego]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Sem diagnóstico',
      services['naistipopcd[defsemdiagnos]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Síndrome de Down',
      services['naistipopcd[defdown]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['naistipopcd[defauditiva]'], 10)
      + parseInt(services['naistipopcd[deffisica]'], 10)
      + parseInt(services['naistipopcd[defintelec]'], 10)
      + parseInt(services['naistipopcd[defmultipla]'], 10)
      + parseInt(services['naistipopcd[deftea]'], 10)
      + parseInt(services['naistipopcd[defvisual]'], 10)
      + parseInt(services['naistipopcd[defsurdocego]'], 10)
      + parseInt(services['naistipopcd[defsemdiagnos]'], 10)
      + parseInt(services['naistipopcd[defdown]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendidosMesDomicilio = [
    createData('60 a 64 anos (M)',
      services['ncifluxodomicilio[60a64m_atendmesatual]'],
      services['ncifluxodomicilio[60a64m_presmesatual]'],
      services['ncifluxodomicilio[60a64m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('60 a 64 anos (F)',
      services['ncifluxodomicilio[60a64f_atendmesatual]'],
      services['ncifluxodomicilio[60a64f_presmesatual]'],
      services['ncifluxodomicilio[60a64f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos (M)',
      services['ncifluxodomicilio[65a69m_atendmesatual]'],
      services['ncifluxodomicilio[65a69m_presmesatual]'],
      services['ncifluxodomicilio[65a69m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos (F)',
      services['ncifluxodomicilio[65a69f_atendmesatual]'],
      services['ncifluxodomicilio[65a69f_presmesatual]'],
      services['ncifluxodomicilio[65a69f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos (M)',
      services['ncifluxodomicilio[70a74m_atendmesatual]'],
      services['ncifluxodomicilio[70a74m_presmesatual]'],
      services['ncifluxodomicilio[70a74m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos (F)',
      services['ncifluxodomicilio[70a74f_atendmesatual]'],
      services['ncifluxodomicilio[70a74f_presmesatual]'],
      services['ncifluxodomicilio[70a74f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('75 anos mais (M)',
      services['ncifluxodomicilio[75maism_atendmesatual]'],
      services['ncifluxodomicilio[75maism_presmesatual]'],
      services['ncifluxodomicilio[75maism_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('75 anos mais (F)',
      services['ncifluxodomicilio[75maisf_atendmesatual]'],
      services['ncifluxodomicilio[75maisf_presmesatual]'],
      services['ncifluxodomicilio[75maisf_remmesatual]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['ncifluxodomicilio[60a64m_atendmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[60a64f_atendmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[65a69m_atendmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[65a69f_atendmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[70a74m_atendmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[70a74f_atendmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[75maism_atendmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[75maisf_atendmesatual]'], 10),
      parseInt(services['ncifluxodomicilio[60a64m_presmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[60a64f_presmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[65a69m_presmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[65a69f_presmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[70a74m_presmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[70a74f_presmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[75maism_presmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[75maisf_presmesatual]'], 10),
      parseInt(services['ncifluxodomicilio[60a64m_remmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[60a64f_remmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[65a69m_remmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[65a69f_remmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[70a74m_remmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[70a74f_remmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[75maism_remmesatual]'], 10)
      + parseInt(services['ncifluxodomicilio[75maisf_remmesatual]'], 10),
      1, 1, 1, 1, 1, 1),
  ];

  const sexoRacaCorDomicilio = [
    createData('Feminino',
      services['ncidomracasexo[fem_branc]'],
      services['ncidomracasexo[fem_preto]'],
      services['ncidomracasexo[fem_pardo]'],
      services['ncidomracasexo[fem_amarelo]'],
      services['ncidomracasexo[fem_indigena]'],
      services['ncidomracasexo[fem_naoinf]'],
      parseInt(services['ncidomracasexo[fem_branc]'], 10)
      + parseInt(services['ncidomracasexo[fem_preto]'], 10)
      + parseInt(services['ncidomracasexo[fem_pardo]'], 10)
      + parseInt(services['ncidomracasexo[fem_amarelo]'], 10)
      + parseInt(services['ncidomracasexo[fem_indigena]'], 10)
      + parseInt(services['ncidomracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['ncidomracasexo[masc_branc]'],
      services['ncidomracasexo[masc_preto]'],
      services['ncidomracasexo[masc_pardo]'],
      services['ncidomracasexo[masc_amarelo]'],
      services['ncidomracasexo[masc_indigena]'],
      services['ncidomracasexo[masc_naoinf]'],
      parseInt(services['ncidomracasexo[masc_branc]'], 10)
      + parseInt(services['ncidomracasexo[masc_preto]'], 10)
      + parseInt(services['ncidomracasexo[masc_pardo]'], 10)
      + parseInt(services['ncidomracasexo[masc_amarelo]'], 10)
      + parseInt(services['ncidomracasexo[masc_indigena]'], 10)
      + parseInt(services['ncidomracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['ncidomracasexo[masc_branc]'], 10)
      + parseInt(services['ncidomracasexo[fem_branc]'], 10),
      parseInt(services['ncidomracasexo[masc_preto]'], 10)
      + parseInt(services['ncidomracasexo[fem_preto]'], 10),
      parseInt(services['ncidomracasexo[masc_pardo]'], 10)
      + parseInt(services['ncidomracasexo[fem_pardo]'], 10),
      parseInt(services['ncidomracasexo[masc_amarelo]'], 10)
      + parseInt(services['ncidomracasexo[fem_amarelo]'], 10),
      parseInt(services['ncidomracasexo[masc_indigena]'], 10)
      + parseInt(services['ncidomracasexo[fem_indigena]'], 10),
      parseInt(services['ncidomracasexo[masc_naoinf]'], 10)
      + parseInt(services['ncidomracasexo[fem_naoinf]'], 10),
      parseInt(services['ncidomracasexo[masc_branc]'], 10)
      + parseInt(services['ncidomracasexo[fem_branc]'], 10)
      + parseInt(services['ncidomracasexo[masc_preto]'], 10)
      + parseInt(services['ncidomracasexo[fem_preto]'], 10)
      + parseInt(services['ncidomracasexo[masc_pardo]'], 10)
      + parseInt(services['ncidomracasexo[fem_pardo]'], 10)
      + parseInt(services['ncidomracasexo[masc_amarelo]'], 10)
      + parseInt(services['ncidomracasexo[fem_amarelo]'], 10)
      + parseInt(services['ncidomracasexo[masc_indigena]'], 10)
      + parseInt(services['ncidomracasexo[fem_indigena]'], 10)
      + parseInt(services['ncidomracasexo[masc_naoinf]'], 10)
      + parseInt(services['ncidomracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const motivosSaida = [
    createData('Mudança de endereço',
      services['ncisaidaconvivencia[mudancaendereco_quantidade]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Problemas de saúde',
      services['ncisaidaconvivencia[ofertadom_quantidade]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Abandono',
      services['ncisaidaconvivencia[ofertadom_quantidade]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Conclusão do Programa',
      services['ncisaidaconvivencia[ofertadom_quantidade]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Óbito',
      services['ncisaidaconvivencia[obito_quantidade]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Transferência para outro serviço',
      services['ncisaidaconvivencia[transferencia_quantidade]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Inserção no mercado de trabalho',
      services['ncisaidaconvivencia[transferencia_quantidade]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Total',
      parseInt(services['ncisaidaconvivencia[ofertadom_quantidade]'], 10)
    + parseInt(services['ncisaidaconvivencia[obito_quantidade]'], 10)
    + parseInt(services['ncisaidaconvivencia[transferencia_quantidade]'], 10)
    + parseInt(services['ncisaidaconvivencia[mudancaendereco_quantidade]'], 10),
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
  ];

  const territorioMoradia = [
    createData('No mesmo distrito onde o serviço está localizado',
      services['naismoradia[naisdistrito]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Na mesma subprefeitura (SAS) onde o serviço está localizado',
      services['naismoradia[naissubpr]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Em outra subprefeitura (SAS) onde o serviço está localizado',
      services['naismoradia[naisoutra]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Total',
      parseInt(services['naismoradia[naissubpr]'], 10)
    + parseInt(services['naismoradia[naisoutra]'], 10)
    + parseInt(services['naismoradia[naisdistrito]'], 10),
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
  ];

  const situacaoEscolar = [
    createData('Nº de pessoas atendidas pelo serviço que frequentam o ensino formal',
      services['naissitescolar[freqescolar]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];

  const beneficariosBPC = [
    createData('Nº de pessoas ',
      services.naisprogbpc,
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];

  const motivosSaidaDomicilio = [
    createData('Mudança de endereço',
      services['ncisaidadomicilio[mudancaendereco_quantidade]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Transferência para outro serviço',
      services['ncisaidadomicilio[transferencia_quantidade]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Óbito',
      services['ncisaidadomicilio[obito_quantidade]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Recusa de acompanhamento',
      services['ncisaidadomicilio[recusa_quantidade]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Ganhou autonomia',
      services['ncisaidadomicilio[autonomia_quantidade]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Resgate de vínculos familiares',
      services['ncisaidadomicilio[resgate_quantidade]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Passou a participar das atividades de convivência',
      services['ncisaidadomicilio[conclusaocurso_quantidade]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Total',
      parseInt(services['ncisaidadomicilio[conclusaocurso_quantidade]'], 10)
      + parseInt(services['ncisaidadomicilio[resgate_quantidade]'], 10)
      + parseInt(services['ncisaidadomicilio[autonomia_quantidade]'], 10)
      + parseInt(services['ncisaidadomicilio[recusa_quantidade]'], 10)
    + parseInt(services['ncisaidadomicilio[obito_quantidade]'], 10)
    + parseInt(services['ncisaidadomicilio[transferencia_quantidade]'], 10)
    + parseInt(services['ncisaidadomicilio[mudancaendereco_quantidade]'], 10),
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),

  ];

  const idososMoramSozinho = [
    createData('Quantidade de idosos que moram sozinhos',
      services['nciconvidososozinho[idososo]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Desses idosos, informe a quantidade de idosos que precisam de ajuda',
      services['nciconvidososozinho[ajudaidosos]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];

  const idososMoramSozinhoDomicilio = [
    createData('Quantidade de idosos que moram sozinhos',
      services['ncidomsosozinho[idososo]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Desses idosos, informe a quantidade de idosos que precisam de ajuda',
      services['ncidomsosozinho[ajudaidosos]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];

  const idososFamilias = [
    createData('Nº de famílias de idosos atendidas presencialmente no mês de referência ',
      services['nciconvatenfam[ccafampres]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Nº de famílias de idosos acompanhadas de forma remota no mês de referência',
      services['nciconvatenfam[ccafamrem]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Nº total de famílias de idosos atendidas no mês de referência',
      services['nciconvatenfam[ccafamtotal]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];

  const idososFamiliasDomicilio = [
    createData('Nº de famílias de idosos atendidas presencialmente no mês de referência ',
      services['ncidomatendfam[ccafampres]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Nº de famílias de idosos acompanhadas de forma remota no mês de referência',
      services['ncidomatendfam[ccafamrem]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Nº total de famílias de idosos atendidas no mês de referência',
      services['ncidomatendfam[ccafamtotal]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];

  const familiasInsumos = [
    createData('Cesta de alimentos', services['nciinsumos[alimentos_SQ001]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Kit de material de higiene', services['nciinsumos[higiene_SQ001]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const infoIdosos = [
    createData('Nº de idosos do serviço em domicílio que recebem BPC', services['nciinfoimportantes[bpcdomicilio_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de idosos do serviço de convivência que recebem BPC', services['nciinfoimportantes[bpcconvivencia_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de idosos do serviço em domicílio com PDU em andamento', services['nciinfoimportantes[pdudomicilio_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de visitas domiciliares realizadas no mês para o público da convivência', services['nciinfoimportantes[visitasconvivi_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de visitas domiciliares realizadas no mês para o público do serviço em domicílio', services['nciinfoimportantes[residemsos1_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const familiasVulnerabilidade = [
    createData('Conflitos', services['nciconvvulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Preconceitos/discriminação', services['nciconvvulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Abandono', services['nciconvvulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Apartação', services['nciconvvulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Confinamento', services['nciconvvulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Isolamento', services['nciconvvulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Violência', services['nciconvvulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const familiasVulnerabilidadeDomicilio = [
    createData('Conflitos', services['ncidomvulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Preconceitos/discriminação', services['ncidomvulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Abandono', services['ncidomvulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Apartação', services['ncidomvulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Confinamento', services['ncidomvulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Isolamento', services['ncidomvulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Violência', services['ncidomvulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentoFamilia = [
    createData('Nº de famílias atendidas presencialmente', services['circofamatend[ccafampres]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de famílias acompanhadas de forma remota', services['circofamatend[ccafamrem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atividadesItems = [
    ['Atividades esportivas', services['nciatvidades[atvesporte]']],
    ['Musicalidade (cantar, tocar instrumentos etc.)', services['nciatvidades[atvmusica]']],
    ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', services['nciatvidades[atvcultura]']],
    ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', services['nciatvidades[atvarte]']],
    ['Atividades de inclusão digital', services['nciatvidades[atvincdigital]']],
    ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['nciatvidades[atvlinguagem]']],
    ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['nciatvidades[atvculinaria]']],
    ['Atividades recreativas (jogos, brincadeiras, etc.)', services['nciatvidades[atvrecreacao]']],

  ];

  const temasItems = [
    ['Temas transversais (saúde, meio ambiente, cultura, esporte etc.)', services['ncitema[tematransversal]']],
    ['Direitos e programas sociais', services['ncitema[temadireitos]']],
    ['Segurança alimentar e nutricional', services['ncitema[temanutricao]']],
    ['Igualdade entre homens e mulheres', services['ncitema[temaigualdade]']],
    ['Orientação sexual e de identidade de gênero', services['ncitema[temaorientsexual]']],
    ['Relações étnico-raciais', services['ncitema[temaetnico]']],
    ['Prevenção ao uso de álcool e drogas', services['ncitema[temaalccoldrogas]']],
    ['Prevenção à violência', services['ncitema[temaprevencaovio]']],
    ['Parentalidade', services['ncitema[temaparental]']],
    ['Deficiência e acessibilidade', services['ncitema[temapcd]']],
    ['Envelhecimento saudável', services['ncitema[temaenvelhsaudavel]']],
  ];
  const demandaReprimida = [
    createData('0 a 5 anos', services['naislistaespera[0a5_qtd]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('6 a 11 anos', services['naislistaespera[6a11_qtd]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos', services['naislistaespera[12a14_qtd]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('15 a 17 anos', services['naislistaespera[15a17_qtd]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos', services['naislistaespera[18a29_qtd]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos', services['naislistaespera[30a59_qtd]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('60 anos ou mais', services['naislistaespera[60mais_qtd]'], 1, 1, 1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['naislistaespera[0a5_qtd]'], 10)
      + parseInt(services['naislistaespera[6a11_qtd]'], 10)
      + parseInt(services['naislistaespera[12a14_qtd]'], 10)
      + parseInt(services['naislistaespera[15a17_qtd]'], 10)
      + parseInt(services['naislistaespera[18a29_qtd]'], 10)
      + parseInt(services['naislistaespera[30a59_qtd]'], 10)
      + parseInt(services['naislistaespera[60mais_qtd]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['naisencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['naisencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', 1, 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Saúde', services['naisencaminhamentos[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Educação', services['naisencaminhamentos[educacao]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Conselhos de direito', services['naisencaminhamentos[direito]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['naisencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotos = [
    createData('Semana 1', services['naisatendremotoperio[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['naisatendremotoperio[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['naisatendremotoperio[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['naisatendremotoperio[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['naisatendremotoperio[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['naisatendremotoperio[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosDomicilio = [
    createData('Semana 1', services['ncidomatendremperio[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['ncidomatendremperio[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['ncidomatendremperio[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['ncidomatendremperio[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['ncidomatendremperio[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['ncidomatendremperio[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosTipos = [
    createData('Telefone / Celular / Whatsapp', services['nciconvivenciremdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Email', services['nciconvivenciremdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Facebook', services['nciconvivenciremdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('YouTube', services['nciconvivenciremdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras redes sociais', services['nciconvivenciremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Entrega de kits de atividades', services['nciconvivenciremdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outros', services['nciconvivenciremdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1)];

  const atendimentosRemotosTiposDomicilio = [
    createData('Telefone / Celular / Whatsapp', services['naisdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Email', services['naisdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Facebook', services['naisdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('YouTube', services['naisdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras redes sociais', services['naisdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Entrega de kits de atividades', services['naisdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outros', services['naisdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['naisperiofam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['naisperiofam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['naisperiofam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['naisperiofam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['naisperiofam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['naisperiofam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];
  const atendimentosRemotosFamiliaSemanaDomicilio = [
    createData('Semana 1', services['ncidomatendremfam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['ncidomatendremfam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['ncidomatendremfam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['ncidomatendremfam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['ncidomatendremfam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['ncidomatendremfam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
              1. Quantidade de pessoas do sexo feminino
              atendidas pelo serviço no mês, por faixa etária:
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesFem} />

            <h2>
              2. Quantidade de pessoas do sexo masculino
              atendidos pelo serviço no mês, por faixa etária
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesMasc} />

            <br />

            <h2>
              3. Quantidade pessoas atendidas por sexo e raça/cor no mês
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <br />

            <h2>
              4. Quantidade de pessoas atendidas pelo serviço no mês, por tipo de deficiência
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={atendidosMesTipoDef} />
            <br />
            <h2>
              5. Território de moradia das pessoas atendidas pelo serviço no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={territorioMoradia} />
            <br />
            <h2>
              6. Situação escolar das pessoas que foram atendidas pelo serviço no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={situacaoEscolar} />
            <h2>
              7. Quantidade de pessoas atendidas pelo
              serviço no mês que são beneficiárias do BPC - Benefício de Prestação Continuada
            </h2>

            <TableTwoColumns headers={['', 'Quantidade']} body={beneficariosBPC} />

            <h2>
              8. Encaminhamentos realizados pelo serviço no mês
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              9. Quantidade de pessoas incluídas na lista de espera
              (demanda reprimida) do serviço no mês
            </h2>

            <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />

            <h2>
              10. Quantidade de atendimentos remotos de usuários por semana no mês
            </h2>
            <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

            <br />
            <h2>
              11. Quantidade de atividades remotas
              realizadas no mês, pelo meio em que foram disponibilizadas
            </h2>

            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTiposDomicilio}
            />

            <h2>
              12. Quantidade de atendimentos remotos de familiares por semana no mês
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
