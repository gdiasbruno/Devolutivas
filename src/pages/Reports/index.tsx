import React from 'react';
import Link from '@material-ui/core/Link';
import {
  makeStyles, Theme, createStyles,
} from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {
  Title, Header, FirstSection, MyButton, SecondSection,
} from './styles';
import logoImg from '../../assets/logo.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  formControl: {
    margin: theme.spacing(5),
  },
  root: {
    minWidth: 100,

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
        <h2>SAS Aricanduva</h2>
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
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.subtitle}>
              CCA JARDIM DAS ROSAS
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" href="/response" color="secondary">Ver respostas</Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.subtitle}>
              CCA ARICANDUVA - ESPAÇO DA COMUNIDADE I
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" href="/response" color="secondary">Ver respostas</Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.subtitle}>
              CTA - CENTRO TEMPORÁRIO DE ATENDIMENTO - CTA ARICANDUVA
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" href="/response" color="secondary">Ver respostas</Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.subtitle}>
              MSE DOM LUCIANO
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" href="/response" color="secondary">Ver respostas</Button>
          </CardActions>
        </Card>

      </SecondSection>

    </>
  );
};

export default Reports;
