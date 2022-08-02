import styled from 'styled-components';

export const InfoContainer = styled.div`
 background: #e6eeed;
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100% auto;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: px;
`;
export const TopLine = styled.p`
  font-size: 60px;
  color: #264653;
  margin-bottom: 40px;
  margin-top: 20px;
  font-weight: bolder;
  
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 50px;
  }
  @media screen and (max-width: 480px) {
    font-size: 39px;
  }
`;
export const Subtitle  = styled.p`
  max-width: auto;
  margin-bottom: 20px;
  font-size: 22px;
  line-height: 24px;
  color: #000;
  
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const BtnWrap = styled.div`
  display:flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 90%;
  margin: 20px 0 10px 15px;
  padding-right: 0;
  border-radius: 50%;
  border: 2px solid #264653;
`;
