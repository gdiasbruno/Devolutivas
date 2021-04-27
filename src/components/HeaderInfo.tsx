import { useContext } from 'react';

import { infoContext } from '../providers/reactContext';
import TableTwoColumns from './TableTwoColumns';

function createData(
  title: string,
  attribute1: number | string,
  attribute2: number | string,
  attribute3: number | string,
  attribute4: number | string,
  attribute5: number | string,
  attribute6: number | string,
  attribute7: number | string,
) {
  return {
    title, attribute1, attribute2, attribute3, attribute4, attribute5, attribute6, attribute7,
  };
}

function HeaderInfo(props:any):JSX.Element {
  const { context }:any = useContext(infoContext);
  const {
    nomeSAS, serviceName, tipologiaCompleta, distrito, protecao, termo, capacidade,
  } = context;

  const headerInfo = [
    createData('Nome do Serviço', serviceName, 1, 1, 1, 1, 1, 1),
    createData('Tipologia', tipologiaCompleta, 1, 1, 1, 1, 1, 1),
    createData('SAS', nomeSAS, 1, 1, 1, 1, 1, 1),
    createData('Distrito', distrito, 1, 1, 1, 1, 1, 1),
    createData('Proteção', protecao, 1, 1, 1, 1, 1, 1),
    createData('Termo', termo, 1, 1, 1, 1, 1, 1),
    createData('Capacidade', `${capacidade} pessoas`, 1, 1, 1, 1, 1, 1),
  ];

  return (
    <>
      <h2>
        Informações do serviço
        {' '}

      </h2>

      <TableTwoColumns headers={[]} body={headerInfo} />
    </>
  );
}

export default HeaderInfo;
