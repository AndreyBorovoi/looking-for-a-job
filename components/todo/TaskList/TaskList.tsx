import { styled } from '@mui/material/styles';

import { useAppSelector, useAppDispatch } from '../store/hooks';

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

export const TaskList = () => {
  const { selectedProjectId, projects } = useAppSelector(
    (state) => state.projectList.value
  );
  const { taskList } = useAppSelector((state) => state.tasktList.value);
  const dispatch = useAppDispatch();

  const selectedProject = projects.find(
    (proj) => proj.id === selectedProjectId
  );

  const selectedTasks = taskList.filter(
    (task) => task.projectId === selectedProjectId
  );

  if (!selectedProject) {
    return (
      <StyledTaskListContainer>
        <Empty />
      </StyledTaskListContainer>
    );
  }

  return (
    <StyledTaskListContainer>
      <StyledSelectedProject>{selectedProject?.title}</StyledSelectedProject>
      <StyledTaskList>
        {selectedTasks.map((task) => {
          return <Task key={task.id} {...task} />;
        })}
      </StyledTaskList>
    </StyledTaskListContainer>
  );
};
