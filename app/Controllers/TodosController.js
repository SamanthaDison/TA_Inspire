import { todosService } from "../Services/TodosService.js";
import { ProxyState } from "../AppState.js";

export class TodosController {
    constructor() {
        console.log('todos controller');
    }

    showTodos() {
        console.log('show todos')
        let todos = document.getElementById('todos')
        todos.classList.toggle("todos-display")
    }
}