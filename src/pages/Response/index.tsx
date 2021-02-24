import React from 'react';

import Link from '@material-ui/core/Link';

import {
  Title, Header, FirstSection, MyButton,
} from './styles';
import logoImg from '../../assets/logo.svg';

const Response: React.FC = () => (
  <>
    <Header>
      <img src={logoImg} alt="Prefeitura Logo" />
      <Title>Relatório de Informações dos Serviços da Rede de Assistência Social</Title>
    </Header>
    <FirstSection>
      <h2>SAS Aricanduva</h2>
      <Link href="/reports">
        <MyButton variant="contained" color="primary">Voltar</MyButton>
      </Link>
    </FirstSection>

  </>
);

export default Response;
