import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import {
  selectProject,
  Project as ProjectType,
} from '../../store/projectsSlice';
import { closeDrawer } from '../../store/drawerSlice';
import { useAppDispatch } from '../../store/hooks';

const ProjectContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px',
  width: '252px',
  [theme.breakpoints.up('md')]: {
    width: '300px',
  },
}));

const ProjectTitle = styled(Button)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
}));

const ProjectTitleText = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  wordWrap: 'break-word',
}));

export const Project = ({
  id,
  title,
  selected,
}: ProjectType & { selected: boolean }) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(closeDrawer());
    dispatch(selectProject({ id: id }));
  };

  return (
    <ProjectContainer>
      <ProjectTitle
        variant={selected ? 'contained' : 'outlined'}
        onClick={onClick}
      >
        <ProjectTitleText>{title}</ProjectTitleText>
      </ProjectTitle>
    </ProjectContainer>
  );
};
