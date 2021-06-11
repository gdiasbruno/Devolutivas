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
  tempoPermaSPVV,
  qtdAtendTecSPVV,
  sexoRacaCorSPVV,
  motivosSaidaSPVV,
  qtdCriAdoMesSPVV,
  secViolenciaSPVV,
  terriMoradiaSPVV,
  princViolenciaSPVV,
  encaminhamentosSPVV,
  atendimentosRemotosSPVV,
  encaminhamentosFinalSPVV,
  atendimentosRemotosFamiliaSemanaSPVV,
} from './ServiceValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableFourColumns from '../../components/TableFourColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import TableSevenColumns from '../../components/TableSevenColumns';
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

const qtdCriAdoMesHeader = [

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

const princViolenciaHeader = [
  'Pai',
  'Mãe',
  'Irmão',
  'Padrasto/Madrasta',
  'Outros familiares',
  'Outras pessoas',
];

const encaminhamentosHeaders = ['Origem', 'Total'];

const tempPermaHeaders = ['', 'Nº de usuários'];

const genericTotalTecHeader = ['', 'Total'];

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

  const qtdCriAdoMes = qtdCriAdoMesSPVV({ services, createData });

  const sexoRacaCor = sexoRacaCorSPVV({ services, createData });

  const princViolencia = princViolenciaSPVV({ services, createData });

  const secViolencia = secViolenciaSPVV({ services, createData });

  const encaminhamentos = encaminhamentosSPVV({ services, createData });

  const qtdAtendTec = qtdAtendTecSPVV({ services, createData });

  const motivosSaida = motivosSaidaSPVV({ services, createData });

  const tempoPerma = tempoPermaSPVV({ services, createData });

  const terriMoradia = terriMoradiaSPVV({ services, createData });

  const encaminhamentosFinal = encaminhamentosFinalSPVV({ services, createData });

  const atendimentosRemotos = atendimentosRemotosSPVV({ services, createData });

  const atendimentosRemotosFamiliaSemana = atendimentosRemotosFamiliaSemanaSPVV({
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
              1. Quantidade de crianças e adolescentes atendidos no mês, por faixa etária e sexo
            </h2>
            <TableFourColumns headers={qtdCriAdoMesHeader} body={qtdCriAdoMes} />

            <br />

            <h2>
              2. Quantidade crianças e adolescentes atendidos no mês, por sexo e raça/cor
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <br />

            <h2>
              3. Principal violência sofrida por cada uma das pessoas que entraram no serviço no mês
            </h2>
            <TableSevenColumns headers={princViolenciaHeader} body={princViolencia} />

            <br />

            <h2>
              4. Forma secundária de violência sofrida pelas pessoas que entraram no serviço no mês
            </h2>
            <TableSevenColumns headers={princViolenciaHeader} body={secViolencia} />

            <br />

            <h2>
              5. Origem dos encaminhamentos realizados
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <br />

            <h2>
              6. Quantidade de pessoas que passaram pelo CREAS antes de serem encaminhados:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Quantidade(s)', services.spvvcreas, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />

            <h2>
              7. Quantidade de pessoas que receberam atendimento técnico no mês
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={qtdAtendTec} />

            <br />

            <h2>
              8. Quantidade de usuários por motivo de saída do serviço no mês
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={motivosSaida} />

            <br />

            <h2>
              9. Número de usuários atendidos no mês por tempo de permanência no serviço
            </h2>
            <TableTwoColumns headers={tempPermaHeaders} body={tempoPerma} />

            <br />

            <h2>
              10. Território de moradia das pessoas atendidas pelo serviço no mês
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={terriMoradia} />

            <br />

            <h2>
              11. Número de casos em acompanhamento jurídico no mês:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Caso(s)', services.spvvacompjur, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />

            <h2>
              12. Quantidade de agressores atendidos pelo serviço no mês:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.spvvagressoratendido, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />

            <h2>
              13. Quantidade de crianças e adolescentes com deficiência atendidas no mês:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Criança(s) e Adolecente(s)', services.spvvpcd, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />

            <h2>
              14. Quantidade de usuários atendidos no mês que também estão acolhidos em SAICAs:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Usuário(s)', services.spvvacolhidos, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />

            <h2>
              15. Usuários que também são atendidos em MSE/MA:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Usuário(s)', services.spvvmse, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />

            <h2>
              16. Usuários que também são atendidos em SCFV:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Usuário(s)', services.spvvscfv, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />

            <h2>
              17. Encaminhamentos realizados pelo serviço no mês de referência
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={encaminhamentosFinal} />

            <br />

            <h2>
              18. Quantidade de atendimentos remotos de crianças e adolescentes por semana no mês
            </h2>
            <TableTwoColumns headers={genericTotalTecHeader} body={atendimentosRemotos} />

            <br />

            <h2>
              19. Quantidade de atendimentos familiares remotos por semana no mês
            </h2>
            <TableTwoColumns
              headers={genericTotalTecHeader}
              body={atendimentosRemotosFamiliaSemana}
            />

            <br />

          </Section>
        </>
      )

  );
};

export default Response;
