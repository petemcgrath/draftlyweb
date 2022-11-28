import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledInput = styled(InputBase)(({ theme }) => ({
  '& ::placeholder': {
    opacity: 1,
  },
}));

export default function CustomizedInputBase() {
  return (
    <div>
      <label id='label-file-upload' htmlFor='input-file-upload'>
        <Typography>
          Community URL <span style={{ color: 'red' }}>*</span>
        </Typography>
      </label>
      <Paper
        component='form'
        sx={{
          p: '0',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#000',
          border: '1px solid #333',
        }}
        elevation={0}
      >
        <Paper
          sx={{
            height: '50px',
            backgroundColor: '#1A1A1A',
            display: 'flex',
            alignItems: 'center',
            color: '#888',
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
            p: '0 20px',
          }}
          elevation={0}
          aria-label='menu'
        >
          draft.ly/clubs/
        </Paper>
        <StyledInput
          sx={{ ml: 1, flex: 1, color: '#888', backgroundColor: 'transparent' }}
          placeholder='Community URL'
          inputProps={{ 'aria-label': 'Community URL' }}
          color='#888'
        />
      </Paper>
    </div>
  );
}
