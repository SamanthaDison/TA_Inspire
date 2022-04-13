import { todosService } from "../Services/TodosService.js";
import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";

// TODO for draw todos function... need to check if array.length >0 THEN run draw...using same id

function _drawTodos() {
    let todos = ProxyState.todos
    let completedTodos = ProxyState.todos.filter(t => t.completed == true)
    if (todos.length > 0) {
        document.getElementById('todo-form').style.display = "block";
        document.getElementById('todo-count').style.display = "block";
        document.getElementById('completed').innerText = completedTodos.length.toString()
        document.getElementById('total').innerText = todos.length.toString()
        let template = ''
        todos.forEach(t => template += t.Template)
        document.getElementById('todo-list').innerHTML = template
    } else {
        document.getElementById('todo-form').style.display = "none";
        document.getElementById('todo-list').innerHTML = `
            <p class="m-0 pt-4">Get Motivated!</p>
              <p class="m-0 pb-2">Add a todo</p>
              <button onclick="app.todosController.showTodoForm()" class="todo-button" id="todo-button">New
                todo</button>`
    }
}
export class TodosController {
    constructor() {
        console.log('todos controller');
        todosService.getAllTodos();
        ProxyState.on('todos', _drawTodos)
    }

    showTodos() {
        console.log('show todos')
        let todos = document.getElementById('todo-row')
        todos.classList.toggle("display-none")
    }

    showTodoForm() {
        console.log('todo form')
        document.getElementById('todo-form').style.display = "block";
        document.getElementById('todo-button').style.display = "none";
    }


    createTodo() {
        window.event.preventDefault()
        let form = window.event.target
        const newTodo = {
            description: form.description.value
        }
        console.log('creating', newTodo)
        todosService.createTodo(newTodo)
        form.reset()
    }

    async completeTodo(todoId) {
        try {
            console.log('complete this todo', todoId)
            await todosService.completeTodo(todoId)
        } catch (error) {
            Pop.toast(error)
        }
    }

    async deleteTodo(todoId) {
        try {
            if (await Pop.confirm("Would you like to delete this todo?")) {
                console.log('delete this todo', todoId)
                await todosService.deleteTodo(todoId)
            }
        } catch (error) {
            Pop.toast(error)
        }
    }
}