import styled from 'styled-components';

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;
export const IntroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const IntroH1 = styled.h1`
  font-size: 120px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 100px
  }
  @media screen and (max-width: 480px) {
    font-size: 60px
  }
`;
export const IntroP = styled.p`
  margin-top: 24px;
  color: #000;
  font-size: 50px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 40px
  }
  @media screen and (max-width: 480px) {
    font-size: 30px
  }
`;
