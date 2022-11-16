import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

const Input = styled(OutlinedInput)(({ theme }) => ({
  background: '#000',
  border: '1px solid #333',
  borderRadius: '5px',
  color: '#888',
  '& ::placeholder': {
    opacity: 1,
  },
}));

const FormBox = styled(Paper)(({ theme }) => ({
  background: '#1F2022',
  border: '1px solid #333',
  padding: theme.spacing(3),
  minHeight: 400,
}));

const User = ({ setStep }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={6} mdOffset={3}>
        <FormBox>
          <Form setStep={setStep}></Form>
        </FormBox>
      </Grid>
    </Grid>
  );
};

const Form = ({ setStep }) => (
  <>
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <Stack spacing={3}>
        <div>
          <div style={{ paddingBottom: '5px' }}>
            <label for='outlined-fname'>First Name</label>
          </div>
          <Input
            fullWidth
            id='outlined-fname'
            defaultValue='Enter your first name'
          />
        </div>
        <div>
          <div style={{ paddingBottom: '5px' }}>
            <label for='outlined-lname'>Last Name</label>
          </div>
          <Input
            fullWidth
            id='outlined-lname'
            defaultValue='Enter your last name'
          />
        </div>
        <div>
          <div style={{ paddingBottom: '5px' }}>
            <label for='outlined-email'>Email Address</label>
          </div>
          <Input
            fullWidth
            id='outlined-email'
            defaultValue='Enter your email address'
          />
        </div>
        <Button size='large' variant='contained' onClick={() => setStep(3)}>
          Connect your wallet
        </Button>
        <Typography>
          By creating an account, you agree to the <Link>Terms of Service</Link>{' '}
          and <Link>Privacy Policy</Link>.
        </Typography>
        <Typography>
          Already have an account? <Link>Sign in</Link>
        </Typography>
      </Stack>
    </Box>
  </>
);

export default User;
