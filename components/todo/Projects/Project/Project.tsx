import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import {
  selectProject,
  Project as ProjectType,
} from '../../store/projectListSlice';
import { useAppDispatch } from '../../store/hooks';

const StyledProject = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '24px',
  paddingRight: '24px',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px',
}));

const StyledProjectName = styled(Button)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
}));

export const Project = ({ id, title }: ProjectType) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(selectProject({ id: id }));
  };

  return (
    <StyledProject>
      <StyledProjectName onClick={onClick}>{title}</StyledProjectName>
    </StyledProject>
  );
};
