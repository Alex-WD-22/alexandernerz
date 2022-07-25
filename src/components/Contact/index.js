import { ContactContainer, ContactContent, ContactH1, ContactP, ContactLinks } from './ContactElements'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import Button from '@mui/material/Button';

const Contact = () => {

  return (
    <ContactContainer id='contact'>
      <ContactContent>
        <ContactH1>Get in touch</ContactH1>
        <ContactP style={{ textAlign: "left" }}>
          If you want to chat — email me or want to know what I'm like to work with? Schedule an event at Calendly.<br />
          <br />
          Currently based in Freiburg, Germany — available for work from July 2022.
        </ContactP>
        <ContactLinks>
          <Button variant="outlined" size="small"
            sx={{ width: 150, height: 60, margin: 1, }} endIcon={<SendIcon />}
            to='e.prevent.Default()'
            onClick={() => window.location = 'mailto:alexander.nerz@web.de'}>EMAIL ME </Button>
          <a href='https://www.linkedin.com/in/alexander-nerz'><LinkedInIcon style={{ color: "#3080e8" }} sx={{ fontSize: 75, mx: 4, }} /></a>
          <Button variant="outlined" size="small"
            sx={{ width: 150, height: 60, margin: 1, }} endIcon={<ArrowForwardIcon />}
            href="https://calendly.com/alexander-nerz"
          >Calendly</Button>
        </ContactLinks>
      </ContactContent>
    </ContactContainer>
  )
}

export default Contact;

