// NOTE sorry for this note sam lol... need to have a display none on the id for my todos and on my onclick get elements and add style.display = "block"
export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get Template() {
    return ` <div class="d-flex justify-content-between align-items-baseline todo-item ">
                <i class="hoverable mdi mdi-checkbox-${this.completed ? 'marked' : 'blank-outline'}"
                  onclick="app.todosController.completeTodo('${this.id}')"></i>
                <p class="px-2">${this.description}</p>
                <div class="dropdown">
                  <div class="dropdown-toggle selectable text-end" data-bs-toggle="dropdown" aria-expanded="false"
                    id="todoDropdown" title="todo">
                    <span class="todo-menu hoverable">...</span>
                  </div>
                  <div class="dropdown-menu p-0" aria-labelledby="todoDropdown">
                    <div class="hoverable selectable" onclick="app.todosController.deleteTodo('${this.id}')">
                      Delete
                    </div>
                  </div>
                </div>
              </div>
        `
  }
}

