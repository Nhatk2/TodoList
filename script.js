//Selector
const TodoInput = document.querySelector(".todo-input")
const TodoBtn = document.querySelector(".todo-btn")
const TodoList = document.querySelector(".todo-list")
const selectList = document.querySelector('.select-list')



//Event Listeners
TodoBtn.addEventListener('click', addtodo);
TodoList.addEventListener('click', deleteCheck);
selectList.addEventListener('click', todoSelect);

//Functions
function addtodo(event) {
    //thoat khoi sk sau khi chay ko anh huong toi cac ptu khac
    event.preventDefault();
    //tao element todoDiv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //tao element todoLi
    const newtodo = document.createElement('li');
    newtodo.innerText = TodoInput.value;
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo);
    //Check mark btn
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('completed-btn')
    todoDiv.appendChild(completedButton)
    //Check track btn
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    //APPEND TO LIST
    TodoList.appendChild(todoDiv)
    //clear input vale
    TodoInput.value = '';
};
function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] == 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('fall')
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }
    if (item.classList[0] == 'completed-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}
function todoSelect(e) {
    const todos = TodoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}