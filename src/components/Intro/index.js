
import { IntroContainer, IntroContent, IntroH1, IntroP,} from './IntroElements'
import { motion } from "framer-motion"
import React from 'react';

const Intro = () => {

  return (
    <IntroContainer id='Intro' className='gradient'>
      <IntroContent>
        <motion.div
          animate={{ x: [-600, 0] }}
          transition={{ duration: 2 }}>
          <IntroH1 id='name'> Alexander Nerz</IntroH1>
        </motion.div>
        <motion.div
          animate={{ x: [600, 0] }}
          transition={{ duration: 1 }}>
          <IntroP>Full Stack Developer</IntroP>
        </motion.div>
      </IntroContent>
    </IntroContainer>
  )
}

export default Intro;
