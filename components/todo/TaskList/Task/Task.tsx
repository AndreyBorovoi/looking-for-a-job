import { ChangeEventHandler, useEffect, useState } from 'react';

import { Task as TaskProps } from '../../store/taskListSlice';

import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';

import { styled } from '@mui/material/styles';

import { useAppDispatch } from '../../store/hooks';
import {
  changeStatus,
  changeTitle,
  deleteTask,
} from '../../store/taskListSlice';

const StyledTask = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '24px',
  paddingRight: '24px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: '10px',
  width: '100%',
}));

const StyledTaskTitle = styled(Button)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'left',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
}));

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  marginRight: '20px',
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
}));

const StyledDeleteIcon = styled(BackspaceIcon)(({ theme }) => ({
  marginLeft: '30px',
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
    dispatch(changeTitle({ id: id, title: newTitle }));
    setIsInputShowed(false);
  };

  const focusOnInput: (instance: HTMLDivElement | null) => void = (
    instance
  ) => {
    const inputs = instance?.getElementsByTagName('input');

    if (inputs && inputs[0]) {
      inputs[0].focus();
    }
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
    <StyledTask>
      <StyledCheckbox checked={isDone} onClick={onCheckboxClick} />
      {isInputShowed ? (
        <StyledInput
          variant="standard"
          onBlur={onTitleInputBlur}
          ref={focusOnInput}
          value={newTitle}
          onChange={onTitleChange}
        />
      ) : (
        <StyledTaskTitle onClick={() => setIsInputShowed(true)}>
          {title}
        </StyledTaskTitle>
      )}
      <StyledDeleteIcon onClick={onDeleteTask} />
    </StyledTask>
  );
};
