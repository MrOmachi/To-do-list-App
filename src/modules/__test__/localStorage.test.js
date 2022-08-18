import Storage from '../localStorage';
import CreateToDo from '../todoConstruct';

// eslint-disable-next-line func-names
const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
}());

global.localStorage = localStorageMock;

test('data is added into local storage', () => {
  const mockTodo = new CreateToDo('json data', 1, false);

  const expected = [{
    id: 1,
    description: 'json data',
    completed: false,
  }];
  Storage.addTodo(mockTodo);
  expect(Storage.getToDo()).toEqual(expected);
});
