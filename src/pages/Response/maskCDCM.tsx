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

import {
  FirstSection, MyButton, Section,
} from './styles';

import TableEigthColumns from '../../components/TableEightColumns';
import TableFourColumns from '../../components/TableFourColumns';
import TableThreeColumns from '../../components/TableThreeColumns';
import TableTwoColumns from '../../components/TableTwoColumns';
import TableFiveColumns from '../../components/TableFiveColumns';
import TableTenColumns from '../../components/TableTenColumns';
import ListComponent from '../../components/ListComponent';

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

const idososMoramSozinhoHeaders = ['', 'Quantidade'];

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
  const { context, setContext }:any = useContext(infoContext);
  // const {
  //   nomeSAS, mes, serviceName, token,
  // } = context;
  const history = useHistory();
  // eslint-disable-next-line new-cap

  const fetchUserProfiles = () => {
    // eslint-disable-next-line no-template-curly-in-string
    axios.get('http://localhost:8080/devolutivas/SE/0121/12112320/cdcm').then((res) => {
      // const index = Object.keys(res.data.responses[0])[0];
      setServices(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  const atendidosMes = [
    createData('18 a 29 anos',
      services['cdcmatendfxetaria[18a29_atendmesatual]'],
      services['cdcmatendfxetaria[18a29_atendpresencial]'],
      services['cdcmatendfxetaria[18a29_atendremoto]'],
      1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos',
      services['cdcmatendfxetaria[30a59_atendmesatual]'],
      services['cdcmatendfxetaria[30a59_atendpresencial]'],
      services['cdcmatendfxetaria[30a59_atendremoto]'],
      1, 1, 1, 1, 1, 1),
    createData('60 anos ou mais',
      services['cdcmatendfxetaria[60oumais_atendmesatual]'],
      services['cdcmatendfxetaria[60oumais_atendpresencial]'],
      services['cdcmatendfxetaria[60oumais_atendremoto]'],
      1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['cdcmatendfxetaria[18a29_atendmesatual]'], 10)
      + parseInt(services['cdcmatendfxetaria[30a59_atendmesatual]'], 10)
      + parseInt(services['cdcmatendfxetaria[60oumais_atendmesatual]'], 10),
      parseInt(services['cdcmatendfxetaria[18a29_atendpresencial]'], 10)
      + parseInt(services['cdcmatendfxetaria[30a59_atendpresencial]'], 10)
      + parseInt(services['cdcmatendfxetaria[60oumais_atendpresencial]'], 10),
      parseInt(services['cdcmatendfxetaria[18a29_atendremoto]'], 10)
      + parseInt(services['cdcmatendfxetaria[30a59_atendremoto]'], 10)
      + parseInt(services['cdcmatendfxetaria[60oumais_atendremoto]'], 10),
      1, 1, 1, 1, 1, 1),
  ];

  const sexoRacaCor = [
    createData('Mulher Cisgênero',
      services['cdcmracagenero[mcis_branca]'],
      services['cdcmracagenero[mcis_preta]'],
      services['cdcmracagenero[mcis_parda]'],
      services['cdcmracagenero[mcis_amarela]'],
      services['cdcmracagenero[mcis_indigena]'],
      services['cdcmracagenero[mcis_naoinf]'],
      parseInt(services['cdcmracagenero[mcis_branca]'], 10)
      + parseInt(services['cdcmracagenero[mcis_preta]'], 10)
      + parseInt(services['cdcmracagenero[mcis_parda]'], 10)
      + parseInt(services['cdcmracagenero[mcis_amarela]'], 10)
      + parseInt(services['cdcmracagenero[mcis_indigena]'], 10)
      + parseInt(services['cdcmracagenero[mcis_naoinf]'], 10), 1, 1),
    createData('Mulher Transgênero',
      services['cdcmracagenero[mtrans_branca]'],
      services['cdcmracagenero[mtrans_preta]'],
      services['cdcmracagenero[mtrans_parda]'],
      services['cdcmracagenero[mtrans_amarela]'],
      services['cdcmracagenero[mtrans_indigena]'],
      services['cdcmracagenero[mtrans_naoinf]'],
      parseInt(services['cdcmracagenero[mtrans_branca]'], 10)
      + parseInt(services['cdcmracagenero[mtrans_preta]'], 10)
      + parseInt(services['cdcmracagenero[mtrans_parda]'], 10)
      + parseInt(services['cdcmracagenero[mtrans_amarela]'], 10)
      + parseInt(services['cdcmracagenero[mtrans_indigena]'], 10)
      + parseInt(services['cdcmracagenero[mtrans_naoinf]'], 10), 1, 1),
    createData('Total Geral',
      parseInt(services['cdcmracagenero[mtrans_branca]'], 10)
      + parseInt(services['cdcmracagenero[mcis_branca]'], 10),
      parseInt(services['cdcmracagenero[mtrans_preta]'], 10)
      + parseInt(services['cdcmracagenero[mcis_preta]'], 10),
      parseInt(services['cdcmracagenero[mtrans_parda]'], 10)
      + parseInt(services['cdcmracagenero[mcis_parda]'], 10),
      parseInt(services['cdcmracagenero[mtrans_amarela]'], 10)
      + parseInt(services['cdcmracagenero[mcis_amarela]'], 10),
      parseInt(services['cdcmracagenero[mtrans_indigena]'], 10)
      + parseInt(services['cdcmracagenero[mcis_indigena]'], 10),
      parseInt(services['cdcmracagenero[mtrans_naoinf]'], 10)
      + parseInt(services['cdcmracagenero[mcis_naoinf]'], 10),
      parseInt(services['cdcmracagenero[mtrans_branca]'], 10)
      + parseInt(services['cdcmracagenero[mcis_branca]'], 10)
      + parseInt(services['cdcmracagenero[mtrans_preta]'], 10)
      + parseInt(services['cdcmracagenero[mcis_preta]'], 10)
      + parseInt(services['cdcmracagenero[mtrans_parda]'], 10)
      + parseInt(services['cdcmracagenero[mcis_parda]'], 10)
      + parseInt(services['cdcmracagenero[mtrans_amarela]'], 10)
      + parseInt(services['cdcmracagenero[mcis_amarela]'], 10)
      + parseInt(services['cdcmracagenero[mtrans_indigena]'], 10)
      + parseInt(services['cdcmracagenero[mcis_indigena]'], 10)
      + parseInt(services['cdcmracagenero[mtrans_naoinf]'], 10)
      + parseInt(services['cdcmracagenero[mcis_naoinf]'], 10), 1, 1),
  ];

  const violenciaAgressor = [
    createData('Violência Física',
      services['cdcmagressorvio[viofisica_agressorpai]'],
      services['cdcmagressorvio[viofisica_padrasto]'],
      services['cdcmagressorvio[viofisica_agressoresposo]'],
      services['cdcmagressorvio[viofisica_agressorexesposo]'],
      services['cdcmagressorvio[viofisica_agressorirmao]'],
      services['cdcmagressorvio[viofisica_agressorempre]'],
      services['cdcmagressorvio[viofisica_agressoroutrosfam]'],
      services['cdcmagressorvio[viofisica_agressoroutraspessoa]'],
      parseInt(services['cdcmagressorvio[viofisica_agressorpai]'], 10)
      + parseInt(services['cdcmagressorvio[viofisica_padrasto]'], 10)
      + parseInt(services['cdcmagressorvio[viofisica_agressoresposo]'], 10)
      + parseInt(services['cdcmagressorvio[viofisica_agressorexesposo]'], 10)
      + parseInt(services['cdcmagressorvio[viofisica_agressorirmao]'], 10)
      + parseInt(services['cdcmagressorvio[viofisica_agressorempre]'], 10)
      + parseInt(services['cdcmagressorvio[viofisica_agressoroutrosfam]'], 10)
      + parseInt(services['cdcmagressorvio[viofisica_agressoroutraspessoa]'], 10)),
    createData('Violência Psicológica',
      services['cdcmagressorvio[viopsico_agressorpai]'],
      services['cdcmagressorvio[viopsico_padrasto]'],
      services['cdcmagressorvio[viopsico_agressoresposo]'],
      services['cdcmagressorvio[viopsico_agressorexesposo]'],
      services['cdcmagressorvio[viopsico_agressorirmao]'],
      services['cdcmagressorvio[viopsico_agressorempre]'],
      services['cdcmagressorvio[viopsico_agressoroutrosfam]'],
      services['cdcmagressorvio[viopsico_agressoroutraspessoa]'],

      parseInt(services['cdcmagressorvio[viopsico_agressorpai]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_padrasto]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_agressoresposo]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_agressorexesposo]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_agressorirmao]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_agressorempre]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_agressoroutrosfam]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_agressoroutraspessoa]'], 10)),
    createData('Exploração Sexual',
      services['cdcmagressorvio[vioexplo_agressorpai]'],
      services['cdcmagressorvio[vioexplo_padrasto]'],
      services['cdcmagressorvio[vioexplo_agressoresposo]'],
      services['cdcmagressorvio[vioexplo_agressorexesposo]'],
      services['cdcmagressorvio[vioexplo_agressorirmao]'],
      services['cdcmagressorvio[vioexplo_agressorempre]'],
      services['cdcmagressorvio[vioexplo_agressoroutrosfam]'],
      services['cdcmagressorvio[vioexplo_agressoroutraspessoa]'],

      parseInt(services['cdcmagressorvio[vioexplo_agressorpai]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_padrasto]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_agressoresposo]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_agressorexesposo]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_agressorirmao]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_agressorempre]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_agressoroutrosfam]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_agressoroutraspessoa]'], 10)),
    createData('Abuso Sexual',
      services['cdcmagressorvio[vioabuso_agressorpai]'],
      services['cdcmagressorvio[vioabuso_padrasto]'],
      services['cdcmagressorvio[vioabuso_agressoresposo]'],
      services['cdcmagressorvio[vioabuso_agressorexesposo]'],
      services['cdcmagressorvio[vioabuso_agressorirmao]'],
      services['cdcmagressorvio[vioabuso_agressorempre]'],
      services['cdcmagressorvio[vioabuso_agressoroutrosfam]'],
      services['cdcmagressorvio[vioabuso_agressoroutraspessoa]'],

      parseInt(services['cdcmagressorvio[vioabuso_agressorpai]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_padrasto]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_agressoresposo]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_agressorexesposo]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_agressorirmao]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_agressorempre]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_agressoroutrosfam]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_agressoroutraspessoa]'], 10)),
    createData('Violência Moral',
      services['cdcmagressorvio[viomoral_agressorpai]'],
      services['cdcmagressorvio[viomoral_padrasto]'],
      services['cdcmagressorvio[viomoral_agressoresposo]'],
      services['cdcmagressorvio[viomoral_agressorexesposo]'],
      services['cdcmagressorvio[viomoral_agressorirmao]'],
      services['cdcmagressorvio[viomoral_agressorempre]'],
      services['cdcmagressorvio[viomoral_agressoroutrosfam]'],
      services['cdcmagressorvio[viomoral_agressoroutraspessoa]'],

      parseInt(services['cdcmagressorvio[viomoral_agressorpai]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_padrasto]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_agressoresposo]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_agressorexesposo]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_agressorirmao]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_agressorempre]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_agressoroutrosfam]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_agressoroutraspessoa]'], 10)),
    createData('Violência Patrimonial',
      services['cdcmagressorvio[viopatrim_agressorpai]'],
      services['cdcmagressorvio[viopatrim_padrasto]'],
      services['cdcmagressorvio[viopatrim_agressoresposo]'],
      services['cdcmagressorvio[viopatrim_agressorexesposo]'],
      services['cdcmagressorvio[viopatrim_agressorirmao]'],
      services['cdcmagressorvio[viopatrim_agressorempre]'],
      services['cdcmagressorvio[viopatrim_agressoroutrosfam]'],
      services['cdcmagressorvio[viopatrim_agressoroutraspessoa]'],

      parseInt(services['cdcmagressorvio[viopatrim_agressorpai]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_padrasto]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_agressoresposo]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_agressorexesposo]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_agressorirmao]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_agressorempre]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_agressoroutrosfam]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_agressoroutraspessoa]'], 10)),
    createData('Total',
      parseInt(services['cdcmagressorvio[viofisica_agressorpai]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_agressorpai]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_agressorpai]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_agressorpai]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_agressorpai]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_agressorpai]'], 10),
      parseInt(services['cdcmagressorvio[viofisica_padrasto]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_padrasto]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_padrasto]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_padrasto]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_padrasto]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_padrasto]'], 10),
      parseInt(services['cdcmagressorvio[viofisica_agressoresposo]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_agressoresposo]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_agressoresposo]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_agressoresposo]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_agressoresposo]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_agressoresposo]'], 10),
      parseInt(services['cdcmagressorvio[viofisica_agressorexesposo]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_agressorexesposo]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_agressorexesposo]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_agressorexesposo]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_agressorexesposo]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_agressorexesposo]'], 10),
      parseInt(services['cdcmagressorvio[viofisica_agressorirmao]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_agressorirmao]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_agressorirmao]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_agressorirmao]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_agressorirmao]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_agressorirmao]'], 10),
      parseInt(services['cdcmagressorvio[viofisica_agressorempre]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_agressorempre]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_agressorempre]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_agressorempre]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_agressorempre]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_agressorempre]'], 10),
      parseInt(services['cdcmagressorvio[viofisica_agressoroutrosfam]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_agressoroutrosfam]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_agressoroutrosfam]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_agressoroutrosfam]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_agressoroutrosfam]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_agressoroutrosfam]'], 10),
      parseInt(services['cdcmagressorvio[viofisica_agressoroutraspessoa]'], 10)
      + parseInt(services['cdcmagressorvio[vioexplo_agressoroutraspessoa]'], 10)
      + parseInt(services['cdcmagressorvio[viopsico_agressoroutraspessoa]'], 10)
      + parseInt(services['cdcmagressorvio[vioabuso_agressoroutraspessoa]'], 10)
      + parseInt(services['cdcmagressorvio[viomoral_agressoroutraspessoa]'], 10)
      + parseInt(services['cdcmagressorvio[viopatrim_agressoroutraspessoa]'], 10),
      0),
  ];

  const atendimentoTecnico = [
    createData('Nº de mulheres que receberam atendimento jurídico',
      services['cdcmatendtecnico[atendjur_atendpres]'],
      services['cdcmatendtecnico[atendjur_atendrem]'],
      services['cdcmatendtecnico[atendjur_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('Nº de mulheres que receberam atendimento psicossocial',
      services['cdcmatendtecnico[atendpsico_atendpres]'],
      services['cdcmatendtecnico[atendpsico_atendrem]'],
      services['cdcmatendtecnico[atendpsico_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('N° de mulheres que receberam atendimento social',
      services['cdcmatendtecnico[atendrompvio_atendpres]'],
      services['cdcmatendtecnico[atendrompvio_atendrem]'],
      services['cdcmatendtecnico[atendrompvio_remmesatual]'],
      1, 1, 1, 1, 1, 1),
    createData('Total',
      parseInt(services['cdcmatendtecnico[atendrompvio_atendpres]'], 10)
      + parseInt(services['cdcmatendtecnico[atendpsico_atendpres]'], 10)
      + parseInt(services['cdcmatendtecnico[atendjur_atendpres]'], 10),
      parseInt(services['cdcmatendtecnico[atendrompvio_atendrem]'], 10)
      + parseInt(services['cdcmatendtecnico[atendpsico_atendrem]'], 10)
      + parseInt(services['cdcmatendtecnico[atendjur_atendrem]'], 10),
      1,
      1, 1, 1, 1, 1, 1),

  ];

  const motivosSaida = [
    createData('Rompimento da situação de violência',
      services['cdcmmotivosaid[saidaromviolencia]'],
      1,
      1,
      1, 1, 1, 1, 1, 1),

    createData('Mudança de Endereço',
      services['cdcmmotivosaid[saidamudancaend]'],
      services['cdcmmotivosaid[aband_18a29]'],
      services['cdcmmotivosaid[aband_30a59]'],
      parseInt(services['cdcmmotivosaid[aband_15a17]'], 10)
      + parseInt(services['cdcmmotivosaid[aband_18a29]'], 10)
      + parseInt(services['cdcmmotivosaid[aband_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Desistência',
      services['cdcmmotivosaid[saidadesistencia]'],
      services['cdcmmotivosaid[obito_18a29]'],
      services['cdcmmotivosaid[obito_30a59]'],
      parseInt(services['cdcmmotivosaid[obito_15a17]'], 10)
      + parseInt(services['cdcmmotivosaid[obito_18a29]'], 10)
      + parseInt(services['cdcmmotivosaid[obito_30a59]'], 10),
      1,
      1,
      1,
      1,
      1),
    createData('Transferência de Serviço',
      services['cdcmmotivosaid[saidatransf]'],
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1),
  ];

  const territorioMoradia = [
    createData('No mesmo distrito onde o serviço está localizado', services['cdcmtempopermanen[spvvdistrito]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Na mesma subprefeitura (SAS) onde o serviço está localizado', services['cdcmtempopermanen[spvvsubpr]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Em outra subprefeitura (SAS) onde o serviço está localizado', services['cdcmtempopermanen[spvvservi]'], 1, 1, 1, 1, 1, 1, 1, 1),

  ];

  const usuariosOficinas = [
    createData('N° de mulheres que participaram de oficinas de convivência', services['cdcmoficina[convivencia]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('N° de mulheres que participaram de oficinas de defesa', services['cdcmoficina[defesa]'], 1, 1, 1, 1, 1, 1, 1, 1),

  ];

  const visitasReunioes = [
    createData('N° de visitas domiciliares', services['cdcmvisitas[visdom]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('N° de reuniões de articulação com a rede', services['cdcmvisitas[visinst]'], 1, 1, 1, 1, 1, 1, 1, 1),

  ];

  const familiasInsumos = [
    createData('Cesta de alimentos', services['cedesinsumos[cestasaliment_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Kit de material de higiene', services['cedesinsumos[kithiginene_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
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

  const atividadesItems = [
    ['Atividades esportivas', services['cedespatividades[atvesporte]']],
    ['Musicalidade (cantar, tocar instrumentos etc.)', services['ccintatividades[atvmusica]']],
    ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', services['ccintatividades[atvcultura]']],
    ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', services['ccintatividades[atvarte]']],
    ['Atividades de inclusão digital', services['ccintatividades[atvincdigital]']],
    ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['ccintatividades[atvlinguagem]']],
    ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['ccintatividades[atvculinaria]']],
    ['Atividades recreativas (jogos, brincadeiras, etc.)', services['ccintatividades[atvrecreacao]']],

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
    createData('6 a 11 anos', services['cedeslistaespera[6a11_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('12 a 17 anos', services['cedeslistaespera[12a14_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('18 a 29 anos', services['cedeslistaespera[18a29_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('30 a 59 anos', services['cedeslistaespera[30a59_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),

    createData('Total',
      parseInt(services['cedeslistaespera[6a11_quantidade]'], 10)
      + parseInt(services['cedeslistaespera[12a14_quantidade]'], 10)
      + parseInt(services['cedeslistaespera[18a29_quantidade]'], 10)
      + parseInt(services['cedeslistaespera[30a59_quantidade]'], 10),
      1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const encaminhamentos = [
    createData('CRAS', services['cdcmencaminhamento[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('CREAS', services['cdcmencaminhamento[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Centro de Acolhida para Mulheres em Situação de Violência (sigiloso)', services['cdcmencaminhamento[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Centro de Acolhida Especial para Mulheres', services['cdcmencaminhamento[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Casa de Passagem', services['cdcmencaminhamento[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Hotel', services['cdcmencaminhamento[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outro serviço da rede socioassistencial', services['cdcmencaminhamento[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Saúde', services['cdcmencaminhamento[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Educação', services['cdcmencaminhamento[educacao]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Judiciário', services['cdcmencaminhamento[judiciario]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Trabalho e renda', services['cdcmencaminhamento[trabalhorenda]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras políticas públicas', services['cdcmencaminhamento[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
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
    createData('Telefone / Celular / Whatsapp', services['cdcmdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Email', services['cdcmdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Facebook', services['cdcmdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('YouTube', services['cdcmdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outras redes sociais', services['cdcmdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Entrega de kits de atividades', services['cdcmdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Outros', services['cdcmdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  const atendimentosRemotosFamiliaSemana = [
    createData('Semana 1', services['cdcmatendremfam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 2', services['cdcmatendremfam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 3', services['cdcmatendremfam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 4', services['cdcmatendremfam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 5', services['cdcmatendremfam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
    createData('Semana 6', services['cdcmatendremfam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  ];

  return (
    <>
      <FirstSection>
        <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb
            component="a"
            onClick={() => {
              history.push('/');
            }}
            label="nomeSAS"
            icon={<HomeIcon fontSize="small" />}
          />
          <StyledBreadcrumb
            component="a"
            // onClick={() => {
            //   setContext({
            //     nomeSAS,
            //     mes,
            //   });
            //   history.push('months');
            // }}
            label="{'mes === '0121' ? 'Janeiro 2021' : 'Fevereiro 2021''}"
          />
          <StyledBreadcrumb
            component="a"
            // onClick={() => {
            //   setContext({
            //     nomeSAS,
            //     mes,
            //   });
            //   history.push('/reports');
            // }}
            label="{serviceName}"
          />
          <Typography color="textPrimary">Respostas</Typography>
        </Breadcrumbs>
        <div>

          <MyButton
            variant="contained"
            onClick={() => {
              window.print();
            }}
            color="primary"
          >
            Imprimir

          </MyButton>
          <MyButton
            variant="contained"
            color="primary"
            // onClick={() => {
            //   setContext({
            //     nomeSAS,
            //     mes,
            //   });
            //   history.push('/reports');
            // }}
          >
            Voltar

          </MyButton>
        </div>

      </FirstSection>

      <Section>
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
          8. Visitas domiciliares e n° de reuniões de articulação com a rede no mês de referência
        </h2>

        <TableTwoColumns headers={['', 'Pessoas']} body={visitasReunioes} />

        <Typography variant="h5" gutterBottom>
          9. A quantidade de mulheres atendidas
          no mês que estão acolhidas
          em algum Centro de Acolhida
          para Mulheres em Situação de Violência é de
          {' '}
          {services.cdcmacolhidas}
        </Typography>

        <Typography variant="h5" gutterBottom>
          10. A quantidade de mulheres com deficiência atendidas no mês é de
          {' '}
          {services.cdcmpcd}
        </Typography>

        <br />
        <h2>
          11. Encaminhamentos realizados pelo serviço no mês de referência
        </h2>

        <TableTwoColumns headers={encaminhamentosHeaders} body={encaminhamentos} />

        <Typography variant="h5" gutterBottom>
          12. Quantidade de mulheres incluídas
          na lista de espera (demanda reprimida) do serviço no mês é de
          {' '}
          {services.cdcmlistaespera}
        </Typography>

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

      </Section>
    </>
  );
};

export default Response;