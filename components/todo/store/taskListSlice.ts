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
type ChangeStatusAction = Pick<Task, 'id'>;
type DeleteTaskAction = Pick<Task, 'id'>;
type ChangeTitleAction = Pick<Task, 'id' | 'title'>;

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
      const ids = state.value.taskList.map((task) => task.id);
      const newId = ids.length > 0 ? Math.max(...ids) + 1 : 0;
      const newTask = {
        id: newId,
        isDone: false,
        projectId: action.payload.projectId,
        title: 'Новая задача',
      };
      state.value.taskList.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<DeleteTaskAction>) => {
      state.value.taskList = state.value.taskList.filter(
        (v) => v.id !== action.payload.id
      );
    },
    changeStatus: (state, action: PayloadAction<ChangeStatusAction>) => {
      const task = state.value.taskList.find((v) => v.id === action.payload.id);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    changeTitle: (state, action: PayloadAction<ChangeTitleAction>) => {
      const task = state.value.taskList.find((v) => v.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
      }
    },
  },
});

export const { addNewTask, deleteTask, changeStatus, changeTitle } =
  taskListSlice.actions;

export default taskListSlice.reducer;
