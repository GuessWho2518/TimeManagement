import "./styles/styles.css"
import { ToDoModel } from "./components/ToDoModel"
import { todos } from "./utils/constants"

const contentElement = document.querySelector('.content') as HTMLElement

const itemTemplate = document.querySelector('#todo-item-template') as HTMLTemplateElement;
const formTemplate = document.querySelector('#todo-form-template') as HTMLTemplateElement;

const button = document.querySelector('.todo-form__submit-btn');
const todomodel = new ToDoModel();
button.addEventListener('click', function () {
    todomodel.completingTodo(10)
})

setInterval(() => {
    console.log(todomodel.todos)
}, 5000)