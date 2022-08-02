import styled from 'styled-components';

export const ErrorContainer = styled.div`
  background: #264653;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;
export const ErrorContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ErrorH1 = styled.h1`
  color: #E76F51;
  font-size: 200px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 150px
  }
  @media screen and (max-width: 480px) {
    font-size: 100px 
  }
`;
export const ErrorP = styled.p`
  margin-top: 24px;
  color: #E9C46A;
  font-size: 50px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-size: 40px
  }
  @media screen and (max-width: 480px) {
    font-size: 30px
  }
`;
