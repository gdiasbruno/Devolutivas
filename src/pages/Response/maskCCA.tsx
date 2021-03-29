import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  withStyles, Theme,
} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import { Typography } from '@material-ui/core';

import {
  FirstSection, MyButton, Section, TableFourColumnsStyled,
} from './styles';

import TableEigthColumns from '../../components/TableEightColumns';
import TableThreeColumns from '../../components/TableThreeColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import ListComponent from '../../components/ListComponent';

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

const motivoSaidaHeaders = ['6 a 11 anos', '12 a 14 anos'];

const familiasAtendidasHeaders = ['', 'Nº de famílias'];

const familiasVulnerabilidadeHeaders = ['', 'Nº de famílias'];

const demandaReprimidaHeaders = ['', 'Nº de crianças e/ou adolescentes'];

const familiasInsumosHeaders = ['', 'N° de famílias'];

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const atendimentosRemotosHeaders = ['', 'Atendimentos Remotos'];

const atendimentosRemotosTiposHeaders = ['Tipos', ''];

const atendimentosRemotosFamiliaSemanaHeaders = ['Semanas', 'Nº de famílias'];

const Response: React.FC = () => {
  const [services, setServices]:any = useState([]);

  const fetchUserProfiles = () => {
    axios.get('http://localhost:8080/devolutivas/SE/0121/12120019').then((res) => {
      const index = Object.keys(res.data.responses[0])[0];
      setServices(res.data.responses[0][index]);
      console.log(res.data.responses[0][index]);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  const atendidosMes = [
    createData('6 a 11 anos (M)', services['ccafluxopessoasatend[6a11m_atendmesatual]'], services['ccafluxopessoasatend[6a11m_presmesatual]'], services['ccafluxopessoasatend[6a11m_remmesatual]'], 1, 1, 1, 1),
    createData('6 a 11 anos (F)', services['ccafluxopessoasatend[6a11f_atendmesatual]'], services['ccafluxopessoasatend[6a11f_presmesatual]'], services['ccafluxopessoasatend[6a11f_remmesatual]'], 1, 1, 1, 1),
    createData('12 a 14 anos (M)', services['ccafluxopessoasatend[12a14m_atendmesatual]'], services['ccafluxopessoasatend[12a14m_presmesatual]'], services['ccafluxopessoasatend[12a14m_remmesatual]'], 1, 1, 1, 1),
    createData('12 a 14 anos (F)', services['ccafluxopessoasatend[12a14f_atendmesatual]'], services['ccafluxopessoasatend[12a14f_presmesatual]'], services['ccafluxopessoasatend[12a14f_remmesatual]'], 1, 1, 1, 1),
    createData('Total', parseInt(services['ccafluxopessoasatend[6a11m_atendmesatual]'], 10)
                      + parseInt(services['ccafluxopessoasatend[6a11f_atendmesatual]'], 10)
                      + parseInt(services['ccafluxopessoasatend[12a14m_atendmesatual]'], 10)
                      + parseInt(services['ccafluxopessoasatend[12a14f_atendmesatual]'], 10),

    parseInt(services['ccafluxopessoasatend[6a11m_presmesatual]'], 10)
    + parseInt(services['ccafluxopessoasatend[6a11f_presmesatual]'], 10)
    + parseInt(services['ccafluxopessoasatend[12a14m_presmesatual]'], 10)
    + parseInt(services['ccafluxopessoasatend[12a14f_presmesatual]'], 10),

    parseInt(services['ccafluxopessoasatend[6a11m_remmesatual]'], 10)
    + parseInt(services['ccafluxopessoasatend[6a11f_remmesatual]'], 10)
    + parseInt(services['ccafluxopessoasatend[12a14m_remmesatual]'], 10)
    + parseInt(services['ccafluxopessoasatend[12a14f_remmesatual]'], 10),
    1, 1, 1, 1),
  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['ccaracasexo[fem_branca]'],
      services['ccaracasexo[fem_preta]'],
      services['ccaracasexo[fem_parda]'],
      services['ccaracasexo[fem_amarela]'],
      services['ccaracasexo[fem_indigena]'],
      services['ccaracasexo[fem_naoinf]'],
      parseInt(services['ccaracasexo[fem_branca]'], 10)
      + parseInt(services['ccaracasexo[fem_preta]'], 10)
      + parseInt(services['ccaracasexo[fem_parda]'], 10)
      + parseInt(services['ccaracasexo[fem_amarela]'], 10)
      + parseInt(services['ccaracasexo[fem_indigena]'], 10)
      + parseInt(services['ccaracasexo[fem_naoinf]'], 10)),
    createData('Masculino',
      services['ccaracasexo[masc_branca]'],
      services['ccaracasexo[masc_preta]'],
      services['ccaracasexo[masc_parda]'],
      services['ccaracasexo[masc_amarela]'],
      services['ccaracasexo[masc_indigena]'],
      services['ccaracasexo[masc_naoinf]'],
      parseInt(services['ccaracasexo[masc_branca]'], 10)
      + parseInt(services['ccaracasexo[masc_preta]'], 10)
      + parseInt(services['ccaracasexo[masc_parda]'], 10)
      + parseInt(services['ccaracasexo[masc_amarela]'], 10)
      + parseInt(services['ccaracasexo[masc_indigena]'], 10)
      + parseInt(services['ccaracasexo[masc_naoinf]'], 10)),
    createData('Total Geral',
      parseInt(services['ccaracasexo[masc_branca]'], 10)
      + parseInt(services['ccaracasexo[fem_branca]'], 10),
      parseInt(services['ccaracasexo[masc_preta]'], 10)
      + parseInt(services['ccaracasexo[fem_preta]'], 10),
      parseInt(services['ccaracasexo[masc_parda]'], 10)
      + parseInt(services['ccaracasexo[fem_parda]'], 10),
      parseInt(services['ccaracasexo[masc_amarela]'], 10)
      + parseInt(services['ccaracasexo[fem_amarela]'], 10),
      parseInt(services['ccaracasexo[masc_indigena]'], 10)
      + parseInt(services['ccaracasexo[fem_indigena]'], 10),
      parseInt(services['ccaracasexo[masc_naoinf]'], 10)
      + parseInt(services['ccaracasexo[fem_naoinf]'], 10),
      parseInt(services['ccaracasexo[masc_branca]'], 10)
      + parseInt(services['ccaracasexo[fem_branca]'], 10)
      + parseInt(services['ccaracasexo[masc_preta]'], 10)
      + parseInt(services['ccaracasexo[fem_preta]'], 10)
      + parseInt(services['ccaracasexo[masc_parda]'], 10)
      + parseInt(services['ccaracasexo[fem_parda]'], 10)
      + parseInt(services['ccaracasexo[masc_amarela]'], 10)
      + parseInt(services['ccaracasexo[fem_amarela]'], 10)
      + parseInt(services['ccaracasexo[masc_indigena]'], 10)
      + parseInt(services['ccaracasexo[fem_indigena]'], 10)
      + parseInt(services['ccaracasexo[masc_naoinf]'], 10)
      + parseInt(services['ccaracasexo[fem_naoinf]'], 10)),
  ];

  const motivoSaida = [
    createData('Mudança de endereço',
      services['ccamotivossaida[endereco_6a11]'],
      services['ccamotivossaida[endereco_12a14]'],
      1, 1, 1, 1, 1),
    createData('Transferência para outro serviço',
      services['ccamotivossaida[transferencia_6a11]'],
      services['ccamotivossaida[transferencia_12a14]'],
      1, 1, 1, 1, 1),
    createData('Óbito',
      services['ccamotivossaida[obito_6a11]'],
      services['ccamotivossaida[obito_12a14]'],
      1, 1, 1, 1, 1),
    createData('Abandono',
      services['ccamotivossaida[aband_6a11]'],
      services['ccamotivossaida[aband_12a14]'],
      1, 1, 1, 1, 1),
    createData('Aplicação de medida restritiva de liberdade',
      services['ccamotivossaida[liberdade_6a11]'],
      services['ccamotivossaida[liberdade_12a14]'],
      1, 1, 1, 1, 1),
    createData('Limite de idade',
      services['ccamotivossaida[idade_6a11]'],
      services['ccamotivossaida[idade_12a14]'],
      1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['ccamotivossaida[endereco_6a11]'], 10)
      + parseInt(services['ccamotivossaida[transferencia_6a11]'], 10)
      + parseInt(services['ccamotivossaida[obito_6a11]'], 10)
      + parseInt(services['ccamotivossaida[aband_6a11]'], 10)
      + parseInt(services['ccamotivossaida[liberdade_6a11]'], 10)
      + parseInt(services['ccamotivossaida[idade_6a11]'], 10),
      parseInt(services['ccamotivossaida[endereco_12a14]'], 10)
      + parseInt(services['ccamotivossaida[transferencia_12a14]'], 10)
      + parseInt(services['ccamotivossaida[obito_12a14]'], 10)
      + parseInt(services['ccamotivossaida[aband_12a14]'], 10)
      + parseInt(services['ccamotivossaida[liberdade_12a14]'], 10)
      + parseInt(services['ccamotivossaida[idade_12a14]'], 10),

      1, 1, 1, 1, 1),
  ];

  const familiasAtendidas = [
    createData('Nº de famílias atendidas presencialmente no mês', services['ccaatendfam[ccafampres]'], 1, 1, 1, 1, 1, 1),
    createData('Nº de famílias acompanhadas de forma remota no mês', services['ccaatendfam[ccafamrem]'], 1, 1, 1, 1, 1, 1),
    createData('Nº total de famílias atendidas no mês', services['ccaatendfam[ccafamtotal]'], 1, 1, 1, 1, 1, 1),
  ];

  const familiasVulnerabilidade = [
    createData('Conflitos', services['ccavulnerab[conflit]'], 1, 1, 1, 1, 1, 1),
    createData('Preconceitos/discriminação', services['ccavulnerab[Precon]'], 1, 1, 1, 1, 1, 1),
    createData('Abandono', services['ccavulnerab[aband]'], 1, 1, 1, 1, 1, 1),
    createData('Apartação', services['ccavulnerab[apart]'], 1, 1, 1, 1, 1, 1),
    createData('Confinamento', services['ccavulnerab[confinamet]'], 1, 1, 1, 1, 1, 1),
    createData('Isolamento', services['ccavulnerab[isolament]'], 1, 1, 1, 1, 1, 1),
    createData('Violência', services['ccavulnerab[violen]'], 1, 1, 1, 1, 1, 1),
  ];

  const atividadesItems = [
    ['Atividades esportivas', services['ccaatividades[atvesporte]']],
    ['Musicalidade (cantar, tocar instrumentos etc.)', services['ccaatividades[atvmusica]']],
    ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', services['ccaatividades[atvcultura]']],
    ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', services['ccaatividades[atvarte]']],
    ['Atividades de inclusão digital', services['ccaatividades[atvincdigital]']],
    ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['ccaatividades[atvlinguagem]']],
    ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['ccaatividades[atvculinaria]']],
    ['Atividades recreativas (jogos, brincadeiras, etc.)', services['ccaatividades[atvrecreacao]']],
  ];

  const temasItems = [
    ['Temas transversais (saúde, meio ambiente, cultura, esporte etc.)', services['ccatema[tematransversal]']],
    ['Direitos e programas sociais', services['ccatema[temadireitos]']],
    ['Segurança alimentar e nutricional', services['ccatema[temanutricao]']],
    ['Igualdade entre homens e mulheres', services['ccatema[temaigualdade]']],
    ['Orientação sexual e de identidade de gênero', services['ccatema[temaorientsexual]']],
    ['Relações étnico-raciais', services['ccatema[temaetnico]']],
    ['Prevenção ao uso de álcool e drogas', services['ccatema[temaalccoldrogas]']],
    ['Prevenção à violência', services['ccatema[temaprevencaovio]']],
    ['Parentalidade', services['ccatema[temaparental]']],
    ['Deficiência e acessibilidade', services['ccatema[temapcd]']],
    ['Mundo do trabalho', services['ccatema[temamundotrabalho]']],
  ];

  const demandaReprimida = [
    createData('6 a 11 anos', services['ccalistaespera[6a11_quantidade]'], 1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos', services['ccalistaespera[12a14_quantidade]'], 1, 1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['ccalistaespera[6a11_quantidade]'], 10)
      + parseInt(services['ccalistaespera[12a14_quantidade]'], 10),
      1, 1, 1, 1, 1, 1),
  ];

  const familiasInsumos = [
    createData('Cesta de alimentos', services['ccainsumos[cestasaliment_numero]'], 1, 1, 1, 1, 1, 1),
    createData('Kit de material de higiene', services['ccainsumos[kithiginene_numero]'], 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['ccaencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['ccaencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['ccaencaminhamentos[servicosrede]'], 1, 1, 1, 1, 1, 1),
    createData('Saúde', services['ccaencaminhamentos[saude]'], 1, 1, 1, 1, 1, 1),
    createData('Educação', services['ccaencaminhamentos[educacao]'], 1, 1, 1, 1, 1, 1),
    createData('Conselhos de direito', services['ccaencaminhamentos[direito]'], 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['ccaencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotos = [
    createData('Semana 1', services['ccaatendremotoperiod[1sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['ccaatendremotoperiod[2sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['ccaatendremotoperiod[3sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['ccaatendremotoperiod[4sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['ccaatendremotoperiod[5sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['ccaatendremotoperiod[6sem]'], 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosTipos = [
    createData('Telefone / Celular / Whatsapp', services['ccaatendremotodisp[telef]'], 1, 1, 1, 1, 1, 1),
    createData('Email', services['ccaatendremotodisp[email]'], 1, 1, 1, 1, 1, 1),
    createData('Facebook', services['ccaatendremotodisp[face]'], 1, 1, 1, 1, 1, 1),
    createData('YouTube', services['ccaatendremotodisp[youtu]'], 1, 1, 1, 1, 1, 1),
    createData('Outras redes sociais', services['ccaatendremotodisp[outrasredes]'], 1, 1, 1, 1, 1, 1),
    createData('Entrega de kits de atividades', services['ccaatendremotodisp[entreg]'], 1, 1, 1, 1, 1, 1),
    createData('Outros', services['ccaatendremotodisp[outros]'], 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['ccaperiodfam[1sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['ccaperiodfam[2sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['ccaperiodfam[3sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['ccaperiodfam[4sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['ccaperiodfam[5sem]'], 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['ccaperiodfam[6sem]'], 1, 1, 1, 1, 1, 1),
  ];

  return (
    <>
      <FirstSection>
        <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb
            component="a"
            href="/"
            label="SAS Aricanduva"
            icon={<HomeIcon fontSize="small" />}
          />
          <StyledBreadcrumb component="a" href="/months" label="Novembro" />
          <StyledBreadcrumb component="a" href="/Reports" label="CCA Jardim das Rosas" />
          <Typography color="textPrimary">Respostas</Typography>
        </Breadcrumbs>
        <div>
          <MyButton variant="contained" color="primary">PDF</MyButton>
          <MyButton variant="contained" color="primary">Imprimir</MyButton>
          <MyButton variant="contained" color="primary" href="/reports">Voltar</MyButton>
        </div>

      </FirstSection>

      <Section>
        <h2>
          1. Quantidade de crianças e adolescentes atendidos no mês, por faixa etária e sexo
        </h2>
        <br />
        <TableFourColumnsStyled headers={atendidosMesHeaders} body={atendidosMes} />
        <br />

        <h2>
          2. Quantidade crianças e adolescentes atendidos no mês, por sexo e raça/cor
        </h2>
        <br />
        <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
        <h2>
          3. Quantidade de crianças e adolescentes por motivo de saída do serviço no mês
        </h2>
        <br />
        <TableThreeColumns headers={motivoSaidaHeaders} body={motivoSaida} />
        <br />
        <Typography variant="h5" gutterBottom>
          4. A quantidade de crianças e/ou adolescentes em situação de trabalho
          infantil encaminhadas pelo Cras/Creas no mês de referência é
          {' '}
          {services.ccanovostrabinfantil}
          {' '}
          pessoa(s)
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom>
          5. A quantidade de crianças e adolescentes
          com deficiência atendidos no mês de referência é
          {' '}
          {services.ccausuariospcd}
          {' '}
          pessoa(s)

        </Typography>
        <br />
        <h2>6. Atendimento às famílias no mês de referência</h2>
        <TableTwoColumns headers={familiasAtendidasHeaders} body={familiasAtendidas} />
        <br />
        <Typography variant="h6" gutterBottom>
          7. A quantidade de visitas domicilares realizadas no mês de referência é
          {' '}
          {services.ccavisitadom}
          {' '}
          pessoa(s)

        </Typography>
        <br />
        <h2>
          8. O número de famílias ou pessoas que buscaram
          atendimento presencial no mês de referência
          devido a alguma vulnerabilidade relacional listada abaixo
        </h2>
        <br />
        <TableTwoColumns headers={familiasVulnerabilidadeHeaders} body={familiasVulnerabilidade} />
        <br />
        <h2>
          9. As atividades
          realizadas com as crianças e adolescentes atendidos pelo serviço no mês
        </h2>
        <br />
        <ListComponent items={atividadesItems} />
        <br />
        <h2>
          10. Os temas discutidos com
          as crianças e adolescentes atendidos pelo serviço no mês
        </h2>
        <br />
        <ListComponent items={temasItems} />
        <br />
        <h2>
          11. Quantidade de crianças e/ou adolescentes incluídos em lista de espera
          (demanda reprimida) no mês de referência
        </h2>
        <br />
        <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />
        <br />
        <h2>
          12. Quantidade de famílias que receberam insumos no mês de referência
        </h2>
        <br />
        <TableTwoColumns headers={familiasInsumosHeaders} body={familiasInsumos} />
        <br />
        <h2>
          13. Quantidade de encaminhamentos realizados pelo serviço no mês de referência:
        </h2>
        <br />
        <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />
        <br />
        <h2>
          14. Quantidade de atendimentos remotos de
          crianças e adolescentes por semana no mês
        </h2>
        <br />
        <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />
        <br />
        <h2>
          15. Quantidade de atividades remotas realizadas no mês,
          pelos meios em que foram disponibilizadas
        </h2>
        <br />
        <TableTwoColumns
          headers={atendimentosRemotosTiposHeaders}
          body={atendimentosRemotosTipos}
        />
        <br />
        <h2>
          16. Quantidade de atendimentos
          remotos de familiares por semana no mês
        </h2>
        <br />
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
