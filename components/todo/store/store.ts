import { configureStore } from '@reduxjs/toolkit';
import projectListReducer from './projectListSlice';
import taskListReducer from './taskListSlice';

const store = configureStore({
  reducer: {
    projectList: projectListReducer,
    tasktList: taskListReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
