import Storage from '../localStorage';
jest.mock('../localStorage');

describe('task 1', () => {
  test('Add a list item', () => {
    const todo = {
      index: 1,
      describe: 'first task',
      completed: false,
    };

    const expected = [
      {
        index: 1,
        describe: 'first task',
        completed: false,
      },
    ];

    //Act
    Storage.addTodo(todo);

    //Assert
    expect(Storage.addTodo(todo)).toBe(expected);
  });
});
