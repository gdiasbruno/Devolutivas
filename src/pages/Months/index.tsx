import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import CustomizedBreadcrumbs from '../../components/customizedBreadcrumbs';

import {
  Options, FirstSection, MyButton,
} from './styles';

import { infoContext } from '../../providers/reactContext';

const Months: React.FC = () => {
  const [value, setValue] = React.useState('female');

  const { context, setContext }:any = React.useContext(infoContext);
  const { nomeSAS } = context;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [service, setService]:any = React.useState([]);

  const fetchUserProfiles = () => {
    axios.get(`http://localhost:8080/devolutivas/${nomeSAS}`).then((res) => {
      setService(res.data);
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
    }
    return {
      name: 'Fevereiro 2021',
      index: month,
    };
  });

  const history = useHistory();

  const handleClick = () => {
    setContext({
      nomeSAS: context.nomeSAS,
      mes: value,
    });
    history.push('/reports');
  };

  return (
    <>
      <FirstSection>
        <CustomizedBreadcrumbs label={nomeSAS} />

        <MyButton variant="contained" color="primary" onClick={() => history.push('/')}>Voltar</MyButton>

      </FirstSection>
      <Options>
        <FormControl component="fieldset">
          <FormLabel component="legend">Mês da consulta:</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            {monthsNames.map((month:any) => (
              <FormControlLabel value={month.index} control={<Radio color="primary" />} label={month.name} />
            ))}
          </RadioGroup>
        </FormControl>
        <br />
        <br />
        <MyButton onClick={handleClick} variant="contained" color="primary">Consultar</MyButton>

      </Options>

    </>
  );
};

export default Months;
