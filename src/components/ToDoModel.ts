export interface IToDoModel {
    todos: any[];
    addTodo(todo: ITodo): void;
    deleteTodo(id: number): void;
    completingTodo(id: number): void;
}

interface ITodo {
    id: number;
    text: string;
    completed: boolean;
}

export class ToDoModel implements IToDoModel {
    todos: ITodo[] = [{ id: 10, text: 'test1', completed: false }];
    private nextId: number = 1;

    addTodo(todo: Omit<ITodo, 'id'>): void {
        const newTodo: ITodo = {
            id: this.nextId++,
            ...todo
        }
        this.todos.push(newTodo)
    }
    deleteTodo(id: number): void {
        this.todos = this.todos.filter((todo) => todo.id !== id)
    }
    completingTodo(id: number): void {
        const todo = this.todos.find(todo => todo.id === id)
        if (todo) {
            todo.completed = !todo.completed;
        }
    }
}