import { Component, input, output, signal } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { Card } from '../../../../shared/components/card/card'
import { AppIcon } from '../../../../shared/components/app-icon/app-icon'
import { Input } from '../../../../shared/components/input/input'

@Component({
    imports: [FormsModule, Card, AppIcon, Input],
    selector: 'app-todo',
    styles: ``,
    templateUrl: './todo.html',
})
export class TodoItem {
    // states
    isEdit = signal(false)
    todoNewName = signal('')

    todo = input.required<Todo>()
    toggleTodoEvent = output<string>()

    toggleEdit() { this.isEdit.update((current) => !current) }
}
