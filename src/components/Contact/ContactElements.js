import styled from 'styled-components';

export const ContactContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;
export const ContactBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const ContactContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 130px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 90px
  }
  @media screen and (max-width: 480px) {
    font-size: 50px
  }
`;
export const ContactP = styled.p`
  margin-top: 24px;
  color: #000;
  font-size: 30px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 40px
  }
  @media screen and (max-width: 480px) {
    font-size: 30px
  }
`;
