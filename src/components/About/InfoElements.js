import styled from 'styled-components';

export const InfoContainer = styled.div`
 background: #fff;
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
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;
  font-weight: bold;
  
  @media screen and (max-width: 768px) {
    text-align: center;
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
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 50%;
  border: 2px solid #3080e8;
`;
