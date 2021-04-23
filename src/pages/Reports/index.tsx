import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import {
  makeStyles, Theme, createStyles, withStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FilterListIcon from '@material-ui/icons/FilterList';

import { Button } from '@material-ui/core';
import {
  FirstSection, SecondSection, Filter,
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
  filterButton: {
    minHeight: '2rem',
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[900],
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 15,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[600],
    },
  },
  disclaimeMessage: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0',
  },

}));

const Reports: React.FC = () => {
  const classes = useStyles();
  const { context, setContext }:any = React.useContext(infoContext);
  const history = useHistory();
  const { nomeSAS, mes } = context;

  const [services, setServices]:any = useState([]);
  const [servicesFiltered, setServicesFiltered]:any = useState([]);

  const fetchUserProfiles = () => {
    axios.get(`http://localhost:8080/devolutivas/${nomeSAS}/${mes}`).then((res) => {
      setServices(res.data);
      setServicesFiltered(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  let monthString = '';

  if (mes === '0121') {
    monthString = 'Janeiro 2021';
  } else if (mes === '0221') {
    monthString = 'Fevereiro 2021';
  } else if (mes === '0321') {
    monthString = 'Março 2021';
  }

  const handleClickPSB = () => {
    const result = services.filter((service:any) => service.protection === 'PSB');
    setServicesFiltered(result);
    console.log(servicesFiltered);
  };
  const handleClickPSE = () => {
    const result = services.filter((service:any) => service.protection === 'PSE Media');
    setServicesFiltered(result);
    console.log(servicesFiltered);
  };

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

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push('/months');
          }}
        >
          Voltar

        </Button>

      </FirstSection>
      <div className={classes.disclaimeMessage}>
        <h3>
          Os nomes dos serviços constam segundo a
          nomenclatura usada no Formulário de Monitoramento
        </h3>
      </div>
      <SecondSection>
        <Filter>
          <div>
            <FilterListIcon />
            <h2>Filter</h2>
          </div>
          <Button
            variant="contained"
            onClick={handleClickPSB}
            className={classes.filterButton}
          >
            Proteção Básica

          </Button>
          <Button
            variant="contained"
            onClick={handleClickPSE}
            className={classes.filterButton}
          >
            Proteção Especial
          </Button>
          <Button
            variant="contained"
            onClick={() => { setServicesFiltered(services); }}
            className={classes.filterButton}
          >
            Todos
          </Button>
        </Filter>
        <div className={classes.bodyServicesItems}>
          <List component="nav" aria-label="main mailbox folders">
            {servicesFiltered.map((service:any) => (

              <ListItem
                button
                onClick={() => {
                  setContext({
                    nomeSAS,
                    mes,
                    serviceName: service.firstname,
                    token: service.token,
                    tipologia: service.typology.substring(0, 3),
                    distrito: service.district,
                    protecao: service.protection,
                    termo: service.term,
                  });
                  history.push(`/response${service.typology}`);
                }}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={`${service.firstname} `} />
                <h4>{service.typology}</h4>
              </ListItem>

            ))}

          </List>

        </div>
      </SecondSection>

    </>
  );
};

export default Reports;
