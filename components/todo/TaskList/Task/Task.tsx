import { ChangeEventHandler, useState } from 'react';

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

const StyledTaskName = styled(Button)(({ theme }) => ({
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

const StyledNameInput = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
}));

const StyledDeleteIcon = styled(BackspaceIcon)(({ theme }) => ({
  justifySelf: 'flex-end',
  marginLeft: '30px',
}));

export const Task = ({ id, projectId, isDone, title }: TaskProps) => {
  const dispatch = useAppDispatch();

  const [isInputShowed, setIsInputShowed] = useState(false);
  const [newName, setNewName] = useState(title);

  const onCheckboxClick = () => {
    dispatch(changeStatus({ id: id }));
  };

  const onNameInputBlur = () => {
    dispatch(changeTitle({ id: id, title: newName }));
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
    setNewName(event.target.value);
  };

  const onDeleteTask = () => {
    dispatch(deleteTask({ id: id }));
  };

  return (
    <StyledTask>
      <StyledCheckbox checked={isDone} onClick={onCheckboxClick} />
      {isInputShowed ? (
        <StyledNameInput
          variant="standard"
          onBlur={onNameInputBlur}
          ref={focusOnInput}
          value={newName}
          onChange={onTitleChange}
        />
      ) : (
        <StyledTaskName onClick={() => setIsInputShowed(true)}>
          {title}
        </StyledTaskName>
      )}
      <StyledDeleteIcon onClick={onDeleteTask} />
    </StyledTask>
  );
};
