import "./styles/styles.css"
import { ToDoController } from "./components/ToDoController"
import { ToDoModel } from "./components/ToDoModel"
import { ToDoView } from "./components/ToDoView"

const contentElement = document.querySelector('.content') as HTMLElement

const itemTemplate = document.querySelector('#todo-item-template') as HTMLTemplateElement;
const formTemplate = document.querySelector('#todo-form-template') as HTMLTemplateElement;

const addButton = document.querySelector('.todo-form__submit-btn');
const todoModel = new ToDoModel();
const todoView = new ToDoView();

const app = new ToDoController(todoModel, todoView)