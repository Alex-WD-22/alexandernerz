import { ErrorContainer, ErrorContent, ErrorH1, ErrorP} from './ErrorPageElements'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
  return (
    <ErrorContainer id='Error'>
      <ErrorContent>
        <ErrorH1 id='error'> 404</ErrorH1>
        <ErrorP>I'm sorry, but the page you requested was not found.</ErrorP>
        <Stack alignItems="center">
          <Button variant="contained" sx={{ fontSize: '29px', color: '#E9C46A', backgroundColor: '#264653', borderColor: '#E9C46A', '&:hover': { backgroundColor: '#fff', color: '#264653' } }} component={Link} to="/"  startIcon={<ArrowBackIcon />}>
            Go Back
          </Button>
        </Stack>
      </ErrorContent>
    </ErrorContainer>
  )
}

export default ErrorPage;