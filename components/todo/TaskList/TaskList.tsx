import { ChangeEventHandler, useEffect, useState } from 'react';

import { styled, useTheme } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';

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

const TaskListContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '20px',
  alignItems: 'center',
  flexGrow: 1,

  [theme.breakpoints.up('md')]: {
    height: '100%',
    maxHeight: '100%',
  },
}));

const SelectedProject = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '30px',
  alignItems: 'center',
  marginTop: '20px',
  marginBottom: '20px',
}));

const SelectedProjectTitle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
  maxWidth: '100%',
  minHeight: '60px',
  wordWrap: 'break-word',
  [theme.breakpoints.up('md')]: {
    maxWidth: '390px',
  },
}));

const SelectedProjectTitleInput = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
  width: '80%',
  minHeight: '60px',
  fontSize: '30px',
  [theme.breakpoints.up('md')]: {
    width: '390px',
    maxWidth: '390px',
  },
}));

const SelectedProjectButtons = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SelectedProjectButton = styled(Button)(({ theme }) => ({
  marginLeft: '20px',
  marginRight: '20px',
}));

const Tasks = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '20px',
  alignItems: 'center',
  marginBottom: '36px',
  [theme.breakpoints.up('md')]: {
    width: '450px',
    overflowY: 'auto',
    overflowX: 'auto',
    flexGrow: 1,
    marginBottom: '0',
  },
}));

const NewTaskTitle = styled('div')(({ theme }) => ({
  width: '100%',
  height: '40px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '24px',
  paddingRight: '24px',

  marginBottom: '36px',
  [theme.breakpoints.up('md')]: {
    width: '438px',
    marginRight: '4px',
    marginTop: '36px',
    marginBottom: '0',
    minHeight: '40px',
  },
}));

const NewTaskInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  fontSize: '20px',
}));

const AddTaskButton = styled(Button)(({ theme }) => ({
  width: '100%',
  height: '40px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const TaskList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
      <TaskListContainer>
        <Empty />
      </TaskListContainer>
    );
  }

  return (
    <TaskListContainer>
      <SelectedProject>
        {isProjectInputShowed ? (
          <SelectedProjectTitleInput
            variant="standard"
            onBlur={onTitleInputBlur}
            autoFocus
            value={newProjectTitle}
            onChange={onChangeProjectTitle}
            error={newProjectTitle.length === 0}
            multiline
          />
        ) : (
          <SelectedProjectTitle onClick={() => setIsProjectInputShowed(true)}>
            {selectedProject.title}
          </SelectedProjectTitle>
        )}
        <SelectedProjectButtons>
          <SelectedProjectButton onClick={onDeleteProject}>
            ??????????????
          </SelectedProjectButton>
        </SelectedProjectButtons>
      </SelectedProject>
      {!isMobile && (
        <Tasks>
          {selectedTasks.map((task) => {
            return <Task key={task.id} {...task} />;
          })}
        </Tasks>
      )}

      {isTaskInputShowed ? (
        <NewTaskTitle>
          <NewTaskInput
            autoFocus
            variant="standard"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            error={newTaskTitle.length === 0}
          />
          <IconButton
            style={{ marginLeft: '20px', padding: 0 }}
            color="success"
            disabled={newTaskTitle.length === 0}
            onClick={onCreateNewTask}
          >
            <DoneIcon />
          </IconButton>
          <IconButton
            style={{ marginLeft: '20px', padding: 0 }}
            color="error"
            onClick={() => setIsTaskInputShowed(false)}
          >
            <CloseIcon />
          </IconButton>
        </NewTaskTitle>
      ) : (
        <NewTaskTitle>
          <AddTaskButton
            variant="contained"
            onClick={() => setIsTaskInputShowed(true)}
          >
            <AddIcon />
            <div>?????????? ????????????</div>
          </AddTaskButton>
        </NewTaskTitle>
      )}
      {isMobile && (
        <Tasks>
          {selectedTasks.map((task) => {
            return <Task key={task.id} {...task} />;
          })}
        </Tasks>
      )}
    </TaskListContainer>
  );
};
