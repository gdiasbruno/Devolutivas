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
import TableFiveColumns from '../../components/TableFiveColumns';
import ListComponent from '../../components/ListComponent';

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
    nomeSAS, mes, serviceName, token,
  } = context;
  const history = useHistory();
  // eslint-disable-next-line new-cap

  const fetchUserProfiles = () => {
    axios.get(`http://localhost:8080/devolutivas/${nomeSAS}/${mes}/12112316`).then((res) => {
      const index = Object.keys(res.data.responses[0])[0];
      setServices(res.data.responses[0][index]);
      console.log(res.data);
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

  const idososMoramSozinho = [
    createData('Quantidade de idosos que moram sozinhos',
      services['crecisozinho[idososo]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Desses idosos, informe a quantidade de idosos que precisam de ajuda',
      services['crecisozinho[idososo]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];

  const idososFamilias = [
    createData('Nº de famílias de idosos atendidas presencialmente no mês de referência ',
      services['crecisozinho[idososo]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Nº de famílias de idosos acompanhadas de forma remota no mês de referência',
      services['crecisozinho[idososo]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Nº total de famílias de idosos atendidas no mês de referência',
      services['crecisozinho[idososo]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];

  const familiasInsumos = [
    createData('Cesta de alimentos', services['circoinsumo[cestasaliment_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Kit de material de higiene', services['circoinsumo[kithiginene_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const infoIdosos = [
    createData('Nº de idosos do serviço em domicílio que recebem BPC', services['circoinsumo[cestasaliment_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de idosos do serviço de convivência que recebem BPC', services['circoinsumo[kithiginene_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de idosos do serviço em domicílio com PDU em andamento', services['circoinsumo[kithiginene_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de visitas domiciliares realizadas no mês para o público da convivência', services['circoinsumo[kithiginene_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de visitas domiciliares realizadas no mês para o público do serviço em domicílio', services['circoinsumo[kithiginene_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const familiasVulnerabilidade = [
    createData('Conflitos', services['circovulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Preconceitos/discriminação', services['circovulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Abandono', services['circovulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Apartação', services['circovulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Confinamento', services['circovulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Isolamento', services['circovulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Violência', services['circovulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentoFamilia = [
    createData('Nº de famílias atendidas presencialmente', services['circofamatend[ccafampres]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de famílias acompanhadas de forma remota', services['circofamatend[ccafamrem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atividadesItems = [
    ['Atividades esportivas', services['circosocialatividade[atvesporte]']],
    ['Musicalidade (cantar, tocar instrumentos etc.)', services['circosocialatividade[atvmusica]']],
    ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', services['circosocialatividade[atvcultura]']],
    ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', services['circosocialatividade[atvarte]']],
    ['Atividades de inclusão digital', services['circosocialatividade[atvincdigital]']],
    ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['circosocialatividade[atvlinguagem]']],
    ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['circosocialatividade[atvculinaria]']],
    ['Atividades recreativas (jogos, brincadeiras, etc.)', services['circosocialatividade[atvrecreacao]']],

  ];

  const temasItems = [
    ['Temas transversais (saúde, meio ambiente, cultura, esporte etc.)', services['circosocialtema[tematransversal]']],
    ['Direitos e programas sociais', services['circosocialtema[temadireitos]']],
    ['Segurança alimentar e nutricional', services['circosocialtema[temanutricao]']],
    ['Igualdade entre homens e mulheres', services['circosocialtema[temaigualdade]']],
    ['Orientação sexual e de identidade de gênero', services['circosocialtema[temaorientsexual]']],
    ['Relações étnico-raciais', services['circosocialtema[temaetnico]']],
    ['Prevenção ao uso de álcool e drogas', services['circosocialtema[temaalccoldrogas]']],
    ['Prevenção à violência', services['circosocialtema[temaprevencaovio]']],
    ['Parentalidade', services['circosocialtema[temaparental]']],
    ['Deficiência e acessibilidade', services['circosocialtema[temapcd]']],
  ];
  const demandaReprimida = [
    createData('6 a 11 anos', services['circolistaespera[6a11_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos', services['circolistaespera[12a14_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('15 a 17 anos', services['circolistaespera[15a17_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['circolistaespera[6a11_quantidade]'], 10)
      + parseInt(services['circolistaespera[12a14_quantidade]'], 10)
      + parseInt(services['circolistaespera[15a17_quantidade]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['circoencaminha[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['circoencaminha[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['circoencaminha[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Saúde', services['circoencaminha[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Educação', services['circoencaminha[educacao]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Conselhos de direito', services['circoencaminha[direito]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['circoencaminha[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotos = [
    createData('Semana 1', services['circoatendremperi[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['circoatendremperi[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['circoatendremperi[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['circoatendremperi[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['circoatendremperi[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['circoatendremperi[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosTipos = [
    createData('Telefone / Celular / Whatsapp', services['circoremadisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Email', services['circoremadisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Facebook', services['circoremadisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('YouTube', services['circoremadisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras redes sociais', services['circoremadisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Entrega de kits de atividades', services['circoremadisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outros', services['circoremadisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['circofamatendperio[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['circofamatendperio[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['circofamatendperio[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['circofamatendperio[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['circofamatendperio[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['circofamatendperio[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
          Informações sobre o serviço de convivência
        </h2>
        <br />
        <br />
        <h2>
          1. Quantidade de pessoas atendidas do serviço de convivência no mês de referência:
        </h2>
        <TableFourColumns headers={atendidosMesHeaders} body={atendidosMes} />

        <h2>
          2. Quantidade de pessoas atendidas por sexo e raça/cor no mês de referência:
        </h2>
        <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

        <br />
        <h2>
          3. Quantidade de usuários por motivo de saída do serviço no mês:
        </h2>
        <TableTwoColumns headers={motivosSaidaHeaders} body={motivosSaida} />
        <br />
        <h2>
          4. N° de idosos atendidos no serviço de convivência que moram sozinhos
          e caso morem sozinhos, quantos contam com alguém se precisarem de ajuda:
        </h2>
        <TableTwoColumns headers={idososMoramSozinhoHeaders} body={idososMoramSozinho} />

        <br />
        <h2>
          5. Os valores das seguites questões sobre atendimento
          às familías dos idosos do serviço de convivência no mês de referência::
        </h2>
        <TableTwoColumns headers={idososFamiliasHeaders} body={idososFamilias} />
        <h2>
          6. O número de famílias ou pessoas que buscaram atendimento presencial
          no mês de referência devido a alguma vulnerabilidade relacional:
        </h2>
        <TableTwoColumns headers={familiasVulnerabilidadeHeaders} body={familiasVulnerabilidade} />
        <br />

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
        <br />
        <h2>
          9. Quantidade de atendimentos remotos de usuários
          do serviço de convivência por semana no mês:
        </h2>
        <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />
        <br />
        <h2>
          10. Quantidade de atividades remotas realizadas pelo serviço de
          convivência no mês, pelos meios em que foram disponibilizadas:
        </h2>
        <TableTwoColumns
          headers={atendimentosRemotosTiposHeaders}
          body={atendimentosRemotosTipos}
        />
        <br />
        <h2>
          11. Quantidade de atendimentos remotos de familiares
          no serviço de convivência por semana no mês:
        </h2>
        <TableTwoColumns
          headers={atendimentosRemotosFamiliaSemanaHeaders}
          body={atendimentosRemotosFamiliaSemana}
        />
        <br />
        <h2>
          Informações sobre o acompanhamento social em domicílio
        </h2>
        <br />
        <br />
        <h2>
          1. Quantidade de pessoas atendidas do serviço em domicílio no mês de referência:
        </h2>
        <TableFourColumns headers={atendidosMesHeaders} body={atendidosMes} />

        <h2>
          2. Quantidade de pessoas atendidas por sexo e raça/cor
          no serviço em domicílio no mês de referência:
        </h2>
        <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

        <br />
        <h2>
          3. Nº de pessoas por motivo de saída do serviço em domicílio  no mês de referência:
        </h2>
        <TableTwoColumns headers={motivosSaidaHeaders} body={motivosSaida} />
        <br />
        <h2>
          4.N° de idosos atendidos no serviço em domicílio que moram sozinhos e
          caso morem sozinhos, quantos contam com alguém se precisarem de ajuda:
        </h2>
        <TableTwoColumns headers={idososMoramSozinhoHeaders} body={idososMoramSozinho} />

        <br />
        <h2>
          5. Os valores das seguintes questões sobre atendimento
          às famílias dos idosos do serviço em domicílio no mês de referência:
        </h2>
        <TableTwoColumns headers={idososFamiliasHeaders} body={idososFamilias} />
        <h2>
          6. O número de famílias ou pessoas que buscaram atendimento
          presencial do serviço em domicílio no mês de referência devido
          a alguma vulnerabilidade relacional:
        </h2>
        <TableTwoColumns headers={familiasVulnerabilidadeHeaders} body={familiasVulnerabilidade} />
        <br />

        <h2>
          7. Quantidade de atendimentos remotos de usuários
          do serviço em domicílio por semana no mês:
        </h2>

        <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />
        <br />
        <h2>
          8. Quantidade de atividades remotas realizadas pelo
          serviço em em domicílio no mês, pelos meios em que foram disponibilizadas:
        </h2>
        <TableTwoColumns
          headers={atendimentosRemotosTiposHeaders}
          body={atendimentosRemotosTipos}
        />
        <br />
        <h2>
          11. Quantidade de atendimentos remotos de
          familiares do serviço em domicílio por semana no mês:
        </h2>
        <TableTwoColumns
          headers={atendimentosRemotosFamiliaSemanaHeaders}
          body={atendimentosRemotosFamiliaSemana}
        />
        <br />

        <h2>
          Informações sobre o serviço de convivência e sobre o acompanhamento social em domicílio
        </h2>

        <br />
        <br />
        <Typography variant="h5" gutterBottom>
          1. Quantidade de pessoas com deficiência atendidas no mês é de
          {' '}
          {services.circousuariospcd}
          {' '}
          pessoa(s)
        </Typography>
        <br />
        <h2>
          2. Quantidade de pessoas incluídas em lista de
          espera (demanda reprimida) no mês, por faixa etária:
        </h2>
        <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />
        <h2>
          3. Quantidade de encaminhamentos realizados pelo serviço no mês:
        </h2>
        <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />
        <br />
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
  );
};

export default Response;
