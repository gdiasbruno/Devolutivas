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
    services['bagracasexo[masc_branca]'],
    services['bagracasexo[masc_preta]'],
    services['bagracasexo[masc_parda]'],
    services['bagracasexo[masc_amarela]'],
    services['bagracasexo[masc_indigena]'],
    services['bagracasexo[masc_naoinf]'],
    parseInt(services['bagracasexo[masc_branca]'], 10)
    + parseInt(services['bagracasexo[masc_preta]'], 10)
    + parseInt(services['bagracasexo[masc_parda]'], 10)
    + parseInt(services['bagracasexo[masc_amarela]'], 10)
    + parseInt(services['bagracasexo[masc_indigena]'], 10)
    + parseInt(services['bagracasexo[masc_naoinf]'], 10), 1, 1),
  createData('Total Geral',
    parseInt(services['bagracasexo[masc_branca]'], 10)
    + parseInt(services['bagracasexo[fem_branca]'], 10),
    parseInt(services['bagracasexo[masc_preta]'], 10)
    + parseInt(services['bagracasexo[fem_preta]'], 10),
    parseInt(services['bagracasexo[masc_parda]'], 10)
    + parseInt(services['bagracasexo[fem_parda]'], 10),
    parseInt(services['bagracasexo[masc_amarela]'], 10)
    + parseInt(services['bagracasexo[fem_amarela]'], 10),
    parseInt(services['bagracasexo[masc_indigena]'], 10)
    + parseInt(services['bagracasexo[fem_indigena]'], 10),
    parseInt(services['bagracasexo[masc_naoinf]'], 10)
    + parseInt(services['bagracasexo[fem_naoinf]'], 10),
    parseInt(services['bagracasexo[masc_branca]'], 10)
    + parseInt(services['bagracasexo[fem_branca]'], 10)
    + parseInt(services['bagracasexo[masc_preta]'], 10)
    + parseInt(services['bagracasexo[fem_preta]'], 10)
    + parseInt(services['bagracasexo[masc_parda]'], 10)
    + parseInt(services['bagracasexo[fem_parda]'], 10)
    + parseInt(services['bagracasexo[masc_amarela]'], 10)
    + parseInt(services['bagracasexo[fem_amarela]'], 10)
    + parseInt(services['bagracasexo[masc_indigena]'], 10)
    + parseInt(services['bagracasexo[fem_indigena]'], 10)
    + parseInt(services['bagracasexo[masc_naoinf]'], 10)
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
    services['ccamotivossaida[abandono_6a11]'],
    services['ccamotivossaida[abandono_12a14]'],
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
    + parseInt(services['ccamotivossaida[abandono_6a11]'], 10)
    + parseInt(services['ccamotivossaida[liberdade_6a11]'], 10)
    + parseInt(services['ccamotivossaida[idade_6a11]'], 10),
    parseInt(services['ccamotivossaida[endereco_12a14]'], 10)
    + parseInt(services['ccamotivossaida[transferencia_12a14]'], 10)
    + parseInt(services['ccamotivossaida[obito_12a14]'], 10)
    + parseInt(services['ccamotivossaida[abandono_12a14]'], 10)
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
  createData('Abandono', services['ccavulnerab[aband]'] ? services['ccavulnerab[aband]'] : services['ccavulnerab[abandono]'], 1, 1, 1, 1, 1, 1),
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

export const atendidosMesFemNAISPD = ({ services, createData }:any) => [
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

export const atendidosMesMascNAISPD = ({ services, createData }:any) => [
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

export const sexoRacaCorNAISPD = ({ services, createData }:any) => [
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

export const atendidosMesTipoDefNAISPD = ({ services, createData }:any) => [
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

export const territorioMoradiaNAISPD = ({ services, createData }:any) => [
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

export const situacaoEscolarNAISPD = ({ services, createData }:any) => [
  createData('Nº de pessoas atendidas pelo serviço que frequentam o ensino formal',
    services['naissitescolar[freqescolar]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
];

export const beneficariosBPCNAISPD = ({ services, createData }:any) => [
  createData('Nº de pessoas ',
    services.naisprogbpc,
    1,
    1, 1, 1, 1, 1, 1, 1),
];

export const demandaReprimidaNAISPD = ({ services, createData }:any) => [
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

export const encaminhamentosNAISPD = ({ services, createData }:any) => [
  createData('CRAS', services['naisencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['naisencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['naisencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Saúde', services['naisencaminhamentos[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Educação', services['naisencaminhamentos[educacao]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Conselhos de direito', services['naisencaminhamentos[direito]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['naisencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosNAISPD = ({ services, createData }:any) => [
  createData('Semana 1', services['naisatendremotoperio[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['naisatendremotoperio[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['naisatendremotoperio[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['naisatendremotoperio[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['naisatendremotoperio[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['naisatendremotoperio[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosTiposDomicilioNAISPD = ({ services, createData }:any) => [

  createData('Telefone / Celular / Whatsapp', services['naisdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Email', services['naisdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Facebook', services['naisdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('YouTube', services['naisdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras redes sociais', services['naisdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Entrega de kits de atividades', services['naisdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outros', services['naisdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosFamiliaSemanaNAISPD = ({ services, createData }:any) => [
  createData('Semana 1', services['naisperiofam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['naisperiofam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['naisperiofam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['naisperiofam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['naisperiofam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['naisperiofam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendidosMesNCI = ({ services, createData }:any) => [
  createData('60 a 64 anos (M)',
    services['ncifluxoconvivencia[60a64m_atendmesatual]'],
    services['ncifluxoconvivencia[60a64m_presmesatual]'],
    services['ncifluxoconvivencia[60a64m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('60 a 64 anos (F)',
    services['ncifluxoconvivencia[60a64f_atendmesatual]'],
    services['ncifluxoconvivencia[60a64f_presmesatual]'],
    services['ncifluxoconvivencia[60a64f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('65 a 69 anos (M)',
    services['ncifluxoconvivencia[65a69m_atendmesatual]'],
    services['ncifluxoconvivencia[65a69m_presmesatual]'],
    services['ncifluxoconvivencia[65a69m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('65 a 69 anos (F)',
    services['ncifluxoconvivencia[65a69f_atendmesatual]'],
    services['ncifluxoconvivencia[65a69f_presmesatual]'],
    services['ncifluxoconvivencia[65a69f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('70 a 74 anos (M)',
    services['ncifluxoconvivencia[70a74m_atendmesatual]'],
    services['ncifluxoconvivencia[70a74m_presmesatual]'],
    services['ncifluxoconvivencia[70a74m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('70 a 74 anos (F)',
    services['ncifluxoconvivencia[70a74f_atendmesatual]'],
    services['ncifluxoconvivencia[70a74f_presmesatual]'],
    services['ncifluxoconvivencia[70a74f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('75 anos mais (M)',
    services['ncifluxoconvivencia[75maism_atendmesatual]'],
    services['ncifluxoconvivencia[75maism_presmesatual]'],
    services['ncifluxoconvivencia[75maism_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('75 anos mais (F)',
    services['ncifluxoconvivencia[75maisf_atendmesatual]'],
    services['ncifluxoconvivencia[75maisf_presmesatual]'],
    services['ncifluxoconvivencia[75maisf_remmesatual]'],
    1, 1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['ncifluxoconvivencia[60a64m_atendmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[60a64f_atendmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[65a69m_atendmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[65a69f_atendmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[70a74m_atendmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[70a74f_atendmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[75maism_atendmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[75maisf_atendmesatual]'], 10),
    parseInt(services['ncifluxoconvivencia[60a64m_presmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[60a64f_presmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[65a69m_presmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[65a69f_presmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[70a74m_presmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[70a74f_presmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[75maism_presmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[75maisf_presmesatual]'], 10),
    parseInt(services['ncifluxoconvivencia[60a64m_remmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[60a64f_remmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[65a69m_remmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[65a69f_remmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[70a74m_remmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[70a74f_remmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[75maism_remmesatual]'], 10)
    + parseInt(services['ncifluxoconvivencia[75maisf_remmesatual]'], 10),
    1, 1, 1, 1, 1, 1),
];

export const atendidosMesDomicilioNCI = ({ services, createData }:any) => [
  createData('60 a 64 anos (M)',
    services['ncifluxodomicilio[60a64m_atendmesatual]'],
    services['ncifluxodomicilio[60a64m_presmesatual]'],
    services['ncifluxodomicilio[60a64m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('60 a 64 anos (F)',
    services['ncifluxodomicilio[60a64f_atendmesatual]'],
    services['ncifluxodomicilio[60a64f_presmesatual]'],
    services['ncifluxodomicilio[60a64f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('65 a 69 anos (M)',
    services['ncifluxodomicilio[65a69m_atendmesatual]'],
    services['ncifluxodomicilio[65a69m_presmesatual]'],
    services['ncifluxodomicilio[65a69m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('65 a 69 anos (F)',
    services['ncifluxodomicilio[65a69f_atendmesatual]'],
    services['ncifluxodomicilio[65a69f_presmesatual]'],
    services['ncifluxodomicilio[65a69f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('70 a 74 anos (M)',
    services['ncifluxodomicilio[70a74m_atendmesatual]'],
    services['ncifluxodomicilio[70a74m_presmesatual]'],
    services['ncifluxodomicilio[70a74m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('70 a 74 anos (F)',
    services['ncifluxodomicilio[70a74f_atendmesatual]'],
    services['ncifluxodomicilio[70a74f_presmesatual]'],
    services['ncifluxodomicilio[70a74f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('75 anos mais (M)',
    services['ncifluxodomicilio[75maism_atendmesatual]'],
    services['ncifluxodomicilio[75maism_presmesatual]'],
    services['ncifluxodomicilio[75maism_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('75 anos mais (F)',
    services['ncifluxodomicilio[75maisf_atendmesatual]'],
    services['ncifluxodomicilio[75maisf_presmesatual]'],
    services['ncifluxodomicilio[75maisf_remmesatual]'],
    1, 1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['ncifluxodomicilio[60a64m_atendmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[60a64f_atendmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[65a69m_atendmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[65a69f_atendmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[70a74m_atendmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[70a74f_atendmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[75maism_atendmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[75maisf_atendmesatual]'], 10),
    parseInt(services['ncifluxodomicilio[60a64m_presmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[60a64f_presmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[65a69m_presmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[65a69f_presmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[70a74m_presmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[70a74f_presmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[75maism_presmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[75maisf_presmesatual]'], 10),
    parseInt(services['ncifluxodomicilio[60a64m_remmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[60a64f_remmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[65a69m_remmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[65a69f_remmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[70a74m_remmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[70a74f_remmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[75maism_remmesatual]'], 10)
    + parseInt(services['ncifluxodomicilio[75maisf_remmesatual]'], 10),
    1, 1, 1, 1, 1, 1),

];

export const sexoRacaCorNCI = ({ services, createData }:any) => [
  createData('Feminino',
    services['nciconvracasexo[fem_branc]'],
    services['nciconvracasexo[fem_preto]'],
    services['nciconvracasexo[fem_pardo]'],
    services['nciconvracasexo[fem_amarelo]'],
    services['nciconvracasexo[fem_indigena]'],
    services['nciconvracasexo[fem_naoinf]'],
    parseInt(services['nciconvracasexo[fem_branc]'], 10)
    + parseInt(services['nciconvracasexo[fem_preto]'], 10)
    + parseInt(services['nciconvracasexo[fem_pardo]'], 10)
    + parseInt(services['nciconvracasexo[fem_amarelo]'], 10)
    + parseInt(services['nciconvracasexo[fem_indigena]'], 10)
    + parseInt(services['nciconvracasexo[fem_naoinf]'], 10), 1, 1),
  createData('Masculino',
    services['nciconvracasexo[masc_branc]'],
    services['nciconvracasexo[masc_preto]'],
    services['nciconvracasexo[masc_pardo]'],
    services['nciconvracasexo[masc_amarelo]'],
    services['nciconvracasexo[masc_indigena]'],
    services['nciconvracasexo[masc_naoinf]'],
    parseInt(services['nciconvracasexo[masc_branc]'], 10)
    + parseInt(services['nciconvracasexo[masc_preto]'], 10)
    + parseInt(services['nciconvracasexo[masc_pardo]'], 10)
    + parseInt(services['nciconvracasexo[masc_amarelo]'], 10)
    + parseInt(services['nciconvracasexo[masc_indigena]'], 10)
    + parseInt(services['nciconvracasexo[masc_naoinf]'], 10), 1, 1),
  createData('Total Geral',
    parseInt(services['nciconvracasexo[masc_branc]'], 10)
    + parseInt(services['nciconvracasexo[fem_branc]'], 10),
    parseInt(services['nciconvracasexo[masc_preto]'], 10)
    + parseInt(services['nciconvracasexo[fem_preto]'], 10),
    parseInt(services['nciconvracasexo[masc_pardo]'], 10)
    + parseInt(services['nciconvracasexo[fem_pardo]'], 10),
    parseInt(services['nciconvracasexo[masc_amarelo]'], 10)
    + parseInt(services['nciconvracasexo[fem_amarelo]'], 10),
    parseInt(services['nciconvracasexo[masc_indigena]'], 10)
    + parseInt(services['nciconvracasexo[fem_indigena]'], 10),
    parseInt(services['nciconvracasexo[masc_naoinf]'], 10)
    + parseInt(services['nciconvracasexo[fem_naoinf]'], 10),
    parseInt(services['nciconvracasexo[masc_branc]'], 10)
    + parseInt(services['nciconvracasexo[fem_branc]'], 10)
    + parseInt(services['nciconvracasexo[masc_preto]'], 10)
    + parseInt(services['nciconvracasexo[fem_preto]'], 10)
    + parseInt(services['nciconvracasexo[masc_pardo]'], 10)
    + parseInt(services['nciconvracasexo[fem_pardo]'], 10)
    + parseInt(services['nciconvracasexo[masc_amarelo]'], 10)
    + parseInt(services['nciconvracasexo[fem_amarelo]'], 10)
    + parseInt(services['nciconvracasexo[masc_indigena]'], 10)
    + parseInt(services['nciconvracasexo[fem_indigena]'], 10)
    + parseInt(services['nciconvracasexo[masc_naoinf]'], 10)
    + parseInt(services['nciconvracasexo[fem_naoinf]'], 10), 1, 1),
];

export const sexoRacaCorDomicilioNCI = ({ services, createData }:any) => [
  createData('Feminino',
    services['ncidomracasexo[fem_branc]'],
    services['ncidomracasexo[fem_preto]'],
    services['ncidomracasexo[fem_pardo]'],
    services['ncidomracasexo[fem_amarelo]'],
    services['ncidomracasexo[fem_indigena]'],
    services['ncidomracasexo[fem_naoinf]'],
    parseInt(services['ncidomracasexo[fem_branc]'], 10)
    + parseInt(services['ncidomracasexo[fem_preto]'], 10)
    + parseInt(services['ncidomracasexo[fem_pardo]'], 10)
    + parseInt(services['ncidomracasexo[fem_amarelo]'], 10)
    + parseInt(services['ncidomracasexo[fem_indigena]'], 10)
    + parseInt(services['ncidomracasexo[fem_naoinf]'], 10), 1, 1),
  createData('Masculino',
    services['ncidomracasexo[masc_branc]'],
    services['ncidomracasexo[masc_preto]'],
    services['ncidomracasexo[masc_pardo]'],
    services['ncidomracasexo[masc_amarelo]'],
    services['ncidomracasexo[masc_indigena]'],
    services['ncidomracasexo[masc_naoinf]'],
    parseInt(services['ncidomracasexo[masc_branc]'], 10)
    + parseInt(services['ncidomracasexo[masc_preto]'], 10)
    + parseInt(services['ncidomracasexo[masc_pardo]'], 10)
    + parseInt(services['ncidomracasexo[masc_amarelo]'], 10)
    + parseInt(services['ncidomracasexo[masc_indigena]'], 10)
    + parseInt(services['ncidomracasexo[masc_naoinf]'], 10), 1, 1),
  createData('Total Geral',
    parseInt(services['ncidomracasexo[masc_branc]'], 10)
    + parseInt(services['ncidomracasexo[fem_branc]'], 10),
    parseInt(services['ncidomracasexo[masc_preto]'], 10)
    + parseInt(services['ncidomracasexo[fem_preto]'], 10),
    parseInt(services['ncidomracasexo[masc_pardo]'], 10)
    + parseInt(services['ncidomracasexo[fem_pardo]'], 10),
    parseInt(services['ncidomracasexo[masc_amarelo]'], 10)
    + parseInt(services['ncidomracasexo[fem_amarelo]'], 10),
    parseInt(services['ncidomracasexo[masc_indigena]'], 10)
    + parseInt(services['ncidomracasexo[fem_indigena]'], 10),
    parseInt(services['ncidomracasexo[masc_naoinf]'], 10)
    + parseInt(services['ncidomracasexo[fem_naoinf]'], 10),
    parseInt(services['ncidomracasexo[masc_branc]'], 10)
    + parseInt(services['ncidomracasexo[fem_branc]'], 10)
    + parseInt(services['ncidomracasexo[masc_preto]'], 10)
    + parseInt(services['ncidomracasexo[fem_preto]'], 10)
    + parseInt(services['ncidomracasexo[masc_pardo]'], 10)
    + parseInt(services['ncidomracasexo[fem_pardo]'], 10)
    + parseInt(services['ncidomracasexo[masc_amarelo]'], 10)
    + parseInt(services['ncidomracasexo[fem_amarelo]'], 10)
    + parseInt(services['ncidomracasexo[masc_indigena]'], 10)
    + parseInt(services['ncidomracasexo[fem_indigena]'], 10)
    + parseInt(services['ncidomracasexo[masc_naoinf]'], 10)
    + parseInt(services['ncidomracasexo[fem_naoinf]'], 10), 1, 1),
];

export const motivosSaidaNCI = ({ services, createData }:any) => [
  createData('Mudança de endereço',
    services['ncisaidaconvivencia[mudancaendereco_quantidade]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
  createData('Transferência para outro serviço',
    services['ncisaidaconvivencia[transferencia_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Óbito',
    services['ncisaidaconvivencia[obito_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Oferta do Serviço em Domicílio',
    services['ncisaidaconvivencia[ofertadom_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Total',
    parseInt(services['ncisaidaconvivencia[ofertadom_quantidade]'], 10)
  + parseInt(services['ncisaidaconvivencia[obito_quantidade]'], 10)
  + parseInt(services['ncisaidaconvivencia[transferencia_quantidade]'], 10)
  + parseInt(services['ncisaidaconvivencia[mudancaendereco_quantidade]'], 10),
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),

];

export const motivosSaidaAbrilNCI = ({ services, createData }:any) => [
  createData('Mudança de endereço',
    services['ncisaidaconvivencia[mudancaendereco_quantidade]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
  createData('Transferência para outro serviço',
    services['ncisaidaconvivencia[transferencia_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Óbito',
    services['ncisaidaconvivencia[obito_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Oferta do Serviço em Domicílio',
    services['ncisaidaconvivencia[ofertadom_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Desistência',
    services['ncisaidaconvivencia[desistencia_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Total',
    parseInt(services['ncisaidaconvivencia[ofertadom_quantidade]'], 10)
  + parseInt(services['ncisaidaconvivencia[obito_quantidade]'], 10)
  + parseInt(services['ncisaidaconvivencia[transferencia_quantidade]'], 10)
  + parseInt(services['ncisaidaconvivencia[mudancaendereco_quantidade]'], 10)
  + parseInt(services['ncisaidaconvivencia[desistencia_quantidade]'], 10),
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),

];

export const motivosSaidaDomicilioNCI = ({ services, createData }:any) => [
  createData('Mudança de endereço',
    services['ncisaidadomicilio[mudancaendereco_quantidade]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
  createData('Transferência para outro serviço',
    services['ncisaidadomicilio[transferencia_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Óbito',
    services['ncisaidadomicilio[obito_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Recusa de acompanhamento',
    services['ncisaidadomicilio[recusa_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Ganhou autonomia',
    services['ncisaidadomicilio[autonomia_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Resgate de vínculos familiares',
    services['ncisaidadomicilio[resgate_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Passou a participar das atividades de convivência',
    services['ncisaidadomicilio[conclusaocurso_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Total',
    parseInt(services['ncisaidadomicilio[conclusaocurso_quantidade]'], 10)
    + parseInt(services['ncisaidadomicilio[resgate_quantidade]'], 10)
    + parseInt(services['ncisaidadomicilio[autonomia_quantidade]'], 10)
    + parseInt(services['ncisaidadomicilio[recusa_quantidade]'], 10)
  + parseInt(services['ncisaidadomicilio[obito_quantidade]'], 10)
  + parseInt(services['ncisaidadomicilio[transferencia_quantidade]'], 10)
  + parseInt(services['ncisaidadomicilio[mudancaendereco_quantidade]'], 10),
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),

];

export const motivosSaidaDomicilioAbrilNCI = ({ services, createData }:any) => [
  createData('Mudança de endereço',
    services['ncisaidadomicilio[mudancaendereco_quantidade]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
  createData('Transferência para outro serviço',
    services['ncisaidadomicilio[transferencia_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Óbito',
    services['ncisaidadomicilio[obito_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Recusa de acompanhamento',
    services['ncisaidadomicilio[recusa_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Ganhou autonomia',
    services['ncisaidadomicilio[autonomia_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Resgate de vínculos familiares',
    services['ncisaidadomicilio[resgate_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Passou a participar das atividades de convivência',
    services['ncisaidadomicilio[conclusaocurso_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Desistência',
    services['ncisaidadomicilio[desistencia_quantidade]'],
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),
  createData('Total',
    parseInt(services['ncisaidadomicilio[conclusaocurso_quantidade]'], 10)
    + parseInt(services['ncisaidadomicilio[resgate_quantidade]'], 10)
    + parseInt(services['ncisaidadomicilio[autonomia_quantidade]'], 10)
    + parseInt(services['ncisaidadomicilio[recusa_quantidade]'], 10)
    + parseInt(services['ncisaidadomicilio[obito_quantidade]'], 10)
    + parseInt(services['ncisaidadomicilio[transferencia_quantidade]'], 10)
    + parseInt(services['ncisaidadomicilio[mudancaendereco_quantidade]'], 10)
    + parseInt(services['ncisaidadomicilio[desistencia_quantidade]'], 10),
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1),

];

export const idososMoramSozinhoNCI = ({ services, createData }:any) => [
  createData('Quantidade de idosos que moram sozinhos',
    services['nciconvidososozinho[idososo]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
  createData('Desses idosos, informe a quantidade de idosos que precisam de ajuda',
    services['nciconvidososozinho[ajudaidosos]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
];

export const idososMoramSozinhoDomicilioNCI = ({ services, createData }:any) => [
  createData('Quantidade de idosos que moram sozinhos',
    services['ncidomsosozinho[idososo]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
  createData('Desses idosos, informe a quantidade de idosos que precisam de ajuda',
    services['ncidomsosozinho[ajudaidosos]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
];

export const idososFamiliasNCI = ({ services, createData }:any) => [
  createData('Nº de famílias de idosos atendidas presencialmente no mês de referência ',
    services['nciconvatenfam[ccafampres]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
  createData('Nº de famílias de idosos acompanhadas de forma remota no mês de referência',
    services['nciconvatenfam[ccafamrem]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
  createData('Nº total de famílias de idosos atendidas no mês de referência',
    services['nciconvatenfam[ccafamtotal]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
];

export const idososFamiliasDomicilioNCI = ({ services, createData }:any) => [
  createData('Nº de famílias de idosos atendidas presencialmente no mês de referência ',
    services['ncidomatendfam[ccafampres]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
  createData('Nº de famílias de idosos acompanhadas de forma remota no mês de referência',
    services['ncidomatendfam[ccafamrem]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
  createData('Nº total de famílias de idosos atendidas no mês de referência',
    services['ncidomatendfam[ccafamtotal]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
];

export const familiasInsumosNCI = ({ services, createData }:any) => [
  createData('Cesta de alimentos', services['nciinsumos[alimentos_SQ001]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Kit de material de higiene', services['nciinsumos[higiene_SQ001]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const infoIdososNCI = ({ services, createData }:any) => [
  createData('Nº de idosos do serviço em domicílio que recebem BPC', services['nciinfoimportantes[bpcdomicilio_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de idosos do serviço de convivência que recebem BPC', services['nciinfoimportantes[bpcconvivencia_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de idosos do serviço em domicílio com PDU em andamento', services['nciinfoimportantes[pdudomicilio_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de visitas domiciliares realizadas no mês para o público da convivência', services['nciinfoimportantes[visitasconvivi_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de visitas domiciliares realizadas no mês para o público do serviço em domicílio', services['nciinfoimportantes[residemsos1_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const familiasVulnerabilidadeNCI = ({ services, createData }:any) => [
  createData('Conflitos', services['nciconvvulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Preconceitos/discriminação', services['nciconvvulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Abandono', services['nciconvvulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Apartação', services['nciconvvulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Confinamento', services['nciconvvulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Isolamento', services['nciconvvulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Violência', services['nciconvvulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const familiasVulnerabilidadeDomicilioNCI = ({ services, createData }:any) => [
  createData('Conflitos', services['ncidomvulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Preconceitos/discriminação', services['ncidomvulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Abandono', services['ncidomvulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Apartação', services['ncidomvulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Confinamento', services['ncidomvulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Isolamento', services['ncidomvulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Violência', services['ncidomvulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atividadesItemsNCI = ({ services, createData }:any) => [
  ['Atividades esportivas', services['nciatvidades[atvesporte]']],
  ['Musicalidade (cantar, tocar instrumentos etc.)', services['nciatvidades[atvmusica]']],
  ['Atividades de arte e cultura (pintura, circo, dança, teatro, trabalhos em papel etc.)', services['nciatvidades[atvcultura]']],
  ['Artesanato (bijuterias, pintura em tecido, bordado, crochê etc.)', services['nciatvidades[atvarte]']],
  ['Atividades de inclusão digital', services['nciatvidades[atvincdigital]']],
  ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['nciatvidades[atvlinguagem]']],
  ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['nciatvidades[atvculinaria]']],
  ['Atividades recreativas (jogos, brincadeiras, etc.)', services['nciatvidades[atvrecreacao]']],

];

export const temasItemsNCI = ({ services, createData }:any) => [
  ['Temas transversais (saúde, meio ambiente, cultura, esporte etc.)', services['ncitema[tematransversal]']],
  ['Direitos e programas sociais', services['ncitema[temadireitos]']],
  ['Segurança alimentar e nutricional', services['ncitema[temanutricao]']],
  ['Igualdade entre homens e mulheres', services['ncitema[temaigualdade]']],
  ['Orientação sexual e de identidade de gênero', services['ncitema[temaorientsexual]']],
  ['Relações étnico-raciais', services['ncitema[temaetnico]']],
  ['Prevenção ao uso de álcool e drogas', services['ncitema[temaalccoldrogas]']],
  ['Prevenção à violência', services['ncitema[temaprevencaovio]']],
  ['Parentalidade', services['ncitema[temaparental]']],
  ['Deficiência e acessibilidade', services['ncitema[temapcd]']],
  ['Envelhecimento saudável', services['ncitema[temaenvelhsaudavel]']],
];

export const demandaReprimidaNCI = ({ services, createData }:any) => [
  createData('60 a 64 anos', services['ncilistaespera[60a64_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('65 a 69 anos', services['ncilistaespera[65a69_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('70 a 74 anos', services['ncilistaespera[70a74_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('75 anos ou mais', services['ncilistaespera[75mais_qtdade]'], 1, 1, 1, 1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['ncilistaespera[60a64_qtdade]'], 10)
    + parseInt(services['ncilistaespera[65a69_qtdade]'], 10)
    + parseInt(services['ncilistaespera[70a74_qtdade]'], 10)
    + parseInt(services['ncilistaespera[75mais_qtdade]'], 10),
    1, 1, 1, 1, 1, 1, 1, 1),
];

export const encaminhamentosNCI = ({ services, createData }:any) => [
  createData('CRAS', services['nciencaminhamento[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['nciencaminhamento[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['nciencaminhamento[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Saúde', services['nciencaminhamento[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Habitação', services['nciencaminhamento[hab]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Previdêncial Social', services['nciencaminhamento[prev]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Conselhos de direito', services['nciencaminhamento[direito]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['nciencaminhamento[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosNCI = ({ services, createData }:any) => [
  createData('Semana 1', services['nciconvivatendrempes[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['nciconvivatendrempes[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['nciconvivatendrempes[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['nciconvivatendrempes[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['nciconvivatendrempes[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['nciconvivatendrempes[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosDomicilioNCI = ({ services, createData }:any) => [
  createData('Semana 1', services['ncidomatendremperio[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['ncidomatendremperio[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['ncidomatendremperio[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['ncidomatendremperio[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['ncidomatendremperio[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['ncidomatendremperio[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosTiposNCI = ({ services, createData }:any) => [
  createData('Telefone / Celular / Whatsapp', services['nciconvivenciremdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Email', services['nciconvivenciremdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Facebook', services['nciconvivenciremdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('YouTube', services['nciconvivenciremdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras redes sociais', services['nciconvivenciremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Entrega de kits de atividades', services['nciconvivenciremdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outros', services['nciconvivenciremdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosTiposDomicilioNCI = ({ services, createData }:any) => [
  createData('Telefone / Celular / Whatsapp', services['ncidomremdisp[telef]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Email', services['ncidomremdisp[email]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Facebook', services['ncidomremdisp[face]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('YouTube', services['ncidomremdisp[youtu]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras redes sociais', services['ncidomremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Entrega de kits de atividades', services['ncidomremdisp[entreg]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outros', services['ncidomremdisp[outros]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosFamiliaSemanaNCI = ({ services, createData }:any) => [
  createData('Semana 1', services['nciconvivatendremfam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['nciconvivatendremfam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['nciconvivatendremfam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['nciconvivatendremfam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['nciconvivatendremfam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['nciconvivatendremfam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosFamiliaSemanaDomicilioNCI = ({ services, createData }:any) => [
  createData('Semana 1', services['ncidomatendremfam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['ncidomatendremfam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['ncidomatendremfam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['ncidomatendremfam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['ncidomatendremfam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['ncidomatendremfam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendidosMesFemininoNCPOPRUA = ({ services, createData }:any) => [
  createData('0 a 11 anos (F)',
    services['ncpopruaatendfem[0a11f_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('12 a 17 anos (F)',
    services['ncpopruaatendfem[12a17f_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('18 a 29 anos (F)',
    services['ncpopruaatendfem[18a29f_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('30 a 59 anos (F)',
    services['ncpopruaatendfem[30a59f_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('60 a 64 anos (F)',
    services['ncpopruaatendfem[60a64f_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('65 a 69 anos (F)',
    services['ncpopruaatendfem[65a69f_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('70 a 74 anos (F)',
    services['ncpopruaatendfem[70a74f_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('75 anos ou mais (F)',
    services['ncpopruaatendfem[75maisf_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('Total',
    parseInt(services['ncpopruaatendfem[0a11f_freqpresencial]'], 10)
    + parseInt(services['ncpopruaatendfem[12a17f_freqpresencial]'], 10)
    + parseInt(services['ncpopruaatendfem[18a29f_freqpresencial]'], 10)
    + parseInt(services['ncpopruaatendfem[30a59f_freqpresencial]'], 10)
    + parseInt(services['ncpopruaatendfem[60a64f_freqpresencial]'], 10)
    + parseInt(services['ncpopruaatendfem[65a69f_freqpresencial]'], 10)
    + parseInt(services['ncpopruaatendfem[70a74f_freqpresencial]'], 10)
    + parseInt(services['ncpopruaatendfem[75maisf_freqpresencial]'], 10),
    1,
    1,
    1, 1, 1, 1, 1, 1),
];

export const atendidosMesMasculinoNCPOPRUA = ({ services, createData }:any) => [
  createData('0 a 11 anos (M)',
    services['ncpopruaatendmasc[0a11m_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('12 a 17 anos (M)',
    services['ncpopruaatendmasc[12a17m_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('18 a 29 anos (M)',
    services['ncpopruaatendmasc[18a29m_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('30 a 59 anos (M)',
    services['ncpopruaatendmasc[30a59m_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('60 a 64 anos (M)',
    services['ncpopruaatendmasc[60a64m_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('65 a 69 anos (M)',
    services['ncpopruaatendmasc[65a69m_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('70 a 74 anos (M)',
    services['ncpopruaatendmasc[70a74m_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('75 anos ou mais (M)',
    services['ncpopruaatendmasc[75maism_freqpresencial]'],
    1,
    1,
    1, 1, 1, 1, 1, 1),
  createData('Total',
    parseInt(services['ncpopruaatendmasc[0a11m_freqpresencial]'], 10)
    + parseInt(services['ncpopruaatendmasc[12a17m_freqpresencial]'], 10)
    + parseInt(services['ncpopruaatendmasc[18a29m_freqpresencial]'], 10)
    + parseInt(services['ncpopruaatendmasc[30a59m_freqpresencial]'], 10)
    + parseInt(services['ncpopruaatendmasc[60a64m_freqpresencial]'], 10)
    + parseInt(services['ncpopruaatendmasc[65a69m_freqpresencial]'], 10)
    + parseInt(services['ncpopruaatendmasc[70a74m_freqpresencial]'], 10)
    + parseInt(services['ncpopruaatendmasc[75maism_freqpresencial]'], 10),
    1,
    1,
    1, 1, 1, 1, 1, 1),
];

export const sexoRacaCorNCPOPRUA = ({ services, createData }:any) => [
  createData('Feminino',
    services['ncpopruaracasexo[fem_branca]'],
    services['ncpopruaracasexo[fem_preta]'],
    services['ncpopruaracasexo[fem_parda]'],
    services['ncpopruaracasexo[fem_amarela]'],
    services['ncpopruaracasexo[fem_indigena]'],
    services['ncpopruaracasexo[fem_naoinf]'],
    parseInt(services['ncpopruaracasexo[fem_branca]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_preta]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_parda]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_amarela]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_indigena]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_naoinf]'], 10), 1, 1),
  createData('Masculino',
    services['ncpopruaracasexo[masc_branca]'],
    services['ncpopruaracasexo[masc_preta]'],
    services['ncpopruaracasexo[masc_parda]'],
    services['ncpopruaracasexo[masc_amarela]'],
    services['ncpopruaracasexo[masc_indigena]'],
    services['ncpopruaracasexo[masc_naoinf]'],
    parseInt(services['ncpopruaracasexo[masc_branca]'], 10)
    + parseInt(services['ncpopruaracasexo[masc_preta]'], 10)
    + parseInt(services['ncpopruaracasexo[masc_parda]'], 10)
    + parseInt(services['ncpopruaracasexo[masc_amarela]'], 10)
    + parseInt(services['ncpopruaracasexo[masc_indigena]'], 10)
    + parseInt(services['ncpopruaracasexo[masc_naoinf]'], 10), 1, 1),
  createData('Total Geral',
    parseInt(services['ncpopruaracasexo[masc_branca]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_branca]'], 10),
    parseInt(services['ncpopruaracasexo[masc_preta]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_preta]'], 10),
    parseInt(services['ncpopruaracasexo[masc_parda]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_parda]'], 10),
    parseInt(services['ncpopruaracasexo[masc_amarela]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_amarela]'], 10),
    parseInt(services['ncpopruaracasexo[masc_indigena]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_indigena]'], 10),
    parseInt(services['ncpopruaracasexo[masc_naoinf]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_naoinf]'], 10),
    parseInt(services['ncpopruaracasexo[masc_branca]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_branca]'], 10)
    + parseInt(services['ncpopruaracasexo[masc_preta]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_preta]'], 10)
    + parseInt(services['ncpopruaracasexo[masc_parda]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_parda]'], 10)
    + parseInt(services['ncpopruaracasexo[masc_amarela]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_amarela]'], 10)
    + parseInt(services['ncpopruaracasexo[masc_indigena]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_indigena]'], 10)
    + parseInt(services['ncpopruaracasexo[masc_naoinf]'], 10)
    + parseInt(services['ncpopruaracasexo[fem_naoinf]'], 10), 1, 1),
];

export const atividadesNCPOPRUA = ({ services, createData }:any) => [
  createData('Oficina de geração de renda',
    services['ncpopruaatv[atvrenda_atvrealizadas]'],
    services['ncpopruaatv[atvrenda_atvparticipantes]'],
    1, 1, 1, 1, 1, 1, 1),
  createData('Oficina ocupacional',
    services['ncpopruaatv[atvocupacional_atvrealizadas]'],
    services['ncpopruaatv[atvocupacional_atvparticipantes]'],
    1, 1, 1, 1, 1, 1, 1),
  createData('Oficina temática',
    services['ncpopruaatv[atvtematica_atvrealizadas]'],
    services['ncpopruaatv[atvtematica_atvparticipantes]'],
    1, 1, 1, 1, 1, 1, 1),
  createData('Atividade em grupo',
    services['ncpopruaatv[atvgrupo_atvrealizadas]'],
    services['ncpopruaatv[atvgrupo_atvparticipantes]'],
    1, 1, 1, 1, 1, 1, 1),
  createData('Atendimento individual',
    services['ncpopruaatv[atvatendindividual_atvrealizadas]'],
    services['ncpopruaatv[atvatendindividual_atvparticipantes]'],
    1, 1, 1, 1, 1, 1, 1),
  createData('Total',
    parseInt(services['ncpopruaatv[atvrenda_atvrealizadas]'], 10)
    + parseInt(services['ncpopruaatv[atvocupacional_atvrealizadas]'], 10)
    + parseInt(services['ncpopruaatv[atvtematica_atvrealizadas]'], 10)
    + parseInt(services['ncpopruaatv[atvgrupo_atvrealizadas]'], 10)
    + parseInt(services['ncpopruaatv[atvatendindividual_atvrealizadas]'], 10),
    parseInt(services['ncpopruaatv[atvrenda_atvparticipantes]'], 10)
    + parseInt(services['ncpopruaatv[atvocupacional_atvparticipantes]'], 10)
    + parseInt(services['ncpopruaatv[atvtematica_atvparticipantes]'], 10)
    + parseInt(services['ncpopruaatv[atvgrupo_atvparticipantes]'], 10)
    + parseInt(services['ncpopruaatv[atvatendindividual_atvparticipantes]'], 10),
    1,
    1, 1, 1, 1, 1, 1),
];

export const infosNCPOPRUA = ({ services, createData }:any) => [
  createData('Nº de gestantes atendidas pelo serviço', services['ncpopruaoutrasinfos[gestante]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de gestantes com pré-natal em dia', services['ncpopruaoutrasinfos[gestanteprenatal]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('N° de pessoas que vieram de outros países (refugiados/imigrantes)', services['ncpopruaoutrasinfos[estrangeiro]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('N° de pessoas LGBTQIA+ atendidas', services['ncpopruaoutrasinfos[lgbt]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de pessoas vinculadas a um Centro de Acolhida', services['ncpopruaoutrasinfos[vinculadoca]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de pessoas que tenham PIA em execução', services['ncpopruaoutrasinfos[piaexecucao]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de pessoas com deficiência atendidas pelo serviço', services['ncpopruaoutrasinfos[pcd]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const encaminhamentosNCPOPRUA = ({ services, createData }:any) => [
  createData('CRAS', services['ncpopruaencaminhamen[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['ncpopruaencaminhamen[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CENTRO POP', services['ncpopruaencaminhamen[cpop]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['ncpopruaencaminhamen[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['ncpopruaencaminhamen[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendidosMesRE = ({ services, createData }:any) => [
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

export const sexoRacaCorRE = ({ services, createData }:any) => [
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

export const motivosSaidaRE = ({ services, createData }:any) => [
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

export const familiasInsumosRE = ({ services, createData }:any) => [
  createData('Cesta de alimentos', services['restainsumo[cesta]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Kit de material de higiene', services['restainsumo[higiene]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const familiasVulnerabilidadeRE = ({ services, createData }:any) => [
  createData('Conflitos', services['restavulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Preconceitos/discriminação', services['restavulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Abandono', services['restavulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Apartação', services['restavulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Confinamento', services['restavulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Isolamento', services['restavulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Violência', services['restavulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentoFamiliaRE = ({ services, createData }:any) => [
  createData('Nº de famílias atendidas', services['restafamiliaatend[familiasatendtotal_SQ001]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de famílias atendidas remotamente pelo serviço no mê', services['restafamiliaatend[familiasatendremoto_SQ001]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de famílias atendidas presencialmente pelo serviço no mês', services['restafamiliaatend[familiasatendpresenc_SQ001]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de visitas domiciliares realizadas pelo serviço no mês', services['restafamiliaatend[visitasdomiciliares_SQ001]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const temasItemsRE = ({ services, createData }:any) => [
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

export const demandaReprimidaRE = ({ services, createData }:any) => [
  createData('15 a 17 anos', services['restalistavaga[15a17_aguardandovaga]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('18 a 21 anos', services['restalistavaga[18a21anos_aguardandovaga]'], 1, 1, 1, 1, 1, 1, 1, 1),

  createData('Total',
    parseInt(services['restalistavaga[18a21anos_aguardandovaga]'], 10)
    + parseInt(services['restalistavaga[15a17_aguardandovaga]'], 10),
    1, 1, 1, 1, 1, 1, 1, 1),
];

export const encaminhamentosRE = ({ services, createData }:any) => [
  createData('CRAS', services['restaencaminhamentos[CRAS]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['restaencaminhamentos[CREAS]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['restaencaminhamentos[outrorede]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Saúde', services['restaencaminhamentos[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Educação', services['restaencaminhamentos[educacao]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Conselhos de direito', services['restaencaminhamentos[conselho]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['restaencaminhamentos[outrapp]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosRE = ({ services, createData }:any) => [
  createData('Semana 1', services['restaatendrempperiod[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['restaatendrempperiod[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['restaatendrempperiod[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['restaatendrempperiod[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['restaatendrempperiod[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['restaatendrempperiod[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosFamiliaSemanaRE = ({ services, createData }:any) => [
  createData('Semana 1', services['restaatendremfamperi[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['restaatendremfamperi[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['restaatendremfamperi[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['restaatendremfamperi[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['restaatendremfamperi[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['restaatendremfamperi[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendidosMesSADPI = ({ services, createData }:any) => [
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

export const sexoRacaCorSADPI = ({ services, createData }:any) => [
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

export const motivoSaidaSADPI = ({ services, createData }:any) => [
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

export const idososMoramSozinhoSADPI = ({ services, createData }:any) => [
  createData('Quantidade de idosos que moram sozinhos',
    services['sadpiidosossozinho[idososo]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
  createData('Destes, quantos contam com apoio da família / comunidade',
    services['sadpiidosossozinho[ajudaidosos]'],
    1,
    1, 1, 1, 1, 1, 1, 1),
];

export const infoSobreIdososSADPI = ({ services, createData }:any) => [
  createData('Nº de idosos com deficiência atendidos pelo serviço', services['sadpiinfogerais[pcd]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de idosos que recebem BPC', services['sadpiinfogerais[bpc]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de refeições concedidas pelo serviço', services['sadpiinfogerais[refeicao]'], 1, 1, 1, 1, 1, 1, 1, 1),

];

export const familiasVulnerabilidadeSADPI = ({ services, createData }:any) => [
  createData('Conflitos', services['sadpivulnerab[conflit]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Preconceitos/discriminação', services['sadpivulnerab[Precon]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Abandono', services['sadpivulnerab[aband]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Apartação', services['sadpivulnerab[apart]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Confinamento', services['sadpivulnerab[confinamet]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Isolamento', services['sadpivulnerab[isolament]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Violência', services['sadpivulnerab[violen]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const temasItemsSADPI = ({ services, createData }:any) => [
  ['Direitos e programas sociais', services['sadpitema[temadireitos]']],
  ['Segurança alimentar e nutricional', services['sadpitema[temanutricao]']],
  ['Orientações sobre higiene e cuidados pessoais', services['sadpitema[temahigiene]']],
];

export const atendidosMesSASF = ({ services, createData }:any) => [
  createData('Nº total de famílias atendidas pelo serviço no mês', services['sasfinfosnecessarias[famatend]'], 1, 1, 1, 1, 1, 1),
  createData('Nº de famílias atendidas presencialmente no mês', services['sasfinfosnecessarias[fampresencial]'], 1, 1, 1, 1, 1, 1),
  createData('Nº de famílias atendidas remotamente no mês', services['sasfinfosnecessarias[famremoto]'], 1, 1, 1, 1, 1, 1),
  createData('Nº de visitas domiciliares realizadas no mês', services['sasfinfosnecessarias[famvisitas]'], 1, 1, 1, 1, 1, 1),
  createData('Total', parseInt(services['sasfinfosnecessarias[famvisitas]'], 10)
                    + parseInt(services['sasfinfosnecessarias[famremoto]'], 10)
                    + parseInt(services['sasfinfosnecessarias[fampresencial]'], 10)
                    + parseInt(services['sasfinfosnecessarias[famatend]'], 10),

  parseInt(services['cjfluxopessoasatend[15a17m_presmesatual]'], 10)
  + parseInt(services['cjfluxopessoasatend[15a17f_presmesatual]'], 10),

  parseInt(services['cjfluxopessoasatend[15a17m_remmesatual]'], 10)
  + parseInt(services['cjfluxopessoasatend[15a17f_remmesatual]'], 10),
  1, 1, 1, 1),
];

export const sexoRacaCorSASF = ({ services, createData }:any) => [
  createData('Feminino',
    services['sasfracasexo[fem_branc]'],
    services['sasfracasexo[fem_preto]'],
    services['sasfracasexo[fem_pardo]'],
    services['sasfracasexo[fem_amarelo]'],
    services['sasfracasexo[fem_indigena]'],
    services['sasfracasexo[fem_naoinf]'],
    parseInt(services['sasfracasexo[fem_branc]'], 10)
    + parseInt(services['sasfracasexo[fem_preto]'], 10)
    + parseInt(services['sasfracasexo[fem_pardo]'], 10)
    + parseInt(services['sasfracasexo[fem_amarelo]'], 10)
    + parseInt(services['sasfracasexo[fem_indigena]'], 10)
    + parseInt(services['sasfracasexo[fem_naoinf]'], 10)),
  createData('Masculino',
    services['sasfracasexo[masc_branc]'],
    services['sasfracasexo[masc_preto]'],
    services['sasfracasexo[masc_pardo]'],
    services['sasfracasexo[masc_amarelo]'],
    services['sasfracasexo[masc_indigena]'],
    services['sasfracasexo[masc_naoinf]'],
    parseInt(services['sasfracasexo[masc_branc]'], 10)
    + parseInt(services['sasfracasexo[masc_preto]'], 10)
    + parseInt(services['sasfracasexo[masc_pardo]'], 10)
    + parseInt(services['sasfracasexo[masc_amarelo]'], 10)
    + parseInt(services['sasfracasexo[masc_indigena]'], 10)
    + parseInt(services['sasfracasexo[masc_naoinf]'], 10)),
  createData('Total Geral',
    parseInt(services['sasfracasexo[masc_branc]'], 10)
    + parseInt(services['sasfracasexo[fem_branc]'], 10),
    parseInt(services['sasfracasexo[masc_preto]'], 10)
    + parseInt(services['sasfracasexo[fem_preto]'], 10),
    parseInt(services['sasfracasexo[masc_pardo]'], 10)
    + parseInt(services['sasfracasexo[fem_pardo]'], 10),
    parseInt(services['sasfracasexo[masc_amarelo]'], 10)
    + parseInt(services['sasfracasexo[fem_amarelo]'], 10),
    parseInt(services['sasfracasexo[masc_indigena]'], 10)
    + parseInt(services['sasfracasexo[fem_indigena]'], 10),
    parseInt(services['sasfracasexo[masc_naoinf]'], 10)
    + parseInt(services['sasfracasexo[fem_naoinf]'], 10),
    parseInt(services['sasfracasexo[masc_branc]'], 10)
    + parseInt(services['sasfracasexo[fem_branc]'], 10)
    + parseInt(services['sasfracasexo[masc_preto]'], 10)
    + parseInt(services['sasfracasexo[fem_preto]'], 10)
    + parseInt(services['sasfracasexo[masc_pardo]'], 10)
    + parseInt(services['sasfracasexo[fem_pardo]'], 10)
    + parseInt(services['sasfracasexo[masc_amarelo]'], 10)
    + parseInt(services['sasfracasexo[fem_amarelo]'], 10)
    + parseInt(services['sasfracasexo[masc_indigena]'], 10)
    + parseInt(services['sasfracasexo[fem_indigena]'], 10)
    + parseInt(services['sasfracasexo[masc_naoinf]'], 10)
    + parseInt(services['sasfracasexo[fem_naoinf]'], 10)),
];

export const motivoSaidaSASF = ({ services, createData }:any) => [
  createData('Recusa/desistência do acompanhamento',
    services['sasfsaida[recusa_qtd]'],
    1,
    1, 1, 1, 1, 1),
  createData('Mudança de endereço',
    services['sasfsaida[mudanca_qtd]'],
    1,
    1, 1, 1, 1, 1),
  createData('Alcance dos objetivos',
    services['sasfsaida[objetivos_qtd]'],
    1,
    1, 1, 1, 1, 1),
  createData('Total',
    parseInt(services['sasfsaida[mudanca_qtd]'], 10)
    + parseInt(services['sasfsaida[recusa_qtd]'], 10)
    + parseInt(services['sasfsaida[objetivos_qtd]'], 10),
    1,
    1, 1, 1, 1, 1),
];

export const familiasVulnerabilidadeSASF = ({ services, createData }:any) => [
  createData('Conflitos', services['sasfvulnerab[conflit]'], 1, 1, 1, 1, 1, 1),
  createData('Preconceitos/discriminação', services['sasfvulnerab[Precon]'], 1, 1, 1, 1, 1, 1),
  createData('Abandono', services['sasfvulnerab[aband]'], 1, 1, 1, 1, 1, 1),
  createData('Apartação', services['sasfvulnerab[apart]'], 1, 1, 1, 1, 1, 1),
  createData('Confinamento', services['sasfvulnerab[confinamet]'], 1, 1, 1, 1, 1, 1),
  createData('Isolamento', services['sasfvulnerab[isolament]'], 1, 1, 1, 1, 1, 1),
  createData('Violência', services['sasfvulnerab[violen]'], 1, 1, 1, 1, 1, 1),
];

export const atividadesItemsSASF = ({ services, createData }:any) => [
  ['Reuniões', services['sasfatividade[atvreuniao]']],
  ['Rodas de conversa', services['sasfatividade[atvrodaconversa]']],
  ['Palestras', services['sasfatividade[atvpalestra]']],
  ['Oficinas de desenvolvimento de habilidades e geração/complementação de renda', services['sasfatividade[atvhabilidade]']],
  ['Manifestações artísticas (canto, dança, fotografia, teatro, grafite, etc.)', services['sasfatividade[atvartistica]']],
  ['Geração de renda ou acesso a bens (horta comunitária, produção de ovos de páscoa, enfeites, bijuterias, salgadinhos, pães, bolos/doces, etc.)', services['sasfatividade[atvrenda]']],
  ['Artesanato (pintura , bordado, costura, etc.)', services['sasfatividade[atvarte]']],
  ['Atividades de inclusão digital', services['sasfatividade[atvincdigital]']],
  ['Atividades de linguagem (produção de texto, contação de histórias, roda de conversa etc.)', services['sasfatividade[atvlinguagem]']],
  ['Atividades que envolvam manipulação de alimentos (culinária, hortas etc.)', services['sasfatividade[atvculinaria]']],
  ['Atividades recreativas (jogos, brincadeiras, etc.)', services['sasfatividade[atvrecreacao]']],
  ['Atividades de apoio às ações educativas realizadas pelas próprias famílias junto às crianças e ações realizadas pelas gestantes', services['sasfatividade[atvfamilias]']],
];

export const temasItemsSASF = ({ services, createData }:any) => [
  ['Garantia de direitos sociais (saúde, educação, previdência, moradia, envelhecimento, saúde mental, etc.)', services['sasftemas[temadireitos]']],
  ['Relacionamento familiar (gravidez na adolescência, álcool e drogas, orientação sexual, aborto, etc.)', services['sasftemas[temafamiliar]']],
  ['Direitos e programas sociais', services['sasftemas[temadireitossociais]']],
  ['Trabalho lúdico com vistas ao fortalecimento de vínculos (com atenção e cuidados às crianças de 0 a 6 anos e seus responsáveis, gestantes e demais membros da família)', services['sasftemas[temaludico]']],
  ['Igualdade entre homens e mulheres', services['sasftemas[temaigualdade]']],
  ['Relações étnico-raciais', services['sasftemas[temaetnico]']],
  ['Prevenção à violência', services['sasftemas[temaprevencaovio]']],
  ['Parentalidade', services['sasftemas[temaparental]']],
  ['Deficiência e acessibilidade', services['sasftemas[temapcd]']],
  ['Mundo do trabalho', services['sasftemas[tematrabalho]']],
];

export const numeroBPCSASF = ({ services, createData }:any) => [
  createData('Nº de famílias beneficiárias do Programa Bolsa Família acompanhadas pelo serviço', services['sasfbeneficio[familiabolsafam]'], 1, 1, 1, 1, 1, 1),
  createData('Nº de idosos beneficiários do BPC acompanhados pelo serviço', services['sasfbeneficio[idososbpc]'], 1, 1, 1, 1, 1, 1),
  createData('Nº de pessoas com deficiência beneficiárias do BPC acompanhadas pelo serviço', services['sasfbeneficio[pessoasdeficiencia]'], 1, 1, 1, 1, 1, 1),
];

export const numeroPDUSASF = ({ services, createData }:any) => [
  createData('Nº de idosos com PDU em andamento no mês', services['sasfpdu[pduidoso]'], 1, 1, 1, 1, 1, 1),
  createData('Nº de pessoas com deficiência com PDU em andamento no mês', services['sasfpdu[pdupcd]'], 1, 1, 1, 1, 1, 1),
];

export const numeroPPISASF = ({ services, createData }:any) => [
  createData('Nº de crianças acompanhadas pelas ações do Programa Primeira Infância no SUAS', services['sasfprogramainfancia[crianca]'], 1, 1, 1, 1, 1, 1),
  createData('Nº de visitas domiciliares realizadas às crianças acompanhadas pelas ações do Programa Primeira Infância no SUAS', services['sasfprogramainfancia[criancavisita]'], 1, 1, 1, 1, 1, 1),
  createData('Nº de gestantes acompanhadas pelas ações do Programa Primeira Infância no SUAS', services['sasfprogramainfancia[gestante]'], 1, 1, 1, 1, 1, 1),
  createData('Nº de visitas domiciliares realizadas às gestantes acompanhadas pelas ações do Programa Primeira Infância no SUAS', services['sasfprogramainfancia[gestantevisita]'], 1, 1, 1, 1, 1, 1),
];

export const familiasInsumosSASF = ({ services, createData }:any) => [
  createData('Cesta de alimentos', services['sasfinsumos[alimentos_SQ001]'], 1, 1, 1, 1, 1, 1),
  createData('Kit de material de higiene', services['sasfinsumos[higiene_SQ001]'], 1, 1, 1, 1, 1, 1),
];

export const encaminhamentosSASF = ({ services, createData }:any) => [
  createData('CRAS', services['sasfencaminhamentos[CRAS]'], 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['sasfencaminhamentos[CREAS]'], 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['sasfencaminhamentos[redeas]'], 1, 1, 1, 1, 1, 1),
  createData('Saúde', services['sasfencaminhamentos[saude]'], 1, 1, 1, 1, 1, 1),
  createData('Educação', services['sasfencaminhamentos[educacao]'], 1, 1, 1, 1, 1, 1),
  createData('Conselhos de direito', services['sasfencaminhamentos[direito]'], 1, 1, 1, 1, 1, 1),
  createData('Habitação', services['sasfencaminhamentos[habitacao]'], 1, 1, 1, 1, 1, 1),
  createData('Trabalho e renda', services['sasfencaminhamentos[trabalho]'], 1, 1, 1, 1, 1, 1),
  createData('Previdência social', services['sasfencaminhamentos[previdencia]'], 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['sasfencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosTiposSASF = ({ services, createData }:any) => [
  createData('Telefone / Celular / Whatsapp', services['sasfremdisp[telef]'], 1, 1, 1, 1, 1, 1),
  createData('Email', services['sasfremdisp[email]'], 1, 1, 1, 1, 1, 1),
  createData('Facebook', services['sasfremdisp[face]'], 1, 1, 1, 1, 1, 1),
  createData('YouTube', services['sasfremdisp[youtu]'], 1, 1, 1, 1, 1, 1),
  createData('Outras redes sociais', services['sasfremdisp[outrasredes]'], 1, 1, 1, 1, 1, 1),
  createData('Entrega de kits de atividades', services['sasfremdisp[entreg]'], 1, 1, 1, 1, 1, 1),
  createData('Outros', services['sasfremdisp[outros]'], 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosFamiliaSemanaSASF = ({ services, createData }:any) => [
  createData('Semana 1', services['sasfremfamperiod[1sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['sasfremfamperiod[2sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['sasfremfamperiod[3sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['sasfremfamperiod[4sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['sasfremfamperiod[5sem]'], 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['sasfremfamperiod[6sem]'], 1, 1, 1, 1, 1, 1),
];

export const atendFemSISP = ({ services, createData }:any) => [
  createData('18 a 29 anos (F)',
    services['sispatendfem[18a29f]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('30 a 59 anos (F)',
    services['sispatendfem[30a59f]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('60 a 64 anos (F)',
    services['sispatendfem[60a64f]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('65 a 69 anos (F)',
    services['sispatendfem[65a69f]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('70 a 74 anos (F)',
    services['sispatendfem[70a74f]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('75 anos ou mais (F)',
    services['sispatendfem[75maisf]'],
    1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendMascSISP = ({ services, createData }:any) => [
  createData('18 a 29 anos (M)',
    services['sispatendmasc[18a29m]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('30 a 59 anos (M)',
    services['sispatendmasc[30a59m]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('60 a 64 anos (M)',
    services['sispatendmasc[60a64m]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('65 a 69 anos (M)',
    services['sispatendmasc[65a69m]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('70 a 74 anos (M)',
    services['sispatendmasc[70a74m]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('75 anos ou mais (M)',
    services['sispatendmasc[75maism]'],
    1, 1, 1, 1, 1, 1, 1, 1),
];

export const sexoRacaCorSISP = ({ services, createData }:any) => [

  createData('Feminino',
    services['sispracasexo[fem_branca]'],
    services['sispracasexo[fem_preta]'],
    services['sispracasexo[fem_parda]'],
    services['sispracasexo[fem_amarela]'],
    services['sispracasexo[fem_indigena]'],
    services['sispracasexo[fem_naoinf]'],
    parseInt(services['sispracasexo[fem_branca]'], 10)
    + parseInt(services['sispracasexo[fem_preta]'], 10)
    + parseInt(services['sispracasexo[fem_parda]'], 10)
    + parseInt(services['sispracasexo[fem_amarela]'], 10)
    + parseInt(services['sispracasexo[fem_indigena]'], 10)
    + parseInt(services['sispracasexo[fem_naoinf]'], 10), 1, 1),
  createData('Masculino',
    services['sispracasexo[masc_branca]'],
    services['sispracasexo[masc_preta]'],
    services['sispracasexo[masc_parda]'],
    services['sispracasexo[masc_amarela]'],
    services['sispracasexo[masc_indigena]'],
    services['sispracasexo[masc_naoinf]'],
    parseInt(services['sispracasexo[masc_branca]'], 10)
    + parseInt(services['sispracasexo[masc_preta]'], 10)
    + parseInt(services['sispracasexo[masc_parda]'], 10)
    + parseInt(services['sispracasexo[masc_amarela]'], 10)
    + parseInt(services['sispracasexo[masc_indigena]'], 10)
    + parseInt(services['sispracasexo[masc_naoinf]'], 10), 1, 1),
  createData('Total Geral',
    parseInt(services['sispracasexo[masc_branca]'], 10)
    + parseInt(services['sispracasexo[fem_branca]'], 10),
    parseInt(services['sispracasexo[masc_preta]'], 10)
    + parseInt(services['sispracasexo[fem_preta]'], 10),
    parseInt(services['sispracasexo[masc_parda]'], 10)
    + parseInt(services['sispracasexo[fem_parda]'], 10),
    parseInt(services['sispracasexo[masc_amarela]'], 10)
    + parseInt(services['sispracasexo[fem_amarela]'], 10),
    parseInt(services['sispracasexo[masc_indigena]'], 10)
    + parseInt(services['sispracasexo[fem_indigena]'], 10),
    parseInt(services['sispracasexo[masc_naoinf]'], 10)
    + parseInt(services['sispracasexo[fem_naoinf]'], 10),
    parseInt(services['sispracasexo[masc_branca]'], 10)
    + parseInt(services['sispracasexo[fem_branca]'], 10)
    + parseInt(services['sispracasexo[masc_preta]'], 10)
    + parseInt(services['sispracasexo[fem_preta]'], 10)
    + parseInt(services['sispracasexo[masc_parda]'], 10)
    + parseInt(services['sispracasexo[fem_parda]'], 10)
    + parseInt(services['sispracasexo[masc_amarela]'], 10)
    + parseInt(services['sispracasexo[fem_amarela]'], 10)
    + parseInt(services['sispracasexo[masc_indigena]'], 10)
    + parseInt(services['sispracasexo[fem_indigena]'], 10)
    + parseInt(services['sispracasexo[masc_naoinf]'], 10)
    + parseInt(services['sispracasexo[fem_naoinf]'], 10), 1, 1),
];

export const perfilAssociadosSISP = ({ services, createData }:any) => [
  createData('Número de gestantes atendidas pelo serviço:',
    services['sispoutrasinfos[gestante]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Número de gestantes com pré-natal em dia atendidas pelo serviço:',
    services['sispoutrasinfos[gestanteprenatal]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Número de pessoas vinculadas a um Centro de Acolhida atendidas pelo serviço:',
    services['sispoutrasinfos[vinculadoca]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Número de pessoas com PIA em execução atendidas pelo serviço:',
    services['sispoutrasinfos[piaexecucao]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Número de pessoas que se associaram a cooperativas e/ou centrais de coleta atendidas pelo serviço:',
    services['sispoutrasinfos[cooperativa]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Número de pessoas com deficiência atendidas pelo serviço:',
    services['sispoutrasinfos[pcd]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const oficinasSISP = ({ services, createData }:any) => [
  createData('Número de oficinas realizadas no mês:', services['sispoficinas[qtdoficinas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Número de inscritos nas oficinas realizadas no mês:', services['sispoficinas[inscritosoficina]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const encaminhamentosFinalSISP = ({ services, createData }:any) => [
  createData('CRAS', services['sispencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['sispencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CENTRO POP', services['sispencaminhamentos[cpop]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['sispencaminhamentos[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['sispencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const qtdCriAdoMesSPVV = ({ services, createData }:any) => [
  createData('0 a 5 anos (F)',
    services['spvvatenfxetaria[0a5f_atendmesatual]'],
    services['spvvatenfxetaria[0a5f_presmesatual]'],
    services['spvvatenfxetaria[0a5f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('0 a 5 anos (M)',
    services['spvvatenfxetaria[0a5m_atendmesatual]'],
    services['spvvatenfxetaria[0a5m_presmesatual]'],
    services['spvvatenfxetaria[0a5m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('6 a 11 anos (F)',
    services['spvvatenfxetaria[6a11f_atendmesatual]'],
    services['spvvatenfxetaria[6a11f_presmesatual]'],
    services['spvvatenfxetaria[6a11f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('6 a 11 anos (M)',
    services['spvvatenfxetaria[6a11m_atendmesatual]'],
    services['spvvatenfxetaria[6a11m_presmesatual]'],
    services['spvvatenfxetaria[6a11m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('12 a 14 anos (F)',
    services['spvvatenfxetaria[12a14f_atendmesatual]'],
    services['spvvatenfxetaria[12a14f_presmesatual]'],
    services['spvvatenfxetaria[12a14f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('12 a 14 anos (M)',
    services['spvvatenfxetaria[12a14m_atendmesatual]'],
    services['spvvatenfxetaria[12a14m_presmesatual]'],
    services['spvvatenfxetaria[12a14m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('15 a 17 anos (F)',
    services['spvvatenfxetaria[15a17f_atendmesatual]'],
    services['spvvatenfxetaria[15a17f_presmesatual]'],
    services['spvvatenfxetaria[15a17f_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('15 a 17 anos (M)',
    services['spvvatenfxetaria[15a17m_atendmesatual]'],
    services['spvvatenfxetaria[15a17m_presmesatual]'],
    services['spvvatenfxetaria[6a11m_remmesatual]'],
    1, 1, 1, 1, 1, 1),
  createData('Total',
    parseInt(services['spvvatenfxetaria[0a5f_atendmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[0a5m_atendmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[6a11f_atendmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[6a11m_atendmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[12a14f_atendmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[12a14m_atendmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[15a17f_atendmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[15a17m_atendmesatual]'], 10),
    parseInt(services['spvvatenfxetaria[0a5f_presmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[0a5m_presmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[6a11f_presmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[6a11m_presmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[12a14f_presmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[12a14m_presmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[15a17f_presmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[15a17m_presmesatual]'], 10),
    parseInt(services['spvvatenfxetaria[0a5f_remmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[0a5m_remmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[6a11f_remmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[6a11m_remmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[12a14f_remmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[12a14m_remmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[15a17f_remmesatual]'], 10)
    + parseInt(services['spvvatenfxetaria[15a17m_remmesatual]'], 10),
    1, 1, 1, 1, 1, 1),

];

export const sexoRacaCorSPVV = ({ services, createData }:any) => [
  createData('Feminino',
    services['spvvracasexo[fem_branca]'],
    services['spvvracasexo[fem_preta]'],
    services['spvvracasexo[fem_parda]'],
    services['spvvracasexo[fem_amarela]'],
    services['spvvracasexo[fem_indigena]'],
    services['spvvracasexo[fem_naoinf]'],
    parseInt(services['spvvracasexo[fem_branca]'], 10)
    + parseInt(services['spvvracasexo[fem_preta]'], 10)
    + parseInt(services['spvvracasexo[fem_parda]'], 10)
    + parseInt(services['spvvracasexo[fem_amarela]'], 10)
    + parseInt(services['spvvracasexo[fem_indigena]'], 10)
    + parseInt(services['spvvracasexo[fem_naoinf]'], 10), 1, 1),
  createData('Masculino',
    services['spvvracasexo[masc_branca]'],
    services['spvvracasexo[masc_preta]'],
    services['spvvracasexo[masc_parda]'],
    services['spvvracasexo[masc_amarela]'],
    services['spvvracasexo[masc_indigena]'],
    services['spvvracasexo[masc_naoinf]'],
    parseInt(services['spvvracasexo[masc_branca]'], 10)
    + parseInt(services['spvvracasexo[masc_preta]'], 10)
    + parseInt(services['spvvracasexo[masc_parda]'], 10)
    + parseInt(services['spvvracasexo[masc_amarela]'], 10)
    + parseInt(services['spvvracasexo[masc_indigena]'], 10)
    + parseInt(services['spvvracasexo[masc_naoinf]'], 10), 1, 1),
  createData('Total Geral',
    parseInt(services['spvvracasexo[masc_branca]'], 10)
    + parseInt(services['spvvracasexo[fem_branca]'], 10),
    parseInt(services['spvvracasexo[masc_preta]'], 10)
    + parseInt(services['spvvracasexo[fem_preta]'], 10),
    parseInt(services['spvvracasexo[masc_parda]'], 10)
    + parseInt(services['spvvracasexo[fem_parda]'], 10),
    parseInt(services['spvvracasexo[masc_amarela]'], 10)
    + parseInt(services['spvvracasexo[fem_amarela]'], 10),
    parseInt(services['spvvracasexo[masc_indigena]'], 10)
    + parseInt(services['spvvracasexo[fem_indigena]'], 10),
    parseInt(services['spvvracasexo[masc_naoinf]'], 10)
    + parseInt(services['spvvracasexo[fem_naoinf]'], 10),
    parseInt(services['spvvracasexo[masc_branca]'], 10)
    + parseInt(services['spvvracasexo[fem_branca]'], 10)
    + parseInt(services['spvvracasexo[masc_preta]'], 10)
    + parseInt(services['spvvracasexo[fem_preta]'], 10)
    + parseInt(services['spvvracasexo[masc_parda]'], 10)
    + parseInt(services['spvvracasexo[fem_parda]'], 10)
    + parseInt(services['spvvracasexo[masc_amarela]'], 10)
    + parseInt(services['spvvracasexo[fem_amarela]'], 10)
    + parseInt(services['spvvracasexo[masc_indigena]'], 10)
    + parseInt(services['spvvracasexo[fem_indigena]'], 10)
    + parseInt(services['spvvracasexo[masc_naoinf]'], 10)
    + parseInt(services['spvvracasexo[fem_naoinf]'], 10), 1, 1),
];

export const princViolenciaSPVV = ({ services, createData }:any) => [
  createData('Violência Física',
    services['spvvagtagress[viofisica_agresspai]'],
    services['spvvagtagress[viofisica_agressmae]'],
    services['spvvagtagress[viofisica_agressirmao]'],
    services['spvvagtagress[viofisica_agresspadrmadr]'],
    services['spvvagtagress[viofisica_agressoutrfami]'],
    services['spvvagtagress[viofisica_agressoutrpesso]'],
    1, 1, 1),
  createData('Violência Psicológica',
    services['spvvagtagress[viopsico_agresspai]'],
    services['spvvagtagress[viopsico_agressmae]'],
    services['spvvagtagress[viopsico_agressirmao]'],
    services['spvvagtagress[viopsico_agresspadrmadr]'],
    services['spvvagtagress[viopsico_agressoutrfami]'],
    services['spvvagtagress[viopsico_agressoutrpesso]'],
    1, 1, 1),
  createData('Exploração Sexual',
    services['spvvagtagress[vioexplo_agresspai]'],
    services['spvvagtagress[vioexplo_agressmae]'],
    services['spvvagtagress[vioexplo_agressirmao]'],
    services['spvvagtagress[vioexplo_agresspadrmadr]'],
    services['spvvagtagress[vioexplo_agressoutrfami]'],
    services['spvvagtagress[vioexplo_agressoutrpesso]'],
    1, 1, 1),
  createData('Abuso Sexual',
    services['spvvagtagress[vioabuso_agresspai]'],
    services['spvvagtagress[vioabuso_agressmae]'],
    services['spvvagtagress[vioabuso_agressirmao]'],
    services['spvvagtagress[vioabuso_agresspadrmadr]'],
    services['spvvagtagress[vioabuso_agressoutrfami]'],
    services['spvvagtagress[vioabuso_agressoutrpesso]'],
    1, 1, 1),
  createData('Negligência',
    services['spvvagtagress[vionegli_agresspai]'],
    services['spvvagtagress[vionegli_agressmae]'],
    services['spvvagtagress[vionegli_agressirmao]'],
    services['spvvagtagress[vionegli_agresspadrmadr]'],
    services['spvvagtagress[vionegli_agressoutrfami]'],
    services['spvvagtagress[vionegli_agressoutrpesso]'],
    1, 1, 1),
  createData('Total',
    parseInt(services['spvvagtagress[viofisica_agresspai]'], 10)
    + parseInt(services['spvvagtagress[viopsico_agresspai]'], 10)
    + parseInt(services['spvvagtagress[vioexplo_agresspai]'], 10)
    + parseInt(services['spvvagtagress[vioabuso_agresspai]'], 10)
    + parseInt(services['spvvagtagress[vionegli_agresspai]'], 10),
    parseInt(services['spvvagtagress[viofisica_agressmae]'], 10)
    + parseInt(services['spvvagtagress[viopsico_agressmae]'], 10)
    + parseInt(services['spvvagtagress[vioexplo_agressmae]'], 10)
    + parseInt(services['spvvagtagress[vioabuso_agressmae]'], 10)
    + parseInt(services['spvvagtagress[vionegli_agressmae]'], 10),
    parseInt(services['spvvagtagress[viofisica_agressirmao]'], 10)
    + parseInt(services['spvvagtagress[viopsico_agressirmao]'], 10)
    + parseInt(services['spvvagtagress[vioexplo_agressirmao]'], 10)
    + parseInt(services['spvvagtagress[vioabuso_agressirmao]'], 10)
    + parseInt(services['spvvagtagress[vionegli_agressirmao]'], 10),
    parseInt(services['spvvagtagress[viofisica_agresspadrmadr]'], 10)
    + parseInt(services['spvvagtagress[viopsico_agresspadrmadr]'], 10)
    + parseInt(services['spvvagtagress[vioexplo_agresspadrmadr]'], 10)
    + parseInt(services['spvvagtagress[vioabuso_agresspadrmadr]'], 10)
    + parseInt(services['spvvagtagress[vionegli_agresspadrmadr]'], 10),
    parseInt(services['spvvagtagress[viofisica_agressoutrfami]'], 10)
    + parseInt(services['spvvagtagress[viopsico_agressoutrfami]'], 10)
    + parseInt(services['spvvagtagress[vioexplo_agressoutrfami]'], 10)
    + parseInt(services['spvvagtagress[vioabuso_agressoutrfami]'], 10)
    + parseInt(services['spvvagtagress[vionegli_agressoutrfami]'], 10),
    parseInt(services['spvvagtagress[viofisica_agressoutrpesso]'], 10)
    + parseInt(services['spvvagtagress[viopsico_agressoutrpesso]'], 10)
    + parseInt(services['spvvagtagress[vioexplo_agressoutrpesso]'], 10)
    + parseInt(services['spvvagtagress[vioabuso_agressoutrpesso]'], 10)
    + parseInt(services['spvvagtagress[vionegli_agressoutrpesso]'], 10),
    1, 1, 1),
];

export const secViolenciaSPVV = ({ services, createData }:any) => [
  createData('Violência Física',
    services['spvvagtagress2[viofisica_agresspai]'],
    services['spvvagtagress2[viofisica_agressmae]'],
    services['spvvagtagress2[viofisica_agressirmao]'],
    services['spvvagtagress2[viofisica_agresspadrmadr]'],
    services['spvvagtagress2[viofisica_agressoutrfami]'],
    services['spvvagtagress2[viofisica_agressoutrpesso]'],
    1, 1, 1),
  createData('Violência Psicológica',
    services['spvvagtagress2[viopsico_agresspai]'],
    services['spvvagtagress2[viopsico_agressmae]'],
    services['spvvagtagress2[viopsico_agressirmao]'],
    services['spvvagtagress2[viopsico_agresspadrmadr]'],
    services['spvvagtagress2[viopsico_agressoutrfami]'],
    services['spvvagtagress2[viopsico_agressoutrpesso]'],
    1, 1, 1),
  createData('Exploração Sexual',
    services['spvvagtagress2[vioexplo_agresspai]'],
    services['spvvagtagress2[vioexplo_agressmae]'],
    services['spvvagtagress2[vioexplo_agressirmao]'],
    services['spvvagtagress2[vioexplo_agresspadrmadr]'],
    services['spvvagtagress2[vioexplo_agressoutrfami]'],
    services['spvvagtagress2[vioexplo_agressoutrpesso]'],
    1, 1, 1),
  createData('Abuso Sexual',
    services['spvvagtagress2[vioabuso_agresspai]'],
    services['spvvagtagress2[vioabuso_agressmae]'],
    services['spvvagtagress2[vioabuso_agressirmao]'],
    services['spvvagtagress2[vioabuso_agresspadrmadr]'],
    services['spvvagtagress2[vioabuso_agressoutrfami]'],
    services['spvvagtagress2[vioabuso_agressoutrpesso]'],
    1, 1, 1),
  createData('Negligência',
    services['spvvagtagress2[vionegli_agresspai]'],
    services['spvvagtagress2[vionegli_agressmae]'],
    services['spvvagtagress2[vionegli_agressirmao]'],
    services['spvvagtagress2[vionegli_agresspadrmadr]'],
    services['spvvagtagress2[vionegli_agressoutrfami]'],
    services['spvvagtagress2[vionegli_agressoutrpesso]'],
    1, 1, 1),
  createData('Total',
    parseInt(services['spvvagtagress2[viofisica_agresspai]'], 10)
    + parseInt(services['spvvagtagress2[viopsico_agresspai]'], 10)
    + parseInt(services['spvvagtagress2[vioexplo_agresspai]'], 10)
    + parseInt(services['spvvagtagress2[vioabuso_agresspai]'], 10)
    + parseInt(services['spvvagtagress2[vionegli_agresspai]'], 10),
    parseInt(services['spvvagtagress2[viofisica_agressmae]'], 10)
    + parseInt(services['spvvagtagress2[viopsico_agressmae]'], 10)
    + parseInt(services['spvvagtagress2[vioexplo_agressmae]'], 10)
    + parseInt(services['spvvagtagress2[vioabuso_agressmae]'], 10)
    + parseInt(services['spvvagtagress2[vionegli_agressmae]'], 10),
    parseInt(services['spvvagtagress2[viofisica_agressirmao]'], 10)
    + parseInt(services['spvvagtagress2[viopsico_agressirmao]'], 10)
    + parseInt(services['spvvagtagress2[vioexplo_agressirmao]'], 10)
    + parseInt(services['spvvagtagress2[vioabuso_agressirmao]'], 10)
    + parseInt(services['spvvagtagress2[vionegli_agressirmao]'], 10),
    parseInt(services['spvvagtagress2[viofisica_agresspadrmadr]'], 10)
    + parseInt(services['spvvagtagress2[viopsico_agresspadrmadr]'], 10)
    + parseInt(services['spvvagtagress2[vioexplo_agresspadrmadr]'], 10)
    + parseInt(services['spvvagtagress2[vioabuso_agresspadrmadr]'], 10)
    + parseInt(services['spvvagtagress2[vionegli_agresspadrmadr]'], 10),
    parseInt(services['spvvagtagress2[viofisica_agressoutrfami]'], 10)
    + parseInt(services['spvvagtagress2[viopsico_agressoutrfami]'], 10)
    + parseInt(services['spvvagtagress2[vioexplo_agressoutrfami]'], 10)
    + parseInt(services['spvvagtagress2[vioabuso_agressoutrfami]'], 10)
    + parseInt(services['spvvagtagress2[vionegli_agressoutrfami]'], 10),
    parseInt(services['spvvagtagress2[viofisica_agressoutrpesso]'], 10)
    + parseInt(services['spvvagtagress2[viopsico_agressoutrpesso]'], 10)
    + parseInt(services['spvvagtagress2[vioexplo_agressoutrpesso]'], 10)
    + parseInt(services['spvvagtagress2[vioabuso_agressoutrpesso]'], 10)
    + parseInt(services['spvvagtagress2[vionegli_agressoutrpesso]'], 10),
    1, 1, 1),
];

export const encaminhamentosSPVV = ({ services, createData }:any) => [

  createData('Conselho Tutelar', services['spvvorigemencaminha[origemconselho]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Comunidade / Família', services['spvvorigemencaminha[origemfamilia]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['spvvorigemencaminha[origemsocioa]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['spvvorigemencaminha[origempp]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Poder Judiciário / Ministério Público', services['spvvorigemencaminha[origempoder]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Total Geral',
    parseInt(services['spvvorigemencaminha[origemconselho]'], 10)
    + parseInt(services['spvvorigemencaminha[origemfamilia]'], 10)
    + parseInt(services['spvvorigemencaminha[origemsocioa]'], 10)
    + parseInt(services['spvvorigemencaminha[origempp]'], 10)
    + parseInt(services['spvvorigemencaminha[origempoder]'], 10),
    1, 1, 1, 1, 1, 1, 1, 1),
];

export const qtdAtendTecSPVV = ({ services, createData }:any) => [
  createData('Nº de pessoas que receberam orientação psicossocial', services['spvvatendtecnico[atendtecnicopsico]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de visitas domiciliares realizadas', services['spvvatendtecnico[atendtecnicovisita]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de atendimentos familiares', services['spvvatendtecnico[atendtecnicofamilia]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de reuniões de articulação com a rede', services['spvvatendtecnico[atendtecnicorede]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Nº de reuniões para discussão de caso com técnicos do serviço e CREAS', services['spvvatendtecnico[atendtecnicocaso]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const motivosSaidaSPVV = ({ services, createData }:any) => [
  createData('Conclusão do caso',
    services['spvvsaida[saidaconclusao]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('Transferência para outro serviço',
    services['spvvsaida[saidalimiteidade]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('Óbito',
    services['spvvsaida[saidaobito]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('Abandono',
    services['spvvsaida[saidaabandono]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('Medida restritiva de liberdade',
    services['spvvsaida[saidamedidaliberdade]'],
    1, 1, 1, 1, 1, 1, 1, 1),

];

export const tempoPermaSPVV = ({ services, createData }:any) => [
  createData('Até 1 ano',
    services['spvvtempopermanen[ate1ano_qtde]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('De 1 a 2 anos',
    services['spvvtempopermanen[1a2_qtde]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('Mais de 2 anos Nº de usuários',
    services['spvvtempopermanen[maisde2_qtde]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('Total',
    parseInt(services['spvvtempopermanen[ate1ano_qtde]'], 10)
    + parseInt(services['spvvtempopermanen[1a2_qtde]'], 10)
    + parseInt(services['spvvtempopermanen[maisde2_qtde]'], 10),
    1, 1, 1, 1, 1, 1, 1, 1),
];

export const terriMoradiaSPVV = ({ services, createData }:any) => [
  createData('No mesmo distrito onde o serviço está localizado',
    services['spvvregiao[spvvdistrito]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('Na mesma subprefeitura (SAS) onde o serviço está localizado',
    services['spvvregiao[spvvsubpr]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('Em outra subprefeitura (SAS) onde o serviço está localizado',
    services['spvvregiao[spvvservi]'],
    1, 1, 1, 1, 1, 1, 1, 1),
  createData('Total',
    parseInt(services['spvvregiao[spvvdistrito]'], 10)
    + parseInt(services['spvvregiao[spvvsubpr]'], 10)
    + parseInt(services['spvvregiao[spvvservi]'], 10),
    1, 1, 1, 1, 1, 1, 1, 1),
];

export const encaminhamentosFinalSPVV = ({ services, createData }:any) => [
  createData('CRAS', services['spvvencaminhamentos[cras]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('CREAS', services['spvvencaminhamentos[creas]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outro serviço da rede socioassistencial', services['spvvencaminhamentos[servicosrede]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Saúde', services['spvvencaminhamentos[saude]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Educação', services['spvvencaminhamentos[educacao]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Defensoria Pública', services['spvvencaminhamentos[defensoria]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Judiciário', services['spvvencaminhamentos[judiciario]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Outras políticas públicas', services['spvvencaminhamentos[outraspoliticas]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosSPVV = ({ services, createData }:any) => [
  createData('Semana 1', services['spvvatendremotoperio[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['spvvatendremotoperio[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['spvvatendremotoperio[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['spvvatendremotoperio[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['spvvatendremotoperio[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['spvvatendremotoperio[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];

export const atendimentosRemotosFamiliaSemanaSPVV = ({ services, createData }:any) => [
  createData('Semana 1', services['spvvperiofam[1sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 2', services['spvvperiofam[2sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 3', services['spvvperiofam[3sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 4', services['spvvperiofam[4sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 5', services['spvvperiofam[5sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
  createData('Semana 6', services['spvvperiofam[6sem]'], 1, 1, 1, 1, 1, 1, 1, 1),
];
