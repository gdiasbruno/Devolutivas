import React, {
  useState, useEffect, useContext,
} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import {
  withStyles, Theme,
} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import { Typography } from '@material-ui/core';
import MoonLoader from 'react-spinners/MoonLoader';

import {
  FirstSection, MyButton, Section, LoaderBody,
} from './styles';

import TableEigthColumns from '../../components/TableEightColumns';
import TableNineColumns from '../../components/TableNineColumns';
import TableTenColumns from '../../components/TableTenColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import ListComponent from '../../components/ListComponent';
import HeaderInfo from '../../components/HeaderInfo';
import Navbar from '../../components/Navbar';

import { infoContext } from '../../providers/reactContext';

const StyledBreadcrumb = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[900],
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 15,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
  },
}))(Chip) as typeof Chip;

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
  '60 a 64 anos (M)',
  '60 a 64 anos (F)',
  '65 a 69 anos (M)',
  '65 a 69 anos (F)',
  '70 a 74 anos (M)',
  '70 a 74 anos (F)',
  '75 anos ou mais (M)',
  '75 anos ou mais (F)',
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

const idososMoramSozinhoHeaders = ['', 'Quantidade'];

const infoSobreIdososHeaders = ['', 'Nº de idosos'];

const familiasVulnerabilidadeHeaders = ['', 'Nº de famílias'];

const demandaReprimidaHeaders = ['', 'Nº de adolescentes'];

const idososInsumosHeaders = ['', 'N° de idosos'];

const encaminhamentosHeaders = ['Serviços', 'Encaminhamentos'];

const atendimentosRemotosHeaders = ['', 'Atendimentos Remotos'];

const atendimentosRemotosTiposHeaders = ['Tipos', ''];

const atendimentosRemotosFamiliaSemanaHeaders = ['Semanas', 'Nº de famílias'];

const motivoSaidaHeaders = ['', 'Quantidade'];

const ResponseCRECI:any = () => {
  const [services, setServices]:any = useState([]);
  const { context, setContext }:any = useContext(infoContext);
  const {
    nomeSAS, mes, serviceName, token,
  } = context;
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const tipologia = 'sad';

  const fetchUserProfiles = () => {
    axios.get(`http://localhost:8080/devolutivas/${nomeSAS}/${mes}/${token}/${tipologia}`).then((res) => {
      setServices(res.data);
      console.log(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  const atendidosMes = [
    createData('Nº de pessoas atendidas no mês',
      services['sadpifluxopessoas[atendidos_60a64m]'],
      services['sadpifluxopessoas[atendidos_60a64f]'],
      services['sadpifluxopessoas[atendidos_65a69m]'],
      services['sadpifluxopessoas[atendidos_65a69f]'],
      services['sadpifluxopessoas[atendidos_70a74m]'],
      services['sadpifluxopessoas[atendidos_70a74f]'],
      services['sadpifluxopessoas[atendidos_75maism]'],
      services['sadpifluxopessoas[atendidos_75maisf]'],
      parseInt(services['sadpifluxopessoas[atendidos_60a64m]'], 10)
      + parseInt(services['sadpifluxopessoas[atendidos_60a64f]'], 10)
    + parseInt(services['sadpifluxopessoas[atendidos_65a69m]'], 10)
    + parseInt(services['sadpifluxopessoas[atendidos_65a69f]'], 10)
    + parseInt(services['sadpifluxopessoas[atendidos_70a74m]'], 10)
    + parseInt(services['sadpifluxopessoas[atendidos_70a74f]'], 10)
    + parseInt(services['sadpifluxopessoas[atendidos_75maism]'], 10)
    + parseInt(services['sadpifluxopessoas[atendidos_75maisf]'], 10)),
  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['sadpiracasexo[fem_branca]'],
      services['sadpiracasexo[fem_preta]'],
      services['sadpiracasexo[fem_parda]'],
      services['sadpiracasexo[fem_amarela]'],
      services['sadpiracasexo[fem_indigena]'],
      services['sadpiracasexo[fem_naoinf]'],
      parseInt(services['sadpiracasexo[fem_branca]'], 10)
      + parseInt(services['sadpiracasexo[fem_preta]'], 10)
      + parseInt(services['sadpiracasexo[fem_parda]'], 10)
      + parseInt(services['sadpiracasexo[fem_amarela]'], 10)
      + parseInt(services['sadpiracasexo[fem_indigena]'], 10)
      + parseInt(services['sadpiracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['sadpiracasexo[masc_branca]'],
      services['sadpiracasexo[masc_preta]'],
      services['sadpiracasexo[masc_parda]'],
      services['sadpiracasexo[masc_amarela]'],
      services['sadpiracasexo[masc_indigena]'],
      services['sadpiracasexo[masc_naoinf]'],
      parseInt(services['sadpiracasexo[masc_branca]'], 10)
      + parseInt(services['sadpiracasexo[masc_preta]'], 10)
      + parseInt(services['sadpiracasexo[masc_parda]'], 10)
      + parseInt(services['sadpiracasexo[masc_amarela]'], 10)
      + parseInt(services['sadpiracasexo[masc_indigena]'], 10)
      + parseInt(services['sadpiracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['sadpiracasexo[masc_branca]'], 10)
      + parseInt(services['sadpiracasexo[fem_branca]'], 10),
      parseInt(services['sadpiracasexo[masc_preta]'], 10)
      + parseInt(services['sadpiracasexo[fem_preta]'], 10),
      parseInt(services['sadpiracasexo[masc_parda]'], 10)
      + parseInt(services['sadpiracasexo[fem_parda]'], 10),
      parseInt(services['sadpiracasexo[masc_amarela]'], 10)
      + parseInt(services['sadpiracasexo[fem_amarela]'], 10),
      parseInt(services['sadpiracasexo[masc_indigena]'], 10)
      + parseInt(services['sadpiracasexo[fem_indigena]'], 10),
      parseInt(services['sadpiracasexo[masc_naoinf]'], 10)
      + parseInt(services['sadpiracasexo[fem_naoinf]'], 10),
      parseInt(services['sadpiracasexo[masc_branca]'], 10)
      + parseInt(services['sadpiracasexo[fem_branca]'], 10)
      + parseInt(services['sadpiracasexo[masc_preta]'], 10)
      + parseInt(services['sadpiracasexo[fem_preta]'], 10)
      + parseInt(services['sadpiracasexo[masc_parda]'], 10)
      + parseInt(services['sadpiracasexo[fem_parda]'], 10)
      + parseInt(services['sadpiracasexo[masc_amarela]'], 10)
      + parseInt(services['sadpiracasexo[fem_amarela]'], 10)
      + parseInt(services['sadpiracasexo[masc_indigena]'], 10)
      + parseInt(services['sadpiracasexo[fem_indigena]'], 10)
      + parseInt(services['sadpiracasexo[masc_naoinf]'], 10)
      + parseInt(services['sadpiracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const motivoSaida = [
    createData('Mudança de endereço',
      services['sadpisaida[mudancaendereco_quantidade]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Encaminhado para ILPI',
      services['sadpisaida[ilpi_quantidade]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Óbito',
      services['sadpisaida[obito_quantidade]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Alcance de autonomia',
      services['sadpisaida[autonomia_quantidade]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Resgate de vínculos familiares',
      services['sadpisaida[resgate_quantidade]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['sadpisaida[autonomia_quantidade]'], 10)
      + parseInt(services['sadpisaida[ilpi_quantidade]'], 10)
      + parseInt(services['sadpisaida[obito_quantidade]'], 10)
      + parseInt(services['sadpisaida[mudancaendereco_quantidade]'], 10)
      + parseInt(services['sadpisaida[resgate_quantidade]'], 10),
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];

  const idososMoramSozinho = [
    createData('Quantidade de idosos que moram sozinhos',
      services['sadpiidosossozinho[idososo]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Destes, quantos contam com apoio da família / comunidade',
      services['sadpiidosossozinho[ajudaidosos]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];

  const infoSobreIdosos = [
    createData('Nº de idosos com deficiência atendidos pelo serviço', services['sadpiinfogerais[pcd]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de idosos que recebem BPC', services['sadpiinfogerais[bpc]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Nº de refeições concedidas pelo serviço', services['sadpiinfogerais[refeicao]'], 1, 1, 1, 1, 1, 1, 1, 1),

  ];

  const familiasVulnerabilidade = [
    createData('Conflitos', services['sadpivulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Preconceitos/discriminação', services['sadpivulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Abandono', services['sadpivulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Apartação', services['sadpivulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Confinamento', services['sadpivulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Isolamento', services['sadpivulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Violência', services['sadpivulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
    ['Direitos e programas sociais', services['sadpitema[temadireitos]']],
    ['Segurança alimentar e nutricional', services['sadpitema[temanutricao]']],
    ['Orientações sobre higiene e cuidados pessoais', services['sadpitema[temahigiene]']],
  ];

  const demandaReprimida = [
    createData('60 a 64 anos', services['crescilistaespera[60a64_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('65 a 69 anos', services['crescilistaespera[65a69_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('70 a 74 anos', services['crescilistaespera[70a74_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('75 anos ou mais', services['crescilistaespera[75mais_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['crescilistaespera[60a64_qtdade]'], 10)
      + parseInt(services['crescilistaespera[65a69_qtdade]'], 10)
      + parseInt(services['crescilistaespera[70a74_qtdade]'], 10)
      + parseInt(services['crescilistaespera[75mais_qtdade]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const idososInsumos = [
    createData('Cesta de alimentos', services['creciinsumos[alimentos]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Kit de material de higiene', services['creciinsumos[higiene]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['creciencaminha[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['creciencaminha[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['creciencaminha[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Saúde', services['creciencaminha[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Habitação', services['creciencaminha[hab]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Previdência Social', services['creciencaminha[prev]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Conselhos de direito', services['creciencaminha[direito]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['creciencaminha[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotos = [
    createData('Semana 1', services['crecirempesperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['crecirempesperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['crecirempesperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['crecirempesperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['crecirempesperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['crecirempesperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosTipos = [
    createData('Telefone / Celular / Whatsapp', services['creciremdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Email', services['creciremdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Facebook', services['creciremdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('YouTube', services['creciremdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras redes sociais', services['creciremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Entrega de kits de atividades', services['creciremdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outros', services['creciremdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['creciremfamperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['creciremfamperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['creciremfamperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['creciremfamperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['creciremfamperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['creciremfamperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  let monthString = '';

  if (mes === '0121') {
    monthString = 'Janeiro 2021';
  } else if (mes === '0221') {
    monthString = 'Fevereiro 2021';
  } else if (mes === '0321') {
    monthString = 'Março 2021';
  }

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
              1. Quantidade de pessoas atendidas no mês, por sexo e faixa etária
            </h2>
            <TableTenColumns headers={atendidosMesHeaders} body={atendidosMes} />
            <h2>
              2. Quantidade idosos atendidos no mês, por sexo e raça/cor
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
            <h2>
              3. Quantidade de usuários por motivo de saída do serviço no mês
            </h2>
            <TableTwoColumns headers={motivoSaidaHeaders} body={motivoSaida} />
            <h2>
              4. Informe um valor para as situações apresentadas abaixo
            </h2>
            <TableTwoColumns headers={idososMoramSozinhoHeaders} body={idososMoramSozinho} />

            <br />
            <h2>
              5. Os temas discutidos com as pessoas atendidas pelo serviço no mês de referência
            </h2>
            <ListComponent items={temasItems} />
            <br />
            <h2>
              6. O número de famílias ou pessoas
              que buscaram atendimento presencial no mês
              de referência devido a alguma vulnerabilidade
              relacional
            </h2>
            <TableTwoColumns
              headers={familiasVulnerabilidadeHeaders}
              body={familiasVulnerabilidade}
            />

            <h2>
              7. Quantifique as situações abaixo com os dados do mês de referência:
            </h2>
            <TableTwoColumns headers={infoSobreIdososHeaders} body={infoSobreIdosos} />
          </Section>
        </>
      )
  );
};

export default ResponseCRECI;
