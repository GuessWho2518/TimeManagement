import "./styles/styles.css"
import { Item } from './components/Item'
import { getTasksData } from './components/api'
import { todos } from './utils/constants'
/**
 * https://www.figma.com/design/IrKwKS9VO2dXIPIeUo95uj/coolicons-%7C-Free-Iconset-(Community)?node-id=17102-2265&t=TYjjzY9ot6a0P1Xi-0
 * хранить массив тасок в new map(коллекция)
 * хранить таски в localStorage
 */

const contentElement = document.querySelector('.todos__list')
const template = document.querySelector('#todo-item-template') as HTMLTemplateElement

todos.forEach(item => {
    const todoItem = new Item(template);
    const itemElement = todoItem.render(item);
    contentElement.prepend(itemElement);
})

