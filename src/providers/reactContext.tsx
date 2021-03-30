import React, { useState } from 'react';

export const infoContext = React.createContext({});

export const ReactProvider = (props:any): JSX.Element => {
  const [context, setContext] = useState();

  const { children } = props;

  return (
    <infoContext.Provider value={{ context, setContext }}>
      {children}
    </infoContext.Provider>
  );
};
