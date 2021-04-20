
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
    createData('15 a 17 anos (F)',
      services['cedesfluxomulheresat[15a17f_atendmesatual]'],
      services['cedesfluxomulheresat[15a17f_presmesatual]'],
      services['cedesfluxomulheresat[15a17f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos (F)',
      services['cedesfluxomulheresat[18a29f_atendmesatual]'],
      services['cedesfluxomulheresat[18a29f_presmesatual]'],
      services['cedesfluxomulheresat[18a29f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos (F)',
      services['cedesfluxomulheresat[30a59f_atendmesatual]'],
      services['cedesfluxomulheresat[30a59f_presmesatual]'],
      services['cedesfluxomulheresat[30a59f_remmesatual]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['cedesfluxomulheresat[15a17f_atendmesatual]'], 10)
      + parseInt(services['cedesfluxomulheresat[18a29f_atendmesatual]'], 10)
      + parseInt(services['cedesfluxomulheresat[30a59f_atendmesatual]'], 10),
      parseInt(services['cedesfluxomulheresat[15a17f_presmesatual]'], 10)
      + parseInt(services['cedesfluxomulheresat[18a29f_presmesatual]'], 10)
      + parseInt(services['cedesfluxomulheresat[30a59f_presmesatual]'], 10),
      parseInt(services['cedesfluxomulheresat[15a17f_remmesatual]'], 10)
      + parseInt(services['cedesfluxomulheresat[18a29f_remmesatual]'], 10)
      + parseInt(services['cedesfluxomulheresat[30a59f_remmesatual]'], 10),
      1, 1, 1, 1, 1, 1),
  ];

  const atendidosMesMasculino = [
    createData('15 a 17 anos (F)',
      services['cedesfluxohomensaten[15a17m_atendmesatual]'],
      services['cedesfluxohomensaten[15a17m_presmesatual]'],
      services['cedesfluxohomensaten[15a17m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos (F)',
      services['cedesfluxohomensaten[18a29m_atendmesatual]'],
      services['cedesfluxohomensaten[18a29m_presmesatual]'],
      services['cedesfluxohomensaten[18a29m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos (F)',
      services['cedesfluxohomensaten[30a59m_atendmesatual]'],
      services['cedesfluxohomensaten[30a59m_presmesatual]'],
      services['cedesfluxohomensaten[30a59m_remmesatual]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['cedesfluxohomensaten[15a17m_atendmesatual]'], 10)
      + parseInt(services['cedesfluxohomensaten[18a29m_atendmesatual]'], 10)
      + parseInt(services['cedesfluxohomensaten[30a59m_atendmesatual]'], 10),
      parseInt(services['cedesfluxohomensaten[15a17m_presmesatual]'], 10)
      + parseInt(services['cedesfluxohomensaten[18a29m_presmesatual]'], 10)
      + parseInt(services['cedesfluxohomensaten[30a59m_presmesatual]'], 10),
      parseInt(services['cedesfluxohomensaten[15a17m_remmesatual]'], 10)
      + parseInt(services['cedesfluxohomensaten[18a29m_remmesatual]'], 10)
      + parseInt(services['cedesfluxohomensaten[30a59m_remmesatual]'], 10),
      1, 1, 1, 1, 1, 1),

  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['bagracasexo[fem_branca]'],
      services['bagracasexo[fem_preta]'],
      services['bagracasexo[fem_parda]'],
      services['bagracasexo[fem_amarela]'],
      services['bagracasexo[fem_indigena]'],
      services['bagracasexo[fem_naoinf]'],
      parseInt(services['bagracasexo[fem_branca]'], 10)
      + parseInt(services['bagracasexo[fem_preta]'], 10)
      + parseInt(services['bagracasexo[fem_parda]'], 10)
      + parseInt(services['bagracasexo[fem_amarela]'], 10)
      + parseInt(services['bagracasexo[fem_indigena]'], 10)
      + parseInt(services['bagracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['bagracasexo[mas_branca]'],
      services['bagracasexo[mas_preta]'],
      services['bagracasexo[mas_parda]'],
      services['bagracasexo[mas_amarela]'],
      services['bagracasexo[mas_indigena]'],
      services['bagracasexo[mas_naoinf]'],
      parseInt(services['bagracasexo[mas_branca]'], 10)
      + parseInt(services['bagracasexo[mas_preta]'], 10)
      + parseInt(services['bagracasexo[mas_parda]'], 10)
      + parseInt(services['bagracasexo[mas_amarela]'], 10)
      + parseInt(services['bagracasexo[mas_indigena]'], 10)
      + parseInt(services['bagracasexo[mas_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['bagracasexo[mas_branca]'], 10)
      + parseInt(services['bagracasexo[fem_branca]'], 10),
      parseInt(services['bagracasexo[mas_preta]'], 10)
      + parseInt(services['bagracasexo[fem_preta]'], 10),
      parseInt(services['bagracasexo[mas_parda]'], 10)
      + parseInt(services['bagracasexo[fem_parda]'], 10),
      parseInt(services['bagracasexo[mas_amarela]'], 10)
      + parseInt(services['bagracasexo[fem_amarela]'], 10),
      parseInt(services['bagracasexo[mas_indigena]'], 10)
      + parseInt(services['bagracasexo[fem_indigena]'], 10),
      parseInt(services['bagracasexo[mas_naoinf]'], 10)
      + parseInt(services['bagracasexo[fem_naoinf]'], 10),
      parseInt(services['bagracasexo[mas_branca]'], 10)
      + parseInt(services['bagracasexo[fem_branca]'], 10)
      + parseInt(services['bagracasexo[mas_preta]'], 10)
      + parseInt(services['bagracasexo[fem_preta]'], 10)
      + parseInt(services['bagracasexo[mas_parda]'], 10)
      + parseInt(services['bagracasexo[fem_parda]'], 10)
      + parseInt(services['bagracasexo[mas_amarela]'], 10)
      + parseInt(services['bagracasexo[fem_amarela]'], 10)
      + parseInt(services['bagracasexo[mas_indigena]'], 10)
      + parseInt(services['bagracasexo[fem_indigena]'], 10)
      + parseInt(services['bagracasexo[mas_naoinf]'], 10)
      + parseInt(services['bagracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const motivosSaida = [
    createData('Mudança de endereço',
      services['cedessaida[mudancaendereco_15a17]'],
      services['cedessaida[mudancaendereco_18a29]'],
      services['cedessaida[mudancaendereco_30a59]'],
      parseInt(services['cedessaida[mudancaendereco_15a17]'], 10)
      + parseInt(services['cedessaida[mudancaendereco_18a29]'], 10)
      + parseInt(services['cedessaida[mudancaendereco_30a59]'], 10), 1, 1, 1, 1, 1),
    createData('Transferência para outro serviço',
      services['cedessaida[transferencia_15a17]'],
      services['cedessaida[transferencia_18a29]'],
      services['cedessaida[transferencia_30a59]'],
      parseInt(services['cedessaida[transferencia_15a17]'], 10)
      + parseInt(services['cedessaida[transferencia_18a29]'], 10)
      + parseInt(services['cedessaida[transferencia_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Abandono',
      services['cedessaida[aband_15a17]'],
      services['cedessaida[aband_18a29]'],
      services['cedessaida[aband_30a59]'],
      parseInt(services['cedessaida[aband_15a17]'], 10)
      + parseInt(services['cedessaida[aband_18a29]'], 10)
      + parseInt(services['cedessaida[aband_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Óbito',
      services['cedessaida[obito_15a17]'],
      services['cedessaida[obito_18a29]'],
      services['cedessaida[obito_30a59]'],
      parseInt(services['cedessaida[obito_15a17]'], 10)
      + parseInt(services['cedessaida[obito_18a29]'], 10)
      + parseInt(services['cedessaida[obito_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Inserção no Programa Jovem Aprendiz',
      services['cedessaida[programajaprendiz_15a17]'],
      services['cedessaida[programajaprendiz_18a29]'],
      services['cedessaida[programajaprendiz_30a59]'],
      parseInt(services['cedessaida[programajaprendiz_15a17]'], 10)
      + parseInt(services['cedessaida[programajaprendiz_18a29]'], 10)
      + parseInt(services['cedessaida[programajaprendiz_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Inserção no mercado de trabalho',
      services['cedessaida[insertrabalho_15a17]'],
      services['cedessaida[insertrabalho_18a29]'],
      services['cedessaida[insertrabalho_30a59]'],
      parseInt(services['cedessaida[insertrabalho_15a17]'], 10)
      + parseInt(services['cedessaida[insertrabalho_18a29]'], 10)
      + parseInt(services['cedessaida[insertrabalho_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Conclusão de curso',
      services['cedessaida[conclusaocurso_15a17]'],
      services['cedessaida[conclusaocurso_18a29]'],
      services['cedessaida[conclusaocurso_30a59]'],
      parseInt(services['cedessaida[conclusaocurso_15a17]'], 10)
      + parseInt(services['cedessaida[conclusaocurso_18a29]'], 10)
      + parseInt(services['cedessaida[conclusaocurso_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Aplicação de medida restritiva de liberdade',
      services['cedessaida[medrestritiva_15a17]'],
      services['cedessaida[medrestritiva_18a29]'],
      services['cedessaida[medrestritiva_30a59]'],
      parseInt(services['cedessaida[medrestritiva_15a17]'], 10)
      + parseInt(services['cedessaida[medrestritiva_18a29]'], 10)
      + parseInt(services['cedessaida[medrestritiva_30a59]'], 10),
      1,
      1,
      1,
      1, 1),

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
    createData('CRAS', services['bagencaminhamento[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['bagencaminhamento[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CENTRO POP', services['bagencaminhamento[cpop]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['bagencaminhamento[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['bagencaminhamento[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
              1. Número de pessoas que utilizaram o serviço no mês:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Visita(s)', services.bagatendmes, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              2. Quantidade de pessoas atendidas por sexo e raça/cor no mês de referência.
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <h2>
              3. Número de boxes utilizados no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Boxe(s)', services.bagbox, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              4. Nº de pessoas que utilizaram o
              serviço Bagageiro e estão vinculadas a um Centro de Acolhida no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoas(s)', services.bagvinca, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              5. Nº de pessoas que receberam atendimento social no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.bagatendsocial, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              6. Nº de pessoas com deficiência atendidas pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.bagpcd, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              7. Encaminhamentos realizados pelo serviço no mês de referência
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />
          </Section>
        </>
      )

  );
};

export default Response;
