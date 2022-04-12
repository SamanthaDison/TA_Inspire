import { api } from "./AxiosService.js";

class TodosService {

    async getAllTodos() {
        const res = await api.get('sammid/todos')
        console.log(res.data)
    }
    createTodo(newTodo) {
        throw new Error("Method not implemented.");
    }

}

export const todosService = new TodosService()