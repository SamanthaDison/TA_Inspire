// NOTE sorry for this note sam lol... need to have a display none on the id for my todos and on my onclick get elements and add style.display = "block"
export class Todo {
    constructor(data) {
        this.id = data.id
        this.isComplete = data.complete
        this.description = data.description
    }
}