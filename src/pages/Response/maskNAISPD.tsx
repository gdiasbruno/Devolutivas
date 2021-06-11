import React, {
  useState, useEffect, useContext,
} from 'react';
import { useHistory } from 'react-router-dom';

import MoonLoader from 'react-spinners/MoonLoader';

import {
  Section, LoaderBody,
} from './styles';

import fetchServicesAnswers from './Request';

import {
  sexoRacaCorNAISPD,
  atendidosMesFemNAISPD,
  encaminhamentosNAISPD,
  situacaoEscolarNAISPD,
  atendidosMesMascNAISPD,
  demandaReprimidaNAISPD,
  territorioMoradiaNAISPD,
  atendidosMesTipoDefNAISPD,
  atendimentosRemotosNAISPD,
  atendimentosRemotosFamiliaSemanaNAISPD,
  atendimentosRemotosTiposDomicilioNAISPD,
  beneficariosBPCNAISPD,
} from './ServiceValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableFourColumns from '../../components/TableFourColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import HeaderInfo from '../../components/HeaderInfo';
import Navbar from '../../components/Navbar';

import { infoContext } from '../../providers/reactContext';

function createData(
  title: string,
  attribute1: number,
  attribute2: number,
  attribute3: number,
  attribute4: number,
  attribute5: number,
  attribute6: number,
  attribute7: number,
  attribute8: number,
  attribute9: number,
) {
  return {
    title,
    attribute1,
    attribute2,
    attribute3,
    attribute4,
    attribute5,
    attribute6,
    attribute7,
    attribute8,
    attribute9,
  };
}

const atendidosMesHeaders = [
  'N° de usuários atendidos no mês',
  'Nº de usuários que frequentaram presencialmente o serviço',
  'Nº de usuários atendidos remotamente pelo serviço',
];

const sexoRacaCorHeaders = [
  'Branca',
  'Preta',
  'Parda',
  'Amarela',
  'Indígena',
  'Não informada',
  'Total',
];

const demandaReprimidaHeaders = ['', 'Nº de pessoas'];

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const atendimentosRemotosHeaders = ['', 'Atendimentos Remotos'];

const atendimentosRemotosTiposHeaders = ['Tipos', ''];

const atendimentosRemotosFamiliaSemanaHeaders = ['Semanas', 'Nº de famílias'];

const Response:any = () => {
  const [services, setServices]:any = useState([]);
  const { context }:any = useContext(infoContext);
  const {
    nomeSAS, mes, token, tipologia,
  } = context;
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetchServicesAnswers({
      nomeSAS, mes, token, tipologia, setServices, setLoading, history,
    });
  }, []);

  const atendidosMesFem = atendidosMesFemNAISPD({ services, createData });

  const atendidosMesMasc = atendidosMesMascNAISPD({ services, createData });

  const sexoRacaCor = sexoRacaCorNAISPD({ services, createData });

  const atendidosMesTipoDef = atendidosMesTipoDefNAISPD({ services, createData });

  const territorioMoradia = territorioMoradiaNAISPD({ services, createData });

  const situacaoEscolar = situacaoEscolarNAISPD({ services, createData });

  const beneficariosBPC = beneficariosBPCNAISPD({ services, createData });

  const demandaReprimida = demandaReprimidaNAISPD({ services, createData });

  const encaminhamentos = encaminhamentosNAISPD({ services, createData });

  const atendimentosRemotos = atendimentosRemotosNAISPD({ services, createData });

  const atendimentosRemotosTiposDomicilio = atendimentosRemotosTiposDomicilioNAISPD({
    services,
    createData,
  });

  const atendimentosRemotosFamiliaSemana = atendimentosRemotosFamiliaSemanaNAISPD({
    services,
    createData,
  });

  return (
    loading
      ? (
        <LoaderBody>
          <MoonLoader color="#3f51b5" size={100} />
        </LoaderBody>
      )
      : (
        <>
          <Navbar />

          <Section>
            <HeaderInfo />
            <h2>
              1. Quantidade de pessoas do sexo feminino
              atendidas pelo serviço no mês, por faixa etária:
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesFem} />

            <h2>
              2. Quantidade de pessoas do sexo masculino
              atendidos pelo serviço no mês, por faixa etária
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesMasc} />

            <br />

            <h2>
              3. Quantidade pessoas atendidas por sexo e raça/cor no mês
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <br />

            <h2>
              4. Quantidade de pessoas atendidas pelo serviço no mês, por tipo de deficiência
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={atendidosMesTipoDef} />
            <br />
            <h2>
              5. Território de moradia das pessoas atendidas pelo serviço no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={territorioMoradia} />
            <br />
            <h2>
              6. Situação escolar das pessoas que foram atendidas pelo serviço no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={situacaoEscolar} />
            <h2>
              7. Quantidade de pessoas atendidas pelo
              serviço no mês que são beneficiárias do BPC - Benefício de Prestação Continuada
            </h2>

            <TableTwoColumns headers={['', 'Quantidade']} body={beneficariosBPC} />

            <h2>
              8. Encaminhamentos realizados pelo serviço no mês
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              9. Quantidade de pessoas incluídas na lista de espera
              (demanda reprimida) do serviço no mês
            </h2>

            <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />

            <h2>
              10. Quantidade de atendimentos remotos de usuários por semana no mês
            </h2>
            <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

            <br />
            <h2>
              11. Quantidade de atividades remotas
              realizadas no mês, pelo meio em que foram disponibilizadas
            </h2>

            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTiposDomicilio}
            />

            <h2>
              12. Quantidade de atendimentos remotos de familiares por semana no mês
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosFamiliaSemanaHeaders}
              body={atendimentosRemotosFamiliaSemana}
            />

          </Section>
        </>
      )

  );
};

export default Response;
