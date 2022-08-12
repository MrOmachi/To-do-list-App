class Storage {
  static getToDo() {
    let todoL;
    if (localStorage.getItem('todoL') === null) {
      todoL = [];
    } else {
      todoL = JSON.parse(localStorage.getItem('todoL'));
    }
    return todoL;
  }

  static addTodo(todo) {
    const todoL = Storage.getToDo();

    todoL.push(todo);

    localStorage.setItem('todoL', JSON.stringify(todoL));
  }

  static remove(id) {
    const todoL = Storage.getToDo();
    id = Number(id);
    todoL.forEach((todo, i) => {
      if (todo.id === id) {
        todoL.splice(i, 1);
      }
    });
    localStorage.setItem('todoL', JSON.stringify(todoL));
  }

  static checkboxCompleted(id, status) {
    const todoL = Storage.getToDo();
    id = Number(id.textContent);

    todoL.forEach((x) => {
      if (x.id === id) {
        if (status) {
          x.completed = true;
        } else {
          x.completed = false;
        }
      }
      localStorage.setItem('todoL', JSON.stringify(todoL));
    });
  }

  static removeCompleted() {
    const todoL = Storage.getToDo();
    const newArr = [];

    const notCompleted = todoL.filter((x) => x.completed === false);
    localStorage.setItem('todoL', JSON.stringify(notCompleted));
    window.location.reload();

    // if (todoL.length > 1) {
    //   todoL.filter((x) => {
    //     if (x.completed) {
    //     } else {
    //       newArr.push(x);
    //       localStorage.setItem('todoL', JSON.stringify(newArr));
    //     }
    //     return newArr;
    //   });
    //   window.location.reload();
    // } else {
    //   localStorage.removeItem('todoL');
    //   window.location.reload();
    // }
  }

  static editInput(id, e, tdHide, editPara) {
    if (e.children[0].classList.contains('kebabImg')) {
      const todoL = Storage.getToDo();
      id = Number(id);
      todoL.forEach((todo) => {
        if (id === todo.id) {
          const editItem = todo.description;

          const edit = document.getElementsByName('edit')[0];

          if (edit) {
            edit.remove();
          }

          const input = document.createElement('input');
          input.type = 'text';
          input.name = 'edit';
          input.value = editItem;
          input.classList.add('edit');

          input.addEventListener('keypress', () => {
            editPara.textContent = input.value;
            todo.description = input.value;
            localStorage.setItem('todoL', JSON.stringify(todoL));
          });

          tdHide.appendChild(input);
        }
      });
    }
  }
}

export default Storage;
