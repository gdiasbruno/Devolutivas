import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MoonLoader from 'react-spinners/MoonLoader';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

import {
  makeStyles, Theme, createStyles,
} from '@material-ui/core/styles';

import CustomizedBreadcrumbs from '../../components/customizedBreadcrumbs';

import {
  Options, FirstSection, MyButton, LoaderBody,
} from './styles';

import { infoContext } from '../../providers/reactContext';

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
  buttonIcon: {
    marginRight: '10px',
  },
  button: {
    marginRight: '10px',
  },

}));

const Months: React.FC = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState('0121');

  const { context, setContext }:any = React.useContext(infoContext);
  const { nomeSAS } = context;

  const [loading, setLoading] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [service, setService]:any = React.useState([]);

  const fetchUserProfiles = () => {
    axios.get(`http://10.13.25.51:9090/devolutivas/${nomeSAS}`).then((res) => {
      setService(res.data);
      setLoading(false);
    });
  };

  React.useEffect(() => {
    fetchUserProfiles();
  }, []);

  const monthsNames = service.map((month:any) => {
    const monthString = month.toString();
    if (monthString === '0121') {
      return {
        name: 'Janeiro 2021',
        index: month,
      };
    } if (monthString === '0221') {
      return {
        name: 'Fevereiro 2021',
        index: month,
      };
    }
    return null;
  });

  const monthsFiltered = monthsNames.filter((month:any) => month !== null);

  const history = useHistory();

  const handleClick = () => {
    setContext({
      nomeSAS: context.nomeSAS,
      mes: value,
    });
    history.push('/reports');
  };

  return (
    loading
      ? (
        <LoaderBody>
          <MoonLoader color="#3f51b5" size={100} />
        </LoaderBody>
      )
      : (
        <>
          <FirstSection>
            <CustomizedBreadcrumbs label={nomeSAS} />

          </FirstSection>
          <Options>
            <FormControl component="fieldset">
              <FormLabel component="legend">Mês da consulta:</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                {
              monthsFiltered.map((month:any) => (
                <FormControlLabel value={month.index} control={<Radio color="primary" />} label={month.name} />
              ))
            }
              </RadioGroup>
            </FormControl>
            <br />
            <br />
            <div>
              <MyButton className={classes.button} variant="outlined" color="primary" onClick={() => history.push('/')}>
                <ArrowBackOutlinedIcon className={classes.buttonIcon} />
                Voltar

              </MyButton>
              <MyButton onClick={handleClick} variant="contained" color="primary">Consultar</MyButton>
            </div>

          </Options>

        </>
      )
  );
};

export default Months;
