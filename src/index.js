// import './styles/main.scss';
// import DomToDo from './modules/domDisplay.js';
// import CreateToDo from './modules/todoConstruct.js';
// import Storage from './modules/localStorage.js';

// document.addEventListener('DOMContentLoaded', DomToDo.displayToDo);
// // completed all task listen
// document.getElementById('completedBtn').addEventListener('click', () => {
//   Storage.removeCompleted();
// });

// // listen to checkbox

// document.querySelector('form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const todoL = Storage.getToDo();
//   const toDoInput = document.getElementById('todo-input').value;
//   const id = todoL.length + 1;
//   const completed = false;

//   const todo = new CreateToDo(toDoInput, id, completed);

//   // add todo to dom
//   DomToDo.addToDoList(todo);

//   // Add todo to store
//   Storage.addTodo(todo);

//   // ClearField
//   DomToDo.clearField();
// });

// // event clear completed
// document.getElementById('completedBtn').addEventListener('click', () => {});

// //  event delete book
// document.getElementById('to-do-container').addEventListener('click', (e) => {
//   // edit input
//   // Storage.editInput()
//   // ===========
//   Storage.editInput(
//     e.target.parentElement.parentElement.children[4].textContent,
//     e.target.parentElement,
//     e.target.parentElement.parentElement,
//     e.target.parentElement.parentElement.children[2].children[0]
//   );
//   // ---------------------
//   // delete book from ui
//   DomToDo.deleteTodo(e.target);
//   // checkbox checked
//   if (e.target.classList.contains('check')) {
//     Storage.checkboxCompleted(e.target.parentElement.parentElement.children[4]);
//     e.target.parentElement.parentElement.children[2].children[0].classList.toggle(
//       'strike-through'
//     );

//     // const todoL = Storage.getToDo();
//     // todoL.forEach((todo) => {
//     //   todoL.completed = true;
//     //   localStorage.setItem('todoL', JSON.stringify(todoL));
//     // });
//   }
//   // delete from storage
//   Storage.remove(
//     e.target.parentElement.previousElementSibling.previousElementSibling
//       .textContent
//   );
// });
