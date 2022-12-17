import { createSlice } from '@reduxjs/toolkit';

export type Project = {
  id: number;
  parentId: number | null;
  title: string;
  isDone: boolean;
};

export const projectListSlice = createSlice({
  name: 'projectList',
  initialState: {
    value: {
      selectedProject: null,
      projects: [
        { id: 1, isDone: false, title: 'test', parentId: null },
      ] as Project[],
    },
  },
  reducers: {
    selectProject: (state) => {},
    addNewProject: (state) => {},
    deleteProject: (state) => {},
  },
});

export const { addNewProject, deleteProject } = projectListSlice.actions;

export default projectListSlice.reducer;
