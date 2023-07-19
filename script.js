// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const timeInput = document.getElementById('timeInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add event listener to the add button
addBtn.addEventListener('click', addTask);

function addTask() {
  const task = taskInput.value;
  const time = timeInput.value;
  if (task && time) {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    // Create a container for task item and time allocation
    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item-container');

    // Create the task item element
    const taskItem = document.createElement('span');
    taskItem.textContent = task;

    // Create a time allocation element
    const timeElement = document.createElement('span');
    timeElement.textContent = time;
    timeElement.className = 'task-time';

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    // Add event listener to the delete button
    deleteBtn.addEventListener('click', function() {
      taskList.removeChild(listItem);
    });

    // Append the task item and time allocation to the container
    taskItemContainer.appendChild(taskItem);
    taskItemContainer.appendChild(timeElement);

    // Append the container and delete button to the list item
    listItem.appendChild(taskItemContainer);
    listItem.appendChild(deleteBtn);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input fields
    taskInput.value = '';
    timeInput.value = '';
  }
}

// Add event listener to the task list
taskList.addEventListener('click', function(event) {
  const listItem = event.target.closest('li');
  if (listItem) {
    listItem.classList.toggle('completed');
  }
});
// ... Existing code ...

// Add event listener to the add button
addBtn.addEventListener('click', addTask);

// Create a container for delete buttons
const deleteBtnContainer = document.createElement('div');
deleteBtnContainer.className = 'delete-btn-container';

// Append the delete button container to the task list
taskList.after(deleteBtnContainer);

function addTask() {
  const task = taskInput.value;
  const time = timeInput.value;
  if (task && time) {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    // Create the task item element
    const taskItem = document.createElement('span');
    taskItem.textContent = task;

    // Create a time allocation element
    const timeElement = document.createElement('span');
    timeElement.textContent = time;
    timeElement.className = 'task-time';

    // Append the task item and time allocation to the list item
    listItem.appendChild(taskItem);
    listItem.appendChild(timeElement);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    // Add event listener to the delete button
    deleteBtn.addEventListener('click', function() {
      taskList.removeChild(listItem);
    });

    // Append the delete button to the delete button container
    deleteBtnContainer.appendChild(deleteBtn);

    // Clear the input fields
    taskInput.value = '';
    timeInput.value = '';
  }
}

