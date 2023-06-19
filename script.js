document.addEventListener("DOMContentLoaded", function () {
	var newTaskInput = document.querySelector("#newtask input[type='text']");
	var addButton = document.querySelector("#newtask button");
	var tasksContainer = document.querySelector("#tasks");
  
	addButton.addEventListener("click", function () {
	  var taskText = newTaskInput.value;
	  if (taskText.trim() !== "") {
		var taskElement = document.createElement("div");
		taskElement.classList.add("task");
		taskElement.innerHTML = `
		  <span>${taskText}</span>
		  <button class="delete">-</button>
		  <button class="fue">...</button>
		`;
		tasksContainer.appendChild(taskElement);
		newTaskInput.value = "";
		
	  }
	});
  
	tasksContainer.addEventListener("click", function (event) {
	   if (event.target.classList.contains("delete")) {
		var taskElement = event.target.closest(".task");
		taskElement.remove();
	  } else if (event.target.classList.contains("fue")) {
		var taskElement = event.target.closest(".task");
		var spanElement = taskElement.querySelector("span");
		var taskText = spanElement.textContent;
		newTaskInput.value = taskText;
		taskElement.remove();
	  }
	});
  
	var links = ['https://dummyjson.com/todos/6', 'https://dummyjson.com/todos/9', 'https://dummyjson.com/todos/8', 'https://dummyjson.com/todos/6', 'https://dummyjson.com/todos/10'];
  
	links.forEach(function (link) {
	  fetch(link)
		.then(function (response) {
		  return response.json();
		})
		.then(function (data) {
		  var taskText = data.title || data.todo;
		  var taskElement = document.createElement("div");
		  taskElement.classList.add("task");
		  taskElement.innerHTML = `
			<span>${taskText}</span>
			<button class="delete">-</button>
			<button class="update">...</button>
		  `;
		  tasksContainer.appendChild(taskElement);
		})
		.catch(function (error) {
		  console.log("Error fetching data:", error);
		});
	});
  });
  