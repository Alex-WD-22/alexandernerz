import React from 'react'
import Icon1 from "../../images/Simply-Math.PNG"
import Icon2 from "../../images/petsharing-demo.png"
import Icon3 from "../../images/BudgetManager.PNG"

import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsH2,
    ProjectsP,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
} from "./ProjectsElements"

function Projects() {
  return (
    <ProjectsContainer id="projects">
        <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>Simply Math</ProjectsH2>
                    <ProjectsP>Simple Game Built with</ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>Pet Sharing</ProjectsH2>
                    <ProjectsP>CRUD App built with</ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>Budget Manager</ProjectsH2>
                    <ProjectsP>MERN Application bilt with</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects;