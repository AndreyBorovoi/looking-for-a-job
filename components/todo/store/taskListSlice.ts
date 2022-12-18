import { createSlice } from '@reduxjs/toolkit';

export type Task = {
  id: number;
  // parentId: number|null;
  projectId: number;
  title: string;
  // description: string|null;
  isDone: boolean;
  // tags: string[];
  // date: Date|null;
};

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState: {
    value: {
      taskList: [
        { id: 1, projectId: 1, title: 'test task', isDone: false },
      ] as Task[],
    },
  },
  reducers: {
    addNewTask: (state) => {},
    deleteTask: (state) => {},
  },
});

export const { addNewTask, deleteTask } = taskListSlice.actions;

export default taskListSlice.reducer;
