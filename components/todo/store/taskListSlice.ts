import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

type AddNewTaskAction = Pick<Task, 'projectId'>;

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
    addNewTask: (state, action: PayloadAction<AddNewTaskAction>) => {
      const newId =
        Math.max(...state.value.taskList.map((task) => task.id)) + 1;
      const newTask = {
        id: newId,
        isDone: false,
        projectId: action.payload.projectId,
        title: 'Новая задача',
      };
      state.value.taskList.push(newTask);
    },
    deleteTask: (state) => {},
  },
});

export const { addNewTask, deleteTask } = taskListSlice.actions;

export default taskListSlice.reducer;
