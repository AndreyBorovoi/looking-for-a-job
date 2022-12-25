import { styled } from '@mui/material/styles';

const StyledHeader = styled('header')(({ theme }) => ({
  width: '100%',
  height: '40px',

  [theme.breakpoints.up('md')]: {
    height: '60px',
    minHeight: '60px',
  },
}));

export const Header = () => {
  return <StyledHeader />;
};
