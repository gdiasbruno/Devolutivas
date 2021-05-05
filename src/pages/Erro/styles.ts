import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 1000px;
  text-align: center;
  line-height:56px;
  margin-left: 50px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #C4C4C4;
  margin: auto;
  padding: 20px;
`;

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