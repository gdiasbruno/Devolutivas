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

import {
  FirstSection, MyButton, Section,
} from './styles';

import TableEigthColumns from '../../components/TableEightColumns';
import TableFourColumns from '../../components/TableFourColumns';
import TableTenColumns from '../../components/TableTenColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import ListComponent from '../../components/ListComponent';

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
  '6 a 14 anos',
  '15 a 17 anos',
  '18 a 29 anos',
  '30 a 59 anos',
  '60 a 64 anos',
  '65 a 69 anos',
  '70 a 74 anos',
  '75 anos ou mais',
  'Total Geral',
];

const familiasVulnerabilidadeHeaders = ['', 'Nº de famílias'];

const atendimentoFamiliaHeaders = ['', 'Nº de famílias'];

const demandaReprimidaHeaders = ['', 'Nº de pessoas'];

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const atendimentosRemotosHeaders = ['', 'Atendimentos Remotos'];

const atendimentosRemotosTiposHeaders = ['Tipos', ''];

const atendimentosRemotosFamiliaSemanaHeaders = ['Semanas', 'Nº de famílias'];

const ResponseCRECI:any = () => {
  const [services, setServices]:any = useState([]);
  const { context, setContext }:any = useContext(infoContext);
  const {
    nomeSAS, mes, serviceName, token,
  } = context;
  const history = useHistory();
  // eslint-disable-next-line new-cap

  const fetchUserProfiles = () => {
    axios.get(`http://localhost:8080/devolutivas/${nomeSAS}/${mes}/12112311`).then((res) => {
      const index = Object.keys(res.data.responses[0])[0];
      setServices(res.data.responses[0][index]);
      console.log(res.data);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  const idososMoramSozinho = [
    createData('Quantidade de idosos que moram sozinhos',
      services['ccintidoso[idososo]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Destes, quantos contam com apoio da família / comunidade',
      services['ccintidoso[contamcajuda]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];

  const atendidosMesFeminino = [
    createData('6 a 11 anos (F)',
      services['ccinteratendfem[6a11f_atendmesatual]'],
      services['ccinteratendfem[6a11f_presmesatual]'],
      services['ccinteratendfem[6a11f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos (F)',
      services['ccinteratendfem[12a14f_atendmesatual]'],
      services['ccinteratendfem[12a14f_presmesatual]'],
      services['ccinteratendfem[12a14f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('15 a 17 anos (F)',
      services['ccinteratendfem[15a17f_atendmesatual]'],
      services['ccinteratendfem[15a17f_presmesatual]'],
      services['ccinteratendfem[15a17f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos (F)',
      services['ccinteratendfem[18a29f_atendmesatual]'],
      services['ccinteratendfem[18a29f_presmesatual]'],
      services['ccinteratendfem[18a29f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos (F)',
      services['ccinteratendfem[30a59f_atendmesatual]'],
      services['ccinteratendfem[30a59f_presmesatual]'],
      services['ccinteratendfem[30a59f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('60 a 64 anos (F)',
      services['ccinteratendfem[60a64f_atendmesatual]'],
      services['ccinteratendfem[60a64f_presmesatual]'],
      services['ccinteratendfem[60a64f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos (F)',
      services['ccinteratendfem[65a69f_atendmesatual]'],
      services['ccinteratendfem[65a69f_presmesatual]'],
      services['ccinteratendfem[65a69f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos (F)',
      services['ccinteratendfem[70a74f_atendmesatual]'],
      services['ccinteratendfem[70a74f_presmesatual]'],
      services['ccinteratendfem[70a74f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('75 anos ou mais (F)',
      services['ccinteratendfem[75maisf_atendmesatual]'],
      services['ccinteratendfem[75maisf_presmesatual]'],
      services['ccinteratendfem[75maisf_remmesatual]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['ccinteratendfem[6a11f_atendmesatual]'], 10)
      + parseInt(services['ccinteratendfem[12a14f_atendmesatual]'], 10)
      + parseInt(services['ccinteratendfem[15a17f_atendmesatual]'], 10)
      + parseInt(services['ccinteratendfem[18a29f_atendmesatual]'], 10)
      + parseInt(services['ccinteratendfem[30a59f_atendmesatual]'], 10)
      + parseInt(services['ccinteratendfem[60a64f_atendmesatual]'], 10)
      + parseInt(services['ccinteratendfem[65a69f_atendmesatual]'], 10)
      + parseInt(services['ccinteratendfem[70a74f_atendmesatual]'], 10)
      + parseInt(services['ccinteratendfem[75maisf_atendmesatual]'], 10),
      parseInt(services['ccinteratendfem[6a11f_presmesatual]'], 10)
      + parseInt(services['ccinteratendfem[12a14f_presmesatual]'], 10)
      + parseInt(services['ccinteratendfem[15a17f_presmesatual]'], 10)
      + parseInt(services['ccinteratendfem[18a29f_presmesatual]'], 10)
      + parseInt(services['ccinteratendfem[30a59f_presmesatual]'], 10)
      + parseInt(services['ccinteratendfem[60a64f_presmesatual]'], 10)
      + parseInt(services['ccinteratendfem[65a69f_presmesatual]'], 10)
      + parseInt(services['ccinteratendfem[70a74f_presmesatual]'], 10)
      + parseInt(services['ccinteratendfem[75maisf_presmesatual]'], 10),
      parseInt(services['ccinteratendfem[6a11f_remmesatual]'], 10)
      + parseInt(services['ccinteratendfem[12a14f_remmesatual]'], 10)
      + parseInt(services['ccinteratendfem[15a17f_remmesatual]'], 10)
      + parseInt(services['ccinteratendfem[18a29f_remmesatual]'], 10)
      + parseInt(services['ccinteratendfem[30a59f_remmesatual]'], 10)
      + parseInt(services['ccinteratendfem[60a64f_remmesatual]'], 10)
      + parseInt(services['ccinteratendfem[65a69f_remmesatual]'], 10)
      + parseInt(services['ccinteratendfem[70a74f_remmesatual]'], 10)
      + parseInt(services['ccinteratendfem[75maisf_remmesatual]'], 10),
      1, 1, 1, 1, 1, 1),
  ];

  const atendidosMesMasculino = [
    createData('6 a 11 anos (M)',
      services['ccinteratendmasc[6a11m_atendmesatual]'],
      services['ccinteratendmasc[6a11m_presmesatual]'],
      services['ccinteratendmasc[6a11m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos (M)',
      services['ccinteratendmasc[12a14m_atendmesatual]'],
      services['ccinteratendmasc[12a14m_presmesatual]'],
      services['ccinteratendmasc[12a14m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('15 a 17 anos (M)',
      services['ccinteratendmasc[15a17m_atendmesatual]'],
      services['ccinteratendmasc[15a17m_presmesatual]'],
      services['ccinteratendmasc[15a17m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos (M)',
      services['ccinteratendmasc[18a29m_atendmesatual]'],
      services['ccinteratendmasc[18a29m_presmesatual]'],
      services['ccinteratendmasc[18a29m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos (M)',
      services['ccinteratendmasc[30a59m_atendmesatual]'],
      services['ccinteratendmasc[30a59m_presmesatual]'],
      services['ccinteratendmasc[30a59m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('60 a 64 anos (M)',
      services['ccinteratendmasc[60a64m_atendmesatual]'],
      services['ccinteratendmasc[60a64m_presmesatual]'],
      services['ccinteratendmasc[60a64m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos (M)',
      services['ccinteratendmasc[65a69m_atendmesatual]'],
      services['ccinteratendmasc[65a69m_presmesatual]'],
      services['ccinteratendmasc[65a69m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos (M)',
      services['ccinteratendmasc[70a74m_atendmesatual]'],
      services['ccinteratendmasc[70a74m_presmesatual]'],
      services['ccinteratendmasc[70a74m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('75 anos ou mais (M)',
      services['ccinteratendmasc[75maism_atendmesatual]'],
      services['ccinteratendmasc[75maism_presmesatual]'],
      services['ccinteratendmasc[75maism_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['ccinteratendmasc[6a11m_atendmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[12a14m_atendmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[15a17m_atendmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[18a29m_atendmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[30a59m_atendmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[60a64m_atendmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[65a69m_atendmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[70a74m_atendmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[75maism_atendmesatual]'], 10),
      parseInt(services['ccinteratendmasc[6a11m_presmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[12a14m_presmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[15a17m_presmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[18a29m_presmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[30a59m_presmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[60a64m_presmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[65a69m_presmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[70a74m_presmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[75maism_presmesatual]'], 10),
      parseInt(services['ccinteratendmasc[6a11m_remmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[12a14m_remmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[15a17m_remmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[18a29m_remmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[30a59m_remmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[60a64m_remmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[65a69m_remmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[70a74m_remmesatual]'], 10)
      + parseInt(services['ccinteratendmasc[75maism_remmesatual]'], 10),
      1, 1, 1, 1, 1, 1),
  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['ccintracasexo[fem_branca]'],
      services['ccintracasexo[fem_preta]'],
      services['ccintracasexo[fem_parda]'],
      services['ccintracasexo[fem_amarela]'],
      services['ccintracasexo[fem_indigena]'],
      services['ccintracasexo[fem_naoinf]'],
      parseInt(services['ccintracasexo[fem_branca]'], 10)
      + parseInt(services['ccintracasexo[fem_preta]'], 10)
      + parseInt(services['ccintracasexo[fem_parda]'], 10)
      + parseInt(services['ccintracasexo[fem_amarela]'], 10)
      + parseInt(services['ccintracasexo[fem_indigena]'], 10)
      + parseInt(services['ccintracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['ccintracasexo[masc_branca]'],
      services['ccintracasexo[masc_preta]'],
      services['ccintracasexo[masc_parda]'],
      services['ccintracasexo[masc_amarela]'],
      services['ccintracasexo[masc_indigena]'],
      services['ccintracasexo[masc_naoinf]'],
      parseInt(services['ccintracasexo[masc_branca]'], 10)
      + parseInt(services['ccintracasexo[masc_preta]'], 10)
      + parseInt(services['ccintracasexo[masc_parda]'], 10)
      + parseInt(services['ccintracasexo[masc_amarela]'], 10)
      + parseInt(services['ccintracasexo[masc_indigena]'], 10)
      + parseInt(services['ccintracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['ccintracasexo[masc_branca]'], 10)
      + parseInt(services['ccintracasexo[fem_branca]'], 10),
      parseInt(services['ccintracasexo[masc_preta]'], 10)
      + parseInt(services['ccintracasexo[fem_preta]'], 10),
      parseInt(services['ccintracasexo[masc_parda]'], 10)
      + parseInt(services['ccintracasexo[fem_parda]'], 10),
      parseInt(services['ccintracasexo[masc_amarela]'], 10)
      + parseInt(services['ccintracasexo[fem_amarela]'], 10),
      parseInt(services['ccintracasexo[masc_indigena]'], 10)
      + parseInt(services['ccintracasexo[fem_indigena]'], 10),
      parseInt(services['ccintracasexo[masc_naoinf]'], 10)
      + parseInt(services['ccintracasexo[fem_naoinf]'], 10),
      parseInt(services['ccintracasexo[masc_branca]'], 10)
      + parseInt(services['ccintracasexo[fem_branca]'], 10)
      + parseInt(services['ccintracasexo[masc_preta]'], 10)
      + parseInt(services['ccintracasexo[fem_preta]'], 10)
      + parseInt(services['ccintracasexo[masc_parda]'], 10)
      + parseInt(services['ccintracasexo[fem_parda]'], 10)
      + parseInt(services['ccintracasexo[masc_amarela]'], 10)
      + parseInt(services['ccintracasexo[fem_amarela]'], 10)
      + parseInt(services['ccintracasexo[masc_indigena]'], 10)
      + parseInt(services['ccintracasexo[fem_indigena]'], 10)
      + parseInt(services['ccintracasexo[masc_naoinf]'], 10)
      + parseInt(services['ccintracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const motivosSaida = [
    createData('Mudança de endereço',
      services['ccintersaidas[endereco_6a14]'],
      services['ccintersaidas[endereco_15a17]'],
      services['ccintersaidas[endereco_18a29]'],
      services['ccintersaidas[endereco_30a59]'],
      services['ccintersaidas[endereco_60a64]'],
      services['ccintersaidas[endereco_65a69]'],
      services['ccintersaidas[endereco_70a74]'],
      services['ccintersaidas[endereco_75mais]'],
      parseInt(services['ccintersaidas[endereco_6a14]'], 10)
      + parseInt(services['ccintersaidas[endereco_15a17]'], 10)
      + parseInt(services['ccintersaidas[endereco_18a29]'], 10)
      + parseInt(services['ccintersaidas[endereco_30a59]'], 10)
      + parseInt(services['ccintersaidas[endereco_60a64]'], 10)
      + parseInt(services['ccintersaidas[endereco_65a69]'], 10)
      + parseInt(services['ccintersaidas[endereco_70a74]'], 10)
      + parseInt(services['ccintersaidas[endereco_75mais]'], 10)),
    createData('Transferência para outro serviço',
      services['ccintersaidas[transferencia_6a14]'],
      services['ccintersaidas[transferencia_15a17]'],
      services['ccintersaidas[transferencia_18a29]'],
      services['ccintersaidas[transferencia_30a59]'],
      services['ccintersaidas[transferencia_60a64]'],
      services['ccintersaidas[transferencia_65a69]'],
      services['ccintersaidas[transferencia_70a74]'],
      services['ccintersaidas[transferencia_75mais]'],
      parseInt(services['ccintersaidas[transferencia_6a14]'], 10)
      + parseInt(services['ccintersaidas[transferencia_15a17]'], 10)
      + parseInt(services['ccintersaidas[transferencia_18a29]'], 10)
      + parseInt(services['ccintersaidas[transferencia_30a59]'], 10)
      + parseInt(services['ccintersaidas[transferencia_60a64]'], 10)
      + parseInt(services['ccintersaidas[transferencia_65a69]'], 10)
      + parseInt(services['ccintersaidas[transferencia_70a74]'], 10)
      + parseInt(services['ccintersaidas[transferencia_75mais]'], 10)),
    createData('Abandono',
      services['ccintersaidas[aband_6a14]'],
      services['ccintersaidas[aband_15a17]'],
      services['ccintersaidas[aband_18a29]'],
      services['ccintersaidas[aband_30a59]'],
      services['ccintersaidas[aband_60a64]'],
      services['ccintersaidas[aband_65a69]'],
      services['ccintersaidas[aband_70a74]'],
      services['ccintersaidas[aband_75mais]'],
      parseInt(services['ccintersaidas[aband_6a14]'], 10)
      + parseInt(services['ccintersaidas[aband_15a17]'], 10)
      + parseInt(services['ccintersaidas[aband_18a29]'], 10)
      + parseInt(services['ccintersaidas[aband_30a59]'], 10)
      + parseInt(services['ccintersaidas[aband_60a64]'], 10)
      + parseInt(services['ccintersaidas[aband_65a69]'], 10)
      + parseInt(services['ccintersaidas[aband_70a74]'], 10)
      + parseInt(services['ccintersaidas[aband_75mais]'], 10)),
    createData('Óbito',
      services['ccintersaidas[obito_6a14]'],
      services['ccintersaidas[obito_15a17]'],
      services['ccintersaidas[obito_18a29]'],
      services['ccintersaidas[obito_30a59]'],
      services['ccintersaidas[obito_60a64]'],
      services['ccintersaidas[obito_65a69]'],
      services['ccintersaidas[obito_70a74]'],
      services['ccintersaidas[obito_75mais]'],
      1),
    createData('Inserção no Programa Jovem Aprendiz',
      services['ccintersaidas[programajaprendiz_6a14]'],
      services['ccintersaidas[programajaprendiz_15a17]'],
      services['ccintersaidas[programajaprendiz_18a29]'],
      services['ccintersaidas[programajaprendiz_30a59]'],
      services['ccintersaidas[programajaprendiz_60a64]'],
      services['ccintersaidas[programajaprendiz_65a69]'],
      services['ccintersaidas[programajaprendiz_70a74]'],
      services['ccintersaidas[programajaprendiz_75mais]'],
      parseInt(services['ccintersaidas[programajaprendiz_6a14]'], 10)
      + parseInt(services['ccintersaidas[programajaprendiz_15a17]'], 10)
      + parseInt(services['ccintersaidas[programajaprendiz_18a29]'], 10)
      + parseInt(services['ccintersaidas[programajaprendiz_30a59]'], 10)
      + parseInt(services['ccintersaidas[programajaprendiz_60a64]'], 10)
      + parseInt(services['ccintersaidas[programajaprendiz_65a69]'], 10)
      + parseInt(services['ccintersaidas[programajaprendiz_70a74]'], 10)
      + parseInt(services['ccintersaidas[programajaprendiz_75mais]'], 10)),
    createData('Inserção no mercado de trabalho',
      services['ccintersaidas[insertrabalho_6a14]'],
      services['ccintersaidas[insertrabalho_15a17]'],
      services['ccintersaidas[insertrabalho_18a29]'],
      services['ccintersaidas[insertrabalho_30a59]'],
      services['ccintersaidas[insertrabalho_60a64]'],
      services['ccintersaidas[insertrabalho_65a69]'],
      services['ccintersaidas[insertrabalho_70a74]'],
      services['ccintersaidas[insertrabalho_75mais]'],
      parseInt(services['ccintersaidas[insertrabalho_6a14]'], 10)
      + parseInt(services['ccintersaidas[insertrabalho_15a17]'], 10)
      + parseInt(services['ccintersaidas[insertrabalho_18a29]'], 10)
      + parseInt(services['ccintersaidas[insertrabalho_30a59]'], 10)
      + parseInt(services['ccintersaidas[insertrabalho_60a64]'], 10)
      + parseInt(services['ccintersaidas[insertrabalho_65a69]'], 10)
      + parseInt(services['ccintersaidas[insertrabalho_70a74]'], 10)
      + parseInt(services['ccintersaidas[insertrabalho_75mais]'], 10)),
    createData('Aplicação de medida restritiva de liberdade',
      services['ccintersaidas[medrestritiva_6a14]'],
      services['ccintersaidas[medrestritiva_15a17]'],
      services['ccintersaidas[medrestritiva_18a29]'],
      services['ccintersaidas[medrestritiva_30a59]'],
      services['ccintersaidas[medrestritiva_60a64]'],
      services['ccintersaidas[medrestritiva_65a69]'],
      services['ccintersaidas[medrestritiva_70a74]'],
      services['ccintersaidas[medrestritiva_75mais]'],
      parseInt(services['ccintersaidas[medrestritiva_6a14]'], 10)
      + parseInt(services['ccintersaidas[medrestritiva_15a17]'], 10)
      + parseInt(services['ccintersaidas[medrestritiva_18a29]'], 10)
      + parseInt(services['ccintersaidas[medrestritiva_30a59]'], 10)
      + parseInt(services['ccintersaidas[medrestritiva_60a64]'], 10)
      + parseInt(services['ccintersaidas[medrestritiva_65a69]'], 10)
      + parseInt(services['ccintersaidas[medrestritiva_70a74]'], 10)
      + parseInt(services['ccintersaidas[medrestritiva_75mais]'], 10)),

  ];

  const familiasVulnerabilidade = [
    createData('Conflitos', services['ccintvulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Preconceitos/discriminação', services['ccintvulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Abandono', services['ccintvulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Apartação', services['ccintvulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Confinamento', services['ccintvulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Isolamento', services['ccintvulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Violência', services['ccintvulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentoFamilia = [
    createData('Nº de famílias atendidas presencialmente', services['ccintfam[ccafampres]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de famílias acompanhadas de forma remota', services['ccintfam[ccafamrem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atividadesItems = [
    ['Atividades esportivas', services['ccintatividades[atvesporte]']],
    ['Musicalidade (cantar, tocar instrumentos etc.)', services['ccintatividades[atvmusica]']],
    ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', services['ccintatividades[atvcultura]']],
    ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', services['ccintatividades[atvarte]']],
    ['Atividades de inclusão digital', services['ccintatividades[atvincdigital]']],
    ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['ccintatividades[atvlinguagem]']],
    ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['ccintatividades[atvculinaria]']],
    ['Atividades recreativas (jogos, brincadeiras, etc.)', services['ccintatividades[atvrecreacao]']],

  ];

  const temasItems = [
    ['Temas transversais (saúde, meio ambiente, cultura, esporte etc.)', services['ccinttema[tematransversal]']],
    ['Direitos e programas sociais', services['ccinttema[temadireitos]']],
    ['Segurança alimentar e nutricional', services['ccinttema[temanutricao]']],
    ['Igualdade entre homens e mulheres', services['ccinttema[temaigualdade]']],
    ['Orientação sexual e de identidade de gênero', services['ccinttema[temaorientsexual]']],
    ['Relações étnico-raciais', services['ccinttema[temaetnico]']],
    ['Prevenção ao uso de álcool e drogas', services['ccinttema[temaalccoldrogas]']],
    ['Prevenção à violência', services['ccinttema[temaprevencaovio]']],
    ['Parentalidade', services['ccinttema[temaparental]']],
    ['Deficiência e acessibilidade', services['ccinttema[temapcd]']],
    ['Mundo do trabalho', services['ccinttema[tematrabalho]']],
  ];

  const demandaReprimida = [
    createData('6 a 11 anos', services['ccinterlistaespera[6a11_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('12 a 17 anos', services['ccinterlistaespera[12a14_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos', services['ccinterlistaespera[18a29_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos', services['ccinterlistaespera[30a59_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('60 a 64 anos', services['ccinterlistaespera[60a64_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos', services['ccinterlistaespera[65a69_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos', services['ccinterlistaespera[70a74_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('75 anos ou mais', services['ccinterlistaespera[75mais_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['ccinterlistaespera[6a11_quantidade]'], 10)
      + parseInt(services['ccinterlistaespera[12a14_quantidade]'], 10)
      + parseInt(services['ccinterlistaespera[18a29_quantidade]'], 10)
      + parseInt(services['ccinterlistaespera[30a59_quantidade]'], 10)
      + parseInt(services['ccinterlistaespera[60a64_quantidade]'], 10)
      + parseInt(services['ccinterlistaespera[65a69_quantidade]'], 10)
      + parseInt(services['ccinterlistaespera[70a74_quantidade]'], 10)
      + parseInt(services['ccinterlistaespera[75mais_quantidade]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['ccinterencaminha[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['ccinterencaminha[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['ccinterencaminha[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Saúde', services['ccinterencaminha[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Educação', services['ccinterencaminha[educacao]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Conselhos de direito', services['ccinterencaminha[direito]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Trabalho e renda', services['ccinterencaminha[trab]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['ccinterencaminha[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotos = [
    createData('Semana 1', services['ccinteratendremperio[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['ccinteratendremperio[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['ccinteratendremperio[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['ccinteratendremperio[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['ccinteratendremperio[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['ccinteratendremperio[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosTipos = [
    createData('Telefone / Celular / Whatsapp', services['ccintatendremdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Email', services['ccintatendremdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Facebook', services['ccintatendremdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('YouTube', services['ccintatendremdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras redes sociais', services['ccintatendremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Entrega de kits de atividades', services['ccintatendremdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outros', services['ccintatendremdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['ccinterperiodfam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['ccinterperiodfam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['ccinterperiodfam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['ccinterperiodfam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['ccinterperiodfam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['ccinterperiodfam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  return (
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
            label={mes === '0121' ? 'Janeiro 2021' : 'Fevereiro 2021'}
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
          1. Quantidade de pessoas do sexo feminino atendidas no mês, por faixa etária:
        </h2>
        <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesFeminino} />

        <h2>
          2. Quantidade de pessoas do sexo masculino atendidas no mês, por faixa etária:
        </h2>
        <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesMasculino} />

        <h2>
          3. Quantidade de pessoas atendidas por sexo e raça/cor no mês de referência:
        </h2>
        <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

        <br />
        <h2>
          4. Quantidade de usuários por motivo de saída do serviço no mês:
        </h2>
        <TableTenColumns headers={motivosSaidaHeaders} body={motivosSaida} />
        <br />
        <Typography variant="h5" gutterBottom>
          5. Quantidade de crianças e adolescentes em situação de
          trabalho infantil encaminhadas pelo(s) CRAS / CREAS no mês é de
          {' '}
          {services.ccinterpeti}
          {' '}
          pessoa(s)
        </Typography>
        <br />
        <br />
        <Typography variant="h5" gutterBottom>
          6. Quantidade de pessoas com deficiência atendidas no mês é de
          {' '}
          {services.ccinterpcd}
          {' '}
          pessoa(s)
        </Typography>
        <br />
        <h2>
          7. Quantidade de idosos que moram sozinhos atendidos no mês:
        </h2>
        <TableTwoColumns headers={idososMoramSozinhoHeaders} body={idososMoramSozinho} />

        <h2>
          8. Atendimento às famílias no mês:
        </h2>
        <TableTwoColumns headers={atendimentoFamiliaHeaders} body={atendimentoFamilia} />
        <br />
        <Typography variant="h5" gutterBottom>
          9. Quantidade de visitas domicilares realizadas no mês é
          {' '}
          {services.ccintvisdom}
          {' '}
          pessoa(s)
        </Typography>
        <br />
        <h2>
          10. O número de famílias ou pessoas que buscaram atendimento presencial
          no mês de referência devido a alguma vulnerabilidade relacional:
        </h2>
        <TableTwoColumns headers={familiasVulnerabilidadeHeaders} body={familiasVulnerabilidade} />
        <br />
        <Typography variant="h5" gutterBottom>
          11. Quantidade de atividades intergeracionais realizadas no mês é
          {' '}
          {services.ccintintergeracional}
          {' '}
          pessoa(s)
        </Typography>
        <br />

        <h2>
          12. As atividades realizadas com pessoas atendidas pelo serviço no mês
        </h2>
        <ListComponent items={atividadesItems} />
        <br />

        <h2>
          13. Os temas discutidos com pessoas atendidas pelo serviço no mês:
        </h2>
        <ListComponent items={temasItems} />
        <br />

        <h2>
          14. Quantidade de pessoas incluídas em lista de
          espera (demanda reprimida) no mês, por faixa etária:
        </h2>

        <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />

        <h2>
          15. Quantidade de encaminhamentos realizados pelo serviço no mês:
        </h2>
        <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />
        <br />
        <h2>
          16. Quantidade de atendimentos remotos de usuários por semana no mês:
        </h2>
        <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />
        <br />
        <h2>
          17. Quantidade de atividades remotas realizadas no mês,
          pelos meios em que foram disponibilizadas:
        </h2>
        <TableTwoColumns
          headers={atendimentosRemotosTiposHeaders}
          body={atendimentosRemotosTipos}
        />
        <br />
        <h2>
          18. Quantidade de atendimentos remotos de familiares por semana no mês:
        </h2>
        <TableTwoColumns
          headers={atendimentosRemotosFamiliaSemanaHeaders}
          body={atendimentosRemotosFamiliaSemana}
        />
        <br />
      </Section>
    </>
  );
};

export default ResponseCRECI;
