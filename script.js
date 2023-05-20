let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

let createTodoSection = function(task){
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    label.innerText = task;
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
}

let addNewTask = function(event){
    event.preventDefault();
    let listItem = createTodoSection(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = '';

    bindIncompleteTask(listItem, completeTask);
}

let completeTask = function(){
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);
    completeUl.appendChild(listItem);

    let checkbox = listItem.querySelector('input[type = "checkbox"]');
    checkbox.remove();

    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function(){
    let listItem = this.parentNode;
    listItem.remove();
}

let bindIncompleteTask = function(taskItem, checkboxClicked){
    let checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxClicked;
}

let bindCompleteItems = function(taskItem, deleteBtnClicked){
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteBtnClicked;
}

form.addEventListener('submit', addNewTask);