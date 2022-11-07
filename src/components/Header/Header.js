import React from "react";
import logo from '../../assets/draftlyLogo.svg';
import { styled } from '@mui/material/styles';

const Wrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const Logo = styled('img')(({ theme }) => ({
  height: '10vmin',
  verticalAlign: 'bottom',
}));

const Header = ({setStep}) => {
  return (
    <Wrapper>
      <Logo src={logo} alt="logo" onClick={() => setStep(1)} />
    </Wrapper>
  );
};

export default Header;