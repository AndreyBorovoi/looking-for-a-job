import { createSlice } from '@reduxjs/toolkit';

type Project = {
  id: bigint;
  parentId?: bigint;
  title: string;
  isDone: boolean;
};

export const projectListSlice = createSlice({
  name: 'projectList',
  initialState: {
    value: [] as Project[],
  },
  reducers: {
    addNewProject: (state) => {},
    deleteProject: (state) => {},
  },
});

export const { addNewProject, deleteProject } = projectListSlice.actions;

export default projectListSlice.reducer;
