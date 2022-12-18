import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Project = {
  id: number;
  title: string;
};

type SelectProjectAction = Pick<Project, 'id'>;

type AddNewProjectAction = Pick<Project, 'title'>;

export const projectListSlice = createSlice({
  name: 'projectList',
  initialState: {
    value: {
      selectedProjectId: null as Project['id'] | null,
      projects: [{ id: 1, title: 'test' }] as Project[],
    },
  },
  reducers: {
    selectProject: (state, action: PayloadAction<SelectProjectAction>) => {
      state.value.selectedProjectId = action.payload.id;
    },
    addNewProject: (state, action: PayloadAction<AddNewProjectAction>) => {
      const newProject: Project = {
        id: Math.max(...state.value.projects.map((value) => value.id)) + 1,
        title: action.payload.title,
      };
      state.value.projects.push(newProject);
    },
    deleteProject: (state) => {},
  },
});

export const { addNewProject, deleteProject, selectProject } =
  projectListSlice.actions;

export default projectListSlice.reducer;
