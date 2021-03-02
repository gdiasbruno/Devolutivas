import React from 'react';

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

  return (
    <>
      <Header>
        <img src={logoImg} alt="Prefeitura Logo" />
        <Title>Relatório de Informações dos Serviços da Rede de Assistência Social</Title>
      </Header>
      <FirstSection>
        <CustomizedBreadcrumbs label="Frango" />
        <h2>SAS Aricanduva</h2>
        <Link href="/">
          <MyButton variant="contained" color="primary">Voltar</MyButton>
        </Link>
      </FirstSection>
      <Options>
        <FormControl component="fieldset">
          <FormLabel component="legend">Mês da consulta:</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="female" control={<Radio color="primary" />} label="Novembro/2020" />
            <FormControlLabel value="male" control={<Radio color="primary" />} label="Dezembro/2020" />
            <FormControlLabel value="other" control={<Radio color="primary" />} label="Janeiro/2021" />
          </RadioGroup>
        </FormControl>
        <Link href="/reports">
          <MyButton variant="contained" color="primary">Consultar</MyButton>
        </Link>
      </Options>

    </>
  );
};

export default Months;
