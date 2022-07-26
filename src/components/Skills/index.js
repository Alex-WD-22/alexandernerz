import React from 'react'
import { SkillsContainer, SkillsContent, SkillsH1, SkillsH2 } from './SkillsElements'
import { TagCloud } from 'react-tagcloud'

const frontEnd = [
    { value: 'JavaScript', count: 38 },
    { value: 'React.js', count: 30 },
    { value: 'HTML5', count: 33 },
    { value: 'CSS3', count: 20 },
    { value: 'Material-UI', count: 15 },
    { value: 'Bootstrap', count: 27 },
]

const backEnd = [
    { value: 'MongoDB', count: 18 },
    { value: 'Node.js', count: 28 },
    { value: 'Express.js', count: 25 },
]

    const SimpleCloud = () => {
        <TagCloud
          minSize={12}
          maxSize={35}
          tags={[frontEnd, backEnd]}
          onClick={tag => alert(`'${tag.value}' was selected!`)}
        />
      

    return (
        
        <SkillsContainer id='skills'>
        <SkillsContent>
        <SkillsH1>Technologies & Tools</SkillsH1>
        <SkillsH2>Front-End:</SkillsH2>
        <TagCloud minSize={39} maxSize={66} tags={frontEnd} randomSeed={42} />
        <SkillsH2>Back-End:</SkillsH2>
        <TagCloud minSize={39} maxSize={66} tags={backEnd} randomSeed={42} />
        </SkillsContent>
      </SkillsContainer>
    
    )

}

export default SimpleCloud;