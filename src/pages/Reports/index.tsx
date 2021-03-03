import React from 'react';
import Link from '@material-ui/core/Link';
import {
  makeStyles, Theme, createStyles, withStyles, emphasize,
} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';

import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {
  Title, Header, FirstSection, MyButton, SecondSection,
} from './styles';
import logoImg from '../../assets/logo.svg';

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

const useStyles = makeStyles((theme: Theme) => createStyles({
  formControl: {
    margin: theme.spacing(5),
  },
  root: {
    minWidth: 100,

  },
  root1: {
    width: '100%',
    maxWidth: 1200,
    flex: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    maxHeight: 250,
    margin: '5px',
  },
  subtitle: {
    fontWeight: 'bold',
    maxWidth: '200px',
  },
}));

const Reports: React.FC = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const { gilad, jason, antoine } = state;

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
          <Typography color="textPrimary">Serviços</Typography>
        </Breadcrumbs>
        <Link href="/months">
          <MyButton variant="contained" color="primary">Voltar</MyButton>
        </Link>
      </FirstSection>
      <SecondSection>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Escolha o(s) Tipo(s) de Serviço</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={gilad} onChange={handleChange1} name="gilad" color="primary" />}
              label="CCA"
            />
            <FormControlLabel
              control={<Checkbox checked={jason} onChange={handleChange1} name="jason" color="primary" />}
              label="CTA"
            />
            <FormControlLabel
              control={<Checkbox checked={antoine} onChange={handleChange1} name="antoine" color="primary" />}
              label="MSE"
            />
          </FormGroup>
        </FormControl>
        <div className={classes.root1}>
          <List component="nav" aria-label="main mailbox folders">
            <Link href="/response">
              <ListItem button href="/response">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="CCA JARDIM DAS ROSAS" />
              </ListItem>
            </Link>
            <Link href="/response">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="MSE DOM LUCIANO" />
              </ListItem>
            </Link>
            <Link href="/response">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="CTA - CENTRO TEMPORÁRIO DE ATENDIMENTO - CTA ARICANDUVA" />
              </ListItem>
            </Link>
            <Link href="/response">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="CCA ARICANDUVA - ESPAÇO DA COMUNIDADE I" />
              </ListItem>
            </Link>

          </List>

        </div>
      </SecondSection>

    </>
  );
};

export default Reports;
