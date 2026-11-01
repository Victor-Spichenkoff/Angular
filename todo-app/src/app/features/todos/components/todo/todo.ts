import { Component, input } from '@angular/core'

@Component({
    imports: [],
    selector: 'app-todo',
    styles: ``,
    templateUrl: './todo.html',
})
export class TodoItem {
    todo = input.required<Todo>()
    // TODO: fazer o emit para toggle
}
