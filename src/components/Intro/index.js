
import { IntroContainer, IntroContent, IntroH1, IntroP, IntroH2, SoundContainer } from './IntroElements'
import { motion } from "framer-motion"
import React from 'react';
import { useState, useEffect } from "react";
import Sound from "../../Sound/new-happy-day.mp3"
import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Link } from 'react-scroll';


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
  });

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <>
      <SoundContainer>
        <Button style={{color: '#E76F51'}} onClick={toggle}>{playing ? <PauseIcon /> : <PlayArrowIcon />}Sound</Button>
      </SoundContainer>
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
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-63}
            duration={500}>
            <ArrowCircleDownIcon
            tabIndex="-1"
              fontSize="large"
              sx={{mb: '90px'}}
              style={{ pointerEvents: 'fill', cursor: 'pointer', color: '#2A9D8F' }} />
          </Link>
        </IntroContent>
      </IntroContainer>
    </>
  )
}

export default Player;


