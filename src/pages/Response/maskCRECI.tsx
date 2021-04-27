import React, {
  useState, useEffect, useContext,
} from 'react';

import MoonLoader from 'react-spinners/MoonLoader';

import {
  Section, LoaderBody,
} from './styles';
import { fetchServicesAnswers } from './TableLinesValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableNineColumns from '../../components/TableNineColumns';
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
  attribute8: number,
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
  };
}

const atendidosMesHeaders = [
  '60 a 64 anos (M)',
  '60 a 64 anos (F)',
  '65 a 69 anos (M)',
  '65 a 69 anos (F)',
  '70 a 74 anos (M)',
  '70 a 74 anos (F)',
  '75 anos ou mais (M)',
  '75 anos ou mais (F)',
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

const idososMoramSozinhoHeaders = ['', 'Quantidade'];

const infoSobreIdososHeaders = ['', 'Nº de idosos'];

const familiasVulnerabilidadeHeaders = ['', 'Nº de famílias'];

const demandaReprimidaHeaders = ['', 'Nº de adolescentes'];

const idososInsumosHeaders = ['', 'N° de idosos'];

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const atendimentosRemotosHeaders = ['', 'Atendimentos Remotos'];

const atendimentosRemotosTiposHeaders = ['Tipos', ''];

const atendimentosRemotosFamiliaSemanaHeaders = ['Semanas', 'Nº de famílias'];

const ResponseCRECI:any = () => {
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
    createData('Nº de pessoas atendidas no mês',
      services['crecifluxoatend[atendmesatual_60a64m]'],
      services['crecifluxoatend[atendmesatual_60a64f]'],
      services['crecifluxoatend[atendmesatual_65a69m]'],
      services['crecifluxoatend[atendmesatual_65a69f]'],
      services['crecifluxoatend[atendmesatual_70a74m]'],
      services['crecifluxoatend[atendmesatual_70a74f]'],
      services['crecifluxoatend[atendmesatual_75maism]'],
      services['crecifluxoatend[atendmesatual_75maisf]']),

  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['creciracasexo[fem_branca]'],
      services['creciracasexo[fem_preta]'],
      services['creciracasexo[fem_parda]'],
      services['creciracasexo[fem_amarela]'],
      services['creciracasexo[fem_indigena]'],
      services['creciracasexo[fem_naoinf]'],
      parseInt(services['creciracasexo[fem_branca]'], 10)
      + parseInt(services['creciracasexo[fem_preta]'], 10)
      + parseInt(services['creciracasexo[fem_parda]'], 10)
      + parseInt(services['creciracasexo[fem_amarela]'], 10)
      + parseInt(services['creciracasexo[fem_indigena]'], 10)
      + parseInt(services['creciracasexo[fem_naoinf]'], 10), 1),
    createData('Masculino',
      services['creciracasexo[masc_branca]'],
      services['creciracasexo[masc_preta]'],
      services['creciracasexo[masc_parda]'],
      services['creciracasexo[masc_amarela]'],
      services['creciracasexo[masc_indigena]'],
      services['creciracasexo[masc_naoinf]'],
      parseInt(services['creciracasexo[masc_branca]'], 10)
      + parseInt(services['creciracasexo[masc_preta]'], 10)
      + parseInt(services['creciracasexo[masc_parda]'], 10)
      + parseInt(services['creciracasexo[masc_amarela]'], 10)
      + parseInt(services['creciracasexo[masc_indigena]'], 10)
      + parseInt(services['creciracasexo[masc_naoinf]'], 10), 1),
    createData('Total Geral',
      parseInt(services['creciracasexo[masc_branca]'], 10)
      + parseInt(services['creciracasexo[fem_branca]'], 10),
      parseInt(services['creciracasexo[masc_preta]'], 10)
      + parseInt(services['creciracasexo[fem_preta]'], 10),
      parseInt(services['creciracasexo[masc_parda]'], 10)
      + parseInt(services['creciracasexo[fem_parda]'], 10),
      parseInt(services['creciracasexo[masc_amarela]'], 10)
      + parseInt(services['creciracasexo[fem_amarela]'], 10),
      parseInt(services['creciracasexo[masc_indigena]'], 10)
      + parseInt(services['creciracasexo[fem_indigena]'], 10),
      parseInt(services['creciracasexo[masc_naoinf]'], 10)
      + parseInt(services['creciracasexo[fem_naoinf]'], 10),
      parseInt(services['creciracasexo[masc_branca]'], 10)
      + parseInt(services['creciracasexo[fem_branca]'], 10)
      + parseInt(services['creciracasexo[masc_preta]'], 10)
      + parseInt(services['creciracasexo[fem_preta]'], 10)
      + parseInt(services['creciracasexo[masc_parda]'], 10)
      + parseInt(services['creciracasexo[fem_parda]'], 10)
      + parseInt(services['creciracasexo[masc_amarela]'], 10)
      + parseInt(services['creciracasexo[fem_amarela]'], 10)
      + parseInt(services['creciracasexo[masc_indigena]'], 10)
      + parseInt(services['creciracasexo[fem_indigena]'], 10)
      + parseInt(services['creciracasexo[masc_naoinf]'], 10)
      + parseInt(services['creciracasexo[fem_naoinf]'], 10), 1),
  ];

  const idososMoramSozinho = [
    createData('Quantidade de idosos que moram sozinhos',
      services['crecisozinho[idososo]'],
      1,
      1, 1, 1, 1, 1, 1),
    createData('Destes, quantos contam com apoio da família / comunidade',
      services['crecisozinho[ajudaidosos]'],
      1,
      1, 1, 1, 1, 1, 1),
  ];

  const infoSobreIdosos = [
    createData('N° de visitas domiciliares realizadas no mês', services['creciinfoimportantes[visdom]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de idosos que recebem BPC', services['creciinfoimportantes[bpc]'], 1, 1, 1, 1, 1, 1, 1),

  ];

  const familiasVulnerabilidade = [
    createData('Conflitos', services['crecivulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Preconceitos/discriminação', services['crecivulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Abandono', services['crecivulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Apartação', services['crecivulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Confinamento', services['crecivulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Isolamento', services['crecivulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Violência', services['crecivulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1),
  ];

  const atividadesItems = [
    ['Atividades esportivas', services['creciatv[atvesporte]']],
    ['Musicalidade (cantar, tocar instrumentos etc.)', services['creciatv[atvmusica]']],
    ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', services['creciatv[atvcultura]']],
    ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', services['creciatv[atvarte]']],
    ['Atividades de inclusão digital', services['creciatv[atvincdigital]']],
    ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['creciatv[atvlinguagem]']],
    ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['creciatv[atvculinaria]']],
    ['Atividades recreativas (jogos, brincadeiras, etc.)', services['creciatv[atvrecreacao]']],

  ];

  const temasItems = [
    ['Temas transversais (saúde, meio ambiente, cultura, esporte etc.)', services['crecitema[tematransversal]']],
    ['Direitos e programas sociais', services['crecitema[temadireitos]']],
    ['Segurança alimentar e nutricional', services['crecitema[temanutricao]']],
    ['Igualdade entre homens e mulheres', services['crecitema[temaigualdade]']],
    ['Orientação sexual e de identidade de gênero', services['crecitema[temaorientsexual]']],
    ['Relações étnico-raciais', services['crecitema[temaetnico]']],
    ['Prevenção ao uso de álcool e drogas', services['crecitema[temaalccoldrogas]']],
    ['Prevenção à violência', services['crecitema[temaprevencaovio]']],
    ['Parentalidade', services['crecitema[temaparental]']],
    ['Deficiência e acessibilidade', services['crecitema[temapcd]']],
    ['Envelhecimento saudável', services['crecitema[temaenvelhsaudavel]']],
  ];

  const demandaReprimida = [
    createData('60 a 64 anos', services['crescilistaespera[60a64_qtdade]'], 1, 1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos', services['crescilistaespera[65a69_qtdade]'], 1, 1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos', services['crescilistaespera[70a74_qtdade]'], 1, 1, 1, 1, 1, 1, 1),
    createData('75 anos ou mais', services['crescilistaespera[75mais_qtdade]'], 1, 1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['crescilistaespera[60a64_qtdade]'], 10)
      + parseInt(services['crescilistaespera[65a69_qtdade]'], 10)
      + parseInt(services['crescilistaespera[70a74_qtdade]'], 10)
      + parseInt(services['crescilistaespera[75mais_qtdade]'], 10),
      1, 1, 1, 1, 1, 1, 1),
  ];

  const idososInsumos = [
    createData('Cesta de alimentos', services['creciinsumos[alimentos]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Kit de material de higiene', services['creciinsumos[higiene]'], 1, 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['creciencaminha[cras]'], 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['creciencaminha[creas]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['creciencaminha[servicosrede]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Saúde', services['creciencaminha[saude]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Habitação', services['creciencaminha[hab]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Previdência Social', services['creciencaminha[prev]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Conselhos de direito', services['creciencaminha[direito]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['creciencaminha[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotos = [
    createData('Semana 1', services['crecirempesperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['crecirempesperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['crecirempesperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['crecirempesperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['crecirempesperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['crecirempesperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosTipos = [
    createData('Telefone / Celular / Whatsapp', services['creciremdisp[telef]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Email', services['creciremdisp[email]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Facebook', services['creciremdisp[face]'], 1, 1, 1, 1, 1, 1, 1),
    createData('YouTube', services['creciremdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Outras redes sociais', services['creciremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Entrega de kits de atividades', services['creciremdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Outros', services['creciremdisp[outros]'], 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['creciremfamperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['creciremfamperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['creciremfamperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['creciremfamperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['creciremfamperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['creciremfamperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1),
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
              1. Quantidade de idosos atendidos no mês, por faixa etária e sexo:
            </h2>
            <TableNineColumns headers={atendidosMesHeaders} body={atendidosMes} />

            <h2>
              2. Quantidade de idosos atendidos no mês, por sexo e raça/cor:
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <h2>
              3. A quantidade de idosos com deficiência atendidos no mês de referência
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={[createData('Idoso(s)', services.creciusuariospcd, 1, 1, 1, 1, 1, 1, 1)]} />

            <h2>
              4. Quantidade de idosos que moram sozinhos atendidos no mês:
            </h2>
            <TableTwoColumns headers={idososMoramSozinhoHeaders} body={idososMoramSozinho} />

            <h2>
              4. o número de famílias ou pessoas que buscaram atendimento
              presencial no mês de referência devido a alguma vulnerabilidade relacional :
            </h2>

            <TableTwoColumns
              headers={familiasVulnerabilidadeHeaders}
              body={familiasVulnerabilidade}
            />

            <h2>
              5. Quantidade de idosos incluídos na lista de espera
              (demanda reprimida) do serviço no mês:
            </h2>
            <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />

            <h2>
              6. Quantifique as informações abaixo com os dados do mês de referência
            </h2>
            <TableTwoColumns headers={infoSobreIdososHeaders} body={infoSobreIdosos} />

            <h2>
              7. As atividades realizadas com os idosos atendidas no mês pelo serviço
            </h2>
            <ListComponent items={atividadesItems} />

            <h2>
              8. Os temas discutidos com os idosos atendidos no mês pelo serviço:
            </h2>
            <ListComponent items={temasItems} />

            <h2>
              9. Encaminhamentos realizados pelo serviço no mês:
            </h2>

            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              10. Quantidade de idosos que receberam insumos no mês:
            </h2>
            <TableTwoColumns headers={idososInsumosHeaders} body={idososInsumos} />

            <h2>
              11. Quantidade de atendimentos remotos de usuários por semana no mês:
            </h2>
            <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

            <h2>
              12. Quantidade de atividades remotas realizadas no mês,
              pelos meios em que foram disponibilizadas:
            </h2>
            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTipos}
            />

            <h2>
              13. Quantidade de atendimentos remotos de familiares por semana no mês:
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

export default ResponseCRECI;
