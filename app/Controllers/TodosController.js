import { todosService } from "../Services/TodosService.js";
import { ProxyState } from "../AppState.js";

// TODO for draw todos function... need to check if array.length >0 THEN run draw...using same id
export class TodosController {
    constructor() {
        console.log('todos controller');
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

    }
}