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

  const atendidosMes = [
    createData('60 a 64 anos (M)',
      services['ncifluxoconvivencia[60a64m_atendmesatual]'],
      services['ncifluxoconvivencia[60a64m_presmesatual]'],
      services['ncifluxoconvivencia[60a64m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('60 a 64 anos (F)',
      services['ncifluxoconvivencia[60a64f_atendmesatual]'],
      services['ncifluxoconvivencia[60a64f_presmesatual]'],
      services['ncifluxoconvivencia[60a64f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos (M)',
      services['ncifluxoconvivencia[65a69m_atendmesatual]'],
      services['ncifluxoconvivencia[65a69m_presmesatual]'],
      services['ncifluxoconvivencia[65a69m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos (F)',
      services['ncifluxoconvivencia[65a69f_atendmesatual]'],
      services['ncifluxoconvivencia[65a69f_presmesatual]'],
      services['ncifluxoconvivencia[65a69f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos (M)',
      services['ncifluxoconvivencia[70a74m_atendmesatual]'],
      services['ncifluxoconvivencia[70a74m_presmesatual]'],
      services['ncifluxoconvivencia[70a74m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos (F)',
      services['ncifluxoconvivencia[70a74f_atendmesatual]'],
      services['ncifluxoconvivencia[70a74f_presmesatual]'],
      services['ncifluxoconvivencia[70a74f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('75 anos mais (M)',
      services['ncifluxoconvivencia[75maism_atendmesatual]'],
      services['ncifluxoconvivencia[75maism_presmesatual]'],
      services['ncifluxoconvivencia[75maism_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('75 anos mais (F)',
      services['ncifluxoconvivencia[75maisf_atendmesatual]'],
      services['ncifluxoconvivencia[75maisf_presmesatual]'],
      services['ncifluxoconvivencia[75maisf_remmesatual]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['ncifluxoconvivencia[60a64m_atendmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[60a64f_atendmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[65a69m_atendmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[65a69f_atendmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[70a74m_atendmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[70a74f_atendmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[75maism_atendmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[75maisf_atendmesatual]'], 10),
      parseInt(services['ncifluxoconvivencia[60a64m_presmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[60a64f_presmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[65a69m_presmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[65a69f_presmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[70a74m_presmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[70a74f_presmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[75maism_presmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[75maisf_presmesatual]'], 10),
      parseInt(services['ncifluxoconvivencia[60a64m_remmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[60a64f_remmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[65a69m_remmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[65a69f_remmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[70a74m_remmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[70a74f_remmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[75maism_remmesatual]'], 10)
      + parseInt(services['ncifluxoconvivencia[75maisf_remmesatual]'], 10),
      1, 1, 1, 1, 1, 1),
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

  const sexoRacaCor = [
    createData('Feminino',
      services['nciconvracasexo[fem_branc]'],
      services['nciconvracasexo[fem_preto]'],
      services['nciconvracasexo[fem_pardo]'],
      services['nciconvracasexo[fem_amarelo]'],
      services['nciconvracasexo[fem_indigena]'],
      services['nciconvracasexo[fem_naoinf]'],
      parseInt(services['nciconvracasexo[fem_branc]'], 10)
      + parseInt(services['nciconvracasexo[fem_preto]'], 10)
      + parseInt(services['nciconvracasexo[fem_pardo]'], 10)
      + parseInt(services['nciconvracasexo[fem_amarelo]'], 10)
      + parseInt(services['nciconvracasexo[fem_indigena]'], 10)
      + parseInt(services['nciconvracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['nciconvracasexo[masc_branc]'],
      services['nciconvracasexo[masc_preto]'],
      services['nciconvracasexo[masc_pardo]'],
      services['nciconvracasexo[masc_amarelo]'],
      services['nciconvracasexo[masc_indigena]'],
      services['nciconvracasexo[masc_naoinf]'],
      parseInt(services['nciconvracasexo[masc_branc]'], 10)
      + parseInt(services['nciconvracasexo[masc_preto]'], 10)
      + parseInt(services['nciconvracasexo[masc_pardo]'], 10)
      + parseInt(services['nciconvracasexo[masc_amarelo]'], 10)
      + parseInt(services['nciconvracasexo[masc_indigena]'], 10)
      + parseInt(services['nciconvracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['nciconvracasexo[masc_branc]'], 10)
      + parseInt(services['nciconvracasexo[fem_branc]'], 10),
      parseInt(services['nciconvracasexo[masc_preto]'], 10)
      + parseInt(services['nciconvracasexo[fem_preto]'], 10),
      parseInt(services['nciconvracasexo[masc_pardo]'], 10)
      + parseInt(services['nciconvracasexo[fem_pardo]'], 10),
      parseInt(services['nciconvracasexo[masc_amarelo]'], 10)
      + parseInt(services['nciconvracasexo[fem_amarelo]'], 10),
      parseInt(services['nciconvracasexo[masc_indigena]'], 10)
      + parseInt(services['nciconvracasexo[fem_indigena]'], 10),
      parseInt(services['nciconvracasexo[masc_naoinf]'], 10)
      + parseInt(services['nciconvracasexo[fem_naoinf]'], 10),
      parseInt(services['nciconvracasexo[masc_branc]'], 10)
      + parseInt(services['nciconvracasexo[fem_branc]'], 10)
      + parseInt(services['nciconvracasexo[masc_preto]'], 10)
      + parseInt(services['nciconvracasexo[fem_preto]'], 10)
      + parseInt(services['nciconvracasexo[masc_pardo]'], 10)
      + parseInt(services['nciconvracasexo[fem_pardo]'], 10)
      + parseInt(services['nciconvracasexo[masc_amarelo]'], 10)
      + parseInt(services['nciconvracasexo[fem_amarelo]'], 10)
      + parseInt(services['nciconvracasexo[masc_indigena]'], 10)
      + parseInt(services['nciconvracasexo[fem_indigena]'], 10)
      + parseInt(services['nciconvracasexo[masc_naoinf]'], 10)
      + parseInt(services['nciconvracasexo[fem_naoinf]'], 10), 1, 1),
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
    createData('Oferta do Serviço em Domicílio',
      services['ncisaidaconvivencia[ofertadom_quantidade]'],
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
    createData('60 a 64 anos', services['ncilistaespera[60a64_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos', services['ncilistaespera[65a69_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos', services['ncilistaespera[70a74_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('75 anos ou mais', services['ncilistaespera[75mais_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['ncilistaespera[60a64_qtdade]'], 10)
      + parseInt(services['ncilistaespera[65a69_qtdade]'], 10)
      + parseInt(services['ncilistaespera[70a74_qtdade]'], 10)
      + parseInt(services['ncilistaespera[75mais_qtdade]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['nciencaminhamento[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['nciencaminhamento[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['nciencaminhamento[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Saúde', services['nciencaminhamento[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Habitação', services['nciencaminhamento[hab]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Previdêncial Social', services['nciencaminhamento[prev]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Conselhos de direito', services['nciencaminhamento[direito]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['nciencaminhamento[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotos = [
    createData('Semana 1', services['nciconvivatendrempes[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['nciconvivatendrempes[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['nciconvivatendrempes[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['nciconvivatendrempes[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['nciconvivatendrempes[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['nciconvivatendrempes[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
    createData('Outros', services['nciconvivenciremdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosTiposDomicilio = [
    createData('Telefone / Celular / Whatsapp', services['ncidomremdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Email', services['ncidomremdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Facebook', services['ncidomremdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('YouTube', services['ncidomremdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras redes sociais', services['ncidomremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Entrega de kits de atividades', services['ncidomremdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outros', services['ncidomremdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['nciconvivatendremfam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['nciconvivatendremfam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['nciconvivatendremfam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['nciconvivatendremfam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['nciconvivatendremfam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['nciconvivatendremfam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
            <h1>
              Informações sobre o serviço de convivência
            </h1>
            <br />

            <h2>
              1. Quantidade de pessoas atendidas do serviço de convivência no mês de referência:
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMes} />

            <h2>
              2. Quantidade de pessoas atendidas por sexo e raça/cor no mês de referência:
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <h2>
              3. Quantidade de usuários por motivo de saída do serviço no mês:
            </h2>
            <TableTwoColumns headers={motivosSaidaHeaders} body={motivosSaida} />

            <h2>
              4. N° de idosos atendidos no serviço de convivência que moram sozinhos
              e caso morem sozinhos, quantos contam com alguém se precisarem de ajuda:
            </h2>
            <TableTwoColumns headers={idososMoramSozinhoHeaders} body={idososMoramSozinho} />

            <h2>
              5. Os valores das seguites questões sobre atendimento
              às familías dos idosos do serviço de convivência no mês de referência::
            </h2>
            <TableTwoColumns headers={idososFamiliasHeaders} body={idososFamilias} />
            <h2>
              6. O número de famílias ou pessoas que buscaram atendimento presencial
              no mês de referência devido a alguma vulnerabilidade relacional:
            </h2>
            <TableTwoColumns
              headers={familiasVulnerabilidadeHeaders}
              body={familiasVulnerabilidade}
            />

            <h2>
              7. As atividades realizadas com as pessoas atendidas pelo
              serviço na modalidade convivência no mês de referência:
            </h2>

            <ListComponent items={atividadesItems} />

            <h2>
              8. Os temas discutidos com as pessoas atendidas
              pelo serviço na modalidade convivência no mês de referência:
            </h2>
            <ListComponent items={temasItems} />

            <h2>
              9. Quantidade de atendimentos remotos de usuários
              do serviço de convivência por semana no mês:
            </h2>
            <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

            <h2>
              10. Quantidade de atividades remotas realizadas pelo serviço de
              convivência no mês, pelos meios em que foram disponibilizadas:
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTipos}
            />

            <h2>
              11. Quantidade de atendimentos remotos de familiares
              no serviço de convivência por semana no mês:
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosFamiliaSemanaHeaders}
              body={atendimentosRemotosFamiliaSemana}
            />

            <h1>
              Informações sobre o acompanhamento social em domicílio
            </h1>
            <br />
            <h2>
              1. Quantidade de pessoas atendidas do serviço em domicílio no mês de referência:
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesDomicilio} />

            <h2>
              2. Quantidade de pessoas atendidas por sexo e raça/cor
              no serviço em domicílio no mês de referência:
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCorDomicilio} />

            <h2>
              3. Nº de pessoas por motivo de saída do serviço em domicílio  no mês de referência:
            </h2>
            <TableTwoColumns headers={motivosSaidaHeaders} body={motivosSaidaDomicilio} />

            <h2>
              4.N° de idosos atendidos no serviço em domicílio que moram sozinhos e
              caso morem sozinhos, quantos contam com alguém se precisarem de ajuda:
            </h2>
            <TableTwoColumns
              headers={idososMoramSozinhoHeaders}
              body={idososMoramSozinhoDomicilio}
            />

            <h2>
              5. Os valores das seguintes questões sobre atendimento
              às famílias dos idosos do serviço em domicílio no mês de referência:
            </h2>
            <TableTwoColumns headers={idososFamiliasHeaders} body={idososFamiliasDomicilio} />
            <h2>
              6. O número de famílias ou pessoas que buscaram atendimento
              presencial do serviço em domicílio no mês de referência devido
              a alguma vulnerabilidade relacional:
            </h2>
            <TableTwoColumns
              headers={familiasVulnerabilidadeHeaders}
              body={familiasVulnerabilidadeDomicilio}
            />

            <h2>
              7. Quantidade de atendimentos remotos de usuários
              do serviço em domicílio por semana no mês:
            </h2>

            <TableTwoColumns
              headers={atendimentosRemotosHeaders}
              body={atendimentosRemotosDomicilio}
            />

            <h2>
              8. Quantidade de atividades remotas realizadas pelo
              serviço em em domicílio no mês, pelos meios em que foram disponibilizadas:
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTiposDomicilio}
            />

            <h2>
              11. Quantidade de atendimentos remotos de
              familiares do serviço em domicílio por semana no mês:
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosFamiliaSemanaHeaders}
              body={atendimentosRemotosFamiliaSemanaDomicilio}
            />

            <h1>
              Informações sobre o serviço de convivência
              e sobre o acompanhamento social em domicílio
            </h1>
            <br />
            <h2>
              1. Quantidade de pessoas com deficiência atendidas no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.nciusuariospcd, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              2. Quantidade de pessoas incluídas em lista de
              espera (demanda reprimida) no mês, por faixa etária:
            </h2>
            <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />
            <h2>
              3. Quantidade de encaminhamentos realizados pelo serviço no mês:
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              4. Quantifique as informações abaixo com os dados do mês de referência
            </h2>
            <TableTwoColumns headers={infoIdososHeaders} body={infoIdosos} />
            <h2>
              5. Nº de idosos que receberam insumos no mês de referência:
            </h2>
            <TableTwoColumns headers={familiasInsumosHeaders} body={familiasInsumos} />

          </Section>
        </>
      )

  );
};

export default Response;
