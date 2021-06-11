import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import ControlledOpenSelect from '../../components/ControlledOpenSelect';

import { Options, Text, Text1 } from './styles';

const Index: React.FC = () => {
  const [sas, setSas]:any = useState([]);
  const history = useHistory();

  const fetchUserProfiles = () => {
    axios.get('http://localhost:9091/devolutivas').then((res) => {
      setSas(res.data);
    }).catch((err):any => {
      console.log(err);
      history.push('/Disabled');
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  return (
    <>
      <Options>
        <Text>
          <p>
            Este é o novo
            <strong>
              {' '}
              sistema de consulta dos dados de atendimento da rede
              {' '}
            </strong>
            socioassistencial
            de proteção social básica e de média complexidade da SMADS (exceto SEAS e NPJ).
            <br />
            <br />
            Sua finalidade é dar aos gestores de parcerias e comissão de monitoramento e avaliação
            <strong>
              {' '}
              acesso fácil e ágil aos dados informados mensalmente
              pelos serviços
              {' '}
            </strong>
            por meio do preenchimento do Formulário de Monitoramento da Rede Socioassistencial.
            <br />
            <br />
            Seu manuseio é simples e intuitivo, permitindo, além da consulta por SAS, tipo de
            proteção social,
            unidade de serviço, a impressão do formulário e/ou salvar o documento em computador.
          </p>
        </Text>
        <div>
          <ControlledOpenSelect label="Escolha uma SAS:" menuItems={sas} />
        </div>
        <Text1>
          <p>

            <br />
            <br />
            Por estar ainda em desenvolvimento, críticas e sugestões podem ser enviadas para
            o email
            {' '}
            <strong>
              <a href="mailto:cgpicops@prefeitura.sp.gov.br">
                smagi@prefeitura.sp.gov.br
              </a>
            </strong>

          </p>
        </Text1>
      </Options>
    </>
  );
};

export default Index;
