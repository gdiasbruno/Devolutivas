import axios from 'axios';

export const fetchServicesAnswers = ({
  nomeSAS, mes, token, tipologia, setServices, setLoading, history,
}:any) => {
  axios.get(`http://10.13.24.137:9090/devolutivas/${nomeSAS}/${mes}/${token}/${tipologia}`).then((res) => {
    setServices(res.data);
    console.log(res.data);
    setLoading(false);
    if (
      res.data['bagracasexo[fem_branca]'] === ''
      || res.data['ccafluxopessoasatend[6a11m_atendmesatual]'] === ''
      || res.data['ccinteratendfem[75maisf_remmesatual]'] === ''
      || res.data['cdcmatendfxetaria[18a29_atendmesatual]'] === ''
      || res.data['cdiatenfxetariafem[60a64f_atendmesatual]'] === ''
      || res.data['cedesfluxomulheresat[15a17f_atendmesatual]'] === ''
      || res.data['circofluxoatend[6a11m_atendmesatual]'] === ''
      || res.data['cjfluxopessoasatend[15a17m_atendmesatual]'] === ''
      || res.data['crecifluxoatend[atendmesatual_60a64m]'] === ''
      || res.data['mseatend[12a14f_atendpsc]'] === ''
      || res.data['naisatenfxetariafem[0a5f_atendmesatual]'] === ''
      || res.data['ncifluxoconvivencia[60a64m_atendmesatual]'] === ''
      || res.data['ncpopruaatendfem[0a11f_freqpresencial]'] === ''
      || res.data['restafluxopessoasate[15a17f_atendmesatual]'] === ''
      || res.data['sadpifluxopessoas[atendidos_60a64m]'] === ''
      || res.data['sasfinfosnecessarias[famatend]'] === ''
      || res.data['sispatendfem[18a29f]'] === ''
      || res.data['spvvatenfxetaria[0a5f_atendmesatual]'] === ''
    ) {
      history.push('/Blank');
    }
    if (res.data.statusCodeValue === 400) {
      history.push('/Blank');
    }
  }).catch((err) => {
    console.log(err);
    history.push('/Blank');
  });
};

export const sexoRacaCorBAGAGEIRO = ({ services, createData }:any) => [
  createData('Feminino',
    services['bagracasexo[fem_branca]'],
    services['bagracasexo[fem_preta]'],
    services['bagracasexo[fem_parda]'],
    services['bagracasexo[fem_amarela]'],
    services['bagracasexo[fem_indigena]'],
    services['bagracasexo[fem_naoinf]'],
    parseInt(services['bagracasexo[fem_branca]'], 10)
    + parseInt(services['bagracasexo[fem_preta]'], 10)
    + parseInt(services['bagracasexo[fem_parda]'], 10)
    + parseInt(services['bagracasexo[fem_amarela]'], 10)
    + parseInt(services['bagracasexo[fem_indigena]'], 10)
    + parseInt(services['bagracasexo[fem_naoinf]'], 10), 1, 1),
  createData('Masculino',
    services['bagracasexo[mas_branca]'],
    services['bagracasexo[mas_preta]'],
    services['bagracasexo[mas_parda]'],
    services['bagracasexo[mas_amarela]'],
    services['bagracasexo[mas_indigena]'],
    services['bagracasexo[mas_naoinf]'],
    parseInt(services['bagracasexo[mas_branca]'], 10)
    + parseInt(services['bagracasexo[mas_preta]'], 10)
    + parseInt(services['bagracasexo[mas_parda]'], 10)
    + parseInt(services['bagracasexo[mas_amarela]'], 10)
    + parseInt(services['bagracasexo[mas_indigena]'], 10)
    + parseInt(services['bagracasexo[mas_naoinf]'], 10), 1, 1),
  createData('Total Geral',
    parseInt(services['bagracasexo[mas_branca]'], 10)
    + parseInt(services['bagracasexo[fem_branca]'], 10),
    parseInt(services['bagracasexo[mas_preta]'], 10)
    + parseInt(services['bagracasexo[fem_preta]'], 10),
    parseInt(services['bagracasexo[mas_parda]'], 10)
    + parseInt(services['bagracasexo[fem_parda]'], 10),
    parseInt(services['bagracasexo[mas_amarela]'], 10)
    + parseInt(services['bagracasexo[fem_amarela]'], 10),
    parseInt(services['bagracasexo[mas_indigena]'], 10)
    + parseInt(services['bagracasexo[fem_indigena]'], 10),
    parseInt(services['bagracasexo[mas_naoinf]'], 10)
    + parseInt(services['bagracasexo[fem_naoinf]'], 10),
    parseInt(services['bagracasexo[mas_branca]'], 10)
    + parseInt(services['bagracasexo[fem_branca]'], 10)
    + parseInt(services['bagracasexo[mas_preta]'], 10)
    + parseInt(services['bagracasexo[fem_preta]'], 10)
    + parseInt(services['bagracasexo[mas_parda]'], 10)
    + parseInt(services['bagracasexo[fem_parda]'], 10)
    + parseInt(services['bagracasexo[mas_amarela]'], 10)
    + parseInt(services['bagracasexo[fem_amarela]'], 10)
    + parseInt(services['bagracasexo[mas_indigena]'], 10)
    + parseInt(services['bagracasexo[fem_indigena]'], 10)
    + parseInt(services['bagracasexo[mas_naoinf]'], 10)
    + parseInt(services['bagracasexo[fem_naoinf]'], 10), 1, 1),
];

export const encaminhamentosBAGAGEIRO = ({ services, createData }:any) => [
  createData('CRAS', services['bagencaminhamento[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['bagencaminhamento[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CENTRO POP', services['bagencaminhamento[cpop]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['bagencaminhamento[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['bagencaminhamento[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendidosMesCCA = ({ services, createData }:any) => [
  createData('6 a 11 anos (M)', services['ccafluxopessoasatend[6a11m_atendmesatual]'], services['ccafluxopessoasatend[6a11m_presmesatual]'], services['ccafluxopessoasatend[6a11m_remmesatual]'], 1, 1, 1, 1),
  createData('6 a 11 anos (F)', services['ccafluxopessoasatend[6a11f_atendmesatual]'], services['ccafluxopessoasatend[6a11f_presmesatual]'], services['ccafluxopessoasatend[6a11f_remmesatual]'], 1, 1, 1, 1),
  createData('12 a 14 anos (M)', services['ccafluxopessoasatend[12a14m_atendmesatual]'], services['ccafluxopessoasatend[12a14m_presmesatual]'], services['ccafluxopessoasatend[12a14m_remmesatual]'], 1, 1, 1, 1),
  createData('12 a 14 anos (F)', services['ccafluxopessoasatend[12a14f_atendmesatual]'], services['ccafluxopessoasatend[12a14f_presmesatual]'], services['ccafluxopessoasatend[12a14f_remmesatual]'], 1, 1, 1, 1),
  createData('Total', parseInt(services['ccafluxopessoasatend[6a11m_atendmesatual]'], 10)
                    + parseInt(services['ccafluxopessoasatend[6a11f_atendmesatual]'], 10)
                    + parseInt(services['ccafluxopessoasatend[12a14m_atendmesatual]'], 10)
                    + parseInt(services['ccafluxopessoasatend[12a14f_atendmesatual]'], 10),

  parseInt(services['ccafluxopessoasatend[6a11m_presmesatual]'], 10)
  + parseInt(services['ccafluxopessoasatend[6a11f_presmesatual]'], 10)
  + parseInt(services['ccafluxopessoasatend[12a14m_presmesatual]'], 10)
  + parseInt(services['ccafluxopessoasatend[12a14f_presmesatual]'], 10),

  parseInt(services['ccafluxopessoasatend[6a11m_remmesatual]'], 10)
  + parseInt(services['ccafluxopessoasatend[6a11f_remmesatual]'], 10)
  + parseInt(services['ccafluxopessoasatend[12a14m_remmesatual]'], 10)
  + parseInt(services['ccafluxopessoasatend[12a14f_remmesatual]'], 10),
  1, 1, 1, 1),
];

export const sexoRacaCorCCA = ({ services, createData }:any) => [
  createData('Feminino',
    services['ccaracasexo[fem_branca]'],
    services['ccaracasexo[fem_preta]'],
    services['ccaracasexo[fem_parda]'],
    services['ccaracasexo[fem_amarela]'],
    services['ccaracasexo[fem_indigena]'],
    services['ccaracasexo[fem_naoinf]'],
    parseInt(services['ccaracasexo[fem_branca]'], 10)
    + parseInt(services['ccaracasexo[fem_preta]'], 10)
    + parseInt(services['ccaracasexo[fem_parda]'], 10)
    + parseInt(services['ccaracasexo[fem_amarela]'], 10)
    + parseInt(services['ccaracasexo[fem_indigena]'], 10)
    + parseInt(services['ccaracasexo[fem_naoinf]'], 10)),
  createData('Masculino',
    services['ccaracasexo[masc_branca]'],
    services['ccaracasexo[masc_preta]'],
    services['ccaracasexo[masc_parda]'],
    services['ccaracasexo[masc_amarela]'],
    services['ccaracasexo[masc_indigena]'],
    services['ccaracasexo[masc_naoinf]'],
    parseInt(services['ccaracasexo[masc_branca]'], 10)
    + parseInt(services['ccaracasexo[masc_preta]'], 10)
    + parseInt(services['ccaracasexo[masc_parda]'], 10)
    + parseInt(services['ccaracasexo[masc_amarela]'], 10)
    + parseInt(services['ccaracasexo[masc_indigena]'], 10)
    + parseInt(services['ccaracasexo[masc_naoinf]'], 10)),
  createData('Total Geral',
    parseInt(services['ccaracasexo[masc_branca]'], 10)
    + parseInt(services['ccaracasexo[fem_branca]'], 10),
    parseInt(services['ccaracasexo[masc_preta]'], 10)
    + parseInt(services['ccaracasexo[fem_preta]'], 10),
    parseInt(services['ccaracasexo[masc_parda]'], 10)
    + parseInt(services['ccaracasexo[fem_parda]'], 10),
    parseInt(services['ccaracasexo[masc_amarela]'], 10)
    + parseInt(services['ccaracasexo[fem_amarela]'], 10),
    parseInt(services['ccaracasexo[masc_indigena]'], 10)
    + parseInt(services['ccaracasexo[fem_indigena]'], 10),
    parseInt(services['ccaracasexo[masc_naoinf]'], 10)
    + parseInt(services['ccaracasexo[fem_naoinf]'], 10),
    parseInt(services['ccaracasexo[masc_branca]'], 10)
    + parseInt(services['ccaracasexo[fem_branca]'], 10)
    + parseInt(services['ccaracasexo[masc_preta]'], 10)
    + parseInt(services['ccaracasexo[fem_preta]'], 10)
    + parseInt(services['ccaracasexo[masc_parda]'], 10)
    + parseInt(services['ccaracasexo[fem_parda]'], 10)
    + parseInt(services['ccaracasexo[masc_amarela]'], 10)
    + parseInt(services['ccaracasexo[fem_amarela]'], 10)
    + parseInt(services['ccaracasexo[masc_indigena]'], 10)
    + parseInt(services['ccaracasexo[fem_indigena]'], 10)
    + parseInt(services['ccaracasexo[masc_naoinf]'], 10)
    + parseInt(services['ccaracasexo[fem_naoinf]'], 10)),
];

export const motivoSaidaCCA = ({ services, createData }:any) => [
  createData('Mudança de endereço',
    services['ccamotivossaida[endereco_6a11]'],
    services['ccamotivossaida[endereco_12a14]'],
    1, 1, 1, 1, 1),
  createData('Transferência para outro serviço',
    services['ccamotivossaida[transferencia_6a11]'],
    services['ccamotivossaida[transferencia_12a14]'],
    1, 1, 1, 1, 1),
  createData('Óbito',
    services['ccamotivossaida[obito_6a11]'],
    services['ccamotivossaida[obito_12a14]'],
    1, 1, 1, 1, 1),
  createData('Abandono',
    services['ccamotivossaida[aband_6a11]'],
    services['ccamotivossaida[aband_12a14]'],
    1, 1, 1, 1, 1),
  createData('Aplicação de medida restritiva de liberdade',
    services['ccamotivossaida[liberdade_6a11]'],
    services['ccamotivossaida[liberdade_12a14]'],
    1, 1, 1, 1, 1),
  createData('Limite de idade',
    services['ccamotivossaida[idade_6a11]'],
    services['ccamotivossaida[idade_12a14]'],
    1, 1, 1, 1, 1),
  createData('Total',
    parseInt(services['ccamotivossaida[endereco_6a11]'], 10)
    + parseInt(services['ccamotivossaida[transferencia_6a11]'], 10)
    + parseInt(services['ccamotivossaida[obito_6a11]'], 10)
    + parseInt(services['ccamotivossaida[aband_6a11]'], 10)
    + parseInt(services['ccamotivossaida[liberdade_6a11]'], 10)
    + parseInt(services['ccamotivossaida[idade_6a11]'], 10),
    parseInt(services['ccamotivossaida[endereco_12a14]'], 10)
    + parseInt(services['ccamotivossaida[transferencia_12a14]'], 10)
    + parseInt(services['ccamotivossaida[obito_12a14]'], 10)
    + parseInt(services['ccamotivossaida[aband_12a14]'], 10)
    + parseInt(services['ccamotivossaida[liberdade_12a14]'], 10)
    + parseInt(services['ccamotivossaida[idade_12a14]'], 10),

    1, 1, 1, 1, 1),
];

export const familiasAtendidasCCA = ({ services, createData }:any) => [
  createData('Nº de famílias atendidas presencialmente no mês', services['ccaatendfam[ccafampres]'], 1, 1, 1, 1, 1, 1),
  createData('Nº de famílias acompanhadas de forma remota no mês', services['ccaatendfam[ccafamrem]'], 1, 1, 1, 1, 1, 1),
  createData('Nº total de famílias atendidas no mês', services['ccaatendfam[ccafamtotal]'], 1, 1, 1, 1, 1, 1),
];

export const familiasVulnerabilidadeCCA = ({ services, createData }:any) => [
  createData('Conflitos', services['ccavulnerab[conflit]'], 1, 1, 1, 1, 1, 1),
  createData('Preconceitos/discriminação', services['ccavulnerab[Precon]'], 1, 1, 1, 1, 1, 1),
  createData('Abandono', services['ccavulnerab[aband]'], 1, 1, 1, 1, 1, 1),
  createData('Apartação', services['ccavulnerab[apart]'], 1, 1, 1, 1, 1, 1),
  createData('Confinamento', services['ccavulnerab[confinamet]'], 1, 1, 1, 1, 1, 1),
  createData('Isolamento', services['ccavulnerab[isolament]'], 1, 1, 1, 1, 1, 1),
  createData('Violência', services['ccavulnerab[violen]'], 1, 1, 1, 1, 1, 1),
];

export const atividadesItemsCCA = ({ services }:any) => [
  ['Atividades esportivas', services['ccaatividades[atvesporte]']],
  ['Musicalidade (cantar, tocar instrumentos etc.)', services['ccaatividades[atvmusica]']],
  ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', services['ccaatividades[atvcultura]']],
  ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', services['ccaatividades[atvarte]']],
  ['Atividades de inclusão digital', services['ccaatividades[atvincdigital]']],
  ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['ccaatividades[atvlinguagem]']],
  ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['ccaatividades[atvculinaria]']],
  ['Atividades recreativas (jogos, brincadeiras, etc.)', services['ccaatividades[atvrecreacao]']],
];

export const temasItemsCCA = ({ services }:any) => [
  ['Temas transversais (saúde, meio ambiente, cultura, esporte etc.)', services['ccatema[tematransversal]']],
  ['Direitos e programas sociais', services['ccatema[temadireitos]']],
  ['Segurança alimentar e nutricional', services['ccatema[temanutricao]']],
  ['Igualdade entre homens e mulheres', services['ccatema[temaigualdade]']],
  ['Orientação sexual e de identidade de gênero', services['ccatema[temaorientsexual]']],
  ['Relações étnico-raciais', services['ccatema[temaetnico]']],
  ['Prevenção ao uso de álcool e drogas', services['ccatema[temaalccoldrogas]']],
  ['Prevenção à violência', services['ccatema[temaprevencaovio]']],
  ['Parentalidade', services['ccatema[temaparental]']],
  ['Deficiência e acessibilidade', services['ccatema[temapcd]']],
  ['Mundo do trabalho', services['ccatema[temamundotrabalho]']],
];

export const demandaReprimidaCCA = ({ services, createData }:any) => [
  createData('6 a 11 anos', services['ccalistaespera[6a11_quantidade]'], 1, 1, 1, 1, 1, 1),
  createData('12 a 14 anos', services['ccalistaespera[12a14_quantidade]'], 1, 1, 1, 1, 1, 1),
  createData('Total',
    parseInt(services['ccalistaespera[6a11_quantidade]'], 10)
    + parseInt(services['ccalistaespera[12a14_quantidade]'], 10),
    1, 1, 1, 1, 1, 1),
];

export const familiasInsumosCCA = ({ services }:any) => [
  { title: 'Cesta de alimentos', attribute1: services['ccainsumos[cestasaliment_numero]'] },
  { title: 'Kit de material de higiene', attribute1: services['ccainsumos[kithiginene_numero]'] },
];

export const encaminhamentosCCA = ({ services, createData }:any) => [
  createData('CRAS', services['ccaencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['ccaencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['ccaencaminhamentos[servicosrede]'], 1, 1, 1, 1, 1, 1),
  createData('Saúde', services['ccaencaminhamentos[saude]'], 1, 1, 1, 1, 1, 1),
  createData('Educação', services['ccaencaminhamentos[educacao]'], 1, 1, 1, 1, 1, 1),
  createData('Conselhos de direito', services['ccaencaminhamentos[direito]'], 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['ccaencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosCCA = ({ services, createData }:any) => [
  createData('Semana 1', services['ccaatendremotoperiod[1sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['ccaatendremotoperiod[2sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['ccaatendremotoperiod[3sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['ccaatendremotoperiod[4sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['ccaatendremotoperiod[5sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['ccaatendremotoperiod[6sem]'], 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosTiposCCA = ({ services, createData }:any) => [
  createData('Telefone / Celular / Whatsapp', services['ccaatendremotodisp[telef]'], 1, 1, 1, 1, 1, 1),
  createData('Email', services['ccaatendremotodisp[email]'], 1, 1, 1, 1, 1, 1),
  createData('Facebook', services['ccaatendremotodisp[face]'], 1, 1, 1, 1, 1, 1),
  createData('YouTube', services['ccaatendremotodisp[youtu]'], 1, 1, 1, 1, 1, 1),
  createData('Outras redes sociais', services['ccaatendremotodisp[outrasredes]'], 1, 1, 1, 1, 1, 1),
  createData('Entrega de kits de atividades', services['ccaatendremotodisp[entreg]'], 1, 1, 1, 1, 1, 1),
  createData('Outros', services['ccaatendremotodisp[outros]'], 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosFamiliaSemanaCCA = ({ services, createData }:any) => [
  createData('Semana 1', services['ccaperiodfam[1sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['ccaperiodfam[2sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['ccaperiodfam[3sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['ccaperiodfam[4sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['ccaperiodfam[5sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['ccaperiodfam[6sem]'], 1, 1, 1, 1, 1, 1),
];

export const idososMoramSozinhoCCINTER = ({ services, createData }:any) => [
  createData('Quantidade de idosos que moram sozinhos',
    services['ccintidoso[idososo]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
  createData('Destes, quantos contam com apoio da família / comunidade',
    services['ccintidoso[contamcajuda]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
];

export const atendidosMesFemininoCCINTER = ({ services, createData }:any) => [
  createData('6 a 11 anos (F)',
    services['ccinteratendfem[6a11f_atendmesatual]'],
    services['ccinteratendfem[6a11f_presmesatual]'],
    services['ccinteratendfem[6a11f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('12 a 14 anos (F)',
    services['ccinteratendfem[12a14f_atendmesatual]'],
    services['ccinteratendfem[12a14f_presmesatual]'],
    services['ccinteratendfem[12a14f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('15 a 17 anos (F)',
    services['ccinteratendfem[15a17f_atendmesatual]'],
    services['ccinteratendfem[15a17f_presmesatual]'],
    services['ccinteratendfem[15a17f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('18 a 29 anos (F)',
    services['ccinteratendfem[18a29f_atendmesatual]'],
    services['ccinteratendfem[18a29f_presmesatual]'],
    services['ccinteratendfem[18a29f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('30 a 59 anos (F)',
    services['ccinteratendfem[30a59f_atendmesatual]'],
    services['ccinteratendfem[30a59f_presmesatual]'],
    services['ccinteratendfem[30a59f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('60 a 64 anos (F)',
    services['ccinteratendfem[60a64f_atendmesatual]'],
    services['ccinteratendfem[60a64f_presmesatual]'],
    services['ccinteratendfem[60a64f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('65 a 69 anos (F)',
    services['ccinteratendfem[65a69f_atendmesatual]'],
    services['ccinteratendfem[65a69f_presmesatual]'],
    services['ccinteratendfem[65a69f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('70 a 74 anos (F)',
    services['ccinteratendfem[70a74f_atendmesatual]'],
    services['ccinteratendfem[70a74f_presmesatual]'],
    services['ccinteratendfem[70a74f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('75 anos ou mais (F)',
    services['ccinteratendfem[75maisf_atendmesatual]'],
    services['ccinteratendfem[75maisf_presmesatual]'],
    services['ccinteratendfem[75maisf_remmesatual]'],
    1, 1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['ccinteratendfem[6a11f_atendmesatual]'], 10)
    + parseInt(services['ccinteratendfem[12a14f_atendmesatual]'], 10)
    + parseInt(services['ccinteratendfem[15a17f_atendmesatual]'], 10)
    + parseInt(services['ccinteratendfem[18a29f_atendmesatual]'], 10)
    + parseInt(services['ccinteratendfem[30a59f_atendmesatual]'], 10)
    + parseInt(services['ccinteratendfem[60a64f_atendmesatual]'], 10)
    + parseInt(services['ccinteratendfem[65a69f_atendmesatual]'], 10)
    + parseInt(services['ccinteratendfem[70a74f_atendmesatual]'], 10)
    + parseInt(services['ccinteratendfem[75maisf_atendmesatual]'], 10),
    parseInt(services['ccinteratendfem[6a11f_presmesatual]'], 10)
    + parseInt(services['ccinteratendfem[12a14f_presmesatual]'], 10)
    + parseInt(services['ccinteratendfem[15a17f_presmesatual]'], 10)
    + parseInt(services['ccinteratendfem[18a29f_presmesatual]'], 10)
    + parseInt(services['ccinteratendfem[30a59f_presmesatual]'], 10)
    + parseInt(services['ccinteratendfem[60a64f_presmesatual]'], 10)
    + parseInt(services['ccinteratendfem[65a69f_presmesatual]'], 10)
    + parseInt(services['ccinteratendfem[70a74f_presmesatual]'], 10)
    + parseInt(services['ccinteratendfem[75maisf_presmesatual]'], 10),
    parseInt(services['ccinteratendfem[6a11f_remmesatual]'], 10)
    + parseInt(services['ccinteratendfem[12a14f_remmesatual]'], 10)
    + parseInt(services['ccinteratendfem[15a17f_remmesatual]'], 10)
    + parseInt(services['ccinteratendfem[18a29f_remmesatual]'], 10)
    + parseInt(services['ccinteratendfem[30a59f_remmesatual]'], 10)
    + parseInt(services['ccinteratendfem[60a64f_remmesatual]'], 10)
    + parseInt(services['ccinteratendfem[65a69f_remmesatual]'], 10)
    + parseInt(services['ccinteratendfem[70a74f_remmesatual]'], 10)
    + parseInt(services['ccinteratendfem[75maisf_remmesatual]'], 10),
    1, 1, 1, 1, 1, 1),
];

export const atendidosMesMasculinoCCINTER = ({ services, createData }:any) => [
  createData('6 a 11 anos (M)',
    services['ccinteratendmasc[6a11m_atendmesatual]'],
    services['ccinteratendmasc[6a11m_presmesatual]'],
    services['ccinteratendmasc[6a11m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('12 a 14 anos (M)',
    services['ccinteratendmasc[12a14m_atendmesatual]'],
    services['ccinteratendmasc[12a14m_presmesatual]'],
    services['ccinteratendmasc[12a14m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('15 a 17 anos (M)',
    services['ccinteratendmasc[15a17m_atendmesatual]'],
    services['ccinteratendmasc[15a17m_presmesatual]'],
    services['ccinteratendmasc[15a17m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('18 a 29 anos (M)',
    services['ccinteratendmasc[18a29m_atendmesatual]'],
    services['ccinteratendmasc[18a29m_presmesatual]'],
    services['ccinteratendmasc[18a29m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('30 a 59 anos (M)',
    services['ccinteratendmasc[30a59m_atendmesatual]'],
    services['ccinteratendmasc[30a59m_presmesatual]'],
    services['ccinteratendmasc[30a59m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('60 a 64 anos (M)',
    services['ccinteratendmasc[60a64m_atendmesatual]'],
    services['ccinteratendmasc[60a64m_presmesatual]'],
    services['ccinteratendmasc[60a64m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('65 a 69 anos (M)',
    services['ccinteratendmasc[65a69m_atendmesatual]'],
    services['ccinteratendmasc[65a69m_presmesatual]'],
    services['ccinteratendmasc[65a69m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('70 a 74 anos (M)',
    services['ccinteratendmasc[70a74m_atendmesatual]'],
    services['ccinteratendmasc[70a74m_presmesatual]'],
    services['ccinteratendmasc[70a74m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('75 anos ou mais (M)',
    services['ccinteratendmasc[75maism_atendmesatual]'],
    services['ccinteratendmasc[75maism_presmesatual]'],
    services['ccinteratendmasc[75maism_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('Total',
    parseInt(services['ccinteratendmasc[6a11m_atendmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[12a14m_atendmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[15a17m_atendmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[18a29m_atendmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[30a59m_atendmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[60a64m_atendmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[65a69m_atendmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[70a74m_atendmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[75maism_atendmesatual]'], 10),
    parseInt(services['ccinteratendmasc[6a11m_presmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[12a14m_presmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[15a17m_presmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[18a29m_presmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[30a59m_presmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[60a64m_presmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[65a69m_presmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[70a74m_presmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[75maism_presmesatual]'], 10),
    parseInt(services['ccinteratendmasc[6a11m_remmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[12a14m_remmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[15a17m_remmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[18a29m_remmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[30a59m_remmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[60a64m_remmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[65a69m_remmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[70a74m_remmesatual]'], 10)
    + parseInt(services['ccinteratendmasc[75maism_remmesatual]'], 10),
    1, 1, 1, 1, 1, 1),
];

export const sexoRacaCorCCINTER = ({ services, createData }:any) => [
  createData('Feminino',
    services['ccintracasexo[fem_branca]'],
    services['ccintracasexo[fem_preta]'],
    services['ccintracasexo[fem_parda]'],
    services['ccintracasexo[fem_amarela]'],
    services['ccintracasexo[fem_indigena]'],
    services['ccintracasexo[fem_naoinf]'],
    parseInt(services['ccintracasexo[fem_branca]'], 10)
    + parseInt(services['ccintracasexo[fem_preta]'], 10)
    + parseInt(services['ccintracasexo[fem_parda]'], 10)
    + parseInt(services['ccintracasexo[fem_amarela]'], 10)
    + parseInt(services['ccintracasexo[fem_indigena]'], 10)
    + parseInt(services['ccintracasexo[fem_naoinf]'], 10), 1, 1),
  createData('Masculino',
    services['ccintracasexo[masc_branca]'],
    services['ccintracasexo[masc_preta]'],
    services['ccintracasexo[masc_parda]'],
    services['ccintracasexo[masc_amarela]'],
    services['ccintracasexo[masc_indigena]'],
    services['ccintracasexo[masc_naoinf]'],
    parseInt(services['ccintracasexo[masc_branca]'], 10)
    + parseInt(services['ccintracasexo[masc_preta]'], 10)
    + parseInt(services['ccintracasexo[masc_parda]'], 10)
    + parseInt(services['ccintracasexo[masc_amarela]'], 10)
    + parseInt(services['ccintracasexo[masc_indigena]'], 10)
    + parseInt(services['ccintracasexo[masc_naoinf]'], 10), 1, 1),
  createData('Total Geral',
    parseInt(services['ccintracasexo[masc_branca]'], 10)
    + parseInt(services['ccintracasexo[fem_branca]'], 10),
    parseInt(services['ccintracasexo[masc_preta]'], 10)
    + parseInt(services['ccintracasexo[fem_preta]'], 10),
    parseInt(services['ccintracasexo[masc_parda]'], 10)
    + parseInt(services['ccintracasexo[fem_parda]'], 10),
    parseInt(services['ccintracasexo[masc_amarela]'], 10)
    + parseInt(services['ccintracasexo[fem_amarela]'], 10),
    parseInt(services['ccintracasexo[masc_indigena]'], 10)
    + parseInt(services['ccintracasexo[fem_indigena]'], 10),
    parseInt(services['ccintracasexo[masc_naoinf]'], 10)
    + parseInt(services['ccintracasexo[fem_naoinf]'], 10),
    parseInt(services['ccintracasexo[masc_branca]'], 10)
    + parseInt(services['ccintracasexo[fem_branca]'], 10)
    + parseInt(services['ccintracasexo[masc_preta]'], 10)
    + parseInt(services['ccintracasexo[fem_preta]'], 10)
    + parseInt(services['ccintracasexo[masc_parda]'], 10)
    + parseInt(services['ccintracasexo[fem_parda]'], 10)
    + parseInt(services['ccintracasexo[masc_amarela]'], 10)
    + parseInt(services['ccintracasexo[fem_amarela]'], 10)
    + parseInt(services['ccintracasexo[masc_indigena]'], 10)
    + parseInt(services['ccintracasexo[fem_indigena]'], 10)
    + parseInt(services['ccintracasexo[masc_naoinf]'], 10)
    + parseInt(services['ccintracasexo[fem_naoinf]'], 10), 1, 1),
];

export const motivosSaidaCCINTER = ({ services, createData }:any) => [
  createData('Mudança de endereço',
    services['ccintersaidas[endereco_6a14]'],
    services['ccintersaidas[endereco_15a17]'],
    services['ccintersaidas[endereco_18a29]'],
    services['ccintersaidas[endereco_30a59]'],
    services['ccintersaidas[endereco_60a64]'],
    services['ccintersaidas[endereco_65a69]'],
    services['ccintersaidas[endereco_70a74]'],
    services['ccintersaidas[endereco_75mais]'],
    parseInt(services['ccintersaidas[endereco_6a14]'], 10)
    + parseInt(services['ccintersaidas[endereco_15a17]'], 10)
    + parseInt(services['ccintersaidas[endereco_18a29]'], 10)
    + parseInt(services['ccintersaidas[endereco_30a59]'], 10)
    + parseInt(services['ccintersaidas[endereco_60a64]'], 10)
    + parseInt(services['ccintersaidas[endereco_65a69]'], 10)
    + parseInt(services['ccintersaidas[endereco_70a74]'], 10)
    + parseInt(services['ccintersaidas[endereco_75mais]'], 10)),
  createData('Transferência para outro serviço',
    services['ccintersaidas[transferencia_6a14]'],
    services['ccintersaidas[transferencia_15a17]'],
    services['ccintersaidas[transferencia_18a29]'],
    services['ccintersaidas[transferencia_30a59]'],
    services['ccintersaidas[transferencia_60a64]'],
    services['ccintersaidas[transferencia_65a69]'],
    services['ccintersaidas[transferencia_70a74]'],
    services['ccintersaidas[transferencia_75mais]'],
    parseInt(services['ccintersaidas[transferencia_6a14]'], 10)
    + parseInt(services['ccintersaidas[transferencia_15a17]'], 10)
    + parseInt(services['ccintersaidas[transferencia_18a29]'], 10)
    + parseInt(services['ccintersaidas[transferencia_30a59]'], 10)
    + parseInt(services['ccintersaidas[transferencia_60a64]'], 10)
    + parseInt(services['ccintersaidas[transferencia_65a69]'], 10)
    + parseInt(services['ccintersaidas[transferencia_70a74]'], 10)
    + parseInt(services['ccintersaidas[transferencia_75mais]'], 10)),
  createData('Abandono',
    services['ccintersaidas[aband_6a14]'],
    services['ccintersaidas[aband_15a17]'],
    services['ccintersaidas[aband_18a29]'],
    services['ccintersaidas[aband_30a59]'],
    services['ccintersaidas[aband_60a64]'],
    services['ccintersaidas[aband_65a69]'],
    services['ccintersaidas[aband_70a74]'],
    services['ccintersaidas[aband_75mais]'],
    parseInt(services['ccintersaidas[aband_6a14]'], 10)
    + parseInt(services['ccintersaidas[aband_15a17]'], 10)
    + parseInt(services['ccintersaidas[aband_18a29]'], 10)
    + parseInt(services['ccintersaidas[aband_30a59]'], 10)
    + parseInt(services['ccintersaidas[aband_60a64]'], 10)
    + parseInt(services['ccintersaidas[aband_65a69]'], 10)
    + parseInt(services['ccintersaidas[aband_70a74]'], 10)
    + parseInt(services['ccintersaidas[aband_75mais]'], 10)),
  createData('Óbito',
    services['ccintersaidas[obito_6a14]'],
    services['ccintersaidas[obito_15a17]'],
    services['ccintersaidas[obito_18a29]'],
    services['ccintersaidas[obito_30a59]'],
    services['ccintersaidas[obito_60a64]'],
    services['ccintersaidas[obito_65a69]'],
    services['ccintersaidas[obito_70a74]'],
    services['ccintersaidas[obito_75mais]'],
    1),
  createData('Inserção no Programa Jovem Aprendiz',
    services['ccintersaidas[programajaprendiz_6a14]'],
    services['ccintersaidas[programajaprendiz_15a17]'],
    services['ccintersaidas[programajaprendiz_18a29]'],
    services['ccintersaidas[programajaprendiz_30a59]'],
    services['ccintersaidas[programajaprendiz_60a64]'],
    services['ccintersaidas[programajaprendiz_65a69]'],
    services['ccintersaidas[programajaprendiz_70a74]'],
    services['ccintersaidas[programajaprendiz_75mais]'],
    parseInt(services['ccintersaidas[programajaprendiz_6a14]'], 10)
    + parseInt(services['ccintersaidas[programajaprendiz_15a17]'], 10)
    + parseInt(services['ccintersaidas[programajaprendiz_18a29]'], 10)
    + parseInt(services['ccintersaidas[programajaprendiz_30a59]'], 10)
    + parseInt(services['ccintersaidas[programajaprendiz_60a64]'], 10)
    + parseInt(services['ccintersaidas[programajaprendiz_65a69]'], 10)
    + parseInt(services['ccintersaidas[programajaprendiz_70a74]'], 10)
    + parseInt(services['ccintersaidas[programajaprendiz_75mais]'], 10)),
  createData('Inserção no mercado de trabalho',
    services['ccintersaidas[insertrabalho_6a14]'],
    services['ccintersaidas[insertrabalho_15a17]'],
    services['ccintersaidas[insertrabalho_18a29]'],
    services['ccintersaidas[insertrabalho_30a59]'],
    services['ccintersaidas[insertrabalho_60a64]'],
    services['ccintersaidas[insertrabalho_65a69]'],
    services['ccintersaidas[insertrabalho_70a74]'],
    services['ccintersaidas[insertrabalho_75mais]'],
    parseInt(services['ccintersaidas[insertrabalho_6a14]'], 10)
    + parseInt(services['ccintersaidas[insertrabalho_15a17]'], 10)
    + parseInt(services['ccintersaidas[insertrabalho_18a29]'], 10)
    + parseInt(services['ccintersaidas[insertrabalho_30a59]'], 10)
    + parseInt(services['ccintersaidas[insertrabalho_60a64]'], 10)
    + parseInt(services['ccintersaidas[insertrabalho_65a69]'], 10)
    + parseInt(services['ccintersaidas[insertrabalho_70a74]'], 10)
    + parseInt(services['ccintersaidas[insertrabalho_75mais]'], 10)),
  createData('Aplicação de medida restritiva de liberdade',
    services['ccintersaidas[medrestritiva_6a14]'],
    services['ccintersaidas[medrestritiva_15a17]'],
    services['ccintersaidas[medrestritiva_18a29]'],
    services['ccintersaidas[medrestritiva_30a59]'],
    services['ccintersaidas[medrestritiva_60a64]'],
    services['ccintersaidas[medrestritiva_65a69]'],
    services['ccintersaidas[medrestritiva_70a74]'],
    services['ccintersaidas[medrestritiva_75mais]'],
    parseInt(services['ccintersaidas[medrestritiva_6a14]'], 10)
    + parseInt(services['ccintersaidas[medrestritiva_15a17]'], 10)
    + parseInt(services['ccintersaidas[medrestritiva_18a29]'], 10)
    + parseInt(services['ccintersaidas[medrestritiva_30a59]'], 10)
    + parseInt(services['ccintersaidas[medrestritiva_60a64]'], 10)
    + parseInt(services['ccintersaidas[medrestritiva_65a69]'], 10)
    + parseInt(services['ccintersaidas[medrestritiva_70a74]'], 10)
    + parseInt(services['ccintersaidas[medrestritiva_75mais]'], 10)),
];

export const familiasVulnerabilidadeCCINTER = ({ services, createData }:any) => [
  createData('Conflitos', services['ccintvulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Preconceitos/discriminação', services['ccintvulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Abandono', services['ccintvulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Apartação', services['ccintvulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Confinamento', services['ccintvulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Isolamento', services['ccintvulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Violência', services['ccintvulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentoFamiliaCCINTER = ({ services, createData }:any) => [
  createData('Nº de famílias atendidas presencialmente', services['ccintfam[ccafampres]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de famílias acompanhadas de forma remota', services['ccintfam[ccafamrem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atividadesItemsCCINTER = ({ services, createData }:any) => [
  ['Atividades esportivas', services['ccintatividades[atvesporte]']],
  ['Musicalidade (cantar, tocar instrumentos etc.)', services['ccintatividades[atvmusica]']],
  ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', services['ccintatividades[atvcultura]']],
  ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', services['ccintatividades[atvarte]']],
  ['Atividades de inclusão digital', services['ccintatividades[atvincdigital]']],
  ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['ccintatividades[atvlinguagem]']],
  ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['ccintatividades[atvculinaria]']],
  ['Atividades recreativas (jogos, brincadeiras, etc.)', services['ccintatividades[atvrecreacao]']],

];
export const temasItemsCCINTER = ({ services, createData }:any) => [

  ['Temas transversais (saúde, meio ambiente, cultura, esporte etc.)', services['ccinttema[tematransversal]']],
  ['Direitos e programas sociais', services['ccinttema[temadireitos]']],
  ['Segurança alimentar e nutricional', services['ccinttema[temanutricao]']],
  ['Igualdade entre homens e mulheres', services['ccinttema[temaigualdade]']],
  ['Orientação sexual e de identidade de gênero', services['ccinttema[temaorientsexual]']],
  ['Relações étnico-raciais', services['ccinttema[temaetnico]']],
  ['Prevenção ao uso de álcool e drogas', services['ccinttema[temaalccoldrogas]']],
  ['Prevenção à violência', services['ccinttema[temaprevencaovio]']],
  ['Parentalidade', services['ccinttema[temaparental]']],
  ['Deficiência e acessibilidade', services['ccinttema[temapcd]']],
  ['Mundo do trabalho', services['ccinttema[tematrabalho]']],
];
export const demandaReprimidaCCINTER = ({ services, createData }:any) => [

  createData('6 a 11 anos', services['ccinterlistaespera[6a11_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('12 a 17 anos', services['ccinterlistaespera[12a14_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('18 a 29 anos', services['ccinterlistaespera[18a29_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('30 a 59 anos', services['ccinterlistaespera[30a59_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('60 a 64 anos', services['ccinterlistaespera[60a64_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('65 a 69 anos', services['ccinterlistaespera[65a69_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('70 a 74 anos', services['ccinterlistaespera[70a74_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('75 anos ou mais', services['ccinterlistaespera[75mais_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['ccinterlistaespera[6a11_quantidade]'], 10)
    + parseInt(services['ccinterlistaespera[12a14_quantidade]'], 10)
    + parseInt(services['ccinterlistaespera[18a29_quantidade]'], 10)
    + parseInt(services['ccinterlistaespera[30a59_quantidade]'], 10)
    + parseInt(services['ccinterlistaespera[60a64_quantidade]'], 10)
    + parseInt(services['ccinterlistaespera[65a69_quantidade]'], 10)
    + parseInt(services['ccinterlistaespera[70a74_quantidade]'], 10)
    + parseInt(services['ccinterlistaespera[75mais_quantidade]'], 10),
    1, 1, 1, 1, 1, 1, 1, 1),
];
export const encaminhamentosCCINTER = ({ services, createData }:any) => [

  createData('CRAS', services['ccinterencaminha[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['ccinterencaminha[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['ccinterencaminha[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Saúde', services['ccinterencaminha[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Educação', services['ccinterencaminha[educacao]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Conselhos de direito', services['ccinterencaminha[direito]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Trabalho e renda', services['ccinterencaminha[trab]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['ccinterencaminha[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
];
export const atendimentosRemotosCCINTER = ({ services, createData }:any) => [

  createData('Semana 1', services['ccinteratendremperio[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['ccinteratendremperio[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['ccinteratendremperio[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['ccinteratendremperio[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['ccinteratendremperio[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['ccinteratendremperio[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];
export const atendimentosRemotosTiposCCINTER = ({ services, createData }:any) => [

  createData('Telefone / Celular / Whatsapp', services['ccintatendremdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Email', services['ccintatendremdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Facebook', services['ccintatendremdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('YouTube', services['ccintatendremdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras redes sociais', services['ccintatendremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Entrega de kits de atividades', services['ccintatendremdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outros', services['ccintatendremdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosFamiliaSemanaCCINTER = ({ services, createData }:any) => [

  createData('Semana 1', services['ccinterperiodfam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['ccinterperiodfam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['ccinterperiodfam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['ccinterperiodfam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['ccinterperiodfam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['ccinterperiodfam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendidosMesCDCM = ({ services, createData }:any) => [

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
export const sexoRacaCorCDCM = ({ services, createData }:any) => [

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

export const violenciaAgressorCDCM = ({ services, createData }:any) => [

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
export const atendimentoTecnicoCDCM = ({ services, createData }:any) => [

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
export const motivosSaidaCDCM = ({ services, createData }:any) => [

  createData('Rompimento da situação de violência',
    services['cdcmmotivosaid[saidaromviolencia]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),

  createData('Mudança de Endereço',
    services['cdcmmotivosaid[saidamudancaend]'],
    1,
    1,
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
    1,
    1,
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
export const territorioMoradiaCDCM = ({ services, createData }:any) => [

  createData('No mesmo distrito onde o serviço está localizado', services['cdcmtempopermanen[spvvdistrito]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Na mesma subprefeitura (SAS) onde o serviço está localizado', services['cdcmtempopermanen[spvvsubpr]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Em outra subprefeitura (SAS) onde o serviço está localizado', services['cdcmtempopermanen[spvvservi]'], 1, 1, 1, 1, 1, 1, 1, 1),

];
export const usuariosOficinasCDCM = ({ services, createData }:any) => [

  createData('N° de mulheres que participaram de oficinas de convivência', services['cdcmoficina[convivencia]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('N° de mulheres que participaram de oficinas de defesa', services['cdcmoficina[defesa]'], 1, 1, 1, 1, 1, 1, 1, 1),

];
export const testeCDCM = ({ services, createData }:any) => [

  createData('N° de mulheres que participaram de oficinas de convivência', services.cdcmacolhidas, 1, 1, 1, 1, 1, 1, 1, 1),

];
export const visitasReunioesCDCM = ({ services, createData }:any) => [

  createData('N° de visitas domiciliares', services['cdcmvisitas[visdom]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('N° de reuniões de articulação com a rede', services['cdcmvisitas[visinst]'], 1, 1, 1, 1, 1, 1, 1, 1),

];
export const encaminhamentosCDCM = ({ services, createData }:any) => [

  createData('CRAS', services['cdcmencaminhamento[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['cdcmencaminhamento[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Centro de Acolhida para Mulheres em Situação de Violência (sigiloso)', services['cdcmencaminhamento[caemvv]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Centro de Acolhida Especial para Mulheres', services['cdcmencaminhamento[caem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Casa de Passagem', services['cdcmencaminhamento[casapas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Hotel', services['cdcmencaminhamento[hotel]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['cdcmencaminhamento[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Saúde', services['cdcmencaminhamento[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Educação', services['cdcmencaminhamento[educacao]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Judiciário', services['cdcmencaminhamento[judiciario]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Trabalho e renda', services['cdcmencaminhamento[trabalhorenda]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['cdcmencaminhamento[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
];
export const atendimentosRemotosTiposCDCM = ({ services, createData }:any) => [

  createData('Telefone / Celular / Whatsapp', services['cdcmdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Email', services['cdcmdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Facebook', services['cdcmdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('YouTube', services['cdcmdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras redes sociais', services['cdcmdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Entrega de kits de atividades', services['cdcmdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outros', services['cdcmdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosMulheresCDMC = ({ services, createData }:any) => [

  createData('Semana 1', services['cdcmatendremmulher[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['cdcmatendremmulher[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['cdcmatendremmulher[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['cdcmatendremmulher[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['cdcmatendremmulher[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['cdcmatendremmulher[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1)];

export const atendimentosRemotosFamiliaSemanaCDCM = ({ services, createData }:any) => [

  createData('Semana 1', services['cdcmatendremfam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['cdcmatendremfam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['cdcmatendremfam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['cdcmatendremfam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['cdcmatendremfam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['cdcmatendremfam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendidosMesFemininoCDI = ({ services, createData }:any) => [

  createData('60 a 64 anos (F)',
    services['cdiatenfxetariafem[60a64f_atendmesatual]'],
    services['cdiatenfxetariafem[60a64f_freqpres]'],
    services['cdiatenfxetariafem[60a64f_freqrem]'],
    1, 1, 1, 1, 1, 1),
  createData('65 a 69 anos (F)',
    services['cdiatenfxetariafem[65a69f_atendmesatual]'],
    services['cdiatenfxetariafem[65a69f_freqpres]'],
    services['cdiatenfxetariafem[65a69f_freqrem]'],
    1, 1, 1, 1, 1, 1),
  createData('70 a 74 anos (F)',
    services['cdiatenfxetariafem[70a74f_atendmesatual]'],
    services['cdiatenfxetariafem[70a74f_freqpres]'],
    services['cdiatenfxetariafem[70a74f_freqrem]'],
    1, 1, 1, 1, 1, 1),
  createData('75 anos ou mais (F)',
    services['cdiatenfxetariafem[75oumaisf_atendmesatual]'],
    services['cdiatenfxetariafem[75oumaisf_freqpres]'],
    services['cdiatenfxetariafem[75oumaisf_freqrem]'],
    1, 1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['cdiatenfxetariafem[60a64f_atendmesatual]'], 10)
    + parseInt(services['cdiatenfxetariafem[65a69f_atendmesatual]'], 10)
    + parseInt(services['cdiatenfxetariafem[70a74f_atendmesatual]'], 10)
    + parseInt(services['cdiatenfxetariafem[75oumaisf_atendmesatual]'], 10),
    parseInt(services['cdiatenfxetariafem[60a64f_freqpres]'], 10)
    + parseInt(services['cdiatenfxetariafem[65a69f_freqpres]'], 10)
    + parseInt(services['cdiatenfxetariafem[70a74f_freqpres]'], 10)
    + parseInt(services['cdiatenfxetariafem[75oumaisf_freqpres]'], 10),
    parseInt(services['cdiatenfxetariafem[60a64f_freqrem]'], 10)
    + parseInt(services['cdiatenfxetariafem[65a69f_freqrem]'], 10)
    + parseInt(services['cdiatenfxetariafem[70a74f_freqrem]'], 10)
    + parseInt(services['cdiatenfxetariafem[75oumaisf_freqrem]'], 10), 1, 1, 1, 1, 1, 1),
];

export const atendidosMesMasculinoCDI = ({ services, createData }:any) => [

  createData('60 a 64 anos (M)',
    services['cdiatenfxetariamasc[60a64m_atendmesatual]'],
    services['cdiatenfxetariamasc[60a64m_freqpres]'],
    services['cdiatenfxetariamasc[60a64m_freqrem]'],
    1, 1, 1, 1, 1, 1),
  createData('65 a 69 anos (M)',
    services['cdiatenfxetariamasc[65a69m_atendmesatual]'],
    services['cdiatenfxetariamasc[65a69m_freqpres]'],
    services['cdiatenfxetariamasc[65a69m_freqrem]'],
    1, 1, 1, 1, 1, 1),
  createData('70 a 74 anos (M)',
    services['cdiatenfxetariamasc[70a74m_atendmesatual]'],
    services['cdiatenfxetariamasc[70a74m_freqpres]'],
    services['cdiatenfxetariamasc[70a74m_freqrem]'],
    1, 1, 1, 1, 1, 1),
  createData('75 anos ou mais (M)',
    services['cdiatenfxetariamasc[75oumaism_atendmesatual]'],
    services['cdiatenfxetariamasc[75oumaism_freqpres]'],
    services['cdiatenfxetariamasc[75oumaism_freqrem]'],
    1, 1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['cdiatenfxetariamasc[60a64m_atendmesatual]'], 10)
    + parseInt(services['cdiatenfxetariamasc[65a69m_atendmesatual]'], 10)
    + parseInt(services['cdiatenfxetariamasc[70a74m_atendmesatual]'], 10)
    + parseInt(services['cdiatenfxetariamasc[75oumaism_atendmesatual]'], 10),
    parseInt(services['cdiatenfxetariamasc[60a64m_freqpres]'], 10)
    + parseInt(services['cdiatenfxetariamasc[65a69m_freqpres]'], 10)
    + parseInt(services['cdiatenfxetariamasc[70a74m_freqpres]'], 10)
    + parseInt(services['cdiatenfxetariamasc[75oumaism_freqpres]'], 10),
    parseInt(services['cdiatenfxetariamasc[60a64m_freqrem]'], 10)
    + parseInt(services['cdiatenfxetariamasc[65a69m_freqrem]'], 10)
    + parseInt(services['cdiatenfxetariamasc[70a74m_freqrem]'], 10)
    + parseInt(services['cdiatenfxetariamasc[75oumaism_freqrem]'], 10), 1, 1, 1, 1, 1, 1),

];
export const sexoRacaCorCDI = ({ services, createData }:any) => [

  createData('Feminino',
    services['cdiracasexo[fem_branca]'],
    services['cdiracasexo[fem_preta]'],
    services['cdiracasexo[fem_parda]'],
    services['cdiracasexo[fem_amarela]'],
    services['cdiracasexo[fem_indigena]'],
    services['cdiracasexo[fem_naoinf]'],
    parseInt(services['cdiracasexo[fem_branca]'], 10)
    + parseInt(services['cdiracasexo[fem_preta]'], 10)
    + parseInt(services['cdiracasexo[fem_parda]'], 10)
    + parseInt(services['cdiracasexo[fem_amarela]'], 10)
    + parseInt(services['cdiracasexo[fem_indigena]'], 10)
    + parseInt(services['cdiracasexo[fem_naoinf]'], 10), 1, 1),
  createData('Masculino',
    services['cdiracasexo[masc_branca]'],
    services['cdiracasexo[masc_preta]'],
    services['cdiracasexo[masc_parda]'],
    services['cdiracasexo[masc_amarela]'],
    services['cdiracasexo[masc_indigena]'],
    services['cdiracasexo[masc_naoinf]'],
    parseInt(services['cdiracasexo[masc_branca]'], 10)
    + parseInt(services['cdiracasexo[masc_preta]'], 10)
    + parseInt(services['cdiracasexo[masc_parda]'], 10)
    + parseInt(services['cdiracasexo[masc_amarela]'], 10)
    + parseInt(services['cdiracasexo[masc_indigena]'], 10)
    + parseInt(services['cdiracasexo[masc_naoinf]'], 10), 1, 1),
  createData('Total Geral',
    parseInt(services['cdiracasexo[masc_branca]'], 10)
    + parseInt(services['cdiracasexo[fem_branca]'], 10),
    parseInt(services['cdiracasexo[masc_preta]'], 10)
    + parseInt(services['cdiracasexo[fem_preta]'], 10),
    parseInt(services['cdiracasexo[masc_parda]'], 10)
    + parseInt(services['cdiracasexo[fem_parda]'], 10),
    parseInt(services['cdiracasexo[masc_amarela]'], 10)
    + parseInt(services['cdiracasexo[fem_amarela]'], 10),
    parseInt(services['cdiracasexo[masc_indigena]'], 10)
    + parseInt(services['cdiracasexo[fem_indigena]'], 10),
    parseInt(services['cdiracasexo[masc_naoinf]'], 10)
    + parseInt(services['cdiracasexo[fem_naoinf]'], 10),
    parseInt(services['cdiracasexo[masc_branca]'], 10)
    + parseInt(services['cdiracasexo[fem_branca]'], 10)
    + parseInt(services['cdiracasexo[masc_preta]'], 10)
    + parseInt(services['cdiracasexo[fem_preta]'], 10)
    + parseInt(services['cdiracasexo[masc_parda]'], 10)
    + parseInt(services['cdiracasexo[fem_parda]'], 10)
    + parseInt(services['cdiracasexo[masc_amarela]'], 10)
    + parseInt(services['cdiracasexo[fem_amarela]'], 10)
    + parseInt(services['cdiracasexo[masc_indigena]'], 10)
    + parseInt(services['cdiracasexo[fem_indigena]'], 10)
    + parseInt(services['cdiracasexo[masc_naoinf]'], 10)
    + parseInt(services['cdiracasexo[fem_naoinf]'], 10), 1, 1),
];
export const motivosSaidaCDI = ({ services, createData }:any) => [

  createData('Dificuldades em frequentar o serviço - transporte',
    services['cdisaida[saidatransp]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('Dificuldades em frequentar o serviço - participação familiar',
    services['cdisaida[saidapartfam]'],
    services['cdisaida[mudancaendereco_18a29]'],
    services['cdisaida[mudancaendereco_30a59]'],
    parseInt(services['cdisaida[mudancaendereco_15a17]'], 10)
    + parseInt(services['cdisaida[mudancaendereco_18a29]'], 10)
    + parseInt(services['cdisaida[mudancaendereco_30a59]'], 10), 1, 1, 1, 1, 1),
  createData('Mudança de endereço',
    services['cdisaida[saidamudend]'],
    services['cdisaida[mudancaendereco_18a29]'],
    services['cdisaida[mudancaendereco_30a59]'],
    parseInt(services['cdisaida[mudancaendereco_15a17]'], 10)
    + parseInt(services['cdisaida[mudancaendereco_18a29]'], 10)
    + parseInt(services['cdisaida[mudancaendereco_30a59]'], 10), 1, 1, 1, 1, 1),
  createData('Problemas de saúde',
    services['cdisaida[saidaproblsaude]'],
    services['cdisaida[transferencia_18a29]'],
    services['cdisaida[transferencia_30a59]'],
    parseInt(services['cdisaida[transferencia_15a17]'], 10)
    + parseInt(services['cdisaida[transferencia_18a29]'], 10)
    + parseInt(services['cdisaida[transferencia_30a59]'], 10),
    1,
    1,
    1,
    1,
    1),
  createData('Acolhimento Institucional',
    services['cdisaida[saidaacolhimento]'],
    services['cdisaida[aband_18a29]'],
    services['cdisaida[aband_30a59]'],
    parseInt(services['cdisaida[aband_15a17]'], 10)
    + parseInt(services['cdisaida[aband_18a29]'], 10)
    + parseInt(services['cdisaida[aband_30a59]'], 10),
    1,
    1,
    1,
    1,
    1),
  createData('Óbito',
    services['cdisaida[saidaobito]'],
    services['cdisaida[obito_18a29]'],
    services['cdisaida[obito_30a59]'],
    parseInt(services['cdisaida[obito_15a17]'], 10)
    + parseInt(services['cdisaida[obito_18a29]'], 10)
    + parseInt(services['cdisaida[obito_30a59]'], 10),
    1,
    1,
    1,
    1,
    1),

];
export const atendimentoTecnicoCDI = ({ services, createData }:any) => [

  createData('Assistente Social', services['cdiatendtecnico[atendas_atendpres]'], services['cdiatendtecnico[atendas_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Psicólogo', services['cdiatendtecnico[atendpsico_atendpres]'], services['cdiatendtecnico[atendpsico_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Nutricionista', services['cdiatendtecnico[atendnutri_atendpres]'], services['cdiatendtecnico[atendnutri_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Enfermeiro', services['cdiatendtecnico[atendenfer_atendpres]'], services['cdiatendtecnico[atendenfer_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Terapeuta Ocupacional', services['cdiatendtecnico[atendto_atendpres]'], services['cdiatendtecnico[atendto_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
];
export const atendimentoTecnicoFamiliasCDI = ({ services, createData }:any) => [

  createData('Assistente Social', services['cdifamatendtecnico[atendas_atendpres]'], services['cdifamatendtecnico[atendas_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Psicólogo', services['cdifamatendtecnico[atendpsico_atendpres]'], services['cdifamatendtecnico[atendpsico_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Nutricionista', services['cdifamatendtecnico[atendnutri_atendpres]'], services['cdifamatendtecnico[atendnutri_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Enfermeiro', services['cdifamatendtecnico[atendenfer_atendpres]'], services['cdifamatendtecnico[atendenfer_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Terapeuta Ocupacional', services['cdifamatendtecnico[atendto_atendpres]'], services['cdifamatendtecnico[atendto_atendrem]'], 1, 1, 1, 1, 1, 1, 1),
];
export const usuarioGrauDependenciaCDI = ({ services, createData }:any) => [

  createData('Grau de Dependência I', services['cdigraudepend[grau1]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Grau de Dependência II', services['cdigraudepend[grau2]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Grau de Dependência III', services['cdigraudepend[grau3]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const encaminhamentosCDI = ({ services, createData }:any) => [

  createData('CRAS', services['cdiencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['cdiencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['cdiencaminhamentos[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Saúde', services['cdiencaminhamentos[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Direitos Humanos', services['cdiencaminhamentos[dh]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Documentação', services['cdiencaminhamentos[doc]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Serviços de Garantia de Direitos (MP, Defensoria)', services['cdiencaminhamentos[gdireitos]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['cdiencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosCDI = ({ services, createData }:any) => [

  createData('Semana 1', services['cdiatendremperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['cdiatendremperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['cdiatendremperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['cdiatendremperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['cdiatendremperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['cdiatendremperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosTiposCDI = ({ services, createData }:any) => [

  createData('Telefone / Celular / Whatsapp', services['cdiatenddisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Email', services['cdiatenddisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Facebook', services['cdiatenddisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('YouTube', services['cdiatenddisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras redes sociais', services['cdiatenddisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Entrega de kits de atividades', services['cdiatenddisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outros', services['cdiatenddisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
];
export const atendimentosRemotosFamiliaSemanaCDI = ({ services, createData }:any) => [

  createData('Semana 1', services['cdiatendremfamperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['cdiatendremfamperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['cdiatendremfamperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['cdiatendremfamperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['cdiatendremfamperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['cdiatendremfamperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendidosMesFemininoCEDESP = ({ services, createData }:any) => [

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

export const atendidosMesMasculinoCEDESP = ({ services, createData }:any) => [

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

export const sexoRacaCorCEDESP = ({ services, createData }:any) => [

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

export const motivosSaidaCEDESP = ({ services, createData }:any) => [

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

export const familiasInsumosCEDESP = ({ services, createData }:any) => [

  createData('Cesta de alimentos',
    services['cedesinsumos[cestasaliment_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Kit de material de higiene',
    services['cedesinsumos[kithiginene_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const familiasVulnerabilidadeCEDESP = ({ services, createData }:any) => [
  createData('Conflitos', services['cedesvulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Preconceitos/discriminação', services['cedesvulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Abandono', services['cedesvulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Apartação', services['cedesvulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Confinamento', services['cedesvulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Isolamento', services['cedesvulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Violência', services['cedesvulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentoFamiliaCEDESP = ({ services, createData }:any) => [
  createData('Nº de famílias atendidas presencialmente', services['cedesatenfam[ccafampres]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de famílias acompanhadas de forma remota', services['cedesatenfam[ccafamrem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº total de famílias atendidas no mês', services['cedesatenfam[ccafamtotal]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const temasItemsCEDESP = ({ services, createData }:any) => [

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

export const demandaReprimidaCEDESP = ({ services, createData }:any) => [

  createData('12 a 17 anos', services['cedeslistaespera[6a11_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('18 a 29 anos', services['cedeslistaespera[12a14_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('30 a 59 anos', services['cedeslistaespera[18a29_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['cedeslistaespera[6a11_quantidade]'], 10)
    + parseInt(services['cedeslistaespera[12a14_quantidade]'], 10)
    + parseInt(services['cedeslistaespera[18a29_quantidade]'], 10),
    1, 1, 1, 1, 1, 1, 1, 1),
];

export const encaminhamentosCEDESP = ({ services, createData }:any) => [

  createData('CRAS', services['cedesencaminhamento[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['cedesencaminhamento[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['cedesencaminhamento[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Saúde', services['cedesencaminhamento[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Educação', services['cedesencaminhamento[educa]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Conselhos de direito', services['cedesencaminhamento[cdireito]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Trabalho e renda', services['cedesencaminhamento[trabalho]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['cedesencaminhamento[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosCEDESP = ({ services, createData }:any) => [

  createData('Semana 1', services['cedespesremperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['cedespesremperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['cedespesremperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['cedespesremperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['cedespesremperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['cedespesremperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosTiposCEDESP = ({ services, createData }:any) => [

  createData('Telefone / Celular / Whatsapp', services['cedesatendremdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Email', services['cedesatendremdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Facebook', services['cedesatendremdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('YouTube', services['cedesatendremdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras redes sociais', services['cedesatendremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Entrega de kits de atividades', services['cedesatendremdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outros', services['cedesatendremdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosFamiliaSemanaCEDESP = ({ services, createData }:any) => [

  createData('Semana 1', services['cedesfamremperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['cedesfamremperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['cedesfamremperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['cedesfamremperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['cedesfamremperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['cedesfamremperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendidosMesCIRCO = ({ services, createData }:any) => [

  createData('6 a 11 anos (M)',
    services['circofluxoatend[6a11m_atendmesatual]'],
    services['circofluxoatend[6a11m_presmesatual]'],
    services['circofluxoatend[6a11m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('6 a 11 anos (F)',
    services['circofluxoatend[6a11f_atendmesatual]'],
    services['circofluxoatend[6a11f_presmesatual]'],
    services['circofluxoatend[6a11f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('12 a 14 anos (M)',
    services['circofluxoatend[12a14m_atendmesatual]'],
    services['circofluxoatend[12a14m_presmesatual]'],
    services['circofluxoatend[12a14m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('12 a 14 anos (F)',
    services['circofluxoatend[12a14f_atendmesatual]'],
    services['circofluxoatend[12a14f_presmesatual]'],
    services['circofluxoatend[12a14f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('15 a 17 anos (M)',
    services['circofluxoatend[15a17m_atendmesatual]'],
    services['circofluxoatend[15a17m_presmesatual]'],
    services['circofluxoatend[15a17m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('15 a 17 anos (F)',
    services['circofluxoatend[15a17f_atendmesatual]'],
    services['circofluxoatend[15a17f_presmesatual]'],
    services['circofluxoatend[15a17f_remmesatual]'],
    1, 1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['circofluxoatend[6a11m_atendmesatual]'], 10)
    + parseInt(services['circofluxoatend[6a11f_atendmesatual]'], 10)
    + parseInt(services['circofluxoatend[12a14m_atendmesatual]'], 10)
    + parseInt(services['circofluxoatend[12a14f_atendmesatual]'], 10)
    + parseInt(services['circofluxoatend[15a17m_atendmesatual]'], 10)
    + parseInt(services['circofluxoatend[15a17f_atendmesatual]'], 10),
    parseInt(services['circofluxoatend[6a11m_presmesatual]'], 10)
    + parseInt(services['circofluxoatend[6a11f_presmesatual]'], 10)
    + parseInt(services['circofluxoatend[12a14m_presmesatual]'], 10)
    + parseInt(services['circofluxoatend[12a14f_presmesatual]'], 10)
    + parseInt(services['circofluxoatend[15a17m_presmesatual]'], 10)
    + parseInt(services['circofluxoatend[15a17f_presmesatual]'], 10),
    parseInt(services['circofluxoatend[6a11m_remmesatual]'], 10)
    + parseInt(services['circofluxoatend[6a11f_remmesatual]'], 10)
    + parseInt(services['circofluxoatend[12a14m_remmesatual]'], 10)
    + parseInt(services['circofluxoatend[12a14f_remmesatual]'], 10)
    + parseInt(services['circofluxoatend[15a17m_remmesatual]'], 10)
    + parseInt(services['circofluxoatend[15a17f_remmesatual]'], 10),
    1, 1, 1, 1, 1, 1),
];

export const sexoRacaCorCIRCO = ({ services, createData }:any) => [

  createData('Feminino',
    services['circoracasexo[fem_branca]'],
    services['circoracasexo[fem_preta]'],
    services['circoracasexo[fem_parda]'],
    services['circoracasexo[fem_amarela]'],
    services['circoracasexo[fem_indigena]'],
    services['circoracasexo[fem_naoinf]'],
    parseInt(services['circoracasexo[fem_branca]'], 10)
    + parseInt(services['circoracasexo[fem_preta]'], 10)
    + parseInt(services['circoracasexo[fem_parda]'], 10)
    + parseInt(services['circoracasexo[fem_amarela]'], 10)
    + parseInt(services['circoracasexo[fem_indigena]'], 10)
    + parseInt(services['circoracasexo[fem_naoinf]'], 10), 1, 1),
  createData('Masculino',
    services['circoracasexo[masc_branca]'],
    services['circoracasexo[masc_preta]'],
    services['circoracasexo[masc_parda]'],
    services['circoracasexo[masc_amarela]'],
    services['circoracasexo[masc_indigena]'],
    services['circoracasexo[masc_naoinf]'],
    parseInt(services['circoracasexo[masc_branca]'], 10)
    + parseInt(services['circoracasexo[masc_preta]'], 10)
    + parseInt(services['circoracasexo[masc_parda]'], 10)
    + parseInt(services['circoracasexo[masc_amarela]'], 10)
    + parseInt(services['circoracasexo[masc_indigena]'], 10)
    + parseInt(services['circoracasexo[masc_naoinf]'], 10), 1, 1),
  createData('Total Geral',
    parseInt(services['circoracasexo[masc_branca]'], 10)
    + parseInt(services['circoracasexo[fem_branca]'], 10),
    parseInt(services['circoracasexo[masc_preta]'], 10)
    + parseInt(services['circoracasexo[fem_preta]'], 10),
    parseInt(services['circoracasexo[masc_parda]'], 10)
    + parseInt(services['circoracasexo[fem_parda]'], 10),
    parseInt(services['circoracasexo[masc_amarela]'], 10)
    + parseInt(services['circoracasexo[fem_amarela]'], 10),
    parseInt(services['circoracasexo[masc_indigena]'], 10)
    + parseInt(services['circoracasexo[fem_indigena]'], 10),
    parseInt(services['circoracasexo[masc_naoinf]'], 10)
    + parseInt(services['circoracasexo[fem_naoinf]'], 10),
    parseInt(services['circoracasexo[masc_branca]'], 10)
    + parseInt(services['circoracasexo[fem_branca]'], 10)
    + parseInt(services['circoracasexo[masc_preta]'], 10)
    + parseInt(services['circoracasexo[fem_preta]'], 10)
    + parseInt(services['circoracasexo[masc_parda]'], 10)
    + parseInt(services['circoracasexo[fem_parda]'], 10)
    + parseInt(services['circoracasexo[masc_amarela]'], 10)
    + parseInt(services['circoracasexo[fem_amarela]'], 10)
    + parseInt(services['circoracasexo[masc_indigena]'], 10)
    + parseInt(services['circoracasexo[fem_indigena]'], 10)
    + parseInt(services['circoracasexo[masc_naoinf]'], 10)
    + parseInt(services['circoracasexo[fem_naoinf]'], 10), 1, 1),
];

export const motivosSaidaCIRCO = ({ services, createData }:any) => [

  createData('Mudança de endereço',
    services['circomotivossaida[mudancaendereco_6a11]'],
    services['circomotivossaida[mudancaendereco_12a17]'],
    1, 1, 1, 1, 1, 1, 1),
  createData('Transferência para outro serviço',
    services['circomotivossaida[transferencia_6a11]'],
    services['circomotivossaida[transferencia_12a17]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Óbito',
    services['circomotivossaida[obito_6a11]'],
    services['circomotivossaida[obito_12a17]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Abandono',
    services['circomotivossaida[aband_6a11]'],
    services['circomotivossaida[aband_12a17]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Aplicação de medida restritiva de liberdade',
    services['circomotivossaida[aplicacaodemedida_6a11]'],
    services['circomotivossaida[aplicacaodemedida_12a17]'],
    1,
    1,
    1,
    1,
    1,
    1, 1),
  createData('Limite de Idade',
    services['circomotivossaida[limiteidade_6a11]'],
    services['circomotivossaida[limiteidade_12a17]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Inserção no Programa Jovem Aprendiz',
    services['circomotivossaida[jovemaprendiz_6a11]'],
    services['circomotivossaida[jovemaprendiz_12a17]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Total',
    parseInt(services['circomotivossaida[aband_6a11]'], 10)
  + parseInt(services['circomotivossaida[aplicacaodemedida_6a11]'], 10)
  + parseInt(services['circomotivossaida[jovemaprendiz_6a11]'], 10)
  + parseInt(services['circomotivossaida[limiteidade_6a11]'], 10)
  + parseInt(services['circomotivossaida[mudancaendereco_6a11]'], 10)
  + parseInt(services['circomotivossaida[obito_6a11]'], 10)
  + parseInt(services['circomotivossaida[transferencia_6a11]'], 10),
    parseInt(services['circomotivossaida[aband_12a17]'], 10)
  + parseInt(services['circomotivossaida[aplicacaodemedida_12a17]'], 10)
  + parseInt(services['circomotivossaida[jovemaprendiz_12a17]'], 10)
  + parseInt(services['circomotivossaida[limiteidade_12a17]'], 10)
  + parseInt(services['circomotivossaida[mudancaendereco_12a17]'], 10)
  + parseInt(services['circomotivossaida[obito_12a17]'], 10)
  + parseInt(services['circomotivossaida[transferencia_12a17]'], 10),
    1,
    1,
    1,
    1,
    1,
    1,
    1),

];

export const familiasInsumosCIRCO = ({ services, createData }:any) => [

  createData('Cesta de alimentos', services['circoinsumo[cestasaliment_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Kit de material de higiene', services['circoinsumo[kithiginene_numero]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const familiasVulnerabilidadeCIRCO = ({ services, createData }:any) => [

  createData('Conflitos', services['circovulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Preconceitos/discriminação', services['circovulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Abandono', services['circovulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Apartação', services['circovulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Confinamento', services['circovulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Isolamento', services['circovulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Violência', services['circovulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentoFamiliaCIRCO = ({ services, createData }:any) => [

  createData('Nº de famílias atendidas presencialmente', services['circofamatend[ccafampres]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de famílias acompanhadas de forma remota', services['circofamatend[ccafamrem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atividadesItemsCIRCO = ({ services, createData }:any) => [

  ['Atividades esportivas', services['circosocialatividade[atvesporte]']],
  ['Musicalidade (cantar, tocar instrumentos etc.)', services['circosocialatividade[atvmusica]']],
  ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', services['circosocialatividade[atvcultura]']],
  ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', services['circosocialatividade[atvarte]']],
  ['Atividades de inclusão digital', services['circosocialatividade[atvincdigital]']],
  ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['circosocialatividade[atvlinguagem]']],
  ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['circosocialatividade[atvculinaria]']],
  ['Atividades recreativas (jogos, brincadeiras, etc.)', services['circosocialatividade[atvrecreacao]']],

];

export const temasItemsCIRCO = ({ services, createData }:any) => [

  ['Temas transversais (saúde, meio ambiente, cultura, esporte etc.)', services['circosocialtema[tematransversal]']],
  ['Direitos e programas sociais', services['circosocialtema[temadireitos]']],
  ['Segurança alimentar e nutricional', services['circosocialtema[temanutricao]']],
  ['Igualdade entre homens e mulheres', services['circosocialtema[temaigualdade]']],
  ['Orientação sexual e de identidade de gênero', services['circosocialtema[temaorientsexual]']],
  ['Relações étnico-raciais', services['circosocialtema[temaetnico]']],
  ['Prevenção ao uso de álcool e drogas', services['circosocialtema[temaalccoldrogas]']],
  ['Prevenção à violência', services['circosocialtema[temaprevencaovio]']],
  ['Parentalidade', services['circosocialtema[temaparental]']],
  ['Deficiência e acessibilidade', services['circosocialtema[temapcd]']],
];

export const demandaReprimidaCIRCO = ({ services, createData }:any) => [

  createData('6 a 11 anos', services['circolistaespera[6a11_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('12 a 14 anos', services['circolistaespera[12a14_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('15 a 17 anos', services['circolistaespera[15a17_quantidade]'], 1, 1, 1, 1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['circolistaespera[6a11_quantidade]'], 10)
    + parseInt(services['circolistaespera[12a14_quantidade]'], 10)
    + parseInt(services['circolistaespera[15a17_quantidade]'], 10),
    1, 1, 1, 1, 1, 1, 1, 1),
];

export const encaminhamentosCIRCO = ({ services, createData }:any) => [

  createData('CRAS', services['circoencaminha[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['circoencaminha[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['circoencaminha[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Saúde', services['circoencaminha[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Educação', services['circoencaminha[educacao]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Conselhos de direito', services['circoencaminha[direito]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['circoencaminha[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosCIRCO = ({ services, createData }:any) => [

  createData('Semana 1', services['circoatendremperi[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['circoatendremperi[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['circoatendremperi[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['circoatendremperi[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['circoatendremperi[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['circoatendremperi[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosTiposCIRCO = ({ services, createData }:any) => [

  createData('Telefone / Celular / Whatsapp', services['circoremadisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Email', services['circoremadisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Facebook', services['circoremadisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('YouTube', services['circoremadisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras redes sociais', services['circoremadisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Entrega de kits de atividades', services['circoremadisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outros', services['circoremadisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosFamiliaSemanaCIRCO = ({ services, createData }:any) => [

  createData('Semana 1', services['circofamatendperio[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['circofamatendperio[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['circofamatendperio[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['circofamatendperio[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['circofamatendperio[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['circofamatendperio[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendidosMesCJ = ({ services, createData }:any) => [
  createData('15 a 17 anos (M)', services['cjfluxopessoasatend[15a17m_atendmesatual]'], services['cjfluxopessoasatend[15a17m_presmesatual]'], services['cjfluxopessoasatend[15a17m_remmesatual]'], 1, 1, 1, 1),
  createData('15 a 17 anos (F)', services['cjfluxopessoasatend[15a17f_atendmesatual]'], services['cjfluxopessoasatend[15a17f_presmesatual]'], services['cjfluxopessoasatend[15a17f_remmesatual]'], 1, 1, 1, 1),
  createData('Total', parseInt(services['cjfluxopessoasatend[15a17m_atendmesatual]'], 10)
                    + parseInt(services['cjfluxopessoasatend[15a17f_atendmesatual]'], 10),

  parseInt(services['cjfluxopessoasatend[15a17m_presmesatual]'], 10)
  + parseInt(services['cjfluxopessoasatend[15a17f_presmesatual]'], 10),

  parseInt(services['cjfluxopessoasatend[15a17m_remmesatual]'], 10)
  + parseInt(services['cjfluxopessoasatend[15a17f_remmesatual]'], 10),
  1, 1, 1, 1),
];

export const sexoRacaCorCJ = ({ services, createData }:any) => [
  createData('Feminino',
    services['cjracasexo[fem_branca]'],
    services['cjracasexo[fem_preta]'],
    services['cjracasexo[fem_parda]'],
    services['cjracasexo[fem_amarela]'],
    services['cjracasexo[fem_indigena]'],
    services['cjracasexo[fem_naoinf]'],
    parseInt(services['cjracasexo[fem_branca]'], 10)
    + parseInt(services['cjracasexo[fem_preta]'], 10)
    + parseInt(services['cjracasexo[fem_parda]'], 10)
    + parseInt(services['cjracasexo[fem_amarela]'], 10)
    + parseInt(services['cjracasexo[fem_indigena]'], 10)
    + parseInt(services['cjracasexo[fem_naoinf]'], 10)),
  createData('Masculino',
    services['cjracasexo[masc_branca]'],
    services['cjracasexo[masc_preta]'],
    services['cjracasexo[masc_parda]'],
    services['cjracasexo[masc_amarela]'],
    services['cjracasexo[masc_indigena]'],
    services['cjracasexo[masc_naoinf]'],
    parseInt(services['cjracasexo[masc_branca]'], 10)
    + parseInt(services['cjracasexo[masc_preta]'], 10)
    + parseInt(services['cjracasexo[masc_parda]'], 10)
    + parseInt(services['cjracasexo[masc_amarela]'], 10)
    + parseInt(services['cjracasexo[masc_indigena]'], 10)
    + parseInt(services['cjracasexo[masc_naoinf]'], 10)),
  createData('Total Geral',
    parseInt(services['cjracasexo[masc_branca]'], 10)
    + parseInt(services['cjracasexo[fem_branca]'], 10),
    parseInt(services['cjracasexo[masc_preta]'], 10)
    + parseInt(services['cjracasexo[fem_preta]'], 10),
    parseInt(services['cjracasexo[masc_parda]'], 10)
    + parseInt(services['cjracasexo[fem_parda]'], 10),
    parseInt(services['cjracasexo[masc_amarela]'], 10)
    + parseInt(services['cjracasexo[fem_amarela]'], 10),
    parseInt(services['cjracasexo[masc_indigena]'], 10)
    + parseInt(services['cjracasexo[fem_indigena]'], 10),
    parseInt(services['cjracasexo[masc_naoinf]'], 10)
    + parseInt(services['cjracasexo[fem_naoinf]'], 10),
    parseInt(services['cjracasexo[masc_branca]'], 10)
    + parseInt(services['cjracasexo[fem_branca]'], 10)
    + parseInt(services['cjracasexo[masc_preta]'], 10)
    + parseInt(services['cjracasexo[fem_preta]'], 10)
    + parseInt(services['cjracasexo[masc_parda]'], 10)
    + parseInt(services['cjracasexo[fem_parda]'], 10)
    + parseInt(services['cjracasexo[masc_amarela]'], 10)
    + parseInt(services['cjracasexo[fem_amarela]'], 10)
    + parseInt(services['cjracasexo[masc_indigena]'], 10)
    + parseInt(services['cjracasexo[fem_indigena]'], 10)
    + parseInt(services['cjracasexo[masc_naoinf]'], 10)
    + parseInt(services['cjracasexo[fem_naoinf]'], 10)),
];

export const motivoSaidaCJ = ({ services, createData }:any) => [

  createData('Mudança de endereço',
    services['cjmotivossaida[endereco_qtd]'],
    1,
    1, 1, 1, 1, 1),
  createData('Transferência para outro serviço',
    services['cjmotivossaida[transferencia_qtd]'],
    1,
    1, 1, 1, 1, 1),
  createData('Óbito',
    services['cjmotivossaida[obito_qtd]'],
    1,
    1, 1, 1, 1, 1),
  createData('Abandono',
    services['cjmotivossaida[aband_qtd]'],
    1,
    1, 1, 1, 1, 1),
  createData('Aplicação de medida restritiva de liberdade',
    services['cjmotivossaida[aplicacaodemedida_qtd]'],
    1,
    1, 1, 1, 1, 1),
  createData('Limite de idade',
    services['cjmotivossaida[limiteidade_qtd]'],
    1,
    1, 1, 1, 1, 1),
  createData('Inserção no jovem aprendiz',
    services['cjmotivossaida[jovemaprendiz_qtd]'],
    1,
    1, 1, 1, 1, 1),
  createData('Total',
    parseInt(services['cjmotivossaida[endereco_qtd]'], 10)
    + parseInt(services['cjmotivossaida[transferencia_qtd]'], 10)
    + parseInt(services['cjmotivossaida[obito_qtd]'], 10)
    + parseInt(services['cjmotivossaida[aband_qtd]'], 10)
    + parseInt(services['cjmotivossaida[aplicacaodemedida_qtd]'], 10)
    + parseInt(services['cjmotivossaida[limiteidade_qtd]'], 10)
    + parseInt(services['cjmotivossaida[jovemaprendiz_qtd]'], 10),
    1,
    1, 1, 1, 1, 1),
];

export const familiasAtendidasCJ = ({ services, createData }:any) => [

  createData('Nº de famílias atendidas presencialmente no mês', services['cjatendfam[cjfampres]'], 1, 1, 1, 1, 1, 1),
  createData('Nº de famílias acompanhadas de forma remota no mês', services['cjatendfam[cjfamrem]'], 1, 1, 1, 1, 1, 1),
  createData('Nº total de famílias atendidas no mês', services['cjatendfam[cjfamtotal]'], 1, 1, 1, 1, 1, 1),
];

export const familiasVulnerabilidadeCJ = ({ services, createData }:any) => [

  createData('Conflitos', services['cjvulnerab[conflit]'], 1, 1, 1, 1, 1, 1),
  createData('Preconceitos/discriminação', services['cjvulnerab[Precon]'], 1, 1, 1, 1, 1, 1),
  createData('Abandono', services['cjvulnerab[aband]'], 1, 1, 1, 1, 1, 1),
  createData('Apartação', services['cjvulnerab[apart]'], 1, 1, 1, 1, 1, 1),
  createData('Confinamento', services['cjvulnerab[confinamet]'], 1, 1, 1, 1, 1, 1),
  createData('Isolamento', services['cjvulnerab[isolament]'], 1, 1, 1, 1, 1, 1),
  createData('Violência', services['cjvulnerab[violen]'], 1, 1, 1, 1, 1, 1),
];

export const atividadesItemsCJ = ({ services, createData }:any) => [

  ['Atividades esportivas', services['cjatividades[atvesporte]']],
  ['Musicalidade (cantar, tocar instrumentos etc.)', services['cjatividades[atvmusica]']],
  ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', services['cjatividades[atvcultura]']],
  ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', services['cjatividades[atvarte]']],
  ['Atividades de inclusão digital', services['cjatividades[atvincdigital]']],
  ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['cjatividades[atvlinguagem]']],
  ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['cjatividades[atvculinaria]']],
  ['Atividades recreativas (jogos, brincadeiras, etc.)', services['cjatividades[atvrecreacao]']],
  ['Atividades de orientação para o mundo do trabalho', services['cjatividades[atvtrabalho]']],
];

export const temasItemsCJ = ({ services, createData }:any) => [

  ['Garantia de direitos sociais (saúde, educação, previdência, moradia, envelhecimento, saúde mental, etc.)', services['cjtema[temadireitos]']],
  ['Relacionamento familiar (gravidez na adolescência, álcool e drogas, orientação sexual, aborto, etc.)', services['cjtema[temafamiliar]']],
  ['Direitos e programas sociais', services['cjtema[temadireitossociais]']],
  ['Igualdade entre homens e mulheres', services['cjtema[temaigualdade]']],
  ['Relações étnico-raciais', services['cjtema[temaetnico]']],
  ['Prevenção à violência', services['cjtema[temaprevencaovio]']],
  ['Parentalidade', services['cjtema[temaparental]']],
  ['Deficiência e acessibilidade', services['cjtema[temapcd]']],
  ['Mundo do trabalho', services['cjtema[tematrabalho]']],
];

export const demandaReprimidaCJ = ({ services, createData }:any) => [

  createData('15 a 17 anos', services['cjlistaespera[15a17_quantidade]'], 1, 1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['cjlistaespera[15a17_quantidade]'], 10),
    1, 1, 1, 1, 1, 1),
];

export const familiasInsumosCJ = ({ services, createData }:any) => [

  createData('Cesta de alimentos', services['cjinsumos[cestasaliment_numero]'], 1, 1, 1, 1, 1, 1),
  createData('Kit de material de higiene', services['cjinsumos[kithiginene_numero]'], 1, 1, 1, 1, 1, 1),
];

export const encaminhamentosCJ = ({ services, createData }:any) => [

  createData('CRAS', services['cjencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['cjencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['cjencaminhamentos[servicosrede]'], 1, 1, 1, 1, 1, 1),
  createData('Saúde', services['cjencaminhamentos[saude]'], 1, 1, 1, 1, 1, 1),
  createData('Educação', services['cjencaminhamentos[educacao]'], 1, 1, 1, 1, 1, 1),
  createData('Conselhos de direito', services['cjencaminhamentos[direito]'], 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['cjencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosCJ = ({ services, createData }:any) => [

  createData('Semana 1', services['cjatendremperiod[1sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['cjatendremperiod[2sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['cjatendremperiod[3sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['cjatendremperiod[4sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['cjatendremperiod[5sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['cjatendremperiod[6sem]'], 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosTiposCJ = ({ services, createData }:any) => [

  createData('Telefone / Celular / Whatsapp', services['cjatendremdisp[telef]'], 1, 1, 1, 1, 1, 1),
  createData('Email', services['cjatendremdisp[email]'], 1, 1, 1, 1, 1, 1),
  createData('Facebook', services['cjatendremdisp[face]'], 1, 1, 1, 1, 1, 1),
  createData('YouTube', services['cjatendremdisp[youtu]'], 1, 1, 1, 1, 1, 1),
  createData('Outras redes sociais', services['cjatendremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1),
  createData('Entrega de kits de atividades', services['cjatendremdisp[entreg]'], 1, 1, 1, 1, 1, 1),
  createData('Outros', services['cjatendremdisp[outros]'], 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosFamiliaSemanaCJ = ({ services, createData }:any) => [

  createData('Semana 1', services['cjperiodfam[1sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['cjperiodfam[2sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['cjperiodfam[3sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['cjperiodfam[4sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['cjperiodfam[5sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['cjperiodfam[6sem]'], 1, 1, 1, 1, 1, 1),
];

export const atendidosMesCRECI = ({ services, createData }:any) => [
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

export const sexoRacaCorCRECI = ({ services, createData }:any) => [
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

export const idososMoramSozinhoCRECI = ({ services, createData }:any) => [
  createData('Quantidade de idosos que moram sozinhos',
    services['crecisozinho[idososo]'],
    1,
    1, 1, 1, 1, 1, 1),
  createData('Destes, quantos contam com apoio da família / comunidade',
    services['crecisozinho[ajudaidosos]'],
    1,
    1, 1, 1, 1, 1, 1),
];

export const infoSobreIdososCRECI = ({ services, createData }:any) => [

  createData('N° de visitas domiciliares realizadas no mês', services['creciinfoimportantes[visdom]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de idosos que recebem BPC', services['creciinfoimportantes[bpc]'], 1, 1, 1, 1, 1, 1, 1),

];

export const familiasVulnerabilidadeCRECI = ({ services, createData }:any) => [

  createData('Conflitos', services['crecivulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Preconceitos/discriminação', services['crecivulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Abandono', services['crecivulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Apartação', services['crecivulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Confinamento', services['crecivulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Isolamento', services['crecivulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Violência', services['crecivulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1),
];

export const atividadesItemsCRECI = ({ services, createData }:any) => [

  ['Atividades esportivas', services['creciatv[atvesporte]']],
  ['Musicalidade (cantar, tocar instrumentos etc.)', services['creciatv[atvmusica]']],
  ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', services['creciatv[atvcultura]']],
  ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', services['creciatv[atvarte]']],
  ['Atividades de inclusão digital', services['creciatv[atvincdigital]']],
  ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['creciatv[atvlinguagem]']],
  ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['creciatv[atvculinaria]']],
  ['Atividades recreativas (jogos, brincadeiras, etc.)', services['creciatv[atvrecreacao]']],

];

export const temasItemsCRECI = ({ services, createData }:any) => [

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

export const demandaReprimidaCRECI = ({ services, createData }:any) => [
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

export const idososInsumosCRECI = ({ services, createData }:any) => [
  createData('Cesta de alimentos', services['creciinsumos[alimentos]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Kit de material de higiene', services['creciinsumos[higiene]'], 1, 1, 1, 1, 1, 1, 1),
];

export const encaminhamentosCRECI = ({ services, createData }:any) => [
  createData('CRAS', services['creciencaminha[cras]'], 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['creciencaminha[creas]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['creciencaminha[servicosrede]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Saúde', services['creciencaminha[saude]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Habitação', services['creciencaminha[hab]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Previdência Social', services['creciencaminha[prev]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Conselhos de direito', services['creciencaminha[direito]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['creciencaminha[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosCRECI = ({ services, createData }:any) => [
  createData('Semana 1', services['crecirempesperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['crecirempesperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['crecirempesperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['crecirempesperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['crecirempesperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['crecirempesperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosTiposCRECI = ({ services, createData }:any) => [
  createData('Telefone / Celular / Whatsapp', services['creciremdisp[telef]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Email', services['creciremdisp[email]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Facebook', services['creciremdisp[face]'], 1, 1, 1, 1, 1, 1, 1),
  createData('YouTube', services['creciremdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Outras redes sociais', services['creciremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Entrega de kits de atividades', services['creciremdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Outros', services['creciremdisp[outros]'], 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosFamiliaSemanaCRECI = ({ services, createData }:any) => [
  createData('Semana 1', services['creciremfamperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['creciremfamperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['creciremfamperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['creciremfamperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['creciremfamperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['creciremfamperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1),
];

export const atendidosMesMSE = ({ services, createData }:any) => [

  createData('12 a 14 (F)',
    services['mseatend[12a14f_atendpsc]'],
    services['mseatend[12a14f_atendla]'],
    services['mseatend[12a14f_atendacumulada]'],
    services['mseatend[12a14f_atendsegmedida]'],
    1, 1, 1, 1, 1),
  createData('12 a 14 (M)',
    services['mseatend[12a14m_atendpsc]'],
    services['mseatend[12a14m_atendla]'],
    services['mseatend[12a14m_atendacumulada]'],
    services['mseatend[12a14m_atendsegmedida]'],
    1, 1, 1, 1, 1),

  createData('15 a 17 (F)',
    services['mseatend[15a17f_atendpsc]'],
    services['mseatend[15a17f_atendla]'],
    services['mseatend[15a17f_atendacumulada]'],
    services['mseatend[15a17f_atendsegmedida]'],
    1, 1, 1, 1, 1),
  createData('15 a 17 (M)',
    services['mseatend[15a17m_atendpsc]'],
    services['mseatend[15a17m_atendla]'],
    services['mseatend[15a17m_atendacumulada]'],
    services['mseatend[15a17m_atendsegmedida]'],
    1, 1, 1, 1, 1),
  createData('18 anos ou mais (F)',
    services['mseatend[18oumaisf_atendpsc]'],
    services['mseatend[18oumaisf_atendla]'],
    services['mseatend[18oumaisf_atendacumulada]'],
    services['mseatend[18oumaisf_atendsegmedida]'],
    1, 1, 1, 1, 1),
  createData('18 anos ou mais (F)',
    services['mseatend[18oumaism_atendpsc]'],
    services['mseatend[18oumaism_atendla]'],
    services['mseatend[18oumaism_atendacumulada]'],
    services['mseatend[18oumaism_atendsegmedida]'],
    1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['mseatend[12a14f_atendpsc]'], 10)
    + parseInt(services['mseatend[12a14m_atendpsc]'], 10)
    + parseInt(services['mseatend[15a17f_atendpsc]'], 10)
    + parseInt(services['mseatend[15a17m_atendpsc]'], 10)
    + parseInt(services['mseatend[18oumaisf_atendpsc]'], 10)
    + parseInt(services['mseatend[18oumaism_atendpsc]'], 10),
    parseInt(services['mseatend[12a14f_atendla]'], 10)
    + parseInt(services['mseatend[12a14m_atendla]'], 10)
    + parseInt(services['mseatend[15a17f_atendla]'], 10)
    + parseInt(services['mseatend[15a17m_atendla]'], 10)
    + parseInt(services['mseatend[18oumaisf_atendla]'], 10)
    + parseInt(services['mseatend[18oumaism_atendla]'], 10),
    parseInt(services['mseatend[12a14f_atendacumulada]'], 10)
    + parseInt(services['mseatend[12a14m_atendacumulada]'], 10)
    + parseInt(services['mseatend[15a17f_atendacumulada]'], 10)
    + parseInt(services['mseatend[15a17m_atendacumulada]'], 10)
    + parseInt(services['mseatend[18oumaisf_atendacumulada]'], 10)
    + parseInt(services['mseatend[18oumaism_atendacumulada]'], 10),
    parseInt(services['mseatend[12a14f_atendsegmedida]'], 10)
    + parseInt(services['mseatend[12a14m_atendsegmedida]'], 10)
    + parseInt(services['mseatend[15a17f_atendsegmedida]'], 10)
    + parseInt(services['mseatend[15a17m_atendsegmedida]'], 10)
    + parseInt(services['mseatend[18oumaisf_atendsegmedida]'], 10)
    + parseInt(services['mseatend[18oumaism_atendsegmedida]'], 10),
    1,
    1,
    1, 1, 1),
];

export const entradasMesMSE = ({ services, createData }:any) => [
  createData('12 a 14 (F)',
    services['mseentrada[12a14f_atendpsc]'],
    services['mseentrada[12a14f_atendla]'],
    services['mseentrada[12a14f_atendacumulada]'],
    services['mseentrada[12a14f_atendsegmedida]'],
    1, 1, 1, 1, 1),
  createData('12 a 14 (M)',
    services['mseentrada[12a14m_atendpsc]'],
    services['mseentrada[12a14m_atendla]'],
    services['mseentrada[12a14m_atendacumulada]'],
    services['mseentrada[12a14m_atendsegmedida]'],
    1, 1, 1, 1, 1),

  createData('15 a 17 (F)',
    services['mseentrada[15a17f_atendpsc]'],
    services['mseentrada[15a17f_atendla]'],
    services['mseentrada[15a17f_atendacumulada]'],
    services['mseentrada[15a17f_atendsegmedida]'],
    1, 1, 1, 1, 1),
  createData('15 a 17 (M)',
    services['mseentrada[15a17m_atendpsc]'],
    services['mseentrada[15a17m_atendla]'],
    services['mseentrada[15a17m_atendacumulada]'],
    services['mseentrada[15a17m_atendsegmedida]'],
    1, 1, 1, 1, 1),
  createData('18 anos ou mais (F)',
    services['mseentrada[18oumaisf_atendpsc]'],
    services['mseentrada[18oumaisf_atendla]'],
    services['mseentrada[18oumaisf_atendacumulada]'],
    services['mseentrada[18oumaisf_atendsegmedida]'],
    1, 1, 1, 1, 1),
  createData('18 anos ou mais (F)',
    services['mseentrada[18oumaism_atendpsc]'],
    services['mseentrada[18oumaism_atendla]'],
    services['mseentrada[18oumaism_atendacumulada]'],
    services['mseentrada[18oumaism_atendsegmedida]'],
    1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['mseentrada[12a14f_atendpsc]'], 10)
  + parseInt(services['mseentrada[12a14m_atendpsc]'], 10)
  + parseInt(services['mseentrada[15a17f_atendpsc]'], 10)
  + parseInt(services['mseentrada[15a17m_atendpsc]'], 10)
  + parseInt(services['mseentrada[18oumaisf_atendpsc]'], 10)
  + parseInt(services['mseentrada[18oumaism_atendpsc]'], 10),
    parseInt(services['mseentrada[12a14f_atendla]'], 10)
  + parseInt(services['mseentrada[12a14m_atendla]'], 10)
  + parseInt(services['mseentrada[15a17f_atendla]'], 10)
  + parseInt(services['mseentrada[15a17m_atendla]'], 10)
  + parseInt(services['mseentrada[18oumaisf_atendla]'], 10)
  + parseInt(services['mseentrada[18oumaism_atendla]'], 10),
    parseInt(services['mseentrada[12a14f_atendacumulada]'], 10)
  + parseInt(services['mseentrada[12a14m_atendacumulada]'], 10)
  + parseInt(services['mseentrada[15a17f_atendacumulada]'], 10)
  + parseInt(services['mseentrada[15a17m_atendacumulada]'], 10)
  + parseInt(services['mseentrada[18oumaisf_atendacumulada]'], 10)
  + parseInt(services['mseentrada[18oumaism_atendacumulada]'], 10),
    parseInt(services['mseentrada[12a14f_atendsegmedida]'], 10)
  + parseInt(services['mseentrada[12a14m_atendsegmedida]'], 10)
  + parseInt(services['mseentrada[15a17f_atendsegmedida]'], 10)
  + parseInt(services['mseentrada[15a17m_atendsegmedida]'], 10)
  + parseInt(services['mseentrada[18oumaisf_atendsegmedida]'], 10)
  + parseInt(services['mseentrada[18oumaism_atendsegmedida]'], 10),
    1,
    1,
    1, 1, 1),
];

export const sexoRacaCorMSE = ({ services, createData }:any) => [
  createData('Feminino',

    services['mseracasexo[fem_branca]'],
    services['mseracasexo[fem_preta]'],
    services['mseracasexo[fem_parda]'],
    services['mseracasexo[fem_amarela]'],
    services['mseracasexo[fem_indigena]'],
    services['mseracasexo[fem_naoinf]'],
    parseInt(services['mseracasexo[fem_branca]'], 10)
    + parseInt(services['mseracasexo[fem_preta]'], 10)
    + parseInt(services['mseracasexo[fem_parda]'], 10)
    + parseInt(services['mseracasexo[fem_amarela]'], 10)
    + parseInt(services['mseracasexo[fem_indigena]'], 10)
    + parseInt(services['mseracasexo[fem_naoinf]'], 10), 1, 1),
  createData('Masculino',
    services['mseracasexo[masc_branca]'],
    services['mseracasexo[masc_preta]'],
    services['mseracasexo[masc_parda]'],
    services['mseracasexo[masc_amarela]'],
    services['mseracasexo[masc_indigena]'],
    services['mseracasexo[masc_naoinf]'],
    parseInt(services['mseracasexo[masc_branca]'], 10)
    + parseInt(services['mseracasexo[masc_preta]'], 10)
    + parseInt(services['mseracasexo[masc_parda]'], 10)
    + parseInt(services['mseracasexo[masc_amarela]'], 10)
    + parseInt(services['mseracasexo[masc_indigena]'], 10)
    + parseInt(services['mseracasexo[masc_naoinf]'], 10), 1, 1),
  createData('Total Geral',
    parseInt(services['mseracasexo[masc_branca]'], 10)
    + parseInt(services['mseracasexo[fem_branca]'], 10),
    parseInt(services['mseracasexo[masc_preta]'], 10)
    + parseInt(services['mseracasexo[fem_preta]'], 10),
    parseInt(services['mseracasexo[masc_parda]'], 10)
    + parseInt(services['mseracasexo[fem_parda]'], 10),
    parseInt(services['mseracasexo[masc_amarela]'], 10)
    + parseInt(services['mseracasexo[fem_amarela]'], 10),
    parseInt(services['mseracasexo[masc_indigena]'], 10)
    + parseInt(services['mseracasexo[fem_indigena]'], 10),
    parseInt(services['mseracasexo[masc_naoinf]'], 10)
    + parseInt(services['mseracasexo[fem_naoinf]'], 10),
    parseInt(services['mseracasexo[masc_branca]'], 10)
    + parseInt(services['mseracasexo[fem_branca]'], 10)
    + parseInt(services['mseracasexo[masc_preta]'], 10)
    + parseInt(services['mseracasexo[fem_preta]'], 10)
    + parseInt(services['mseracasexo[masc_parda]'], 10)
    + parseInt(services['mseracasexo[fem_parda]'], 10)
    + parseInt(services['mseracasexo[masc_amarela]'], 10)
    + parseInt(services['mseracasexo[fem_amarela]'], 10)
    + parseInt(services['mseracasexo[masc_indigena]'], 10)
    + parseInt(services['mseracasexo[fem_indigena]'], 10)
    + parseInt(services['mseracasexo[masc_naoinf]'], 10)
    + parseInt(services['mseracasexo[fem_naoinf]'], 10), 1, 1),
];

export const motivosSaidaMSE = ({ services, createData }:any) => [
  createData('Cumprimento integral da MSE',
    services['msesaida[cumprintegralmse_psc]'],
    services['msesaida[cumprintegralmse_la]'],
    services['msesaida[cumprintegralmse_pscla]'],
    services['msesaida[cumprintegralmse_segmedida]'],
    1, 1, 1, 1, 1),
  createData('Descumprimento da MSE',
    services['msesaida[descumprmse_psc]'],
    services['msesaida[descumprmse_la]'],
    services['msesaida[descumprmse_pscla]'],
    services['msesaida[descumprmse_segmedida]'],
    1, 1, 1, 1, 1),
  createData('Transferência de SMSE',
    services['msesaida[transfermse_psc]'],
    services['msesaida[transfermse_la]'],
    services['msesaida[transfermse_pscla]'],
    services['msesaida[transfermse_segmedida]'],
    1, 1, 1, 1, 1),
  createData('Detenção',
    services['msesaida[detencao_psc]'],
    services['msesaida[detencao_la]'],
    services['msesaida[detencao_pscla]'],
    services['msesaida[detencao_segmedida]'],
    1, 1, 1, 1, 1),
  createData('Óbito',
    services['msesaida[obito_psc]'],
    services['msesaida[obito_la]'],
    services['msesaida[obito_pscla]'],
    services['msesaida[obito_segmedida]'],
    1, 1, 1, 1, 1),
  createData('Aplicação de medida em meio fechado (Fundação CASA)',
    services['msesaida[fundcasa_psc]'],
    services['msesaida[fundcasa_la]'],
    services['msesaida[fundcasa_pscla]'],
    services['msesaida[fundcasa_segmedida]'],
    1, 1, 1, 1, 1),
  createData('Limite de idade (21 anos)',
    services['msesaida[limiteidade21anos_psc]'],
    services['msesaida[limiteidade21anos_la]'],
    services['msesaida[limiteidade21anos_pscla]'],
    services['msesaida[limiteidade21anos_segmedida]'],
    1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['msesaida[cumprintegralmse_psc]'], 10)
  + parseInt(services['msesaida[descumprmse_psc]'], 10)
  + parseInt(services['msesaida[transfermse_psc]'], 10)
  + parseInt(services['msesaida[detencao_psc]'], 10)
  + parseInt(services['msesaida[obito_psc]'], 10)
  + parseInt(services['msesaida[fundcasa_psc]'], 10)
  + parseInt(services['msesaida[limiteidade21anos_psc]'], 10),
    parseInt(services['msesaida[cumprintegralmse_la]'], 10)
  + parseInt(services['msesaida[descumprmse_la]'], 10)
  + parseInt(services['msesaida[transfermse_la]'], 10)
  + parseInt(services['msesaida[detencao_la]'], 10)
  + parseInt(services['msesaida[obito_la]'], 10)
  + parseInt(services['msesaida[fundcasa_la]'], 10)
  + parseInt(services['msesaida[limiteidade21anos_la]'], 10),
    parseInt(services['msesaida[cumprintegralmse_pscla]'], 10)
  + parseInt(services['msesaida[descumprmse_pscla]'], 10)
  + parseInt(services['msesaida[transfermse_pscla]'], 10)
  + parseInt(services['msesaida[detencao_pscla]'], 10)
  + parseInt(services['msesaida[obito_pscla]'], 10)
  + parseInt(services['msesaida[fundcasa_pscla]'], 10)
  + parseInt(services['msesaida[limiteidade21anos_pscla]'], 10),
    parseInt(services['msesaida[cumprintegralmse_segmedida]'], 10)
  + parseInt(services['msesaida[descumprmse_segmedida]'], 10)
  + parseInt(services['msesaida[transfermse_segmedida]'], 10)
  + parseInt(services['msesaida[detencao_segmedida]'], 10)
  + parseInt(services['msesaida[obito_segmedida]'], 10)
  + parseInt(services['msesaida[fundcasa_segmedida]'], 10)
  + parseInt(services['msesaida[limiteidade21anos_segmedida]'], 10),
    1,
    1,
    1,
    1,
    1),

];

export const atendimentosIndividualGrupoMSE = ({ services, createData }:any) => [
  createData('Atendimento individual', services['mseatendtecnico[atendindiusuario_atendpresencial]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Atendimento em grupo com os usuários', services['mseatendtecnico[atendgrupousuario_atendpresencial]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const visistasTecnicasMSE = ({ services, createData }:any) => [
  createData('Saúde', services['msevisitatecnica[saude_adolescentes]'], services['msevisitatecnica[saude_visitas]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Educação', services['msevisitatecnica[educacao_adolescentes]'], services['msevisitatecnica[educacao_visitas]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Cultura', services['msevisitatecnica[cultuta_visitas]'], services['msevisitatecnica[cultuta_visitas]'], 1, 1, 1, 1, 1, 1, 1),
  createData('SMADS', services['msevisitatecnica[smads_adolescentes]'], services['msevisitatecnica[smads_visitas]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Organização da Sociedade Civil', services['msevisitatecnica[osc_adolescentes]'], services['msevisitatecnica[osc_visitas]'], 1, 1, 1, 1, 1, 1, 1),
  createData('Outros', services['msevisitatecnica[outros_visitas]'], services['msevisitatecnica[outros_visitas]'], 1, 1, 1, 1, 1, 1, 1),
];

export const residentesMSE = ({ services, createData }:any) => [
  createData('Serviço de Acolhimento Institucional para Crianças e Adolescentes', services['mseacolhimento[saica]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('República', services['mseacolhimento[republica]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Centro de Acolhida', services['mseacolhimento[ca]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const escolarMSE = ({ services, createData }:any) => [
  createData('Estuda', services['msesitescolar[estuda_12a14]'], services['msesitescolar[estuda_15a17]'], services['msesitescolar[estuda_18oumais]'], 1, 1, 1, 1, 1, 1),
  createData('Não estuda', services['msesitescolar[naoestuda_12a14]'], services['msesitescolar[naoestuda_15a17]'], services['msesitescolar[naoestuda_18oumais]'], 1, 1, 1, 1, 1, 1),
  createData('Concluiu o ensino regular', services['msesitescolar[concluiu_12a14]'], services['msesitescolar[concluiu_15a17]'], services['msesitescolar[concluiu_18oumais]'], 1, 1, 1, 1, 1, 1),
];

export const trabalhoMSE = ({ services, createData }:any) => [
  createData('Com vínculo empregatício (CLT)', services['msesittrabalho[comvinc_12a14]'], services['msesittrabalho[comvinc_15a17]'], services['msesittrabalho[comvinc_18oumais]'], 1, 1, 1, 1, 1, 1),
  createData('Sem vínculo empregatício', services['msesittrabalho[semvinc_12a14]'], services['msesittrabalho[semvinc_15a17]'], services['msesittrabalho[semvinc_18oumais]'], 1, 1, 1, 1, 1, 1),
  createData('Não Trabalha', services['msesittrabalho[naotrabalha_12a14]'], services['msesittrabalho[naotrabalha_15a17]'], services['msesittrabalho[naotrabalha_18oumais]'], 1, 1, 1, 1, 1, 1),
];

export const entraramAtoInfracionalMSE = ({ services, createData }:any) => [
  createData('Agressão/Briga', services['mseatoinfracional[agressaobriga_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Crime de trânsito', services['mseatoinfracional[crimetransito_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Dano ao patrimônio', services['mseatoinfracional[danopatrimonio_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Furto', services['mseatoinfracional[furto_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Lesão Corporal', services['mseatoinfracional[lesaocorporal_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Porte de drogas', services['mseatoinfracional[portedrogas_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Receptação', services['mseatoinfracional[receptacao_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Roubo', services['mseatoinfracional[roubo_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Tentativa de Homicídio', services['mseatoinfracional[tenthomicidio_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Tráfico de Drogas', services['mseatoinfracional[traficodrogas_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outros', services['mseatoinfracional[outros_qtde]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Total', parseInt(services['mseatoinfracional[agressaobriga_qtde]'], 10)
  + parseInt(services['mseatoinfracional[crimetransito_qtde]'], 10)
  + parseInt(services['mseatoinfracional[danopatrimonio_qtde]'], 10)
  + parseInt(services['mseatoinfracional[furto_qtde]'], 10)
  + parseInt(services['mseatoinfracional[lesaocorporal_qtde]'], 10)
  + parseInt(services['mseatoinfracional[portedrogas_qtde]'], 10)
  + parseInt(services['mseatoinfracional[receptacao_qtde]'], 10)
  + parseInt(services['mseatoinfracional[roubo_qtde]'], 10)
  + parseInt(services['mseatoinfracional[tenthomicidio_qtde]'], 10)
  + parseInt(services['mseatoinfracional[traficodrogas_qtde]'], 10)
  + parseInt(services['mseatoinfracional[outros_qtde]'], 10),

  1, 1, 1, 1, 1, 1, 1, 1),
];

export const encaminhamentosMSE = ({ services, createData }:any) => [
  createData('CRAS', services['mseencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['mseencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['mseencaminhamentos[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['mseencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosFamiliaSemanaMSE = ({ services, createData }:any) => [
  createData('Semana 1', services['mseperiofam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['mseperiofam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['mseperiofam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['mseperiofam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['mseperiofam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['mseperiofam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];
