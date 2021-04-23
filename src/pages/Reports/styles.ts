import styled from 'styled-components';

export const FirstSection = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 20px;
`;

export const SecondSection = styled.div`
  display: flex;
  justify-content: space-around;

`;
export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  button {
    margin-top: 10px;
  }
  div {
    display: flex;
    justify-content: center;

    h2 {
      margin-left: 10px;
    }
  }
`;
