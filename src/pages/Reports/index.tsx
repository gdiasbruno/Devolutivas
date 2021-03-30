import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Link from '@material-ui/core/Link';
import {
  makeStyles, Theme, createStyles, withStyles,
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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {
  FirstSection, MyButton, SecondSection,
} from './styles';

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
  const { context, setContext }:any = React.useContext(infoContext);
  const history = useHistory();
  const { nomeSAS, mes } = context;

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const { gilad, jason, antoine } = state;

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [services, setServices] = useState([]);

  const fetchUserProfiles = () => {
    axios.get(`http://localhost:8080/devolutivas/${nomeSAS}/${mes}`).then((res) => {
      setServices(res.data.result);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

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
              history.goBack();
            }}
            label={mes === '0121' ? 'Janeiro 2021' : 'Fevereiro 2021'}
          />
          <Typography color="textPrimary">Serviços</Typography>
        </Breadcrumbs>

        <MyButton
          variant="contained"
          color="primary"
          onClick={() => {
            history.push('/months');
          }}
        >
          Voltar

        </MyButton>

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
            {services.map((service:any) => {
              console.log(service.attribute_4);

              return (

                <ListItem
                  button
                  onClick={() => {
                    setContext({
                      nomeSAS,
                      mes,
                      serviceName: service.participant_info.firstname,
                    });
                    history.push('/responsecj');
                  }}
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={service.participant_info.firstname} />
                </ListItem>

              );
            })}

          </List>

        </div>
      </SecondSection>

    </>
  );
};

export default Reports;
