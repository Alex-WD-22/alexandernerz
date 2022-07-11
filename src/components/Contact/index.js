import { ContactContainer, ContactContent, ContactH1, ContactP} from './ContactElements'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import React from 'react';

const Contact = () => {
  const hoveredStyle = {
    cursor: 'pointer'
  }

  const iconColor = {
    color: "#3080e8"
  }

  return (
    <ContactContainer id='contact'>
      <ContactContent>
        <ContactH1>Contact Me</ContactH1>
        <Stack direction="row" spacing={7}>
          <MailOutlineIcon
            style={{ ...hoveredStyle, ...iconColor }} sx={{ fontSize: 70 }}
            to='e.prevent.Default()'
            onClick={() => window.location = 'mailto:alexander.nerz@web.de'}> </MailOutlineIcon> <br />
          <ContactP></ContactP>
          <a href='https://www.linkedin.com/in/alexander-nerz'><LinkedInIcon style={{ color: "#3080e8" }} sx={{ fontSize: 68 }} /></a>
        </Stack>
      </ContactContent>
    </ContactContainer>
  )
}

export default Contact;

