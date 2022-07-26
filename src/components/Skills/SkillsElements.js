import styled from 'styled-components';

export const SkillsContainer = styled.div`
  background: rgba(209, 212, 212, 0.616);
  background-size: 200% 200%;
  display: flex; 
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 860px;
  position: relative;
  z-index: 1;
`;
export const SkillsContent = styled.div`
  z-index: 3;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    height: 500px;
    width: 520px;
  }
  @media screen and (max-width: 580px) {
    height: 580px;
    width: 460px;
  }
  @media screen and (max-width: 480px) {
    height: 100%;
    width: 300px;
  }
`;
export const SkillsH1 = styled.h1`
    font-size: 60px;
    color: #000;
    margin-bottom: 15px;
    font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 37px;
  }
  `
export const SkillsH2 = styled.h2`
    font-size: 45pxpx;
    color: #000;
    margin: 15px;
    

  @media screen and (max-width: 480px) {
    font-size: 27px;
  }
`