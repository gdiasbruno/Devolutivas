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
  FirstSection, MyButton, Section,
} from './styles';

import TableFourColumns from '../../components/TableFourColumns';
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

const motivoSaida = [
  createData('Mudança de endereço', 1, 1, 1, 1, 1, 1, 1),
  createData('Transferência para outro serviço', 1, 1, 1, 1, 1, 1, 1),
  createData('Óbito', 1, 1, 1, 1, 1, 1, 1),
  createData('Aplicação de medida restritiva de liberdade', 1, 1, 1, 1, 1, 1, 1),
  createData('Limite de idade', 1, 1, 1, 1, 1, 1, 1),
  createData('Total', 1, 1, 1, 1, 1, 1, 1),
];

const demandaReprimida = [
  createData('6 a 11 anos', 1, 1, 1, 1, 1, 1, 1),
  createData('12 a 14 anos', 1, 1, 1, 1, 1, 1, 1),
  createData('Total', 1, 1, 1, 1, 1, 1, 1),
];

const familiasInsumos = [
  createData('Cesta de alimentos', 1, 1, 1, 1, 1, 1, 1),
  createData('Kit de material de higiene', 1, 1, 1, 1, 1, 1, 1),
];

const encaminhamentos = [
  createData('CRAS', 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', 1, 1, 1, 1, 1, 1, 1),
];

const sexoRacaCor = [
  createData('Feminino', 1, 1, 1, 1, 1, 1, 1),
  createData('Masculino', 1, 1, 1, 1, 1, 1, 1),
  createData('Total Geral', 1, 1, 1, 1, 1, 1, 1),
];

const familiasAtendidas = [
  createData('Nº de famílias atendidas presencialmente no mês', 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de famílias acompanhadas de forma remota no mês', 1, 1, 1, 1, 1, 1, 1),
  createData('Nº total de famílias atendidas no mês', 1, 1, 1, 1, 1, 1, 1),
];

const familiasPresencial = [
  createData('Conflitos', 1, 1, 1, 1, 1, 1, 1),
  createData('Preconceitos/discriminação', 1, 1, 1, 1, 1, 1, 1),
  createData('Abandono', 1, 1, 1, 1, 1, 1, 1),
  createData('Apartação', 1, 1, 1, 1, 1, 1, 1),
  createData('Confinamento', 1, 1, 1, 1, 1, 1, 1),
  createData('Isolamento', 1, 1, 1, 1, 1, 1, 1),
  createData('Violência', 1, 1, 1, 1, 1, 1, 1),
];

const atendimentosRemotos = [
  createData('Semana 1', 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', 1, 1, 1, 1, 1, 1, 1),
];
const atendimentosRemotosFamiliaSemana = [
  createData('Semana 1', 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', 1, 1, 1, 1, 1, 1, 1),
];

const atendimentosRemotosTipos = [
  createData('Telefone / Celular / Whatsapp', 1, 1, 1, 1, 1, 1, 1),
  createData('Email', 1, 1, 1, 1, 1, 1, 1),
  createData('Facebook', 1, 1, 1, 1, 1, 1, 1),
  createData('YouTube', 1, 1, 1, 1, 1, 1, 1),
  createData('Outras redes sociais', 1, 1, 1, 1, 1, 1, 1),
  createData('Entrega de kits de atividades', 1, 1, 1, 1, 1, 1, 1),
  createData('Outros', 1, 1, 1, 1, 1, 1, 1),
];

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

const familiasPresencialHeaders = ['', 'Nº de famílias'];

const demandaReprimidaHeaders = ['', 'Nº de crianças e/ou adolescentes'];

const familiasInsumosHeaders = ['', 'N° de famílias'];

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const atendimentosRemotosHeaders = ['', 'Atendimentos Remotos'];

const atendimentosRemotosTiposHeaders = ['Tipos', ''];

const atendimentosRemotosFamiliaSemanaHeaders = ['Semanas', 'Nº de famílias'];

const atividadesItems = [
  ['Atividades esportivas', true],
  ['Musicalidade (cantar, tocar instrumentos etc.)', false],
  ['Musicalidade (cantar, tocar instrumentos etc.)', false],
  ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', false],
  ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', false],
  ['Atividades de inclusão digital', true],
  ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', false],
  ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', false],
  ['Atividades recreativas (jogos, brincadeiras, etc.)', true],
];

const temasItems = [
  ['Temas transversais (saúde, meio ambiente, cultura, esporte etc.)', true],
  ['Direitos e programas sociais', false],
  ['Segurança alimentar e nutricional', false],
  ['Igualdade entre homens e mulheres', false],
  ['Orientação sexual e de identidade de gênero', false],
  ['Relações étnico-raciais', true],
  ['Prevenção ao uso de álcool e drogas', false],
  ['Prevenção à violência', false],
  ['Parentalidade', true],
  ['Deficiência e acessibilidade', true],
  ['Mundo do trabalho', true],
];

const Response: React.FC = () => {
  const [services, setServices]:any = useState([]);

  const fetchUserProfiles = () => {
    axios.get('http://localhost:8080/devolutivas/SE/0121/12120019').then((res) => {
      setServices(res.data);
      console.log(res.data.responses[0].ccavisitadom);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  const atendidosMes = [
    createData('6 a 11 anos (M)', 1, 1, 1, 1, 1, 1, 1),
    createData('6 a 11 anos (F)', 1, 1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos (M)', 1, 1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos (F)', 1, 1, 1, 1, 1, 1, 1),
    createData('Total', 1, 1, 1, 1, 1, 1, 1),
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

        <TableFourColumns headers={atendidosMesHeaders} body={atendidosMes} />

        <h2>
          2. Quantidade crianças e adolescentes atendidos no mês, por sexo e raça/cor
        </h2>
        <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
        <h2>
          3. Quantidade de crianças e adolescentes por motivo de saída do serviço no mês
        </h2>
        <TableThreeColumns headers={motivoSaidaHeaders} body={motivoSaida} />

        <Typography variant="h6" gutterBottom>
          4. A quantidade de crianças e/ou adolescentes em situação de trabalho
          infantil encaminhadas pelo Cras/Creas no mês de referência é 1 pessoa(s)
        </Typography>

        <Typography variant="h6" gutterBottom>
          5. A quantidade de crianças e adolescentes
          com deficiência atendidos no mês de referência é 1 pessoa(s)

        </Typography>
        <h2>6. Atendimento às famílias no mês de referência</h2>
        <TableTwoColumns headers={familiasAtendidasHeaders} body={familiasAtendidas} />

        <Typography variant="h6" gutterBottom>
          7. A quantidade de visitas domicilares realizadas no mês de referência é 1 pessoa(s)

        </Typography>

        <h2>
          8. O número de famílias ou pessoas que buscaram
          atendimento presencial no mês de referência
          devido a alguma vulnerabilidade relacional listada abaixo
        </h2>
        <TableTwoColumns headers={familiasPresencialHeaders} body={familiasPresencial} />

        <h2>
          9. As atividades
          realizadas com as crianças e adolescentes atendidos pelo serviço no mês
        </h2>

        <ListComponent items={atividadesItems} />

        <h2>
          10. Os temas discutidos com
          as crianças e adolescentes atendidos pelo serviço no mês
        </h2>

        <ListComponent items={temasItems} />

        <h2>
          11. Quantidade de crianças e/ou adolescentes incluídos em lista de espera
          (demanda reprimida) no mês de referência
        </h2>

        <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />

        <h2>
          12. Quantidade de famílias que receberam insumos no mês de referência
        </h2>

        <TableTwoColumns headers={familiasInsumosHeaders} body={familiasInsumos} />

        <h2>
          13. Quantidade de encaminhamentos realizados pelo serviço no mês de referência:
        </h2>

        <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

        <h2>
          14. Quantidade de atendimentos remotos de
          crianças e adolescentes por semana no mês
        </h2>

        <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

        <h2>
          15. Quantidade de atividades remotas realizadas no mês,
          pelos meios em que foram disponibilizadas
        </h2>

        <TableTwoColumns
          headers={atendimentosRemotosTiposHeaders}
          body={atendimentosRemotosTipos}
        />

        <h2>
          Quantidade de atendimentos
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
