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
                  required
                  type="text"
                  id="outlined-required"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </Grid>
              <Grid item xs={2} sm={4} md={6}>
                <TextField fullWidth margin="dense"
                  required
                  type="email"
                  id="outlined-required"
                  label="E-Mail"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </Grid> <br />
              <Grid item xs={4} sm={8} md={12}>
                <TextField fullWidth
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
            <Button
              sx={{ width: 150, height: 60, margin: 1, }}
              type="submit"
              variant="outlined"
              endIcon={<MailOutlineIcon style={{ fontSize: 'large' }}></MailOutlineIcon>}
            >Send Message
            </Button>
            <Button variant="outlined" size="small"
              sx={{ width: 150, height: 60, margin: 1, }} endIcon={<CalendarMonthIcon />}
              href="https://calendly.com/alexander-nerz"
            >Calendly</Button>
            <a href='https://www.linkedin.com/in/alexander-nerz'><LinkedInIcon style={{ color: "#3080e8" }} sx={{ fontSize: 75, mx: 0, }} /></a>
          </ContactLinks>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  )
}

export default Contact;








