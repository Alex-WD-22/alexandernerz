import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 5px;

  @media screen and (max-width: 768px) {
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
  }
 `
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
`
export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  max-height: 520px;
  padding:  20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;
  

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }

  ${'' /* @media screen and (max-width: 768px) {
      width: 50%;
  } */}
`
export const ProjectsIcon = styled.img`
  height: auto;
  width: 80%;
  margin-bottom: 15px;
  border: 1px solid #3080e8;
  border-radius: 1%;
`
export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 30px;
  margin-top: 160px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 15px;
`

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: start;
  width: 80%;
  margin-bottom: 15px;
`


