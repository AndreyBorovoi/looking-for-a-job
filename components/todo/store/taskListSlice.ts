import { createSlice } from '@reduxjs/toolkit';

type Task = {
  id: number;
  parentId?: number;
  title: string;
  description?: string;
  isDone: boolean;
  tags: string[];
  date?: Date;
};

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState: {
    value: [] as Task[],
  },
  reducers: {
    addNewTask: (state) => {},
    deleteTask: (state) => {},
  },
});

export const { addNewTask, deleteTask } = taskListSlice.actions;

export default taskListSlice.reducer;
