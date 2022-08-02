import React from 'react'
import { SkillsContainer, SkillsContent, SkillsH1, SkillsH2, SkillDiv, Column1, Column2, SkillColumn } from './SkillsElements'


const SimpleCloud = () => {


    return (
        <SkillsContainer id='Tech Stack'>

            <SkillsContent>
                <SkillsH1>Tech Stack</SkillsH1>
                <SkillColumn>
                    <Column1>
                        <SkillsH2>Front-End:</SkillsH2>
                        <SkillDiv><ul><li>JavaScript</li><li>React.js</li><li>HTML </li><li>Bootstrap </li><li> Material-UI </li><li> CSS </li><li> Handelbars.js</li></ul></SkillDiv>
                    </Column1>
                    <Column2>
                        <SkillsH2>Back-End:</SkillsH2>
                        <SkillDiv><ul><li>  Express.js   </li><li>  Node.js  </li><li>  MongoDB  </li></ul></SkillDiv>
                    </Column2>
                </SkillColumn>
            </SkillsContent>

        </SkillsContainer>
    )

}

export default SimpleCloud;

