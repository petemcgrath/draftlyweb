import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CustomizedInputBase from './InputGroupTest.js';
import ImageUploadCard from './ImageUploadCard';
import { styled } from '@mui/material/styles';

const Input = styled(OutlinedInput)(({ theme }) => ({
  background: '#000',
  border: '1px solid #333',
  borderRadius: '5px',
  color: '#888',
  '& ::placeholder': {
    opacity: 1,
  },
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
            <label id='label-file-upload' htmlFor='input-file-upload'>
              <Typography>
                Community Name <span style={{ color: 'red' }}>*</span>
              </Typography>
            </label>
            <Input
              fullWidth
              id='outlined-name'
              defaultValue='Enter your full name'
            />
          </div>

          <CustomizedInputBase />

          <ImageUploadCard
            label={{
              text: 'Thumbnail',
              optional: true,
            }}
            buttonText='Add A Thumnail'
            title='Thumnail image size 500x500'
            helpText='JPEG or PNG , no larger than 1MB'
            action={() => {}}
          />

          <ImageUploadCard
            label={{
              text: 'Banner Image',
              optional: true,
            }}
            buttonText='Add A Banner'
            title='Thumnail image size 500x500'
            helpText='JPEG or PNG , no larger than 1MB'
            action={() => {}}
          />

          <div>
            <label id='label-file-upload' htmlFor='input-file-upload'>
              <Typography>
                Description{' '}
                <span style={{ fontStyle: 'italic' }}>(optional)</span>
              </Typography>
            </label>
            <Input
              fullWidth
              multiline
              placeholder='Tell us about your community...'
              InputProps={{
                inputComponent: TextareaAutosize,
                rows: 3,
              }}
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
          Create My Community
        </Button>
      </Stack>

      <Typography>
        By creating an account, you agree to the{' '}
        <Link color='primary'>Terms of Service</Link> and{' '}
        <Link color='primary'>Privacy Policy</Link>.
      </Typography>
    </>
  );
};

export default Intro;
