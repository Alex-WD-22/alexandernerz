import React from 'react'
import { SkillsContainer, SkillsContent, SkillsH1, SkillsH2, SkillDiv, Column1, Column2, SkillColumn } from './SkillsElements'
import { motion } from "framer-motion";

const SimpleCloud = () => {


    return (
        <SkillsContainer id='Tech Stack'>
            <SkillsContent>
                <SkillsH1>Tech Stack</SkillsH1>
                <SkillColumn>
                    <Column1>
                        <SkillsH2>Front-End:</SkillsH2>
                        <SkillDiv>
                            <ul>
                                <motion.div
                                    whileHover={{
                                        color: "#E9C46A",
                                        scale: 1.3,
                                        textShadow: "1px 2px 2px #264653",
                                    }}>
                                    <li>JavaScript</li>
                                </motion.div>
                                <motion.div
                                    whileHover={{
                                        color: "#E9C46A",
                                        scale: 1.3,
                                        textShadow: "1px 2px 2px #264653",
                                    }}>
                                    <li>React.js</li>
                                </motion.div>
                                <motion.div
                                    whileHover={{
                                        color: "#E9C46A",
                                        scale: 1.3,
                                        textShadow: "1px 2px 2px #264653",
                                    }}>
                                    <li>HTML</li>
                                </motion.div>
                                <motion.div
                                    whileHover={{
                                        color: "#E9C46A",
                                        scale: 1.3,
                                        textShadow: "1px 2px 2px #264653",
                                    }}>
                                    <li>Bootstrap</li>
                                </motion.div>
                                <motion.div
                                    whileHover={{
                                        color: "#E9C46A",
                                        scale: 1.3,
                                        textShadow: "1px 2px 2px #264653",
                                    }}>
                                    <li>Material-UI </li>
                                </motion.div>
                                <motion.div
                                    whileHover={{
                                        color: "#E9C46A",
                                        scale: 1.3,
                                        textShadow: "1px 2px 2px #264653",
                                    }}>
                                    <li>CSS</li>
                                </motion.div>
                                <motion.div
                                    whileHover={{
                                        color: "#E9C46A",
                                        scale: 1.3,
                                        textShadow: "1px 2px 2px #264653",
                                    }}>
                                    <li>Handelbars.js</li>
                                </motion.div>
                            </ul>
                        </SkillDiv>
                    </Column1>
                    <Column2>
                        <SkillsH2>Back-End:</SkillsH2>
                        <SkillDiv>
                            <ul>
                                <motion.div
                                    whileHover={{
                                        color: "#E9C46A",
                                        scale: 1.3,
                                        textShadow: "1px 2px 2px #264653",
                                    }}>
                                    <li>Express.js</li>
                                </motion.div>
                                <motion.div
                                    whileHover={{
                                        color: "#E9C46A",
                                        scale: 1.3,
                                        textShadow: "1px 2px 2px #264653",
                                    }}>
                                    <li>Node.js</li>
                                </motion.div>
                                <motion.div
                                    whileHover={{
                                        color: "#E9C46A",
                                        scale: 1.3,
                                        textShadow: "1px 2px 2px #264653",
                                    }}>
                                    <li>MongoDB</li>
                                </motion.div>

                            </ul>
                        </SkillDiv>
                    </Column2>
                </SkillColumn>
            </SkillsContent>
        </SkillsContainer>
    )

}

export default SimpleCloud;

