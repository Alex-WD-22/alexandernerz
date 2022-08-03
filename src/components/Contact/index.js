import { ContactContainer, ContactContent, ContactH1, ContactP, ContactLinks, ContactForm } from './ContactElements'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import { TextField, Grid, Box } from '@mui/material';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.promise(
      emailjs.sendForm('service_rsrfu2c', 'template_dks5vcm', form.current, 'BSQxvUD75e774oglz'),
      {
        pending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Something went wrong. Please try again later'
      }
    )
      .then(result => {
        setName("")
        setEmail("")
        setMessage("")
      })
  };

  return (
    <ContactContainer id='contact'>
      <ContactContent>
        <ContactH1>Get in touch</ContactH1>
        <ContactP style={{ textAlign: "left" }}>
          Want to know what it's like to work together? E-mail me or schedule a call at Calendly.
        </ContactP>
        <ToastContainer position="bottom-right" />
        <ContactForm ref={form} onSubmit={sendEmail}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={0} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={2} sm={4} md={6}>
                <TextField fullWidth margin="dense"
                  sx={{
                    "& .MuiInputLabel-root": { color: '#264653' }, "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#264653"
                      }
                    }
                  }}
                  required
                  name="name"
                  type="text"
                  id="outlined1"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </Grid>
              <Grid item xs={2} sm={4} md={6}>
                <TextField fullWidth margin="dense"
                  sx={{
                    "& .MuiInputLabel-root": { color: '#264653' }, "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#264653"
                      }
                    }
                  }}
                  required
                  name="email"
                  type="email"
                  id="outlined2"
                  label="E-Mail"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </Grid> <br />
              <Grid item xs={4} sm={8} md={12}>
                <TextField fullWidth
                  sx={{
                    "& .MuiInputLabel-root": { color: '#264653' }, "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#264653"
                      }
                    }
                  }}
                  required
                  margin="dense"
                  type="text"
                  cols="50"
                  multiline
                  rows={4}
                  resize="none"
                  maxLength="100"
                  name="message"
                  id="outlined-multiline-flexible"
                  label="Message"
                  variant="outlined"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} />
              </Grid>
            </Grid>
          </Box>
          <ContactLinks>
            <Button className="blob blue"
              variant="contained" sx={{ width: 150, height: 60, margin: 1, fontSize: '16px', color: '#E9C46A', backgroundColor: '#264653', borderColor: '#E9C46A', '&:hover': { backgroundColor: '#fff', color: '#264653' } }}
              type="submit"
              endIcon={<MailOutlineIcon></MailOutlineIcon>}
            >Send Message
            </Button>
            <Button variant="contained" sx={{ width: 150, height: 60, margin: 1, fontSize: '16px', color: '#E9C46A', backgroundColor: '#264653', borderColor: '#E9C46A', '&:hover': { backgroundColor: '#fff', color: '#264653' } }}
              endIcon={<CalendarMonthIcon />}
              href="https://calendly.com/alexander-nerz"
            >Calendly</Button>
            <a aria-label="LinkedIn-Logo" href='https://www.linkedin.com/in/alexander-nerz'><LinkedInIcon aria-label="LinkedIn-Logo" style={{ backgroundColor: "#264653", borderRadius: '10%' }} sx={{ fontSize: 62, mt: '7px', ml: '8px', fill: "#E9C46A" }} /></a>
          </ContactLinks>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  )
}

export default Contact;








// variant="contained" sx={{ fontSize: '21px', color: '#E9C46A', backgroundColor: '#264653', borderColor: '#E9C46A', '&:hover': {backgroundColor: '#fff', color: '#264653'}}}