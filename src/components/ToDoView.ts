export interface IView{
    createElement(tag: string, className: string): HTMLElement;
    getElement(className: string);
}

export class ToDoView implements IView{
    constructor(){
        this.app = this.getElement(todos__list);


    };
    createElement(tag: string, className: string){
        const element = document.createElement(tag)
        if(className) element.classList.add(className)
        return element
    };

    getElement(className: string){
        const element = document.querySelector(`.${className}`);
        return element;
    };
}