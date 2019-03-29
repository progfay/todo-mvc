import TodoController from '../controllers/TodoController.js'

const sanitaize = (str) => (
  (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
)

export default class Todo {
  constructor({ name, id, done })  {
    this.parent = document.querySelector('.todos')
    this.name = name
    this.element = document.createElement('li')
    this.element.className = 'todo-item'
    this.element.innerHTML = `
      <label class="todo-toggle__container">
        <input
          data-todo-id="${id}"
          type="checkbox"
          class="todo-toggle"
          value="checked"
          ${done && 'checked' }>
        <span class="todo-toggle__checkmark"></span>
      </label>
      <div class="todo-name">${sanitaize(name)}</div>
      <div data-todo-id="${id}" class="todo-remove-button">x</div>
    `
  }

  mount() {
    this.parent.appendChild(this.element)
  }
}