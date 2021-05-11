import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Options = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

export const MyButton = styled(Button)`
 display: flex;;
 flex-direction: row;
 align-items: center;
 padding: 10px 50px;

 border-radius: 5px;
 text-align: center;
`;
