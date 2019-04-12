class TodoModel {
    constructor({ id, name, done }) {
        this.id = id
        this.name = name
        this.done = done
    }

    update(name, done) {
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
        this.todos.push(todoModel)
        return todo
    },

    async update(id, done) {
        const target = this.todos.find(todo => todo.id === id)
        const todo = await fetch(`/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ name: target.name, done })
        }).then(response => response.json())
        target.update(todo.name, todo.done)
        return target
    },

    async delete(id) {
        const index = this.todos.findIndex(todo => todo.id === id)
        await fetch(`/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(response => response.json())
        this.todos.splice(index, 1)
    }
}
