import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ControlledOpenSelect from '../../components/ControlledOpenSelect';

import {
  Options,
} from './styles';

const Index: React.FC = () => {
  const [sas, setSas]:any = useState([]);

  const fetchUserProfiles = () => {
    axios.get('http://localhost:9090/devolutivas').then((res) => {
      setSas(res.data);
    });
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  return (
    <>
      <Options>
        <ControlledOpenSelect label="Escolha uma SAS:" menuItems={sas} />
      </Options>

    </>
  );
};

export default Index;
