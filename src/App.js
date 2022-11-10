import * as React from 'react';
import { useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Header from './components/header';
import Intro from './components/intro';
import User from './components/user';
import { default as NewCommunity } from './components/community';

import theme from './customTheme';

const Wrapper = styled('main')(({ theme }) => ({
  backgroundColor: '#1E1E1E',
  minHeight: '100vh',
  paddingBottom: theme.spacing(4),
}));

const Main = styled('main')(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function App({ ...props }) {
  const [step, setStep] = useState(3);

  const basicRouter = () => {
    switch (step) {
      case 1:
        return <Intro setStep={setStep} />;
      case 2:
        return <User />;
      case 3:
        return <NewCommunity />;
      default:
        return <div>whoops</div>;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <Header setStep={setStep} />
        <Main>{basicRouter()}</Main>
      </Wrapper>
    </ThemeProvider>
  );
}
