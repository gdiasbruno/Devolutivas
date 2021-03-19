import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ControlledOpenSelect from '../../components/ControlledOpenSelect';

import {
  Title, Header, Options, MyButton,
} from './styles';
import logoImg from '../../assets/logo.svg';

const Index: React.FC = () => {
  const [sas, setSas]:any = useState([]);

  const fetchUserProfiles = () => {
    axios.get('http://localhost:8080/devolutivas/').then((res) => {
      setSas(res.data);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Prefeitura Logo" />
        <Title>Relatório de Informações dos Serviços da Rede de Assistência Social</Title>
      </Header>

      <Options>
        <ControlledOpenSelect label="Escolha uma SAS:" menuItems={sas} />
        <br />
        <br />
        <MyButton variant="contained" color="primary" href="/months">Consultar</MyButton>

      </Options>

    </>
  );
};

export default Index;
