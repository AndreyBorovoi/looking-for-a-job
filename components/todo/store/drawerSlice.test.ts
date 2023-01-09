import reducer, { openDrawer, closeDrawer } from './drawerSlice';

describe('Test DrawerSlice', () => {
  test('test closeDrawer action', () => {
    expect(reducer(undefined, closeDrawer())).toEqual({ isOpen: false });
  });

  test('test openDrawer action', () => {
    expect(reducer(undefined, openDrawer())).toEqual({ isOpen: true });
  });
});
