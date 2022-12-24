import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';

import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

import { Project } from './Project';

import { addNewProject } from '../store/projectsSlice';

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

const StyledNewProjectTitle = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '35px',
}));

const StyledNewProjectInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  maxWidth: '250px',
  marginRight: '10px',
  marginLeft: '10px',
  fontSize: '20px',
}));

export const Projects = () => {
  const { projectList } = useAppSelector((state) => state.projects);
  const dispatch = useAppDispatch();

  const [isInputShowed, setIsInputShowed] = useState(false);
  const [newProjectTitle, setNewProjectTitle] = useState('');

  const addNewProj = () => {
    setIsInputShowed(false);
    if (newProjectTitle) {
      dispatch(addNewProject({ title: newProjectTitle }));
      setNewProjectTitle('');
    }
  };

  return (
    <StyledProjectsContainer>
      <StyledProjectList>
        {projectList.map(({ id, title }) => {
          return <Project key={id} title={title} id={id} />;
        })}
      </StyledProjectList>
      {isInputShowed ? (
        <StyledNewProjectTitle>
          <StyledNewProjectInput
            autoFocus
            variant="standard"
            value={newProjectTitle}
            onChange={(e) => setNewProjectTitle(e.target.value)}
            error={newProjectTitle.length === 0}
          />
          <IconButton
            style={{ marginLeft: '20px' }}
            color="success"
            disabled={newProjectTitle.length === 0}
            onClick={addNewProj}
          >
            <DoneIcon />
          </IconButton>
          <IconButton
            style={{ marginLeft: '20px' }}
            color="error"
            onClick={() => setIsInputShowed(false)}
          >
            <CloseIcon />
          </IconButton>
        </StyledNewProjectTitle>
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
