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

    async create(name) {
        const todo = await fetch('/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ name })
        }).then(response => response.json())
        const todoModel = new TodoModel({ ...todo })
        console.log(todoModel)
        this.todos.push(todoModel)
        return todo
    }
}
