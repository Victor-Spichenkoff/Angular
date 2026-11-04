import { Component, computed, effect, inject, input, output, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Card } from '../../../../shared/components/card/card'
import { AppIcon } from '../../../../shared/components/app-icon/app-icon'
import { Input } from '../../../../shared/components/input/input'
import { TodoService } from '../../services/todo-service'
import { Toast } from '../../../../shared/components/toast/toast'

@Component({
    imports: [FormsModule, Card, AppIcon, Input],
    selector: 'app-todo',
    styles: ``,
    templateUrl: './todo.html',
})
export class TodoItem {
    todo = input.required<Todo>()
    todoService = inject(TodoService)
    toast = inject(Toast)
    toggleTodoEvent = output<string>()
    // states
    isEdit = signal(false)
    // todoNewName = signal(() => this.todo().label)
    todoNewName = signal('')
    constructor() {
        // effect(() => this.todoNewName = this.todo().label, this.todo())
    }

    ngOnInit(): void {
        this.todoNewName.set(this.todo().label)
    }

    toggleEdit() {
        this.isEdit.update((current) => !current)
    }

    removeTodo() {
        this.toast.error("Apagado")
        this.todoService.removeTodoById(this.todo().id)
    }

    saveEdit() {
        this.toast.info("Editado")
        this.todoService.changeTodoLabel(this.todo().id, this.todoNewName())
        this.toggleEdit()
    }
    cancelEdit() {
        this.todoNewName.set(this.todo().label)
        this.toggleEdit()
    }
}
