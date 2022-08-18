import Storage from '../localStorage';

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
    const output = Storage.addTodo(todo);

    //Assert
    expected(output).toBeEqual(expected);
  });
});
