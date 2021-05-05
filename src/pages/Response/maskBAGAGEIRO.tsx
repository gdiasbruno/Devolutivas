import React, {
  useState, useEffect, useContext,
} from 'react';

import MoonLoader from 'react-spinners/MoonLoader';
import { useHistory } from 'react-router-dom';

import {
  Section, LoaderBody,
} from './styles';
import { fetchServicesAnswers, encaminhamentosBAGAGEIRO, sexoRacaCorBAGAGEIRO } from './ServiceValues';

import TableEigthColumns from '../../components/TableEightColumns';
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

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const Response:any = () => {
  const [services, setServices]:any = useState([]);
  const { context }:any = useContext(infoContext);
  const {
    nomeSAS, mes, token, tipologia,
  } = context;
  const history = useHistory();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServicesAnswers({
      nomeSAS, mes, token, tipologia, setServices, setLoading, history,
    });
  }, []);

  const sexoRacaCor = sexoRacaCorBAGAGEIRO({ services, createData });

  const encaminhamentos = encaminhamentosBAGAGEIRO({ services, createData });

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
              1. Número de pessoas que utilizaram o serviço no mês:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Visita(s)', services.bagatendmes, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              2. Quantidade de pessoas atendidas por sexo e raça/cor no mês de referência.
            </h2>
            <TableEigthColumns
              headers={[
                'Branca',
                'Preta',
                'Parda',
                'Amarela',
                'Indígena',
                'Não informada',
                'Total',
              ]}
              body={sexoRacaCor}
            />

            <h2>
              3. Número de boxes utilizados no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Boxe(s)', services.bagbox, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              4. Nº de pessoas que utilizaram o
              serviço Bagageiro e estão vinculadas a um Centro de Acolhida no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoas(s)', services.bagvinca, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              5. Nº de pessoas que receberam atendimento social no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.bagatendsocial, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              6. Nº de pessoas com deficiência atendidas pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.bagpcd, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              7. Encaminhamentos realizados pelo serviço no mês de referência
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />
          </Section>
        </>
      )

  );
};

export default Response;
