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

import TableFourColumns from '../../components/TableFourColumns';
import TableEigthColumns from '../../components/TableEightColumns';
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
) {
  return {
    title, attribute1, attribute2, attribute3, attribute4, attribute5, attribute6, attribute7,
  };
}

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

const motivoSaidaHeaders = ['', 'Quantidade'];

const familiasAtendidasHeaders = ['', 'Nº de famílias'];

const familiasVulnerabilidadeHeaders = ['', 'Nº de famílias'];

const demandaReprimidaHeaders = ['', 'Nº de adolescentes'];

const familiasInsumosHeaders = ['', 'N° de famílias'];

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
    axios.get(`http://localhost:8080/devolutivas/${nomeSAS}/${mes}/${token}`).then((res) => {
      const index = Object.keys(res.data.responses[0])[0];
      setServices(res.data.responses[0][index]);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  const atendidosMes = [
    createData('15 a 17 anos (M)', services['cjfluxopessoasatend[15a17m_atendmesatual]'], services['cjfluxopessoasatend[15a17m_presmesatual]'], services['cjfluxopessoasatend[15a17m_remmesatual]'], 1, 1, 1, 1),
    createData('15 a 17 anos (F)', services['cjfluxopessoasatend[15a17f_atendmesatual]'], services['cjfluxopessoasatend[15a17f_presmesatual]'], services['cjfluxopessoasatend[15a17f_remmesatual]'], 1, 1, 1, 1),
    createData('Total', parseInt(services['cjfluxopessoasatend[15a17m_atendmesatual]'], 10)
                      + parseInt(services['cjfluxopessoasatend[15a17f_atendmesatual]'], 10),

    parseInt(services['cjfluxopessoasatend[15a17m_presmesatual]'], 10)
    + parseInt(services['cjfluxopessoasatend[15a17f_presmesatual]'], 10),

    parseInt(services['cjfluxopessoasatend[15a17m_remmesatual]'], 10)
    + parseInt(services['cjfluxopessoasatend[15a17f_remmesatual]'], 10),
    1, 1, 1, 1),
  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['cjracasexo[fem_branca]'],
      services['cjracasexo[fem_preta]'],
      services['cjracasexo[fem_parda]'],
      services['cjracasexo[fem_amarela]'],
      services['cjracasexo[fem_indigena]'],
      services['cjracasexo[fem_naoinf]'],
      parseInt(services['cjracasexo[fem_branca]'], 10)
      + parseInt(services['cjracasexo[fem_preta]'], 10)
      + parseInt(services['cjracasexo[fem_parda]'], 10)
      + parseInt(services['cjracasexo[fem_amarela]'], 10)
      + parseInt(services['cjracasexo[fem_indigena]'], 10)
      + parseInt(services['cjracasexo[fem_naoinf]'], 10)),
    createData('Masculino',
      services['cjracasexo[masc_branca]'],
      services['cjracasexo[masc_preta]'],
      services['cjracasexo[masc_parda]'],
      services['cjracasexo[masc_amarela]'],
      services['cjracasexo[masc_indigena]'],
      services['cjracasexo[masc_naoinf]'],
      parseInt(services['cjracasexo[masc_branca]'], 10)
      + parseInt(services['cjracasexo[masc_preta]'], 10)
      + parseInt(services['cjracasexo[masc_parda]'], 10)
      + parseInt(services['cjracasexo[masc_amarela]'], 10)
      + parseInt(services['cjracasexo[masc_indigena]'], 10)
      + parseInt(services['cjracasexo[masc_naoinf]'], 10)),
    createData('Total Geral',
      parseInt(services['cjracasexo[masc_branca]'], 10)
      + parseInt(services['cjracasexo[fem_branca]'], 10),
      parseInt(services['cjracasexo[masc_preta]'], 10)
      + parseInt(services['cjracasexo[fem_preta]'], 10),
      parseInt(services['cjracasexo[masc_parda]'], 10)
      + parseInt(services['cjracasexo[fem_parda]'], 10),
      parseInt(services['cjracasexo[masc_amarela]'], 10)
      + parseInt(services['cjracasexo[fem_amarela]'], 10),
      parseInt(services['cjracasexo[masc_indigena]'], 10)
      + parseInt(services['cjracasexo[fem_indigena]'], 10),
      parseInt(services['cjracasexo[masc_naoinf]'], 10)
      + parseInt(services['cjracasexo[fem_naoinf]'], 10),
      parseInt(services['cjracasexo[masc_branca]'], 10)
      + parseInt(services['cjracasexo[fem_branca]'], 10)
      + parseInt(services['cjracasexo[masc_preta]'], 10)
      + parseInt(services['cjracasexo[fem_preta]'], 10)
      + parseInt(services['cjracasexo[masc_parda]'], 10)
      + parseInt(services['cjracasexo[fem_parda]'], 10)
      + parseInt(services['cjracasexo[masc_amarela]'], 10)
      + parseInt(services['cjracasexo[fem_amarela]'], 10)
      + parseInt(services['cjracasexo[masc_indigena]'], 10)
      + parseInt(services['cjracasexo[fem_indigena]'], 10)
      + parseInt(services['cjracasexo[masc_naoinf]'], 10)
      + parseInt(services['cjracasexo[fem_naoinf]'], 10)),
  ];

  const motivoSaida = [
    createData('Mudança de endereço',
      services['cjmotivossaida[endereco_qtd]'],
      1,
      1, 1, 1, 1, 1),
    createData('Transferência para outro serviço',
      services['cjmotivossaida[transferencia_qtd]'],
      1,
      1, 1, 1, 1, 1),
    createData('Óbito',
      services['cjmotivossaida[obito_qtd]'],
      1,
      1, 1, 1, 1, 1),
    createData('Abandono',
      services['cjmotivossaida[aband_qtd]'],
      1,
      1, 1, 1, 1, 1),
    createData('Aplicação de medida restritiva de liberdade',
      services['cjmotivossaida[aplicacaodemedida_qtd]'],
      1,
      1, 1, 1, 1, 1),
    createData('Limite de idade',
      services['cjmotivossaida[limiteidade_qtd]'],
      1,
      1, 1, 1, 1, 1),
    createData('Inserção no jovem aprendiz',
      services['cjmotivossaida[jovemaprendiz_qtd]'],
      1,
      1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['cjmotivossaida[endereco_qtd]'], 10)
      + parseInt(services['cjmotivossaida[transferencia_qtd]'], 10)
      + parseInt(services['cjmotivossaida[obito_qtd]'], 10)
      + parseInt(services['cjmotivossaida[aband_qtd]'], 10)
      + parseInt(services['cjmotivossaida[aplicacaodemedida_qtd]'], 10)
      + parseInt(services['cjmotivossaida[limiteidade_qtd]'], 10)
      + parseInt(services['cjmotivossaida[jovemaprendiz_qtd]'], 10),
      1,
      1, 1, 1, 1, 1),
  ];

  const familiasAtendidas = [
    createData('Nº de famílias atendidas presencialmente no mês', services['cjatendfam[cjfampres]'], 1, 1, 1, 1, 1, 1),
    createData('Nº de famílias acompanhadas de forma remota no mês', services['cjatendfam[cjfamrem]'], 1, 1, 1, 1, 1, 1),
    createData('Nº total de famílias atendidas no mês', services['cjatendfam[cjfamtotal]'], 1, 1, 1, 1, 1, 1),
  ];

  const familiasVulnerabilidade = [
    createData('Conflitos', services['cjvulnerab[conflit]'], 1, 1, 1, 1, 1, 1),
    createData('Preconceitos/discriminação', services['cjvulnerab[Precon]'], 1, 1, 1, 1, 1, 1),
    createData('Abandono', services['cjvulnerab[aband]'], 1, 1, 1, 1, 1, 1),
    createData('Apartação', services['cjvulnerab[apart]'], 1, 1, 1, 1, 1, 1),
    createData('Confinamento', services['cjvulnerab[confinamet]'], 1, 1, 1, 1, 1, 1),
    createData('Isolamento', services['cjvulnerab[isolament]'], 1, 1, 1, 1, 1, 1),
    createData('Violência', services['cjvulnerab[violen]'], 1, 1, 1, 1, 1, 1),
  ];

  const atividadesItems = [
    ['Atividades esportivas', services['cjatividades[atvesporte]']],
    ['Musicalidade (cantar, tocar instrumentos etc.)', services['cjatividades[atvmusica]']],
    ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', services['cjatividades[atvcultura]']],
    ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', services['cjatividades[atvarte]']],
    ['Atividades de inclusão digital', services['cjatividades[atvincdigital]']],
    ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['cjatividades[atvlinguagem]']],
    ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['cjatividades[atvculinaria]']],
    ['Atividades recreativas (jogos, brincadeiras, etc.)', services['cjatividades[atvrecreacao]']],
    ['Atividades de orientação para o mundo do trabalho', services['cjatividades[atvtrabalho]']],
  ];

  const temasItems = [
    ['Garantia de direitos sociais (saúde, educação, previdência, moradia, envelhecimento, saúde mental, etc.)', services['cjtema[temadireitos]']],
    ['Relacionamento familiar (gravidez na adolescência, álcool e drogas, orientação sexual, aborto, etc.)', services['cjtema[temafamiliar]']],
    ['Direitos e programas sociais', services['cjtema[temadireitossociais]']],
    ['Igualdade entre homens e mulheres', services['cjtema[temaigualdade]']],
    ['Relações étnico-raciais', services['cjtema[temaetnico]']],
    ['Prevenção à violência', services['cjtema[temaprevencaovio]']],
    ['Parentalidade', services['cjtema[temaparental]']],
    ['Deficiência e acessibilidade', services['cjtema[temapcd]']],
    ['Mundo do trabalho', services['cjtema[tematrabalho]']],
  ];

  const demandaReprimida = [
    createData('15 a 17 anos', services['cjlistaespera[15a17_quantidade]'], 1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['cjlistaespera[15a17_quantidade]'], 10),
      1, 1, 1, 1, 1, 1),
  ];

  const familiasInsumos = [
    createData('Cesta de alimentos', services['cjinsumos[cestasaliment_numero]'], 1, 1, 1, 1, 1, 1),
    createData('Kit de material de higiene', services['cjinsumos[kithiginene_numero]'], 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['cjencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['cjencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['cjencaminhamentos[servicosrede]'], 1, 1, 1, 1, 1, 1),
    createData('Saúde', services['cjencaminhamentos[saude]'], 1, 1, 1, 1, 1, 1),
    createData('Educação', services['cjencaminhamentos[educacao]'], 1, 1, 1, 1, 1, 1),
    createData('Conselhos de direito', services['cjencaminhamentos[direito]'], 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['cjencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotos = [
    createData('Semana 1', services['cjatendremperiod[1sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['cjatendremperiod[2sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['cjatendremperiod[3sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['cjatendremperiod[4sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['cjatendremperiod[5sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['cjatendremperiod[6sem]'], 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosTipos = [
    createData('Telefone / Celular / Whatsapp', services['cjatendremdisp[telef]'], 1, 1, 1, 1, 1, 1),
    createData('Email', services['cjatendremdisp[email]'], 1, 1, 1, 1, 1, 1),
    createData('Facebook', services['cjatendremdisp[face]'], 1, 1, 1, 1, 1, 1),
    createData('YouTube', services['cjatendremdisp[youtu]'], 1, 1, 1, 1, 1, 1),
    createData('Outras redes sociais', services['cjatendremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1),
    createData('Entrega de kits de atividades', services['cjatendremdisp[entreg]'], 1, 1, 1, 1, 1, 1),
    createData('Outros', services['cjatendremdisp[outros]'], 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['cjperiodfam[1sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['cjperiodfam[2sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['cjperiodfam[3sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['cjperiodfam[4sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['cjperiodfam[5sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['cjperiodfam[6sem]'], 1, 1, 1, 1, 1, 1),
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
          1. Quantidade de adolescentes atendidos no mês, por sexo
        </h2>
        <TableFourColumns headers={atendidosMesHeaders} body={atendidosMes} />

        <h2>
          2. Quantidade de adolescentes atendidos no mês, por sexo e raça/cor
        </h2>
        <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
        <h2>
          3. Quantidade de adolescentes por motivo de saída do serviço no mês
        </h2>
        <TableTwoColumns headers={motivoSaidaHeaders} body={motivoSaida} />

        <Typography variant="h5" gutterBottom>
          4. Quantidade de adolescentes com deficiência atendidos no mês é
          {' '}
          {services.cjusuariospcd}
          {' '}
          pessoa(s)
        </Typography>
        <br />
        <h2>
          5. Atendimento às famílias no mês de referência
        </h2>
        <TableTwoColumns headers={familiasAtendidasHeaders} body={familiasAtendidas} />
        <br />
        <Typography variant="h5" gutterBottom>
          6. Quantidade de visitas domicilares realizadas no mês é
          {' '}
          {services.cjvisitdom}
          {' '}
          pessoa(s)
        </Typography>

        <h2>
          7. O número de famílias ou pessoas que buscaram
          atendimento presencial no mês de referência
          devido a alguma vulnerabilidade relacional listada abaixo
        </h2>

        <TableTwoColumns headers={familiasVulnerabilidadeHeaders} body={familiasVulnerabilidade} />

        <h2>
          8. Indique as atividades realizadas com os adolescentes atendidos pelo serviço no mês
        </h2>

        <ListComponent items={atividadesItems} />

        <h2>
          9. Indique os temas discutidos com os adolescentes atendidos pelo serviço no mês
        </h2>

        <ListComponent items={temasItems} />

        <h2>
          10. Quantidade de adolescentes incluídos na lista de espera
          (demanda reprimida) do serviço no mês
        </h2>

        <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />
        <br />
        <h2>
          11. Quantidade de famílias que receberam insumos no mês
        </h2>

        <TableTwoColumns headers={familiasInsumosHeaders} body={familiasInsumos} />

        <h2>
          12. Quantidade de encaminhamentos realizados pelo serviço no mês
        </h2>

        <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

        <h2>
          13. Quantidade de atendimentos remotos de adolescentes por semana no mês
        </h2>

        <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

        <h2>
          14. Quantidade de atividades remotas realizadas no mês,
          pelo meio em que foram disponibilizadas
        </h2>

        <TableTwoColumns
          headers={atendimentosRemotosTiposHeaders}
          body={atendimentosRemotosTipos}
        />

        <h2>
          15. Quantidade de atendimentos
          remotos de familiares por semana no mês
        </h2>

        <TableTwoColumns
          headers={atendimentosRemotosFamiliaSemanaHeaders}
          body={atendimentosRemotosFamiliaSemana}
        />

      </Section>
    </>
  );
};

export default Response;
