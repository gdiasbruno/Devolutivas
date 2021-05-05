import React, {
  useState, useEffect, useContext,
} from 'react';

import MoonLoader from 'react-spinners/MoonLoader';

import { useHistory } from 'react-router-dom';
import {
  Section, LoaderBody,
} from './styles';
import {
  fetchServicesAnswers,
  sexoRacaCorCDI,
  motivosSaidaCDI,
  encaminhamentosCDI,
  atendimentoTecnicoCDI,
  atendimentosRemotosCDI,
  atendidosMesFemininoCDI,
  atendidosMesMasculinoCDI,
  usuarioGrauDependenciaCDI,
  atendimentosRemotosTiposCDI,
  atendimentoTecnicoFamiliasCDI,
  atendimentosRemotosFamiliaSemanaCDI,
} from './ServiceValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableFourColumns from '../../components/TableFourColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import HeaderInfo from '../../components/HeaderInfo';
import Navbar from '../../components/Navbar';

import { infoContext } from '../../providers/reactContext';
import TableThreeColumns from '../../components/TableThreeColumns';

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
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServicesAnswers({
      nomeSAS, mes, token, tipologia, setServices, setLoading, history,
    });
  }, []);

  const atendidosMesFeminino = atendidosMesFemininoCDI({ services, createData });

  const atendidosMesMasculino = atendidosMesMasculinoCDI({ services, createData });

  const sexoRacaCor = sexoRacaCorCDI({ services, createData });

  const motivosSaida = motivosSaidaCDI({ services, createData });

  const atendimentoTecnico = atendimentoTecnicoCDI({ services, createData });

  const atendimentoTecnicoFamilias = atendimentoTecnicoFamiliasCDI({ services, createData });

  const usuarioGrauDependencia = usuarioGrauDependenciaCDI({ services, createData });

  const encaminhamentos = encaminhamentosCDI({ services, createData });

  const atendimentosRemotos = atendimentosRemotosCDI({ services, createData });

  const atendimentosRemotosTipos = atendimentosRemotosTiposCDI({ services, createData });

  const atendimentosRemotosFamiliaSemana = atendimentosRemotosFamiliaSemanaCDI({
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
              1. Quantidade de pessoas do sexo masculino atendidas pelo serviço no mês de referência
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesMasculino} />

            <h2>
              2. Quantidade de pessoas do sexo feminino atendidos pelo serviço no mês de referência
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesFeminino} />
            <h2>
              3. Quantidade idosos atendidos no mês, por sexo e raça/cor
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
            <h2>
              4. Quantidade de idosos por motivo de saída do serviço no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={motivosSaida} />
            <br />

            <h2>
              5. Quantidade de pessoas que receberam atendimento técnico no mês de referência
            </h2>
            <TableThreeColumns headers={['Presencialmente', 'Remotamente']} body={atendimentoTecnico} />
            <br />
            <h2>
              6. Quantidade de famílias que receberam
              atendimento técnico no mês de referência
            </h2>
            <TableThreeColumns headers={['Presencialmente', 'Remotamente']} body={atendimentoTecnicoFamilias} />
            <h2>
              7. Quantidade de pessoas atendidas
              pelo serviço com algum grau de dependência, no mês de referência
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={usuarioGrauDependencia} />
            <h2>
              8. Quantidade de visitas domicilares realizadas no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Visita(s)', services.cdivisdom, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              9. Quantidade de pessoas beneficiárias do BPC
              atendidas pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.cdibpc, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              10. Quantidade de usuários que utilizaram
              o transporte ofertado pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Usuário(s)', services.cditransporte, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              11. N° de pessoas que recebem lanche tipo 2 no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.cdilanche2, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              12. Quantidade de pessoas atendidas com dietas especiais no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.cdidieta, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              13. N° de oficinas realizadas no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Oficina(s)', services.cdioficina, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              14. Encaminhamentos realizados pelo serviço no mês de referência
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              15. Quantidade de atendimentos remotos dos usuários por semana no mês
            </h2>
            <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

            <h2>
              16. Quantidade de atividades remotas
              realizadas no mês, pelos meios em que foram disponibilizadas
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTipos}
            />

            <h2>
              17. Quantidade de atendimentos remotos dos familiares por semana no mês
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
