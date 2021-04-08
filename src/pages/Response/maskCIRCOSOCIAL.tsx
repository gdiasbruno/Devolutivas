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
  '6 a 11 anos',
  '12 a 17 anos',
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
  // eslint-disable-next-line new-cap

  const fetchUserProfiles = () => {
    axios.get(`http://localhost:8080/devolutivas/${nomeSAS}/${mes}/12112313`).then((res) => {
      const index = Object.keys(res.data.responses[0])[0];
      setServices(res.data.responses[0][index]);
      console.log(res.data);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  const atendidosMes = [
    createData('6 a 11 anos (M)',
      services['circofluxoatend[6a11m_atendmesatual]'],
      services['circofluxoatend[6a11m_presmesatual]'],
      services['circofluxoatend[6a11m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('6 a 11 anos (F)',
      services['circofluxoatend[6a11f_atendmesatual]'],
      services['circofluxoatend[6a11f_presmesatual]'],
      services['circofluxoatend[6a11f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos (M)',
      services['circofluxoatend[12a14m_atendmesatual]'],
      services['circofluxoatend[12a14m_presmesatual]'],
      services['circofluxoatend[12a14m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos (F)',
      services['circofluxoatend[12a14f_atendmesatual]'],
      services['circofluxoatend[12a14f_presmesatual]'],
      services['circofluxoatend[12a14f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('15 a 17 anos (M)',
      services['circofluxoatend[15a17m_atendmesatual]'],
      services['circofluxoatend[15a17m_presmesatual]'],
      services['circofluxoatend[15a17m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('15 a 17 anos (F)',
      services['circofluxoatend[15a17f_atendmesatual]'],
      services['circofluxoatend[15a17f_presmesatual]'],
      services['circofluxoatend[15a17f_remmesatual]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['circofluxoatend[6a11m_atendmesatual]'], 10)
      + parseInt(services['circofluxoatend[6a11f_atendmesatual]'], 10)
      + parseInt(services['circofluxoatend[12a14m_atendmesatual]'], 10)
      + parseInt(services['circofluxoatend[12a14f_atendmesatual]'], 10)
      + parseInt(services['circofluxoatend[15a17m_atendmesatual]'], 10)
      + parseInt(services['circofluxoatend[15a17f_atendmesatual]'], 10),
      parseInt(services['circofluxoatend[6a11m_presmesatual]'], 10)
      + parseInt(services['circofluxoatend[6a11f_presmesatual]'], 10)
      + parseInt(services['circofluxoatend[12a14m_presmesatual]'], 10)
      + parseInt(services['circofluxoatend[12a14f_presmesatual]'], 10)
      + parseInt(services['circofluxoatend[15a17m_presmesatual]'], 10)
      + parseInt(services['circofluxoatend[15a17f_presmesatual]'], 10),
      parseInt(services['circofluxoatend[6a11m_remmesatual]'], 10)
      + parseInt(services['circofluxoatend[6a11f_remmesatual]'], 10)
      + parseInt(services['circofluxoatend[12a14m_remmesatual]'], 10)
      + parseInt(services['circofluxoatend[12a14f_remmesatual]'], 10)
      + parseInt(services['circofluxoatend[15a17m_remmesatual]'], 10)
      + parseInt(services['circofluxoatend[15a17f_remmesatual]'], 10),
      1, 1, 1, 1, 1, 1),
  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['circoracasexo[fem_branca]'],
      services['circoracasexo[fem_preta]'],
      services['circoracasexo[fem_parda]'],
      services['circoracasexo[fem_amarela]'],
      services['circoracasexo[fem_indigena]'],
      services['circoracasexo[fem_naoinf]'],
      parseInt(services['circoracasexo[fem_branca]'], 10)
      + parseInt(services['circoracasexo[fem_preta]'], 10)
      + parseInt(services['circoracasexo[fem_parda]'], 10)
      + parseInt(services['circoracasexo[fem_amarela]'], 10)
      + parseInt(services['circoracasexo[fem_indigena]'], 10)
      + parseInt(services['circoracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['circoracasexo[masc_branca]'],
      services['circoracasexo[masc_preta]'],
      services['circoracasexo[masc_parda]'],
      services['circoracasexo[masc_amarela]'],
      services['circoracasexo[masc_indigena]'],
      services['circoracasexo[masc_naoinf]'],
      parseInt(services['circoracasexo[masc_branca]'], 10)
      + parseInt(services['circoracasexo[masc_preta]'], 10)
      + parseInt(services['circoracasexo[masc_parda]'], 10)
      + parseInt(services['circoracasexo[masc_amarela]'], 10)
      + parseInt(services['circoracasexo[masc_indigena]'], 10)
      + parseInt(services['circoracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['circoracasexo[masc_branca]'], 10)
      + parseInt(services['circoracasexo[fem_branca]'], 10),
      parseInt(services['circoracasexo[masc_preta]'], 10)
      + parseInt(services['circoracasexo[fem_preta]'], 10),
      parseInt(services['circoracasexo[masc_parda]'], 10)
      + parseInt(services['circoracasexo[fem_parda]'], 10),
      parseInt(services['circoracasexo[masc_amarela]'], 10)
      + parseInt(services['circoracasexo[fem_amarela]'], 10),
      parseInt(services['circoracasexo[masc_indigena]'], 10)
      + parseInt(services['circoracasexo[fem_indigena]'], 10),
      parseInt(services['circoracasexo[masc_naoinf]'], 10)
      + parseInt(services['circoracasexo[fem_naoinf]'], 10),
      parseInt(services['circoracasexo[masc_branca]'], 10)
      + parseInt(services['circoracasexo[fem_branca]'], 10)
      + parseInt(services['circoracasexo[masc_preta]'], 10)
      + parseInt(services['circoracasexo[fem_preta]'], 10)
      + parseInt(services['circoracasexo[masc_parda]'], 10)
      + parseInt(services['circoracasexo[fem_parda]'], 10)
      + parseInt(services['circoracasexo[masc_amarela]'], 10)
      + parseInt(services['circoracasexo[fem_amarela]'], 10)
      + parseInt(services['circoracasexo[masc_indigena]'], 10)
      + parseInt(services['circoracasexo[fem_indigena]'], 10)
      + parseInt(services['circoracasexo[masc_naoinf]'], 10)
      + parseInt(services['circoracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const motivosSaida = [
    createData('Mudança de endereço',
      services['circomotivossaida[mudancaendereco_6a11]'],
      services['circomotivossaida[mudancaendereco_12a17]'],
      1, 1, 1, 1, 1, 1, 1),
    createData('Transferência para outro serviço',
      services['circomotivossaida[transferencia_6a11]'],
      services['circomotivossaida[transferencia_12a17]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Óbito',
      services['circomotivossaida[obito_6a11]'],
      services['circomotivossaida[obito_12a17]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Abandono',
      services['circomotivossaida[aband_6a11]'],
      services['circomotivossaida[aband_12a17]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Aplicação de medida restritiva de liberdade',
      services['circomotivossaida[aplicacaodemedida_6a11]'],
      services['circomotivossaida[aplicacaodemedida_12a17]'],
      1,
      1,
      1,
      1,
      1,
      1, 1),
    createData('Limite de Idade',
      services['circomotivossaida[limiteidade_6a11]'],
      services['circomotivossaida[limiteidade_12a17]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Inserção no Programa Jovem Aprendiz',
      services['circomotivossaida[jovemaprendiz_6a11]'],
      services['circomotivossaida[jovemaprendiz_12a17]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Total',
      parseInt(services['circomotivossaida[aband_6a11]'], 10)
    + parseInt(services['circomotivossaida[aplicacaodemedida_6a11]'], 10)
    + parseInt(services['circomotivossaida[jovemaprendiz_6a11]'], 10)
    + parseInt(services['circomotivossaida[limiteidade_6a11]'], 10)
    + parseInt(services['circomotivossaida[mudancaendereco_6a11]'], 10)
    + parseInt(services['circomotivossaida[obito_6a11]'], 10)
    + parseInt(services['circomotivossaida[transferencia_6a11]'], 10),
      parseInt(services['circomotivossaida[aband_12a17]'], 10)
    + parseInt(services['circomotivossaida[aplicacaodemedida_12a17]'], 10)
    + parseInt(services['circomotivossaida[jovemaprendiz_12a17]'], 10)
    + parseInt(services['circomotivossaida[limiteidade_12a17]'], 10)
    + parseInt(services['circomotivossaida[mudancaendereco_12a17]'], 10)
    + parseInt(services['circomotivossaida[obito_12a17]'], 10)
    + parseInt(services['circomotivossaida[transferencia_12a17]'], 10),
      1,
      1,
      1,
      1,
      1,
      1,
      1),

  ];

  const familiasInsumos = [
    createData('Cesta de alimentos', services['circoinsumo[cestasaliment_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Kit de material de higiene', services['circoinsumo[kithiginene_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
          1. Quantidade de pessoas do sexo feminino atendidas no mês, por faixa etária:
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
        <TableThreeColumns headers={motivosSaidaHeaders} body={motivosSaida} />
        <br />
        <br />
        <Typography variant="h5" gutterBottom>
          4. Nº de crianças e adolescentes em situação de trabalho infantil encaminhados
          pelo CRAS/CREAS no mês de referência é de
          {' '}
          {services['circonovostrabinfant[total]']}
          {' '}
          pessoa(s)
        </Typography>
        <br />
        <br />
        <Typography variant="h5" gutterBottom>
          5. Quantidade de pessoas com deficiência atendidas no mês é de
          {' '}
          {services.circousuariospcd}
          {' '}
          pessoa(s)
        </Typography>
        <br />
        <h2>
          6. Atendimento às famílias no mês:
        </h2>
        <TableTwoColumns headers={atendimentoFamiliaHeaders} body={atendimentoFamilia} />

        <Typography variant="h5" gutterBottom>
          7. Quantidade de visitas domicilares realizadas no mês é
          {' '}
          {services.circovisdom}
          {' '}
          pessoa(s)
        </Typography>
        <br />
        <h2>
          8. O número de famílias ou pessoas que buscaram atendimento presencial
          no mês de referência devido a alguma vulnerabilidade relacional:
        </h2>
        <TableTwoColumns headers={familiasVulnerabilidadeHeaders} body={familiasVulnerabilidade} />
        <br />

        <h2>
          9. Indique as atividades realizadas com os adolescentes atendidos pelo serviço no mês
        </h2>

        <ListComponent items={atividadesItems} />

        <h2>
          10. Os temas discutidos com pessoas atendidas pelo serviço no mês:
        </h2>
        <ListComponent items={temasItems} />
        <br />
        <h2>
          11. Quantidade de pessoas incluídas em lista de
          espera (demanda reprimida) no mês, por faixa etária:
        </h2>

        <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />

        <h2>
          12. Quantidade de famílias que receberam insumos no mês
        </h2>

        <TableTwoColumns headers={familiasInsumosHeaders} body={familiasInsumos} />

        <h2>
          13. Quantidade de encaminhamentos realizados pelo serviço no mês:
        </h2>
        <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />
        <br />

        <h2>
          14. Quantidade de atendimentos remotos de usuários por semana no mês:
        </h2>
        <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />
        <br />
        <h2>
          15. Quantidade de atividades remotas realizadas no mês,
          pelos meios em que foram disponibilizadas:
        </h2>
        <TableTwoColumns
          headers={atendimentosRemotosTiposHeaders}
          body={atendimentosRemotosTipos}
        />
        <br />
        <h2>
          16. Quantidade de atendimentos remotos de familiares por semana no mês:
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

export default Response;
