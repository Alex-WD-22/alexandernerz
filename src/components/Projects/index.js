import React from 'react'
import Icon1 from '../../images/Simply-Math.PNG'
import Icon2 from '../../images/petsharing-demo.png'
import Icon3 from '../../images/Budget Manager.PNG'
import {ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP} from './ProjectsElements'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} alt="Simply-Math"/>
          <ProjectsH2>Simply-Math</ProjectsH2>
          <ProjectsP>This math game is built with JavaScript, HTML, and CSS. It is an endless game in which the player can solve math equations. If the player clicked the wrong answer they can try again or start over.</ProjectsP>
          <Stack direction="row" spacing={10}>
            <Button variant="outlined" size="large" sx={{ color: 'pink'[500] }} href="https://alex-wd-22.github.io/Simply-Math/">Demo</Button>
            <Button variant="outlined" size="large" href="https://github.com/Alex-WD-22/Simply-Math">GitHub</Button>
          </Stack>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon2} alt="Pet-Sharing" />
          <ProjectsH2>Pet-Sharing</ProjectsH2>
          <ProjectsP>This application has CRUD functionality for pets and users. It was build with Express.js and Handlebars.js. Additionally, it has authentication with session storage and password encryption using bcrypt package.</ProjectsP>
          <Stack direction="row" spacing={10}>
            <Button variant="outlined" size="large" href="https://pet-sharing.herokuapp.com/">Demo</Button>
            <Button variant="outlined" size="large" href="https://github.com/FreiburgDevTeam/crud-project">GitHub</Button>
          </Stack>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon3} alt="Budget-Manager"/>
          <ProjectsH2>Budget-Manager</ProjectsH2>
          <ProjectsP>This MERN application is all about finances. The current balance is always displayed as well as a chart to see a trend in expenses/income. Build with Rest API, Chart.js, and Material-UI.</ProjectsP>
          <Stack direction="row" spacing={10}>
            <Button variant="outlined" size="large" href="https://budget-manager-mern-app.netlify.app/">Demo</Button>
            <Button variant="outlined" size="large" href="https://github.com/FreiburgDevTeam/mern-application-client">GitHub</Button>
          </Stack>
        </ProjectsCard>
        <br/>
      </ProjectsWrapper>
    </ProjectsContainer>

  )
}

export default Projects;
