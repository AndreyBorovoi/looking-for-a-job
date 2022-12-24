import { ChangeEventHandler, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Container, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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

  const [isInputShowed, setIsInputShowed] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    if (selectedProject?.title) {
      setNewTitle(selectedProject.title);
    }
  }, [selectedProject?.title]);

  const selectedTasks = taskList.filter(
    (task) => task.projectId === selectedProjectId
  );

  const onCreateNewTask = () => {
    dispatch(addNewTask({ projectId: selectedProjectId! }));
  };

  const onTitleInputBlur = () => {
    if (newTitle) {
      dispatch(
        changeProjectTitle({ id: selectedProjectId!, title: newTitle! })
      );
    } else {
      setNewTitle(selectedProject!.title!);
    }
    setIsInputShowed(false);
  };

  const onChangeProjectTitle: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setNewTitle(event.target.value);
  };

  const onDeleteProject = () => {
    dispatch(deleteProject({ id: selectedProjectId! }));
    dispatch(deleteTasksByProjectId({ projectId: selectedProjectId! }));
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
        {isInputShowed ? (
          <StyledSelectedProjectTitleInput
            variant="standard"
            onBlur={onTitleInputBlur}
            autoFocus
            value={newTitle}
            onChange={onChangeProjectTitle}
            error={newTitle.length === 0}
          />
        ) : (
          <StyledSelectedProjectTitle onClick={() => setIsInputShowed(true)}>
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
      <StyledAddTaskButton variant="contained" onClick={onCreateNewTask}>
        <AddIcon />
      </StyledAddTaskButton>
    </StyledTaskListContainer>
  );
};
