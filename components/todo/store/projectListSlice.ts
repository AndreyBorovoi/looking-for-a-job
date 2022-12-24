import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Project = {
  id: number;
  title: string;
};

type SelectProjectAction = Pick<Project, 'id'>;

type AddNewProjectAction = Pick<Project, 'title'>;

type DeleteProjectAction = Pick<Project, 'id'>;

type ChangeProjectTitleAction = Pick<Project, 'id' | 'title'>;

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
    deleteProject: (state, action: PayloadAction<DeleteProjectAction>) => {
      state.value.selectedProjectId = null;
      state.value.projects = state.value.projects.filter(
        (v) => v.id !== action.payload.id
      );
    },
    changeProjectTitle: (
      state,
      action: PayloadAction<ChangeProjectTitleAction>
    ) => {
      const project = state.value.projects.find(
        (v) => v.id === action.payload.id
      );
      if (project) {
        project.title = action.payload.title;
      }
    },
  },
});

export const {
  addNewProject,
  deleteProject,
  selectProject,
  changeProjectTitle,
} = projectListSlice.actions;

export default projectListSlice.reducer;
