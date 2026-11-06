import { Component, computed, inject, input, signal } from '@angular/core'
import { TodoService } from '../../services/todo-service'
import { TodoItem } from '../../components/todo/todo'
import { CardInput } from '../../components/card-input/card-input'

@Component({
    imports: [TodoItem, CardInput],
    selector: 'app-todos-detail-page',
    styles: ``,
    templateUrl: './todos-detail-page.html',
})
export class TodosDetailPage {
    groupId = input.required<string>()
    todosService = inject(TodoService)

    newLabel = signal('')

    allTodos = computed(() => this.todosService.getTodosByGroupId(this.groupId()))

    toggleTodo(todoId: string) {
        this.todosService.toggleTodo(todoId)
    }

    addTodo(label?: string) {
        if (label)
            this.todosService.addTodo(this.groupId(), label)
        else
            // se não mandar, resolvo internamente
            this.todosService.addTodo(this.groupId(), this.newLabel())
        this.newLabel.set('')
    }

}
