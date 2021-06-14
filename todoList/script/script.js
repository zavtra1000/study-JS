'use strict';

const todoControl = document.querySelector('.todo - control'),
    headerInput = document.querySelector('.header - input'),
    todoList = document.querySelector('.todo - list'),
    todoCompleted = document.querySelector('.todo - completed');

const todoData = [];

const render = function(){

    todoList.textContent = '';
    todoCompleted.textContent = '';

    toDoData.forEach(function(item){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        
        li.innerHTML = '<span class="text-todo">' +  item.value +'</span>';
            '<div class="todo-buttons">' +
              '<button class="todo-remove"></button>' +
              '<button class="todo-complete"></button>' +
              "</div>";

              if(item.completed) {
                  todoCompleted.append(li);
              } else {
                  todoList.append(li);
              }

              const btnTodoComplete = li.querySelector('.todo-comlete ');
              btnTodoComplete.addEventListener("click", function () {
                item.completed = !item.completed;
                render();
              });

              todoList.append(li);
    });
};

todoControl.addEventListener('submit', function(event){
    event.preventDefault();

    const newToDo = {
      value: headerInput.value,
      completed: false,
    };

    todoData.push(newToDo);

    render();
});