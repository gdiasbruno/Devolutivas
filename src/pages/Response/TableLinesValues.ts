import styled from 'styled-components';
import Button from '@material-ui/core/Button';

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

export const LoaderBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
