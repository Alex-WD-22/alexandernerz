import styled from 'styled-components';

export const IntroContainer = styled.div` 
background: #eaf1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 950px;
  position: relative;
  z-index: 1;
`;
export const SoundContainer = styled.div`
  margin-top: 80px;
  z-index: 5;
  position: fixed;
  overflow: auto;
  float: right;
  top: 0;
  right: 0;
`
export const IntroContent = styled.div`
  z-index: 3;
  width: auto;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const IntroH1 = styled.h1`
  font-size: 190px;
  text-align: center;

  :after       { content:''; }
  :hover:after { content:'ander Nerz'; }

  @media screen and (max-width: 768px) {
    font-size: 100px
  }
  @media screen and (max-width: 480px) {
    font-size: 70px
  }
`;
export const IntroH2 = styled.h2`
  margin-top: 80px;
  color: #264653;
  font-size: 90px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 60px
  }
  @media screen and (max-width: 480px) {
    font-size: 45px;
    margin-top: 0px;
  }
`
export const IntroP = styled.p`
  margin-top: 14px;
  color: #264653;
  font-size: 90px;
  text-align: center;
  width: auto;
  font-weight: bold;
  margin-bottom: 80px;
  @media screen and (max-width: 768px) {
    font-size: 60px
  }
  @media screen and (max-width: 480px) {
    font-size: 45px;
    margin-bottom: 150px;
  }
`;
