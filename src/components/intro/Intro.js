import React from 'react';

import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { pink } from '@mui/material/colors';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { styled } from '@mui/material/styles';
import hero from '../../assets/intro.svg';

const Hero = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 405,
  margin: '0 auto',
  display: 'block',
}));

const GridItemHeader = () => (
  <Grid item xs={12}>
    <Typography
      variant='h5'
      sx={{
        textAlign: {
          xs: 'left',
          sm: 'center',
        },
      }}
    >
      Draftly lets you:
    </Typography>
  </Grid>
);

const GridItemOfferings = () => (
  <Grid
    item
    xs={12}
    container
    rowSpacing={2}
    columnSpacing={2}
    alignItems='flex-start'
  >
    <Grid item xs={12} sm={4} container rowSpacing={2} alignItems='center'>
      <Grid item xs={2} sm={12}>
        <Avatar sx={{ bgcolor: pink[500] }}>
          <CalendarMonthIcon />
        </Avatar>
      </Grid>
      <Grid item xs={10} sm={12}>
        <Typography
          sx={{
            textAlign: {
              xs: 'left',
              sm: 'center',
            },
          }}
        >
          Create and invite community members to events.
        </Typography>
      </Grid>
    </Grid>

    <Grid item xs={12} sm={4} container rowSpacing={2} alignItems='center'>
      <Grid item xs={2} sm={12}>
        <Avatar sx={{ bgcolor: pink[500], margin: '0 auto' }}>
          <CalendarMonthIcon />
        </Avatar>
      </Grid>
      <Grid item xs={10} sm={12}>
        <Typography
          sx={{
            textAlign: {
              xs: 'left',
              sm: 'center',
            },
          }}
        >
          Access marketing tools to reach new audiences, all in one place.
        </Typography>
      </Grid>
    </Grid>

    <Grid item xs={12} sm={4} container rowSpacing={2} alignItems='center'>
      <Grid item xs={2} sm={12}>
        <Avatar sx={{ bgcolor: pink[500] }}>
          <CalendarMonthIcon />
        </Avatar>
      </Grid>
      <Grid item xs={10} sm={12}>
        <Typography
          sx={{
            textAlign: {
              xs: 'left',
              sm: 'center',
            },
          }}
        >
          Access marketing tools to reach new audiences, all in one place.
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

const Intro = ({ setStep }) => {
  return (
    <>
      <Grid
        container
        alignItems='center'
        columnSpacing={2}
        rowSpacing={2}
        sx={{ pb: (theme) => theme.spacing(3) }}
      >
        <Grid item xs={12} sm={6}>
          <Hero src={hero} alt='Alt me' />
        </Grid>
        <Grid item xs={12} sm={6} container rowSpacing={2}>
          <Grid item xs={12}>
            <Typography
              variant='h4'
              sx={{
                textAlign: {
                  xs: 'center',
                  sm: 'left',
                },
              }}
            >
              Welcome to our Web 3 community of organizers
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                textAlign: {
                  xs: 'center',
                  sm: 'left',
                },
              }}
            >
              Next are a few questions that can help us understand how we can
              power your events.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Button
              size='large'
              variant='contained'
              onClick={() => setStep(2)}
              sx={{
                display: 'block',
                width: '100%',
              }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Divider />

      <Grid container rowSpacing={3} sx={{ pt: (theme) => theme.spacing(3) }}>
        <GridItemHeader />
        <GridItemOfferings />
      </Grid>
    </>
  );
};

export default Intro;
