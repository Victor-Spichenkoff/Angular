import { Component, input, output } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { Card } from '../../../../shared/components/card/card'

@Component({
    imports: [FormsModule, Card],
    selector: 'app-todo',
    styles: ``,
    templateUrl: './todo.html',
})
export class TodoItem {
    todo = input.required<Todo>()
    toggleTodoEvent = output<string>()
}
