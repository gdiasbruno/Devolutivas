import React, {
  useState, useEffect, useContext,
} from 'react';
import { useHistory } from 'react-router-dom';

import MoonLoader from 'react-spinners/MoonLoader';

import {
  Section, LoaderBody,
} from './styles';
import { fetchServicesAnswers } from './TableLinesValues';

import TableEigthColumns from '../../components/TableEightColumns';
import TableFourColumns from '../../components/TableFourColumns';
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

  const atendidosMesFem = [
    createData('0 a 5 anos (F)',
      services['naisatenfxetariafem[0a5f_atendmesatual]'],
      services['naisatenfxetariafem[0a5f_atendpres]'],
      services['naisatenfxetariafem[0a5f_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('6 a 11 anos (F)',
      services['naisatenfxetariafem[6a11f_atendmesatual]'],
      services['naisatenfxetariafem[6a11f_atendpres]'],
      services['naisatenfxetariafem[6a11f_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos (F)',
      services['naisatenfxetariafem[12a14f_atendmesatual]'],
      services['naisatenfxetariafem[12a14f_atendpres]'],
      services['naisatenfxetariafem[12a14f_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('15 a 17 anos (F)',
      services['naisatenfxetariafem[15a17f_atendmesatual]'],
      services['naisatenfxetariafem[15a17f_atendpres]'],
      services['naisatenfxetariafem[15a17f_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos (F)',
      services['naisatenfxetariafem[18a29f_atendmesatual]'],
      services['naisatenfxetariafem[18a29f_atendpres]'],
      services['naisatenfxetariafem[18a29f_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos (F)',
      services['naisatenfxetariafem[30a59f_atendmesatual]'],
      services['naisatenfxetariafem[30a59f_atendpres]'],
      services['naisatenfxetariafem[30a59f_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('60 anos ou mais (F)',
      services['naisatenfxetariafem[60maisf_atendmesatual]'],
      services['naisatenfxetariafem[60maisf_atendpres]'],
      services['naisatenfxetariafem[60maisf_atendrem]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['naisatenfxetariafem[0a5f_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariafem[6a11f_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariafem[12a14f_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariafem[15a17f_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariafem[18a29f_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariafem[30a59f_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariafem[60maisf_atendmesatual]'], 10),
      parseInt(services['naisatenfxetariafem[0a5f_atendpres]'], 10)
      + parseInt(services['naisatenfxetariafem[6a11f_atendpres]'], 10)
      + parseInt(services['naisatenfxetariafem[12a14f_atendpres]'], 10)
      + parseInt(services['naisatenfxetariafem[15a17f_atendpres]'], 10)
      + parseInt(services['naisatenfxetariafem[18a29f_atendpres]'], 10)
      + parseInt(services['naisatenfxetariafem[30a59f_atendpres]'], 10)
      + parseInt(services['naisatenfxetariafem[60maisf_atendpres]'], 10),
      parseInt(services['naisatenfxetariafem[0a5f_atendrem]'], 10)
      + parseInt(services['naisatenfxetariafem[6a11f_atendrem]'], 10)
      + parseInt(services['naisatenfxetariafem[12a14f_atendrem]'], 10)
      + parseInt(services['naisatenfxetariafem[15a17f_atendrem]'], 10)
      + parseInt(services['naisatenfxetariafem[18a29f_atendrem]'], 10)
      + parseInt(services['naisatenfxetariafem[30a59f_atendrem]'], 10)
      + parseInt(services['naisatenfxetariafem[60maisf_atendrem]'], 10),
      1, 1, 1, 1, 1, 1),
  ];

  const atendidosMesMasc = [
    createData('0 a 5 anos (M)',
      services['naisatenfxetariamasc[0a5m_atendmesatual]'],
      services['naisatenfxetariamasc[0a5m_atendpres]'],
      services['naisatenfxetariamasc[0a5m_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('6 a 11 anos (M)',
      services['naisatenfxetariamasc[6a11m_atendmesatual]'],
      services['naisatenfxetariamasc[6a11m_atendpres]'],
      services['naisatenfxetariamasc[6a11m_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos (M)',
      services['naisatenfxetariamasc[12a14m_atendmesatual]'],
      services['naisatenfxetariamasc[12a14m_atendpres]'],
      services['naisatenfxetariamasc[12a14m_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('15 a 17 anos (M)',
      services['naisatenfxetariamasc[15a17m_atendmesatual]'],
      services['naisatenfxetariamasc[15a17m_atendpres]'],
      services['naisatenfxetariamasc[15a17m_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos (M)',
      services['naisatenfxetariamasc[18a29m_atendmesatual]'],
      services['naisatenfxetariamasc[18a29m_atendpres]'],
      services['naisatenfxetariamasc[18a29m_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos (M)',
      services['naisatenfxetariamasc[30a59m_atendmesatual]'],
      services['naisatenfxetariamasc[30a59m_atendpres]'],
      services['naisatenfxetariamasc[30a59m_atendrem]'],
      1, 1, 1, 1, 1, 1),
    createData('60 anos ou mais (M)',
      services['naisatenfxetariamasc[60maism_atendmesatual]'],
      services['naisatenfxetariamasc[60maism_atendpres]'],
      services['naisatenfxetariamasc[60maism_atendrem]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['naisatenfxetariamasc[0a5m_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariamasc[6a11m_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariamasc[12a14m_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariamasc[15a17m_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariamasc[18a29m_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariamasc[30a59m_atendmesatual]'], 10)
      + parseInt(services['naisatenfxetariamasc[60maism_atendmesatual]'], 10),
      parseInt(services['naisatenfxetariamasc[0a5m_atendpres]'], 10)
      + parseInt(services['naisatenfxetariamasc[6a11m_atendpres]'], 10)
      + parseInt(services['naisatenfxetariamasc[12a14m_atendpres]'], 10)
      + parseInt(services['naisatenfxetariamasc[15a17m_atendpres]'], 10)
      + parseInt(services['naisatenfxetariamasc[18a29m_atendpres]'], 10)
      + parseInt(services['naisatenfxetariamasc[30a59m_atendpres]'], 10)
      + parseInt(services['naisatenfxetariamasc[60maism_atendpres]'], 10),
      parseInt(services['naisatenfxetariamasc[0a5m_atendrem]'], 10)
      + parseInt(services['naisatenfxetariamasc[6a11m_atendrem]'], 10)
      + parseInt(services['naisatenfxetariamasc[12a14m_atendrem]'], 10)
      + parseInt(services['naisatenfxetariamasc[15a17m_atendrem]'], 10)
      + parseInt(services['naisatenfxetariamasc[18a29m_atendrem]'], 10)
      + parseInt(services['naisatenfxetariamasc[30a59m_atendrem]'], 10)
      + parseInt(services['naisatenfxetariamasc[60maism_atendrem]'], 10),
      1, 1, 1, 1, 1, 1),

  ];

  const sexoRacaCor = [
    createData('Feminino',
      services['naisracasexo[fem_branca]'],
      services['naisracasexo[fem_preta]'],
      services['naisracasexo[fem_parda]'],
      services['naisracasexo[fem_amarela]'],
      services['naisracasexo[fem_indigena]'],
      services['naisracasexo[fem_naoinf]'],
      parseInt(services['naisracasexo[fem_branca]'], 10)
      + parseInt(services['naisracasexo[fem_preta]'], 10)
      + parseInt(services['naisracasexo[fem_parda]'], 10)
      + parseInt(services['naisracasexo[fem_amarela]'], 10)
      + parseInt(services['naisracasexo[fem_indigena]'], 10)
      + parseInt(services['naisracasexo[fem_naoinf]'], 10), 1, 1),
    createData('Masculino',
      services['naisracasexo[masc_branca]'],
      services['naisracasexo[masc_preta]'],
      services['naisracasexo[masc_parda]'],
      services['naisracasexo[masc_amarela]'],
      services['naisracasexo[masc_indigena]'],
      services['naisracasexo[masc_naoinf]'],
      parseInt(services['naisracasexo[masc_branca]'], 10)
      + parseInt(services['naisracasexo[masc_preta]'], 10)
      + parseInt(services['naisracasexo[masc_parda]'], 10)
      + parseInt(services['naisracasexo[masc_amarela]'], 10)
      + parseInt(services['naisracasexo[masc_indigena]'], 10)
      + parseInt(services['naisracasexo[masc_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['naisracasexo[masc_branca]'], 10)
      + parseInt(services['naisracasexo[fem_branca]'], 10),
      parseInt(services['naisracasexo[masc_preta]'], 10)
      + parseInt(services['naisracasexo[fem_preta]'], 10),
      parseInt(services['naisracasexo[masc_parda]'], 10)
      + parseInt(services['naisracasexo[fem_parda]'], 10),
      parseInt(services['naisracasexo[masc_amarela]'], 10)
      + parseInt(services['naisracasexo[fem_amarela]'], 10),
      parseInt(services['naisracasexo[masc_indigena]'], 10)
      + parseInt(services['naisracasexo[fem_indigena]'], 10),
      parseInt(services['naisracasexo[masc_naoinf]'], 10)
      + parseInt(services['naisracasexo[fem_naoinf]'], 10),
      parseInt(services['naisracasexo[masc_branca]'], 10)
      + parseInt(services['naisracasexo[fem_branca]'], 10)
      + parseInt(services['naisracasexo[masc_preta]'], 10)
      + parseInt(services['naisracasexo[fem_preta]'], 10)
      + parseInt(services['naisracasexo[masc_parda]'], 10)
      + parseInt(services['naisracasexo[fem_parda]'], 10)
      + parseInt(services['naisracasexo[masc_amarela]'], 10)
      + parseInt(services['naisracasexo[fem_amarela]'], 10)
      + parseInt(services['naisracasexo[masc_indigena]'], 10)
      + parseInt(services['naisracasexo[fem_indigena]'], 10)
      + parseInt(services['naisracasexo[masc_naoinf]'], 10)
      + parseInt(services['naisracasexo[fem_naoinf]'], 10), 1, 1),
  ];

  const atendidosMesTipoDef = [
    createData('Auditiva',
      services['naistipopcd[defauditiva]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Física',
      services['naistipopcd[deffisica]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Intelectual',
      services['naistipopcd[defintelec]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Múltipla',
      services['naistipopcd[defmultipla]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Transtorno do Espectro Autista',
      services['naistipopcd[deftea]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Visual',
      services['naistipopcd[defvisual]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Surdo-cedo',
      services['naistipopcd[defsurdocego]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Sem diagnóstico',
      services['naistipopcd[defsemdiagnos]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Síndrome de Down',
      services['naistipopcd[defdown]'],
      1, 1, 1, 1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['naistipopcd[defauditiva]'], 10)
      + parseInt(services['naistipopcd[deffisica]'], 10)
      + parseInt(services['naistipopcd[defintelec]'], 10)
      + parseInt(services['naistipopcd[defmultipla]'], 10)
      + parseInt(services['naistipopcd[deftea]'], 10)
      + parseInt(services['naistipopcd[defvisual]'], 10)
      + parseInt(services['naistipopcd[defsurdocego]'], 10)
      + parseInt(services['naistipopcd[defsemdiagnos]'], 10)
      + parseInt(services['naistipopcd[defdown]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const territorioMoradia = [
    createData('No mesmo distrito onde o serviço está localizado',
      services['naismoradia[naisdistrito]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
    createData('Na mesma subprefeitura (SAS) onde o serviço está localizado',
      services['naismoradia[naissubpr]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Em outra subprefeitura (SAS) onde o serviço está localizado',
      services['naismoradia[naisoutra]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
    createData('Total',
      parseInt(services['naismoradia[naissubpr]'], 10)
    + parseInt(services['naismoradia[naisoutra]'], 10)
    + parseInt(services['naismoradia[naisdistrito]'], 10),
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
  ];

  const situacaoEscolar = [
    createData('Nº de pessoas atendidas pelo serviço que frequentam o ensino formal',
      services['naissitescolar[freqescolar]'],
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];

  const beneficariosBPC = [
    createData('Nº de pessoas ',
      services.naisprogbpc,
      1,
      1, 1, 1, 1, 1, 1, 1),
  ];
  const demandaReprimida = [
    createData('0 a 5 anos', services['naislistaespera[0a5_qtd]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('6 a 11 anos', services['naislistaespera[6a11_qtd]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('12 a 14 anos', services['naislistaespera[12a14_qtd]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('15 a 17 anos', services['naislistaespera[15a17_qtd]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos', services['naislistaespera[18a29_qtd]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos', services['naislistaespera[30a59_qtd]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('60 anos ou mais', services['naislistaespera[60mais_qtd]'], 1, 1, 1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['naislistaespera[0a5_qtd]'], 10)
      + parseInt(services['naislistaespera[6a11_qtd]'], 10)
      + parseInt(services['naislistaespera[12a14_qtd]'], 10)
      + parseInt(services['naislistaespera[15a17_qtd]'], 10)
      + parseInt(services['naislistaespera[18a29_qtd]'], 10)
      + parseInt(services['naislistaespera[30a59_qtd]'], 10)
      + parseInt(services['naislistaespera[60mais_qtd]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['naisencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['naisencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', 1, 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Saúde', services['naisencaminhamentos[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Educação', services['naisencaminhamentos[educacao]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Conselhos de direito', services['naisencaminhamentos[direito]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['naisencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotos = [
    createData('Semana 1', services['naisatendremotoperio[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['naisatendremotoperio[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['naisatendremotoperio[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['naisatendremotoperio[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['naisatendremotoperio[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['naisatendremotoperio[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];
  const atendimentosRemotosTiposDomicilio = [
    createData('Telefone / Celular / Whatsapp', services['naisdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Email', services['naisdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Facebook', services['naisdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('YouTube', services['naisdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras redes sociais', services['naisdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Entrega de kits de atividades', services['naisdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outros', services['naisdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['naisperiofam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['naisperiofam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['naisperiofam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['naisperiofam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['naisperiofam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['naisperiofam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
              1. Quantidade de pessoas do sexo feminino
              atendidas pelo serviço no mês, por faixa etária:
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesFem} />

            <h2>
              2. Quantidade de pessoas do sexo masculino
              atendidos pelo serviço no mês, por faixa etária
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMesMasc} />

            <br />

            <h2>
              3. Quantidade pessoas atendidas por sexo e raça/cor no mês
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />

            <br />

            <h2>
              4. Quantidade de pessoas atendidas pelo serviço no mês, por tipo de deficiência
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={atendidosMesTipoDef} />
            <br />
            <h2>
              5. Território de moradia das pessoas atendidas pelo serviço no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={territorioMoradia} />
            <br />
            <h2>
              6. Situação escolar das pessoas que foram atendidas pelo serviço no mês
            </h2>
            <TableTwoColumns headers={['', 'Quantidade']} body={situacaoEscolar} />
            <h2>
              7. Quantidade de pessoas atendidas pelo
              serviço no mês que são beneficiárias do BPC - Benefício de Prestação Continuada
            </h2>

            <TableTwoColumns headers={['', 'Quantidade']} body={beneficariosBPC} />

            <h2>
              8. Encaminhamentos realizados pelo serviço no mês
            </h2>
            <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

            <h2>
              9. Quantidade de pessoas incluídas na lista de espera
              (demanda reprimida) do serviço no mês
            </h2>

            <TableTwoColumns headers={demandaReprimidaHeaders} body={demandaReprimida} />

            <h2>
              10. Quantidade de atendimentos remotos de usuários por semana no mês
            </h2>
            <TableTwoColumns headers={atendimentosRemotosHeaders} body={atendimentosRemotos} />

            <br />
            <h2>
              11. Quantidade de atividades remotas
              realizadas no mês, pelo meio em que foram disponibilizadas
            </h2>

            <TableTwoColumns
              headers={atendimentosRemotosTiposHeaders}
              body={atendimentosRemotosTiposDomicilio}
            />

            <h2>
              12. Quantidade de atendimentos remotos de familiares por semana no mês
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
