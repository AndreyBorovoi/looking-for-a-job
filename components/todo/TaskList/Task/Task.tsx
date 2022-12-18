import { Task as TaskProps } from '../../store/taskListSlice';

export const Task = ({ id, projectId, isDone, title }: TaskProps) => {
  return <div>{title}</div>;
};
