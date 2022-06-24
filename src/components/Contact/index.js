
import { ContactContainer, ContactContent, ContactH1, ContactP,} from './ContactElements'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
const Contact = () => {

  


  return (
    <ContactContainer id='contact'>

      <ContactContent>
        <ContactH1 className='shake-bottom'>Contact Me</ContactH1>
        <Stack direction="row" spacing={20}>
        <Link
            to='javascript:void(0)'
            onClick={() => window.location = 'mailto:alexander.nerz@web.de'}
        ><MailOutlineIcon style={{ color: "#3080e8" }} sx={{ fontSize: 60 }}/></Link>
        <a href='https://www.linkedin.com/in/alexander-nerz'><LinkedInIcon style={{ color: "#3080e8" }} sx={{ fontSize: 60 }}/></a>
        </Stack>
        <ContactP></ContactP>
      </ContactContent>
    </ContactContainer>
  )
}

export default Contact;
