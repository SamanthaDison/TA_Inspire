import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { Todo } from "../Models/Todo.js";


class TodosService {
    // 
    async completeTodo(todoId) {
        const user = ProxyState.user
        const todo = ProxyState.todos.find(t => t.id == todoId)
        todo.completed = !todo.completed
        const res = await api.put(`${user.name}/todos/${todoId}`, todo)
        // const todoIndex = ProxyState.todos.findIndex(t => t.id == todoId)
        // ProxyState.todos.splice(todoIndex, 1, new Todo(res.data))
        ProxyState.todos = ProxyState.todos
        this.getAllTodos()
    }

    async getAllTodos() {
        const user = ProxyState.user
        const res = await api.get(`${user.name}/todos`)
        console.log('getting todos', res.data)
        ProxyState.todos = res.data.map(t => new Todo(t))
    }
    async createTodo(newTodo) {
        const user = ProxyState.user
        const res = await api.post(`${user.name}/todos`, newTodo)
        console.log('new todo', res.data);
        let createdTodo = new Todo(res.data)
        ProxyState.todos = [createdTodo, ...ProxyState.todos]
    }

    async deleteTodo(todoId) {
        const user = ProxyState.user
        const res = await api.delete(`${user.name}/todos/${todoId}`)
        console.log(res.data)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != todoId)
    }
}

export const todosService = new TodosService()