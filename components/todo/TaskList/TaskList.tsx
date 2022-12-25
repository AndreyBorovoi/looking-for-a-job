import { ChangeEventHandler, useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import { addNewTask, deleteTasksByProjectId } from '../store/tasksSlice';
import { deleteProject, changeProjectTitle } from '../store/projectsSlice';

import { Empty } from './Empty';
import { Task } from './Task';

const StyledTaskListContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '20px',
  alignItems: 'center',
}));

const StyledSelectedProject = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '30px',
  alignItems: 'center',
  marginTop: '20px',
  marginBottom: '20px',
}));

const StyledSelectedProjectTitle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
}));

const StyledSelectedProjectTitleInput = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
}));

const StyledSelectedProjectButtons = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledSelectedProjectButton = styled(Button)(({ theme }) => ({
  marginLeft: '20px',
  marginRight: '20px',
}));

const StyledTaskList = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '20px',
  alignItems: 'center',
}));

const StyledNewTaskTitle = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '35px',
}));

const StyledNewTaskInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  maxWidth: '250px',
  marginRight: '10px',
  marginLeft: '10px',
  fontSize: '20px',
}));

const StyledAddTaskButton = styled(Button)(({ theme }) => ({
  width: '50px',
  height: '50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const TaskList = () => {
  const { selectedProjectId, projectList } = useAppSelector(
    (state) => state.projects
  );
  const selectedProject = projectList.find((v) => v.id === selectedProjectId);
  const { taskList } = useAppSelector((state) => state.taskts);
  const dispatch = useAppDispatch();

  const [isProjectInputShowed, setIsProjectInputShowed] = useState(false);
  const [newProjectTitle, setNewProjectTitle] = useState('');

  const [isTaskInputShowed, setIsTaskInputShowed] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    if (selectedProject?.title) {
      setNewProjectTitle(selectedProject.title);
    }
  }, [selectedProject?.title]);

  const selectedTasks = taskList.filter(
    (task) => task.projectId === selectedProjectId
  );

  const onTitleInputBlur = () => {
    if (newProjectTitle) {
      dispatch(
        changeProjectTitle({ id: selectedProjectId!, title: newProjectTitle! })
      );
    } else {
      setNewProjectTitle(selectedProject!.title!);
    }
    setIsProjectInputShowed(false);
  };

  const onChangeProjectTitle: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setNewProjectTitle(event.target.value);
  };

  const onDeleteProject = () => {
    dispatch(deleteProject({ id: selectedProjectId! }));
    dispatch(deleteTasksByProjectId({ projectId: selectedProjectId! }));
  };

  const onCreateNewTask = () => {
    dispatch(
      addNewTask({ projectId: selectedProjectId!, title: newTaskTitle })
    );
    setNewTaskTitle('');
    setIsTaskInputShowed(false);
  };

  if (!selectedProject) {
    return (
      <StyledTaskListContainer>
        <Empty />
      </StyledTaskListContainer>
    );
  }

  return (
    <StyledTaskListContainer fixed>
      <StyledSelectedProject>
        {isProjectInputShowed ? (
          <StyledSelectedProjectTitleInput
            variant="standard"
            onBlur={onTitleInputBlur}
            autoFocus
            value={newProjectTitle}
            onChange={onChangeProjectTitle}
            error={newProjectTitle.length === 0}
          />
        ) : (
          <StyledSelectedProjectTitle
            onClick={() => setIsProjectInputShowed(true)}
          >
            {selectedProject.title}
          </StyledSelectedProjectTitle>
        )}
        <StyledSelectedProjectButtons>
          <StyledSelectedProjectButton onClick={onDeleteProject}>
            Удалить
          </StyledSelectedProjectButton>
        </StyledSelectedProjectButtons>
      </StyledSelectedProject>
      <StyledTaskList>
        {selectedTasks.map((task) => {
          return <Task key={task.id} {...task} />;
        })}
      </StyledTaskList>
      {isTaskInputShowed ? (
        <StyledNewTaskTitle>
          <StyledNewTaskInput
            autoFocus
            variant="standard"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            error={newTaskTitle.length === 0}
          />
          <IconButton
            style={{ marginLeft: '20px' }}
            color="success"
            disabled={newTaskTitle.length === 0}
            onClick={onCreateNewTask}
          >
            <DoneIcon />
          </IconButton>
          <IconButton
            style={{ marginLeft: '20px' }}
            color="error"
            onClick={() => setIsTaskInputShowed(false)}
          >
            <CloseIcon />
          </IconButton>
        </StyledNewTaskTitle>
      ) : (
        <StyledNewTaskTitle>
          <StyledAddTaskButton
            variant="contained"
            onClick={() => setIsTaskInputShowed(true)}
          >
            <AddIcon />
          </StyledAddTaskButton>
        </StyledNewTaskTitle>
      )}
    </StyledTaskListContainer>
  );
};
