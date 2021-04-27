import styled from 'styled-components';

import axios from 'axios';

export const fetchServicesAnswers = ({
  nomeSAS, mes, token, tipologia, setServices, setLoading,
}:any) => {
  axios.get(`http://localhost:9090/devolutivas/${nomeSAS}/${mes}/${token}/${tipologia}`).then((res) => {
    setServices(res.data);
    console.log(res.data);
    setLoading(false);
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
