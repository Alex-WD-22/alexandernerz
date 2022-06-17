
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';


function NavBar () {


    return (
        
        <div className="header">
            
            <Button href="./Projects" >Portfolio</Button>
            <Button href="./Contact" >Contact</Button>
            <Button size="small" href='https://www.linkedin.com/in/alexander-nerz'><LinkedInIcon /></Button>
            <Button size="small" href='https://github.com/Alex-WD-22'><GitHubIcon /></Button>

         </div>
    )
}

export default NavBar;