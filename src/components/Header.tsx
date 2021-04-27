import React from 'react';

import { Header, Title } from './styles';

import logoImg from '../assets/logo.svg';

function HeaderComponent(): JSX.Element {
  return (
    <Header>
      <img src={logoImg} alt="Prefeitura Logo" />
      <Title>Relatório de Monitoramento dos Serviços da Rede de Assistência Social</Title>
    </Header>
  );
}

export default HeaderComponent;
