import axios from 'axios';

export const fetchServicesAnswers = ({
  nomeSAS, mes, token, tipologia, setServices, setLoading, history,
}:any) => {
  axios.get(`hhttp://10.13.24.137:9090/devolutivas/${nomeSAS}/${mes}/${token}/${tipologia}`).then((res) => {
    setServices(res.data);
    console.log(res.data);
    setLoading(false);
  }).catch((err) => {
    history.push('/Erro');
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
export const atendimentosRemotosTiposCDCM = ({ services, createData }:any) => [

  createData('Telefone / Celular / Whatsapp', services['cdcmdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Email', services['cdcmdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Facebook', services['cdcmdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('YouTube', services['cdcmdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras redes sociais', services['cdcmdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Entrega de kits de atividades', services['cdcmdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outros', services['cdcmdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
];
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
