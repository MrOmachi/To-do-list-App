import kebab from '../assets/kebab.svg';
import toDoArr from './toDoArray.js';

const listItem = document.getElementById('list-item');

const CreatToDo = () => {
  toDoArr.map((x) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');

    const remove = document.createElement('img');
    remove.classList.add('remove');
    remove.src = kebab;
    paragraph.textContent = x.description;

    li.appendChild(checkbox);
    li.appendChild(paragraph);
    li.appendChild(remove);
    listItem.appendChild(li);

    return listItem;
  });
};

export default CreatToDo;
