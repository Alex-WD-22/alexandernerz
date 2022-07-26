import { ErrorContainer, ErrorContent, ErrorH1, ErrorP} from './ErrorPageElements'
import { motion } from "framer-motion"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
  return (
    <ErrorContainer id='Error'>
      <ErrorContent>
        <motion.div
          animate={{ x: [-800, 0] }}
          transition={{ duration: 1 }}>
          <ErrorH1 id='error'> 404</ErrorH1>
        </motion.div>
        <motion.div
          animate={{ x: [800, 0] }}
          transition={{ duration: 1 }}>
          <ErrorP>I'm sorry, but the page you requested was not found.</ErrorP>
          <Stack alignItems="center">
            <Button component={Link} to="/" variant="outlined" startIcon={<ArrowBackIcon />}>
              Go Back
            </Button>
          </Stack>
        </motion.div>
      </ErrorContent>
    </ErrorContainer>
  )
}

export default ErrorPage;