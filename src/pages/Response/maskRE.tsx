import React, {
  useState, useEffect, useContext,
} from 'react';

import MoonLoader from 'react-spinners/MoonLoader';

import {
  Section, LoaderBody,
} from './styles';
import { fetchServicesAnswers } from './TableLinesValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableFourColumns from '../../components/TableFourColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import ListComponent from '../../components/ListComponent';
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

const motivosSaidaHeaders = [
  '15 a 17 anos',
  '18 a 21 anos',
];

const familiasInsumosHeaders = ['', 'N° de famílias'];

const familiasVulnerabilidadeHeaders = ['', 'Nº de famílias'];

const atendimentoFamiliaHeaders = ['', 'Nº de famílias'];

const demandaReprimidaHeaders = ['', 'Nº de pessoas'];

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const atendimentosRemotosHeaders = ['', 'Atendimentos Remotos'];

const atendimentosRemotosFamiliaSemanaHeaders = ['Semanas', 'Nº de famílias'];

const Response:any = () => {
  const [services, setServices]:any = useState([]);
  const { context }:any = useContext(infoContext);
  const {
    nomeSAS, mes, token, tipologia,
  } = context;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServicesAnswers({
      nomeSAS, mes, token, tipologia, setServices, setLoading,
    });
  }, []);

  const atendidosMes = [
    createData('15 a 17 anos (M)',
      services['restafluxopessoasate[15a17m_atendmesatual]'],
      services['restafluxopessoasate[15a17m_presmesatual]'],
      services['restafluxopessoasate[15a17m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('15 a 17 anos (F)',
      services['restafluxopessoasate[15a17f_atendmesatual]'],
      services['restafluxopessoasate[15a17f_presmesatual]'],
      services['restafluxopessoasate[15a17f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('18 a 21 anos (M)',
      services['restafluxopessoasate[18a21m_atendmesatual]'],
      services['restafluxopessoasate[18a21m_presmesatual]'],
      services['restafluxopessoasate[18a21m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('18 a 21 anos (F)',
      services['restafluxopessoasate[18a21f_atendmesatual]'],
      services['restafluxopessoasate[18a21f_presmesatual]'],
      services['restafluxopessoasate[18a21f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['restafluxopessoasate[15a17m_atendmesatual]'], 10)
      + parseInt(services['restafluxopessoasate[15a17f_atendmesatual]'], 10)
      + parseInt(services['restafluxopessoasate[18a21m_atendmesatual]'], 10)
      + parseInt(services['restafluxopessoasate[18a21f_atendmesatual]'], 10),
      parseInt(services['restafluxopessoasate[15a17m_presmesatual]'], 10)
      + parseInt(services['restafluxopessoasate[15a17f_presmesatual]'], 10)
      + parseInt(services['restafluxopessoasate[18a21m_presmesatual]'], 10)
      + parseInt(services['restafluxopessoasate[18a21f_presmesatual]'], 10),
      parseInt(services['restafluxopessoasate[15a17m_remmesatual]'], 10)
      + parseInt(services['restafluxopessoasate[15a17f_remmesatual]'], 10)
      + parseInt(services['restafluxopessoasate[18a21m_remmesatual]'], 10)
      + parseInt(services['restafluxopessoasate[18a21f_remmesatual]'], 10),
      1, 1, 1, 1, 1, 1),

  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['restaracasexo[fem_branc]'],
      services['restaracasexo[fem_preto]'],
      services['restaracasexo[fem_pardo]'],
      services['restaracasexo[fem_amarelo]'],
      services['restaracasexo[fem_indigena]'],
      services['restaracasexo[fem_naoinf]'],
      parseInt(services['restaracasexo[fem_branc]'], 10)
      + parseInt(services['restaracasexo[fem_preto]'], 10)
      + parseInt(services['restaracasexo[fem_pardo]'], 10)
      + parseInt(services['restaracasexo[fem_amarelo]'], 10)
      + parseInt(services['restaracasexo[fem_indigena]'], 10)
      + parseInt(services['restaracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['restaracasexo[masc_branc]'],
      services['restaracasexo[masc_preto]'],
      services['restaracasexo[masc_pardo]'],
      services['restaracasexo[masc_amarelo]'],
      services['restaracasexo[masc_indigena]'],
      services['restaracasexo[masc_naoinf]'],
      parseInt(services['restaracasexo[masc_branc]'], 10)
      + parseInt(services['restaracasexo[masc_preto]'], 10)
      + parseInt(services['restaracasexo[masc_pardo]'], 10)
      + parseInt(services['restaracasexo[masc_amarelo]'], 10)
      + parseInt(services['restaracasexo[masc_indigena]'], 10)
      + parseInt(services['restaracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['restaracasexo[masc_branc]'], 10)
      + parseInt(services['restaracasexo[fem_branc]'], 10),
      parseInt(services['restaracasexo[masc_preto]'], 10)
      + parseInt(services['restaracasexo[fem_preto]'], 10),
      parseInt(services['restaracasexo[masc_pardo]'], 10)
      + parseInt(services['restaracasexo[fem_pardo]'], 10),
      parseInt(services['restaracasexo[masc_amarelo]'], 10)
      + parseInt(services['restaracasexo[fem_amarelo]'], 10),
      parseInt(services['restaracasexo[masc_indigena]'], 10)
      + parseInt(services['restaracasexo[fem_indigena]'], 10),
      parseInt(services['restaracasexo[masc_naoinf]'], 10)
      + parseInt(services['restaracasexo[fem_naoinf]'], 10),
      parseInt(services['restaracasexo[masc_branc]'], 10)
      + parseInt(services['restaracasexo[fem_branc]'], 10)
      + parseInt(services['restaracasexo[masc_preto]'], 10)
      + parseInt(services['restaracasexo[fem_preto]'], 10)
      + parseInt(services['restaracasexo[masc_pardo]'], 10)
      + parseInt(services['restaracasexo[fem_pardo]'], 10)
      + parseInt(services['restaracasexo[masc_amarelo]'], 10)
      + parseInt(services['restaracasexo[fem_amarelo]'], 10)
      + parseInt(services['restaracasexo[masc_indigena]'], 10)
      + parseInt(services['restaracasexo[fem_indigena]'], 10)
      + parseInt(services['restaracasexo[masc_naoinf]'], 10)
      + parseInt(services['restaracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const motivosSaida = [
    createData('Mudança de endereço',
      services['restamotivosaida[mudancaendereco_15a17]'],
      services['restamotivosaida[mudancaendereco_18a21]'],
      1, 1, 1, 1, 1, 1, 1),
    createData('Transferência para outro serviço',
      services['restamotivosaida[transferencia_15a17]'],
      services['restamotivosaida[transferencia_18a21]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Óbito',
      services['restamotivosaida[obito_15a17]'],
      services['restamotivosaida[obito_18a21]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Aplicação de medida restritiva de liberdade',
      services['restamotivosaida[aplicacaodemedida_15a17]'],
      services['restamotivosaida[aplicacaodemedida_18a21]'],
      1,
      1,
      1,
      1,
      1,
      1, 1),
    createData('Inserção no Programa Jovem Aprendiz',
      services['restamotivosaida[jovemaprendiz_15a17]'],
      services['restamotivosaida[jovemaprendiz_18a21]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Inserção no mercado de trabalho',
      services['restamotivosaida[insercaotrabalho_15a17]'],
      services['restamotivosaida[insercaotrabalho_18a21]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Conlusão de curso',
      services['restamotivosaida[conclusaocurso_15a17]'],
      services['restamotivosaida[conclusaocurso_18a21]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Total',
      parseInt(services['restamotivosaida[insercaotrabalho_15a17]'], 10)
    + parseInt(services['restamotivosaida[aplicacaodemedida_15a17]'], 10)
    + parseInt(services['restamotivosaida[jovemaprendiz_15a17]'], 10)
    + parseInt(services['restamotivosaida[conclusaocurso_15a17]'], 10)
    + parseInt(services['restamotivosaida[mudancaendereco_15a17]'], 10)
    + parseInt(services['restamotivosaida[obito_15a17]'], 10)
    + parseInt(services['restamotivosaida[transferencia_15a17]'], 10),
      parseInt(services['restamotivosaida[insercaotrabalho_18a21]'], 10)
    + parseInt(services['restamotivosaida[aplicacaodemedida_18a21]'], 10)
    + parseInt(services['restamotivosaida[jovemaprendiz_18a21]'], 10)
    + parseInt(services['restamotivosaida[conclusaocurso_18a21]'], 10)
    + parseInt(services['restamotivosaida[mudancaendereco_18a21]'], 10)
    + parseInt(services['restamotivosaida[obito_18a21]'], 10)
    + parseInt(services['restamotivosaida[transferencia_18a21]'], 10),
      1,
      1,
      1,
      1,
      1,
      1,
      1),

  ];

  const familiasInsumos = [
    createData('Cesta de alimentos', services['restainsumo[cesta]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Kit de material de higiene', services['restainsumo[higiene]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const familiasVulnerabilidade = [
    createData('Conflitos', services['restavulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Preconceitos/discriminação', services['restavulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Abandono', services['restavulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Apartação', services['restavulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Confinamento', services['restavulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Isolamento', services['restavulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Violência', services['restavulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentoFamilia = [
    createData('Nº de famílias atendidas', services['restafamiliaatend[familiasatendtotal_SQ001]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de famílias atendidas remotamente pelo serviço no mê', services['restafamiliaatend[familiasatendremoto_SQ001]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de famílias atendidas presencialmente pelo serviço no mês', services['restafamiliaatend[familiasatendpresenc_SQ001]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de visitas domiciliares realizadas pelo serviço no mês', services['restafamiliaatend[visitasdomiciliares_SQ001]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const temasItems = [
    ['Garantia de direitos sociais (saúde, educação, previdência, moradia, envelhecimento, saúde mental, etc.)', services['restaurantetemas[temadireitossociais]']],
    ['Relacionamento familiar (gravidez na adolescência, álcool e drogas, orientação sexual, aborto, etc.)', services['restaurantetemas[temanutricao]']],
    ['Direitos e programas sociais', services['restaurantetemas[temadireitos]']],
    ['Igualdade entre homens e mulheres', services['restaurantetemas[temaigualdade]']],
    ['Relações étnico-raciais', services['restaurantetemas[temaetnico]']],
    ['Prevenção à violência', services['restaurantetemas[temaprevencaovio]']],
    ['Parentalidade', services['restaurantetemas[temaparental]']],
    ['Deficiência e acessibilidade', services['restaurantetemas[temapcd]']],
    ['Mundo do trabalho', services['restaurantetemas[tematrabalho]']],
  ];
  const demandaReprimida = [
    createData('15 a 17 anos', services['restalistavaga[15a17_aguardandovaga]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('18 a 21 anos', services['restalistavaga[18a21anos_aguardandovaga]'], 1, 1, 1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['restalistavaga[18a21anos_aguardandovaga]'], 10)
      + parseInt(services['restalistavaga[15a17_aguardandovaga]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['restaencaminhamentos[CRAS]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['restaencaminhamentos[CREAS]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['restaencaminhamentos[outrorede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Saúde', services['restaencaminhamentos[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Educação', services['restaencaminhamentos[educacao]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Conselhos de direito', services['restaencaminhamentos[conselho]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['restaencaminhamentos[outrapp]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotos = [
    createData('Semana 1', services['restaatendrempperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['restaatendrempperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['restaatendrempperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['restaatendrempperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['restaatendrempperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['restaatendrempperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];
  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['restaatendremfamperi[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['restaatendremfamperi[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['restaatendremfamperi[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['restaatendremfamperi[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['restaatendremfamperi[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['restaatendremfamperi[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];
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
              1. Quantidade de pessoas atendidas no mês de referência:
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMes} />

            <h2>
              2. Quantidade pessoas atendidas por sexo e raça/cor no mês de referência.
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
            <h2>
              3. Nº de pessoas por motivo de saída do serviço no mês de referência:
            </h2>
            <TableThreeColumns headers={motivosSaidaHeaders} body={motivosSaida} />

            <h2>
              4. Nº de pessoas com deficiência atendidas no mês de referência
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.restausuariospcd, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              5. Nº de pessoas incluídas em lista de espera (
              demanda reprimida) no mês de referência:
            </h2>
            <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />

            <h2>6. Encaminhamentos realizados pelo serviço no mês de referência:</h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              7. Nº de famílias que receberam insumos no mês de referência:
            </h2>
            <TableTwoColumns headers={familiasInsumosHeaders} body={familiasInsumos} />

            <h2>
              8. Quantidade de refeições servidas no espaço no mês de referência
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Refeição/Refeições', services.restarefeicao, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              9. Famílias atendidas no mês de referência:
            </h2>
            <TableTwoColumns headers={atendimentoFamiliaHeaders} body={atendimentoFamilia} />

            <h2>
              10. Indique o número de famílias ou pessoas que
              buscaram atendimento presencial no mês de
              referência devido a alguma vulnerabilidade relacional listada abaixo
            </h2>
            <TableTwoColumns
              headers={familiasVulnerabilidadeHeaders}
              body={familiasVulnerabilidade}
            />

            <h2>
              11. Indique os temas discutidos com as pessoas atendidas
              pelo serviço no mês de referência
            </h2>
            <ListComponent items={temasItems} />

            <h2>
              12. Quantidade de atendimentos remotos de usuários por semana no mês
            </h2>
            <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

            <h2>
              13. Quantidade de atendimentos remotos de familiares por semana no mês
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
