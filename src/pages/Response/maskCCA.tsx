import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import MoonLoader from 'react-spinners/MoonLoader';

import {
  Section, LoaderBody,
} from './styles';
import {
  fetchServicesAnswers,
  atendidosMesCCA,
  sexoRacaCorCCA,
  motivoSaidaCCA,
  familiasAtendidasCCA,
  familiasVulnerabilidadeCCA,
  atividadesItemsCCA,
  temasItemsCCA,
  demandaReprimidaCCA,
  familiasInsumosCCA,
  encaminhamentosCCA,
  atendimentosRemotosCCA,
  atendimentosRemotosTiposCCA,
  atendimentosRemotosFamiliaSemanaCCA,
} from './TableLinesValues';

import TableFourColumns from '../../components/TableFourColumns';
import TableEigthColumns from '../../components/TableEightColumns';
import TableThreeColumns from '../../components/TableThreeColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import ListComponent from '../../components/ListComponent';
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
) {
  return {
    title, attribute1, attribute2, attribute3, attribute4, attribute5, attribute6, attribute7,
  };
}

const Response: React.FC = () => {
  const [services, setServices]:any = useState([]);
  const { context }:any = useContext(infoContext);
  const {
    nomeSAS, mes, token, tipologia,
  } = context;
  const history = useHistory();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServicesAnswers({
      nomeSAS, mes, token, tipologia, setServices, setLoading,
    });
  }, []);

  const atendidosMes = atendidosMesCCA({ services, createData });

  const sexoRacaCor = sexoRacaCorCCA({ services, createData });

  const motivoSaida = motivoSaidaCCA({ services, createData });

  const familiasAtendidas = familiasAtendidasCCA({ services, createData });

  const familiasVulnerabilidade = familiasVulnerabilidadeCCA({ services, createData });

  const atividadesItems = atividadesItemsCCA({ services, createData });

  const temasItems = temasItemsCCA({ services, createData });

  const demandaReprimida = demandaReprimidaCCA({ services, createData });

  const familiasInsumos = familiasInsumosCCA({ services, createData });

  const encaminhamentos = encaminhamentosCCA({ services, createData });

  const atendimentosRemotos = atendimentosRemotosCCA({ services, createData });

  const atendimentosRemotosTipos = atendimentosRemotosTiposCCA({ services, createData });

  const atendimentosRemotosFamiliaSemana = atendimentosRemotosFamiliaSemanaCCA({
    services, createData,
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
            <TableFourColumns
              headers={[
                'N° de usuários atendidos no mês',
                'Nº de usuários que frequentaram presencialmente o serviço',
                'Nº de usuários atendidos remotamente pelo serviço',
              ]}
              body={atendidosMes}
            />

            <h2>
              2. Quantidade crianças e adolescentes atendidos no mês, por sexo e raça/cor
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
              3. Quantidade de crianças e adolescentes por motivo de saída do serviço no mês
            </h2>
            <TableThreeColumns headers={['6 a 11 anos', '12 a 14 anos']} body={motivoSaida} />

            <h2>
              4. A quantidade de crianças e/ou adolescentes em situação de trabalho
              infantil encaminhadas pelo Cras/Creas no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Crianças(s) e Adolecente(s)', services.ccanovostrabinfantil, 1, 1, 1, 1, 1, 1)]} />

            <br />
            <h2>
              5. A quantidade de crianças e adolescentes
              com deficiência atendidos no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Crianças(s) e Adolecente(s)', services.ccausuariospcd, 1, 1, 1, 1, 1, 1)]} />
            <br />
            <h2>6. Atendimento às famílias no mês de referência</h2>
            <TableTwoColumns headers={['', 'Nº de famílias']} body={familiasAtendidas} />

            <h2>
              7. A quantidade de visitas domicilares realizadas no mês de referência:
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Visita(s)', services.ccavisitadom, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              8. O número de famílias ou pessoas que buscaram
              atendimento presencial no mês de referência
              devido a alguma vulnerabilidade relacional listada abaixo
            </h2>

            <TableTwoColumns
              headers={['', 'Nº de famílias']}
              body={familiasVulnerabilidade}
            />

            <h2>
              9. As atividades
              realizadas com as crianças e adolescentes atendidos pelo serviço no mês
            </h2>

            <ListComponent items={atividadesItems} />

            <h2>
              10. Os temas discutidos com
              as crianças e adolescentes atendidos pelo serviço no mês
            </h2>

            <ListComponent items={temasItems} />
            <br />
            <h2>
              11. Quantidade de crianças e/ou adolescentes incluídos em lista de espera
              (demanda reprimida) no mês de referência
            </h2>

            <TableTwoColumns headers={['', 'Nº de crianças e/ou adolescentes']} body={demandaReprimida} />

            <h2>
              12. Quantidade de famílias que receberam insumos no mês de referência
            </h2>

            <TableTwoColumns headers={['', 'N° de famílias']} body={familiasInsumos} />

            <h2>
              13. Quantidade de encaminhamentos realizados pelo serviço no mês de referência:
            </h2>

            <TableTwoColumns headers={['Serviços', 'Encaminhamentos']} body={encaminhamentos} />

            <h2>
              14. Quantidade de atendimentos remotos de
              crianças e adolescentes por semana no mês
            </h2>

            <TableTwoColumns headers={['', 'Atendimentos Remotos']} body={atendimentosRemotos} />

            <h2>
              15. Quantidade de atividades remotas realizadas no mês,
              pelos meios em que foram disponibilizadas
            </h2>

            <TableTwoColumns
              headers={['Tipos', '']}
              body={atendimentosRemotosTipos}
            />

            <h2>
              16. Quantidade de atendimentos
              remotos de familiares por semana no mês
            </h2>

            <TableTwoColumns
              headers={['Semanas', 'Nº de famílias']}
              body={atendimentosRemotosFamiliaSemana}
            />

          </Section>
        </>
      )
  );
};

export default Response;
