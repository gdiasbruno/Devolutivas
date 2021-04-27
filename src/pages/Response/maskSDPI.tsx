import React, { useState, useEffect, useContext } from 'react';

import { Typography } from '@material-ui/core';
import MoonLoader from 'react-spinners/MoonLoader';

import {
  Section, LoaderBody,
} from './styles';
import { fetchServicesAnswers } from './TableLinesValues';

import TableFourColumns from '../../components/TableFourColumns';
import TableEigthColumns from '../../components/TableEightColumns';
import TableThreeColumns from '../../components/TableThreeColumns';
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

const motivoSaidaHeaders = ['6 a 11 anos', '12 a 14 anos'];

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

  const sexoRacaCor = [
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

  const motivoSaida = [
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

  const familiasAtendidas = [
    createData('Nº de famílias atendidas presencialmente no mês', services['ccaatendfam[ccafampres]'], 1, 1, 1, 1, 1, 1),
    createData('Nº de famílias acompanhadas de forma remota no mês', services['ccaatendfam[ccafamrem]'], 1, 1, 1, 1, 1, 1),
    createData('Nº total de famílias atendidas no mês', services['ccaatendfam[ccafamtotal]'], 1, 1, 1, 1, 1, 1),
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
              1. Quantidade de pessoas atendidas no mês, por sexo e faixa etária
            </h2>
            <TableFourColumns headers={atendidosMesHeaders} body={atendidosMes} />

            <h2>
              2. Quantidade idosos atendidos no mês, por sexo e raça/cor
            </h2>
            <TableEigthColumns headers={sexoRacaCorHeaders} body={sexoRacaCor} />
            <h2>
              3. Quantidade de usuários por motivo de saída do serviço no mês
            </h2>
            <TableThreeColumns headers={motivoSaidaHeaders} body={motivoSaida} />

            <Typography variant="h5" gutterBottom>
              4. Informe um valor para as situações apresentadas abaixo
            </Typography>
            <br />
            <Typography variant="h5" gutterBottom>
              5. Indique os temas discutidos com as pessoas
              atendidas pelo serviço no mês de referência
            </Typography>
            <br />
            <h2>
              6. Indique o número de famílias ou pessoas
              que buscaram atendimento presencial no mês
              de referência devido a alguma vulnerabilidade
              relacional listada abaixo
            </h2>
            <TableTwoColumns headers={familiasAtendidasHeaders} body={familiasAtendidas} />

            <Typography variant="h6" gutterBottom>
              7. Quantifique as situações abaixo com os dados do mês de referência:
            </Typography>
          </Section>
        </>
      )
  );
};

export default Response;
