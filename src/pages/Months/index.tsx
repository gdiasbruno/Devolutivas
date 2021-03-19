import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Link from '@material-ui/core/Link';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import CustomizedBreadcrumbs from '../../components/customizedBreadcrumbs';

import {
  Title, Header, Options, FirstSection, MyButton,
} from './styles';
import logoImg from '../../assets/logo.svg';

const Months: React.FC = () => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [service, setService]:any = React.useState([]);

  const fetchUserProfiles = () => {
    axios.get('http://localhost:8080/devolutivas/SE').then((res) => {
      setService(res.data);
      console.log(res);
    });
  };

  React.useEffect(() => {
    fetchUserProfiles();
  }, []);

  const monthsNames = service.map((month:any) => {
    const monthString = month.toString();
    if (monthString === '0121') {
      return 'Janeiro/2021';
    }
    return 'Fevereiro/2021';
  });

  const history = useHistory();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Prefeitura Logo" />
        <Title>Relatório de Informações dos Serviços da Rede de Assistência Social</Title>
      </Header>
      <FirstSection>
        <CustomizedBreadcrumbs label="SAS Aricanduva" />

        <MyButton variant="contained" color="primary" onClick={() => history.goBack()}>Voltar</MyButton>

      </FirstSection>
      <Options>
        <FormControl component="fieldset">
          <FormLabel component="legend">Mês da consulta:</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            {monthsNames.map((month:any) => (
              <FormControlLabel value={month} control={<Radio color="primary" />} label={month} />
            ))}
          </RadioGroup>
        </FormControl>
        <br />
        <br />
        <MyButton variant="contained" color="primary" href="/reports">Consultar</MyButton>

      </Options>

    </>
  );
};

export default Months;
