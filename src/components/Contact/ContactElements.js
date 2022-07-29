import styled from 'styled-components';

export const ContactContainer = styled.div`
background: #ced4db;
  background-size: 200% 200%;
  display: flex; 
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 860px;
  position: relative;
  z-index: 1;
`;
export const ContactContent = styled.div`
  z-index: 3;
  position: absolute;
  padding: 8px 24px;
  height: 550px;
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border: 1px solid rgba(228, 226, 226, 0.411);;
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
    height: auto;
    width: 300px;
  }
`;
export const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
`
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
  font-size: 26px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 21px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 19px;
  }
`;
export const ContactLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-Content: center;
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
    column-gap: 20px;
    display: flex;
    align-items: center;
  }
`
export const ContactForm = styled.form`
  width: auto;
`