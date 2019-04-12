import TodoCollection from '../models/TodoModel.js'
import Todo from '../views/Todo.js'

export default {
    views: [],

    async render() {
        const todos = await TodoCollection.read()
        this.views = todos.map(todo => {
            const view = new Todo(todo)
            view.mount()
            return view
        })
    },
}
