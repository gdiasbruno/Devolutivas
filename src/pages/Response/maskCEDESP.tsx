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
import TableFiveColumns from '../../components/TableFiveColumns';
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
  '18 a 29 anos',
  '30 a 59 anos',
  'Total Geral',
];

const familiasInsumosHeaders = ['', 'N° de famílias'];

const familiasVulnerabilidadeHeaders = ['', 'Nº de famílias'];

const atendimentoFamiliaHeaders = ['', 'Nº de famílias'];

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

  useEffect(() => {
    fetchServicesAnswers({
      nomeSAS, mes, token, tipologia, setServices, setLoading,
    });
  }, []);

  const atendidosMesFeminino = [
    createData('15 a 17 anos (F)',
      services['cedesfluxomulheresat[15a17f_atendmesatual]'],
      services['cedesfluxomulheresat[15a17f_presmesatual]'],
      services['cedesfluxomulheresat[15a17f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos (F)',
      services['cedesfluxomulheresat[18a29f_atendmesatual]'],
      services['cedesfluxomulheresat[18a29f_presmesatual]'],
      services['cedesfluxomulheresat[18a29f_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos (F)',
      services['cedesfluxomulheresat[30a59f_atendmesatual]'],
      services['cedesfluxomulheresat[30a59f_presmesatual]'],
      services['cedesfluxomulheresat[30a59f_remmesatual]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['cedesfluxomulheresat[15a17f_atendmesatual]'], 10)
      + parseInt(services['cedesfluxomulheresat[18a29f_atendmesatual]'], 10)
      + parseInt(services['cedesfluxomulheresat[30a59f_atendmesatual]'], 10),
      parseInt(services['cedesfluxomulheresat[15a17f_presmesatual]'], 10)
      + parseInt(services['cedesfluxomulheresat[18a29f_presmesatual]'], 10)
      + parseInt(services['cedesfluxomulheresat[30a59f_presmesatual]'], 10),
      parseInt(services['cedesfluxomulheresat[15a17f_remmesatual]'], 10)
      + parseInt(services['cedesfluxomulheresat[18a29f_remmesatual]'], 10)
      + parseInt(services['cedesfluxomulheresat[30a59f_remmesatual]'], 10),
      1, 1, 1, 1, 1, 1),
  ];

  const atendidosMesMasculino = [
    createData('15 a 17 anos (F)',
      services['cedesfluxohomensaten[15a17m_atendmesatual]'],
      services['cedesfluxohomensaten[15a17m_presmesatual]'],
      services['cedesfluxohomensaten[15a17m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos (F)',
      services['cedesfluxohomensaten[18a29m_atendmesatual]'],
      services['cedesfluxohomensaten[18a29m_presmesatual]'],
      services['cedesfluxohomensaten[18a29m_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos (F)',
      services['cedesfluxohomensaten[30a59m_atendmesatual]'],
      services['cedesfluxohomensaten[30a59m_presmesatual]'],
      services['cedesfluxohomensaten[30a59m_remmesatual]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['cedesfluxohomensaten[15a17m_atendmesatual]'], 10)
      + parseInt(services['cedesfluxohomensaten[18a29m_atendmesatual]'], 10)
      + parseInt(services['cedesfluxohomensaten[30a59m_atendmesatual]'], 10),
      parseInt(services['cedesfluxohomensaten[15a17m_presmesatual]'], 10)
      + parseInt(services['cedesfluxohomensaten[18a29m_presmesatual]'], 10)
      + parseInt(services['cedesfluxohomensaten[30a59m_presmesatual]'], 10),
      parseInt(services['cedesfluxohomensaten[15a17m_remmesatual]'], 10)
      + parseInt(services['cedesfluxohomensaten[18a29m_remmesatual]'], 10)
      + parseInt(services['cedesfluxohomensaten[30a59m_remmesatual]'], 10),
      1, 1, 1, 1, 1, 1),
  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['cedesracasexo[fem_branca]'],
      services['cedesracasexo[fem_preta]'],
      services['cedesracasexo[fem_parda]'],
      services['cedesracasexo[fem_amarela]'],
      services['cedesracasexo[fem_indigena]'],
      services['cedesracasexo[fem_naoinf]'],
      parseInt(services['cedesracasexo[fem_branca]'], 10)
      + parseInt(services['cedesracasexo[fem_preta]'], 10)
      + parseInt(services['cedesracasexo[fem_parda]'], 10)
      + parseInt(services['cedesracasexo[fem_amarela]'], 10)
      + parseInt(services['cedesracasexo[fem_indigena]'], 10)
      + parseInt(services['cedesracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['cedesracasexo[masc_branca]'],
      services['cedesracasexo[masc_preta]'],
      services['cedesracasexo[masc_parda]'],
      services['cedesracasexo[masc_amarela]'],
      services['cedesracasexo[masc_indigena]'],
      services['cedesracasexo[masc_naoinf]'],
      parseInt(services['cedesracasexo[masc_branca]'], 10)
      + parseInt(services['cedesracasexo[masc_preta]'], 10)
      + parseInt(services['cedesracasexo[masc_parda]'], 10)
      + parseInt(services['cedesracasexo[masc_amarela]'], 10)
      + parseInt(services['cedesracasexo[masc_indigena]'], 10)
      + parseInt(services['cedesracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['cedesracasexo[masc_branca]'], 10)
      + parseInt(services['cedesracasexo[fem_branca]'], 10),
      parseInt(services['cedesracasexo[masc_preta]'], 10)
      + parseInt(services['cedesracasexo[fem_preta]'], 10),
      parseInt(services['cedesracasexo[masc_parda]'], 10)
      + parseInt(services['cedesracasexo[fem_parda]'], 10),
      parseInt(services['cedesracasexo[masc_amarela]'], 10)
      + parseInt(services['cedesracasexo[fem_amarela]'], 10),
      parseInt(services['cedesracasexo[masc_indigena]'], 10)
      + parseInt(services['cedesracasexo[fem_indigena]'], 10),
      parseInt(services['cedesracasexo[masc_naoinf]'], 10)
      + parseInt(services['cedesracasexo[fem_naoinf]'], 10),
      parseInt(services['cedesracasexo[masc_branca]'], 10)
      + parseInt(services['cedesracasexo[fem_branca]'], 10)
      + parseInt(services['cedesracasexo[masc_preta]'], 10)
      + parseInt(services['cedesracasexo[fem_preta]'], 10)
      + parseInt(services['cedesracasexo[masc_parda]'], 10)
      + parseInt(services['cedesracasexo[fem_parda]'], 10)
      + parseInt(services['cedesracasexo[masc_amarela]'], 10)
      + parseInt(services['cedesracasexo[fem_amarela]'], 10)
      + parseInt(services['cedesracasexo[masc_indigena]'], 10)
      + parseInt(services['cedesracasexo[fem_indigena]'], 10)
      + parseInt(services['cedesracasexo[masc_naoinf]'], 10)
      + parseInt(services['cedesracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const motivosSaida = [
    createData('Mudança de endereço',
      services['cedessaida[mudancaendereco_15a17]'],
      services['cedessaida[mudancaendereco_18a29]'],
      services['cedessaida[mudancaendereco_30a59]'],
      parseInt(services['cedessaida[mudancaendereco_15a17]'], 10)
      + parseInt(services['cedessaida[mudancaendereco_18a29]'], 10)
      + parseInt(services['cedessaida[mudancaendereco_30a59]'], 10), 1, 1, 1, 1, 1),
    createData('Transferência para outro serviço',
      services['cedessaida[transferencia_15a17]'],
      services['cedessaida[transferencia_18a29]'],
      services['cedessaida[transferencia_30a59]'],
      parseInt(services['cedessaida[transferencia_15a17]'], 10)
      + parseInt(services['cedessaida[transferencia_18a29]'], 10)
      + parseInt(services['cedessaida[transferencia_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Abandono',
      services['cedessaida[aband_15a17]'],
      services['cedessaida[aband_18a29]'],
      services['cedessaida[aband_30a59]'],
      parseInt(services['cedessaida[aband_15a17]'], 10)
      + parseInt(services['cedessaida[aband_18a29]'], 10)
      + parseInt(services['cedessaida[aband_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Óbito',
      services['cedessaida[obito_15a17]'],
      services['cedessaida[obito_18a29]'],
      services['cedessaida[obito_30a59]'],
      parseInt(services['cedessaida[obito_15a17]'], 10)
      + parseInt(services['cedessaida[obito_18a29]'], 10)
      + parseInt(services['cedessaida[obito_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Inserção no Programa Jovem Aprendiz',
      services['cedessaida[programajaprendiz_15a17]'],
      services['cedessaida[programajaprendiz_18a29]'],
      services['cedessaida[programajaprendiz_30a59]'],
      parseInt(services['cedessaida[programajaprendiz_15a17]'], 10)
      + parseInt(services['cedessaida[programajaprendiz_18a29]'], 10)
      + parseInt(services['cedessaida[programajaprendiz_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Inserção no mercado de trabalho',
      services['cedessaida[insertrabalho_15a17]'],
      services['cedessaida[insertrabalho_18a29]'],
      services['cedessaida[insertrabalho_30a59]'],
      parseInt(services['cedessaida[insertrabalho_15a17]'], 10)
      + parseInt(services['cedessaida[insertrabalho_18a29]'], 10)
      + parseInt(services['cedessaida[insertrabalho_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Conclusão de curso',
      services['cedessaida[conclusaocurso_15a17]'],
      services['cedessaida[conclusaocurso_18a29]'],
      services['cedessaida[conclusaocurso_30a59]'],
      parseInt(services['cedessaida[conclusaocurso_15a17]'], 10)
      + parseInt(services['cedessaida[conclusaocurso_18a29]'], 10)
      + parseInt(services['cedessaida[conclusaocurso_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Aplicação de medida restritiva de liberdade',
      services['cedessaida[medrestritiva_15a17]'],
      services['cedessaida[medrestritiva_18a29]'],
      services['cedessaida[medrestritiva_30a59]'],
      parseInt(services['cedessaida[medrestritiva_15a17]'], 10)
      + parseInt(services['cedessaida[medrestritiva_18a29]'], 10)
      + parseInt(services['cedessaida[medrestritiva_30a59]'], 10),
      1,
      1,
      1,
      1, 1),

  ];

  const familiasInsumos = [
    createData('Cesta de alimentos',
      services['cedesinsumos[cestasaliment_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Kit de material de higiene',
      services['cedesinsumos[kithiginene_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const familiasVulnerabilidade = [
    createData('Conflitos', services['cedesvulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Preconceitos/discriminação', services['cedesvulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Abandono', services['cedesvulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Apartação', services['cedesvulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Confinamento', services['cedesvulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Isolamento', services['cedesvulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Violência', services['cedesvulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentoFamilia = [
    createData('Nº de famílias atendidas presencialmente', services['cedesatenfam[ccafampres]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de famílias acompanhadas de forma remota', services['cedesatenfam[ccafamrem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº total de famílias atendidas no mês', services['cedesatenfam[ccafamtotal]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const temasItems = [
    ['Garantia de direitos sociais (saúde, educação, previdência, moradia, envelhecimento, saúde mental, etc.)', services['cedesptemas[temadireitossociais]']],
    ['Relacionamento familiar (gravidez na adolescência, álcool e drogas, orientação sexual, aborto, etc.)', services['cedesptemas[temafamiliar]']],
    ['Direitos e programas sociais', services['cedesptemas[temadireitos]']],
    ['Igualdade entre homens e mulheres', services['cedesptemas[temaigualdade]']],
    ['Relações étnico-raciais', services['cedesptemas[temaetnico]']],
    ['Prevenção à violência', services['cedesptemas[temaprevencaovio]']],
    ['Parentalidade', services['cedesptemas[temaparental]']],
    ['Deficiência e acessibilidade', services['cedesptemas[temapcd]']],
    ['Mundo do trabalho', services['cedesptemas[tematrabalho]']],
  ];

  const demandaReprimida = [
    createData('12 a 17 anos', services['cedeslistaespera[6a11_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos', services['cedeslistaespera[12a14_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos', services['cedeslistaespera[18a29_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['cedeslistaespera[6a11_quantidade]'], 10)
      + parseInt(services['cedeslistaespera[12a14_quantidade]'], 10)
      + parseInt(services['cedeslistaespera[18a29_quantidade]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['cedesencaminhamento[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['cedesencaminhamento[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['cedesencaminhamento[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Saúde', services['cedesencaminhamento[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Educação', services['cedesencaminhamento[educa]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Conselhos de direito', services['cedesencaminhamento[cdireito]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Trabalho e renda', services['cedesencaminhamento[trabalho]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['cedesencaminhamento[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotos = [
    createData('Semana 1', services['cedespesremperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['cedespesremperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['cedespesremperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['cedespesremperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['cedespesremperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['cedespesremperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosTipos = [
    createData('Telefone / Celular / Whatsapp', services['cedesatendremdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Email', services['cedesatendremdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Facebook', services['cedesatendremdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('YouTube', services['cedesatendremdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras redes sociais', services['cedesatendremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Entrega de kits de atividades', services['cedesatendremdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outros', services['cedesatendremdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['cedesfamremperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['cedesfamremperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['cedesfamremperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['cedesfamremperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['cedesfamremperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['cedesfamremperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
              1. Quantidade de pessoas do sexo feminino atendidas no mês, por faixa etária:
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesFeminino} />

            <h2>
              2. Quantidade de pessoas do sexo masculino atendidas no mês, por faixa etária:
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesMasculino} />

            <h2>
              3. Quantidade de pessoas atendidas por sexo e raça/cor no mês de referência:
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <h2>
              4. Quantidade de usuários por motivo de saída do serviço no mês:
            </h2>
            <TableFiveColumns headers={motivosSaidaHeaders} body={motivosSaida} />

            <h2>
              5. Atendimento às famílias no mês:
            </h2>
            <TableTwoColumns headers={atendimentoFamiliaHeaders} body={atendimentoFamilia} />

            <h2>
              6. Quantidade de pessoas com deficiência atendidas no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Pessoa(s)', services.cedespcd, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              7. Quantidade de visitas domicilares realizadas no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Visita(s)', services.cedesvisitadom, 1, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              8. O número de famílias ou pessoas que buscaram atendimento presencial
              no mês de referência devido a alguma vulnerabilidade relacional:
            </h2>
            <TableTwoColumns
              headers={familiasVulnerabilidadeHeaders}
              body={familiasVulnerabilidade}
            />

            <h2>
              9. Os temas discutidos com pessoas atendidas pelo serviço no mês:
            </h2>
            <ListComponent items={temasItems} />

            <h2>
              11. Quantidade de pessoas incluídas em lista de
              espera (demanda reprimida) no mês, por faixa etária:
            </h2>

            <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />

            <h2>
              12. Quantidade de famílias que receberam insumos no mês
            </h2>

            <TableTwoColumns headers={familiasInsumosHeaders} body={familiasInsumos} />

            <h2>
              13. Quantidade de encaminhamentos realizados pelo serviço no mês:
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              14. Quantidade de atendimentos remotos de usuários por semana no mês:
            </h2>
            <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

            <h2>
              15. Quantidade de atividades remotas realizadas no mês,
              pelos meios em que foram disponibilizadas:
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTipos}
            />

            <h2>
              16. Quantidade de atendimentos remotos de familiares por semana no mês:
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
