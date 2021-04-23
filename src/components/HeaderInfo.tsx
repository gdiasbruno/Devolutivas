import { useContext } from 'react';

import { infoContext } from '../providers/reactContext';
import TableTwoColumns from './TableTwoColumns';

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

function HeaderInfo(props:any):JSX.Element {
  const { items } = props;

  const { context, setContext }:any = useContext(infoContext);
  const {
    nomeSAS, mes, serviceName, tipologiaCompleta, distrito, protecao, termo,
  } = context;

  const headerInfo = [
    createData('Nome do Serviço', serviceName, 1, 1, 1, 1, 1, 1),
    createData('Tipologia', tipologiaCompleta, 1, 1, 1, 1, 1, 1),
    createData('SAS', nomeSAS, 1, 1, 1, 1, 1, 1),
    createData('Distrito', distrito, 1, 1, 1, 1, 1, 1),
    createData('Proteção', protecao, 1, 1, 1, 1, 1, 1),
    createData('Termo', termo, 1, 1, 1, 1, 1, 1),
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
