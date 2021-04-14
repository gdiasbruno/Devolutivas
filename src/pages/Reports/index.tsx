import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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
  bodyServicesItems: {
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

  const [services, setServices]:any = useState([]);

  const fetchUserProfiles = () => {
    axios.get(`http://localhost:8080/devolutivas/${nomeSAS}/${mes}`).then((res) => {
      setServices(res.data.result);
      console.log(res.data);
    });
  };

  // eslint-disable-next-line camelcase
  const tipologias = services.map((service: { attribute_4: any; }):any => service.attribute_4);
  const uniqueTipologias = [...new Set<any>(tipologias)];

  const [state, setState] = React.useState({ ...uniqueTipologias });
  const { CCA, CEDESP, CDI }:any = state;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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
              history.push('/months');
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
            {uniqueTipologias.map((tipologia:any) => (
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={tipologia}
                    onChange={handleChange}
                    name={tipologia}
                    color="primary"
                  />
)}
                label={tipologia}
              />
            ))}

          </FormGroup>
        </FormControl>
        <div className={classes.bodyServicesItems}>
          <List component="nav" aria-label="main mailbox folders">
            {services.map((service:any) => {
              console.log(service.token);
              return (

                <ListItem
                  button
                  onClick={() => {
                    setContext({
                      nomeSAS,
                      mes,
                      serviceName: service.participant_info.firstname,
                      token: service.token,
                    });
                    // history.push(`/response${service.attribute_4}`);
                    history.push('/responseCDI');
                  }}
                  className={service.attribute_4}
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
