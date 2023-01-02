import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Task = {
  id: number;
  projectId: number;
  title: string;
  isDone: boolean;
};

type AddNewTaskAction = Pick<Task, 'projectId' | 'title'>;
type ChangeStatusAction = Pick<Task, 'id'>;
type DeleteTaskAction = Pick<Task, 'id'>;
type ChangeTitleAction = Pick<Task, 'id' | 'title'>;
type DeleteTasksByProjectIdAction = Pick<Task, 'projectId'>;

const initialTaskList: Task[] = [
  { id: 1, projectId: 1, title: 'Молоко', isDone: false },
  { id: 2, projectId: 1, title: 'Огурцы', isDone: false },
  { id: 3, projectId: 1, title: 'Сок', isDone: false },
  { id: 4, projectId: 1, title: 'Помидоры', isDone: false },
  { id: 5, projectId: 1, title: 'Чай', isDone: false },
  { id: 6, projectId: 1, title: 'Кофе', isDone: false },
  { id: 7, projectId: 1, title: 'Пирог', isDone: false },
  { id: 8, projectId: 1, title: 'Конфеты', isDone: false },
  { id: 9, projectId: 1, title: 'Картошка', isDone: false },
  { id: 10, projectId: 1, title: 'Макароны', isDone: false },
  { id: 11, projectId: 1, title: 'Пельмени', isDone: false },
  { id: 12, projectId: 1, title: 'Мясо', isDone: false },
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: initialTaskList,
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
      state.taskList.unshift(newTask);
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
