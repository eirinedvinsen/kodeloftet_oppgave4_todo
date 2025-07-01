const form = document.getElementById('toDoList');
const input = document.getElementById('toDo');
const list = document.getElementById('myToDo');

console.log (form);
console.log (input);
console.log (list);
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === '') return;
  console.log(taskText);

  const li = document.createElement('li');
  li.textContent = taskText;

 const completedBtn = document.createElement('button');
 completedBtn.textContent = 'V';
 completedBtn.addEventListener("click", () => {
  li.classList.toggle('completed');
 });

  // li.addEventListener('click', () => {
  //   li.classList.toggle('completed');
  // });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(completedBtn);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = '';
});
