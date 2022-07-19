import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(185, 194, 193, 0.747) 0%, rgb(255, 255, 255) 100%);
 `;
export const ProjectsWrapper = styled.div`
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
  }
`;
export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 520px;
  padding: 20px;
  margin: 0px 10px 0px 10px;
  transform:
    perspective(750px)
    translate3d(0px, 0px, -100px)
    rotateX(7deg)
    scale(0.9, 0.9);
  border-radius: 20px;
  border: 5px solid #e6e6e6;
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
  border: 2px solid #3080e8;
  border-radius: 1%;
`;
export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;
  margin-top: 125px; 
`;
export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 15px;
`;
export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: start;
  width: 80%;
  margin-bottom: 15px;
`;


