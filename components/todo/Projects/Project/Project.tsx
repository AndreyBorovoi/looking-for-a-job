import { styled } from '@mui/material/styles';

export type ProjectProps = {
  title: string;
  selected: boolean;
};

const StyledProject = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '24px',
  paddingRight: '24px',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px',
}));

const StyledProjectName = styled('div')(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
}));

export const Project = ({ title, selected }: ProjectProps) => {
  return (
    <StyledProject>
      <StyledProjectName>{title}</StyledProjectName>
    </StyledProject>
  );
};
