fetch('https://dummyjson.com/todos/user/5')
  .then(res => res.json())
  .then(data => console.log(data));
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const parentLi = checkbox.parentElement;
      if (checkbox.checked) {
        parentLi.classList.add('completed');
      } else {
        parentLi.classList.remove('completed');
      }
    });
  });
  function addNewTask() {
    
  }
  const addBtn = document.querySelector('button');
const inputField = document.querySelector('input[type="text"]');
const taskList = document.querySelector('#task');
addBtn.addEventListener('click', () => {
  const newTask = inputField.value;
  const newLi = document.createElement('li');
  newLi.innerHTML = `
    <input type="checkbox">
    <label>${newTask}</label>
    <button class="complete-btn">Complete</button>
    <button class="delete-btn">Delete</button>
  `;
  taskList.appendChild(newLi);
  inputField.value = '';
});
const deleteBtns = document.querySelectorAll('.delete-btn');
deleteBtns.forEach(deleteBtn => {
  deleteBtn.addEventListener('click', () => {
    const parentLi = deleteBtn.parentElement;
    parentLi.remove();
  });
});