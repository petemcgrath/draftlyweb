import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { pink } from '@mui/material/colors';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { styled } from '@mui/material/styles';
import hero from '../../assets/intro.svg';

const HeroWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 0),
  textAlign: 'center',
}));

const OfferingsWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 0),
}));

const Hero = styled('img')(({ theme }) => ({
  height: '70vmin',
  verticalAlign: 'bottom',
  padding: theme.spacing(1, 0, 0),
}));

const LI = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
}));

const Intro = ({ setStep }) => {
  return (
    <>
      <HeroWrapper>
        <Hero src={hero} alt='Alt me' />
        <Typography
          variant='h4'
          sx={(theme) => ({
            padding: theme.spacing(3, 0),
          })}
        >
          Welcome to our Web 3 community of organizers
        </Typography>
        <Typography>
          Next are a few questions that can help us understand how we can power
          your events.
        </Typography>
        <Stack
          spacing={2}
          sx={(theme) => ({
            padding: theme.spacing(3),
          })}
        >
          <Button size='large' variant='contained' onClick={() => setStep(2)}>
            Get Started
          </Button>
        </Stack>
      </HeroWrapper>
      <Divider />
      <OfferingsWrapper>
        <Typography
          variant='h5'
          sx={(theme) => ({
            padding: theme.spacing(3, 0, 0),
          })}
        >
          Draftly lets you:
        </Typography>
        <List component='nav' aria-label='Offerings'>
          <LI button>
            <ListItemIcon>
              <Avatar sx={{ bgcolor: pink[500] }}>
                <CalendarMonthIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary='Create and invite community members to events.' />
          </LI>
          <LI button>
            <ListItemIcon>
              <Avatar sx={{ bgcolor: pink[500] }}>
                <CalendarMonthIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary='Access marketing tools to reach new audiences, all in one place.' />
          </LI>
          <LI button>
            <ListItemIcon>
              <Avatar sx={{ bgcolor: pink[500] }}>
                <CalendarMonthIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary='Access marketing tools to reach new audiences, all in one place.' />
          </LI>
        </List>
      </OfferingsWrapper>
    </>
  );
};

export default Intro;
