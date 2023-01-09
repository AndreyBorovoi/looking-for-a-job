import reducer, {
  selectProject,
  changeProjectTitle,
  createProject,
  deleteProject,
  initialState,
} from './projectsSlice';
import produce from 'immer';

describe('Test ProjectsSlice', () => {
  test('Test selectProject action with existing project id', () => {
    expect(reducer(initialState, selectProject({ id: 1 }))).toEqual({
      ...initialState,
      selectedProjectId: 1,
    });
  });

  test('Test selectProject action with non-existing project id', () => {
    expect(reducer(initialState, selectProject({ id: 2 }))).toEqual(
      initialState
    );
  });

  test('Test changeProjectTitle', () => {
    const newState = reducer(
      initialState,
      changeProjectTitle({ id: 1, title: 'new title' })
    );
    const expected = produce(initialState, (draft) => {
      draft.projectList[0].title = 'new title';
    });
    expect(newState).toEqual(expected);
  });

  test('Test createProject', () => {
    const expected = produce(initialState, (draft) => {
      draft.projectList.unshift({ title: 'new projects', id: 2 });
      draft.selectedProjectId = 2;
    });
    const newState = reducer(
      initialState,
      createProject({ title: 'new projects' })
    );
    expect(newState).toEqual(expected);
  });

  test('Test deleteProject', () => {
    expect(reducer(initialState, deleteProject({ id: 1 }))).toEqual({
      projectList: [],
      selectedProjectId: null,
    });
  });
});
