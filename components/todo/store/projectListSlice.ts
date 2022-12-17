import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Project = {
  id: number;
  title: string;
};

type AddNewProjectAction = {
  name: string;
};

export const projectListSlice = createSlice({
  name: 'projectList',
  initialState: {
    value: {
      selectedProject: null,
      projects: [{ id: 1, title: 'test' }] as Project[],
    },
  },
  reducers: {
    selectProject: (state) => {},
    addNewProject: (state, action: PayloadAction<AddNewProjectAction>) => {
      const newProject: Project = {
        id: Math.max(...state.value.projects.map((value) => value.id)) + 1,
        title: action.payload.name,
      };
      state.value.projects.push(newProject);
    },
    deleteProject: (state) => {},
  },
});

export const { addNewProject, deleteProject } = projectListSlice.actions;

export default projectListSlice.reducer;
