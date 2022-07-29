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
          <Button component={Link} to="/" variant="outlined" startIcon={<ArrowBackIcon />}>
            Go Back
          </Button>
        </Stack>
      </ErrorContent>
    </ErrorContainer>
  )
}

export default ErrorPage;