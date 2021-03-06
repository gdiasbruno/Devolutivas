import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TableFourColumns from '../../components/TableFourColumns';

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
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

export const FirstSection = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 20px;

  div {
    display: flex;
    justify-content: space-around;
    width: 200px;
  }
`;

export const Section = styled.div`
  max-width: 210mm;
  margin: 0 auto;
  min-height: '297mm';
  margin-left: 'auto';
  margin-right: 'auto';
`;

export const Chips = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MyButton = styled(Button)`
`;

export const TableFourColumnsStyled = styled(TableFourColumns)`
  padding-top: 1000px;
`;

export const LoaderBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
