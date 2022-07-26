import styled from 'styled-components';

export const ContactContainer = styled.div`
  background-size: 200% 200%;
  display: flex; 
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;
export const ContactContent = styled.div`
  z-index: 3;
  position: absolute;
  padding: 8px 24px;
  height: 450px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow:  0 70px 40px -20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  

  @media screen and (max-width: 768px) {
    height: 500px;
    width: 520px;
  }
  @media screen and (max-width: 580px) {
    height: 580px;
    width: 460px;
  }
  @media screen and (max-width: 480px) {
    height: 520px;
    width: 300px;
  }
`;
export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 10px;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 37px;
  }
`;
export const ContactP = styled.p`
  margin-top: 24px;
  color: #000;
  font-size: 22px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 110px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
export const ContactLinks = styled.div`
  display: flex;
  flex-direction: row;
  
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    column-gap: 20px;
    
  }
 
`