import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Project = {
  id: number;
  title: string;
};

type SelectProjectAction = Pick<Project, 'id'>;

type CreateProjectAction = Pick<Project, 'title'>;

type DeleteProjectAction = Pick<Project, 'id'>;

type ChangeProjectTitleAction = Pick<Project, 'id' | 'title'>;

const initialProjectList: Project[] = [{ id: 1, title: 'Продукты' }];

export const initialState = {
  selectedProjectId: null as Project['id'] | null,
  projectList: initialProjectList,
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: initialState,
  reducers: {
    selectProject: (state, action: PayloadAction<SelectProjectAction>) => {
      const ids = state.projectList.map((value) => value.id);
      if (ids.includes(action.payload.id)) {
        state.selectedProjectId = action.payload.id;
      }
    },
    createProject: (state, action: PayloadAction<CreateProjectAction>) => {
      const ids = state.projectList.map((value) => value.id);
      const newProject: Project = {
        id: ids.length > 0 ? Math.max(...ids) + 1 : 0,
        title: action.payload.title,
      };
      state.projectList.unshift(newProject);
      state.selectedProjectId = newProject.id;
    },
    deleteProject: (state, action: PayloadAction<DeleteProjectAction>) => {
      state.selectedProjectId = null;
      state.projectList = state.projectList.filter(
        (v) => v.id !== action.payload.id
      );
    },
    changeProjectTitle: (
      state,
      action: PayloadAction<ChangeProjectTitleAction>
    ) => {
      const project = state.projectList.find((v) => v.id === action.payload.id);
      if (project) {
        project.title = action.payload.title;
      }
    },
  },
});

export const {
  createProject,
  deleteProject,
  selectProject,
  changeProjectTitle,
} = projectsSlice.actions;

export default projectsSlice.reducer;
