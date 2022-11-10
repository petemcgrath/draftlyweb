import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function ImageUploadCard({
  title,
  label,
  helpText,
  buttonText,
  action,
}) {
  return (
    <div>
      <label id='label-file-upload' htmlFor='input-file-upload'>
        <Typography>
          {label?.text}{' '}
          {label.optional ? (
            <span style={{ fontStyle: 'italic' }}>(optional)</span>
          ) : (
            ''
          )}
        </Typography>
      </label>
      <Paper
        sx={{
          p: '68px 51px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          border: '2px dashed #333',
        }}
        elevation={0}
      >
        <Typography>{title}</Typography>
        <Typography>{helpText}</Typography>
        <Button
          sx={{
            marginTop: '20px',
          }}
          size='large'
          variant='contained'
          color='secondary'
          startIcon={<AddPhotoAlternateIcon />}
          onClick={action}
        >
          {buttonText}
        </Button>
      </Paper>
    </div>
  );
}
