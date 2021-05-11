import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Title } from './styles';

import logoImg from '../assets/logo.svg';

function HeaderComponent(): JSX.Element {
  return (
    <Header>
      <Link to="/">
        <img src={logoImg} alt="Prefeitura Logo" />
      </Link>
      <Title>Relatório de Monitoramento dos Serviços da Rede de Assistência Social</Title>
    </Header>
  );
}

export default HeaderComponent;
