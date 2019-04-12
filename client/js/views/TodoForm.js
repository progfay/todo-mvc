import TodoController from '../controllers/TodoController.js'

class TodoForm {
    constructor() {
        this.elements = document.querySelector('.todo-form')
    }

    mount() {
        this.elements.addEventListener('submit', event => {
            event.preventDefault()
            const name = event.currentTarget.querySelector('.todo-form__input').value
            event.currentTarget.querySelector('.todo-form__input').value = ''
            TodoController.create(name)
        })
    }
}

export default TodoForm
