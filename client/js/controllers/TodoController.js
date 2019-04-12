import TodoCollection from '../models/TodoModel.js'
import Todo from '../views/Todo.js'
import TodoForm from '../views/TodoForm.js'

export default {
    views: [],

    async create(name) {
        const todo = await TodoCollection.create(name)
        const view = new Todo(todo)
        view.mount()
    },

    async render() {
        const todos = await TodoCollection.read()
        this.views = todos.map(todo => {
            const view = new Todo(todo)
            view.mount()
            return view
        })
        const form = new TodoForm()
        form.mount()
    },
}
