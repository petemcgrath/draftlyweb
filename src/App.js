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

import Header from './components/Header';
import Intro from './components/Intro';
import User from './components/User';

import theme from './customTheme';

const Wrapper = styled(Container)(({ theme }) => ({
  backgroundColor: '#1E1E1E',
  minHeight: '100vh',
  paddingBottom: '30px',
}));

export default function App({ ...props }) {
  const [step, setStep] = useState(1);

  const basicRouter = () => {
    switch (step) {
      case 1:
        return <Intro setStep={setStep} />;
      case 2:
        return <User />;
      default:
        return <div>whoops</div>;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <Header setStep={setStep} />
        {basicRouter()}
      </Wrapper>
    </ThemeProvider>
  );
}
