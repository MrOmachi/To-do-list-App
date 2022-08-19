describe('task2', () => {
  // Remove all completed
  test('Remove all completed with the status of true', () => {
    const mockTodo2 = {
      description: 'remove completed',
      id: 2,
      completed: true,
    };

    const expected = [
      {
        description: 'json data',
        id: 1,
        completed: false,
      },
    ];

    Storage.addTodo(mockTodo2);
    Storage.deleteCompletedTask();

    expect(Storage.getToDo()).toStrictEqual(expected);
  });

  // Update Status
  test('Update status of item', () => {
    const mockTodo2 = {
      description: 'Update status',
      id: 2,
      completed: true,
    };
    const expected = [
      {
        description: 'json data',
        id: 1,
        completed: false,
      },
      {
        description: 'Update status',
        id: 2,
        completed: true,
      },
    ];

    Storage.addTodo(mockTodo2);
    Storage.checkboxCompleted(2, true);
    expect(Storage.getToDo()).toStrictEqual(expected);
  });

  // edit description
  test('Edit updated description', () => {
    const tasks = {
      description: 'Update status',
      id: 2,
      completed: false,
    };
    const expected = [
      {
        description: 'Edit description',
        id: 2,
        completed: false,
      },
    ];

    Storage.addTodo(tasks);
    const output = Storage.updateDescription(2, 'Edit description', tasks);
    expect(output).toStrictEqual(expected);
  });
});
