import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import { addNewTask } from '../store/taskListSlice';

import { Empty } from './Empty';
import { Task } from './Task';

const StyledTaskListContainer = styled('div')(({ theme }) => ({
  width: '100%',
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
  const { selectedProjectId, projects } = useAppSelector(
    (state) => state.projectList.value
  );
  const { taskList } = useAppSelector((state) => state.tasktList.value);
  const dispatch = useAppDispatch();

  const selectedProject = projects.find(
    (proj) => proj.id === selectedProjectId
  );

  if (!selectedProject) {
    return (
      <StyledTaskListContainer>
        <Empty />
      </StyledTaskListContainer>
    );
  }

  const selectedTasks = taskList.filter(
    (task) => task.projectId === selectedProjectId
  );

  const createNewTask = () => {
    dispatch(addNewTask({ projectId: selectedProjectId! }));
  };

  return (
    <StyledTaskListContainer>
      <StyledSelectedProject>{selectedProject.title}</StyledSelectedProject>
      <StyledTaskList>
        {selectedTasks.map((task) => {
          return <Task key={task.id} {...task} />;
        })}
      </StyledTaskList>
      <StyledAddTaskButton variant="contained" onClick={createNewTask}>
        <AddIcon />
      </StyledAddTaskButton>
    </StyledTaskListContainer>
  );
};
