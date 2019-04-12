class TodoModel {
    constructor({ id, name, done }) {
        this.id = id
        this.name = name
        this.done = done
    }
}

export default {
    todos: [],

    async read() {
        const resp = await fetch('/todos').then((res) => res.json())
        this.todos = resp.todos.map((todo) => {
            return new TodoModel(todo)
        })
        return this.todos
    },

    create(name) {
        const todo = new TodoModel({ id: 0, name })
        this.todos.push(todo)
        return todo
    }
}
