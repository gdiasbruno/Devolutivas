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
  escolarMSE,
  trabalhoMSE,
  residentesMSE,
  entradasMesMSE,
  sexoRacaCorMSE,
  atendidosMesMSE,
  encaminhamentosMSE,
  atendimentosRemotosFamiliaSemanaMSE,
  atendimentosIndividualGrupoMSE,
  entraramAtoInfracionalMSE,
  motivosSaidaMSE,
  visistasTecnicasMSE,
} from './ServiceValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableFourColumns from '../../components/TableFourColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import TableFiveColumns from '../../components/TableFiveColumns';
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
  'PSC',
  'LA',
  'Medida Acumulada - PSC+LA',
  'Segunda Medida',
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

  const atendidosMes = atendidosMesMSE({ services, createData });

  const entradasMes = entradasMesMSE({ services, createData });

  const sexoRacaCor = sexoRacaCorMSE({ services, createData });

  const motivosSaida = motivosSaidaMSE({ services, createData });

  const atendimentosIndividualGrupo = atendimentosIndividualGrupoMSE({ services, createData });

  const visistasTecnicas = visistasTecnicasMSE({ services, createData });

  const residentes = residentesMSE({ services, createData });

  const escolar = escolarMSE({ services, createData });

  const trabalho = trabalhoMSE({ services, createData });

  const entraramAtoInfracional = entraramAtoInfracionalMSE({ services, createData });

  const encaminhamentos = encaminhamentosMSE({ services, createData });

  const atendimentosRemotosFamiliaSemana = atendimentosRemotosFamiliaSemanaMSE({
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
              1. Quantidade de adolescentes e
              jovens atendidos no mês, por faixa etária, sexo e tipo de medida socioeducativa
            </h2>
            <TableFiveColumns headers={atendidosMesHeaders} body={atendidosMes} />

            <h2>
              2. Quantidade adolescentes e jovens atendidos por sexo e raça/cor no mês
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
            <h2>
              3. Quantidade de adolescentes e
              jovens que entraram no serviço
              no mês, por faixa etária, sexo e tipo de medida socioeducativa
            </h2>
            <TableFiveColumns headers={atendidosMesHeaders} body={entradasMes} />

            <h2>
              4. Quantidade de adolescentes e jovens
              que entraram no serviço no mês por tipo de ato infracional praticado
            </h2>

            <TableTwoColumns headers={['', 'Nº de usuários que entraram no mês']} body={entraramAtoInfracional} />

            <h2>
              4.1. Se a opção “Outros” foi preenchida na pergunta
              anterior, especifique quais foram esses atos infracionais
            </h2>
            <TableTwoColumns headers={['', '']} body={[createData('Outros', services.mseatoinfraoutros, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <br />
            <h2>
              5. Quantidade de adolescentes e jovens por motivo de saída do serviço no mês
            </h2>
            <TableFiveColumns headers={atendidosMesHeaders} body={motivosSaida} />
            <br />
            {mes === '0421' ? (
              <>
                <h2>
                  6. Nº de atendimentos realizados no mês de referência:
                </h2>
                <TableThreeColumns headers={['Atendimento Presencial', 'Atendimento remoto']} body={atendimentosIndividualGrupo} />
              </>
            )
              : (
                <>
                  <h2>
                    6. Nº de atendimentos realizados no mês de referência:
                  </h2>
                  <TableTwoColumns headers={['', 'Atendimento Presencial']} body={atendimentosIndividualGrupo} />
                </>

              )}
            <h2>
              6. Nº de atendimentos realizados no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Atendimento Presencial']} body={atendimentosIndividualGrupo} />

            <h2>
              7. Quantidade de oficinas/grupos realizados no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Oficina(s)', services.mseoficina, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              8. Nº de audiências acompanhadas no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Audiência(s)', services.mseaudiencias, 1, 1, 1, 1, 1, 1, 1, 1)]} />
            <h2>
              9. Visitas técnicas para acompanhamento de medidas no mês de referência:
            </h2>
            <TableThreeColumns headers={['Número de adolescentes/jovens', 'Número de visitas realizadas']} body={visistasTecnicas} />

            <h2>
              9.1. Se a opção “Outros” foi preenchida na
              pergunta anterior, especifique no campo abaixo quais foram as visitas técnicas:
            </h2>
            <TableTwoColumns headers={['', '']} body={[createData('Outros', services.mseoutrosvisitatecni, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              10. Número de Reuniões de Articulação da Rede:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Reunião/ões', services.msearticulacao, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              11. Nº de adolescentes e jovens com
              deficiência atendidos pelo serviço no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Adolecente(s) e jovem/ns', services.msepcd, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              12. Quantidade de usuários atendidos no
              mês que também são atendidos em
              serviços de convivência e
              fortalecimento de vínculos (SCFV):
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Usuário(s)', services.msescfv, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              13. Nº de adolescentes e jovens que residem em serviços de acolhimento:
            </h2>

            <TableTwoColumns headers={['', 'Quantidade']} body={residentes} />

            <h2>
              14. Nº de adolescentes e jovens
              atendidos conforme a situação escolar no mês de referência:
            </h2>

            <TableFourColumns
              headers={['12 a 14 anos', '15 a 17 anos', '18 anos ou mais']}
              body={escolar}
            />

            <h2>
              15. Nº de adolescentes e jovens
              atendidos conforme a situação de trabalho no mês de referência:
            </h2>

            <TableFourColumns
              headers={['12 a 14 anos', '15 a 17 anos', '18 anos ou mais']}
              body={trabalho}
            />

            <h2>
              16. Encaminhamentos realizados no mês de referência:
            </h2>

            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              17. Quantidade de atendimentos remotos de familiares por semana no mês
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
