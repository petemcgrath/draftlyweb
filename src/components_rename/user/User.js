import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Input = styled(OutlinedInput)(({ theme }) => ({
  background: '#000',
  border: '1px solid #333',
  borderRadius: '5px',
  color: '#888',
}));

const Intro = ({ setStep }) => {
  return (
    <>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <Stack
          spacing={3}
          sx={(theme) => ({
            padding: theme.spacing(3, 0),
          })}
        >
          <div>
            <div style={{ paddingBottom: '5px' }}>
              <label for='outlined-name'>Your Full Name</label>
            </div>
            <Input
              fullWidth
              id='outlined-name'
              defaultValue='Enter your full name'
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
        </Stack>
      </Box>

      <Stack
        spacing={2}
        sx={(theme) => ({
          padding: theme.spacing(3),
        })}
      >
        <Button size='large' variant='contained'>
          Connect your wallet
        </Button>
      </Stack>
    </>
  );
};

export default Intro;