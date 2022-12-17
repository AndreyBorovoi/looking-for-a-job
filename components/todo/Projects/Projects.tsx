import { useAppSelector, useAppDispatch } from '../store/hooks';

import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

import { Project } from './Project';
import { useState } from 'react';

const StyledProjectsContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '20px',
}));

const StyledProjectList = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '20px',
}));

const StyledAddNewProject = styled(Button)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  height: '35px',
}));

const StyledNewProjectName = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '35px',
}));

const StyledNewProjectNameInput = styled('input')(({ theme }) => ({
  width: '100%',
  maxWidth: '250px',
  marginRight: '10px',
  marginLeft: '10px',
  fontSize: '20px',
}));

export const Projects = () => {
  const { selectedProject, projects } = useAppSelector(
    (state) => state.projectList.value
  );
  const dispatch = useAppDispatch();

  const [isInputShowed, setIsInputShowed] = useState(false);

  const addNewProj = () => {};

  return (
    <StyledProjectsContainer>
      <StyledProjectList>
        {projects.map(({ id, title }) => {
          return (
            <Project
              key={Number(id)}
              title={title}
              selected={id === selectedProject}
            />
          );
        })}
      </StyledProjectList>
      {isInputShowed ? (
        <StyledNewProjectName>
          <StyledNewProjectNameInput maxLength={20} />
          <DoneIcon style={{ marginLeft: '20px' }} />
          <CloseIcon
            style={{ marginLeft: '20px' }}
            onClick={() => setIsInputShowed(false)}
          />
        </StyledNewProjectName>
      ) : (
        <StyledAddNewProject onClick={() => setIsInputShowed(true)}>
          <AddIcon
            sx={{ marginRight: '10px', height: '16px', width: '16px' }}
          />
          <div>Новый проект</div>
        </StyledAddNewProject>
      )}
    </StyledProjectsContainer>
  );
};
