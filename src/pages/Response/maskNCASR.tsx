import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Typography } from '@material-ui/core';
import MoonLoader from 'react-spinners/MoonLoader';

import {
  Section, LoaderBody,
} from './styles';
import { fetchServicesAnswers } from './ServiceValues';

import TableFourColumns from '../../components/TableFourColumns';
import TableEigthColumns from '../../components/TableEightColumns';
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
) {
  return {
    title, attribute1, attribute2, attribute3, attribute4, attribute5, attribute6, attribute7,
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

const motivoSaidaHeaders = ['', 'Quantidade'];

const familiasAtendidasHeaders = ['', 'Nº de famílias'];

const Response: React.FC = () => {
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

  const sexoRacaCor = [
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

  const motivoSaida = [
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

  const familiasAtendidas = [
    createData('Nº de famílias atendidas presencialmente no mês', services['cjatendfam[cjfampres]'], 1, 1, 1, 1, 1, 1),
    createData('Nº de famílias acompanhadas de forma remota no mês', services['cjatendfam[cjfamrem]'], 1, 1, 1, 1, 1, 1),
    createData('Nº total de famílias atendidas no mês', services['cjatendfam[cjfamtotal]'], 1, 1, 1, 1, 1, 1),
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
              1. Quantidade de pessoas do sexo feminino atendidas pelo serviço no mês de referência:
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMes} />

            <h2>
              2. Quantidade de pessoas do sexo masculino
              atendidos pelo serviço no mês de referência:
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
            <h2>
              3. Quantidade de pessoas atendidas por sexo e raça/cor no mês de referência.
            </h2>
            <TableTwoColumns headers={motivoSaidaHeaders} body={motivoSaida} />

            <h2>
              4. Nº de pessoas que participaram das atividades propostas pelo serviço:
            </h2>
            <h2>
              5. Quantifique as situações abaixo com os dados do mês de referência:
            </h2>
            <TableTwoColumns headers={familiasAtendidasHeaders} body={familiasAtendidas} />
            <br />
            <Typography variant="h5" gutterBottom>
              6. Encaminhamentos realizados pelo serviço no mês de referência:
            </Typography>

          </Section>
        </>
      )
  );
};

export default Response;
