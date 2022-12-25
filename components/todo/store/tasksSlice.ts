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

type AddNewTaskAction = Pick<Task, 'projectId' | 'title'>;
type ChangeStatusAction = Pick<Task, 'id'>;
type DeleteTaskAction = Pick<Task, 'id'>;
type ChangeTitleAction = Pick<Task, 'id' | 'title'>;
type DeleteTasksByProjectIdAction = Pick<Task, 'projectId'>;

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [
      { id: 1, projectId: 1, title: 'test task', isDone: false },
    ] as Task[],
  },
  reducers: {
    addNewTask: (state, action: PayloadAction<AddNewTaskAction>) => {
      const ids = state.taskList.map((task) => task.id);
      const newTask = {
        id: ids.length > 0 ? Math.max(...ids) + 1 : 0,
        isDone: false,
        projectId: action.payload.projectId,
        title: action.payload.title,
      };
      state.taskList.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<DeleteTaskAction>) => {
      state.taskList = state.taskList.filter((v) => v.id !== action.payload.id);
    },
    changeStatus: (state, action: PayloadAction<ChangeStatusAction>) => {
      const task = state.taskList.find((v) => v.id === action.payload.id);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    changeTitle: (state, action: PayloadAction<ChangeTitleAction>) => {
      const task = state.taskList.find((v) => v.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
      }
    },
    deleteTasksByProjectId: (
      state,
      action: PayloadAction<DeleteTasksByProjectIdAction>
    ) => {
      state.taskList = state.taskList.filter(
        (v) => v.projectId !== action.payload.projectId
      );
    },
  },
});

export const {
  addNewTask,
  deleteTask,
  changeStatus,
  changeTitle,
  deleteTasksByProjectId,
} = tasksSlice.actions;

export default tasksSlice.reducer;
