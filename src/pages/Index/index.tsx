import React from 'react';

import ControlledOpenSelect from '../../components/ControlledOpenSelect';

import {
  Title, Header, Options, MyButton,
} from './styles';
import logoImg from '../../assets/logo.svg';

const Index: React.FC = () => (
  <>
    <Header>
      <img src={logoImg} alt="Prefeitura Logo" />
      <Title>Relatório de Informações dos Serviços da Rede de Assistência Social</Title>
    </Header>

    <Options>
      <ControlledOpenSelect label="Escolha uma SAS:" menuItems={['Aricanduva', 'Butantã', 'Centro']} />
      <br />
      <MyButton variant="contained" color="primary" href="/months">Consultar</MyButton>

    </Options>

  </>
);

export default Index;
