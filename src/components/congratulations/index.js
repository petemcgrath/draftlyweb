import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { styled } from '@mui/material/styles';
import hero from '../../assets/congrats.svg';

const Hero = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 289,
  margin: '0 auto',
  display: 'block',
}));

const prod = false;
const Draftly_Link = `https://${
  prod ? 'clubhouse' : 'clubhouse-dev'
}.draft.ly/clubhouses`;

function Congratulations() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 100px)',
        background: {
          xs: 'radial-gradient(250px 250px at center 150px, #3D25D9, transparent)',
          sm: 'radial-gradient(350px 350px at center 125px, #3D25D9, transparent)',
          md: 'radial-gradient(400px 400px at center 100px, #3D25D9, transparent)',
        },
        textAlign: 'center',
      }}
    >
      <Hero src={hero} alt='Alt me' />

      <Typography variant='h4' sx={{ pt: 3, pb: 3 }}>
        Congratulations!
      </Typography>

      <Typography variant='body' component='p' sx={{ pb: 3 }}>
        You finished creating your community. Let’s head over to your community.
      </Typography>

      <Button component={Link} variant='contained' href={Draftly_Link}>
        Visit Your Community
      </Button>
    </Box>
  );
}

export default Congratulations;
