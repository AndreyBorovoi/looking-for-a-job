import reducer, {
  addNewTask,
  changeStatus,
  changeTitle,
  deleteTask,
  deleteTasksByProjectId,
  initialState,
} from './tasksSlice';
import produce from 'immer';

describe('Test tasksSlice', () => {
  test('test addNewTask', () => {
    const newState = reducer(
      initialState,
      addNewTask({ projectId: 1, title: 'new task' })
    );
    const expected = produce(initialState, (draft) => {
      draft.taskList.unshift({
        projectId: 1,
        title: 'new task',
        id: 13,
        isDone: false,
      });
    });
    expect(newState).toEqual(expected);
  });

  test('Test changeStatus', () => {
    const newState = reducer(initialState, changeStatus({ id: 1 }));
    const expected = produce(initialState, (draft) => {
      draft.taskList.find((v) => v.id === 1)!.isDone = true;
    });
    expect(newState).toEqual(expected);
  });

  test('Test changeTitle', () => {
    const newState = reducer(
      initialState,
      changeTitle({ id: 1, title: 'new title' })
    );
    const expected = produce(initialState, (draft) => {
      draft.taskList.find((v) => v.id === 1)!.title = 'new title';
    });
    expect(newState).toEqual(expected);
  });

  test('Test deleteTask', () => {
    const newState = reducer(initialState, deleteTask({ id: 1 }));
    const expected = produce(initialState, (draft) => {
      draft.taskList.shift();
    });
    expect(newState).toEqual(expected);
  });

  test('Test deleteTasksByProjectId', () => {
    const newState = reducer(
      initialState,
      deleteTasksByProjectId({ projectId: 1 })
    );
    expect(newState).toEqual({ taskList: [] });
  });
});
