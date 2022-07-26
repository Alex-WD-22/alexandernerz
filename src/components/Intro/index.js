
import { IntroContainer, IntroContent, IntroH1, IntroP, IntroH2, SoundContainer} from './IntroElements'
import { motion } from "framer-motion"
import React from 'react';
import { useState, useEffect } from "react";
import Sound from "../../Sound/motivational-day-112790.mp3"
import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
  
const useAudio = url => {
    const [audio] = useState(new Audio(Sound));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, );
  
    return [playing, toggle];
  };
  
  const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);
  


  return (
    <>
    <motion.div
          animate={{ x: [100, 0] }}
          transition={{ duration: 2 }}>
        <SoundContainer>
    <Button  onClick={toggle}>{playing ? <PauseIcon /> : <PlayArrowIcon />}Sound</Button>
  </SoundContainer>
  </motion.div>
    <IntroContainer id='Intro'>
      <IntroContent>
        <motion.div
          animate={{ y: [-300, 0] }}
          transition={{ duration: 1.2 }}>
          <IntroH2>Hi, I'm </IntroH2>
        </motion.div>
        <motion.div
          animate={{ x: [-1200, 0] }}
          transition={{ duration: 1 }}>
          <IntroH1 id='name'>Alex</IntroH1>
        </motion.div>
        <motion.div
          animate={{ x: [1450, 0] }}
          transition={{ duration: 1.2 }}>
          <IntroP>Full Stack Developer</IntroP>
        </motion.div>
      </IntroContent>
    </IntroContainer>
  
    </>
  )
}

export default Player;


