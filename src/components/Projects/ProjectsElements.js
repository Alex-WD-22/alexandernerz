import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eaf1f1;
 `;
export const ProjectsWrapper = styled.div`
    height: 860px;
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 15px;
    padding: 0px;
    
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
      height: 100%;
  }
`;
export const ProjectsCard = styled.div`
  background: #f5f3ed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: auto;
  padding: 15px;
  margin: 0px 2px 10px 2px;
  transform:
    perspective(750px)
    translate3d(0px, 0px, -100px)
    rotateX(7deg)
    scale(0.9, 0.9);
  border-radius: 20px;
  border: 4px solid #264653;
  box-shadow: 0 70px 40px -20px rgba(0, 0, 0, 0.2);
  transition: 0.4s ease-in-out transform;

  &:hover {
    transform: translate3d(0px, 0px, -250px);
  }
`;
export const ProjectsIcon = styled.img`
  height: auto;
  width: 80%;
  margin-bottom: 15px;
  border: 2px solid #264653;
  border-radius: 1%;
`;
export const ProjectsH1 = styled.h1`
  font-size: 60px;
  color: #264653;
  margin-bottom: 22px;
  margin-top: 64px; 

  @media screen and (max-width: 480px) {
    font-size: 37px;
  }
`;
export const ProjectsH2 = styled.h2`
  font-size: 34px;
  margin-bottom: 15px;
  color: #264653;
`;
export const ProjectsP = styled.p`
  font-size: 26px;
  text-align: start;
  width: 80%;
  margin-bottom: 15px;
  @media screen and (max-width: 480px) {
    font-size: 21px;
  }
`;


