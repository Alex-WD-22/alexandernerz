
import { IntroContainer, IntroContent, IntroH1, IntroP,} from './IntroElements'
import { motion } from "framer-motion"

const Intro = () => {


  return (
    <IntroContainer id='Intro'>

      <IntroContent>
      <motion.div
    animate={{ x: [-400, 0] }}
    transition={{ duration: 1 }}>
        <IntroH1 id='name'> Alexander Nerz</IntroH1>
        </motion.div>
        <motion.div
    animate={{ x: [400, 0] }}
    transition={{ duration: 1 }}>
        <IntroP>Full Stack Developer</IntroP>
        </motion.div>
      </IntroContent>
    </IntroContainer>
  )
}

export default Intro;
