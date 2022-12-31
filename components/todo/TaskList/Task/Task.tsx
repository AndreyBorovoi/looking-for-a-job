import { ChangeEventHandler, useEffect, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BackspaceIcon from '@mui/icons-material/Backspace';

import { styled } from '@mui/material/styles';

import { useAppDispatch } from '../../store/hooks';
import {
  changeStatus,
  changeTitle,
  deleteTask,
  Task as TaskProps,
} from '../../store/tasksSlice';

const TaskContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '24px',
  paddingRight: '24px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: '10px',
  width: '100%',
}));

const TaskTitle = styled(Button)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'left',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    flexGrow: 0,
    width: '296px',
  },
}));

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  marginRight: '20px',
  padding: 0,
}));

const Input = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.up('md')]: {
    flexGrow: 0,
    width: '296px',
  },
}));

export const Task = ({ id, projectId, isDone, title }: TaskProps) => {
  const dispatch = useAppDispatch();

  const [isInputShowed, setIsInputShowed] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  useEffect(() => {
    setNewTitle(title);
  }, [title]);

  const onCheckboxClick = () => {
    dispatch(changeStatus({ id: id }));
  };

  const onTitleInputBlur = () => {
    if (newTitle) {
      dispatch(changeTitle({ id: id, title: newTitle }));
    } else {
      setNewTitle(title);
    }
    setIsInputShowed(false);
  };

  const onTitleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setNewTitle(event.target.value);
  };

  const onDeleteTask = () => {
    dispatch(deleteTask({ id: id }));
  };

  return (
    <TaskContainer>
      <StyledCheckbox checked={isDone} onClick={onCheckboxClick} />
      {isInputShowed ? (
        <Input
          variant="standard"
          onBlur={onTitleInputBlur}
          value={newTitle}
          onChange={onTitleChange}
          autoFocus
          error={newTitle.length === 0}
        />
      ) : (
        <TaskTitle onClick={() => setIsInputShowed(true)}>{title}</TaskTitle>
      )}
      <IconButton
        onClick={onDeleteTask}
        style={{ marginLeft: '30px', padding: 0 }}
        color="default"
      >
        <BackspaceIcon />
      </IconButton>
    </TaskContainer>
  );
};
