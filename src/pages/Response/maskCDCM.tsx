import React, {
  useState, useEffect, useContext,
} from 'react';
import { useHistory } from 'react-router-dom';

import MoonLoader from 'react-spinners/MoonLoader';

import {
  Section, LoaderBody,
} from './styles';
import {
  fetchServicesAnswers,
  testeCDCM,
  sexoRacaCorCDCM,
  atendidosMesCDCM,
  motivosSaidaCDCM,
  encaminhamentosCDCM,
  visitasReunioesCDCM,
  usuariosOficinasCDCM,
  territorioMoradiaCDCM,
  violenciaAgressorCDCM,
  atendimentoTecnicoCDCM,
  atendimentosRemotosTiposCDCM,
  atendimentosRemotosMulheresCDMC,
  atendimentosRemotosFamiliaSemanaCDCM,
} from './ServiceValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableFourColumns from '../../components/TableFourColumns';
import TableThreeColumns from '../../components/TableThreeColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import TableTenColumns from '../../components/TableTenColumns';
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
  'N° de mulheres atendidas no mês',
  'Nº de mulheres que frequentaram presencialmente o serviço',
  'Nº de mulheres atendidas remotamente pelo serviço',
];

const violenciaAgressorHeaders = [
  'Pai',
  'Padrasto',
  'Esposo / Companheiro',
  'Ex Esposo / Companheiro',
  'Irmão',
  'Empregador',
  'Outros Familiares',
  'Outras Pessoas',
  'Total',

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

const atendimentoTecnicoHeaders = [
  'Presencialmente',
  'Remotamente',
];

const motivosSaidaHeaders = [
  '',
  'Quantidade',
];

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const atendimentosRemotosTiposHeaders = ['Tipos', ''];

const atendimentosRemotosFamiliaSemanaHeaders = ['Semanas', 'Nº de famílias'];

const atendimentosRemotosMulheresHeaders = ['Semanas', 'Nº de mulheres'];

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

  const atendidosMes = atendidosMesCDCM({ services, createData });

  const sexoRacaCor = sexoRacaCorCDCM({ services, createData });

  const violenciaAgressor = violenciaAgressorCDCM({ services, createData });

  const atendimentoTecnico = atendimentoTecnicoCDCM({ services, createData });

  const motivosSaida = motivosSaidaCDCM({ services, createData });

  const territorioMoradia = territorioMoradiaCDCM({ services, createData });

  const usuariosOficinas = usuariosOficinasCDCM({ services, createData });

  const teste = testeCDCM({ services, createData });

  const visitasReunioes = visitasReunioesCDCM({ services, createData });

  const encaminhamentos = encaminhamentosCDCM({ services, createData });

  const atendimentosRemotosTipos = atendimentosRemotosTiposCDCM({ services, createData });

  const atendimentosRemotosFamiliaSemana = atendimentosRemotosFamiliaSemanaCDCM({
    services,
    createData,
  });

  const atendimentosRemotosMulheres = atendimentosRemotosMulheresCDMC({ services, createData });

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
              1. Quantidade de mulheres atendidas no mês, por faixa etária
            </h2>
            <TableFourColumns
              headers={atendidosMesHeaders}
              body={atendidosMes}
            />
            <h2>
              2. Quantidade de mulheres atendidas no mês, por identidade de gênero e raça/cor
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
            <h2>
              3. Perfil do(s) agente(s) agressor(es) e do(s)
              tipo(s) de violência(s) sofrida(s) pelas mulheres atendidas no mês
            </h2>
            <TableTenColumns headers={violenciaAgressorHeaders} body={violenciaAgressor} />

            <h2>
              4. Quantidade de mulheres que receberam atendimento técnico no mês
            </h2>
            <br />
            <TableThreeColumns headers={atendimentoTecnicoHeaders} body={atendimentoTecnico} />
            <h2>
              5. Quantidade de mulheres por motivo de saída do serviço no mês
            </h2>
            <TableTwoColumns headers={motivosSaidaHeaders} body={motivosSaida} />
            <br />
            <h2>6. Território de moradia das pessoas atendidas pelo serviço no mês</h2>
            <TableTwoColumns headers={['', 'Pessoas']} body={territorioMoradia} />

            <h2>
              7. Participação de mulheres em oficinas e grupos no mês
            </h2>
            <TableTwoColumns headers={['', 'Pessoas']} body={usuariosOficinas} />

            <h2>
              8. Visitas domiciliares e n° de reuniões de
              articulação com a rede no mês de referência
            </h2>

            <TableTwoColumns headers={['', 'Pessoas']} body={visitasReunioes} />

            <h2>
              9. A quantidade de mulheres atendidas
              no mês que estão
              em algum Centro de Acolhida
              para Mulheres em Situação de Violência é de
              {' '}
              <strong>{services.cdcmacolhidas}</strong>
              {' '}
              pessoa(s)
            </h2>
            <TableTwoColumns
              headers={['', 'Pessoas']}
              body={teste}
            />

            <br />
            <h2>
              10. A quantidade de mulheres com deficiência atendidas no mês:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Mulher(es)', services.cdcmpcd, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <br />
            <h2>
              11. Encaminhamentos realizados pelo serviço no mês de referência
            </h2>

            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              12. Quantidade de mulheres incluídas
              na lista de espera (demanda reprimida) do serviço no mês:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Mulher(es)', services.cdcmlistaespera, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <br />
            {mes === '0421' ? (
              <>
                <h2>
                  13. Quantidade de atendimentos remotos de mulheres por semana no mês
                </h2>
                <TableTwoColumns
                  headers={atendimentosRemotosMulheresHeaders}
                  body={atendimentosRemotosMulheres}
                />

                <h2>
                  14. Quantidade de atividades remotas realizadas
                  no mês, pelos meios em que foram disponibilizadas
                </h2>
                <TableTwoColumns
                  headers={atendimentosRemotosTiposHeaders}
                  body={atendimentosRemotosTipos}
                />

                <h2>
                  15. Quantidade de atendimentos remotos de familiares por semana no mês
                </h2>
                <TableTwoColumns
                  headers={atendimentosRemotosFamiliaSemanaHeaders}
                  body={atendimentosRemotosFamiliaSemana}
                />

              </>
            ) : (
              <>
                <h2>
                  13. Quantidade de atendimentos remotos de familiares por semana no mês
                </h2>
                <TableTwoColumns
                  headers={atendimentosRemotosFamiliaSemanaHeaders}
                  body={atendimentosRemotosFamiliaSemana}
                />

                <h2>
                  14. Quantidade de atividades remotas realizadas
                  no mês, pelos meios em que foram disponibilizadas
                </h2>
                <TableTwoColumns
                  headers={atendimentosRemotosTiposHeaders}
                  body={atendimentosRemotosTipos}
                />
              </>
            )}
            {/* <h2>
              13. Quantidade de atendimentos remotos de familiares por semana no mês
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosFamiliaSemanaHeaders}
              body={atendimentosRemotosFamiliaSemana}
            />

            <h2>
              14. Quantidade de atividades remotas realizadas
              no mês, pelos meios em que foram disponibilizadas
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTipos}
            /> */}

          </Section>
        </>
      )

  );
};

export default Response;
