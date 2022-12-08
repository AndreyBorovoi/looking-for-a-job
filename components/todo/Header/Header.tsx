import { styled } from '@mui/material/styles';

const StyledHeader = styled('header')(({ theme }) => ({
  width: '100%',
  height: '40px',
}));

export const Header = () => {
  return <StyledHeader />;
};
