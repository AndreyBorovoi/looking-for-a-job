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
  paddingLeft: '24px',
  paddingRight: '24px',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px',
}));

const ProjectName = styled(Button)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
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
      <ProjectName
        variant={selected ? 'contained' : 'outlined'}
        onClick={onClick}
      >
        {title}
      </ProjectName>
    </ProjectContainer>
  );
};
