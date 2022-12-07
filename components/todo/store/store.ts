import { configureStore } from '@reduxjs/toolkit';
import projectListReducer from './projectListSlice';
import taskListReducer from './taskListSlice';

export default configureStore({
  reducer: {
    projectList: projectListReducer,
    tasktList: taskListReducer,
  },
});
