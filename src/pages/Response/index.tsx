import React from 'react';

import {
  withStyles, Theme, createStyles, makeStyles,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

import CloseIcon from '@material-ui/icons/Close';

import { Typography } from '@material-ui/core';
import {
  Title, Header, FirstSection, MyButton, Section,
} from './styles';
import logoImg from '../../assets/logo.svg';

const StyledTableCell = withStyles((theme: Theme) => createStyles({
  head: {
    backgroundColor: '#C4C4C4',
    color: theme.palette.common.black,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme: Theme) => createStyles({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return {
    name, calories, fat, carbs, protein,
  };
}

const rows = [
  createData('6 a 11 anos (M)', 1, 1, 1, 1),
  createData('6 a 11 anos (F)', 1, 1, 1, 1),
  createData('12 a 14 anos (M)', 1, 1, 1, 1),
  createData('12 a 14 anos (F)', 1, 1, 1, 1),
  createData('Total', 4, 4, 4, 4),
];

const rows1 = [
  createData('Mudança de endereço', 1, 1, 1, 1),
  createData('Transferência para outro serviço', 1, 1, 1, 1),
  createData('Óbito', 1, 1, 1, 1),
  createData('Aplicação de medida restritiva de liberdade', 1, 1, 1, 1),
  createData('Limite de idade', 4, 4, 4, 4),
  createData('Total', 4, 4, 4, 4),
];

const rows2 = [
  createData('6 a 11 anos', 1, 1, 1, 1),
  createData('12 a 14 anos', 1, 1, 1, 1),
  createData('Total', 4, 4, 4, 4),
];

const rows3 = [
  createData('Cesta de alimentos', 1, 1, 1, 1),
  createData('Kit de material de higiene', 1, 1, 1, 1),
];

const rows4 = [
  createData('CRAS', 1, 1, 1, 1),
  createData('CREAS', 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', 1, 1, 1, 1),
  createData('Outras políticas públicas', 1, 1, 1, 1),
];

const rows5 = [
  createData('Diário', 1, 1, 1, 1),
  createData('Semanal', 1, 1, 1, 1),
  createData('Quinzenal', 1, 1, 1, 1),
  createData('Mensal Nº de crianças e/ou adolescentes', 1, 1, 1, 1),
  createData('Total', 4, 1, 1, 1),
];

const rows6 = [
  createData('Feminino', 1, 1, 1, 1),
  createData('Masculino', 1, 1, 1, 1),
  createData('Total Geral', 1, 1, 1, 1),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  root: {
    width: '100%',
  },
});

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

const Response: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Prefeitura Logo" />
        <Title>Relatório de Informações dos Serviços da Rede de Assistência Social</Title>
      </Header>

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
        <br />
        <br />
        <br />
        <br />
        <h2>
          Quantidade de crianças e adolescentes atendidos no mês, por faixa etária e sexo
        </h2>
        <br />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell align="center">
                  N° de usuários
                  {' '}
                  <br />
                  atendidos no mês
                </StyledTableCell>
                <StyledTableCell align="center">
                  Nº de usuários que
                  {' '}
                  <br />
                  {' '}
                  frequentaram
                  <br />
                  {' '}
                  presencialmente o serviço
                </StyledTableCell>
                <StyledTableCell align="center">
                  Nº de usuários atendidos
                  {' '}
                  <br />
                  remotamente pelo serviço
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center">{row.calories}</StyledTableCell>
                  <StyledTableCell align="center">{row.fat}</StyledTableCell>
                  <StyledTableCell align="center">{row.carbs}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <br />
        <br />
        <h2>
          Quantidade crianças e adolescentes atendidos no mês, por sexo e raça/cor
        </h2>
        <br />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell align="center">Branca</StyledTableCell>
                <StyledTableCell align="center">Preta</StyledTableCell>
                <StyledTableCell align="center">Parda</StyledTableCell>
                <StyledTableCell align="center">Amarela</StyledTableCell>
                <StyledTableCell align="center">Indígena</StyledTableCell>
                <StyledTableCell align="center">Não informada</StyledTableCell>
                <StyledTableCell align="center">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows6.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.calories}</StyledTableCell>
                  <StyledTableCell align="center">{row.fat}</StyledTableCell>
                  <StyledTableCell align="center">{row.fat}</StyledTableCell>
                  <StyledTableCell align="center">{row.fat}</StyledTableCell>
                  <StyledTableCell align="center">{row.fat}</StyledTableCell>
                  <StyledTableCell align="center">{row.fat}</StyledTableCell>
                  <StyledTableCell align="center">{row.fat}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <br />
        <br />
        <h2>
          Quantidade de crianças e adolescentes por motivo de saída do serviço no mês
        </h2>
        <br />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell align="center">6 a 11 anos</StyledTableCell>
                <StyledTableCell align="center">12 a 14 anos</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.calories}</StyledTableCell>
                  <StyledTableCell align="center">{row.fat}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <br />
        <br />
        <Typography variant="h6" gutterBottom>
          A quantidade de crianças e/ou adolescentes em situação de trabalho
          infantil encaminhadas pelo Cras/Creas no mês de referência é 1 pessoa(s)
        </Typography>
        <br />
        <Typography variant="h6" gutterBottom>
          A quantidade de crianças e adolescentes
          com deficiência atendidos no mês de referência é 1 pessoa(s)

        </Typography>

        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>
          Quantidade de crianças e/ou adolescentes incluídos em lista de espera
          (demanda reprimida) no mês de referência
        </h2>
        <br />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell align="center">Nº de crianças e/ou adolescentes</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.calories}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <br />
        <br />
        <h2>
          Quantidade de famílias que receberam insumos no mês de referência
        </h2>
        <br />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell align="center">N° de famílias</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows3.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.calories}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <br />
        <br />
        <h2>
          Quantidade de encaminhamentos realizados pelo serviço no mês de referência:
        </h2>
        <br />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Serviços</StyledTableCell>
                <StyledTableCell align="center">Encaminhamentos</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows4.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.calories}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <br />
        <br />
        <h2>
          Periodicidade do atendimento remoto às crianças e/ou adolescentes
        </h2>
        <br />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell align="center">Nº de crianças e/ou adolescentes</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows5.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.calories}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <br />
        <br />
        <h2>
          De qual(is) forma(s) as atividades propostas para as crianças e/ou adolescentes
          em atendimento remoto foi(ram) disponibilizada(s)?
        </h2>
        <br />
        <div className={classes.root}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem>
              <ListItemIcon>
                <DoneOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Telefone / Celular / Whatsapp" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Email" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              <ListItemText primary="Youtube" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              <ListItemText primary="Entrega de kits de atividades" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              <ListItemText primary="Outro" />
            </ListItem>
          </List>

        </div>

        <br />
        <br />
        <br />
        <br />
      </Section>
    </>
  );
};

export default Response;
